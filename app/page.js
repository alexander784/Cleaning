import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div 
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage:"url('/images/Cleaning.jpg')"}}
      >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <Header />
      <Hero />
      </div>

      <Services />
      <Contact />
      <Footer/>
     
    </div>
  );
}
