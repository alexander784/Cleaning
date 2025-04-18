

export default function Services() {
    return (
      <section id="services" className="py-16 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Residential Cleaning</h3>
            <p className="text-gray-600">Keep your home spotless with our thorough cleaning services.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Commercial Cleaning</h3>
            <p className="text-gray-600">Maintain a professional workspace with our reliable cleaning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Deep Cleaning</h3>
            <p className="text-gray-600">Tackle tough dirt and grime with our intensive cleaning solutions.</p>
          </div>
        </div>
      </div>
    </section>
    );
  }