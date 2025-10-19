let mongoose = require('mongoose');
let Race = mongoose.model('Race');

let raceList = function(req, res) {
  Race.find()
    .then(races => res.json(races))
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal server error');
    });
};

let raceDetails = function(req, res) {
  let raceId = req.params.raceid;
  Race.findById(raceId)
    .then(race => {
      if (!race) {
        return res.status(404).send('Race not found');
      }
      res.json(race);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal server error');
    });
};

module.exports = {
  raceList,
  raceDetails
};
