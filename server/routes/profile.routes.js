const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const Beat = require("../models/User.model")


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/profile', (req, res, next) => {
    
    Beat.findById(id)
      .then((beat) => {
        if (!beat) {
          // Return an error if the beat is not found
          return res.status(404).json({ error: 'Beat not found' });
        }
  
        // Return the beat object in the response
        res.json({ beat });
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