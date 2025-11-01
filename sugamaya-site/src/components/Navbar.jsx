import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 bg-#FFEDCD backdrop-blur transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          {/* Outer border with tricolor gradient */}
          <div className="rounded-full p-[2px] bg-gradient-to-r from-[#FF9933] via-white to-[#138808] shadow-md">
            {/* Inner white background */}
            <nav
              className="flex items-center justify-between bg-white rounded-full px-6 py-3"
              aria-label="Primary"
            >
              {/* Logo + Title */}
              <div className="flex items-center gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 focus-ring"
                  aria-label="Sugamaya Governance home"
                >
                  <div className="h-9 w-9 flex items-center justify-center bg-white rounded-full shadow">
                    <img
                      src="/image.png"
                      alt="Sugamaya logo"
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                  <span className="font-heading text-lg font-black tracking-tight">
                    <span className="text-[#FF9933]">Suga</span>
                    <span className="text-[#FF9933]">maya </span>
                    <span className="text-[#138808]">Governance</span>
                  </span>
                </Link>
              </div>
  
              {/* Navigation Links */}
              <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
                {["Services", "Projects", "Contact", "About"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-700 hover:text-[#E65100] transition-colors duration-200 px-1 py-2 rounded"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
  
              {/* Get Started Button */}
              <div className="flex items-center gap-2">
                <a
                  href="#get-started"
                  className="focus-ring inline-flex items-center rounded-full bg-[#E40000] text-white px-5 py-2 text-sm font-semibold shadow hover:bg-[#c30000] transition-all duration-200"
                >
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }