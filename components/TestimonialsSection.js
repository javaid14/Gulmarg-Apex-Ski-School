import Testimonial from "@/components/Testimonial";

const TESTIMONIALS = [
  {
    name: "Colby Weintraub",
    quote:
      "The most incredible of adventures. My guide knew so much about the mountain, and the shop had a great selection of touring gear perfect for backcountry skiing.",
  },
  {
    name: "Nidhi Ostwal",
    quote:
      "The service was excellent. Our instructor was friendly, patient, and incredibly helpful, making skiing feel easy, comfortable, and thoroughly enjoyable.",
  },
  {
    name: "Vijeth Patil",
    quote:
      "A very good snowboarding experience with a lot to learn from the instructors. Highly recommended for anyone picking up snowboarding for the first time.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative slope-edge-top bg-alpine-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-ember-400 font-semibold uppercase tracking-widest text-sm mb-3 pt-4">
            Testimonials
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-snow mb-4">
            What Our Guests Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <Testimonial key={t.name} name={t.name} quote={t.quote} />
          ))}
        </div>
      </div>
    </section>
  );
}
