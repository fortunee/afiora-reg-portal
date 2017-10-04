/**
 * @todo Pull in and use middlewares and controllers
 * @param {object} router 
 */
const usersRoutes = (router) => {
    // Creating a freaking product seller
    router.route('/users/create')
        .post((req, res) => {
            res.send({ message: 'Creating a product seller' });
        });

    // Getting all product sellers
    router.route('/users/all')
        .get((req, res) => {
            res.send({ message: 'Getting all product sellers' });
        });
    
    /**
     * Gets, Updates & Deletes
     * a single freaking product seller!
     */
    router.route('/user/:id')
        .get((req, res) => {
            res.send({ message: 'Get a single seller'});
        })
        .put((req, res) => {
            res.send({ message: 'Update a single seller'});
        })
        .delete((req, res) => {
            res.send({ message: 'Delete a seller'});
        });
}

export default usersRoutes;