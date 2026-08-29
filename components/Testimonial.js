import { Quote } from 'lucide-react';

export default function Testimonial({ quote, name }) {
  return (
    <div className="rounded-2xl bg-alpine-800/60 border border-white/5 p-8">
      <Quote className="h-8 w-8 text-ember-500 mb-4" />
      <p className="text-ice-100 leading-relaxed mb-6">{quote}</p>
      <p className="font-display font-semibold text-snow">{name}</p>
    </div>
  );
}
