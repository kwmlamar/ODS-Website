import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-sky-400 mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-gray-300">
              <a href="tel:+12424705294" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <span>📞</span>
                <span>+1 (242) 470-5294</span>
              </a>
              <a href="mailto:info@odsconstruction.com" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <span>✉️</span>
                <span>info@odsconstruction.com</span>
              </a>
              <a href="https://wa.me/12424705294" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>Eleuthera, The Bahamas</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-sky-400 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & About */}
          <div>
            <h4 className="text-xl font-bold text-sky-400 mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xl">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xl">📷</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Family-run construction business serving Eleuthera since 2000
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} ODS Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

