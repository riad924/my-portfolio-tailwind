function Hero() {
  return (
    <section
      id="home"
      className="bg-blue-300 py-24 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-4 text-center tracking-wide text-gray-900 md:px-6 lg:px-8">

        <h1 className="text-4xl font-extrabold md:text-5xl">
          Hello, I'm{" "}
          <span className="text-red-400">
            Riad Bhuiyan
          </span>
        </h1>

        <p className="mt-4 text-lg font-bold md:text-xl">
          Front-End Developer & Designer
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block rounded-xl border bg-gray-900 px-4 py-2 text-xl font-bold text-white hover:shadow-xl"
        >
          Hire Me
        </a>

      </div>
    </section>
  );
}

export default Hero;