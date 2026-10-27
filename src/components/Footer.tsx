import React from 'react';
import { HeartHandshake, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'The Struggle & Solution', href: '#struggle-solution' },
    { label: 'Programs & Modules', href: '#programs' },
    { label: '20+ Years Legacy', href: '#legacy' },
    { label: 'Educator Well-Being Check', href: '#self-assessment' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Book Consultation', href: '#contact' },
  ];

  return (
    <footer className="bg-[#2a1a0e] text-[#fef3e2] pt-16 pb-12 border-t border-[#3e2715]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#4d321d]">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d4621a] flex items-center justify-center text-white">
                <HeartHandshake className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-serif-heading font-bold text-xl tracking-tight text-[#fef3e2]">
                  MASLOW SA
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#f4ae52] font-semibold ml-2">
                  SDN BHD
                </span>
                <p className="text-xs text-[#ebd9c4]/80">The Sanctuary of Growth</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#ebd9c4]/80 leading-relaxed max-w-sm">
              Dedicated to the mental well-being, psychological safety, and sustainable resilience of international school 
              teachers, counselors, and academic leaders across Malaysia, Southeast Asia, and globally. Over 20 years of excellence.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#f4ae52] pt-1">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>HRD Corp (HRDF) Registered Training Provider</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f4ae52]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#ebd9c4]/80 hover:text-[#f4ae52] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Headquarters (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f4ae52]">
              Contact & Inquiries
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-[#ebd9c4]/80">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#d4621a] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-[#ebd9c4]/60 uppercase font-semibold">Official Email</span>
                  <a
                    href="mailto:maslowsa.sdnbhd@gmail.com"
                    className="text-[#fef3e2] hover:text-[#f4ae52] underline font-medium"
                  >
                    maslowsa.sdnbhd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4621a] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-[#ebd9c4]/60 uppercase font-semibold">Location</span>
                  <span className="text-[#fef3e2]">
                    Kuala Lumpur, Malaysia
                  </span>
                  <span className="block text-[11px] text-[#ebd9c4]/70">
                    On-campus deliveries across ASEAN & International networks
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#ebd9c4] hover:text-[#f4ae52] cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top of Page</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ebd9c4]/60">
          <p>
            © {new Date().getFullYear()} MASLOW SA SDN BHD. All rights reserved. Registered in Malaysia.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Clinical Confidentiality Guaranteed</span>
            <span aria-hidden="true">·</span>
            <span>Accredited CPD Hours</span>
            <span aria-hidden="true">·</span>
            <span>International School Wellness</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
