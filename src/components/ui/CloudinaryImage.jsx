import { useState, useRef, useEffect } from "react";
import { getCloudinaryUrl, getSrcSet, RESPONSIVE_WIDTHS, SIZES } from "../../config/cloudinary";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * CloudinaryImage Component
 * 
 * A reusable image component for Cloudinary delivery with:
 * - Automatic format optimization (f_auto)
 * - Automatic quality optimization (q_auto)
 * - Responsive srcset generation
 * - Lazy loading support
 * - Eager loading for critical images
 * - Placeholder with fade transition
 * - Error handling
 * - Layout shift prevention
 * 
 * @param {Object} props
 * @param {string} props.publicId - Cloudinary Public ID (no extension, no version)
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.fallbackSrc - Local fallback image path if Cloudinary fails
 * @param {number} props.width - Width in pixels
 * @param {number} props.height - Height in pixels
 * @param {string} props.aspectRatio - Aspect ratio (e.g., "16/9", "4/3", "3/4")
 * @param {string} props.objectFit - Object fit (cover, contain, fill, etc.)
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.sizes - Sizes attribute for responsive images
 * @param {number[]} props.widths - Array of widths for srcset
 * @param {string} props.loading - "lazy" or "eager"
 * @param {string} props.fetchPriority - "high", "low", or "auto"
 * @param {boolean} props.priority - Alias for fetchPriority="high"
 * @param {boolean} props.transparent - Preserve transparency for PNGs
 * @param {Function} props.onLoad - Callback when image loads
 * @param {Function} props.onError - Callback when image errors
 * @param {Object} props.transformations - Additional Cloudinary transformations
 */
export function CloudinaryImage({
  publicId,
  alt,
  fallbackSrc,
  width,
  height,
  aspectRatio,
  objectFit = "cover",
  className = "",
  sizes,
  widths,
  loading = "lazy",
  fetchPriority,
  priority,
  transparent = false,
  onLoad,
  onError,
  transformations = {},
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Set fetch priority based on priority prop
  const actualFetchPriority = priority ? "high" : fetchPriority;

  // Generate Cloudinary URL
  const cloudinaryUrl = publicId
    ? getCloudinaryUrl(publicId, {
        width,
        height,
        crop: "fill",
        format: "auto",
        quality: "auto",
        transparent,
        ...transformations,
      })
    : null;

  // Generate srcset if widths are provided
  const srcSet =
    publicId && widths
      ? getSrcSet(publicId, widths, {
          crop: "fill",
          format: "auto",
          quality: "auto",
          transparent,
          ...transformations,
        })
      : undefined;

  // Use fallback if Cloudinary fails or no publicId
  const finalSrc = hasError || !publicId ? fallbackSrc : cloudinaryUrl;

  // Handle image load
  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  // Handle image error
  const handleError = (e) => {
    if (publicId && !hasError) {
      setHasError(true);
      console.warn(`Cloudinary image failed to load: ${publicId}`, e);
    }
    if (onError) onError(e);
  };

  // Calculate aspect ratio style
  const aspectRatioStyle = aspectRatio ? { aspectRatio } : {};

  // Placeholder style
  const placeholderStyle = {
    backgroundColor: "#f3efe7",
    ...aspectRatioStyle,
  };

  // Image style
  const imageStyle = {
    objectFit,
    opacity: prefersReducedMotion || isLoaded ? 1 : 0,
    transition: prefersReducedMotion ? "none" : "opacity 0.6s ease-in-out",
  };

  // If no src available, show placeholder
  if (!finalSrc) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ ...placeholderStyle, minHeight: height || 200 }}
      >
        <span className="text-sm text-[#a3835a]">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={aspectRatioStyle}>
      {/* Placeholder */}
      {!isLoaded && !prefersReducedMotion && (
        <div
          className="absolute inset-0"
          style={placeholderStyle}
          aria-hidden="true"
        />
      )}

      {/* Image */}
      <img
        ref={imgRef}
        src={finalSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={actualFetchPriority}
        onLoad={handleLoad}
        onError={handleError}
        style={imageStyle}
        className="w-full h-full"
      />
    </div>
  );
}

/**
 * CloudinaryImageWithFallback
 * 
 * Wrapper that automatically uses local fallback if Cloudinary Public ID is not available
 */
export function CloudinaryImageWithFallback({
  publicId,
  fallbackSrc,
  ...props
}) {
  const useCloudinary = publicId !== null && publicId !== undefined;

  if (!useCloudinary) {
    // Use local image directly
    return (
      <img
        src={fallbackSrc}
        alt={props.alt}
        loading={props.loading}
        className={props.className}
        style={{ objectFit: props.objectFit || "cover" }}
      />
    );
  }

  return (
    <CloudinaryImage
      publicId={publicId}
      fallbackSrc={fallbackSrc}
      {...props}
    />
  );
}
