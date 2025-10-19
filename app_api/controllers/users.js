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

let userList = function(req, res) {
  User.find()
    .then(users => res.json(users))
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal server error');
    });
};

let userDetails = function(req, res) {
  let userId = req.params.userid;
  User.findById(userId)
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
  userList,
  userDetails
};