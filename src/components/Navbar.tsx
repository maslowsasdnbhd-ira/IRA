import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Struggle & Solution', href: '#struggle-solution' },
    { label: 'Programs & Modules', href: '#programs' },
    { label: '20+ Years Legacy', href: '#legacy' },
    { label: 'Educator Well-Being Check', href: '#self-assessment' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fef3e2]/95 backdrop-blur-md shadow-sm border-b border-[#ecdcc9]/80 py-3.5'
          : 'bg-[#fef3e2] border-b border-[#ecdcc9]/50 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-[#d4621a] flex items-center justify-center text-white shadow-sm group-hover:bg-[#b84f10] transition-colors">
              <HeartHandshake className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif-heading font-bold text-lg sm:text-xl tracking-tight text-[#2a1a0e] group-hover:text-[#d4621a] transition-colors">
                  MASLOW SA
                </span>
                <span className="text-[10px] tracking-wider uppercase text-[#645041] font-semibold border-l border-[#ecdcc9] pl-1.5">
                  Sdn Bhd
                </span>
              </div>
              <span className="text-[11px] text-[#645041] font-medium tracking-tight hidden sm:inline">
                The Sanctuary of Growth · 20+ Yrs Educator Wellness
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-[#2a1a0e]/80 hover:text-[#d4621a] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:maslowsa.sdnbhd@gmail.com"
              className="text-xs font-semibold text-[#645041] hover:text-[#2a1a0e] flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-[#ecdcc9]/40 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#d4621a]" />
              <span>Contact Team</span>
            </a>
            <button
              type="button"
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 bg-[#d4621a] hover:bg-[#b84f10] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={handleCtaClick}
              className="md:hidden inline-flex items-center gap-1 bg-[#d4621a] text-white text-xs font-semibold px-3 py-1.5 rounded-md"
            >
              Consult
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2a1a0e] hover:text-[#d4621a] rounded-lg hover:bg-[#ecdcc9]/40 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#ecdcc9] bg-[#fef3e2] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2 text-sm font-medium text-[#2a1a0e] hover:text-[#d4621a] hover:bg-[#ecdcc9]/40 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#ecdcc9] flex flex-col gap-2">
            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center gap-2 bg-[#d4621a] hover:bg-[#b84f10] text-white text-sm font-semibold py-3 rounded-lg shadow-sm"
            >
              <span>Book School Wellness Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-[#645041] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#d4621a]" />
              <span>HRD Corp Claimable · Over 20 Years Experience</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
