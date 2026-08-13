import { useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { X } from "lucide-react";
import { usePrefersReducedMotion } from "../ui/usePrefersReducedMotion";
import { useRef } from "react";

export function ArchiveDocument({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  archiveNumber,
  className = "",
  onImageClick,
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={`relative ${className}`}>
        {archiveNumber && (
          <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a] mb-4">
            {archiveNumber}
          </p>
        )}
        <div className="rounded-[1.25rem] border border-[#d8d0c4] bg-[#fcfaf6] p-6">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className="w-full h-auto rounded-[1rem]"
              onClick={onImageClick}
              style={{ cursor: onImageClick ? "pointer" : "default" }}
            />
          ) : (
            <div className="flex min-h-[180px] items-center justify-center rounded-[1rem] border border-dashed border-[#d8d0c4] bg-[#f3eee7] text-center">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]">
                  Photo pending
                </p>
                <p className="mt-3 font-display text-xl text-[#24221f]">{title}</p>
                {subtitle && <p className="mt-2 text-sm text-[#5e5952]">{subtitle}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      {archiveNumber && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a] mb-4"
        >
          {archiveNumber}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[1.25rem] border border-[#d8d0c4] bg-[#fcfaf6] p-6"
      >
        {imageSrc ? (
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            src={imageSrc}
            alt={imageAlt || title}
            className="w-full h-auto rounded-[1rem] cursor-pointer hover:scale-[1.01] transition-transform duration-500"
            onClick={onImageClick}
          />
        ) : (
          <div className="flex min-h-[180px] items-center justify-center rounded-[1rem] border border-dashed border-[#d8d0c4] bg-[#f3eee7] text-center">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]">
                Photo pending
              </p>
              <p className="mt-3 font-display text-xl text-[#24221f]">{title}</p>
              {subtitle && <p className="mt-2 text-sm text-[#5e5952]">{subtitle}</p>}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function DocumentLightbox({ isOpen, imageSrc, imageAlt, onClose }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (!isOpen) return null;

  if (prefersReducedMotion) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        onClick={onClose}
      >
        <button
          className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 p-2 text-white/80"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X size={24} />
        </button>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-h-[90vh] max-w-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={onClose}
        >
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 p-2 text-white/80 transition-colors hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X size={24} />
          </motion.button>
          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4 }}
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[90vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
