import aboutImage from "../../assets/photos/about.webp";
function About() {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:flex-row md:px-6 lg:px-8">

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="Riad Bhuiyan"
            className="h-[420px] w-full rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* Content */}
        <div className="text-center md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            About Me
          </h2>

          <p className="mb-6 leading-relaxed text-gray-600">
            Hi! I'm a passionate Web Developer specializing
            in modern UI/UX, responsive layouts, and clean,
            professional design. I love building websites
            that look great and work smoothly on all devices.
          </p>

          <p className="mb-6 leading-relaxed text-gray-600">
            I focus on frontend development using HTML, CSS,
            Tailwind, JavaScript, and React. My goal is to
            turn ideas into beautiful and user-friendly
            web interfaces.
          </p>

          <a
            href="#contact"
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold tracking-wide text-white transition hover:bg-blue-700"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}
export default About;
