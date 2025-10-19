let mongoose = require('mongoose');
let User = mongoose.model('User');

let userCreate = function(req, res) {
    let userData = req.body;
    User.create(userData)
      .then(user => res.status(201).json(user))
      if (err) {
        console.error(err);
        res.status(500).send('User creation failed');
      }
};

let getUserByEmail = function(req, res) {
  let email = req.params.email;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal server error');
    });
};

let getUserByFirstName = function(req, res) {
  let firstName = req.params.userFirstName;
  User.findOne({ firstName: firstName })
    .then(user => {
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal server error');
    });
};

module.exports = {
  userCreate,
  getUserByEmail,
  getUserByFirstName,
  userDetails
};
