import { Github, Twitter, MapPin, ExternalLink, Figma } from "lucide-react";
import imgPic from "../../assets/f85cf45511cd2ba02a83d564218d6500a134a91d.png";
function Hero() {
  return (
    <section className="max-w-[1280px] mx-auto px-20 py-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div className="space-y-12">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-gray-900 tracking-tight leading-[72px]">
              Hi, I'm Sagar 👋
            </h1>
            <p className="text-gray-600 leading-6 text-base max-w-2xl">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-6 h-6" />
              <span>Ahmedabad, India</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span>Available for new projects</span>
            </div>
          </div>

          <div className="flex gap-1">
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

        <div className="relative flex justify-end">
          <div className="w-[280px] h-[320px] border-8 border-gray-200 bg-gray-200 relative">
            <div className="absolute -right-5 -bottom-5 w-[280px] h-[320px] bg-gray-100">
              <img
                src={imgPic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
