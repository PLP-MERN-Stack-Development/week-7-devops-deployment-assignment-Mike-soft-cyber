const Post = require('../models/Post')

//get all Posts
exports.getAll = async (req, res) => {
    const posts = await Post.find().sort({dateCreated: -1})
    res.json(posts)
}

//create a post
exports.createPost = async (req, res) => {
    try {
        const post = await Post.create({...req.body});
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

//get one post
exports.getOne = async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.json(post)
}

//update a post
exports.updatePost = async (req, res) => {
    const {title, body} = req.body
    const update = await Post.findByIdAndUpdate(req.params.id, {title, body}, {new: true})
    res.json(update)
}
//delete a post
exports.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
    res.json({message: "Post Deleted"})
}
