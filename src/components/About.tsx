import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const pillars = [
  { icon: Target, title: 'Precision-Driven', desc: 'Our 68-point checklist means nothing is overlooked.' },
  { icon: Users, title: 'People-First', desc: 'We invest in our cleaners so they invest in your home.' },
  { icon: Award, title: 'Accountability', desc: 'Every job is tracked, rated, and quality-reviewed.' },
  { icon: TrendingUp, title: 'Continuously Improving', desc: 'We use data and feedback to raise standards constantly.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white border-t border-b border-slate-200/80 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="gold-line" />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#b89330' }}>Our Story</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#0a1628', lineHeight: 1.18 }}>
              Built for Nairobi.
              <br />
              <span style={{ color: '#b89330' }}>Designed for Excellence.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-sans">
              CleanPro Nairobi was founded with a simple belief: every home and office in this city deserves professional-grade cleaning -- reliable, thorough, and hassle-free.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 font-sans">
              We built a tech-driven platform that connects Nairobi residents and businesses with rigorously vetted cleaning professionals. Our system handles scheduling, routing, live tracking, and quality assurance -- so you never have to worry about a thing.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10 font-sans">
              From a single bedroom apartment in Ruaka to a 10,000 sq ft corporate office in Westlands -- we show up on time, we deliver, and we leave your space transformed.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 shadow-md"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #e0c06b)', color: '#0a1628' }}
            >
              Work With Us
            </a>
          </motion.div>

          {/* Right: Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)' }}
                >
                  <p.icon size={20} style={{ color: '#b89330' }} />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#0a1628' }}>{p.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}

            {/* Nairobi image banner */}
            <div className="sm:col-span-2 rounded-2xl overflow-hidden h-44 relative shadow-lg">
              <img
                src="/images/nairobi.jpg"
                alt="Nairobi skyline CleanPro service area"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'rgba(10,22,40,0.65)' }}
              >
                <span className="text-white font-serif text-xl md:text-2xl font-bold tracking-wide text-center px-4">
                  Proudly Serving All 47 Areas of Nairobi
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
