import mongoose from "mongoose";

const exchangeSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: [true, "Order ID is required"],
    },
    reasonForExchange: {
      type: String,
      required: [true, "Reason for exchange is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Exchange", exchangeSchema);
