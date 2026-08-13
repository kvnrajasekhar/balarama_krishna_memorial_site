import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function StoryRouteLayout({
    children,
    nextPath,
    previousPath,
    nextLabel,
    previousLabel,
    className = "",
}) {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const isTransitioningRef = useRef(false);
    const pendingDirectionRef = useRef(null);
    const transitionTimerRef = useRef(null);
    const footerRef = useRef(null);
    const touchStartYRef = useRef(null);
    const [transitionMessage, setTransitionMessage] = useState(null);

    const chapterMeta = {
        "/welcome": { index: 1, total: 8, label: t("nav.welcome") },
        "/story/biography": { index: 2, total: 8, label: t("nav.hisLife") },
        "/story/final-journey": { index: 3, total: 8, label: t("nav.finalJourney") },
        "/story/gift-of-life": { index: 4, total: 8, label: t("nav.giftOfLife") },
        "/story/organ-donation": { index: 5, total: 8, label: t("nav.organDonation") },
        "/story/recognition": { index: 6, total: 8, label: t("nav.recognition") },
        "/story/gallery": { index: 7, total: 8, label: t("nav.gallery") },
        "/story/legacy": { index: 8, total: 8, label: t("nav.legacy") },
        "/story/closing": { index: 9, total: 9, label: t("nav.closing") },
    };

    const activeChapter = chapterMeta[location.pathname] ?? { index: 1, total: 9, label: t("nav.story") };

    const triggerTransition = (direction) => {
        const targetPath = direction === "next" ? nextPath : previousPath;
        if (!targetPath || isTransitioningRef.current) return;

        setTransitionMessage(direction);
        isTransitioningRef.current = true;

        if (transitionTimerRef.current) {
            window.clearTimeout(transitionTimerRef.current);
        }

        transitionTimerRef.current = window.setTimeout(() => {
            sessionStorage.setItem("story-transition-direction", direction);
            navigate(targetPath);
            isTransitioningRef.current = false;
            pendingDirectionRef.current = null;
            setTransitionMessage(null);
        }, 500);
    };

    useEffect(() => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "auto" });
            return;
        }

        const previousDirection = sessionStorage.getItem("story-transition-direction");
        if (previousDirection === "previous") {
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "auto" });
        } else {
            window.scrollTo({ top: 0, behavior: "auto" });
        }

        sessionStorage.removeItem("story-transition-direction");
    }, [location.pathname]);

    useEffect(() => {
        return () => {
            if (transitionTimerRef.current) {
                window.clearTimeout(transitionTimerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!nextPath && !previousPath) {
            return undefined;
        }

        const handleWheel = (event) => {
            if (isTransitioningRef.current) {
                event.preventDefault();
                return;
            }

            const atTop = window.scrollY <= 120;
            const isScrollingDown = event.deltaY > 0;
            const isScrollingUp = event.deltaY < 0;
            const footerElement = footerRef.current;
            const footerReached = footerElement
                ? window.scrollY + window.innerHeight >= footerElement.offsetTop - 140
                : false;

            if (isScrollingDown && nextPath && footerReached) {
                event.preventDefault();
                if (pendingDirectionRef.current === "next") {
                    triggerTransition("next");
                    return;
                }
                pendingDirectionRef.current = "next";
                setTransitionMessage("next");
                return;
            }

            if (isScrollingUp && previousPath && atTop) {
                event.preventDefault();
                if (pendingDirectionRef.current === "previous") {
                    triggerTransition("previous");
                    return;
                }
                pendingDirectionRef.current = "previous";
                setTransitionMessage("previous");
                return;
            }

            if (!atTop && !footerReached) {
                pendingDirectionRef.current = null;
                setTransitionMessage(null);
            }
        };

        const handleTouchStart = (event) => {
            touchStartYRef.current = event.touches[0]?.clientY ?? null;
        };

        const handleTouchEnd = (event) => {
            if (isTransitioningRef.current || touchStartYRef.current === null) return;

            const touchEndY = event.changedTouches[0]?.clientY ?? touchStartYRef.current;
            const deltaY = touchEndY - touchStartYRef.current;
            const atTop = window.scrollY <= 120;
            const footerElement = footerRef.current;
            const footerReached = footerElement
                ? window.scrollY + window.innerHeight >= footerElement.offsetTop - 180
                : false;

            if (deltaY < -40 && nextPath && footerReached) {
                triggerTransition("next");
            }

            if (deltaY > 40 && previousPath && atTop) {
                triggerTransition("previous");
            }

            touchStartYRef.current = null;
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchend", handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [navigate, nextPath, previousPath]);

    return (
        <main className={`min-h-screen bg-[#f7f4ee] text-[#24221f] ${className}`.trim()}>
            <Header />

            {/* <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-3 rounded-full border border-[#d8d0c4] bg-[#fcfaf6]/90 px-3 py-2 shadow-[0_12px_30px_rgba(36,34,31,0.08)] backdrop-blur-sm md:flex"
            >
                <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#a3835a]">
                    {String(activeChapter.index).padStart(2, "0")} / {String(activeChapter.total).padStart(2, "0")}
                </span>
                <span className="h-4 w-px bg-[#d8d0c4]" aria-hidden="true" />
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#24221f]">
                    {activeChapter.label}
                </span>
            </motion.div> */}

            <div className="pt-20">{children}</div>

            <div ref={footerRef}>
                <Footer />
            </div>

            <AnimatePresence>
                {transitionMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 18, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.24 }}
                        className="fixed bottom-8 left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-[#171614]/90 px-5 py-3 text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur"
                    >
                        <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]">
                            {transitionMessage === "next" ? t("storyTransitions.continuing") : t("storyTransitions.returning")}
                        </p>
                        <p className="mt-1 font-display text-sm text-[#f7f4ee]">
                            {transitionMessage === "next" ? nextLabel : previousLabel}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
