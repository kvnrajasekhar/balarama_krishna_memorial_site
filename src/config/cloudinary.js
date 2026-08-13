/**
 * Cloudinary Configuration
 * 
 * Central configuration for Cloudinary image delivery.
 * All Cloudinary URL generation should use this module.
 */

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'pu0hhbo4';

/**
 * Base Cloudinary delivery URL
 */
export const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * Normalize Cloudinary public IDs by removing any leading version segment.
 * This keeps delivery URLs consistent and avoids including version numbers.
 */
function normalizePublicId(publicId) {
  if (!publicId) return publicId;
  return publicId.replace(/^v\d+\//, '').replace(/^\/+/, '');
}

/**
 * Generate a Cloudinary delivery URL with transformations
 * 
 * @param {string} publicId - The Cloudinary Public ID (no extension, no version)
 * @param {Object} options - Transformation options
 * @param {number} options.width - Width in pixels
 * @param {number} options.height - Height in pixels
 * @param {string} options.crop - Crop mode (fill, fit, scale, etc.)
 * @param {string} options.format - Image format (auto, jpg, png, webp, etc.)
 * @param {number} options.quality - Quality (1-100, or 'auto')
 * @param {boolean} options.transparent - Preserve transparency
 * @returns {string} Full Cloudinary delivery URL
 */
export function getCloudinaryUrl(publicId, options = {}) {
  const normalizedPublicId = normalizePublicId(publicId);
  const {
    width,
    height,
    crop = 'fill',
    format = 'auto',
    quality = 'auto',
    transparent = false,
  } = options;

  const transformations = [];

  // Format optimization
  if (format === 'auto') {
    transformations.push('f_auto');
  } else if (format) {
    transformations.push(`f_${format}`);
  }

  // Quality optimization
  if (quality === 'auto') {
    transformations.push('q_auto');
  } else if (typeof quality === 'number') {
    transformations.push(`q_${quality}`);
  }

  // Dimensions and crop
  if (width && height) {
    transformations.push(`w_${width},h_${height},c_${crop}`);
  } else if (width) {
    transformations.push(`w_${width},c_${crop}`);
  } else if (height) {
    transformations.push(`h_${height},c_${crop}`);
  }

  // Preserve transparency for PNGs
  if (transparent) {
    transformations.push('fl_png32');
  }

  const transformationString = transformations.length > 0 ? transformations.join(',') : '';

  return `${BASE_URL}${transformationString ? '/' + transformationString : ''}/${normalizedPublicId}`;
}

/**
 * Generate responsive srcset for Cloudinary images
 * 
 * @param {string} publicId - The Cloudinary Public ID
 * @param {number[]} widths - Array of widths to generate
 * @param {Object} options - Additional transformation options
 * @returns {string} srcset attribute value
 */
export function getSrcSet(publicId, widths, options = {}) {
  const normalizedPublicId = normalizePublicId(publicId);

  return widths
    .map(width => `${getCloudinaryUrl(normalizedPublicId, { ...options, width })} ${width}w`)
    .join(', ');
}

/**
 * Default responsive widths for different use cases
 */
export const RESPONSIVE_WIDTHS = {
  thumbnail: [320, 480, 640],
  standard: [480, 640, 768, 1024, 1280],
  large: [768, 1024, 1280, 1536, 1920],
  hero: [768, 1024, 1280, 1536, 1920, 2560],
  certificate: [640, 1024, 1536, 2048],
};

/**
 * Default sizes attribute for common layouts
 */
export const SIZES = {
  full: '100vw',
  half: '(max-width: 768px) 100vw, 50vw',
  third: '(max-width: 768px) 100vw, 33.33vw',
  quarter: '(max-width: 768px) 100vw, 25vw',
  hero: '100vw',
  gallery: '(max-width: 640px) 50vw, (max-width: 1024px) 33.33vw, 25vw',
};
