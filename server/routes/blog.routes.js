const BlogController = require('../controllers/blog.controller');

module.exports = (app) => {
    app.get('/api/blogs', BlogController.getAllBlogs);
    app.post('/api/blogs', BlogController.addNewBlog);
    app.get('/api/blogs/:id', BlogController.getOneBlog);
    app.put('/api/blogs/:id', BlogController.updateBlog);
    app.delete('/api/blogs/:id', BlogController.deleteBlog)
}

