import { Snowflake, ShieldCheck, Clock, Star } from 'lucide-react';

const heroImg =
  'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <img src={heroImg} alt="AC technician at work" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-brand-950/80" />
      </div>

      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="container-px relative flex min-h-screen flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200 ring-1 ring-white/15 backdrop-blur">
            <Snowflake className="h-3.5 w-3.5" /> Trusted AC Experts Since 2009
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Stay Cool Year-Round with <span className="text-brand-400">Expert AC Repair</span> You Can Trust
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Fast, reliable, and affordable air conditioning repair, installation, and maintenance.
            Licensed technicians, transparent pricing, and a comfort guarantee on every job.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              Book Free Diagnosis
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              { icon: Clock, value: '24/7', label: 'Emergency Service' },
              { icon: ShieldCheck, value: '90-Day', label: 'Repair Warranty' },
              { icon: Star, value: '4.9/5', label: '1,200+ Reviews' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300 ring-1 ring-white/10">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-white">{s.value}</p>
                  <p className="text-xs text-slate-400">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-16 bg-gradient-to-b from-transparent to-slate-50" />
    </section>
  );
}
