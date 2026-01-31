import { Github, Twitter, MapPin, ExternalLink } from "lucide-react";
import { Sun } from "lucide-react";
function Header() {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-[1280px] mx-auto px-20 py-4">
        <div className="flex items-center justify-between">
          <div className="text-[30px] font-bold text-gray-900 tracking-tight">
            {"<SS />"}
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              About
            </a>
            <a
              href="#work"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Work
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Contact
            </a>
            <div className="h-6 w-px bg-gray-200" />
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
              <Sun className="w-6 h-6 text-gray-600" />
            </button>
            <button className="bg-gray-900 text-white px-4 py-1.5 rounded-xl font-medium hover:bg-gray-800 transition-colors">
              Download CV
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
