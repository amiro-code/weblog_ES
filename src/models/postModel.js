const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "data", "posts.json");

function readData() {
  try {
    const raw = fs.readFileSync(dataPath, "utf-8");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeData(posts) {
  fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), "utf-8");
}

class Post {
  static getAll() {
    const posts = readData();
    // جدیدترین بالا
    return posts.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
  }

  static getById(id) {
    const posts = readData();
    return posts.find((p) => p.id === id);
  }

  static create({ title, content }) {
    const posts = readData();
    const newPost = {
      id: Date.now().toString(),
      title: (title || "").trim(),
      content: (content || "").trim(),
      createdAt: Date.now().toString(),
    };
    posts.push(newPost);
    writeData(posts);
    return newPost;
  }

  static update(id, { title, content }) {
    const posts = readData();
    const idx = posts.findIndex((p) => p.id === id);
    if (idx === -1) return false;

    posts[idx].title = (title || "").trim();
    posts[idx].content = (content || "").trim();
    writeData(posts);
    return true;
  }

  static delete(id) {
    const posts = readData();
    const filtered = posts.filter((p) => p.id !== id);
    if (filtered.length === posts.length) return false;
    writeData(filtered);
    return true;
  }
}

module.exports = Post;
