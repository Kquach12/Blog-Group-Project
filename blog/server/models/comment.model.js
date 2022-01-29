const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({

    commentText: {
        type: String,
        required: [true, "Content is required to post a comment"],
        minlength: [3, "Comment must exceed 3 characters"]
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }
})