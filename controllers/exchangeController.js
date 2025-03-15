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
  // const existingOrder = await Order.findById(orderId);
  // if (!existingOrder) {
  //   return res.status(404).json({
  //     success: false,
  //     message: "Invalid Order ID. No order found.",
  //   });
  // }

  // if (!existingOrder.deliveredAt) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "This order has not been delivered yet. Exchange requests can only be made after delivery.",
  //   });
  // }

  // const deliveredDate = new Date(existingOrder.deliveredAt);
  // const currentDate = new Date();
  // const timeDifference = currentDate - deliveredDate;
  // const daysSinceDelivered = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // // Check if the exchange request is within the 7-day period
  // if (daysSinceDelivered > 7) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "Exchange request period has expired. You can only request an exchange within 7 days of delivery as per our company policy.",
  //   });
  // }

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

export const getAllExchanceDetails = catchAsyncErrors(async (req, res, next) => {
  const exchangeData = await Exchange.find();

  res.status(200).json({
    exchangeData,
  });
});