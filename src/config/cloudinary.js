
const cloudName = import.meta.env.CLOUDINARY_CLOUD_NAME||"pu0hhbo4";
if (!cloudName) {
  throw new Error(
    "VITE_CLOUDINARY_CLOUD_NAME is not configured"
  );
}

export const cloudinaryConfig = {
  cloudName,
};