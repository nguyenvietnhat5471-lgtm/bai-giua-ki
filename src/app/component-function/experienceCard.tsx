import { ExternalLink } from "lucide-react";
function ExperienceCard({
  logo,
  role,
  company,
  period,
  description,
}: {
  logo: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="grid grid-cols-[auto_1fr_auto] gap-8 items-start">
        <div className="w-24 h-24 flex items-center justify-center">
          <img
            src={logo}
            alt={company}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">{role}</h3>
          <ul className="space-y-1 text-gray-600">
            {description.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-gray-600 whitespace-nowrap">{period}</div>
      </div>
    </div>
  );
}

export default ExperienceCard;
