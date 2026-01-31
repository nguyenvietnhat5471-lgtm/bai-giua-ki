import ProjectCard from "../component-function/projectCard";
import imgPicture from "../../assets/13a157f2d0bfafa5cbd6a89dfe634a542f95ebd2.png";
function Work() {
  return (
    <section className="py-24" id="work">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-200 text-gray-600 px-5 py-1 rounded-full text-sm font-medium mb-4">
            Work
          </span>
          <p className="text-gray-600 text-lg mt-4">
            Some of the noteworthy projects I have built:
          </p>
        </div>

        <div className="space-y-12">
          <ProjectCard
            image={imgPicture}
            title="Fiskil"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            tags={[
              "React",
              "Next.js",
              "Typescript",
              "Nest.js",
              "PostgreSQL",
              "Tailwindcss",
              "Figma",
              "Cypress",
              "Storybook",
              "Git",
            ]}
            reverse={false}
          />
          <ProjectCard
            image={imgPicture}
            title="Fiskil"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            tags={[
              "React",
              "Next.js",
              "Typescript",
              "Nest.js",
              "PostgreSQL",
              "Tailwindcss",
              "Figma",
              "Cypress",
              "Storybook",
              "Git",
            ]}
            reverse={true}
          />
          <ProjectCard
            image={imgPicture}
            title="Fiskil"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            tags={[
              "React",
              "Next.js",
              "Typescript",
              "Nest.js",
              "PostgreSQL",
              "Tailwindcss",
              "Figma",
              "Cypress",
              "Storybook",
              "Git",
            ]}
            reverse={false}
          />
        </div>
      </div>
    </section>
  );
}

export default Work;
