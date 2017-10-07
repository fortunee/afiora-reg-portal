import UsersCtrl from './../controllers/users.controller';

/**
 * @todo Pull in and use middlewares and controllers
 * @param {object} router 
 */
const usersRoutes = (router) => {
    // Creating a freaking product seller
    router.route('/users/create')
        .post(UsersCtrl.createUser);

    // Getting all product sellers
    router.route('/users/all')
        .get(UsersCtrl.getAllUsers);
    
    /**
     * Gets, Updates & Deletes
     * a single freaking product seller!
     */
    router.route('/users/:id')
        .get(UsersCtrl.getUser)
        .put(UsersCtrl.updateUser)
        .delete(UsersCtrl.deleteUser);
}

export default usersRoutes;