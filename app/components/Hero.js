import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative text-white py-20 bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/images/Cleaning.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Professional Cleaning Services
        </h2>
        <p className="text-lg mb-6 drop-shadow-md">
          Transform your space with our top-notch cleaning solutions.
        </p>
        <Link
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-md"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}