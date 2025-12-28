const postModel = require("../models/postModel");

// GET /
exports.getAllPosts = (req, res) => {
  const posts = postModel.getAll();
  res.render("index", { posts });
};

// GET /posts/new
exports.showCreateForm = (req, res) => {
  res.render("posts/new");
};

// POST /posts
exports.createPost = (req, res) => {
  const { title, content } = req.body;
  postModel.create({ title, content });
  res.redirect("/");
};

// GET /posts/:id/edit
exports.showEditForm = (req, res) => {
  const post = postModel.getById(req.params.id);
  if (!post) return res.send("پست پیدا نشد");
  res.render("posts/edit", { post });
};

// PUT /posts/:id
exports.updatePost = (req, res) => {
  const { title, content } = req.body;
  postModel.update(req.params.id, { title, content });
  res.redirect("/");
};

// DELETE /posts/:id
exports.deletePost = (req, res) => {
  postModel.remove(req.params.id);
  res.redirect("/");
};
