import imgAvatar from "../../assets/1e25dfd556240f49ec9ddde4760cb3346cc085e3.png";
import TestimonialCard from "../component-function/testimonialCard";
function Testimonials() {
  return (
    <section className="bg-gray-50 py-24" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-200 text-gray-600 px-5 py-1 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <p className="text-gray-600 text-lg mt-4">
            Nice things people have said about me:
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <TestimonialCard
              key={i}
              avatar={imgAvatar}
              quote="Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development."
              name="Krisztian Gyuris"
              title="Founder - inboxgenie.io"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
