import { useState } from "react";
import { navigationLinks } from "../../utils/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-500 shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 text-white md:h-24 md:px-6 lg:px-8">

        {/* Logo */}
        <a href="#home" onClick={closeMenu}>
          <h3 className="text-2xl font-bold">
            RIAD
          </h3>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden px-4 md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-xl hover:text-blue-300 hover:underline"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-xl hover:text-blue-300 hover:underline"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="text-xl hover:text-blue-300 hover:underline"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-xl hover:text-blue-300 hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            className="rounded-lg border bg-orange-700 px-4 py-2 text-lg text-white shadow-xl hover:bg-orange-800"
          >
            Sign Up
          </button>

          <button
            type="button"
            className="rounded-lg border bg-blue-700 px-4 py-2 text-lg text-white shadow-xl hover:bg-blue-800"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="rounded-xl border px-4 py-2 md:hidden"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="space-y-6 px-6 py-8 md:hidden"
        >
          <ul className="space-y-4">
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block text-xl hover:text-blue-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block text-xl hover:text-blue-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="block text-xl hover:text-blue-300"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block text-xl hover:text-blue-300"
              >
                Contact
              </a>
            </li>

            <li>
              <button
                type="button"
                className="mt-2 w-full rounded-lg border bg-orange-700 px-4 py-2 text-lg text-white shadow-xl"
              >
                Sign Up
              </button>
            </li>

            <li>
              <button
                type="button"
                className="w-full rounded-lg border bg-blue-700 px-4 py-2 text-lg text-white shadow-xl"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;