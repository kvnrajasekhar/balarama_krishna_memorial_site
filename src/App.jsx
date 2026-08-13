import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { FinalJourney } from "./components/sections/FinalJourney";
import { GiftOfLife } from "./components/sections/GiftOfLife";
import { OrganDonation } from "./components/sections/OrganDonation";
import { Recognition } from "./components/sections/Recognition";
import { Gallery } from "./components/sections/Gallery";
import { Legacy } from "./components/sections/Legacy";
import { Closing } from "./components/sections/Closing";
import { Landing } from "./pages/Landing";
import { LanguageSelectionPage } from "./pages/LanguageSelection";
import { Biography } from "./pages/Biography";
import { SectionPage } from "./pages/SectionPage";
import { WelcomeStory } from "./pages/WelcomeStory";

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LanguageSelectionPage />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/welcome" element={<SectionPage section={WelcomeStory} nextPath="/story/biography" nextLabel={t("storyRoutes.welcomeNext")} previousPath="/landing" previousLabel={t("storyRoutes.closingNext")} />} />
        <Route path="/story/biography" element={<SectionPage section={Biography} nextPath="/story/final-journey" nextLabel={t("storyRoutes.biographyNext")} previousPath="/welcome" previousLabel={t("storyRoutes.welcomeNext")} />} />
        <Route path="/story/final-journey" element={<SectionPage section={FinalJourney} nextPath="/story/gift-of-life" nextLabel={t("storyRoutes.finalJourneyNext")} previousPath="/story/biography" previousLabel={t("storyRoutes.biographyNext")} />} />
        <Route path="/story/gift-of-life" element={<SectionPage section={GiftOfLife} nextPath="/story/organ-donation" nextLabel={t("storyRoutes.giftOfLifeNext")} previousPath="/story/final-journey" previousLabel={t("storyRoutes.finalJourneyNext")} />} />
        <Route path="/story/organ-donation" element={<SectionPage section={OrganDonation} nextPath="/story/recognition" nextLabel={t("storyRoutes.organDonationNext")} previousPath="/story/gift-of-life" previousLabel={t("storyRoutes.giftOfLifeNext")} />} />
        <Route path="/story/recognition" element={<SectionPage section={Recognition} nextPath="/story/gallery" nextLabel={t("storyRoutes.recognitionNext")} previousPath="/story/organ-donation" previousLabel={t("storyRoutes.organDonationNext")} />} />
        <Route path="/story/gallery" element={<SectionPage section={Gallery} nextPath="/story/legacy" nextLabel={t("storyRoutes.galleryNext")} previousPath="/story/recognition" previousLabel={t("storyRoutes.recognitionNext")} />} />
        <Route path="/story/legacy" element={<SectionPage section={Legacy} nextPath="/story/closing" nextLabel={t("storyRoutes.legacyNext")} previousPath="/story/gallery" previousLabel={t("storyRoutes.galleryNext")} />} />
        <Route path="/story/closing" element={<SectionPage section={Closing}  previousPath="/story/legacy" previousLabel={t("storyRoutes.legacyNext")} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;