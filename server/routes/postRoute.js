const express = require('express')
const{ getAll, createPost, getOne, updatePost, deletePost } = require('../controller/postController')
const router = express.Router()

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

module.exports = router

