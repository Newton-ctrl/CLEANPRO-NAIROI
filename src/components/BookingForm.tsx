import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Send, Check, Info } from 'lucide-react';
import { SERVICES, PAYMENT_METHODS } from '../lib/servicesData';

const areas = [
  'Westlands', 'Kilimani', 'Karen', 'Lavington', 'Parklands',
  'Kileleshwa', 'Ruaka', 'Syokimau', 'Langata', 'South B/C',
  'Kasarani', 'Roysambu', 'Thika Road', 'CBD', 'Other',
];

// Payment method icons
function PaymentIcon({ id }: { id: string }) {
  if (id === 'mpesa') return (
    <svg viewBox="0 0 40 24" className="w-10 h-6" fill="none">
      <rect width="40" height="24" rx="4" fill="#4CAF50" />
      <text x="20" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white" fontFamily="sans-serif">M-PESA</text>
    </svg>
  );
  if (id === 'card') return (
    <svg viewBox="0 0 40 24" className="w-10 h-6" fill="none">
      <rect width="40" height="24" rx="4" fill="#1a1f71" />
      <circle cx="14" cy="12" r="6" fill="#EB001B" fillOpacity="0.9" />
      <circle cx="26" cy="12" r="6" fill="#F79E1B" fillOpacity="0.9" />
      <path d="M20 7.2a6 6 0 0 1 0 9.6A6 6 0 0 1 20 7.2z" fill="#FF5F00" />
    </svg>
  );
  if (id === 'cash') return (
    <svg viewBox="0 0 40 24" className="w-10 h-6" fill="none">
      <rect width="40" height="24" rx="4" fill="#166534" />
      <text x="20" y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4ade80" fontFamily="sans-serif">KSh</text>
    </svg>
  );
  if (id === 'bank') return (
    <svg viewBox="0 0 40 24" className="w-10 h-6" fill="none">
      <rect width="40" height="24" rx="4" fill="#1e3a5f" />
      <text x="20" y="10" textAnchor="middle" fontSize="6" fill="#93c5fd" fontFamily="sans-serif">BANK</text>
      <text x="20" y="19" textAnchor="middle" fontSize="6" fill="#93c5fd" fontFamily="sans-serif">TRANSFER</text>
    </svg>
  );
  return null;
}

export default function BookingForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<string>('');
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [form, setForm] = useState({
    name: '', phone: '', email: '', area: '', date: '', time: '', notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const currentService = SERVICES.find(s => s.id === selectedService);
  const currentTier = currentService?.pricing.find(t => t.label === selectedTier);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Complete booking record payload
    const payload: Record<string, string> = {
      name: form.name,
      phone: form.phone,
      area: form.area,
      date: form.date,
      time: form.time || 'Flexible',
      notes: form.notes || 'None',
      service: currentService?.title || selectedService,
      package: selectedTier,
      estimatedPrice: currentTier?.price || 'TBD',
      paymentMethod: selectedPayment,
    };

    if (form.email && form.email.trim() !== '') {
      payload.email = form.email.trim();
    }

    try {
      const response = await fetch('https://formspree.io/f/xppaeywp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError('Failed to send booking request. Please try again or contact us directly.');
      }
    } catch (error) {
      setSubmitError('Connection error. Please try again or contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-white placeholder-white/30 text-sm outline-none transition-all duration-200 focus:ring-1 focus:ring-[#c9a84c]`;
  const inputStyle = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
  };

  // ---- SUCCESS STATE ----
  if (submitted) {
    const payMethod = PAYMENT_METHODS.find(p => p.id === selectedPayment);
    return (
      <div className="text-center py-10 font-sans">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
        >
          <CheckCircle size={64} style={{color: '#c9a84c'}} className="mx-auto mb-5" />
          <h3 className="font-serif text-3xl text-white font-bold mb-2">Booking Request Sent!</h3>
          <p className="text-slate-300 mb-6 text-sm leading-relaxed max-w-md mx-auto">
            Thank you, <span className="text-white font-semibold">{form.name}</span>. Your request has been logged and our Nairobi dispatch team will call or WhatsApp you within 30 minutes to confirm cleaner arrival.
          </p>

          {/* Full Booking Summary */}
          <div className="rounded-2xl p-6 mb-7 text-left bg-white/5 border border-amber-500/20 max-w-lg mx-auto shadow-xl">
            <div className="text-xs font-bold uppercase tracking-widest mb-4 text-[#e0c06b] flex items-center justify-between border-b border-white/10 pb-3">
              <span>Complete Booking Record</span>
              <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Received</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-slate-400 font-medium">Customer Name:</span>
                <span className="text-white font-bold">{form.name}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-slate-400 font-medium">Phone Number:</span>
                <span className="text-white font-bold">{form.phone}</span>
              </div>
              {form.email && (
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-slate-400 font-medium">Email Address:</span>
                  <span className="text-white/80">{form.email}</span>
                </div>
              )}
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-slate-400 font-medium">Nairobi Area:</span>
                <span className="text-white font-bold">{form.area}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-slate-400 font-medium">Scheduled Date:</span>
                <span className="text-white font-bold">{form.date} {form.time ? `at ${form.time}` : ''}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-slate-400 font-medium">Service Type:</span>
                <span className="text-white font-bold">{currentService?.title || selectedService}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-slate-400 font-medium">Package Tier:</span>
                <span className="text-[#e0c06b] font-bold">{selectedTier}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-slate-400 font-medium">Payment Option:</span>
                <span className="text-white font-bold">{payMethod?.label || selectedPayment}</span>
              </div>
              {form.notes && (
                <div className="flex justify-between items-start pt-1">
                  <span className="text-slate-400 font-medium">Notes:</span>
                  <span className="text-white/80 max-w-[220px] text-right text-[11px]">{form.notes}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-3 border-t border-amber-500/20 mt-2">
                <span className="text-slate-300 font-bold text-sm">Estimated Total:</span>
                <span className="text-[#e0c06b] font-extrabold text-lg">{currentTier?.price}</span>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/254785254110"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-lg"
            style={{background: 'rgba(37,211,102,0.2)', border: '1.5px solid rgba(37,211,102,0.5)', color: '#25d366'}}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat with Dispatch on WhatsApp
          </a>
        </motion.div>
      </div>
    );
  }

  // ---- STEP INDICATOR TABS ----
  const steps = [
    { n: 1, label: '1. Service & Package' },
    { n: 2, label: '2. Customer Details' },
    { n: 3, label: '3. Payment & Submit' },
  ];

  return (
    <div className="font-sans">
      {/* Step Indicator Bar */}
      <div className="flex items-center justify-between mb-8 bg-white/5 p-2 rounded-2xl border border-white/10">
        {steps.map((s, i) => (
          <div key={s.n} className="flex items-center flex-1">
            <button
              type="button"
              onClick={() => {
                if (s.n === 1) setStep(1);
                if (s.n === 2 && selectedService && selectedTier) setStep(2);
                if (s.n === 3 && selectedService && selectedTier && form.name && form.phone && form.area && form.date) setStep(3);
              }}
              className="flex items-center gap-2.5 w-full justify-center py-2 px-2 rounded-xl transition-all"
              style={{
                background: step === s.n ? 'rgba(201,168,76,0.18)' : 'transparent',
                border: step === s.n ? '1px solid rgba(201,168,76,0.4)' : '1px solid transparent',
              }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all flex-shrink-0"
                style={{
                  background: step >= s.n ? 'linear-gradient(135deg, #c9a84c, #e0c06b)' : 'rgba(255,255,255,0.1)',
                  color: step >= s.n ? '#0a1628' : 'rgba(255,255,255,0.4)',
                }}
              >
                {step > s.n ? <Check size={14} /> : s.n}
              </div>
              <span
                className="text-xs font-bold truncate hidden md:inline"
                style={{color: step >= s.n ? '#e0c06b' : 'rgba(255,255,255,0.4)'}}
              >
                {s.label}
              </span>
            </button>
            {i < steps.length - 1 && (
              <div className="hidden sm:block w-4 h-px bg-white/10 mx-1 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* ---- STEP 1: Service & Package Selection ---- */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4">
              <label className="block text-xs font-bold text-[#e0c06b] uppercase tracking-wider mb-2">
                Step 1: Choose Service Type <span className="text-red-400">*</span>
              </label>
            </div>

            {/* Service Grid - 6 Polished Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {SERVICES.map(service => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => { setSelectedService(service.id); setSelectedTier(''); }}
                  className="flex items-center gap-3.5 p-4 rounded-2xl text-left transition-all duration-200 hover:scale-[1.01]"
                  style={{
                    background: selectedService === service.id ? 'rgba(201,168,76,0.16)' : 'rgba(255,255,255,0.04)',
                    border: selectedService === service.id
                      ? '1.5px solid rgba(201,168,76,0.6)'
                      : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{background: selectedService === service.id ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.06)'}}
                  >
                    <service.icon size={18} style={{color: selectedService === service.id ? '#e0c06b' : 'rgba(255,255,255,0.5)'}} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate" style={{color: selectedService === service.id ? '#e0c06b' : 'rgba(255,255,255,0.85)'}}>
                      {service.shortTitle}
                    </div>
                    <div className="text-xs mt-0.5" style={{color: 'rgba(255,255,255,0.4)'}}>
                      from {service.pricing[0].price}
                    </div>
                  </div>
                  {selectedService === service.id && (
                    <Check size={16} style={{color: '#c9a84c', flexShrink: 0}} />
                  )}
                </button>
              ))}
            </div>

            {/* Package / Tier selection for chosen service */}
            <AnimatePresence>
              {selectedService && currentService && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <label className="block text-xs font-bold text-[#e0c06b] uppercase tracking-wider mb-2">
                    Choose Size / Tier for {currentService.title} <span className="text-red-400">*</span>
                  </label>
                  <div className="rounded-2xl overflow-hidden mb-5 border border-amber-500/20 bg-white/5">
                    {currentService.pricing.map((tier, i) => (
                      <button
                        key={tier.label}
                        type="button"
                        onClick={() => setSelectedTier(tier.label)}
                        className="w-full flex items-center justify-between px-4 py-3.5 text-left transition-all"
                        style={{
                          background: selectedTier === tier.label
                            ? 'rgba(201,168,76,0.18)'
                            : i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                          borderBottom: i < currentService.pricing.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                          borderLeft: selectedTier === tier.label ? '4px solid #c9a84c' : '4px solid transparent',
                        }}
                      >
                        <div>
                          <div className="text-sm font-semibold" style={{color: selectedTier === tier.label ? '#e0c06b' : 'rgba(255,255,255,0.85)'}}>
                            {tier.label}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">{tier.note}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-extrabold text-sm" style={{color: '#c9a84c'}}>{tier.price}</span>
                          {selectedTier === tier.label && <Check size={16} style={{color: '#c9a84c'}} />}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Included features summary */}
                  <div className="rounded-2xl p-4 mb-6 bg-amber-500/5 border border-amber-500/15">
                    <div className="flex items-center gap-2 mb-2">
                      <Info size={14} style={{color: '#c9a84c'}} />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#e0c06b]">Includes Checklist</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {currentService.includes.map(item => (
                        <div key={item} className="flex items-center gap-2">
                          <Check size={12} style={{color: '#c9a84c', flexShrink: 0}} />
                          <span className="text-slate-300 text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              disabled={!selectedService || !selectedTier}
              onClick={() => setStep(2)}
              className="w-full py-4 rounded-2xl font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.01] shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #c9a84c, #e0c06b)',
                color: '#0a1628',
              }}
            >
              Continue to Step 2: Customer Details →
            </button>
          </motion.div>
        )}

        {/* ---- STEP 2: Customer Details Form Inputs ---- */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Selected package badge */}
            <div className="flex items-center justify-between px-4 py-3 rounded-2xl mb-6 bg-amber-500/10 border border-amber-500/20">
              <div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Selected Package</div>
                <div className="text-sm font-bold text-[#e0c06b]">{currentService?.title} -- {selectedTier}</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Price</div>
                <div className="font-extrabold text-[#c9a84c]">{currentTier?.price}</div>
              </div>
            </div>

            <p className="text-[#e0c06b] text-xs font-bold uppercase tracking-wider mb-4">
              Step 2: Enter Your Contact & Location Details
            </p>

            <form className="space-y-4">
              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Amina Kariuki"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. +254 712 345 678"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="e.g. amina@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              {/* Nairobi Location/Area Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                  Location / Neighbourhood <span className="text-amber-400">*</span>
                </label>
                <select
                  name="area"
                  required
                  value={form.area}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                >
                  <option value="" style={{background: '#0a1628', color: '#fff'}}>Select your Nairobi area...</option>
                  {areas.map(a => (
                    <option key={a} value={a} style={{background: '#0a1628', color: '#fff'}}>{a}</option>
                  ))}
                </select>
              </div>

              {/* Date Picker & Time Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Preferred Date <span className="text-amber-400">*</span>
                  </label>
                  <input
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className={inputClass}
                    style={{...inputStyle, colorScheme: 'dark'}}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Preferred Time <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    name="time"
                    type="time"
                    value={form.time}
                    onChange={handleChange}
                    className={inputClass}
                    style={{...inputStyle, colorScheme: 'dark'}}
                  />
                </div>
              </div>

              {/* Additional Notes Textarea */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                  Additional Notes / Special Requests <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  placeholder="Property size, gate access details, specific focus areas..."
                  value={form.notes}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>
            </form>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-4 rounded-2xl font-bold text-sm transition-all"
                style={{background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)'}}
              >
                ← Back
              </button>
              <button
                type="button"
                disabled={!form.name || !form.phone || !form.area || !form.date}
                onClick={() => setStep(3)}
                className="flex-1 py-4 rounded-2xl font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.01] shadow-lg"
                style={{background: 'linear-gradient(135deg, #c9a84c, #e0c06b)', color: '#0a1628'}}
              >
                Continue to Step 3: Payment Option →
              </button>
            </div>
          </motion.div>
        )}

        {/* ---- STEP 3: Payment Option & Formspree Submit ---- */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Complete Record Summary before submit */}
            <div className="rounded-2xl p-5 mb-6 bg-white/5 border border-amber-500/20">
              <div className="text-xs font-bold uppercase tracking-widest mb-3 text-[#e0c06b] flex items-center justify-between border-b border-white/10 pb-2">
                <span>Complete Booking Summary</span>
                <span className="text-slate-400 font-normal">Ready to Send</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-slate-400">Customer Name:</span>
                  <span className="text-white font-bold">{form.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-slate-400">Phone Number:</span>
                  <span className="text-white font-bold">{form.phone}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-slate-400">Location Area:</span>
                  <span className="text-white font-bold">{form.area}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-slate-400">Date & Time:</span>
                  <span className="text-white font-bold">{form.date} {form.time ? `at ${form.time}` : ''}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-slate-400">Service Package:</span>
                  <span className="text-[#e0c06b] font-bold">{currentService?.title} ({selectedTier})</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-300 font-bold text-sm">Total Estimated Price:</span>
                  <span className="text-[#e0c06b] font-extrabold text-base">{currentTier?.price}</span>
                </div>
              </div>
            </div>

            <label className="block text-xs font-bold text-[#e0c06b] uppercase tracking-wider mb-3">
              Step 3: Select Payment Option <span className="text-amber-400">*</span>
            </label>

            {/* 4 Payment Options */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {PAYMENT_METHODS.map(method => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setSelectedPayment(method.id)}
                  className="relative p-4 rounded-2xl text-left transition-all"
                  style={{
                    background: selectedPayment === method.id ? 'rgba(201,168,76,0.18)' : 'rgba(255,255,255,0.04)',
                    border: selectedPayment === method.id
                      ? '1.5px solid rgba(201,168,76,0.6)'
                      : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {method.popular && (
                    <span
                      className="absolute top-2 right-2 text-[9px] px-2 py-0.5 rounded-full font-bold uppercase"
                      style={{background: 'rgba(201,168,76,0.25)', color: '#e0c06b'}}
                    >
                      Popular
                    </span>
                  )}
                  <div className="mb-2">
                    <PaymentIcon id={method.id} />
                  </div>
                  <div className="font-bold text-sm" style={{color: selectedPayment === method.id ? '#e0c06b' : 'rgba(255,255,255,0.85)'}}>
                    {method.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{method.description}</div>
                  {selectedPayment === method.id && (
                    <div className="absolute top-3 left-3">
                      <Check size={14} style={{color: '#c9a84c'}} />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Payment instruction note */}
            <AnimatePresence>
              {selectedPayment && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl px-4 py-3.5 mb-6 flex items-start gap-3 bg-amber-500/10 border border-amber-500/20"
                >
                  <Info size={16} style={{color: '#c9a84c', flexShrink: 0, marginTop: 1}} />
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {selectedPayment === 'mpesa' && 'You will receive an M-Pesa STK push or Lipa Na M-Pesa payment prompt after our dispatch team confirms your date & cleaner.'}
                    {selectedPayment === 'card' && 'A secure Stripe card payment link will be emailed and texted upon dispatch confirmation.'}
                    {selectedPayment === 'cash' && 'Pay cash to our head cleaner upon job completion. A formal digital receipt will be issued immediately.'}
                    {selectedPayment === 'bank' && 'Direct corporate bank transfer details will be sent to your email.'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Error banner if any */}
            {submitError && (
              <div className="text-red-400 text-xs text-center mb-4 bg-red-500/10 border border-red-500/20 py-3 px-4 rounded-2xl font-semibold">
                {submitError}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => setStep(2)}
                className="px-5 py-4 rounded-2xl font-bold text-sm transition-all disabled:opacity-40"
                style={{background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)'}}
              >
                ← Back
              </button>
              <button
                type="button"
                disabled={!selectedPayment || isSubmitting}
                onClick={handleSubmit}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.01] shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #c9a84c, #e0c06b)',
                  color: '#0a1628',
                  boxShadow: '0 8px 32px rgba(201,168,76,0.35)',
                }}
              >
                <Send size={16} />
                {isSubmitting ? 'Sending Request to Formspree...' : 'Confirm Booking Request'}
              </button>
            </div>

            <p className="text-center text-slate-400 text-xs mt-4">
              Dispatch response guaranteed within 30 minutes
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
