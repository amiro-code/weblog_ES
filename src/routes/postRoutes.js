const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

// صفحه اصلی (لیست پست‌ها)
router.get("/", postController.getAllPosts);

// صفحه ساخت پست جدید
router.get("/posts/new", postController.showCreateForm);

// ساخت پست
router.post("/posts", postController.createPost);

// صفحه ویرایش
router.get("/posts/:id/edit", postController.showEditForm);

// آپدیت پست
router.put("/posts/:id", postController.updatePost);

// حذف پست
router.delete("/posts/:id", postController.deletePost);

module.exports = router;   // ⬅️ این خط خیلی مهمه
