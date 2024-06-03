const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");

const app = express();

app.use(express.json());
app.use(cors());

// signup API
app.post("/signup", async (req, res) => {
  try {
    let existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send({ error: "Email already in use" });
    }
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.status(201).send(result);
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// login API
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      let user = await User.findOne({ email, password }).select("-password");
      if (user) {
        res.status(200).send({ user });
      } else {
        res.status(400).send({ error: "Invalid email or password" });
      }
    } else {
      res.status(400).send({ error: "Email and password are required" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});
