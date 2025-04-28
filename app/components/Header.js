import React from 'react';
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Sparkle Cleaning Co.</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-white cursor-pointer hover:underline transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-white cursor-pointer hover:underline transition duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                className="text-white cursor-pointer hover:underline transition duration-200"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/Info"
                className="text-white cursor-pointer hover:underline transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}