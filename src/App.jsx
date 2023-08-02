import CallToAction from "./components/CallToAction";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Featured />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
