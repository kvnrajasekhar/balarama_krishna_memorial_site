import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FinalJourney as FinalJourneySection } from "../components/sections/FinalJourney";
import { GiftOfLife } from "../components/sections/GiftOfLife";
import { OrganDonation } from "../components/sections/OrganDonation";
import { Recognition } from "../components/sections/Recognition";
import { Gallery } from "../components/sections/Gallery";
import { Legacy } from "../components/sections/Legacy";
import { Closing } from "../components/sections/Closing";

export function FinalJourney() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#24221f]">
      <Header />
      
      <FinalJourneySection />
      <GiftOfLife />
      <OrganDonation />
      <Recognition />
      <Gallery />
      <Legacy />
      <Closing />
      
      <Footer />
    </main>
  );
}
