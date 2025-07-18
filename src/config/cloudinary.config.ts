// src/config/cloudinary.config.ts
import { v2 as cloudinary } from 'cloudinary';

import * as dotenv from 'dotenv';

dotenv.config(); // Ensure .env is loaded
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export { cloudinary };