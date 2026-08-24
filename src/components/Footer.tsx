import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const services = [
    'Residential Cleaning',
    'Office Cleaning',
    'Deep Cleaning',
    'Move-In / Move-Out',
    'Post-Construction',
    'Upholstery & Carpets',
  ];

  const areas = [
    'Westlands', 'Kilimani', 'Karen', 'Lavington',
    'Parklands', 'Kileleshwa', 'Ruaka', 'Syokimau',
    'Langata', 'Kasarani', 'CBD', 'Thika Road',
  ];

  return (
    <footer style={{background: '#060e1c', borderTop: '1px solid rgba(201,168,76,0.1)'}}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center"
                style={{background: 'linear-gradient(135deg, #c9a84c, #e0c06b)'}}
              >
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <div>
                <span className="text-white font-semibold text-lg">CleanPro</span>
                <span className="text-xs block leading-none" style={{color: '#c9a84c', letterSpacing: '0.15em'}}>NAIROBI</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Nairobi's most trusted professional cleaning service. Vetted cleaners, premium results, zero compromise.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)'}}
                >
                  <Icon size={15} style={{color: '#c9a84c'}} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="text-white/40 text-sm hover:text-white/70 transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wide">Areas We Serve</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {areas.map(a => (
                <span key={a} className="text-white/40 text-sm">{a}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wide">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+254785254110" className="flex items-center gap-3 group">
                <Phone size={15} style={{color: '#c9a84c'}} />
                <span className="text-white/50 text-sm group-hover:text-white/80 transition-colors">+254 785 254 110</span>
              </a>
              <a href="mailto:hello@cleanpronairobi.co.ke" className="flex items-center gap-3 group">
                <Mail size={15} style={{color: '#c9a84c'}} />
                <span className="text-white/50 text-sm group-hover:text-white/80 transition-colors">hello@cleanpronairobi.co.ke</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={15} style={{color: '#c9a84c'}} />
                <span className="text-white/50 text-sm">Nairobi, Kenya</span>
              </div>
            </div>

            <a
              href="https://wa.me/254785254110"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                background: 'rgba(37,211,102,0.15)',
                border: '1px solid rgba(37,211,102,0.3)',
                color: '#25d366',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{borderTop: '1px solid rgba(255,255,255,0.05)'}}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © 2025 CleanPro Nairobi. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Professional Cleaning Services · Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
