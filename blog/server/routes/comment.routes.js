const CommentController = require('../controllers/comment.contoller');

module.exports = (app) => {
    app.get('/api/comments', CommentController.getAllComments);
    app.post('/api/comments', CommentController.createComment);
}