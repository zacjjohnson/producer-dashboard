const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const Beat = require("../models/Beat.model")


router.post('/beats', (req, res, next) => {
  const { name, link } = req.body;

  // Check if the beat name already exists
  Beat.findOne({name})
      .then((foundName) => {

          if (foundName) {
              res.status(400).json({ message: "Beat name already exists." });
              return;
          }

          // Create a new beat
          return Beat.create({ name, link });
      })
      .then((createdBeat) => {
          // Get the beat ID from the created beat
          const beatId = createdBeat._id;

          // Update the user document and push the beat ID to it
          User.updateOne({ _id: req.body.user }, { $push: { beats: beatId }})
              .then(() => {
                  // Send a json response containing the created beat object
                  res.status(201).json({ beat: createdBeat });
              });
      })
  });

module.exports = router;