import express from "express";
import { getBlog, getBlogs } from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);

export default router;
