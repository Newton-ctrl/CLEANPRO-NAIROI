import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Clock, ArrowRight } from 'lucide-react';
import { SERVICES } from '../lib/servicesData';

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="service-card group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(10,22,40,0.12)] transition-all duration-500 flex flex-col justify-between"
    >
      <div>
        {/* Image Header */}
        <div className="relative h-60 md:h-64 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle gradient overlay to keep badges readable */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(10,22,40,0.4) 0%, transparent 40%, rgba(10,22,40,0.2) 100%)',
            }}
          />

          {/* Tag badge (Most Popular / Recommended) */}
          {service.tag && (
            <div
              className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #e0c06b)', color: '#0a1628' }}
            >
              {service.tag}
            </div>
          )}

          {/* Duration badge */}
          <div
            className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium shadow-md"
            style={{ background: 'rgba(10, 22, 40, 0.75)', backdropFilter: 'blur(8px)', color: '#f5e9c8' }}
          >
            <Clock size={12} style={{ color: '#e0c06b' }} />
            {service.duration}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 lg:p-8">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)' }}
            >
              <service.icon size={20} style={{ color: '#b89330' }} />
            </div>

            {/* Starting price */}
            <div className="text-right">
              <span className="text-slate-400 text-xs uppercase tracking-wider block font-medium">from</span>
              <span className="font-bold text-lg md:text-xl" style={{ color: '#b89330' }}>
                {service.pricing[0].price}
              </span>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-bold mb-2.5 transition-colors group-hover:text-[#b89330]" style={{ color: '#0a1628' }}>
            {service.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
            {service.description}
          </p>

          {/* Pricing accordion toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-semibold transition-all duration-200"
            style={{
              background: expanded ? 'rgba(201,168,76,0.12)' : '#f1f5f9',
              border: `1px solid ${expanded ? 'rgba(201,168,76,0.4)' : '#e2e8f0'}`,
              color: expanded ? '#b89330' : '#1e293b',
            }}
          >
            <span>View Pricing & Options</span>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown size={16} />
            </motion.div>
          </button>

          {/* Expanded Pricing Content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200">
                  {/* Pricing rows */}
                  {service.pricing.map((tier, i) => (
                    <div
                      key={tier.label}
                      className="flex items-center justify-between px-4 py-3"
                      style={{
                        background: i % 2 === 0 ? '#ffffff' : '#f8fafc',
                        borderBottom: i < service.pricing.length - 1 ? '1px solid #e2e8f0' : 'none',
                      }}
                    >
                      <div>
                        <div className="text-slate-900 text-xs font-semibold">{tier.label}</div>
                        <div className="text-slate-500 text-[11px]">{tier.note}</div>
                      </div>
                      <div className="font-bold text-sm" style={{ color: '#b89330' }}>
                        {tier.price}
                      </div>
                    </div>
                  ))}

                  {/* Includes list */}
                  <div className="p-4 border-t border-slate-200 bg-amber-500/5">
                    <div className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-2.5">
                      Included in Service
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                      {service.includes.map(item => (
                        <div key={item} className="flex items-center gap-2">
                          <Check size={12} style={{ color: '#b89330', flexShrink: 0 }} />
                          <span className="text-slate-600 text-xs font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-2">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:translate-x-1"
          style={{ color: '#b89330' }}
        >
          Book This Service
          <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="py-24 md:py-32 relative bg-white border-b border-slate-100">
      {/* Container with wider max width and reduced side padding */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="gold-line" />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#b89330' }}>
              Our Cleaning Services
            </span>
            <span className="gold-line" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ color: '#0a1628' }}>
            Every Space, Perfectly Clean
          </h2>

          <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed font-sans">
            Transparent pricing with zero hidden fees. Browse our tailored packages or request a custom quote for your specific needs.
          </p>
        </motion.div>

        {/* 3-Column Wide Grid with spacious gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Sub-note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mt-12 font-medium"
        >
          All services include eco-friendly cleaning supplies & specialized equipment.
        </motion.p>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-9 py-4.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #c9a84c, #e0c06b)',
              color: '#0a1628',
              boxShadow: '0 10px 30px rgba(201,168,76,0.3)',
            }}
          >
            Get a Free Custom Quote
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
