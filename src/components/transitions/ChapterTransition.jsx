import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";

export function ChapterTransition({ nextChapter, nextChapterId, label }) {
  const { t } = useTranslation();

  const handleClick = () => {
    const element = document.getElementById(nextChapterId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-20 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-[#d8d0c4]" />
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-[#a3835a]">
              {t("chapterTransition.nextChapter")}
            </span>
            <div className="h-px flex-1 bg-[#d8d0c4]" />
          </div>

          <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] tracking-tight text-[#24221f]">
            {nextChapter}
          </h3>

          <Button onClick={handleClick} variant="primary" className="mt-8">
            {label || "Continue"}
            <span className="ml-2">→</span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
