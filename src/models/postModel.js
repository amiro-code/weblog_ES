const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "..", "data", "posts.json");

// خواندن پست‌ها
function readPosts() {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
}

// ذخیره پست‌ها
function writePosts(posts) {
  fs.writeFileSync(dbPath, JSON.stringify(posts, null, 2));
}

// ساخت id ساده
function generateId() {
  return Date.now().toString();
}

exports.getAll = () => {
  return readPosts();
};

exports.getById = (id) => {
  const posts = readPosts();
  return posts.find((p) => p.id === id);
};

exports.create = ({ title, content }) => {
  const posts = readPosts();

  const newPost = {
    id: generateId(),
    title: title || "بدون عنوان",
    content: content || "",
  };

  posts.unshift(newPost);
  writePosts(posts);
};

exports.update = (id, { title, content }) => {
  const posts = readPosts();

  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return;

  posts[index].title = title;
  posts[index].content = content;

  writePosts(posts);
};

exports.remove = (id) => {
  const posts = readPosts();
  const filtered = posts.filter((p) => p.id !== id);
  writePosts(filtered);
};
