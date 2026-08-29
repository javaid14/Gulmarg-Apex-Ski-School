import ActivityCard from '@/components/ActivityCard';
import { activities } from '@/data/activities';

export const metadata = {
  title: 'Activities | Gulmarg Ski Himalaya',
  description: 'Gondola rides, ATV rides, snowbiking, and bonfire evenings in Gulmarg.',
};

export default function ActivitiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="max-w-2xl mb-14">
        <p className="text-ember-600 font-semibold uppercase tracking-widest text-sm mb-3">Activities</p>
        <h1 className="font-display font-bold text-4xl text-alpine-950 mb-4">
          Adventure Activities in Gulmarg
        </h1>
        <p className="text-slate-600 leading-relaxed">
          Beyond skiing and snowboarding, Gulmarg has a full menu of adventure &mdash; pick your thrill.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((a) => <ActivityCard key={a.slug} activity={a} />)}
      </div>
    </div>
  );
}
