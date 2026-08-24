import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          transform: 'scale(1.05)',
        }}
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Subtle gold vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
            style={{
              background: 'rgba(201,168,76,0.12)',
              borderColor: 'rgba(201,168,76,0.3)',
            }}
          >
            <Star size={12} fill="#c9a84c" color="#c9a84c" />
            <span className="text-xs font-medium tracking-widest uppercase" style={{color: '#e0c06b'}}>
              Nairobi's Premier Cleaning Service
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
            style={{fontWeight: 600, lineHeight: 1.1}}
          >
            Premium Cleaning
            <br />
            Services You Can
            <br />
            <span className="gold-shimmer">Trust.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed font-sans"
          >
            Vetted professionals. Spotless results. Flexible scheduling across all Nairobi neighbourhoods -- same day available.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #c9a84c, #e0c06b)',
                color: '#0a1628',
                boxShadow: '0 8px 32px rgba(201,168,76,0.35)',
              }}
            >
              Book Now <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base border text-white transition-all duration-300 hover:bg-white/10"
              style={{borderColor: 'rgba(255,255,255,0.3)'}}
            >
              Get a Free Quote
            </a>
            <a
              href="https://wa.me/254785254110"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base text-white transition-all duration-300 hover:scale-105"
              style={{background: 'rgba(37,211,102,0.2)', border: '1px solid rgba(37,211,102,0.4)'}}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.65 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Shield, text: 'Vetted & Insured Staff' },
              { icon: Clock, text: 'Same-Day Booking' },
              { icon: Star, text: '4.9★ Customer Rating' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={14} style={{color: '#c9a84c'}} />
                <span className="text-sm text-white/60 font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
