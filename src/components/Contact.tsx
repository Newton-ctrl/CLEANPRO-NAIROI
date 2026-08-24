import { motion } from 'framer-motion';
import { Phone, Clock, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import BookingForm from './BookingForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f8fafc] border-t border-b border-slate-200/80 relative">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="gold-line" />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#b89330' }}>
              Instant Booking & Quotes
            </span>
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-3" style={{ color: '#0a1628' }}>
            Book Your Cleaning Today
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-sans">
            Select your service, choose your package, and confirm in under 2 minutes. Fast cleaner allocation across Nairobi.
          </p>
        </motion.div>

        {/* Unified 2-Panel Booking Widget Module */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white grid grid-cols-1 lg:grid-cols-12 items-stretch"
        >
          {/* Left Panel: Need It Faster? Quick-Contact Card */}
          <div className="lg:col-span-5 xl:col-span-4 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200/90 p-6 sm:p-9 lg:p-10 flex flex-col justify-between text-slate-800">
            <div>
              <div className="border-b border-slate-200 pb-5 mb-6">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-2 bg-amber-500/10 text-[#b89330] border border-amber-500/20">
                  Direct Dispatch
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0a1628] mb-1">
                  Need It Faster?
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                  Speak directly with our Nairobi dispatch team for same-day emergency cleans or quick phone quotes.
                </p>
              </div>

              <div className="space-y-5">
                {/* Call Us Directly Card */}
                <div className="p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-2">
                    <Phone size={14} className="text-[#b89330]" /> Call Dispatch Directly
                  </div>
                  <a
                    href="tel:+254785254110"
                    className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] hover:text-[#b89330] transition-colors block mt-1 tracking-tight"
                  >
                    +254 785 254 110
                  </a>
                  <p className="text-slate-500 text-xs mt-1">Available 7 days a week for instant booking</p>
                </div>

                {/* WhatsApp Chat Card */}
                <a
                  href="https://wa.me/254785254110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4.5 rounded-2xl bg-[#25d366]/10 border border-[#25d366]/30 flex items-center justify-between group hover:bg-[#25d366]/20 transition-all shadow-sm block"
                >
                  <div>
                    <div className="text-[#15803d] font-bold text-base flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#15803d"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Chat With Us Now
                    </div>
                    <div className="text-slate-600 text-xs mt-0.5">Average reply time under 3 minutes</div>
                  </div>
                  <span className="text-[#15803d] font-bold text-sm group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Operating Hours & Guarantee Stack */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <Clock size={16} className="text-[#b89330] flex-shrink-0" />
                    <div>
                      <span className="font-bold text-[#0a1628]">Operating Hours: </span>
                      Mon--Sat 7:00am--6:00pm, Sunday on request.
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <MapPin size={16} className="text-[#b89330] flex-shrink-0" />
                    <div>
                      <span className="font-bold text-[#0a1628]">Service Coverage: </span>
                      All 47 Nairobi neighbourhoods with same-day dispatch.
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <CheckCircle2 size={16} className="text-[#b89330] flex-shrink-0" />
                    <div>
                      <span className="font-bold text-[#0a1628]">Money-Back Guarantee: </span>
                      100% satisfaction or we re-clean for free.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom info bar */}
            <div className="mt-8 pt-5 border-t border-slate-200/90 text-slate-500 text-xs flex items-center justify-between font-sans">
              <span>CleanPro Nairobi Dispatch HQ</span>
              <span className="font-semibold text-[#0a1628] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live System Active
              </span>
            </div>
          </div>

          {/* Right Panel: Interactive 3-Step Booking Wizard */}
          <div className="lg:col-span-7 xl:col-span-8 bg-[#0a1628] text-white p-6 sm:p-9 lg:p-11 flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-7">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-1">
                    Request a Booking
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-sans">
                    3-Step Instant Quote & Cleaner Allocation
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#e0c06b] text-xs font-semibold">
                  <ShieldCheck size={14} />
                  Guaranteed Availability
                </div>
              </div>

              {/* 3-Step Form Component */}
              <BookingForm />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
