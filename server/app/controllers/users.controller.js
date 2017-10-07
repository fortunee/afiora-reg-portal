import { UsersModel } from './../models';

function  _userAttributes(user) {
    return {
        businessName: user.businessName,
        email: user.email,
        username: user.username,
        productCatories: user.productCatories,
        phone: user.phone,
        address: user.address
    }
}

class UsersCtrl {
    constructor() {

    }

    createUser(req, res) {
        // Check if User exists
        UsersModel.findOne(
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
            UsersModel.create(req.body).then((user) => {
                let userAttribute = _userAttributes(user);
                return res.status(201).send({ message: 'User created successfully', userAttribute })
            }).catch(err => console.error(err))
        }).catch(err => console.error(err))
    }

    getUser(req, res) {
        let queryParam = req.params.id;
        UsersModel.find(queryParam).then((user) => {
            if (!user) {
                return res.status(404).send({ message: 'User not found'});
            }
            let userAttribute = _userAttributes(user[0]);
            return res.status(200).send({user: userAttribute});
        }).catch(err => console.error(err));
    }

    getAllUsers(req, res) {
        res.send({ message: 'Getting all product sellers' });
    }

    updateUser(req, res) {
        res.send({ message: 'Update a single seller'});
    }

    deleteUser(req, res) {
        res.send({ message: 'Delete a seller'});
    }
}

export default new UsersCtrl();
