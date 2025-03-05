import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      maxLength: [200, "Product name cannot exceed 200 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      maxLength: [5, "Product price cannot exceed 5 digits"],
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please enter product category"],
      enum: {
        values: [
          "Uppers",
          "Lowers"
        ],
        message: "Please select correct category",
      },
    },
    seller: {
      type: String,
      required: [true, "Please enter product seller"],
    },
    stock: {
      XS: { type: Number, default: 0 },
      S: { type: Number, default: 0 },
      M: { type: Number, default: 0 },
      L: { type: Number, default: 0 },
      XL: { type: Number, default: 0 },
    },
    // sizeChart: [
    //   {
    //     size: { 
    //       type: String, 
    //       required: [true, "Please enter size"], 
    //       enum: { 
    //         values: [
    //           "XS",
    //           "S",
    //           "M",
    //           "L",
    //           "XL"
    //         ], 
    //         message: "Please select correct Size"
    //       }, 
    //     },
    //     chest: { type: String },
    //     shoulder: { type: String },
    //     length: { type: String },
    //   },
    // ],
    sizeChart: [
      {
        size: { 
          type: String, 
          required: [true, "Please enter size"]
        },
        attributes: {
          type: Map, 
          of: String, // Key-value pairs for attributes
        },
      },
    ],
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
