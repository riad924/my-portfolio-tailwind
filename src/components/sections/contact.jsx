import { sendContactMessage } from "../../services/contact.service";

function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
    };

    try {
      const response = await sendContactMessage(formData);

      console.log(response);
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Contact Me
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Feel free to reach out anytime!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-gray-100"
        >
          <div className="mb-5">
            <label className="block text-left text-gray-700 font-medium mb-1">
              Your Name
            </label>

            <input
              name="name"
              type="text"
              className="w-full border border-gray-300 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 rounded-lg py-2.5 px-4 outline-none transition"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-gray-700 font-medium mb-1">
              Your Email
            </label>

            <input
              name="email"
              type="email"
              className="w-full border border-gray-300 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 rounded-lg py-2.5 px-4 outline-none transition"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;