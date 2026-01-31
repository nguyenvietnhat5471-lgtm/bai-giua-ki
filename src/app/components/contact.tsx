import { Github, Twitter, ExternalLink, Figma } from "lucide-react";
function Contact() {
  return (
    <section className="py-24" id="contact">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <span className="inline-block bg-gray-200 text-gray-600 px-5 py-1 rounded-full text-sm font-medium">
            Get in touch
          </span>
          <p className="text-gray-600 text-lg mt-4">
            What's next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
          <div className="space-y-4 py-6">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-4xl font-bold text-gray-900">
                reachsagarshah@gmail.com
              </h2>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ExternalLink className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-3xl font-bold text-gray-900">
                +91 8980500565
              </h3>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ExternalLink className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
          <p className="text-gray-600">
            You may also find me on these platforms!
          </p>
          <div className="flex justify-center gap-1">
            <a
              href="#"
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Github className="w-6 h-6 text-gray-600" />
            </a>
            <a
              href="#"
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Twitter className="w-6 h-6 text-gray-600" />
            </a>
            <a
              href="#"
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Figma className="w-6 h-6 text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
