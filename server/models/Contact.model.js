const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const contactSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    message: {
        type: String
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;