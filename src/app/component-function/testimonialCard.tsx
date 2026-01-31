function TestimonialCard({
  avatar,
  quote,
  name,
  title,
}: {
  avatar: string;
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <div className="bg-white rounded-xl p-12 shadow-sm flex flex-col items-center text-center space-y-6">
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <p className="text-gray-600 leading-6">{quote}</p>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
