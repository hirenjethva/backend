import Exchange from "../models/exchange.js";
import Order from "../models/order.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";


export const createExchange = catchAsyncErrors(async (req, res, next) => {
  const { orderId, reasonForExchange } = req.body;

  // Check if both fields are provided
  if (!orderId || !reasonForExchange) {
    return res.status(400).json({
      success: false,
      message: "Please provide Order ID and Reason for Exchange",
    });
  }

  // Check if the orderId exists in the orders collection
  const existingOrder = await Order.findById(orderId);
  if (!existingOrder) {
    return res.status(404).json({
      success: false,
      message: "Invalid Order ID. No order found.",
    });
  }

  // Create the exchange request
  const exchange = await Exchange.create({
    orderId,
    reasonForExchange,
  });

  res.status(201).json({
    success: true,
    message: "Exchange request submitted successfully!",
    exchange,
  });
});
