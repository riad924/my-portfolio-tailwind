import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Services from "../components/sections/services";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;