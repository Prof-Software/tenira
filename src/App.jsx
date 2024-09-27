import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import Main from "./pages/Main.jsx"; // Assuming Main.jsx has the layout you're referring to.

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for /app path */}
        <Route path="/app" element={<Main />} />
        
        {/* You can add other routes as needed */}
        <Route
          path="/"
          element={
            <main className="overflow-hidden">
              <Header />
              <Hero />
              <Features />
              <Pricing />
              <Faq />
              <Testimonials />
              <Download />
              <Footer />
            </main>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
