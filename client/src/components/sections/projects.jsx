import Card from "../common/card";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A modern e-commerce interface with responsive design.",
  },
  {
    id: 3,
    title: "Landing Page",
    description:
      "A clean and responsive landing page for a modern business.",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Section Title */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            My Projects
          </h2>

          <p className="mt-2 text-lg text-gray-600">
            Some of my recent work
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id}>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="leading-relaxed text-gray-600">
                {project.description}
              </p>

              <a
                href="#"
                className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-700"
              >
                View Project →
              </a>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;