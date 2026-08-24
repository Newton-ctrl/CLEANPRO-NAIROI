import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function MidCTA() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{background: 'linear-gradient(135deg, #0a1628 0%, #0f2044 50%, #0a1628 100%)'}}
    >
      {/* Gold pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%), radial-gradient(circle at 80% 50%, #c9a84c 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', color: '#e0c06b'}}
          >
            Limited Same-Day Slots Available
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{fontWeight: 600, lineHeight: 1.15}}>
            Your Space Deserves
            <br />
            <span className="gold-shimmer">Nothing Less Than Perfect.</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Join 2,400+ Nairobi households and businesses who trust CleanPro for a spotless, stress-free experience — every time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 pulse-cta"
              style={{
                background: 'linear-gradient(135deg, #c9a84c, #e0c06b)',
                color: '#0a1628',
                boxShadow: '0 8px 32px rgba(201,168,76,0.35)',
              }}
            >
              Book Your Cleaning Today <ArrowRight size={16} />
            </a>
            <a
              href="tel:+254785254110"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border text-white transition-all duration-300 hover:bg-white/10"
              style={{borderColor: 'rgba(255,255,255,0.25)'}}
            >
              Call Now: +254 785 254 110
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
