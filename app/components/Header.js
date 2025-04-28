import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="px-4 flex cursor-pointer font-bold">Sparkle Cleaning Co.</Link>
        <nav className="flex items-center">
          <ul className="flex items-center space-x-8">
            <div className="flex space-x-10">
              <li>
                <Link
                  href="/"
                  className="text-white cursor-pointer hover:text-blue-400 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white cursor-pointer hover:text-blue-400 transition duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-white cursor-pointer hover:text-blue-400 transition duration-200"
                >
                  Gallery
                </Link>
              </li>
            </div>
            <li className="ml-10">
              <Link
                href="/info"
                className="text-white cursor-pointer hover:text-orange-400 transition duration-200"
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