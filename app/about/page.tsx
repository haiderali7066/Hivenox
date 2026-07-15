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
  FileText
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans overflow-hidden antialiased">
      
      {/* PURE CSS ANIMATIONS (SERVER-SIDE & NEXT.JS SVR FRIENDLY)
      */}
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
      <section className="relative pt-36 pb-20 px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[75vh]">
        {/* Background CSS Decorative Effects */}
        <div className="absolute top-[40%] left-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-blue-600/10 to-sky-400/10 rounded-full blur-[160px] -z-10 animate-glow" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000_70%,transparent_100%)] -z-20 opacity-70" />

        <div className="space-y-8 max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/80 shadow-sm text-xs md:text-sm font-semibold text-blue-700 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Built by AI Solution Technologies</span>
          </div>
          
          {/* Main Title */}
          <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.05]">
            We're Building the <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
              Operating System
            </span> <br />
            for Modern Business.
          </h1>
          
          {/* Subtitle */}
          <div className="animate-fade-up delay-200 space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            <p>
              HIVENOX exists to replace operational chaos with elegant simplicity. We believe modern companies shouldn't drown under the weight of disconnected SaaS tools, manual data imports, or fragmented workflows.
            </p>
          </div>

          {/* Inline Micro CTAs */}
          <div className="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="/register" className="group px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-700/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
              Get Started Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/contact#demo" className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-200">
              Watch 2-Min Demo
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING STATS GRID (GLASSMORPHISM BAR) */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 -mt-6">
        <div className="animate-fade-up delay-400 bg-white/80 border border-slate-200/60 shadow-xl shadow-slate-100/50 rounded-2xl md:rounded-3xl backdrop-blur-md p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { num: "1", suffix: "", label: "Connected Ecosystem", highlight: true },
              { num: "12", suffix: "+", label: "Operational Modules" },
              { num: "10", suffix: "+", label: "Autonomous AI Workers" },
              { num: "2", suffix: "", label: "Native Languages" },
              { num: "3", suffix: "", label: "Global Regional Hubs" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col space-y-2 pt-6 md:pt-0 first:pt-0">
                <span className={`text-4xl md:text-5xl font-black tracking-tight ${stat.highlight ? 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent' : 'text-slate-900'}`}>
                  {stat.num}{stat.suffix}
                </span>
                <span className="text-xs md:text-sm font-semibold tracking-wide text-slate-500 uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY & THE CORPORATION GRID */}
      <section className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Story */}
        <div className="space-y-8 lg:col-span-6 animate-fade-up">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block mb-3">Company Heritage</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">Born From Genuine Operational Friction</h2>
          </div>
          <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
            <p>
              HIVENOX wasn't conceived in a vacuum. It was forged in the field, designed directly to address the structural business limitations that hold modern businesses back.
            </p>
            <p>
              For years, our software engineering team at <strong className="text-slate-900">AI Solution Technologies</strong> worked with scaling organizations. We constantly saw the same systemic problems: expensive software suites that didn’t talk to each other, manual data transfers, and teams spending valuable hours just maintaining basic software workflows.
            </p>
            <div className="border-l-4 border-blue-600 pl-6 py-2.5 my-6 bg-gradient-to-r from-blue-50/50 to-transparent rounded-r-xl">
              <p className="font-semibold text-slate-900 text-base md:text-lg">
                "We realized businesses don't need yet another isolated software application. They need a unified nervous system where data flows autonomously."
              </p>
            </div>
            <p>
              Today, HIVENOX seamlessly orchestrates ERP, CRM, HRIS, Finance, and Enterprise Automation into one secure cloud space, completely breaking down legacy data silos.
            </p>
          </div>
        </div>

        {/* Right Side: The Foundation Terminal Visual */}
        <div className="lg:col-span-6 animate-fade-up delay-200">
          <div className="bg-slate-950 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl border border-slate-800 group hover:border-slate-700/80 transition-all duration-300">
            <div className="absolute -top-12 -right-12 p-8 opacity-5">
              <Code2 className="w-64 h-64 text-blue-400" />
            </div>
            
            {/* Terminal Top Window Accent */}
            <div className="flex items-center gap-2 pb-6 mb-6 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-500">hivenox-core-engine.sh</span>
            </div>

            <div className="space-y-6 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/40 text-blue-300 border border-blue-800/60 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Dev Sponsor
              </span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">AI Solution Technologies</h3>
              
              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                HIVENOX is engineered and fully backed by AI Solution Technologies, an enterprise-grade developer specializing in robust Artificial Intelligence integration, Big Data systems, and digital transformations.
              </p>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                Having built foundational cloud architecture across Australia, the UAE, and the Kingdom of Saudi Arabia, we integrated mission-critical cybersecurity regulations and native bilingual support from day one.
              </p>
              
              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block">Deployments</span>
                  <span className="text-sm font-semibold text-slate-200">AU • UAE • KSA Compliant</span>
                </div>
                <a href="/contact#sales" className="inline-flex items-center gap-1 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                  Speak to an architect <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION BENTO CARDS */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 border-t border-slate-200/80">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Mission Card (Spans 7 Cols) */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group animate-fade-up delay-100 md:col-span-7 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Our Mission</h3>
              <h4 className="text-base md:text-lg font-bold text-blue-600 mb-4">Enterprise Engine. Accessible Accessibility.</h4>
              <p className="text-slate-600 leading-relaxed text-base">
                To level the playing field by giving ambitious businesses seamless, immediate access to world-class automated AI workers and unified cloud infrastructure—without demanding enterprise budgets or painful years of professional implementation services. 
              </p>
            </div>
            <div className="pt-8 border-t border-slate-100 mt-8 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Core Strategy: Accessible Innovation</span>
              <a href="/pricing" className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1">View Transparent Pricing <ChevronRight className="w-3.5 h-3.5" /></a>
            </div>
          </div>

          {/* Vision Card (Spans 5 Cols) */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 group animate-fade-up delay-200 md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Our Vision</h3>
              <h4 className="text-base md:text-lg font-bold text-indigo-600 mb-4">The Augmented Workforce</h4>
              <p className="text-slate-600 leading-relaxed text-base">
                We envision an automated business world where your human experts don’t handle copy-paste data tasks. Every organization will leverage a seamless, hyper-secure hybrid workforce composed of talented humans operating alongside reliable, 24/7 autonomous AI agents.
              </p>
            </div>
            <div className="pt-8 border-t border-slate-100 mt-8 flex items-center">
              <span className="text-xs text-slate-400 font-medium">Ultimate Objective: Free Human Capital</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HIVENOX */}
<section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black py-24 md:py-32 text-white">

  {/* Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
    <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-20">

      <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        Why Choose HIVENOX
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight">
        Built for
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
          {" "}Modern Businesses
        </span>
      </h2>

      <p className="mt-6 text-lg text-slate-400">
        One connected platform designed for ambitious companies that need
        intelligent automation, scalability, and enterprise-grade security.
      </p>

    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          icon: Database,
          color: "from-cyan-500 to-blue-600",
          border: "hover:border-cyan-500/50",
          title: "One Master Database",
          desc: "Every module runs from one unified database, eliminating duplicate records and synchronization delays."
        },
        {
          icon: Cpu,
          color: "from-violet-500 to-fuchsia-600",
          border: "hover:border-violet-500/50",
          title: "AI Employees",
          desc: "AI agents automate invoicing, accounting, billing, approvals, and operational workflows around the clock."
        },
        {
          icon: Globe,
          color: "from-emerald-500 to-teal-500",
          border: "hover:border-emerald-500/50",
          title: "Bilingual Platform",
          desc: "Native Arabic and English support with localized workflows for regional and international organizations."
        },
        {
          icon: Workflow,
          color: "from-orange-500 to-red-500",
          border: "hover:border-orange-500/50",
          title: "Modular Growth",
          desc: "Start with the tools you need and expand into ERP, HR, Inventory, CRM, and Payroll without migration."
        },
        {
          icon: ShieldCheck,
          color: "from-pink-500 to-rose-600",
          border: "hover:border-pink-500/50",
          title: "Enterprise Security",
          desc: "Bank-grade encryption, role-based permissions, audit logs, and compliance-ready architecture."
        },
        {
          icon: Users,
          color: "from-amber-500 to-yellow-500",
          border: "hover:border-yellow-500/50",
          title: "Unified Collaboration",
          desc: "Connect sales, finance, operations, HR, and customer service inside one intelligent workspace."
        }
      ].map((feature, index) => (

        <div
          key={index}
          className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${feature.border}`}
        >

          {/* Glow */}
          <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-r ${feature.color} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`} />

          {/* Icon */}
          <div
            className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg`}
          >
            <feature.icon className="h-8 w-8 text-white" />
          </div>

          <h3 className="mb-4 text-2xl font-bold">
            {feature.title}
          </h3>

          <p className="leading-8 text-slate-400">
            {feature.desc}
          </p>

          {/* Bottom Line */}
          <div className={`mt-8 h-1 w-12 rounded-full bg-gradient-to-r ${feature.color} transition-all duration-500 group-hover:w-full`} />

        </div>

      ))}

    </div>

  </div>

</section>

      {/* CORE VALUES & INDUSTRIES */}
      <section className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
        
        {/* Industries Grid */}
        <div className="animate-fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block mb-3">Versatility</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">Configured for Every Major Sector</h2>
            <p className="text-slate-600 mt-4 text-base md:text-lg">Whether managing distributed logistics pipelines or localized clinics, HIVENOX is designed to adjust immediately.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3.5 max-w-5xl mx-auto">
            {[
              "Healthcare", "Retail & E-commerce", "Real Estate Development", "Professional Services", 
              "Advanced Manufacturing", "Hospitality Group", "Education Tech", "Engineering & Construction", 
              "Federal Services", "3PL Logistics", "Creative Agencies", "Software Enterprise"
            ].map((industry, i) => (
              <div key={i} className="px-5 py-3 rounded-xl bg-white border border-slate-200/80 text-slate-700 font-bold text-sm shadow-sm hover:border-blue-500 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                {industry}
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="animate-fade-up delay-200 pt-8 border-t border-slate-200/60">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block mb-3">Our Anchors</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">The Values That Guide Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Empathetic Automation", desc: "We deploy cutting-edge technology directly to serve people, eliminating repetitive routines and unlocking real human potential." },
              { title: "Obsession with Clean UX", desc: "Complexity is lazy. We sweat over every interface, workflow, and action, packaging enterprise horsepower inside elegant interfaces." },
              { title: "Absolute Trust & Privacy", desc: "Security isn't a feature—it's the core. We safeguard proprietary business records with localized data residency policies." },
              { title: "Customer-Led Progress", desc: "Your growth translates directly to our performance. Every major version update focuses heavily on real feedback loops." },
              { title: "Continuous Evolution", desc: "We never stand still. Our active deployments scale daily, keeping your teams ahead of tech transitions." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200/70 flex gap-4 items-start group hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{value.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RE-ARCHITECTED BOTTOM CTA */}
      <section className="bg-slate-950 py-24 md:py-32 text-white relative overflow-hidden">
        {/* Glowing Ambient Light Backdrops */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Unlock the Next Wave of <br />
            Business Productivity
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Ready to transition past expensive legacy software, slow exports, and manual sync errors? Step up to a unified ecosystem that naturally grows as you scale. Let's design your modern operational roadmap.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <a href="/register" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-200">
              Launch Free Account
            </a>
            <a href="/contact#demo" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-base hover:bg-slate-800 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200">
              Schedule Architecture Call
            </a>
          </div>

          {/* Quick FAQ / Trust Help text */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-emerald-500" /> Free 14-Day Pilot</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-500" /> SOC2 Compliant Cloud</span>
            <span className="flex items-center gap-1.5"><HelpCircle className="w-4 h-4 text-slate-500" /> 24/7 Dedicated Support</span>
          </div>
        </div>
      </section>

    </div>
  );
}