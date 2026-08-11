import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
    const isTransitioningRef = useRef(false);
    const pendingDirectionRef = useRef(null);
    const transitionTimerRef = useRef(null);
    const footerRef = useRef(null);
    const [transitionMessage, setTransitionMessage] = useState(null);

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

            if (isScrollingDown && nextPath) {
                if (footerReached) {
                    event.preventDefault();

                    if (pendingDirectionRef.current === "next") {
                        if (transitionTimerRef.current) {
                            window.clearTimeout(transitionTimerRef.current);
                        }
                        setTransitionMessage("next");
                        isTransitioningRef.current = true;
                        transitionTimerRef.current = window.setTimeout(() => {
                            sessionStorage.setItem("story-transition-direction", "next");
                            navigate(nextPath);
                            isTransitioningRef.current = false;
                            pendingDirectionRef.current = null;
                            setTransitionMessage(null);
                        }, 500);
                        return;
                    }

                    pendingDirectionRef.current = "next";
                    setTransitionMessage("next");
                    return;
                }

                if (!atTop) {
                    pendingDirectionRef.current = null;
                    setTransitionMessage(null);
                }
            }

            if (isScrollingUp && previousPath) {
                if (atTop) {
                    event.preventDefault();

                    if (pendingDirectionRef.current === "previous") {
                        if (transitionTimerRef.current) {
                            window.clearTimeout(transitionTimerRef.current);
                        }
                        setTransitionMessage("previous");
                        isTransitioningRef.current = true;
                        transitionTimerRef.current = window.setTimeout(() => {
                            sessionStorage.setItem("story-transition-direction", "previous");
                            navigate(previousPath);
                            isTransitioningRef.current = false;
                            pendingDirectionRef.current = null;
                            setTransitionMessage(null);
                        }, 500);
                        return;
                    }

                    pendingDirectionRef.current = "previous";
                    setTransitionMessage("previous");
                    return;
                }

                if (!footerReached) {
                    pendingDirectionRef.current = null;
                    setTransitionMessage(null);
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [navigate, nextPath, previousPath]);

    return (
        <main className={`min-h-screen bg-[#f7f4ee] text-[#24221f] ${className}`.trim()}>
            <Header />

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
                            {transitionMessage === "next" ? "Continuing the story" : "Returning to the story"}
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
