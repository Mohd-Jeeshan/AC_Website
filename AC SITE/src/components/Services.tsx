import { Wrench, Snowflake, Wind, ThermometerSnowflake, Fan, Droplets, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'AC Repair',
    desc: 'Fast diagnosis and repair for all brands. We fix cooling, leaks, strange noises, and electrical faults — often same day.',
    features: ['All major brands', 'Same-day visits', 'Genuine parts'],
  },
  {
    icon: Snowflake,
    title: 'New Installation',
    desc: 'Expert installation of split, window, and central AC systems sized correctly for your space and budget.',
    features: ['Free load assessment', 'Energy-efficient units', 'Clean install guarantee'],
  },
  {
    icon: Fan,
    title: 'Seasonal Maintenance',
    desc: 'Tune-ups that keep your unit efficient, extend its lifespan, and prevent costly breakdowns before they happen.',
    features: ['Coil & filter cleaning', 'Refrigerant top-up', 'Performance check'],
  },
  {
    icon: Wind,
    title: 'Duct Cleaning',
    desc: 'Remove dust, allergens, and mold from your ductwork for cleaner air and better airflow throughout your home.',
    features: ['HEPA filtration', 'Odor removal', 'Allergy relief'],
  },
  {
    icon: ThermometerSnowflake,
    title: 'Refrigerant Recharge',
    desc: 'Low cooling? We detect leaks, seal them, and recharge your system to factory-spec cooling performance.',
    features: ['Leak detection', 'EPA-safe refrigerant', 'Pressure testing'],
  },
  {
    icon: Droplets,
    title: 'Drainage & Leak Fix',
    desc: 'Clogged drain lines and water leaks damage ceilings and walls. We clear, flush, and protect your system.',
    features: ['Line flushing', 'Pan replacement', 'Mold prevention'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Our Services</span>
          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Complete AC Care Under One Roof
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From emergency repairs to full installations, our certified technicians handle every aspect
            of your air conditioning system.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="card-hover group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <s.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
              >
                Book this service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
