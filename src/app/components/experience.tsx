import ExperienceCard from "../component-function/experienceCard";
import imgIconPostgresq100 from "../../assets/logo-upwork.svg";

function Experience() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-200 text-gray-600 px-5 py-1 rounded-full text-sm font-medium mb-4">
            Experience
          </span>
          <p className="text-gray-600 text-lg mt-4">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>

        <div className="space-y-12">
          <ExperienceCard
            logo={imgIconPostgresq100}
            role="Sr. Frontend Developer"
            company="Upwork"
            period="Nov 2021 - Present"
            description={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Ut pretium arcu et massa semper, id fringilla leo semper.",
              "Sed quis justo ac magna.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ]}
          />
          <ExperienceCard
            logo={imgIconPostgresq100}
            role="Team Lead"
            company="Upwork"
            period="Jul 2017 - Oct 2021"
            description={[
              "Sed quis justo ac magna.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Sed quis justo ac magna.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ]}
          />
          <ExperienceCard
            logo={imgIconPostgresq100}
            role="Full Stack Developer"
            company="Greenapex"
            period="Dec 2015 - May 2017"
            description={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
