import jwt from 'jsonwebtoken';
import { User } from './../models';
import ValidatePassword from './../helpers/passwordValidator';

const secret = process.env.SECRET || 'AGU NECHE MBA';

function  _userAttributes(user) {
    return {
        businessName: user.businessName,
        email: user.email,
        username: user.username,
        productCategories: user.productCategories,
        phone: user.phone,
        address: user.address
    }
}

class UsersCtrl {
    createUser(req, res) {
        // Check if User exists
        User.findOne(
            {
                $or: [
                    { email: req.body.email },
                    { username: req.body.username }
                ]
            }
        )
        .then((existingUser) => {
            if(existingUser) {
                return res.status(409)
                    .send({
                        message: 'User with the email/username already exists'
                    });
            }
            // @todo JWT and shoot an email to the user

            // Hash user's password
            req.body.password = ValidatePassword.hashPassword(req.body.password);
            // Create the freaking User
            User.create(req.body).then((user) => {
                const token = jwt.sign({
                    /* eslint-disable no-underscore-dangle*/
                    userId: user._id,
                    username: user.username,
                    verifiedUser: user.isVerified
                  }, secret, { expiresIn: '60 minutes' });

                let userAttribute = _userAttributes(user);
                return res.status(201).send({ message: 'User created successfully', userAttribute, token })
            }).catch(err => console.error(err))
        }).catch(err => console.error(err))
    }

    getUser(req, res) {
        let queryParam = req.params.id;
        User.find(queryParam).then((user) => {
            if (!user) {
                return res.status(404).send({ message: 'User not found'});
            }
            let userAttribute = _userAttributes(user[0]);
            return res.status(200).send({user: userAttribute});
        }).catch(err => console.error(err));
    }

    getAllUsers(req, res) {
        User.find().then((users) => {
            return res.send({ users });
        })
    }

    updateUser(req, res) {
        User.findById({ _id: req.params.id }).then((user) => {
            if(!user) {
                return res.status(404).send({ message: 'User not found!'});
            }
            
            // Hash any updated password
            const hashedPassword = (req.body.password) ? ValidatePassword.hashPassword(req.body.password) : user.password;
           
            user.businessName = req.body.businessName || user.businessName;
            user.email = req.body.email || user.email;
            user.phone = req.body.phone || user.phone;
            user.username = req.body.username || user.username;
            user.password = hashedPassword
            user.productCategories = req.body.productCategories || user.productCategories;
            user.address = req.body.address || user.address;

            user.save().then((updatedUser) => {
                const token = jwt.sign({
                    /* eslint-disable no-underscore-dangle*/
                    userId: updatedUser._id,
                    username: updatedUser.username,
                    verifiedUser: updatedUser.isVerified
                  }, secret, { expiresIn: '120 minutes' });

                let user = _userAttributes(updatedUser)
                return res.status(200).send({ message: 'User updated!', user, token });
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));
    }

    deleteUser(req, res) {
        User.findByIdAndRemove(req.params.id).then((user) => {
            if (user) {
              return res.status(200).send({ message: 'User successfully deleted' });
            }
        
            return res.status(404).send({ message: 'User does not exist. Cannot delete' });
          }).catch((error) => {
            res.status(400).send({ message: 'Unable to delete user', error: error.message });
          });
    }
}

export default new UsersCtrl();
