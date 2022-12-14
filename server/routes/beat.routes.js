const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const Beat = require("../models/Beat.model")


// router.post('/beats', (req, res, next) => {
//     const { name, link } = req.body;
    
      
//       Beat.findOne({name})
//         .then((foundName) => {

//             if (foundName) {
//                 res.status(400).json({ message: "Beat name already exists." });
//                 return;
//             }

//             return Beat.create({ name, link });
//         })
//         .then((createdBeat) => {
//             console.log({BEAT: createdBeat})

            
//             const { name, link } = createdBeat;
        
//             const beat = { name, link };

//             // Send a json response containing the user object
//             res.status(201).json({ beat: beat });
//         })
//     });





// User.findByIdAndUpdate(user._id, { $push: { beats: createdBeat._id } }, { new: true });


// jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
//   if (err) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
  
//   // The decoded payload will be available in decoded
//   const user = decoded;


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