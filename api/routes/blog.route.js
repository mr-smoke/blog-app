import express from "express";
import {
  addBlog,
  deleteBlog,
  getBlog,
  getBlogs,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.delete("/:id", deleteBlog);
router.post("/", addBlog);

export default router;
