import { Award, Clock, BadgeDollarSign, ShieldCheck, Users, Sparkles } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '12k+', label: 'Repairs Completed' },
  { value: '98%', label: 'First-Visit Fix Rate' },
  { value: '24/7', label: 'Support Available' },
];

const reasons = [
  {
    icon: Award,
    title: 'Certified Technicians',
    desc: 'Every technician is EPA-certified and factory-trained on all major AC brands.',
  },
  {
    icon: Clock,
    title: 'On-Time Guarantee',
    desc: 'We respect your schedule. If we are late, your diagnosis is on the house.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Upfront Transparent Pricing',
    desc: 'Flat-rate quotes before any work begins. No surprises, no hidden fees.',
  },
  {
    icon: ShieldCheck,
    title: '90-Day Repair Warranty',
    desc: 'If the same issue returns within 90 days, we fix it again free of charge.',
  },
  {
    icon: Users,
    title: 'Family-Owned & Local',
    desc: 'A neighborhood team that treats your home like our own — shoe covers included.',
  },
  {
    icon: Sparkles,
    title: 'Clean Work, Every Time',
    desc: 'We lay drop cloths, clean up thoroughly, and leave your space spotless.',
  },
];

const whyImg =
  'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1000';

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24">
      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10">
              <img src={whyImg} alt="Technician inspecting an AC unit" className="h-[460px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:block lg:-right-8">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                  <Award className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-display text-2xl font-extrabold text-slate-900">4.9 / 5</p>
                  <p className="text-xs text-slate-500">Average customer rating</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="section-label">Why PolarCare</span>
            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              The Comfort Pros Your Neighbors Already Trust
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We have built our reputation one honest repair at a time. Here is what sets us apart from
              the rest.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 rounded-3xl bg-brand-700 p-10 text-center sm:grid-cols-4 lg:p-14">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-extrabold text-white lg:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
