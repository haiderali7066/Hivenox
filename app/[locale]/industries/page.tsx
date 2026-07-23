import { Metadata } from "next";
import { 
  Building2, 
  Globe, 
  Database, 
  Cpu, 
  Rocket, 
  ShieldCheck, 
  Target, 
  Users, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Workflow,
  Eye,
  ChevronRight,
  Sparkles,
  HelpCircle,
  Stethoscope,
  Briefcase,
  Home,
  ShoppingBag,
  Utensils,
  Sparkle,
  Factory,
  Truck,
  GraduationCap,
  Hammer,
  Hotel,
  Megaphone,
  Laptop,
  MessageSquare,
  Volume2,
  TrendingUp,
  Boxes,
  FileText
} from "lucide-react";

// SEO Metadata for Next.js App Router
export const metadata: Metadata = {
  title: "Industries We Serve | HIVENOX AI Business Platform & ERP Solutions",
  description: "Discover how HIVENOX helps healthcare, retail, real estate, manufacturing, education, hospitality, logistics, professional services, and more with AI Workers, ERP, automation, CRM, analytics, and business intelligence on one connected platform.",
  keywords: [
    "AI business platform for healthcare",
    "ERP for retail",
    "CRM for real estate",
    "AI automation for businesses",
    "ERP for manufacturing",
    "Business software UAE",
    "Business software Saudi Arabia",
    "ERP Australia",
    "Industry ERP solutions",
    "AI workers for business"
  ],
};

// Strongly-typed interfaces for clean data mapping
interface IndustryData {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  perfectFor?: string[];
  solutions: string[];
  benefits: string[];
  color: string; // Tailwind gradient classes
  borderHover: string; // Tailwind border focus state
}

const INDUSTRIES: IndustryData[] = [
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare & Medical",
    subtitle: "Run clinics, hospitals, dental practices, and healthcare groups more efficiently.",
    perfectFor: ["Medical Clinics", "Dental Clinics", "Hospitals", "Physiotherapy", "Diagnostic Centers", "Wellness Centers"],
    solutions: ["Appointment Management", "AI Receptionist", "Patient CRM", "Billing & Finance", "HR & Payroll", "Voice AI", "Reporting"],
    benefits: ["Reduce missed appointments", "Automate patient communication", "Improve operational efficiency", "Deliver faster patient experiences"],
    color: "from-cyan-500 to-blue-600",
    borderHover: "hover:border-cyan-500/50"
  },
  {
    id: "professional-services",
    icon: Briefcase,
    title: "Professional Services",
    subtitle: "Manage projects, clients, billing, and teams from one platform.",
    perfectFor: ["Consulting Firms", "Law Firms", "Accounting Firms", "Engineering Firms", "IT Companies"],
    solutions: ["CRM", "Projects", "HRMS", "Time Tracking", "Finance", "AI Sales Agent"],
    benefits: ["Better client relationships", "Faster proposals", "Smarter project management", "Improved profitability"],
    color: "from-blue-600 to-indigo-600",
    borderHover: "hover:border-blue-600/50"
  },
  {
    id: "real-estate",
    icon: Home,
    title: "Real Estate & Property",
    subtitle: "Close more deals while automating follow-ups and client engagement.",
    perfectFor: ["Real Estate Agencies", "Property Developers", "Brokers", "Property Management"],
    solutions: ["Property CRM", "AI Sales Agent", "Marketing Automation", "Voice AI", "Analytics"],
    benefits: ["Never miss a lead", "Faster response times", "Better sales pipeline visibility", "More appointments booked"],
    color: "from-amber-500 to-orange-600",
    borderHover: "hover:border-amber-500/50"
  },
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    subtitle: "Connect inventory, sales, finance, marketing, and customer support.",
    perfectFor: ["Retail Stores", "Online Stores", "Fashion Brands", "Electronics", "Furniture", "Grocery"],
    solutions: ["Inventory", "CRM", "Accounting", "AI Support", "Marketing AI", "Analytics"],
    benefits: ["Real-time inventory sync", "Better customer experiences", "Automated marketing loops", "Smarter predictive purchasing"],
    color: "from-emerald-500 to-teal-600",
    borderHover: "hover:border-emerald-500/50"
  },
  {
    id: "restaurants",
    icon: Utensils,
    title: "Restaurants & Cafés",
    subtitle: "Operate every location seamlessly with one connected corporate system.",
    solutions: ["Inventory", "Staff Management", "Finance", "Customer CRM", "AI Marketing", "Analytics"],
    benefits: ["Reduce food waste", "Improve customer loyalty", "Simplify multi-location operations", "Better regional reporting"],
    color: "from-rose-500 to-red-600",
    borderHover: "hover:border-rose-500/50"
  },
  {
    id: "beauty-wellness",
    icon: Sparkle,
    title: "Beauty, Salon & Wellness",
    subtitle: "Fill calendars, automate marketing campaigns, and delight your guests.",
    perfectFor: ["Salons", "Barbers", "Spas", "Wellness Clinics", "Beauty Centers"],
    solutions: ["AI Social Worker", "CRM", "Booking Management", "Voice AI", "Loyalty Programs"],
    benefits: ["More repeat bookings", "Consistent social marketing", "Better customer retention", "Less manual front-desk work"],
    color: "from-purple-500 to-pink-600",
    borderHover: "hover:border-purple-500/50"
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Advanced Manufacturing",
    subtitle: "Gain complete visibility across production, inventory, finance, and operations.",
    solutions: ["Inventory", "Procurement", "Operations", "Accounting", "HRMS", "Analytics"],
    benefits: ["Reduce production delays", "Improve supply chain visibility", "Lower operating costs", "Better strategic planning"],
    color: "from-zinc-600 to-slate-800",
    borderHover: "hover:border-zinc-500/50"
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Distribution",
    subtitle: "Track inventory, deliveries, fleets, and customers in real time.",
    solutions: ["Operations", "Inventory", "CRM", "Finance", "Analytics"],
    benefits: ["Better delivery performance", "Improved warehouse efficiency", "Live operational visibility", "Reduced manual data tasks"],
    color: "from-sky-500 to-blue-700",
    borderHover: "hover:border-sky-500/50"
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education & Training",
    subtitle: "Simplify student management and day-to-day operations.",
    perfectFor: ["Schools", "Colleges", "Universities", "Training Centers", "Coaching Institutes"],
    solutions: ["Student CRM", "HRMS", "Finance", "AI Support", "Analytics"],
    benefits: ["Better parent-teacher communication", "Simplified administration", "Improved regional reporting", "Higher administrative productivity"],
    color: "from-violet-500 to-purple-700",
    borderHover: "hover:border-violet-500/50"
  },
  {
    id: "construction",
    icon: Hammer,
    title: "Construction & Engineering",
    subtitle: "Manage projects, procurement, field teams, and budgets from one platform.",
    solutions: ["Operations", "HRMS", "Procurement", "Finance", "Analytics"],
    benefits: ["Track projects in real time", "Control materials budgets", "Improve resource planning", "Reduce project delivery delays"],
    color: "from-amber-600 to-yellow-600",
    borderHover: "hover:border-amber-600/50"
  },
  {
    id: "hospitality",
    icon: Hotel,
    title: "Hospitality & Venues",
    subtitle: "Deliver exceptional guest experiences while managing operations effortlessly.",
    perfectFor: ["Hotels", "Resorts", "Holiday Apartments", "Event Venues"],
    solutions: ["CRM", "Finance", "HRMS", "AI Support", "Voice AI"],
    benefits: ["Better guest communication", "Faster front-desk operations", "Improved staff productivity", "Higher customer satisfaction"],
    color: "from-emerald-600 to-teal-700",
    borderHover: "hover:border-emerald-600/50"
  },
  {
    id: "marketing-agencies",
    icon: Megaphone,
    title: "Marketing Agencies",
    subtitle: "Deliver high-quality client work without scaling human headcount.",
    solutions: ["Growth Worker", "Content Worker", "SEO Worker", "Video Worker", "Analytics"],
    benefits: ["Automated white-label reports", "Multi-brand management", "Faster content generation loops", "Better predictable campaign performance"],
    color: "from-fuchsia-500 to-violet-600",
    borderHover: "hover:border-fuchsia-500/50"
  },
  {
    id: "tech-saas",
    icon: Laptop,
    title: "Technology & SaaS",
    subtitle: "Scale sales operations, customer success, and operations from one system.",
    solutions: ["CRM", "SalesFlow", "AI Sales Agent", "Support Agent", "Analytics"],
    benefits: ["Accelerated growth velocity", "Better customer retention", "Automated outbound sales", "Actionable operational insights"],
    color: "from-indigo-500 to-blue-700",
    borderHover: "hover:border-indigo-500/50"
  }
];

const MASTER_MODULES = [
  { icon: Cpu, title: "AI Workers & Agents", desc: "Digital workers designed to automate workflows around the clock." },
  { icon: Users, title: "CRM & Sales Management", desc: "Nurture pipelines, track deals, and build deep relationships." },
  { icon: FileText, title: "HRMS & Payroll", desc: "Automate hiring, global payroll, leave management, and employee records." },
  { icon: Database, title: "Accounting & Finance", desc: "Unified ledger, billing, automated invoicing, and tax calculations." },
  { icon: Boxes, title: "Inventory Management", desc: "Live physical asset and product tracking across global facilities." },
  { icon: Workflow, title: "Operations Management", desc: "Synchronize projects, milestones, internal protocols, and logistics." },
  { icon: Eye, title: "Business Intelligence", desc: "Cross-department analytics and real-time visualization dashboards." },
  { icon: Zap, title: "Intelligent Automation", desc: "Trigger events natively between different department modules." },
  { icon: Volume2, title: "Voice AI System", desc: "Localized AI agents handling phone lines, reminders, and customer requests." },
  { icon: TrendingUp, title: "Analytics & Reporting", desc: "Deep operational tracking and compliance-ready regional reports." }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans overflow-hidden antialiased">
      
      {/* PURE CSS ANIMATIONS (RSC & SEO FRIENDLY) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 0.5; transform: scale(1.08) translate(-48%, -52%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: pulseGlow 6s ease-in-out infinite; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}} />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[80vh]">
        {/* Glowing Ambient Backdrop */}
        <div className="absolute top-[35%] left-1/2 w-[950px] h-[600px] bg-gradient-to-tr from-blue-600/10 to-indigo-500/10 rounded-full blur-[160px] -z-10 animate-glow" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000_70%,transparent_100%)] -z-20 opacity-70" />

        <div className="space-y-8 max-w-4xl mx-auto relative z-10">
          
          
          {/* Main Title */}
          <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.05]">
            Built for Every Industry. <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
              Designed for Every Ambition.
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="animate-fade-up delay-200 space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            <p>
              Every business faces unique operational friction, but the requirement for unified, connected data and intelligent automation is universal. HIVENOX molds seamlessly to your industry with modular architecture, autonomous AI agents, and secure enterprise infrastructure.
            </p>
          </div>

          {/* Quick Stats Mini Bar */}
          <p className="animate-fade-up delay-300 text-sm font-bold tracking-wider text-slate-400 uppercase">
            One Unified Platform • Every Major Department • Localized Global Compliance
          </p>

          {/* Hero CTAs */}
          <div className="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="/contact#demo" className="group px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-700/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
              Book a Custom Demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#solutions-grid" className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-200">
              Explore Industry Solutions
            </a>
          </div>
        </div>
      </section>

      {/* WHY HIVENOX WORKS ACROSS INDUSTRIES SECTION */}
      <section className="py-24 border-t border-slate-200 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">Engineered Adaptability</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                No Two Businesses Run Exactly the Same.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                That is why HIVENOX was engineered as an incredibly fluid, modular ecosystem instead of static, rigid industry-specific software. 
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Activate the essential products you require today, then expand seamlessly across divisions as you scale. Keep every worker and workflow linked tightly to a single master cloud database.
              </p>

              <div className="pt-4">
                <a href="/register" className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  Launch a modular pilot instance <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Modules Grid */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-inner grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MASTER_MODULES.map((mod, index) => (
                  <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                      <mod.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{mod.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{mod.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE INDUSTRIES GRID */}
      <section id="solutions-grid" className="py-24 lg:py-32 bg-slate-50 relative border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">Modular Tailoring</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900">
              Solutions for Every Segment
            </h2>
            <p className="text-slate-600 text-lg md:text-xl">
              Select your operating sector below to view exactly how HIVENOX eliminates systemic friction points and aligns teams.
            </p>
          </div>

          {/* Massive Bento Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind) => (
              <div 
                key={ind.id} 
                id={ind.id}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${ind.borderHover} flex flex-col justify-between`}
              >
                <div>
                  {/* Decorative Subtle Glowing Corner */}
                  <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-r ${ind.color} opacity-5 blur-2xl transition-opacity duration-500 group-hover:opacity-15`} />

                  {/* Header / Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${ind.color} text-white shadow-lg`}>
                      <ind.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">
                      {ind.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {ind.subtitle}
                  </p>

                  {/* Perfect For Segment (if defined) */}
                  {ind.perfectFor && (
                    <div className="mb-6 space-y-2">
                      <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Ideal For</span>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.perfectFor.map((item, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-slate-600 text-xs font-semibold">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Solutions list */}
                  <div className="mb-6 space-y-2">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Operational Modules</span>
                    <ul className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      {ind.solutions.map((sol, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span className="truncate">{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Measurable Benefits</span>
                    <ul className="space-y-2">
                      {ind.benefits.map((ben, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50/50 p-2 rounded-lg border border-slate-100/50">
                          <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Accent line */}
                <div className={`mt-8 h-1 w-12 rounded-full bg-gradient-to-r ${ind.color} transition-all duration-500 group-hover:w-full`} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY EVERY INDUSTRY CHOOSES HIVENOX SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black py-24 md:py-32 text-white">
        
        {/* Dark Mode Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-indigo-600/20 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              The Connected Foundation
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Why Every Industry <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Chooses HIVENOX
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              No matter what market you dominate, sustainable growth demands reliable processes, unified records, and intelligent automation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Database,
                title: "One Platform",
                desc: "Consolidate and replace highly complex, disconnected business tools with one unified operational core.",
                color: "from-cyan-500 to-blue-600"
              },
              {
                icon: Cpu,
                title: "AI Workforce",
                desc: "Deploy customized, autonomous AI Agents that continuously market, sell, recruit, and report around the clock.",
                color: "from-violet-500 to-fuchsia-600"
              },
              {
                icon: Users,
                title: "Shared Business Data",
                desc: "Equip every single location and department with identical, zero-lag corporate records and insights.",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: Workflow,
                title: "Modular ERP",
                desc: "Avoid extreme data migration. Activate exactly what is required and expand features at your team's pace.",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: ShieldCheck,
                title: "Business Intelligence",
                desc: "Harness live performance dashboards and reliable, predictive AI metrics to finalize tactical choices.",
                color: "from-pink-500 to-rose-600"
              },
              {
                icon: Globe,
                title: "Native Arabic & English",
                desc: "Engineered specifically for businesses across Australia, the UAE, and KSA with full RTL and bilingual configurations.",
                color: "from-amber-500 to-yellow-500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-white/20"
              >
                {/* Glow */}
                <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-r ${feature.color} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30`} />

                {/* Icon */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg text-white`}>
                  <feature.icon className="h-6 w-6" />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-slate-400 text-sm">
                  {feature.desc}
                </p>

                {/* Bottom Line */}
                <div className={`mt-8 h-1 w-12 rounded-full bg-gradient-to-r ${feature.color} transition-all duration-500 group-hover:w-full`} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MEASURABLE SUCCESS METRICS */}
      <section className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">Impact Framework</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Realized Success Across Industries
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              When organizations switch from manual tools and disconnected SaaS models to the unified HIVENOX platform, they witness radical shifts in operational metrics.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              From reducing overhead tool costs to speeding up customer communications, our systems help teams break out of administrative traps and refocus energy on market growth.
            </p>
          </div>

          {/* Success Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Increased operational efficiency",
                "Faster customer response times",
                "More productive human teams",
                "Total cross-division visibility",
                "Drastically reduced SaaS costs",
                "Highly accurate executive plans",
                "Automated document processing",
                "Scalable business growth pipelines"
              ].map((metric, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm leading-tight">{metric}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* RE-ARCHITECTED BOTTOM CTA */}
      <section className="bg-slate-950 py-24 md:py-32 text-white relative overflow-hidden">
        {/* Glowing Ambient Light Backdrops */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Ready to Transform Your <br />
            Specific Business Field?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Bring connected data channels, intelligent operational automation, and high-performance AI agents into your business workspace. Start moving past legacy bottlenecks.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <a href="/register" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-200">
              Start Free Instance
            </a>
            <a href="/contact#demo" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-base hover:bg-slate-800 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200">
              Book a Custom Demo
            </a>
            <a href="/contact#sales" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border border-slate-800 text-slate-300 font-bold text-base hover:bg-slate-900 hover:text-white transition-all duration-200">
              Talk to Our Team
            </a>
          </div>

          {/* Quick FAQ / Trust Help text */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-emerald-500" /> Free 14-Day Pilot</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-500" /> SOC2 Compliant Cloud</span>
            <span className="flex items-center gap-1.5"><HelpCircle className="w-4 h-4 text-slate-500" /> 24/7 Enterprise SLA Support</span>
          </div>
        </div>
      </section>

    </div>
  );
}