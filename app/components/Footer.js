import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-black text-lg font-semibold mb-4">Sparkle Cleaning Co</h3>
            <p className="text-sm">
              Trusted by Businesses Across the continent 
            </p>
          </div>
          <div>
            <h3 className="text-black text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange-950 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-orange-950 transition-colors duration-200">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-950 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-950 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-black text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">
                sparle@gmail.com
              </li>
              <li className="text-sm">
                Phone: +254 796097262
              </li>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-orange-950">
                  <span className="text-sm">Twitter</span>
                </a>
                <a href="#" className="hover:text-orange-950">
                  <span className="text-sm">GitHub</span>
                </a>
                <a href="#" className="hover:text-orange-950">
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} sparkle All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;