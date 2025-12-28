const express = require("express");
const router = express.Router();

const {
  getHome,
  getNewPostForm,
  createPost,
  getSinglePost,
  getEditPostForm,
  updatePost,
  deletePost,
} = require("../controllers/postController");

// Home (list posts)
router.get("/", getHome);

// New post form
router.get("/posts/new", getNewPostForm);

// Create post
router.post("/posts", createPost);

// Show single post  ✅ همین route ارور تو رو حل می‌کنه
router.get("/posts/:id", getSinglePost);

// Edit post form
router.get("/posts/:id/edit", getEditPostForm);

// Update post
router.put("/posts/:id", updatePost);

// Delete post
router.delete("/posts/:id", deletePost);

module.exports = router;
