import { imgGroup, imgGroup1, imgGroup2 } from "@/imports/svg-t3940";
import imgIconPostgresql from "../../assets/037a513d56d029729e044d6a8e68e68025aaf0c2.png";
import imgIconPostgresq2 from "../../assets/icon-javscript.svg";
import imgIconPostgresq3 from "../../assets/icon-typescript.svg";
import imgIconPostgresq4 from "../../assets/icon-react.svg";
import imgIconPostgresq5 from "../../assets/icon-nextjs.svg";
import imgIconPostgresq6 from "../../assets/icon-nodejs.svg";
import imgIconPostgresq7 from "../../assets/icon-express.svg";
import imgIconPostgresq8 from "../../assets/icon-nest.svg";
import imgIconPostgresq9 from "../../assets/icon-mongodb.svg";
import imgIconPostgresq10 from "../../assets/icon-sass.svg";
import imgIconPostgresq11 from "../../assets/icon-tailwindcss.svg";
import imgIconPostgresq12 from "../../assets/icon-figma.svg";
import imgIconPostgresq13 from "../../assets/icon-cypress.svg";
import imgIconPostgresq14 from "../../assets/icon-storybook.svg";
import imgIconPostgresq15 from "../../assets/icon-git.svg";
import imgIconPostgresq16 from "../../assets/icon-socket.svg";

import TechIcon from "../component-function/techIcon";
function Skills() {
  return (
    <section className="py-24">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-200 text-gray-600 px-5 py-1 rounded-full text-sm font-medium mb-4">
            Skills
          </span>
          <p className="text-gray-600 text-lg mt-4">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <div className="grid grid-cols-8 gap-y-12 gap-x-16 items-start">
          <TechIcon icon={imgIconPostgresq2} label="Javascript" />
          <TechIcon icon={imgIconPostgresq3} label="Typescript" />
          <TechIcon icon={imgIconPostgresq4} label="React" />
          <TechIcon icon={imgIconPostgresq5} label="Next.js" />
          <TechIcon icon={imgIconPostgresq6} label="Node.js" />
          <TechIcon icon={imgIconPostgresq7} label="Express.js" />
          <TechIcon icon={imgIconPostgresq8} label="Nest.js" />
          <TechIcon icon={imgIconPostgresql} label="PostgreSQL" />
          <TechIcon icon={imgIconPostgresq9} label="MongoDB" />
          <TechIcon icon={imgIconPostgresq10} label="Sass/Scss" />
          <TechIcon icon={imgIconPostgresq11} label="Tailwindcss" />
          <TechIcon icon={imgIconPostgresq12} label="Figma" />
          <TechIcon icon={imgIconPostgresq13} label="Cypress" />
          <TechIcon icon={imgIconPostgresq14} label="Storybook" />
          <TechIcon icon={imgIconPostgresq15} label="Git" />
          <TechIcon icon={imgIconPostgresq16} label="Docker" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
