import Contact from "../models/contactus.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";

export const createContact = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, additionalInquiry } = req.body;

  // Check if all required fields are provided
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, email, and phone number",
    });
  }

  // Create contact record
  const contact = await Contact.create({
    name,
    email,
    phone,
    additionalInquiry,
  });

  res.status(201).json({
    success: true,
    message: "Your inquiry has been submitted successfully!",
    contact,
  });
});

export const getContactUsData = catchAsyncErrors(async (req, res, next) => {
  const contactUs = await Contact.find();

  res.status(200).json({
    contactUs,
  });
});
