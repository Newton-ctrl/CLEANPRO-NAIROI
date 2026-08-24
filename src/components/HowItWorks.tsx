import { motion } from 'framer-motion';
import { ClipboardList, CalendarCheck, Sparkles, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Book Online in Minutes',
    description: 'Choose your service, select a date and time, and enter your location. Our smart system matches you with the best available cleaner instantly.',
  },
  {
    icon: CalendarCheck,
    number: '02',
    title: 'Instant Confirmation',
    description: "Receive real-time booking confirmation via SMS and WhatsApp. Track your cleaner's arrival live -- no uncertainty, no waiting.",
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'We Clean. Thoroughly.',
    description: 'Your vetted professional arrives on time, fully equipped, and follows our 68-point checklist. Every surface, every detail.',
  },
  {
    icon: ThumbsUp,
    number: '04',
    title: 'Rate & Repeat',
    description: 'Share feedback after every clean. Our quality system ensures your preferred cleaner is always available for your next booking.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-[#f8fafc] border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="gold-line" />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#b89330' }}>How It Works</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#0a1628' }}>
            Effortless from Start to Finish
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">
            A seamless digital experience designed around your busy schedule.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35), rgba(201,168,76,0.35), transparent)' }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Badge */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10 shadow-md"
                style={{ background: 'linear-gradient(135deg, #c9a84c, #e0c06b)' }}
              >
                <step.icon size={22} style={{ color: '#0a1628' }} />
              </div>
              
              {/* Background Step Number */}
              <div
                className="font-serif text-5xl font-extrabold absolute top-4 right-6 opacity-10 select-none pointer-events-none"
                style={{ color: '#b89330' }}
              >
                {step.number}
              </div>

              <h3 className="font-bold text-lg mb-2" style={{ color: '#0a1628' }}>
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #c9a84c, #e0c06b)',
              color: '#0a1628',
              boxShadow: '0 8px 32px rgba(201,168,76,0.3)',
            }}
          >
            Book Your Cleaning Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
