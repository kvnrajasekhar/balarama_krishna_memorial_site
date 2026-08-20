import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../components/ui/SectionLabel";
import { ChapterTransition } from "../components/transitions/ChapterTransition";
import { useEffect, useMemo, useState } from "react";

const familyWelcomeContent = {
    en: [
        "Welcome to the remembrance of our beloved husband, father, Sri Kanagala Balarama Krishna.",
        "With love and gratitude, we have created this space to remember and celebrate a life that meant so much to us and to the many people whose lives he touched.",
        "For our family, he was the person at the heart of our home—the one who worked tirelessly for us, carried his responsibilities with dedication, and filled our lives with countless moments that we will cherish forever.",
        "To those who knew him beyond our family, he was a trusted friend, a familiar face, and someone they could approach with warmth and confidence.",
        "This is not simply a collection of photographs or a record of dates and events. It is a place where his story lives.",
        "As you move through these pages, we invite you to discover not only how he lived, but also the kind of person he was.",
        "Whatever you feel, we hope you will carry one thing with you when you leave this space: a little more of the man we were blessed to call ours."
    ],
    te: [
        "మా ప్రియమైన భర్త, తండ్రి, శ్రీ కనగాల బలరామ కృష్ణ గారి జ్ఞాపకార్థం రూపొందించిన ఈ స్మృతి ప్రదేశానికి మీకు హృదయపూర్వక స్వాగతం.",
        "ఆయనను ప్రేమతో, కృతజ్ఞతతో, గౌరవంతో స్మరించుకోవడానికి ఈ డిజిటల్ జ్ఞాపక ప్రదేశాన్ని రూపొందించాము.",
        "మా కుటుంబానికి ఆయన ఆధారం. మా కోసం ఎంతో కష్టపడి పనిచేసిన వ్యక్తి. తన బాధ్యతలను నిబద్ధతతో నిర్వర్తించిన వ్యక్తి.",
        "మా కుటుంబాన్ని దాటి ఆయనను తెలిసిన వారికి ఆయన ఒక నమ్మకమైన వ్యక్తి, ఆత్మీయమైన పరిచయం, తమ మనసులోని మాటను చెప్పుకోగల మనిషి.",
        "ఇది కేవలం కొన్ని ఫోటోలు, తేదీలు, సంఘటనలను భద్రపరిచిన ఒక వెబ్‌సైట్ మాత్రమే కాదు. ఇది ఆయన కథను సజీవంగా ఉంచే ఒక జ్ఞాపక ప్రదేశం.",
        "ఈ పేజీల్లో మీరు ముందుకు సాగుతున్నప్పుడు, ఆయన్ను మాత్రమే కాకుండా, ఆయన ఎలాంటి మనిషో కూడా తెలుసుకోవాలని మేము కోరుకుంటున్నాము.",
        "మీకు ఏ అనుభూతి కలిగినా, ఈ జ్ఞాపక ప్రదేశం నుంచి మీరు వెళ్లేటప్పుడు మీతో పాటు ఒక చిన్న భాగాన్ని తీసుకెళ్లాలని మేము కోరుకుంటున్నాము."
    ]
};

function LetterParagraph({ children, delay = 0, isTelugu = false }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
            className={isTelugu
                ? "font-sans text-[clamp(1.1rem,2vw,1.7rem)] leading-[1.9] tracking-[0.01em] text-[#4f4a42]"
                : "font-display text-[clamp(1.7rem,2.8vw,3.2rem)] leading-[1.1] text-[#24221f]"}
        >
            {children}
        </motion.p>
    );
}

export function WelcomeStory() {
    const { i18n, t } = useTranslation();
    const [activeLanguage, setActiveLanguage] = useState(i18n.language.startsWith("te") ? "te" : "en");

    const content = useMemo(() => familyWelcomeContent[activeLanguage] ?? familyWelcomeContent.en, [activeLanguage]);

    useEffect(() => {
        setActiveLanguage(i18n.language.startsWith("te") ? "te" : "en");
    }, [i18n.language]);

    return (
        <section className="min-h-screen bg-[#f7f4ee] px-6 py-28 text-[#24221f] sm:px-10 lg:px-16 lg:py-40">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <SectionLabel>{t("welcome.kicker")}</SectionLabel>
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.12 }}
                        className="mt-6 font-display text-[clamp(3rem,6vw,6rem)] leading-[0.9] tracking-[-0.04em] text-[#24221f]"
                    >
                        {t("welcome.title")}
                    </motion.h1>
                </motion.div>

                <div className="mx-auto mt-16 max-w-4xl">
                    <div className="space-y-10">
                        {content.map((paragraph, index) => (
                            <LetterParagraph
                                key={paragraph}
                                delay={index * 0.12}
                                isTelugu={activeLanguage === "te"}
                            >
                                {paragraph}
                            </LetterParagraph>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-18 border-t border-[#d8d0c4] pt-10"
                    >
                        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#a3835a]">
                            {t("welcome.withLove")}
                        </p>
                        <p className="mt-4 font-display text-[clamp(1.7rem,3vw,2.8rem)] leading-none text-[#24221f]">
                            {t("welcome.familyName")}
                        </p>
                    </motion.div>
                </div>
            </div>

            <ChapterTransition
                nextChapter={t("biography.title")}
                nextChapterId="biography"
                targetPath="/story/biography"
                label={t("storyRoutes.welcomeNext")}
            />
        </section>
    );
}
