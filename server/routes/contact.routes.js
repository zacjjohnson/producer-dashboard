const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact.model")
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(sgMail)




router.post('/contact', (req, res, next) => {
  const { name, email, message } = req.body;
  
  Contact.create({name, email, message})
    .then((createdMessage) => {
      // Contact was created successfully, now send the email
      sendEmail(createdMessage.email, createdMessage.message, name)
        .then(() => {
          res.send('Message Created Successfully!')
        })
        .catch((error) => {
          console.error(error)
          res.send('An error occurred while sending the email')
        })
    })
    .catch((error) => {
      console.log(error)
      res.send('An error occurred while creating the contact')
    });

  });
  
  function sendEmail(email, message, name) {
    const msg = {
      to: 'zacj08@gmail.com', // Change to your recipient
      from: `writabeats@outlook.com`, // Change to your verified sender
      subject: 'You recieved an email!',
      html: `${name} sent a message: ${message} from ${email}`,
    }
  
    return sgMail.send(msg)
  }

module.exports = router;