import { 
  CheckCircle2, 
  Minus,
  ArrowRight,
  Bot,
  Zap,
  BarChart3,
  Video,
  Search,
  Share2,
  FileText,
  Building2,
  Box,
  Users,
  Briefcase,
  PieChart,
  LayoutDashboard,
  LineChart,
  Check,
  Plus,
  Equal
} from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans overflow-hidden antialiased">
      
      {/* PURE CSS ANIMATIONS (SERVER-SIDE COMPATIBLE) */}
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
        
        /* Custom Accordion Styling for Server-Side details/summary */
        details > summary {
          list-style: none;
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
        details[open] summary ~ * {
          animation: fadeInUp 0.4s ease-out;
        }
      `}} />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center justify-center">
        <div className="absolute top-[30%] left-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/15 to-indigo-500/10 rounded-full blur-[150px] -z-10 animate-glow" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)] -z-20 opacity-60" />

        <div className="space-y-8 max-w-4xl mx-auto relative z-10">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/80 shadow-sm text-xs md:text-sm font-semibold text-blue-700 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>No hidden fees. No long-term lock-ins.</span>
          </div>
          
          <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
            Flexible Pricing That <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
              Grows With You.
            </span>
          </h1>
          
          <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Whether you're exploring your first AI Worker, modernizing operations with ERP, or deploying an enterprise AI workforce, HIVENOX lets you start small and scale without limits.
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="/register" className="group px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-700/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
              Start Free <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/contact#demo" className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-base hover:bg-slate-50 hover:border-slate-300 transition-all duration-200">
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* STARTING OPTIONS GRID */}
      <section className="py-12 px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-black text-slate-900">Choose How You Want to Start</h2>
          <p className="text-slate-600 mt-3">We know every business is different, which is why HIVENOX offers multiple ways to begin.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up delay-100">
          {[
            { step: "01", title: "Platform Plans", desc: "All-in-one SaaS tiers for growing teams." },
            { step: "02", title: "AI Workers", desc: "Hire autonomous agents for specific roles." },
            { step: "03", title: "ERP Modules", desc: "Activate individual operational modules." },
            { step: "04", title: "Results-as-a-Service", desc: "We manage the tech. You get the outcomes." }
          ].map((opt, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
              <span className="text-blue-600 font-black text-xl mb-2 block">{opt.step}</span>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{opt.title}</h3>
              <p className="text-sm text-slate-600">{opt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPTION 1: PLATFORM PLANS */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block mb-3">Option 1 — Platform Plans</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">One Platform. Multiple Stages.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Free */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col animate-fade-up">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Free</h3>
            <p className="text-sm text-slate-500 mb-6 h-10">Perfect for individuals and small businesses exploring HIVENOX.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-slate-900">$0</span>
            </div>
            <a href="/register" className="w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-center hover:bg-slate-50 transition-colors mb-8">Start Free</a>
            <div className="flex-grow space-y-4">
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Includes</p>
              {['Limited AI usage', 'Basic CRM', 'Contacts management', 'Basic dashboard', 'Community support', '1 Workspace', 'Arabic & English'].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Starter */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col animate-fade-up delay-100">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Starter</h3>
            <p className="text-sm text-slate-500 mb-6 h-10">Perfect for startups and growing businesses replacing spreadsheets.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-slate-900">Custom</span>
            </div>
            <a href="/contact" className="w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-center hover:bg-slate-50 transition-colors mb-8">Contact Sales</a>
            <div className="flex-grow space-y-4">
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Includes</p>
              {['CRM', 'Sales Pipeline', 'Books', 'Basic HR', 'AI Assistant', 'Workflow Automation', 'Reporting Dashboard', 'Email Support'].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Growth */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col relative transform lg:-translate-y-4 shadow-2xl shadow-blue-900/20 animate-fade-up delay-200">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-sky-400 text-white text-xs font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
              ⭐ Most Popular
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Growth</h3>
            <p className="text-sm text-slate-400 mb-6 h-10">Everything needed to run a growing company ready to scale.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-white">Custom</span>
            </div>
            <a href="/contact" className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-center hover:bg-blue-700 transition-colors mb-8 shadow-lg shadow-blue-600/20">Contact Sales</a>
            <div className="flex-grow space-y-4">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">Includes</p>
              {['Complete ERP', 'CRM & Finance', 'Inventory & HRMS', 'Operations', 'AI Workers', 'Business Intelligence', 'Automation', 'Multi-user Collaboration', 'API Access'].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col animate-fade-up delay-300">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Enterprise</h3>
            <p className="text-sm text-slate-500 mb-6 h-10">For organizations across multiple teams, countries, or brands.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-slate-900">Custom</span>
            </div>
            <a href="/contact" className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-center hover:bg-slate-800 transition-colors mb-8">Contact Sales</a>
            <div className="flex-grow space-y-4">
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Everything in Growth, plus:</p>
              {['Unlimited users', 'Dedicated infrastructure', 'Enterprise Security & SSO', 'Custom integrations', 'Dedicated Success Manager', 'Priority Support SLA', 'AI Governance', 'Advanced Analytics'].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPTION 2: AI WORKERS */}
      <section className="py-24 px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase block mb-3">Option 2 — AI Workers</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">Hire AI Employees Instead of Headcount.</h2>
            <p className="text-slate-400 text-lg">Choose individual AI Workers or combine multiple workers into your own autonomous AI department. No annual lock-in. (Prices in AUD)</p>
          </div>

          {/* AI Workers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { title: "Social Worker", price: "$499", icon: Share2, desc: "Businesses that already create content but need scheduling and publishing.", features: ["30 scheduled posts/mo", "3 platforms", "1,000 AI credits/mo"] },
              { title: "Content Worker", price: "$799", icon: FileText, desc: "Businesses that need professional AI-generated content and brand authority.", features: ["20 content pieces/mo", "Executive branding", "5,000 AI credits/mo"] },
              { title: "Growth Worker", price: "$1,199", icon: Zap, popular: true, desc: "Businesses that want automation AND content creation in one place.", features: ["50 posts/mo (5 platforms)", "Monthly strategy session", "12,000 AI credits/mo"] },
              { title: "Video Worker", price: "$899", icon: Video, desc: "Brands ready to scale on TikTok, Reels, and YouTube Shorts.", features: ["15 scripts & concepts/mo", "Platform optimization", "4,000 AI credits/mo"] },
              { title: "SEO Worker", price: "$599", icon: Search, desc: "Businesses that want to rank with search-driven growth.", features: ["8 SEO blog articles/mo", "Keyword mapping", "6,000 AI credits/mo"] },
              { title: "Analytics Worker", price: "$399", icon: BarChart3, badge: "Add-on", desc: "Upgrades you from basic to revenue-grade insight.", features: ["ROI tracking", "Cohort analysis", "1,500 AI credits/mo"] },
            ].map((worker, i) => (
              <div key={i} className={`rounded-3xl p-8 border flex flex-col ${worker.popular ? 'bg-blue-600 border-blue-500 shadow-2xl shadow-blue-900/50' : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${worker.popular ? 'bg-blue-500 text-white' : 'bg-slate-700 text-blue-400'}`}>
                    <worker.icon className="w-6 h-6" />
                  </div>
                  {worker.popular && <span className="bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popular</span>}
                  {worker.badge && <span className="bg-slate-700 text-slate-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{worker.badge}</span>}
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{worker.title}</h3>
                <p className={`text-sm mb-6 h-12 ${worker.popular ? 'text-blue-100' : 'text-slate-400'}`}>{worker.desc}</p>
                <div className="mb-8 border-b border-white/10 pb-6">
                  <span className="text-4xl font-black text-white">{worker.price}</span><span className={`text-sm ${worker.popular ? 'text-blue-200' : 'text-slate-400'}`}> /mo</span>
                </div>
                <div className="flex-grow space-y-3 mb-8">
                  {worker.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      <Check className={`w-5 h-5 shrink-0 ${worker.popular ? 'text-blue-300' : 'text-blue-400'}`} />
                      <span className={worker.popular ? 'text-white' : 'text-slate-300'}>{feat}</span>
                    </div>
                  ))}
                </div>
                <a href="/register" className={`w-full py-3 px-4 rounded-xl font-bold text-center transition-colors ${worker.popular ? 'bg-white text-blue-600 hover:bg-slate-50' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                  Select {worker.title.split(' ')[0]}
                </a>
              </div>
            ))}
          </div>

          {/* Add-ons & Other Workers Banner */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Looking for other AI capabilities?</h4>
              <p className="text-slate-400 text-sm">We also offer <strong className="text-white">AI Sales Agents</strong>, <strong className="text-white">AI Support Agents</strong>, <strong className="text-white">AI Recruiters</strong>, and <strong className="text-white">Voice AI</strong>. Contact us for custom configurations.</p>
            </div>
            <a href="/contact" className="shrink-0 px-6 py-3 rounded-xl bg-slate-700 text-white font-bold hover:bg-slate-600 transition-colors">Speak to Sales</a>
          </div>

        </div>
      </section>

      {/* FEATURE COMPARISON TABLE */}
      <section className="py-24 px-6 lg:px-8 max-w-[90rem] mx-auto bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Worker Comparison</h2>
          <p className="text-slate-600 mt-4">Feature by feature breakdown of our AI Workers.</p>
        </div>

        <div className="overflow-x-auto pb-8">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr>
                <th className="p-4 border-b-2 border-slate-200 font-bold text-slate-900 bg-white sticky left-0 z-10 w-64 shadow-[1px_0_0_0_#e2e8f0]">Feature</th>
                {['Social', 'Content', 'Growth ⭐', 'Video', 'SEO', 'Analytics', 'Enterprise'].map((col, i) => (
                  <th key={i} className={`p-4 border-b-2 border-slate-200 font-bold ${col.includes('⭐') ? 'text-blue-600' : 'text-slate-900'}`}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm text-slate-600 divide-y divide-slate-100">
              {[
                { name: "Monthly Price (AUD)", vals: ["$499", "$799", "$1,199", "$899", "$599", "$399", "From $2,999"] },
                { name: "Scheduling & Publishing", vals: [true, false, true, false, false, false, true] },
                { name: "AI Content Generation", vals: [false, true, true, false, false, false, true] },
                { name: "Video & Scripting", vals: [false, false, false, true, false, false, true] },
                { name: "Platforms Included", vals: ["3", "—", "5+ TikTok/YT", "—", "—", "—", "All"] },
                { name: "Posts / Pieces per month", vals: ["30 posts", "20 pieces", "50 posts", "15 videos", "8 blogs", "—", "Custom"] },
                { name: "Credit limit / mo", vals: ["1,000", "5,000", "12,000", "4,000", "6,000", "1,500", "Unlimited"] },
                { name: "Website blogs", vals: [false, false, false, false, true, false, true] },
                { name: "Executive Branding", vals: [false, true, true, false, false, false, true] },
                { name: "Advanced Analytics & ROI", vals: [false, false, false, false, false, true, true] },
                { name: "Lead-gen Workflows", vals: [false, false, false, false, false, false, true] },
                { name: "Support SLA", vals: ["Email", "Email", "Priority", "Email", "Email", "Email", "4-hour"] },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900 bg-white sticky left-0 z-10 shadow-[1px_0_0_0_#e2e8f0]">{row.name}</td>
                  {row.vals.map((val, vIdx) => (
                    <td key={vIdx} className="p-4">
                      {typeof val === 'boolean' ? (
                        val ? <CheckCircle2 className="w-5 h-5 text-blue-500" /> : <Minus className="w-5 h-5 text-slate-300" />
                      ) : (
                        <span className={vIdx === 2 ? 'font-bold text-blue-600' : ''}>{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add-ons */}
        <div className="mt-16 bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200">
          <h3 className="text-2xl font-black text-slate-900 mb-8">Stack on what you need</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Extra brand profile", price: "+$199 / mo", desc: "Additional brand on any plan" },
              { title: "Extra 20 posts / month", price: "+$149 / mo", desc: "Top-up for high-frequency posters" },
              { title: "Arabic-language content", price: "+$249 / mo", desc: "Native Arabic content + cultural review" },
              { title: "AI Lead Qualification", price: "+$499 / mo", desc: "Inbound lead scoring & routing" },
              { title: "Email Warmup", price: "+$199 / mo", desc: "Domain warmup + inbox placement" },
              { title: "White-label (Agencies)", price: "+$799 / mo", desc: "Reseller branding, sub-accounts" }
            ].map((addon, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 flex justify-between items-start gap-4">
                <div>
                  <h4 className="font-bold text-slate-900">{addon.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{addon.desc}</p>
                </div>
                <span className="text-sm font-black text-blue-600 whitespace-nowrap">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONS 3 & 4 (ERP & RAAS) BENTO */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Option 3 */}
          <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block mb-3">Option 3</span>
            <h3 className="text-3xl font-black text-slate-900 mb-4">ERP Modules</h3>
            <h4 className="text-lg font-bold text-slate-600 mb-6">Only Pay for What You Need</h4>
            <p className="text-slate-600 leading-relaxed mb-8">
              Activate modules individually and expand whenever you're ready. Every module shares one database, one login, and one intelligent AI layer.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['CRM', 'HRMS', 'Accounting', 'Inventory', 'Operations', 'Analytics', 'Help Desk', 'SalesFlow'].map((mod, i) => (
                <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700">
                  <Box className="w-4 h-4 text-blue-500" /> {mod}
                </div>
              ))}
            </div>
            <a href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">Explore ERP Modules <ArrowRight className="w-4 h-4" /></a>
          </div>

          {/* Option 4 */}
          <div className="bg-slate-900 text-white rounded-3xl p-10 border border-slate-800 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500" />
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase block mb-3">Option 4</span>
              <h3 className="text-3xl font-black text-white mb-4">Results-as-a-Service</h3>
              <h4 className="text-lg font-bold text-blue-300 mb-6">Don't Buy Software. Buy Outcomes.</h4>
              <p className="text-slate-300 leading-relaxed mb-6">
                Sometimes you don't want another platform to manage. You simply want more customers, better marketing, faster support, or smoother operations.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                Instead of paying for software licenses, you're investing in measurable business outcomes. We operate the AI workers, automation, and platform for you.
              </p>
              <div className="pt-8 border-t border-slate-800 flex flex-wrap gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider w-full mb-2">Ideal For:</span>
                {['Agencies', 'Clinics', 'Real Estate', 'Retail', 'Professional Services', 'Enterprises'].map((ind, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">{ind}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COST COMPARISON (VISUAL) */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-16">Why Businesses Save Money With HIVENOX</h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Traditional */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex-1 w-full">
              <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-6">Traditional Software</h3>
              <div className="flex flex-wrap justify-center gap-2 mb-6 opacity-60 grayscale">
                <div className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">CRM</div> <Plus className="w-4 h-4 mt-2 text-slate-400"/>
                <div className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">HR</div> <Plus className="w-4 h-4 mt-2 text-slate-400"/>
                <div className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">Accounting</div> <Plus className="w-4 h-4 mt-2 text-slate-400"/>
                <div className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">Automation</div> <Plus className="w-4 h-4 mt-2 text-slate-400"/>
                <div className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold">AI Tools</div>
                <div className="w-full text-slate-400 text-sm mt-2">+ Integrations + Consultants</div>
              </div>
              <div className="pt-6 border-t border-slate-100">
                <span className="text-2xl font-black text-rose-500">= Higher Costs & Chaos</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center shadow-sm text-slate-400 font-bold">VS</div>
            </div>

            {/* Hivenox */}
            <div className="bg-blue-600 p-8 rounded-3xl border border-blue-500 shadow-xl shadow-blue-600/20 flex-1 w-full text-white transform lg:scale-105">
              <h3 className="text-lg font-bold text-blue-200 uppercase tracking-widest mb-6">HIVENOX</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 bg-blue-700/50 px-4 py-3 rounded-xl"><LayoutDashboard className="w-5 h-5 text-blue-300"/> One Platform</div>
                <div className="flex items-center gap-2 bg-blue-700/50 px-4 py-3 rounded-xl"><Users className="w-5 h-5 text-blue-300"/> One Login</div>
                <div className="flex items-center gap-2 bg-blue-700/50 px-4 py-3 rounded-xl"><Box className="w-5 h-5 text-blue-300"/> One Database</div>
                <div className="flex items-center gap-2 bg-blue-700/50 px-4 py-3 rounded-xl"><PieChart className="w-5 h-5 text-blue-300"/> One Bill</div>
              </div>
              <div className="pt-6 border-t border-blue-500">
                <span className="text-2xl font-black text-white">= Everything Connected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED FEATURES & ENTERPRISE */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h3 className="text-2xl font-black text-slate-900 mb-8">Included With Every Paid Plan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Native Arabic & English", "Mobile Responsive", "Enterprise Security", 
              "Automatic Updates", "AI Integration", "Role-Based Permissions", 
              "Workflow Automation", "Cloud Hosting", "API Access", 
              "Knowledge Base", "Email Support", "Regular Feature Updates"
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-medium text-slate-700">{feat}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-10 text-white">
          <Building2 className="w-10 h-10 text-blue-400 mb-6" />
          <h3 className="text-2xl font-black mb-4">Enterprise Services</h3>
          <p className="text-slate-400 mb-6">Need something beyond standard plans? Our enterprise team can provide custom solutions.</p>
          <ul className="space-y-2 mb-8 text-sm text-slate-300">
            <li>• Custom AI Solutions & Software</li>
            <li>• Enterprise ERP Deployment</li>
            <li>• Data & Cloud Migration</li>
            <li>• Microsoft Fabric & Power BI</li>
            <li>• Training, Strategy & Dedicated SLA</li>
          </ul>
          <a href="/contact" className="inline-flex items-center gap-2 text-white font-bold bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors w-full justify-center">
            Contact Enterprise Sales <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* FAQS (Server-side compatible HTML details/summary) */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Can I start for free?", a: "Yes. HIVENOX offers a free plan so you can explore the platform before upgrading." },
              { q: "Can I buy only one AI Worker?", a: "Absolutely. Every AI Worker is available individually, and you can add more whenever you need them." },
              { q: "Can I activate only one ERP module?", a: "Yes. HIVENOX is fully modular. Start with CRM, HRMS, Books, or any other module and expand later without migrating your data." },
              { q: "Are AI Workers included in every plan?", a: "Some plans include selected AI capabilities, while dedicated AI Workers are available as individual subscriptions or bundled with higher-tier plans." },
              { q: "Can I upgrade anytime?", a: "Yes. Your business can move between plans, add modules, or activate AI Workers at any time without disrupting operations." },
              { q: "Is there a contract?", a: "Monthly and annual billing options are available. Enterprise agreements can be tailored to your organization's needs." },
              { q: "Do you support Arabic?", a: "Yes. HIVENOX is built natively for both Arabic and English, including right-to-left (RTL) support and bilingual AI Workers." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-slate-950 py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Ready to Build Your Intelligent Business?</h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're starting with one AI Worker, modernizing your operations with ERP, or deploying a complete enterprise platform, HIVENOX grows with your business every step of the way.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/register" className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-200">
              Start Free
            </a>
            <a href="/contact#demo" className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-base hover:bg-slate-800 hover:border-slate-700 transition-all duration-200">
              Book a Demo
            </a>
            <a href="/contact" className="px-8 py-4 rounded-xl bg-transparent border border-transparent text-blue-400 font-bold text-base hover:text-white transition-all duration-200">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}