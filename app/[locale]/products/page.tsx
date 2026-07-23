import { Metadata } from "next";
import { 
  Building2, Database, Lock, Globe, Cpu, ShieldCheck, PieChart, 
  Layers, Users, UserCircle, Calculator, TrendingUp, Headphones, 
  Workflow, ArrowRight, CheckCircle2, Sparkles, Target, MessageSquare, 
  UserPlus, Mic, BarChart, Plus, HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Products | HIVENOX Intelligent Business Platform",
  description: "Explore the HIVENOX ecosystem: ERP, CRM, HRMS, Books, SalesFlow, Desk, Ops, and autonomous AI Workers. One intelligent platform, endless possibilities.",
  keywords: [
    "HIVENOX ERP", "AI CRM", "HRMS platform", "Cloud Accounting Software",
    "AI Sales Agent", "AI Customer Support", "Business Automation Software",
    "Enterprise AI tools", "Modular business platform"
  ]
};

// --- DATA STRUCTURES ---

const PLATFORM_FOUNDATION = [
  { icon: Database, label: "One Shared Database" },
  { icon: Lock, label: "One Secure Login" },
  { icon: Globe, label: "Native Arabic & English" },
  { icon: Cpu, label: "AI-Powered Automation" },
  { icon: ShieldCheck, label: "Enterprise-Grade Security" },
  { icon: PieChart, label: "Real-Time Analytics" }
];

const BUSINESS_APPS = [
  {
    id: "erp",
    name: "HIVENOX ERP",
    tagline: "Your Complete Business Operating System",
    desc: "Run your entire business from one intelligent ERP that connects CRM, HRMS, Finance, Inventory, Operations, and Analytics.",
    idealFor: "Growing businesses and enterprises replacing disconnected software.",
    features: ["Modular Architecture", "Shared Database", "Business Intelligence", "Core Automation", "AI Integration", "Bilingual Support"],
    color: "from-blue-600 to-indigo-600",
    icon: Layers
  },
  {
    id: "crm",
    name: "HIVENOX CRM",
    tagline: "Build Better Customer Relationships",
    desc: "Manage leads, customers, opportunities, quotations, pipelines, and sales activities from one intelligent CRM.",
    features: ["Contact Management", "Sales Pipeline", "Lead Tracking", "Opportunity Management", "Customer Timeline", "AI Sales Assistance"],
    color: "from-emerald-500 to-teal-600",
    icon: Users
  },
  {
    id: "hrms",
    name: "HIVENOX HRMS",
    tagline: "Empower Your People",
    desc: "Simplify HR operations with employee management, payroll, attendance, leave, onboarding, performance tracking, and workforce analytics.",
    features: ["Employee Records", "Automated Payroll", "Attendance Tracking", "Leave Management", "Performance Reviews", "Recruitment Sync"],
    color: "from-orange-500 to-amber-600",
    icon: UserCircle
  },
  {
    id: "books",
    name: "HIVENOX Books",
    tagline: "Accounting That Works Smarter",
    desc: "Manage invoicing, expenses, VAT/GST compliance, cash flow, financial reporting, and business accounting with confidence. Built for AU, UAE & KSA.",
    features: ["Core Accounting", "Smart Invoicing", "Expense Tracking", "Financial Reports", "VAT/GST Ready", "Cash Flow Sync"],
    color: "from-cyan-500 to-blue-500",
    icon: Calculator
  },
  {
    id: "salesflow",
    name: "HIVENOX SalesFlow",
    tagline: "Turn Opportunities Into Revenue",
    desc: "Manage quotations, proposals, contracts, approvals, e-signatures, renewals, and sales forecasting from one streamlined workflow.",
    features: ["Quotation Builder", "Contract Management", "Automated Renewals", "E-Signatures", "Revenue Forecasting", "Approval Loops"],
    color: "from-purple-500 to-fuchsia-600",
    icon: TrendingUp
  },
  {
    id: "desk",
    name: "HIVENOX Desk",
    tagline: "Modern Customer Support",
    desc: "Deliver exceptional customer experiences through omnichannel support, ticket management, knowledge bases, and AI-powered service.",
    features: ["Help Desk Core", "Ticketing System", "Live Chat", "Customer Portal", "Knowledge Base", "AI Support Router"],
    color: "from-rose-500 to-pink-600",
    icon: Headphones
  },
  {
    id: "ops",
    name: "HIVENOX Ops",
    tagline: "Manage Operations Efficiently",
    desc: "Coordinate projects, procurement, resources, workflows, teams, and deliveries with complete operational visibility.",
    features: ["Project Management", "Procurement Engine", "Workflow Builder", "Resource Planning", "Team Collaboration", "Operations Dashboard"],
    color: "from-slate-600 to-slate-800",
    icon: Workflow
  }
];

const AI_PRODUCTS = [
  { name: "AI Sales Agent", icon: Target, desc: "Generate leads, personalize outreach, nurture prospects, and book meetings automatically.", ideal: "Sales, Business Dev, Lead Gen" },
  { name: "AI Support Agent", icon: MessageSquare, desc: "Resolve customer inquiries instantly across chat, email, and social channels. Available 24/7 in Arabic and English." },
  { name: "AI Recruiter", icon: UserPlus, desc: "Source candidates, screen applications, schedule interviews, and accelerate your entire hiring pipeline." },
  { name: "Voice AI", icon: Mic, desc: "Answer phone calls, qualify leads, confirm appointments, and provide customer support with natural AI conversations." },
  { name: "Insights AI", icon: BarChart, desc: "Ask business questions in plain language and receive instant dashboards, charts, recommendations, and AI-powered analysis." }
];

const INTEGRATIONS = [
  "Microsoft 365", "Google Workspace", "Shopify", "HubSpot", "Salesforce", "Odoo", "Stripe", "Xero", "QuickBooks", "Power BI", "Microsoft Fabric", "Social Media Platforms", "REST APIs", "Webhooks"
];

const DECISION_ENGINE = [
  { need: "I want to manage my entire business.", solution: "HIVENOX ERP", color: "text-blue-600 bg-blue-50" },
  { need: "I need better customer management.", solution: "HIVENOX CRM", color: "text-emerald-600 bg-emerald-50" },
  { need: "I want modern accounting and compliance.", solution: "HIVENOX Books", color: "text-cyan-600 bg-cyan-50" },
  { need: "I want to automate my outbound sales.", solution: "AI Sales Agent", color: "text-purple-600 bg-purple-50" },
  { need: "I need 24/7 customer support automation.", solution: "Desk + AI Support", color: "text-rose-600 bg-rose-50" },
  { need: "I want instant, AI-powered business insights.", solution: "Insights AI", color: "text-amber-600 bg-amber-50" },
  { need: "I need robust project & resource management.", solution: "HIVENOX Ops", color: "text-slate-700 bg-slate-100" }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans overflow-hidden antialiased">
      
      {/* PURE CSS ANIMATIONS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 0.5; transform: scale(1.08) translate(-48%, -52%); }
        }
        .animate-fade-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-glow { animation: pulseGlow 6s ease-in-out infinite; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}} />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[70vh]">
        <div className="absolute top-[30%] left-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/15 to-purple-500/10 rounded-full blur-[140px] -z-10 animate-glow" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000_70%,transparent_100%)] -z-20 opacity-70" />

        <div className="space-y-8 max-w-4xl mx-auto relative z-10">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs md:text-sm font-bold text-slate-700 tracking-wide uppercase">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>The HIVENOX Ecosystem</span>
          </div>
          
          <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.05]">
            One Intelligent Platform. <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
              Twelve Powerful Products.
            </span>
          </h1>
          
          <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Everything your business needs to grow, operate, and innovate—connected through one shared database. Start with a single product and expand into a complete business platform without migrations or data silos.
          </p>

          <div className="animate-fade-up delay-300 text-sm font-bold text-slate-500 tracking-widest uppercase">
            One Login • One Platform • Endless Possibilities
          </div>

          <div className="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="/register" className="group px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200">
              Start Free Instance
            </a>
            <a href="/contact#demo" className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-base hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200">
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* PLATFORM FOUNDATION BAR */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 -mt-8 mb-24">
        <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-xl shadow-slate-100/50 p-6 md:p-10 animate-fade-up delay-300">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-slate-900">The HIVENOX Platform</h3>
            <p className="text-sm text-slate-500 mt-1">Every product shares the same intelligent foundation.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {PLATFORM_FOUNDATION.map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center pt-4 lg:pt-0 first:pt-0 gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold tracking-wide text-slate-600 uppercase leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS APPLICATIONS GRID */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">Business Applications</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Power Every Department
            </h2>
            <p className="text-slate-600 text-lg">
              Replace disconnected software with native modules that talk to each other seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {BUSINESS_APPS.map((app) => (
              <div key={app.id} className="group relative rounded-3xl border border-slate-200 bg-slate-50/50 p-8 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.color} text-white flex items-center justify-center shadow-md`}>
                      <app.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">{app.name}</h3>
                      <p className="text-sm font-bold text-blue-600">{app.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-base leading-relaxed mb-8 h-auto md:h-16">
                    {app.desc}
                  </p>

                  <div className="space-y-4">
                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Key Features</span>
                    <ul className="grid grid-cols-2 gap-3">
                      {app.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {app.idealFor && (
                    <div className="mt-8 pt-6 border-t border-slate-200/80">
                      <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-2">Ideal For</span>
                      <p className="text-sm text-slate-600 font-medium">{app.idealFor}</p>
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-slate-200/80">
                    <a href={`/contact#sales`} className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI PRODUCTS (DARK ZONE) */}
      <section className="relative py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
              <Sparkles className="w-3.5 h-3.5" /> Next-Gen Technology
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Autonomous AI That <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                Does Real Work.
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Unlike traditional chatbots, HIVENOX AI Workers perform complete business tasks using your live, connected database. They don't just answer questions—they execute workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_PRODUCTS.map((ai, idx) => (
              <div key={idx} className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:-translate-y-2 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl group-hover:bg-purple-500/40 transition-all" />
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/30">
                  <ai.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{ai.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{ai.desc}</p>
                {ai.ideal && (
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase block mb-1">Perfect For</span>
                    <span className="text-xs font-medium text-slate-300">{ai.ideal}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BETTER TOGETHER & COMPARISON MATRIX */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Why Every Product <br /> Works Better Together
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Most businesses buy software one department at a time. CRM from one vendor. Accounting from another. HR from somewhere else. Eventually, every system needs fragile integrations, duplicate data entry, and manual work just to stay synchronized.
                </p>
                <p>
                  <strong>HIVENOX takes a different approach.</strong> Every product is built on the exact same platform.
                </p>
                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-3 text-base">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    When sales closes a deal, Finance already knows.
                  </li>
                  <li className="flex items-start gap-3 text-base">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    When HR hires someone, Operations updates automatically.
                  </li>
                  <li className="flex items-start gap-3 text-base">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    AI Workers act on live corporate information instead of outdated copies.
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Shared Database", desc: "One source of truth for all departments." },
                { title: "Modular Architecture", desc: "Activate what you need, expand later." },
                { title: "Native AI", desc: "AI agents baked into every workflow natively." },
                { title: "Enterprise Security", desc: "Role-based access and audit logging." },
                { title: "Bilingual UI", desc: "Full RTL Arabic and English interfaces." },
                { title: "Infinite Scalability", desc: "Grows with you from startup to enterprise." }
              ].map((pillar, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-1">
                    <Plus className="w-4 h-4 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{pillar.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Matrix Table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-xl font-bold text-slate-900">Platform Capabilities Matrix</h3>
              <p className="text-sm text-slate-500 mt-1">See how HIVENOX modules stack up.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-4 px-6 font-bold text-slate-900 text-sm w-1/4">Product</th>
                    <th className="py-4 px-6 font-bold text-slate-900 text-sm w-1/3">Best For</th>
                    <th className="py-4 px-6 font-bold text-slate-900 text-sm text-center">AI Powered</th>
                    <th className="py-4 px-6 font-bold text-slate-900 text-sm text-center">Modular</th>
                    <th className="py-4 px-6 font-bold text-slate-900 text-sm text-center">Connected</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { p: "ERP", b: "Complete Business Management" },
                    { p: "CRM", b: "Sales & Customer Relationships" },
                    { p: "HRMS", b: "Employee Management & Payroll" },
                    { p: "Books", b: "Finance & Accounting" },
                    { p: "SalesFlow", b: "Revenue Operations" },
                    { p: "Desk", b: "Customer Support Automation" },
                    { p: "Ops", b: "Projects & Operations" },
                    { p: "AI Products", b: "Autonomous Business Execution" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-blue-700 text-sm">{row.p}</td>
                      <td className="py-4 px-6 text-slate-600 text-sm">{row.b}</td>
                      <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                      <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                      <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* DECISION ENGINE & INTEGRATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Decision Engine */}
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-2">Which Product Is Right For You?</h3>
            <p className="text-slate-600 mb-8">Match your immediate business requirement to the ideal HIVENOX starting point.</p>
            
            <div className="space-y-3">
              {DECISION_ENGINE.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 gap-4 group cursor-default">
                  <span className="text-sm font-medium text-slate-700">{item.need}</span>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 hidden sm:block transition-colors" />
                    <span className={`px-4 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap ${item.color}`}>
                      {item.solution}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Integrations */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Integrates With Your Business</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              While HIVENOX functions as a complete unified operating system, we know you rely on external tools. Connect effortlessly via native integrations, REST APIs, and Webhooks.
            </p>
            
            <div className="flex flex-wrap gap-2.5">
              {INTEGRATIONS.map((tool, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-600 shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-slate-950 py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Ready to Build Your <br />
            Intelligent Business?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
            Whether starting with a single product or deploying the complete platform, every application is designed to work together from day one. Expand as you grow—without rebuilding systems.
          </p>
          
          <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-8">
            One Platform • Twelve Products • Unlimited Growth
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <a href="/register" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-200">
              Start Free Today
            </a>
            <a href="/contact#demo" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-900 font-bold text-base hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-200">
              Book a Custom Demo
            </a>
            <a href="/contact#sales" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border border-slate-700 text-slate-300 font-bold text-base hover:bg-slate-900 hover:text-white transition-all duration-200">
              Contact Sales Team
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><HelpCircle className="w-4 h-4 text-slate-500" /> Free 14-Day Pilot Available</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Bank-Grade Encryption</span>
          </div>
        </div>
      </section>

    </div>
  );
}