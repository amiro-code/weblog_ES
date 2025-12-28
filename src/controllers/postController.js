const Post = require("../models/postModel");

// GET /
exports.getHome = (req, res) => {
  const posts = Post.getAll();
  res.render("index", { pageTitle: "WeblogES | Home", posts });
};

// GET /posts/new
exports.getNewPostForm = (req, res) => {
  res.render("posts/new", { pageTitle: "Create a Post" });
};

// POST /posts
exports.createPost = (req, res) => {
  const { title, content } = req.body;
  Post.create({ title, content });
  res.redirect("/");
};

// GET /posts/:id
exports.getSinglePost = (req, res) => {
  const post = Post.getById(req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.render("posts/show", { pageTitle: post.title, post });
};

// GET /posts/:id/edit
exports.getEditPostForm = (req, res) => {
  const post = Post.getById(req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.render("posts/edit", { pageTitle: "Edit Post", post });
};

// PUT /posts/:id
exports.updatePost = (req, res) => {
  const { title, content } = req.body;
  const updated = Post.update(req.params.id, { title, content });
  if (!updated) return res.status(404).send("Post not found");
  res.redirect(`/posts/${req.params.id}`);
};

// DELETE /posts/:id
exports.deletePost = (req, res) => {
  const deleted = Post.delete(req.params.id);
  if (!deleted) return res.status(404).send("Post not found");
  res.redirect("/");
};
