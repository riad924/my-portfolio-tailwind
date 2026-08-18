import { useState } from "react";
import { Link } from "react-router-dom";
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

          {/* Sign Up */}
          <Link
            to="/register"
            className="rounded-lg border bg-orange-700 px-4 py-2 text-lg text-white shadow-xl hover:bg-orange-800"
          >
            Sign Up
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="rounded-lg border bg-blue-700 px-4 py-2 text-lg text-white shadow-xl hover:bg-blue-800"
          >
            Login
          </Link>

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

            {/* Home */}
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block text-xl hover:text-blue-300"
              >
                Home
              </a>
            </li>

            {/* About */}
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block text-xl hover:text-blue-300"
              >
                About
              </a>
            </li>

            {/* Services */}
            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="block text-xl hover:text-blue-300"
              >
                Services
              </a>
            </li>

            {/* Contact */}
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block text-xl hover:text-blue-300"
              >
                Contact
              </a>
            </li>

            {/* Mobile Sign Up */}
            <li>
              <Link
                to="/register"
                onClick={closeMenu}
                className="mt-2 block w-full rounded-lg border bg-orange-700 px-4 py-2 text-center text-lg text-white shadow-xl hover:bg-orange-800"
              >
                Sign Up
              </Link>
            </li>

            {/* Mobile Login */}
            <li>
              <Link
                to="/login"
                onClick={closeMenu}
                className="block w-full rounded-lg border bg-blue-700 px-4 py-2 text-center text-lg text-white shadow-xl hover:bg-blue-800"
              >
                Login
              </Link>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;