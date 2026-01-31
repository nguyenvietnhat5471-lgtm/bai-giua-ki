import Header from "./components/header.tsx";
import Hero from "./components/hero.tsx";
import About from "./components/about.tsx";
import Skills from "./components/skills.tsx";
import Experience from "./components/experience.tsx";
import Work from "./components/work.tsx";
import Testimonials from "./components/testimonials.tsx";
import Contact from "./components/contact.tsx";
import Footer from "./components/footer.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Skills Section */}
      <Skills />
      {/* Experience Section */}
      <Experience />
      {/* Work Section */}
      <Work />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
