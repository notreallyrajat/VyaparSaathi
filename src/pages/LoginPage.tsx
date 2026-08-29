import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FIRM_DETAILS } from '../data/firmData';
import { Lock, Mail, User, Phone, Building2, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';

  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(initialMode);
  
  // Form States
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    rememberMe: true,
  });

  const [signupForm, setSignupForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessType: 'proprietorship',
    password: '',
    confirmPassword: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setAuthSuccess(`Welcome back! Logged in as ${loginForm.email}`);
    }, 700);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setAuthSuccess(`Account created successfully for ${signupForm.fullName}. Client portal ready.`);
    }, 700);
  };

  return (
    <div className="bg-[#F9F8F5] min-h-screen text-[#152232] flex flex-col justify-center py-12 sm:py-16">
      
      <div className="max-w-md w-full mx-auto px-4 sm:px-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-3 mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-[#152232] text-white font-mono font-bold text-sm flex items-center justify-center tracking-tighter border border-[#152232]">
              VS
            </div>
            <div className="text-left">
              <span className="text-lg font-bold tracking-tight text-[#152232] block leading-tight">
                {FIRM_DETAILS.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5B6574] block">
                CLIENT PORTAL
              </span>
            </div>
          </Link>

          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#152232] pt-2">
            {activeTab === 'login' ? 'Sign In to Your Account' : 'Create a Client Account'}
          </h1>
          <p className="text-xs text-[#5B6574]">
            Access your accounting ledgers, tax returns, and filing updates online.
          </p>
        </div>

        {/* Auth Card Container */}
        <div className="bg-white border border-[#E2E5EA] p-6 sm:p-8 space-y-6">
          
          {/* Tab Selection */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-[#FAF9F6] border border-[#E2E5EA]">
            <button
              onClick={() => {
                setActiveTab('login');
                setAuthSuccess(null);
              }}
              className={`py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === 'login'
                  ? 'bg-[#152232] text-white shadow-xs'
                  : 'text-[#5B6574] hover:text-[#152232]'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setActiveTab('signup');
                setAuthSuccess(null);
              }}
              className={`py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === 'signup'
                  ? 'bg-[#152232] text-white shadow-xs'
                  : 'text-[#5B6574] hover:text-[#152232]'
              }`}
            >
              Create Account
            </button>
          </div>

          {authSuccess ? (
            /* Success Dummy State */
            <div className="space-y-5 text-center py-4">
              <div className="w-12 h-12 bg-[#152232] text-white mx-auto flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C7582] block">
                  AUTHENTICATION SUCCESS
                </span>
                <p className="text-sm font-semibold text-[#152232]">
                  {authSuccess}
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#E2E5EA] p-3 text-xs font-mono text-left space-y-1">
                <div className="text-[#6C7582]">Session Status: <span className="text-[#152232] font-semibold">Active Client Session</span></div>
                <div className="text-[#6C7582]">Entity Access: <span className="text-[#152232] font-semibold">GST &amp; Tax Ledgers Ready</span></div>
              </div>

              <button
                onClick={() => setAuthSuccess(null)}
                className="text-xs font-semibold uppercase tracking-wider text-[#152232] underline hover:text-[#2B3747]"
              >
                Back to Auth Form →
              </button>
            </div>
          ) : activeTab === 'login' ? (
            /* Sign In Form */
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              
              <div className="space-y-1">
                <label htmlFor="loginEmail" className="text-xs font-medium text-[#152232] block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-3 text-[#6C7582]" />
                  <input
                    type="email"
                    id="loginEmail"
                    required
                    value={loginForm.email}
                    onChange={(e) => setLoginForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="client@firm.in"
                    className="w-full text-sm pl-9 pr-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="loginPassword" className="text-xs font-medium text-[#152232] block">
                    Password
                  </label>
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-[11px] text-[#6C7582] hover:text-[#152232] underline">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <Lock size={15} className="absolute left-3 top-3 text-[#6C7582]" />
                  <input
                    type="password"
                    id="loginPassword"
                    required
                    value={loginForm.password}
                    onChange={(e) => setLoginForm((p) => ({ ...p, password: e.target.value }))}
                    placeholder="••••••••"
                    className="w-full text-sm pl-9 pr-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-[#3D4653]">
                  <input
                    type="checkbox"
                    checked={loginForm.rememberMe}
                    onChange={(e) => setLoginForm((p) => ({ ...p, rememberMe: e.target.checked }))}
                    className="text-[#152232] focus:ring-0"
                  />
                  <span>Remember session</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#152232] hover:bg-[#2B3747] text-white text-xs font-semibold uppercase tracking-wider min-h-[44px] px-6 border border-[#152232] transition-colors mt-2"
              >
                {isSubmitting ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>

            </form>
          ) : (
            /* Create Account Form */
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              
              <div className="space-y-1">
                <label htmlFor="signupName" className="text-xs font-medium text-[#152232] block">
                  Full Name
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-3 top-3 text-[#6C7582]" />
                  <input
                    type="text"
                    id="signupName"
                    required
                    value={signupForm.fullName}
                    onChange={(e) => setSignupForm((p) => ({ ...p, fullName: e.target.value }))}
                    placeholder="e.g. Sunita Sharma"
                    className="w-full text-sm pl-9 pr-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="signupEmail" className="text-xs font-medium text-[#152232] block">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3 top-3 text-[#6C7582]" />
                    <input
                      type="email"
                      id="signupEmail"
                      required
                      value={signupForm.email}
                      onChange={(e) => setSignupForm((p) => ({ ...p, email: e.target.value }))}
                      placeholder="sunita@firm.in"
                      className="w-full text-sm pl-9 pr-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="signupPhone" className="text-xs font-medium text-[#152232] block">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={15} className="absolute left-3 top-3 text-[#6C7582]" />
                    <input
                      type="tel"
                      id="signupPhone"
                      required
                      value={signupForm.phone}
                      onChange={(e) => setSignupForm((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="+91 98765 43210"
                      className="w-full text-sm pl-9 pr-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="businessType" className="text-xs font-medium text-[#152232] block">
                  Business Entity Type
                </label>
                <div className="relative">
                  <Building2 size={15} className="absolute left-3 top-3 text-[#6C7582]" />
                  <select
                    id="businessType"
                    value={signupForm.businessType}
                    onChange={(e) => setSignupForm((p) => ({ ...p, businessType: e.target.value }))}
                    className="w-full text-sm pl-9 pr-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                  >
                    <option value="proprietorship">Sole Proprietorship</option>
                    <option value="partnership">Partnership Firm</option>
                    <option value="llp">Limited Liability Partnership (LLP)</option>
                    <option value="pvt_ltd">Private Limited Company</option>
                    <option value="individual">Individual Taxpayer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="signupPassword" className="text-xs font-medium text-[#152232] block">
                    Password
                  </label>
                  <input
                    type="password"
                    id="signupPassword"
                    required
                    value={signupForm.password}
                    onChange={(e) => setSignupForm((p) => ({ ...p, password: e.target.value }))}
                    placeholder="••••••••"
                    className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="confirmPassword" className="text-xs font-medium text-[#152232] block">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    required
                    value={signupForm.confirmPassword}
                    onChange={(e) => setSignupForm((p) => ({ ...p, confirmPassword: e.target.value }))}
                    placeholder="••••••••"
                    className="w-full text-sm px-3.5 py-2.5 bg-[#FAF9F6] border border-[#D5D8DE] focus:border-[#152232] focus:bg-white transition-colors min-h-[42px]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#152232] hover:bg-[#2B3747] text-white text-xs font-semibold uppercase tracking-wider min-h-[44px] px-6 border border-[#152232] transition-colors mt-2"
              >
                {isSubmitting ? (
                  <span>Creating Account...</span>
                ) : (
                  <>
                    <span>Create Client Account</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>

            </form>
          )}

          {/* Practice Confidentiality Notice */}
          <div className="pt-2 border-t border-[#E2E5EA] flex items-center gap-2 text-[11px] text-[#6C7582]">
            <ShieldCheck size={15} className="text-[#152232] shrink-0" />
            <span>Dummy Authentication Interface. Ready to connect with Supabase Auth or Custom OAuth backend.</span>
          </div>

        </div>

      </div>
    </div>
  );
};
