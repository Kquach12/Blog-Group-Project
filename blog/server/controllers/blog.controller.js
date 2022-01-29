const Blog = require("../models/blog.model")

// same controller functions as in user controller, just written differently

const getAllBlogs = (req, res) => {
    Blog.find({})
        .then(allBlogs => res.json(allBlogs))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const getOneBlog = (req, res) => {
    Blog.findOne( {_id: req.params.id} )
        .then(oneBlog => res.json(oneBlog))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
}

const addNewBlog = (req, res) => {
    Blog.create(req.body)
        .then((newBlog) => {
            res.json(newBlog)
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
