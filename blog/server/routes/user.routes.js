const userController = require('../controllers/user.controller');
// TODO: need authenticate jwt.config

module.exports = (app) => {
    app.post('/api/user/register', userController.register);
    app.post('/api/user/login', userController.login);
    app.post('/api/user/logout', userController.logout);
    // TODO: delete one user
    // app.delete('/api/user/:id', userController.deleteOneUser);

    
    // FIXME: remove getall from final code!
    app.get('/api/users/getAll', userController.getAll);

}
