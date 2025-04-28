import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold cursor-pointer">
          Sparkle Cleaning Co.
        </Link>
        <nav className="flex items-center">
          <ul className="flex items-center space-x-8">
            <div className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-white px-3 py-1 cursor-pointer hover:bg-teal-600 hover:text-white hover:rounded-lg transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white px-3 py-1 cursor-pointer hover:bg-teal-600 hover:text-white hover:rounded-lg transition duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-white px-3 py-1 cursor-pointer hover:bg-teal-600 hover:text-white hover:rounded-lg transition duration-200"
                >
                  Gallery
                </Link>
              </li>
            </div>
            <li className="ml-12">
              <Link
                href="/info"
                className="text-white px-3 py-1 cursor-pointer hover:bg-teal-600 hover:text-white hover:rounded-lg transition duration-200"
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