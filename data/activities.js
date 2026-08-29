export const activities = [
  {
    slug: 'gondola-ride',
    title: 'Gondola Ride',
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1200&auto=format&fit=crop',
    summary: 'Ride Asia\u2019s highest cable car up to Kongdoori and Apharwat Peak for panoramic Himalayan views.',
    description: 'The Gulmarg Gondola lifts you in two phases, first to Kongdoori station, then on to Apharwat Peak at over 13,000 feet. Along the way you get sweeping views of pine forests, snowfields, and the valley below \u2014 a must whether you ski or simply want the view.',
  },
  {
    slug: 'snowbiking',
    title: 'Snowbiking',
    image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=1200&auto=format&fit=crop',
    summary: 'A fun, easy-to-learn ride across the snow on a specially designed snow bike.',
    description: 'Snowbiking combines the thrill of cycling with the snow-friendly build of a ski-equipped frame. No prior experience is needed \u2014 our guides walk you through balance and control before you take on the open snowfields.',
  },
  {
    slug: 'atv-ride',
    title: 'ATV Ride',
    image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=1200&auto=format&fit=crop',
    summary: 'Power through snowy trails on an all-terrain vehicle for an adrenaline-filled ride.',
    description: 'Our guided ATV rides take you along scenic snow trails around Gulmarg, combining speed and control on rugged terrain. Safety gear and a briefing are provided before every ride.',
  },
  {
    slug: 'bonfire-activity',
    title: 'Bonfire Activity',
    image: 'https://images.unsplash.com/photo-1475738972911-6d4c3b2d3b7e?q=80&w=1200&auto=format&fit=crop',
    summary: 'Wind down after a day on the slopes with a cozy bonfire evening under the stars.',
    description: 'End your day around a crackling bonfire with music, warm drinks, and good company, set against Gulmarg\u2019s crisp mountain night sky.',
  },
];

export function getActivityBySlug(slug) {
  return activities.find((a) => a.slug === slug);
}
