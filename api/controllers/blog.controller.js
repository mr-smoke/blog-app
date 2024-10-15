import { db } from "../db.js";
import jwt from "jsonwebtoken";
export const getBlogs = async (req, res) => {
  const query = req.query.category
    ? "SELECT * FROM blogs WHERE category = ? ORDER BY date DESC"
    : "SELECT * FROM blogs ORDER BY date DESC";

  db.query(query, [req.query.category], (error, result) => {
    if (error) {
      res.status(500).json("Internal server error");
    }
    return res.status(200).json(result);
  });
};

export const getBlog = async (req, res) => {
  const query =
    "SELECT b.id, `username`, `title`, `content`, b.image as blogImg, u.image as userImg, `category`, `date`, `userid` FROM users u JOIN blogs b ON u.id = b.userid WHERE b.id = ?";

  db.query(query, [req.params.id], (error, result) => {
    if (error) {
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

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(401).json("Token is not valid");
    }

    const query = "DELETE FROM blogs WHERE id = ? AND userid = ?";
    db.query(query, [req.params.id, user.id], (error, result) => {
      if (error) {
        return res.status(500).json("Internal server error");
      }
      return res.status(200).json("Blog deleted successfully");
    });
  });
};

export const addBlog = async (req, res) => {
  const { title, content, category, image, date } = req.body;

  if (!title || !content || !category || !image) {
    return res.status(400).json("Please fill in all fields");
  }

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json("Unauthorized");
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(401).json("Token is not valid");
    }

    const query =
      "INSERT INTO blogs (`title`, `content`, `category`, `image`, `date`, `userid`) VALUES (?)";
    const values = [title, content, category, image, date, user.id];
    db.query(query, [values], (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json("Internal server error");
      }
      return res.status(200).json("Blog added successfully");
    });
  });
};

export const editBlog = async (req, res) => {
  const { title, content, category, image } = req.body;

  if (!title || !content || !category || !image) {
    return res.status(400).json("Please fill in all fields");
  }

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json("Unauthorized");
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(401).json("Token is not valid");
    }

    const query =
      "UPDATE blogs SET `title` = ?, `content` = ?, `category` = ?, `image` = ? WHERE `id` = ? AND `userid` = ?";
    const values = [title, content, category, image, req.params.id, user.id];
    db.query(query, values, (error, result) => {
      if (error) {
        return res.status(500).json("Internal server error");
      }
      return res.status(200).json("Blog updated successfully");
    });
  });
};
