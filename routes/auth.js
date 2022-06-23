const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const requireLogin = require("../middleware/requireLogin");

const User = mongoose.model("User");

//User registration
router.post("/register", (req, res) => {
  const { name, userType, email, password, confirmPassword } = req.body;
  //Checking empty fields
  if (!name || !userType || !email || !password) {
    res.status(422).json({ error: "Please fill all the fields" });
  }

  //Checking the email format
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return res.status(422).json({ error: "Invalid email format!" });
  }

  //Checking password mismatch
  // if (password != conPassword) {
  //   return res.status(422).json({ error: "Passwords mismatch!" });
  // }

  //Checking user
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exists with that email" });
      }
      //Hashing password
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          name,
          userType,
          email,
          password: hashedpassword,
        });

        user
          .save()
          .then((user) => {
            res.json({ message: "saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//User login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  //Checking Empty Fields
  if (!email || !password) {
    return res.status(422).json({ error: "Please enter all the fields!" });
  }

  //Checking the email format
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return res.status(422).json({ error: "Invalid email format!" });
  }

  // Matching entered email with database
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid Email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          // res.json({message:"successfully signed in"})
          const token = jwt.sign(
            { _id: savedUser._id },
            process.env.JWT_SECRET
          );
          const { _id, name } = savedUser;
          res.json({
            token,
            user: { _id, name },
          });
        } else {
          return res.status(422).json({ error: "Invalid Email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
