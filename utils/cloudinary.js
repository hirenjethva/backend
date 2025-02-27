import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

// Log the configuration
//console.log(cloudinary.config());

export const upload_file = async (file, folder) => {
  try {
    if (!file) {
      throw new Error("File parameter is missing");
    }

    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
      folder,
    });
    return {
      public_id: result.public_id,
      url: result.url,
    };
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error(error.message);
  }
};

export const delete_file = async (file) => {
  try {
    const res = await cloudinary.uploader.destroy(file);
    if (res?.result === "ok") return true;
    throw new Error("Failed to delete the file");
  } catch (error) {
    throw new Error(error.message);
  }
};
