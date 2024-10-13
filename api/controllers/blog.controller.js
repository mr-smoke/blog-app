import { db } from "../db.js";

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
