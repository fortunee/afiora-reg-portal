import UsersCtrl from './../controllers/users.controller';
import Authentication from './../middlewares/authentication';

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
        .get(Authentication.verifyToken, Authentication.verifyAdmin, UsersCtrl.getAllUsers);
    
    /**
     * Gets, Updates & Deletes
     * a single freaking product seller!
     */
    router.route('/users/:id')
        .get(Authentication.verifyToken, UsersCtrl.getUser)
        .put(Authentication.verifyToken, UsersCtrl.updateUser)
        .delete(Authentication.verifyToken, UsersCtrl.deleteUser);

    /**
     * Verify user
     */
    router.route('/users/verify/:token')
        .get(UsersCtrl.verifyEmail)
}

export default usersRoutes;