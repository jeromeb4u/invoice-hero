import NavBar from '@/components/NavBar';
import {
  FileText,
  CreditCard,
  Send,
  RefreshCw,
  Users,
  Bell,
  LayoutTemplate,
  Pencil,
  Link,
  Zap,
  Check,
  ArrowRight,
  Star,
} from 'lucide-react';

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Subtle radial gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, #d1fae5 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold mb-6 animate-fade-in-up"
          style={{ borderColor: '#059669', color: '#059669', backgroundColor: '#ecfdf5' }}
        >
          <Zap size={12} />
          Get paid 3x faster — starting today
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 animate-fade-in-up"
          style={{ color: '#0f172a', animationDelay: '0.1s' }}
        >
          Invoices that get you paid —{' '}
          <span style={{ color: '#059669' }}>not ignored</span>
        </h1>

        {/* Sub */}
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ color: '#64748b', animationDelay: '0.2s' }}
        >
          Generate a beautiful PDF invoice in 60 seconds. Add a Stripe payment link.
          Send via email or WhatsApp. Stop chasing payments.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: '#059669' }}
          >
            Create Free Invoice
            <ArrowRight size={16} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold border transition-all duration-200 hover:bg-slate-50"
            style={{ borderColor: '#e2e8f0', color: '#0f172a' }}
          >
            See How It Works
          </a>
        </div>

        {/* Trust signals */}
        <p className="mt-8 text-sm animate-fade-in-up" style={{ color: '#64748b', animationDelay: '0.4s' }}>
          Trusted by 10,000+ freelancers worldwide
        </p>
      </div>
    </section>
  );
}

// ─── Invoice Preview Mock ──────────────────────────────────────────────────────

function InvoicePreview() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="flex justify-center">
        <div
          className="animate-float w-full max-w-lg bg-white rounded-2xl border shadow-2xl p-8"
          style={{ borderColor: '#e2e8f0', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
        >
          {/* Invoice header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Zap size={18} style={{ color: '#059669' }} fill="#059669" />
                <span className="font-bold text-lg" style={{ color: '#0f172a' }}>InvoiceHero</span>
              </div>
              <p className="text-xs" style={{ color: '#64748b' }}>Invoice #0042</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold" style={{ color: '#059669' }}>PAID</p>
              <p className="text-xs" style={{ color: '#64748b' }}>Due: Jan 15, 2025</p>
            </div>
          </div>

          {/* Client */}
          <div className="mb-6">
            <p className="text-xs font-medium mb-1" style={{ color: '#64748b' }}>BILL TO</p>
            <p className="font-semibold" style={{ color: '#0f172a' }}>Acme Corp — Jane Smith</p>
            <p className="text-sm" style={{ color: '#64748b' }}>jane@acmecorp.com</p>
          </div>

          {/* Line items */}
          <div className="mb-6">
            <div className="border-b border-dashed mb-3" style={{ borderColor: '#e2e8f0' }}>
              <div className="grid grid-cols-3 text-xs font-medium pb-2" style={{ color: '#64748b' }}>
                <span>Description</span>
                <span className="text-center">Qty</span>
                <span className="text-right">Amount</span>
              </div>
            </div>
            {[
              { desc: 'Brand Identity Design', qty: '1', amt: '$1,200' },
              { desc: 'Landing Page Design', qty: '1', amt: '$800' },
              { desc: 'Revision Rounds (2)', qty: '1', amt: '$200' },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-3 text-sm py-1.5" style={{ color: '#0f172a' }}>
                <span>{item.desc}</span>
                <span className="text-center" style={{ color: '#64748b' }}>{item.qty}</span>
                <span className="text-right font-medium">{item.amt}</span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div
            className="flex justify-between items-center py-3 px-4 rounded-xl mb-6"
            style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
          >
            <span className="font-semibold" style={{ color: '#0f172a' }}>Total Due</span>
            <span className="font-bold text-xl" style={{ color: '#059669' }}>$2,200</span>
          </div>

          {/* Stripe Pay Button */}
          <button
            className="w-full py-3 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#059669' }}
          >
            <CreditCard size={16} />
            Pay Now — $2,200
          </button>

          <p className="text-center text-xs mt-3" style={{ color: '#64748b' }}>
            Secured by Stripe — all major cards accepted
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Features ────────────────────────────────────────────────────────────────

const features = [
  {
    icon: FileText,
    color: '#059669',
    bg: '#ecfdf5',
    title: 'Instant PDF Invoice',
    desc: 'Generate a pixel-perfect PDF in seconds. No design skills needed — just fill in the blanks.',
  },
  {
    icon: CreditCard,
    color: '#0284c7',
    bg: '#e0f2fe',
    title: 'Stripe Payment Link',
    desc: 'Attach a Stripe payment link to every invoice. Get paid in 48 hours, not 48 days.',
  },
  {
    icon: Send,
    color: '#7c3aed',
    bg: '#ede9fe',
    title: 'WhatsApp & Email Send',
    desc: 'Send directly to WhatsApp or email with a single click. Your clients will see it immediately.',
  },
  {
    icon: RefreshCw,
    color: '#d97706',
    bg: '#fef3c7',
    title: 'Recurring Invoices',
    desc: 'Set it and forget it. Schedule invoices to go out automatically every week or month.',
  },
  {
    icon: Users,
    color: '#db2777',
    bg: '#fce7f3',
    title: 'Client Portal',
    desc: 'Give clients a portal to view all their invoices, download receipts, and pay outstanding bills.',
  },
  {
    icon: Bell,
    color: '#dc2626',
    bg: '#fee2e2',
    title: 'Late Payment Reminders',
    desc: 'Automatic nudges when an invoice is overdue. You stay top-of-mind without the awkwardness.',
  },
];

function Features() {
  return (
    <section id="features" className="py-20 sm:py-28" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#059669' }}>
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
            Everything you need to get paid faster
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748b' }}>
            From first invoice to final payment — every step made simple, fast, and professional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{ borderColor: '#e2e8f0', backgroundColor: '#ffffff' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: f.bg }}
              >
                <f.icon size={22} style={{ color: f.color }} />
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: '#0f172a' }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const steps = [
  {
    num: '01',
    icon: LayoutTemplate,
    color: '#059669',
    bg: '#ecfdf5',
    title: 'Pick a Template',
    desc: 'Choose from 12 professional invoice templates designed to impress.',
  },
  {
    num: '02',
    icon: Pencil,
    color: '#0284c7',
    bg: '#e0f2fe',
    title: 'Add Your Details',
    desc: 'Fill in your client, line items, and payment terms. Takes under 2 minutes.',
  },
  {
    num: '03',
    icon: Link,
    color: '#7c3aed',
    bg: '#ede9fe',
    title: 'Add Stripe Link',
    desc: 'Paste your Stripe payment link. One click and your client pays instantly.',
  },
  {
    num: '04',
    icon: Send,
    color: '#d97706',
    bg: '#fef3c7',
    title: 'Send & Get Paid',
    desc: 'Send via WhatsApp or email. Watch the payment come in within 48 hours.',
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#059669' }}>
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
            Four steps. One invoice. Zero excuses.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748b' }}>
            From blank page to paid invoice in under 60 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="relative inline-flex mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: s.bg }}
                >
                  <s.icon size={28} style={{ color: s.color }} />
                </div>
                <span
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: s.color }}
                >
                  {s.num}
                </span>
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: '#0f172a' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ───────────────────────────────────────────────────────────────

const stats = [
  { value: '48 hrs', label: 'Average payment time' },
  { value: '2M+', label: 'Invoices sent' },
  { value: '98%', label: 'Client satisfaction' },
];

function StatsBar() {
  return (
    <section className="py-14" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: '#ffffff' }}>
                {s.value}
              </p>
              <p className="text-sm font-medium" style={{ color: '#94a3b8' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      'I used to send invoices and then... wait. Weeks. Now my clients pay in 2 days. InvoiceHero literally changed my cash flow.',
    name: 'Ravi Patel',
    role: 'Freelance UI/UX Designer',
    initials: 'RP',
    color: '#059669',
  },
  {
    quote:
      'The Stripe integration is a game changer. Client gets the invoice, sees the Pay Now button, pays immediately. No chasing.',
    name: 'Sarah Kim',
    role: 'Content Writer & Strategist',
    initials: 'SK',
    color: '#0284c7',
  },
  {
    quote:
      'Recurring invoices for my monthly retainers — set it up once and the money just... comes. Every month. Like clockwork.',
    name: 'Marcus Johnson',
    role: 'Video Editor & Motion Designer',
    initials: 'MJ',
    color: '#7c3aed',
  },
];

function Testimonials() {
  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#059669' }}>
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
            Freelancers love getting paid
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border"
              style={{ borderColor: '#e2e8f0', backgroundColor: '#f8fafc' }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} style={{ color: '#f59e0b' }} fill="#f59e0b" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#0f172a' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#0f172a' }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: '#64748b' }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    highlight: false,
    features: ['5 invoices per month', 'PDF invoice generation', 'Stripe payment link', 'Email & WhatsApp send', 'Basic templates'],
    cta: 'Start Free',
    ctaStyle: 'outline',
  },
  {
    name: 'Starter',
    price: '$15',
    period: '/month',
    highlight: true,
    features: [
      '50 invoices per month',
      'PDF invoice generation',
      'Stripe payment link',
      'Email & WhatsApp send',
      'Custom branding',
      'No Stripe fees on your side',
    ],
    cta: 'Start 14-day trial',
    ctaStyle: 'filled',
  },
  {
    name: 'Growth',
    price: '$35',
    period: '/month',
    highlight: false,
    features: [
      'Unlimited invoices',
      'PDF invoice generation',
      'Stripe payment link',
      'Email & WhatsApp send',
      'Custom branding',
      'No Stripe fees',
      'Auto late payment reminders',
      'API access',
    ],
    cta: 'Start 14-day trial',
    ctaStyle: 'outline',
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#059669' }}>
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
            Simple pricing. No surprises.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748b' }}>
            Start free. Upgrade when you need more. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl border flex flex-col"
              style={{
                borderColor: plan.highlight ? '#059669' : '#e2e8f0',
                backgroundColor: '#ffffff',
                borderWidth: plan.highlight ? '2px' : '1px',
                transform: plan.highlight ? 'scale(1.03)' : 'none',
              }}
            >
              {plan.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: '#059669' }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <p className="font-semibold text-lg mb-1" style={{ color: '#0f172a' }}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold" style={{ color: '#0f172a' }}>
                    {plan.price}
                  </span>
                  <span className="text-sm mb-1" style={{ color: '#64748b' }}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm" style={{ color: '#0f172a' }}>
                    <Check size={14} style={{ color: '#059669' }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="w-full py-3 rounded-xl font-semibold text-center transition-all duration-200 hover:opacity-90"
                style={
                  plan.ctaStyle === 'filled'
                    ? { backgroundColor: '#059669', color: '#ffffff' }
                    : { border: '1px solid #e2e8f0', color: '#0f172a' }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="py-20 sm:py-24" style={{ backgroundColor: '#059669' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          Stop waiting. Start getting paid.
        </h2>
        <p className="text-lg mb-10" style={{ color: '#d1fae5' }}>
          Create your first invoice in 60 seconds. No credit card required.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: '#ffffff', color: '#059669' }}
        >
          Create Your First Invoice Free
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const links = {
    Product: ['Features', 'Templates', 'Pricing', 'Changelog'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy'],
  };

  return (
    <footer className="py-16" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={18} style={{ color: '#059669' }} fill="#059669" />
              <span className="font-bold text-white text-lg">InvoiceHero</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
              The fastest way to get your invoices paid. Built for freelancers, by freelancers.
            </p>
          </div>
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <p className="font-semibold text-sm mb-4 text-white">{col}</p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                      style={{ color: '#94a3b8' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: '#1e293b' }}
        >
          <p className="text-sm" style={{ color: '#64748b' }}>
            &copy; 2025 InvoiceHero. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm" style={{ color: '#64748b' }}>
            <span>Built with</span>
            <Zap size={12} style={{ color: '#059669' }} fill="#059669" />
            <span>by freelancers, for freelancers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <InvoicePreview />
      <Features />
      <HowItWorks />
      <StatsBar />
      <Testimonials />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  );
}