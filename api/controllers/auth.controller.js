import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
      const user = [username, name, hashedPassword, gender, image];
      db.query(query, [user], (error, results) => {
        if (error) {
          return res.status(400).json("User not created, please try again");
        }
        return res.status(201).json("User created");
      });
    }
  });
};

export const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json("Please fill all fields");
  }

  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], (error, results) => {
    if (error) {
      return res.status(400).json("An error occurred when login");
    }
    if (results.length === 0) {
      return res.status(400).json("Username does not exist");
    }

    const user = results[0];

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json("Invalid password");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const { password: userPassword, ...userWithoutPassword } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(userWithoutPassword);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("token", { sameSite: "none", secure: true })
    .status(200)
    .json("Logged out");
};
