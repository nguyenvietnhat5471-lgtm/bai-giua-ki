import { ExternalLink } from "lucide-react";
function ProjectCard({
  image,
  title,
  description,
  tags,
  reverse,
}: {
  image: string;
  title: string;
  description: string;
  tags: string[];
  reverse: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-sm ${reverse ? "" : ""}`}
    >
      <div className={`grid grid-cols-2 ${reverse ? "" : ""}`}>
        {reverse ? (
          <>
            <div className="p-12 flex flex-col justify-center space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 leading-6">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-12 flex items-center justify-center">
              <img
                src={image}
                alt={title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </>
        ) : (
          <>
            <div className="bg-gray-50 p-12 flex items-center justify-center">
              <img
                src={image}
                alt={title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="p-12 flex flex-col justify-center space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 leading-6">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-5 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
