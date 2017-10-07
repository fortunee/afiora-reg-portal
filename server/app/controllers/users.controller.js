import { Users } from './../models';

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
    constructor() {

    }

    createUser(req, res) {
        // Check if User exists
        Users.findOne(
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
            // @todo hash password before saving to DB
            // Create the freaking User
            Users.create(req.body).then((user) => {
                let userAttribute = _userAttributes(user);
                return res.status(201).send({ message: 'User created successfully', userAttribute })
            }).catch(err => console.error(err))
        }).catch(err => console.error(err))
    }

    getUser(req, res) {
        let queryParam = req.params.id;
        Users.find(queryParam).then((user) => {
            if (!user) {
                return res.status(404).send({ message: 'User not found'});
            }
            let userAttribute = _userAttributes(user[0]);
            return res.status(200).send({user: userAttribute});
        }).catch(err => console.error(err));
    }

    getAllUsers(req, res) {
        Users.find().then((users) => {
            return res.send({ users });
        })
    }

    updateUser(req, res) {
        Users.findById({ _id: req.params.id }).then((user) => {
            if(!user) {
                return res.status(404).send({ message: 'User not found!'});
            }

            user.businessName = req.body.businessName || user.businessName;
            user.email = req.body.email || user.email;
            user.phone = req.body.phone || user.phone;
            user.username = req.body.username || user.username;
            user.password = req.body.password || user.password; //@todo Hash password
            user.productCategories = req.body.productCategories || user.productCategories;
            user.address = req.body.address || user.address;

            user.save().then((updatedUser) => {
                let user = _userAttributes(updatedUser)
                return res.status(200).send({ message: 'User updated!', user });
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));
    }

    deleteUser(req, res) {
        Users.findByIdAndRemove(req.params.id).then((user) => {
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
