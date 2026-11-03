import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Diagnostic Visit',
    price: '$49',
    period: 'one-time',
    desc: 'Perfect when your AC is acting up and you need answers fast.',
    features: [
      'Full system inspection',
      'Cooling performance report',
      'Refrigerant level check',
      'No-obligation repair quote',
      'Fee waived if you book repair',
    ],
    cta: 'Book a Visit',
    highlight: false,
  },
  {
    name: 'Tune-Up Service',
    price: '$129',
    period: 'per unit',
    desc: 'Our most popular service to keep your AC running like new.',
    features: [
      'Deep coil & filter cleaning',
      'Refrigerant top-up (up to 1 lb)',
      'Electrical & safety check',
      'Drain line flush',
      '90-day service warranty',
      'Priority scheduling',
    ],
    cta: 'Schedule Tune-Up',
    highlight: true,
  },
  {
    name: 'Annual Care Plan',
    price: '$249',
    period: 'per year',
    desc: 'Year-round peace of mind for your home cooling system.',
    features: [
      'Two seasonal tune-ups',
      '15% off all repairs',
      'Priority 24/7 emergency response',
      'No diagnostic fees, ever',
      'Transferable to new owner',
    ],
    cta: 'Start Membership',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-24">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Simple Pricing</span>
          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Honest Rates, No Surprises
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Flat pricing on our most popular services. You approve every quote before any work begins.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-8 shadow-sm transition-all duration-500 ${
                p.highlight
                  ? 'border-brand-600 bg-brand-700 text-white shadow-2xl shadow-brand-700/30 lg:-translate-y-4'
                  : 'border-slate-100 bg-white text-slate-700 card-hover'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                  <Star className="h-3.5 w-3.5 fill-white" /> Most Popular
                </span>
              )}

              <h3 className={`text-lg font-bold ${p.highlight ? 'text-white' : 'text-slate-900'}`}>
                {p.name}
              </h3>
              <p className={`mt-2 text-sm ${p.highlight ? 'text-brand-100' : 'text-slate-500'}`}>{p.desc}</p>

              <div className="mt-6 flex items-end gap-1.5">
                <span className={`font-display text-5xl font-extrabold ${p.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {p.price}
                </span>
                <span className={`mb-2 text-sm ${p.highlight ? 'text-brand-200' : 'text-slate-400'}`}>
                  /{p.period}
                </span>
              </div>

              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        p.highlight ? 'bg-white/15 text-white' : 'bg-brand-50 text-brand-600'
                      }`}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className={p.highlight ? 'text-brand-50' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98] ${
                  p.highlight
                    ? 'bg-white text-brand-700 hover:bg-brand-50'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Need something else? Every repair is custom-quoted after a free diagnosis. No work starts without your approval.
        </p>
      </div>
    </section>
  );
}
