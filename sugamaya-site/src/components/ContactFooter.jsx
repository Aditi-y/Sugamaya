export default function ContactFooter() {
  return (
    <footer id="contact" className="mt-16 bg-ash border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="font-heading text-xl font-extrabold text-navy">Sugamaya Governance</p>
            <p className="mt-2 text-sm text-gray-600">India’s leading digital solutions agency committed to transparent and efficient governance.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#policies" className="hover:underline">Policies</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Services</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#services" className="hover:underline">Website Development</a></li>
              <li><a href="#services" className="hover:underline">Mobile Apps</a></li>
              <li><a href="#services" className="hover:underline">Cloud Solutions</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Connect</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"> <span>Kandivali East, Mumbai, Maharashtra, India</span></li>
              <li className="flex items-center gap-2"> <a href="mailto:contact@sugamaya.gov" className="hover:underline">contact@sugmaya.com</a></li>
              <li className="flex items-center gap-2"> <a href="tel:+91 7383136785" className="hover:underline">+91 7383136785</a></li>
              <li className="flex gap-3 pt-2" aria-label="Social links">
                <a href="#" aria-label="LinkedIn" className="hover:underline">LinkedIn</a>
                <a href="#" aria-label="Instagram" className="hover:underline">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="brand-gradient h-1 w-full" aria-hidden="true" />
      <div className="bg-white text-xs text-gray-500 py-4 text-center">© {new Date().getFullYear()} Sugamaya Governance</div>
    </footer>
  )
}


