import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Maria Gonzalez',
    role: 'Homeowner, Riverside',
    rating: 5,
    text: 'My AC died on the hottest day of the year. PolarCare had a technician at my door within two hours and the house was cool again by dinner. Fair price, no upselling.',
  },
  {
    name: 'James Okafor',
    role: 'Cafe Owner, Downtown',
    rating: 5,
    text: 'They service all three units at my cafe through the annual plan. Always on time, always tidy, and the 15% repair discount has already paid for itself twice over.',
  },
  {
    name: 'Priya Sharma',
    role: 'Apartment Renter, Midtown',
    rating: 5,
    text: 'I was worried about hidden fees but the technician showed me the flat quote on his tablet before touching anything. The repair cost exactly what he said it would.',
  },
  {
    name: 'David Chen',
    role: 'Property Manager, Eastside',
    rating: 5,
    text: 'I manage 14 rental units and PolarCare is the only AC company I call now. They coordinate with my tenants directly and send me a report after every visit.',
  },
  {
    name: 'Aisha Williams',
    role: 'Homeowner, Suburbs',
    rating: 5,
    text: 'The tune-up made a visible difference. My bedroom used to take an hour to cool down and now it is comfortable in fifteen minutes. Wish I had called sooner.',
  },
  {
    name: 'Tom Becker',
    role: 'Homeowner, Hillcrest',
    rating: 5,
    text: 'Honest people. Another company told me I needed a whole new unit. PolarCare found a bad capacitor, replaced it for $180, and my 10-year-old AC runs like new.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-24">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Customer Stories</span>
          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Loved by 12,000+ Happy Homes
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent-500 text-accent-500" />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-700">4.9 out of 5</span>
            <span className="text-sm text-slate-400">· 1,200+ verified reviews</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="card-hover relative rounded-2xl border border-slate-100 bg-slate-50/60 p-7"
            >
              <Quote className="absolute right-6 top-6 h-9 w-9 text-brand-100" />
              <div className="flex">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                  {r.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
