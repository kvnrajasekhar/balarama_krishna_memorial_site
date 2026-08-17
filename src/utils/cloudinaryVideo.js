import { cloudinaryConfig } from "../config/cloudinary";

export function getCloudinaryVideoUrl(publicId, options = {}) {
  const {
    width,
    quality = "auto",
    format = "auto",
  } = options;

  const transformations = [
    `f_${format}`,
    `q_${quality}`,
    width ? `w_${width}` : null,
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/video/upload/${transformations}/${publicId}`;
}