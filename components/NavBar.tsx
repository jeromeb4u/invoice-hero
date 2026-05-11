'use client';

import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b"
      style={{ borderColor: '#e2e8f0' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 font-bold text-xl"
            style={{ color: '#0f172a' }}
          >
            <Zap size={22} style={{ color: '#059669' }} fill="#059669" />
            <span>InvoiceHero</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-green-700 transition-colors" style={{ color: '#64748b' }}>
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-green-700 transition-colors" style={{ color: '#64748b' }}>
              Templates
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-green-700 transition-colors" style={{ color: '#64748b' }}>
              Pricing
            </a>
            <a href="#" className="text-sm font-medium hover:text-green-700 transition-colors" style={{ color: '#64748b' }}>
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 hover:opacity-90"
              style={{ borderColor: '#e2e8f0', color: '#0f172a' }}
            >
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: '#059669' }}
            >
              Create Free
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#features" className="text-sm font-medium" style={{ color: '#64748b' }}>Features</a>
            <a href="#how-it-works" className="text-sm font-medium" style={{ color: '#64748b' }}>Templates</a>
            <a href="#pricing" className="text-sm font-medium" style={{ color: '#64748b' }}>Pricing</a>
            <a href="#" className="text-sm font-medium" style={{ color: '#64748b' }}>Login</a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: '#059669' }}
            >
              Create Free
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}