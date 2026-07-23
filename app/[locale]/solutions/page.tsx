import { Metadata } from "next";
import { 
  Network, CheckCircle2, ArrowRight, Bot, Layers, Zap, 
  BarChart3, Target, Code2, Database, Cpu, Globe, 
  ShieldCheck, Maximize, ArrowDown, Building2, HelpCircle,
  Stethoscope, ShoppingBag, Home, Factory, Coffee, Briefcase, 
  GraduationCap, HardHat, Truck, Laptop, Landmark, Shield
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Solutions | HIVENOX AI Workers, ERP, Automation & Business Intelligence",
  description: "Explore HIVENOX's unified solutions. From autonomous AI Workers and modular ERP to custom software and intelligent automation, all running on one shared database.",
  keywords: [
    "HIVENOX Solutions", "AI Workers", "Business Automation", "Modular ERP",
    "Business Intelligence software", "Results as a Service", "Custom Software Development"
  ]
};

// --- DATA STRUCTURES ---

const SOLUTIONS = [
  {
    id: "ai-workers",
    title: "AI Workers",
    subtitle: "Your Digital Workforce, Available 24/7",
    desc: "Autonomous digital employees that perform real business tasks—not just answer questions. They create content, generate leads, engage customers, and analyze data while continuously learning.",
    icon: Bot,
    color: "from-purple-500 to-fuchsia-600",
    features: ["Content Creation", "Lead Generation", "Customer Support", "Recruitment", "SEO Optimization", "Marketing Automation"],
    ideal: "Increasing productivity and scaling without increasing headcount.",
    link: "/solutions/ai-workers"
  },
  {
    id: "erp",
    title: "ERP Solutions",
    subtitle: "One ERP. Every Department.",
    desc: "Connect your entire organization through one intelligent platform. Manage customers, employees, finances, inventory, operations, and reporting without switching systems.",
    icon: Layers,
    color: "from-blue-600 to-blue-600",
    features: ["CRM & HRMS", "Books & Finance", "Inventory & Ops", "SalesFlow", "Desk Support", "Analytics Dashboard"],
    benefits: ["Eliminate duplicate data", "Improve collaboration", "Streamline operations", "Scale effortlessly"],
    link: "/solutions/erp"
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    subtitle: "Automate Repetitive Work",
    desc: "Connect workflows across departments, allowing routine tasks to happen automatically while your team focuses on higher-value work and strategic growth.",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    features: ["Lead Assignments", "Invoice Generation", "Approval Workflows", "Employee Onboarding", "Document Processing", "Notifications"],
    benefits: ["Save massive time", "Reduce human errors", "Increase productivity", "Improve consistency"],
    link: "/solutions/automation"
  },
  {
    id: "bi",
    title: "Business Intelligence",
    subtitle: "Turn Data Into Better Decisions",
    desc: "Bring together data from sales, finance, HR, inventory, operations, and customer interactions into one intelligent, real-time dashboard with AI recommendations.",
    icon: BarChart3,
    color: "from-emerald-500 to-teal-600",
    features: ["Live Dashboards", "Executive KPIs", "Revenue Analytics", "Financial Reporting", "Forecasting", "AI Recommendations"],
    benefits: ["Better visibility", "Faster reporting", "Smarter planning", "Data-driven decisions"],
    link: "/solutions/intelligence"
  },
  {
    id: "raas",
    title: "Results-as-a-Service",
    subtitle: "Focus on Outcomes, Not Software",
    desc: "We operate the platform, AI Workers, and automation on your behalf. You focus on growing your business while we deliver measurable, automated outcomes.",
    icon: Target,
    color: "from-rose-500 to-pink-600",
    features: ["More Qualified Leads", "Better Support", "Consistent Marketing", "Higher Productivity", "Improved Performance", "Fully Managed"],
    ideal: "Growing businesses, agencies, and enterprises looking for a fully managed solution.",
    link: "/solutions/raas"
  },
  {
    id: "custom",
    title: "Custom Software Development",
    subtitle: "Tailored Solutions for Unique Businesses",
    desc: "Our development team designs and builds custom applications, portals, and integrations on top of the HIVENOX platform, ensuring everything stays connected.",
    icon: Code2,
    color: "from-slate-700 to-slate-900",
    features: ["Web Applications", "Mobile Apps", "ERP Extensions", "API Integrations", "Customer Portals", "AI Solutions"],
    benefits: ["Built around your logic", "Future-ready architecture", "Fully integrated", "Enterprise-grade quality"],
    link: "/solutions/custom"
  }
];

const WORKFLOW_STEPS = [
  "Lead Captured",
  "CRM Updated",
  "AI Sales Worker Qualifies Lead",
  "Quote Created",
  "Invoice Generated",
  "Finance Updated",
  "Inventory Reserved",
  "Management Dashboard Updated",
  "AI Insights Recommend Next Action"
];

const PILLARS = [
  { icon: Database, title: "One Shared Database", desc: "Every solution works from the same live business data." },
  { icon: Cpu, title: "Native AI", desc: "AI Workers are built directly into your processes, not added as external tools." },
  { icon: Layers, title: "Modular Platform", desc: "Start with one solution and activate additional capabilities when ready." },
  { icon: Globe, title: "Arabic & English", desc: "Full RTL support and localized AI interactions in both languages." },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Role-based access, encryption, audit logs, and compliance." },
  { icon: Maximize, title: "Scalable Architecture", desc: "Whether you have 10 employees or 10,000, HIVENOX grows with you." }
];

const DECISION_ENGINE = [
  { need: "I want AI to perform business tasks.", solution: "AI Workers", link: "#ai-workers" },
  { need: "I need a complete business management system.", solution: "ERP Solutions", link: "#erp" },
  { need: "I want to automate repetitive work.", solution: "Intelligent Automation", link: "#automation" },
  { need: "I need better reporting and analytics.", solution: "Business Intelligence", link: "#bi" },
  { need: "I want business outcomes without managing software.", solution: "Results-as-a-Service", link: "#raas" },
  { need: "I need custom software or integrations.", solution: "Custom Software", link: "#custom" }
];

const INDUSTRIES = [
  { name: "Healthcare & Medical", icon: Stethoscope },
  { name: "Retail & E-commerce", icon: ShoppingBag },
  { name: "Real Estate", icon: Home },
  { name: "Manufacturing", icon: Factory },
  { name: "Hospitality", icon: Coffee },
  { name: "Professional Services", icon: Briefcase },
  { name: "Education", icon: GraduationCap },
  { name: "Construction", icon: HardHat },
  { name: "Logistics", icon: Truck },
  { name: "Technology & SaaS", icon: Laptop },
  { name: "Financial Services", icon: Landmark },
  { name: "Government & Public Sector", icon: Shield },
];

const FAQS = [
  {
    q: "Can I start with just one solution?",
    a: "Yes. HIVENOX is strictly modular, allowing you to begin with a single solution such as AI Workers or CRM, and expand whenever you're ready without migrations."
  },
  {
    q: "Do all solutions share the same data?",
    a: "Yes. Every HIVENOX solution operates on one unified shared database, ensuring every department works with accurate, real-time, synchronized information."
  },
  {
    q: "Can I combine AI Workers with ERP?",
    a: "Absolutely. AI Workers integrate directly with your ERP, CRM, Finance, HRMS, and other modules to autonomously execute tasks using your live business data."
  },
  {
    q: "Are your solutions available in Arabic and English?",
    a: "Yes. HIVENOX is built natively with bilingual support, including complete right-to-left (RTL) interface functionality and AI interactions that communicate naturally in both languages."
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* PURE CSS ANIMATIONS & UTILS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes drawLine {
          from { height: 0; opacity: 0; }
          to { height: 100%; opacity: 1; }
        }
        .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-glow { animation: pulseGlow 8s ease-in-out infinite; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        
        /* Custom details accordion styling */
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
        details[open] summary ~ * { animation: fadeUp 0.3s ease-out; }
      `}} />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden min-h-[65vh] flex flex-col justify-center items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] bg-gradient-to-tr from-blue-500/20 to-emerald-500/10 rounded-full blur-[120px] -z-10 animate-glow" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20 opacity-40" />

        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-blue-700 tracking-wide uppercase mb-8 shadow-sm">
          <Network className="w-4 h-4" />
          <span>The HIVENOX Ecosystem</span>
        </div>
        
        <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] max-w-5xl mx-auto mb-8">
          Everything Your Business Needs. <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Connected in One Platform.
          </span>
        </h1>
        
        <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
          Whether you're looking to automate operations, empower your teams with AI, modernize your ERP, or gain complete visibility across your business, HIVENOX brings everything together. Start with a single solution and expand at your own pace.
        </p>

        <div className="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-4">
          <a href="/contact#demo" className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200">
            Book a Custom Demo
          </a>
          <a href="/register" className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-base hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200">
            Start Free Instance
          </a>
        </div>
        
        <div className="animate-fade-up delay-400 mt-12 text-sm font-bold text-slate-400 tracking-widest uppercase">
          One Platform • One Database • Unlimited Possibilities
        </div>
      </section>

      {/* WHY CHOOSE SOLUTIONS (INTRO) */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Why Choose <br /> HIVENOX Solutions?
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Most businesses rely on a collection of disconnected software to manage sales, finance, HR, operations, customer support, and reporting. While each tool solves one problem, they rarely work together seamlessly.
              </p>
              <p className="font-bold text-blue-600">
                HIVENOX changes that.
              </p>
              <p>
                Our solutions are designed around a shared platform where every product, every department, and every AI Worker has access to the same live business data. This creates a unified, intelligent environment that improves collaboration, automates repetitive work, and helps you make faster, informed decisions.
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-3xl bg-slate-950 overflow-hidden flex items-center justify-center border border-slate-800 shadow-2xl">
            {/* Abstract visual representing connected nodes */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_70%)]" />
            <div className="relative z-10 w-full max-w-sm grid grid-cols-2 gap-4 p-8">
               {[{ label: 'CRM', color: 'text-blue-400' }, { label: 'HR', color: 'text-orange-400' }, { label: 'Fin', color: 'text-emerald-400' }, { label: 'AI', color: 'text-purple-400' }].map((item, i) => {
                 return (
                  <div key={i} className={`bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 backdrop-blur-sm relative`}>
                    <div className={`w-3 h-3 rounded-full bg-current ${item.color} animate-pulse`} />
                    <span className={`font-bold text-sm tracking-wider uppercase ${item.color}`}>{item.label}</span>
                  </div>
                 )
               })}
               {/* Center connecting node */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(79,70,229,0.5)] z-20 border-4 border-slate-950">
                  <Database className="w-6 h-6 text-white" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SOLUTIONS GRID */}
      <section className="py-24 bg-slate-50" id="solutions">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Build a Smarter Business
            </h2>
            <p className="text-slate-600 text-lg">
              Explore the modules that make up the HIVENOX intelligent ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SOLUTIONS.map((sol) => (
              <div key={sol.id} id={sol.id} className="group bg-white rounded-3xl border border-slate-200 p-8 md:p-10 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                {/* Background Accent */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${sol.color} opacity-[0.03] rounded-bl-full -z-10 group-hover:opacity-[0.06] transition-opacity`} />
                
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.color} text-white flex items-center justify-center shadow-md shrink-0`}>
                    <sol.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight mb-1">{sol.title}</h3>
                    <p className={`text-sm font-bold bg-gradient-to-r ${sol.color} bg-clip-text text-transparent`}>{sol.subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow">
                  {sol.desc}
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3 block">
                      {sol.id === 'ai-workers' ? 'What They Can Do' : 'Key Capabilities'}
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {sol.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(sol.benefits || sol.ideal) && (
                    <div className="pt-5 border-t border-slate-100">
                      <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2 block">
                        {sol.benefits ? 'Benefits' : 'Ideal For'}
                      </span>
                      {sol.benefits ? (
                        <div className="flex flex-wrap gap-2">
                          {sol.benefits.map((ben, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-semibold">{ben}</span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-slate-600 font-medium">{sol.ideal}</p>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <a href={sol.link} className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (WORKFLOW PIPELINE) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[150px] -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              One Platform. <br /> Infinite Connections.
            </h2>
            <p className="text-slate-400 text-lg">
              Unlike traditional software, HIVENOX isn't a collection of separate products. Every solution shares one intelligent foundation, allowing data to flow automatically.
            </p>
          </div>

          <div className="bg-slate-950/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-center text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-12">The HIVENOX Intelligent Workflow</h3>
            
            <div className="max-w-md mx-auto space-y-4">
              {WORKFLOW_STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center hover:bg-slate-800 hover:border-blue-500/50 transition-colors">
                    <span className="font-semibold text-slate-200">{step}</span>
                  </div>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="h-6 w-px bg-slate-700 my-2 relative">
                      <ArrowDown className="w-4 h-4 text-slate-500 absolute -bottom-3 left-1/2 -translate-x-1/2" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center space-y-2">
              <p className="text-xl font-bold text-white">No duplicate work.</p>
              <p className="text-xl font-bold text-slate-300">No disconnected systems.</p>
              <p className="text-xl font-bold text-blue-400">Just one intelligent workflow from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BUSINESSES CHOOSE HIVENOX (PILLARS) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-4">
              The HIVENOX Advantage
            </h2>
            <p className="text-slate-600 text-lg">Built natively from the ground up to solve enterprise fragmentation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((pillar, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 mb-6">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DECISION ENGINE & INDUSTRIES */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Decision Engine */}
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Which Solution Is Right For You?</h3>
            <p className="text-slate-600 mb-8">Identify your primary goal and map it directly to our core offerings.</p>
            
            <div className="space-y-3">
              {DECISION_ENGINE.map((item, i) => (
                <a key={i} href={item.link} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 gap-4 group">
                  <span className="text-sm font-medium text-slate-700">{item.need}</span>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 hidden sm:block transition-colors" />
                    <span className="px-4 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap bg-blue-50 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {item.solution}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Trusted Across Industries</h3>
            <p className="text-slate-600 mb-8">Every solution adapts to your industry while maintaining one connected platform.</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {INDUSTRIES.map((ind, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
                    <ind.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 leading-tight">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-slate-900 text-lg hover:text-blue-600 transition-colors">
                  {faq.q}
                  <span className="ml-6 flex-shrink-0 bg-white p-2 rounded-full border border-slate-200 group-open:rotate-45 transition-transform duration-200">
                    <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed text-base border-t border-slate-200/50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-slate-950 py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px] -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Ready to Build a <br className="hidden md:block" /> Smarter Business?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
            Whether you're looking to automate a single process or transform your entire organization, HIVENOX provides the intelligent solutions you need to grow with confidence.
          </p>
          
          <div className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-8">
            One Platform • Every Solution • Endless Growth
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <a href="/register" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-200">
              Start Free Today
            </a>
            <a href="/contact#demo" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-900 font-bold text-base hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-200">
              Book a Demo
            </a>
            <a href="/contact#sales" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border border-slate-700 text-slate-300 font-bold text-base hover:bg-slate-900 hover:text-white transition-all duration-200">
              Contact Sales
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><HelpCircle className="w-4 h-4 text-slate-500" /> Free 14-Day Pilot</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Enterprise-Grade Security</span>
          </div>
        </div>
      </section>

    </div>
  );
}