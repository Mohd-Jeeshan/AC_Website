import { PhoneCall, CalendarCheck, Wrench, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Reach Out',
    desc: 'Call us or fill out the booking form. Tell us what your AC is doing — or not doing.',
  },
  {
    icon: CalendarCheck,
    title: 'Pick a Time',
    desc: 'Choose a same-day or scheduled visit that works for you. We confirm by text instantly.',
  },
  {
    icon: Wrench,
    title: 'We Diagnose & Fix',
    desc: 'Your technician inspects, shows you a flat-rate quote, and fixes the issue with your approval.',
  },
  {
    icon: ThumbsUp,
    title: 'Enjoy the Cool',
    desc: 'We clean up, back the repair with a 90-day warranty, and leave your home comfortable.',
  },
];

export default function Process() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200 ring-1 ring-white/15">
            How It Works
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
            Cool Comfort in Four Simple Steps
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            From first call to a perfectly chilled home, we keep the process effortless.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-900/40">
                <s.icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 font-display text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>

              {i < steps.length - 1 && (
                <div className="absolute top-8 -right-4 hidden h-px w-8 bg-gradient-to-r from-brand-500/60 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
