import { Snowflake, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const cols = [
  {
    title: 'Services',
    links: ['AC Repair', 'Installation', 'Maintenance', 'Duct Cleaning', 'Refrigerant Recharge'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Why Choose Us', 'Reviews', 'Careers', 'Service Areas'],
  },
  {
    title: 'Support',
    links: ['Book a Service', 'Emergency Line', 'Pricing', 'Warranty', 'FAQ'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 text-slate-400">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <Snowflake className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-extrabold text-white">
                PolarCare<span className="text-brand-500">.</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Your trusted neighborhood AC repair center since 2009. Licensed, insured, and obsessed
              with your comfort.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-400" /> (800) 555-1234
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-400" /> help@polarcarefix.com
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-400" /> 1420 Coolant Ave, Riverside, CA 92501
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-brand-600 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">{c.title}</h4>
              <ul className="mt-5 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#contact" className="transition-colors hover:text-brand-400">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} PolarCare AC Repair Center. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-brand-400">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-brand-400">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-brand-400">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
