import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-black to-gray-200 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About Sparkle Cleaning Co.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          At Sparkle Cleaning Co., we are dedicated to delivering exceptional
          cleaning services for homes and businesses. With years of experience and
          a passion for cleanliness, our team uses eco-friendly products and
          advanced techniques to ensure your space shines. Trust us to transform
          your environment with professionalism and care.
        </p>
        <Link
          href="/info"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}