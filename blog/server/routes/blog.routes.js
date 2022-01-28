const BlogController = require('../controllers/blog.controller');

module.exports = (app) => {
    app.get('/api', BlogController.index);
}