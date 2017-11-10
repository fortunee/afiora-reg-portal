import usersRoutes from './users.routes';

/**
 * Configure routes with router for
 * all future routes
 * @param {object} router
 */
const routes = (router) => {
    usersRoutes(router);
}

export default routes;
