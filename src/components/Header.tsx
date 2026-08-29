import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, User } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-[#E2E5EA] shadow-xs'
          : 'bg-[#F9F8F5] border-[#E2E5EA]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Brand Identity */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#152232] text-white font-mono font-bold text-xs sm:text-sm flex items-center justify-center tracking-tighter border border-[#152232] shrink-0">
              VS
            </div>
            <div className="min-w-0">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#152232] block leading-tight truncate group-hover:text-[#2B3747]">
                {FIRM_DETAILS.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-widest text-[#5B6574] block truncate">
                {FIRM_DETAILS.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs lg:text-sm font-medium text-[#3A424E]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`transition-colors py-2 border-b-2 ${
                    isActive
                      ? 'text-[#152232] border-[#152232] font-semibold'
                      : 'border-transparent hover:text-[#152232] hover:border-[#152232]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Auth Action Controls (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login?mode=login"
              className="text-xs font-semibold uppercase tracking-wider text-[#152232] hover:bg-[#F0EFEA] min-h-[40px] flex items-center px-4 border border-[#152232] transition-all"
            >
              Sign In
            </Link>
            <Link
              to="/login?mode=signup"
              className="text-xs font-semibold uppercase tracking-wider bg-[#152232] hover:bg-[#2B3747] text-white min-h-[40px] flex items-center px-4 transition-all focus:outline-none"
            >
              Create Account
            </Link>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/login"
              className="text-[11px] font-semibold uppercase tracking-wider bg-[#152232] text-white py-2 px-3 min-h-[38px] flex items-center gap-1.5 shrink-0"
            >
              <User size={13} />
              <span>Login</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 text-[#152232] border border-[#D5D8DE] hover:bg-[#EFEFEA] min-h-[42px] min-w-[42px] flex items-center justify-center shrink-0"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2E5EA] bg-[#FAF9F6] px-4 pt-3 pb-6 space-y-4 max-h-[calc(100dvh-4rem)] overflow-y-auto pt-safe pb-safe">
          <div className="flex flex-col divide-y divide-[#E2E5EA] font-medium text-sm text-[#3A424E]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-[#152232] flex items-center justify-between hover:text-[#2B3747]"
              >
                <span className="text-sm font-semibold">{link.label}</span>
                <span className="text-xs text-[#6C7582] font-mono">→</span>
              </Link>
            ))}
            <Link
              to="/upload-documents"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-[#152232] flex items-center justify-between hover:text-[#2B3747]"
            >
              <span className="text-sm font-semibold">Upload Documents</span>
              <span className="text-xs text-[#6C7582] font-mono">→</span>
            </Link>
            <Link
              to="/payment"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-[#152232] flex items-center justify-between hover:text-[#2B3747]"
            >
              <span className="text-sm font-semibold">Make Payment</span>
              <span className="text-xs text-[#6C7582] font-mono">→</span>
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              to="/login?mode=signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#152232] min-h-[44px] border border-[#152232] flex items-center justify-center"
            >
              Create Account
            </Link>
            <Link
              to="/login?mode=login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-semibold uppercase tracking-wider text-[#152232] min-h-[44px] border border-[#152232] bg-white hover:bg-[#EFEFEA] flex items-center justify-center"
            >
              Sign In to Account
            </Link>
            <a
              href={`tel:${FIRM_DETAILS.phone}`}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#152232] min-h-[44px] border border-[#D5D8DE] bg-[#FAF9F6]"
            >
              <PhoneCall size={14} />
              <span>Call Direct: {FIRM_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
