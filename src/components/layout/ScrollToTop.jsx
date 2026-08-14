import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Don't scroll to top if the route change was triggered by scroll-based navigation
    // (StoryRouteLayout handles scroll positioning in that case)
    const isStoryTransition = sessionStorage.getItem("story-transition-direction");
    if (isStoryTransition) {
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
