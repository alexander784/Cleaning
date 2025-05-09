"use client";

import { HomeIcon, BuildingOffice2Icon, SparklesIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <HomeIcon className="h-12 w-12 mx-auto mb-4 text-blue-400" />,
      title: "Residential Cleaning",
      description: "Keep your home spotless with our thorough cleaning services.",
    },
    {
      icon: <BuildingOffice2Icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />,
      title: "Commercial Cleaning",
      description: "Maintain a professional workspace with our reliable cleaning.",
    },
    {
      icon: <SparklesIcon className="h-12 w-12 mx-auto mb-4 text-blue-400" />,
      title: "Deep Cleaning",
      description: "Tackle tough dirt and grime with our intensive cleaning solutions.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 flex items-center justify-center min-h-screen bg-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}