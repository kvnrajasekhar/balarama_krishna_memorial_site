import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { FinalJourney } from "./components/sections/FinalJourney";
import { GiftOfLife } from "./components/sections/GiftOfLife";
import { OrganDonation } from "./components/sections/OrganDonation";
import { Recognition } from "./components/sections/Recognition";
import { Gallery } from "./components/sections/Gallery";
import { Legacy } from "./components/sections/Legacy";
import { Closing } from "./components/sections/Closing";
import { Landing } from "./pages/Landing";
import { Biography } from "./pages/Biography";
import { SectionPage } from "./pages/SectionPage";
import { WelcomeStory } from "./pages/WelcomeStory";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<SectionPage section={WelcomeStory} nextPath="/story/biography" nextLabel="Continue to his life story" previousPath="/" previousLabel="Return to the beginning" />} />
        <Route path="/story/biography" element={<SectionPage section={Biography} nextPath="/story/final-journey" nextLabel="Read his final journey" previousPath="/welcome" previousLabel="Read the family welcome" />} />
        <Route path="/story/final-journey" element={<SectionPage section={FinalJourney} nextPath="/story/gift-of-life" nextLabel="Discover his gift of life" previousPath="/story/biography" previousLabel="Read his life story" />} />
        <Route path="/story/gift-of-life" element={<SectionPage section={GiftOfLife} nextPath="/story/organ-donation" nextLabel="Learn about organ donation" previousPath="/story/final-journey" previousLabel="Continue to his final journey" />} />
        <Route path="/story/organ-donation" element={<SectionPage section={OrganDonation} nextPath="/story/recognition" nextLabel="View official recognition" previousPath="/story/gift-of-life" previousLabel="Discover his gift of life" />} />
        <Route path="/story/recognition" element={<SectionPage section={Recognition} nextPath="/story/gallery" nextLabel="View photo gallery" previousPath="/story/organ-donation" previousLabel="Learn about organ donation" />} />
        <Route path="/story/gallery" element={<SectionPage section={Gallery} nextPath="/story/legacy" nextLabel="Reflect on his legacy" previousPath="/story/recognition" previousLabel="View official recognition" />} />
        <Route path="/story/legacy" element={<SectionPage section={Legacy} nextPath="/story/closing" nextLabel="Read final message" previousPath="/story/gallery" previousLabel="View photo gallery" />} />
        <Route path="/story/closing" element={<SectionPage section={Closing} nextPath="/" nextLabel="Returning to the beginning" previousPath="/story/legacy" previousLabel="Reflect on his legacy" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;