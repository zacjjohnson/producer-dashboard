const express = require("express");
const router = express.Router();


const Beat = require("../models/Beat.model")


router.post('/beats', (req, res, next) => {
    const { name, link } = req.body;

    Beat.findOne({name})
    .then((foundName) => {

        if (foundName) {
            res.status(400).json({ message: "Beat name already exists." });
            return;
          }

        return Beat.create({ name, link });
    })
    .then((createdBeat) => {
      const { name, link } = createdBeat;
    
      const beat = { name, link };
 
      // Send a json response containing the user object
      res.status(201).json({ beat: beat });
    })
})

module.exports = router;