import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxLength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [
        /^[0-9]{10}$/,
        "Phone number must be 10 digits and contain only numbers",
      ],
    },
    additionalInquiry: {
      type: String,
      trim: true,
      maxLength: [1000, "Name cannot exceed 1000 characters"]
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
