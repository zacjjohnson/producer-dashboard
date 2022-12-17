const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const beatSchema = new Schema(
  {
    name: {
      type: String
    },
    link: {
      type: String
    },
    price: {
      type: Number
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Beat = model("Beat", beatSchema);

module.exports = Beat;
