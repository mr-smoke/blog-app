import express from "express";
import {
  addBlog,
  deleteBlog,
  editBlog,
  getBlog,
  getBlogs,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.delete("/:id", deleteBlog);
router.post("/", addBlog);
router.put("/:id", editBlog);

export default router;
