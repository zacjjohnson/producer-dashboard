const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const Beat = require("../models/Beat.model");
const User = require("../models/User.model");


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));



router.get('/music', (req, res, next) => {

    Beat.find()
    .then((response) => {
        console.log(response)
        res.json({beats: response})

    })
    .catch((error) => {
        console.log(error);
    })
});

module.exports = router;