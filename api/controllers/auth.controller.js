import { db } from "../db.js";
import bcrypt from "bcrypt";

export const signup = (req, res) => {
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [req.body.username], (error, results) => {
    if (error) {
      return res.status(400).json("An error occurred when signup");
    }
    if (results.length > 0) {
      return res.status(400).json("Username already exists");
    } else {
      const { name, username, password, confirmPassword, gender } = req.body;

      if (!name || !username || !password || !confirmPassword || !gender) {
        return res.status(400).json("Please fill all fields");
      }

      if (password !== confirmPassword) {
        return res.status(400).json("Passwords do not match");
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const profilePicMan =
        "https://avatar.iran.liara.run/public/boy?username=" + username;
      const profilePicWoman =
        "https://avatar.iran.liara.run/public/girl?username=" + username;

      const image = gender === "male" ? profilePicMan : profilePicWoman;

      const query =
        "INSERT INTO users(`username`, `name`, `password`, `gender`, `image`)  VALUES (?)";
      const user = [name, username, hashedPassword, gender, image];
      db.query(query, [user], (error, results) => {
        if (error) {
          return res.status(400).json("User not created, please try again");
        }
        return res.status(201).json("User created");
      });
    }
  });
};