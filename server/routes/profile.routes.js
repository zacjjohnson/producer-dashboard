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
})




router.get('/profile', (req, res, next) => {

  User.findById(userId)
  .populate('beats')
  .then((user) => {
    if (!user) {
      // Return an error if the user is not found
      return res.status(404).json({ error: 'User not found' });
    }
    console.log({ beats: user.beats })
    // Return the beats associated with the user in the response
    res.json({ beats: user.beats });
  })
  .catch((error) => {
    console.log(error)
  })
  
    Beat.find()
      .then((beats) => {
        if (!beats) {
          // Return an error if the beat is not found
          return res.status(404).json({ error: 'Beat not found' });
        }
        console.log({ THISONE: beats })
        // Return the beat object in the response
        res.json({ beats });
      })
      .catch((error) => {
        console.log(error);
      });
})



// router.get('/profile', (req, res, next) => {
//     const { id } = req.params;
  
//     // Find the beat with the specified ID
//     Beat.findById(id)
//       .then((beat) => {
//         if (!beat) {
//           // Return an error if the beat is not found
//           return res.status(404).json({ error: 'Beat not found' });
//         }
  
//         // Return the beat object in the response
//         res.json({ beat });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });


module.exports = router;