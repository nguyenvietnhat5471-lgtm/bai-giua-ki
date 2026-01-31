import imgPic1 from "../../assets/8781bda67a25952db5724f48492cd455a6e81952.png";
function About() {
  return (
    <section className="bg-gray-50 py-24" id="about">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-200 text-gray-600 px-5 py-1 rounded-full text-sm font-medium mb-4">
            About me
          </span>
        </div>

        <div className="grid grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="w-full aspect-[4/5] border-8 border-gray-200 bg-gray-200 relative">
              <div className="absolute -left-5 -bottom-5 w-full h-full bg-gray-100">
                <img
                  src={imgPic1}
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Curious about me? Here you have it:
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-6">
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p className="font-medium">Finally, some quick bits about me.</p>
              <ul className="grid grid-cols-2 gap-2.5">
                <li className="flex items-center gap-2">
                  • B.E. in Computer Engineering
                </li>
                <li className="flex items-center gap-2">
                  • Full time freelancer
                </li>
                <li className="flex items-center gap-2">• Avid learner</li>
                <li className="flex items-center gap-2">
                  • Aspiring indie hacker
                </li>
              </ul>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
