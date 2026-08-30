export const metadata = {
  title: "Terms and Conditions | Gulmarg Apex Ski School",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
      <h1 className="font-display font-bold text-4xl text-alpine-950 mb-8">
        Terms and Conditions
      </h1>
      <div className="prose prose-slate max-w-none space-y-5 text-slate-600 leading-relaxed">
        <p>
          This outlines the terms governing use of this website and booking of
          packages with Gulmarg Apex Ski School. Replace with legally reviewed
          terms before launch.
        </p>
        <h2 className="font-display font-semibold text-xl text-alpine-950 pt-4">
          Bookings
        </h2>
        <p>
          All package bookings are subject to availability and confirmation via
          direct communication with our team.
        </p>
        <h2 className="font-display font-semibold text-xl text-alpine-950 pt-4">
          Liability
        </h2>
        <p>
          Skiing, snowboarding, and trekking involve inherent risk. Guests
          participate at their own discretion and are expected to follow guide
          and instructor safety instructions at all times.
        </p>
      </div>
    </div>
  );
}
