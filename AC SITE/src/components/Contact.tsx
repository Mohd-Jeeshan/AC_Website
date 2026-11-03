import { Phone, Mail, MapPin, Clock, Snowflake } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '(800) 555-1234', href: 'tel:+18005551234' },
  { icon: Mail, label: 'Email Us', value: 'help@polarcarefix.com', href: 'mailto:help@polarcarefix.com' },
  { icon: MapPin, label: 'Visit Us', value: '1420 Coolant Ave, Riverside, CA 92501' },
  { icon: Clock, label: 'Open Hours', value: 'Mon–Sat 7am–9pm · 24/7 Emergency' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />

      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Get In Touch</span>
          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Book Your AC Service Today
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Send us a request and we will call you back within the hour. Or reach us directly using the
            details below.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((c) => {
                const content = (
                  <div className="card-hover flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {c.label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-800">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl bg-brand-700 p-6 text-white">
              <div className="flex items-center gap-2.5">
                <Snowflake className="h-5 w-5 text-brand-200" />
                <p className="font-display text-lg font-bold">Emergency? Call us right now.</p>
              </div>
              <p className="mt-2 text-sm text-brand-100">
                AC out on a weekend or in the middle of the night? Our emergency line is staffed 24/7.
                We will get a technician to you fast.
              </p>
              <a
                href="tel:+18005551234"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-700 transition-colors hover:bg-brand-50"
              >
                <Phone className="mr-2 h-4 w-4" /> Call (800) 555-1234
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
