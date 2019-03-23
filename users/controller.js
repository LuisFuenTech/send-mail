const User = require("./user");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("../services/jwt");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const registerUser = (req, res) => {
  const { name, surname, city, email, username, password, nodemcu } = req.body;

  User.findOne({
    $or: [{ email: email.toLowerCase() }, { username: username.toLowerCase() }]
  })
    .then(user => {
      if (user) return res.status(400).send({ Error: "User already exists" });

      const newUser = new User({
        name: name,
        surname: surname,
        city: city,
        email: email,
        username: username,
        nodemcu: nodemcu
      });

      bcrypt.hash(password, null, null, (err, hash) => {
        newUser.password = hash;

        newUser.save().then((saved, err) => {
          if (err)
            return res.status(400).send({ Error: "User did not register" });

          saved.password = undefined;
          if (saved) res.status(200).send({ user: saved });
        });
      });
    })
    .catch(err => {
      return res.status(500).send({ message: "Error on query" });
    });
};

const loginUser = (req, res) => {
  const { username, password, getToken } = req.body;

  User.findOne({ username })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, (err, hasMatched) => {
          if (hasMatched) {
            //Token
            if (getToken) {
              return res.status(200).send({ token: jwt.createToken(user) });
            } else {
              user.password = undefined;
              return res.status(200).send({ user });
            }
          } else return res.status(404).send({ Error: "Wrong password" });
        });
      } else return res.status(404).send({ Error: `User don't indentify` });
    })
    .catch(err => {
      res.status(500).send({ Error: "Error on query" });
    });
};

const getUser = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then(user => {
      user.password = undefined;
      if (user) return res.status(200).send({ user });
      else return res.status(404).send({ Error: `User doesn't exist` });
    })
    .catch(err => {
      res.status(500).send({ Error: `Error on query` });
    });
};

const updateUser = (req, res) => {};

const getNodemcu = (req, res) => {};

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  getUser,
  getNodemcu
};
