const Blog = require("../models/blog.model")
const jwt = require('jsonwebtoken'); 
const User = require('../models/user.model');

// same controller functions as in user controller, just written differently

const getAllBlogs = (req, res) => {
    Blog.find({})
        .populate({
            path: "userCreatingId",
            model: "User",
            select: "firstName lastName email"
        })
        .then(allBlogs => {
            res.json(allBlogs);
            console.log(`All Blogs: ${allBlogs}`);
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const getOneBlog = (req, res) => {
    Blog.findOne( {_id: req.params.id} )
        .populate ({
            path: "comments",
            model: "Comment",
            populate: {
                path: "createdBy",
                model: "User"
            }
        })
        .then(oneBlog => {
            console.log(`One BLOG::: ${oneBlog}`);
            res.json(oneBlog);
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const addNewBlog = (req, res) => {
    // create blog using the req.body from the post
    const blog = new Blog(req.body);
    // decoding the JWT for access to the userId
    const decodedJWT = jwt.decode(req.cookies.usertoken, 
        { complete: true });
    // adding user_id to the blog
    blog.userCreatingId = decodedJWT.payload.user_id;

    Blog.create(blog)
        // .populate("comments")
        .then((newBlog) => {
            User.findByIdAndUpdate(
                newBlog.userCreatingId,
                {
                    $push: { blogPostsCreated: newBlog._id }
                },
                {
                    new: true,
                    useFindAndModify: false
                },
            )
            .populate({
                path: "blogPostsCreated",
                model: "User",
                select: "firstName lastName email",                    
            })
            .then((updatedUser) => {
                console.log(`Updated user ${updatedUser}`);
                res.json(updatedUser);
            })
            .catch((err) => {
                console.log(`Error in adding blog id to user`);
                console.log(err);
                res.status(400).json(err);
            });            
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const updateBlog = (req, res) => {
    Blog.findOneAndUpdate( {_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then(updatedBlog => res.json(updatedBlog) )
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
}

const deleteBlog = (req, res) => {
    Blog.deleteOne( {_id: req.params.id} )
        .then(result => res.json(result) )
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}


module.exports = {
    getAllBlogs,
    getOneBlog,
    addNewBlog,
    updateBlog,
    deleteBlog,
}
