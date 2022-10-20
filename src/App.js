import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage.js";
import LandingPage from "./pages/LandingPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/about" element={<AboutPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
