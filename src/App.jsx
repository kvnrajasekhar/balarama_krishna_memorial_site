import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Landing } from "./pages/Landing";
import { Biography } from "./pages/Biography";
import { FinalJourney } from "./pages/FinalJourney";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/final-journey" element={<FinalJourney />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;