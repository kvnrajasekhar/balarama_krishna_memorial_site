/**
 * Central Image Registry
 * 
 * Maps local image assets to their Cloudinary Public IDs.
 * 
 * IMPORTANT: Public IDs must be the ACTUAL Cloudinary Public ID.
 * Do NOT include file extensions, version numbers, or folder paths.
 * 
 * Verified assets have confirmed Public IDs from Cloudinary.
 * Unverified assets need their Public IDs to be determined.
 */

export const images = {
  /**
   * HERO SECTION
   */
  hero: {
    portrait: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/nanna-image-modified.png",
      alt: "Kanagala Balarama Krishna",
      transparent: true,
    },
  },

  /**
   * GALLERY SECTION
   */
  gallery: {
    nanna1: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/nanna-1.png",
      alt: "Family memory",
      category: "family",
    },
    threeBrothers: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/3brothers.jpeg",
      alt: "Three brothers together",
      category: "family",
    },
    nanna2: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/nanna-2.jpg",
      alt: "Childhood memory",
      category: "childhood",
    },
    nanna3: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/nanna-3.JPG",
      alt: "Work memory",
      category: "work",
    },
    nanna4: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/nanna-4.jpeg",
      alt: "Family memory",
      category: "family",
    },
    nanna5: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/nanna-5.jpg",
      alt: "Everyday memory",
      category: "everyday",
    },
    nanna6: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/nanna-6.jpeg",
      alt: "Work memory",
      category: "work",
    },
    nanna7: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/nanna-7.jpg",
      alt: "Family memory",
      category: "family",
    },
    nanna9: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/nanna-9.jpeg",
      alt: "Everyday memory",
      category: "everyday",
    },
    nannaE3: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/nanna-e3.jpg",
      alt: "Memory",
      category: "memories",
    },
    nannaE4: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/nanna-e4.jpg",
      alt: "Memory",
      category: "memories",
    },
    nannaImage: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/nanna-image.jpg",
      alt: "Final years memory",
      category: "finalYears",
    },
    school: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/school-he-studied.jpeg",
      alt: "School where he studied",
      category: "childhood",
    },
    marriage1: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/bhaskar-anna-marriage.jpeg",
      alt: "Bhaskar Anna marriage",
      category: "family",
    },
    marriage2: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/bhaskar-anna-marriage2.jpeg",
      alt: "Bhaskar Anna marriage",
      category: "family",
    },
  },

  /**
   * CERTIFICATES SECTION
   */
  certificates: {
    jeevandan: {
      publicId: "jeevandhan-certificate", // VERIFIED
      localPath: "/images/Nanna/jeevandhan-certificate.jpeg",
      alt: "Jeevandan certificate of appreciation",
    },
    lvpei: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/lvpei-certificate.jpeg",
      alt: "LVPEI eye donation recognition certificate",
    },
  },

  /**
   * RECOGNITION SECTION - NEWSPAPER CLIPPINGS
   */
  recognition: {
    eenadu: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/eenadu-paper-cutting.jpeg",
      alt: "Eenadu newspaper clipping",
    },
    sakshi: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/sakshi-paper-cutting.jpeg",
      alt: "Sakshi newspaper clipping",
    },
    newsApp: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/Nanna/news-app-1.jpeg",
      alt: "News app coverage",
    },
  },

  /**
   * ORGAN DONATION SECTION
   */
  organs: {
    liver: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/organs/liver.png",
      alt: "Anatomical illustration of liver",
    },
    kidneyLeft: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/organs/left-kidney.png",
      alt: "Left kidney",
    },
    kidneyRight: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/organs/right-kidney.png",
      alt: "Right kidney",
    },
    eyeLeft: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/organs/left-eye.jpg",
      alt: "Left eye",
    },
    eyeRight: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/organs/right-eye.jpg",
      alt: "Right eye",
    },
    heart: {
      publicId: null, // NEEDS VERIFICATION
      localPath: "/images/organs/heart.png",
      alt: "Anatomical illustration of heart",
    },
  },
};

/**
 * Helper to get image data by path
 */
export function getImageByLocalPath(localPath) {
  for (const category of Object.values(images)) {
    for (const image of Object.values(category)) {
      if (image.localPath === localPath) {
        return image;
      }
    }
  }
  return null;
}

/**
 * Check if an image has a verified Cloudinary Public ID
 */
export function isCloudinaryReady(image) {
  return image && image.publicId !== null;
}
