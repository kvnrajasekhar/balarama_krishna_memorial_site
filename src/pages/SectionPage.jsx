import { StoryRouteLayout } from "../components/layout/StoryRouteLayout";

export function SectionPage({ section: Section, nextPath, previousPath, nextLabel, previousLabel }) {
    return (
        <StoryRouteLayout
            nextPath={nextPath}
            previousPath={previousPath}
            nextLabel={nextLabel}
            previousLabel={previousLabel}
        >
            <Section />
        </StoryRouteLayout>
    );
}
