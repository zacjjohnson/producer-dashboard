const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact.model")



router.post('/contact', (req, res, next) => {
  const { name, email, message } = req.body;
    console.log(name, email, message);
  
    Contact.create({name, email, message})
    .then((createdMessage) => {
        res.send('Message Created Successfully!')
    })
    .catch((error) => {
        console.log(error)
    });
    
  });

module.exports = router;