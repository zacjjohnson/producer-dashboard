const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const Beat = require("../models/User.model");
const User = require("../models/User.model");


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


let userId = {};

router.post('/profile', (req, res, next) => {
  userId = req.body.user;
  console.log({HELLLLLLO: userId})
  return req;
})


router.get('/profile', (req, res, next) => {

    User.findById(userId)
    .populate('beats')
    .exec((err, user) => {
      if (err) {
        // Handle the error and send a response if there is one
        res.status(500).send(err);
      } else {
        // Get the list of beats for this user
        const beats = user.beats;
        console.log({beats: beats})
        // Send the list of beats as a response
        res.json({beats: beats});
      }
    });
});

module.exports = router;