import Hero from "./components/Hero";
import Services from "./services/page";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./Gallery/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/images/Cleaning.jpg')" }}
      >
        <Hero />
      </div>
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}