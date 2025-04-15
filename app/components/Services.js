

export default function Services() {
    return (
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Residential Cleaning</h3>
              <p>Keep your home spotless with our thorough cleaning services.</p>
            </div>
            <div className="bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Commercial Cleaning</h3>
              <p>Maintain a professional workspace with our reliable cleaning.</p>
            </div>
            <div className="bg-gray-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Deep Cleaning</h3>
              <p>Tackle tough dirt and grime with our intensive cleaning solutions.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }