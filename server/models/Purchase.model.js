const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const purchaseSchema = new Schema(
  {
    price: {
      type: Number
    },
    product: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product"
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Purchase = model("Purchase", purchaseSchema);

module.exports = Purchase;