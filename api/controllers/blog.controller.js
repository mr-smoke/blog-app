import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getBlogs = async (req, res) => {
  const query = req.query.category
    ? "SELECT * FROM blogs WHERE category = ?"
    : "SELECT * FROM blogs";

  db.query(query, [req.query.category], (err, result) => {
    if (err) {
      res.status(500).json("Internal server error");
    }
    return res.status(200).json(result);
  });
};

export const getBlog = async (req, res) => {
  const query =
    "SELECT b.id, `username`, `title`, `content`, b.image as blogImg, u.image as userImg, `category`, `date`, `userid` FROM users u JOIN blogs b ON u.id = b.userid WHERE b.id = ?";

  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).json("Internal server error");
    }
    return res.status(200).json(result[0]);
  });
};

export const deleteBlog = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json("Unauthorized");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json("Token is not valid");
    }

    const query = "DELETE FROM blogs WHERE id = ? AND userid = ?";
    db.query(query, [req.params.id, user.id], (err, result) => {
      if (err) {
        return res.status(500).json("Internal server error");
      }
      return res.status(200).json("Blog deleted successfully");
    });
  });
};
