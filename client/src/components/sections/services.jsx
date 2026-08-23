import Card from "../common/card";

const services = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Modern, clean and responsive UI designs using HTML, CSS, Tailwind, and Figma.",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Functional, optimized websites with JavaScript and modern frontend frameworks.",
  },
  {
    id: 3,
    title: "Responsive Design",
    description:
      "Fully mobile-friendly layouts that look great on every screen size.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Section Title */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            My Services
          </h2>

          <p className="mt-2 text-lg text-gray-600">
            What I Offer
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id}>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="text-lg leading-relaxed text-gray-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;