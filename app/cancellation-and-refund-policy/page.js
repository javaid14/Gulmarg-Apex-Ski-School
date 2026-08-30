export const metadata = {
  title: "Cancellation / Refund Policy | Gulmarg Apex Ski School",
};

export default function CancellationPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
      <h1 className="font-display font-bold text-4xl text-alpine-950 mb-8">
        Cancellation / Refund Policy
      </h1>
      <div className="prose prose-slate max-w-none space-y-5 text-slate-600 leading-relaxed">
        <p>
          This policy outlines cancellation and refund terms for package
          bookings. Replace with your finalized terms before launch.
        </p>
        <h2 className="font-display font-semibold text-xl text-alpine-950 pt-4">
          Cancellations
        </h2>
        <p>
          Cancellations made more than 15 days before the trip start date are
          eligible for a partial refund. Cancellations closer to the trip date
          may not be eligible for a refund.
        </p>
        <h2 className="font-display font-semibold text-xl text-alpine-950 pt-4">
          Weather &amp; Safety
        </h2>
        <p>
          In case of trip disruption due to weather or safety conditions,
          alternate dates or credit will be offered where possible.
        </p>
      </div>
    </div>
  );
}
