import { UserModel } from './../models';

// console.log('This is user model', UserModel)

class UsersCtrl {
    constructor() {

    }

    createUser(req, res) {
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
