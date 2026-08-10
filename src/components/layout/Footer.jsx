import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#24221f] text-[#f7f4ee] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl tracking-tight mb-2">
              {t("footer.title")}
            </h3>
            <p className="font-sans text-sm text-[#817a70]">
              {t("footer.subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-sans text-xs text-[#817a70]">
              {t("footer.familyWebsite")}
            </span>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#817a70]/20 text-center">
          <p className="font-sans text-xs text-[#817a70]/60">
            © {new Date().getFullYear()} Kanagala Family. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
