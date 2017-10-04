import { UsersModel } from './../models';

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
                
            }).catch(err => console.error(err))
        })
        res.send({ message: 'Creating a product seller' });
    }

    getUser(req, res) {
        res.send({ message: 'Get a single seller'});
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
