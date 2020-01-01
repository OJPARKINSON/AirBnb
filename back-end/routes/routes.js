import { addNewUser, 
    addNewProperty, 
    getProperties, 
    getProperty, 
    newStay, 
    getUser,
    securityMiddleware,
    userLogin
} from '../controllers/controllers';

const routes = (app) => {
    app.route('/login')
        .post(userLogin)

    app.route('/user')
        .get(securityMiddleware, getUser)
        .post(addNewUser);
    
    app.route('/property')
        .get(getProperty)
        .post(securityMiddleware, addNewProperty);
    
    app.route('/properties')
        .get(getProperties);

    app.route('/stay')
        .post(securityMiddleware, newStay);

}

export default routes;