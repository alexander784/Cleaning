import React from 'react';
import Link from "next/link";

export default function Header() {
    return (
      <header className="text-white">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Sparkle Cleaning Co.</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="#services" className="hover:underline">Services</Link></li>
              <li><Link href="#gallery" className="hover:underline">Gallery</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

