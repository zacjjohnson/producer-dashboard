const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String
    },
    password: {
      type: String
    },
    name: {
      type: String
    },
    location: {
      type: String
    },
    beats: [{
      type: Schema.Types.ObjectId,
      ref: "Beat"
    }]
  },   
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
