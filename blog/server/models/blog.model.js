const mongoose = require('mongoose');


const BlogSchema = new mongoose.Schema({
    
    blogPostTitle: {
        type: Text,
        required: [true, "Your blog must have a title"],
        minlength: [3, "Your post title must be at least 3 characters"],
        maxlength: [50, "Your post title can not exceed 50 characters"]
    },
    
    blogPostContent: {
        type: Text,
        required: [true, "Your blog post must have content"],
        minlength: [10, "Your post must be at least 10 characters"],
    },

    blogPostDescription: {
        type: Text,
        required: [true, "Please give a short description of you blog"],
        minlength: [5, "Your description must be at least 5 characters"],
        maxlength: [200, "Your description must not exceed 250 characters"]
    },

    userCreatingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


}, { timestamps: true });


mongoose.exports = mongoose.model('Blog', BlogSchema);