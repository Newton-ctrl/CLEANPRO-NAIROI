import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Amina Kariuki',
    location: 'Kilimani, Nairobi',
    rating: 5,
    text: 'CleanPro has completely changed how I maintain my home. The team is always on time, incredibly thorough, and they treat my space with real care. I have been a repeat client for 8 months now.',
    service: 'Residential Cleaning',
    initials: 'AK',
  },
  {
    name: 'David Mwangi',
    location: 'Westlands, Nairobi',
    rating: 5,
    text: 'We hired CleanPro for our office and the results were outstanding. Professional from start to finish -- the booking was easy, the cleaners arrived on time, and the office was spotless. Our team noticed immediately.',
    service: 'Office Cleaning',
    initials: 'DM',
  },
  {
    name: 'Grace Odhiambo',
    location: 'Karen, Nairobi',
    rating: 5,
    text: 'The deep clean before we moved into our new home was absolutely worth it. Every corner was immaculate. The attention to detail was impressive -- things I did not even think to ask for were done perfectly.',
    service: 'Deep Cleaning',
    initials: 'GO',
  },
  {
    name: 'James Njogu',
    location: 'Lavington, Nairobi',
    rating: 5,
    text: "I've tried three other cleaning companies in Nairobi. None of them come close to CleanPro. The consistency is what sets them apart. Every single visit is as good as the first.",
    service: 'Residential Cleaning',
    initials: 'JN',
  },
  {
    name: 'Priya Sharma',
    location: 'Parklands, Nairobi',
    rating: 5,
    text: 'Booked a move-out clean with 24 hours notice and they delivered beyond expectations. Got my full deposit back because the apartment was in perfect condition. Will absolutely use them again.',
    service: 'Move-Out Cleaning',
    initials: 'PS',
  },
  {
    name: 'Samuel Otieno',
    location: 'Kileleshwa, Nairobi',
    rating: 5,
    text: 'The carpet and sofa cleaning transformed our living room. Stains I thought were permanent are completely gone. The team was professional, efficient, and left no mess behind.',
    service: 'Upholstery & Carpet Cleaning',
    initials: 'SO',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const prev = () => setCurrent(c => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#0a1628] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0c06b]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#e0c06b]">Client Reviews</span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e0c06b]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
            Trusted by Nairobi's Best
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#c9a84c" color="#c9a84c" />
            ))}
            <span className="ml-2 font-bold text-white text-lg">4.9</span>
            <span className="text-slate-300 text-sm">from 400+ verified client reviews</span>
          </div>
        </motion.div>

        {/* Featured Review Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl p-8 sm:p-12 text-center shadow-2xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Quote
              size={56}
              className="absolute top-6 left-8 opacity-15 text-[#c9a84c]"
            />
            <div className="flex justify-center mb-5">
              {[...Array(reviews[current].rating)].map((_, i) => (
                <Star key={i} size={18} fill="#c9a84c" color="#c9a84c" />
              ))}
            </div>
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-8 italic font-serif max-w-2xl mx-auto">
              "{reviews[current].text}"
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base shadow-md"
                style={{ background: 'linear-gradient(135deg, #c9a84c, #e0c06b)', color: '#0a1628' }}
              >
                {reviews[current].initials}
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-base">{reviews[current].name}</div>
                <div className="text-slate-300 text-xs">{reviews[current].location}</div>
              </div>
              <div
                className="px-3.5 py-1 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(201,168,76,0.15)', color: '#e0c06b', border: '1px solid rgba(201,168,76,0.3)' }}
              >
                {reviews[current].service}
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 bg-white/10 hover:bg-white/20 text-[#e0c06b] border border-white/10"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '28px' : '8px',
                    height: '8px',
                    background: i === current ? '#c9a84c' : 'rgba(255,255,255,0.2)',
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 bg-white/10 hover:bg-white/20 text-[#e0c06b] border border-white/10"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mini Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {reviews.slice(0, 3).map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#c9a84c" color="#c9a84c" />)}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5 italic font-serif">"{r.text.slice(0, 110)}..."</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: 'linear-gradient(135deg, #c9a84c, #e0c06b)', color: '#0a1628' }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{r.name}</div>
                  <div className="text-xs text-slate-300">{r.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
