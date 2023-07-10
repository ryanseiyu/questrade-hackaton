import "./App.css";
import Analytics from "./components/Analytics";
import Company from "./components/Company/Company";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Nav/Navbar";
import Newsletter from "./components/Newsletter";



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Analytics />
        <Newsletter />
        <Company />
        <Footer />
      </main>
    </>
  );
}

export default App;
