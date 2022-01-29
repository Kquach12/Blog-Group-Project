const userController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.post('/api/user/register', userController.register);
    app.post('/api/user/login', userController.login);
    app.post('/api/user/logout', authenticate, userController.logout);
    app.get('/api/user/getLoggedInUser', authenticate, userController.getLoggedInUser);
    app.delete('/api/user/:id', authenticate, userController.deleteOneUser);
    
    // FIXME: remove getall from final code!
    app.get('/api/users/getAll', userController.getAll);

}
