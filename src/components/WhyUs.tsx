import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, CalendarCheck, Leaf, Star } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Trained & Vetted Professionals',
    description: 'Every cleaner undergoes rigorous background checks, identity verification, and high-standard professional training before joining our team.',
  },
  {
    icon: CalendarCheck,
    title: 'Smart Scheduling & Tracking',
    description: 'Book online in under 2 minutes. Track cleaner allocation and arrival live with instant WhatsApp and SMS confirmation.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Premium Products',
    description: 'We use hospital-grade, eco-conscious cleaning solutions safe for children and pets -- tough on dirt, gentle on surfaces.',
  },
  {
    icon: Star,
    title: 'Consistent Quality Guarantee',
    description: 'Our 68-point checklist ensures every corner is immaculate. If you are not 100% satisfied, we will re-clean for free.',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="why-us" className="relative bg-[#0a1628] overflow-hidden border-t border-slate-800">
      {/* 2-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        
        {/* Left Column: Text Content & Vertical Stack */}
        <div className="px-6 py-16 sm:px-10 lg:pl-16 lg:pr-14 lg:py-24 flex flex-col justify-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0c06b]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#e0c06b]">
                Why CleanPro
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-5 leading-[1.12]">
              Why Nairobi Trusts
              <br />
              <span className="gold-shimmer">CleanPro.</span>
            </h2>

            {/* Subheadline paragraph */}
            <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed font-sans max-w-xl">
              We don't just clean; we care for your space. Our commitment to excellence, reliability, and modern convenience sets us apart as the leading choice for discerning clients across Nairobi.
            </p>

            {/* Vertical Stack of Feature Items - clean text directly on dark background */}
            <div className="space-y-7">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  {/* Icon Badge - dark square background with gold icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(201, 168, 76, 0.3)',
                    }}
                  >
                    <feature.icon size={20} style={{ color: '#c9a84c' }} />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-white font-semibold text-base md:text-lg mb-1 font-sans">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-lg font-sans">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Single Full-Height Edge-to-Edge Image */}
        <div className="relative min-h-[420px] lg:min-h-full w-full">
          <img
            src="/images/team.jpg"
            alt="CleanPro Nairobi team professional cleaning service"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
          {/* Subtle gradient vignette at edge */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(10, 22, 40, 0.4) 0%, transparent 20%, transparent 80%, rgba(10, 22, 40, 0.2) 100%)',
            }}
          />
        </div>

      </div>
    </section>
  );
}
