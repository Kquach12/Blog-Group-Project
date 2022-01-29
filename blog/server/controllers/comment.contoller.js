const Comment = require('../models/comment.model');
const jwt = require('jsonwebtoken');
const Blog = require('../models/blog.model');
const User = require('../models/user.model');

module.exports = {

    createComment: (req, res) => {
        // making comment using body from post
        const comment = new Comment(req.body);
        // decoding the cookie to get the user_id
        const decodedJWT = jwt.decode(req.cookies.usertoken,
            { complete: true });
        // adding user_id to the comment
        comment.userId = decodedJWT.payload.user_id;
        // add comment to the collection
        Comment.create(comment)
            .then((newComment) => {
                console.log(`New Comment: ${newComment}`);
                // updating the blog collection to include the new comment._id
                Blog.findByIdAndUpdate(
                    newComment.blogId,
                    // this is the data we are updating
                    {   //taking the new comment id and adding it to the comments array in the blog model
                        $push: { comments: newComment._id }
                    },
                    {
                        new: true, // use the new version not the original  
                        useFindAndModify: false // mongoose replaces the entire object by default.  Override that
                    }, 
                )
                
                // specify which info to keep
                .populate({
                    path: "comments",
                    model: "Comment",
                        populate: {
                            path: "userId",
                            model: "User",
                            select: "firstName lastName email"
                        },
                        populate: {
                            path: "blogId",
                            model: "Blog",
                        }
                })
                                
                .then((updatedBlog) => {
                    console.log(`Updated Blog: ${updatedBlog}`);
                    res.json(updatedBlog);
                })
                .catch((err) => {
                    console.log("Error in add comment to blog");
                    console.log(err);
                    res.status(400).json(err);
                });
            })
            .catch((err) => {
                console.log("Error in creating comment");
                console.log(err);
                res.status(400).json(err);
            });
            // need to update user array and blog array.  This might not be the correct place or way
            
    },

    getAllComments: (req, res) => {
        Comment.find()
            .populate("blogId")
            .then((allComments) => {
                console.log(allComments);
                res.json(allComments);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
}