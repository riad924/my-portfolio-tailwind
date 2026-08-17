function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-gray-300 md:py-12">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 text-center md:grid-cols-4 md:px-6 lg:px-8">

        {/* Company */}
        <div>
          <h3 className="text-xl font-bold">
            RN Company
          </h3>

          <p className="mt-2">
            Modern web solutions for modern businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-4">
          <h3 className="mb-4 text-xl font-bold">
            Quick Links
          </h3>

          <div className="flex flex-col space-y-1">
            <a href="#home" className="hover:underline">
              Home
            </a>

            <a href="#about" className="hover:underline">
              About
            </a>

            <a href="#services" className="hover:underline">
              Services
            </a>

            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-4">
          <h3 className="mb-4 text-xl font-bold">
            Contact Me
          </h3>

          <div className="space-y-1">
            <p>Phone: 01743425540</p>
            <p>Email: riadsust@gmail.com</p>
            <p>Address: Akhaliya, Sylhet</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-4">
          <h3 className="text-xl font-bold">
            Follow Me
          </h3>

          <div className="mt-4 flex justify-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-xl text-gray-500 hover:text-blue-600"
            >
              <i className="fab fa-facebook"></i>
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="text-xl text-gray-500 hover:text-sky-500"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-xl text-gray-500 hover:text-blue-700"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 md:px-6 lg:px-8">
        <hr />
      </div>

      <p className="mt-8 text-center text-gray-300">
        © 2026 MyPortfolio | All Rights Reserved
      </p>

    </footer>
  );
}

export default Footer;