import {
  addNewUser,
  addNewProperty,
  getProperties,
  getProperty,
  newStay,
  getUser,
  securityMiddleware,
  userLogin,
  getProfile,
} from '../controllers/controllers';

const routes = app => {
  app.route('/login').post(userLogin);

  app.route('/user').post(securityMiddleware, getUser);

  app.route('/newUser').post(addNewUser);

  app.route('/profile').get(securityMiddleware, getProfile);

  app
    .route('/property')
    .get(getProperty)
    .post(securityMiddleware, addNewProperty);

  app.route('/properties').get(getProperties);

  app.route('/stay').post(securityMiddleware, newStay);
};

export default routes;
