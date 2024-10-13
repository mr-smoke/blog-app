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
