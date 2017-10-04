const usersRoute = (router) => {
    // Creating a freaking product seller
    router.route('/users/create')
        .post((req, res) => {
            res.send({ message: 'Creating a product seller' });
        });

    // Getting all product sellers
    router.route('/users/all')
        .post((req, res) => {
            res.send({ message: 'Getting all product sellers' });
        });
}