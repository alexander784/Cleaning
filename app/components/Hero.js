import Link from "next/link";


export default function Hero() {
    return (
      <section className="bg-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Cleaning Services</h2>
          <p className="text-lg mb-6">Transform your space with our top-notch cleaning solutions.</p>
          <Link href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Get a Quote</Link>
        </div>
      </section>
    );
  }