const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const Purchase = require("../models/Purchase.model");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/cart", (req, res, next) => {
    // create a new purchase object from the request body
    const { price, product } = req.body;
    console.log(price);
    Purchase.create({price, product})
    .then((response) => {
        console.log(response)
        res.json(response)
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json({ error });
    })
    // save the purchase object to the database
    
  });



  module.exports = router;