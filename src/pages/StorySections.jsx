import { StoryRouteLayout } from "../components/layout/StoryRouteLayout";
import { Welcome } from "../components/sections/Welcome";
import { WhoWasHe } from "../components/sections/WhoWasHe";
import { Biography } from "../components/sections/Biography";
import { FinalJourney } from "../components/sections/FinalJourney";
import { GiftOfLife } from "../components/sections/GiftOfLife";
import { OrganDonation } from "../components/sections/OrganDonation";
import { Recognition } from "../components/sections/Recognition";
import { Gallery } from "../components/sections/Gallery";
import { Legacy } from "../components/sections/Legacy";
import { Closing } from "../components/sections/Closing";

export function StorySections() {
    return (
        <StoryRouteLayout
            nextPath="/biography"
            previousPath="/"
            nextLabel="Entering his life story"
            previousLabel="Returning to the beginning"
        >
            <Welcome />
            <WhoWasHe />
            <Biography />
            <FinalJourney />
            <GiftOfLife />
            <OrganDonation />
            <Recognition />
            <Gallery />
            <Legacy />
            <Closing />
        </StoryRouteLayout>
    );
}
