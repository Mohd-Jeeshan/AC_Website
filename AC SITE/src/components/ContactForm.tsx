import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const services = [
  'AC Repair',
  'New Installation',
  'Seasonal Maintenance',
  'Duct Cleaning',
  'Refrigerant Recharge',
  'Drainage & Leak Fix',
  'Other / Not Sure',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: services[0],
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus('error');
      setErrorMsg('Please provide at least your name and phone number.');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('inquiries').insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      service: form.service,
      message: form.message.trim() || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong on our end. Please try again or call us directly.');
      return;
    }

    setStatus('success');
    setForm({ name: '', phone: '', email: '', service: services[0], message: '' });
  };

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-brand-100 bg-brand-50/50 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-slate-900">Request Received!</h3>
        <p className="mt-3 max-w-sm text-sm text-slate-600">
          Thanks for reaching out. A PolarCare team member will call you within the hour during business
          hours, or first thing the next morning for after-hours requests.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-ghost mt-7"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-900/5 sm:p-9"
    >
      <h3 className="text-2xl font-bold text-slate-900">Book Your Service</h3>
      <p className="mt-2 text-sm text-slate-500">
        Fill this out and we will call you back to confirm a time. No payment required now.
      </p>

      <div className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full Name" required>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="Jane Doe"
              className="input"
              required
            />
          </Field>
          <Field label="Phone Number" required>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder="(555) 123-4567"
              className="input"
              required
            />
          </Field>
        </div>

        <Field label="Email Address (optional)">
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="jane@email.com"
            className="input"
          />
        </Field>

        <Field label="Service Needed">
          <select
            value={form.service}
            onChange={(e) => update('service', e.target.value)}
            className="input"
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Tell us about the problem (optional)">
          <textarea
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            rows={4}
            placeholder="e.g. The AC turns on but only blows warm air, started yesterday..."
            className="input resize-none"
          />
        </Field>
      </div>

      {status === 'error' && (
        <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Request My Service
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </span>
      {children}
    </label>
  );
}
