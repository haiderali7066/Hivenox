"use client";

import { 
  CheckCircle2, ArrowRight, Target, Lightbulb, Settings, Repeat, 
  BarChart4, Users, Database, Zap, Shield, Cpu, RefreshCw, 
  Workflow, Check, Sparkles, Box, PieChart, LineChart, Briefcase, ChevronRight, Globe, Layers, ArrowDown, MapPin
} from "lucide-react";
import React from "react";

export default function RaaSPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Animated Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION (SEO & Geo-Optimized)
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-base font-bold uppercase tracking-widest text-blue-700 shadow-sm animate-fade-in-up">
                <Sparkles className="size-5 text-blue-700" />
                RESULTS-AS-A-SERVICE
              </div>
              
              <h1 className="mb-6 text-5xl font-light tracking-tight text-slate-900 lg:text-7xl leading-tight">
                Stop buying software. <br />
                <span className="font-semibold text-blue-700">
                  Start buying results.
                </span>
              </h1>
              
              <p className="mb-6 max-w-2xl text-xl font-light leading-relaxed text-slate-700">
                HIVENOX Results-as-a-Service combines AI workers, intelligent automation, and human expertise to deliver measurable outcomes. Serving forward-thinking enterprises globally.
              </p>

              <div className="flex items-center gap-2 mb-10 text-base font-medium text-slate-500 bg-white/80 py-3 px-6 rounded-2xl border border-slate-200/60 backdrop-blur-sm w-full max-w-2xl">
                 <MapPin className="size-5 text-blue-700 shrink-0" />
                 <span>Delivering enterprise AI solutions across Australia, UAE, Saudi Arabia, and our technical hub in Lahore, Punjab, Pakistan.</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12 w-full">
                <a href="/book" className="group flex-1 sm:flex-none inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-1">
                  Book a Results Consultation
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/contact" className="group flex-1 sm:flex-none inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50 hover:-translate-y-1">
                  Contact Sales
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative w-full h-[30rem] lg:h-[40rem] rounded-[2rem] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-blue-700/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2850&auto=format&fit=crop" 
                alt="Enterprise AI Team collaborating" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. THE PROBLEM (Blue-700 Background)
            ========================================================================= */}
        <section className="bg-blue-700 py-24 relative overflow-hidden rounded-t-[3rem]">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="mb-4 inline-block text-base font-bold uppercase tracking-widest text-blue-100 border border-blue-500 bg-blue-800/50 px-4 py-2 rounded-full">
                  The Old Way
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                  You don't need another tool. <br/>
                  <span className="font-semibold text-blue-200">You need the work to get done.</span>
                </h2>
                <div className="space-y-6 text-lg font-light text-blue-50 mb-8">
                  <p className="text-xl">
                    Businesses invest in CRM platforms, ERP systems, AI software, and dashboards — yet the outcomes they actually want still require people to connect the dots.
                  </p>
                  <div className="flex flex-wrap gap-3 font-medium text-white">
                    <span className="bg-blue-800 border border-blue-600 px-4 py-2 rounded-xl">More leads.</span>
                    <span className="bg-blue-800 border border-blue-600 px-4 py-2 rounded-xl">Faster sales.</span>
                    <span className="bg-blue-800 border border-blue-600 px-4 py-2 rounded-xl">Better support.</span>
                    <span className="bg-blue-800 border border-blue-600 px-4 py-2 rounded-xl">Lower costs.</span>
                  </div>
                </div>
                
                <a href="/book" className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-medium text-blue-700 transition-all duration-300 hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1">
                  Change How You Work
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Pain points grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Disconnected tools", desc: "Data lives across systems that do not communicate." },
                  { title: "Manual execution", desc: "Teams spend hours on repetitive, low-value processes." },
                  { title: "AI without results", desc: "Access to AI exists, but execution ownership does not." },
                  { title: "Reports, no action", desc: "Dashboards tell you what happened, not what to do." }
                ].map((pain, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-blue-800/40 border border-blue-600 backdrop-blur-sm transition-all duration-300 hover:bg-blue-800 hover:scale-[1.02] hover:shadow-xl">
                    <h3 className="text-xl font-semibold text-white mb-3">{pain.title}</h3>
                    <p className="text-base font-light text-blue-100">{pain.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. THE RaaS DIFFERENCE (White Background)
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                What if you could buy the <span className="font-semibold text-blue-700">outcome</span> instead?
              </h2>
              <p className="text-xl font-light text-slate-600 mb-8">
                RaaS changes the relationship between your business and technology. Define the result, and we build the operating system to achieve it.
              </p>
              
              <div className="flex justify-center gap-4">
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-blue-700 bg-transparent px-8 text-base font-medium text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white">
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-1 bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 z-0"></div>

              {/* Columns */}
              {[
                { icon: Target, title: "Define the Outcome", subtitle: "Tell us what success looks like.", items: ["Generate more qualified leads.", "Reduce support response times.", "Automate repetitive operations."] },
                { icon: Settings, title: "Build the Engine", subtitle: "We combine the right mix of:", items: ["AI Workers & Custom software", "Intelligent workflow automation", "Human strategy and expertise"] },
                { icon: BarChart4, title: "Measure Results", subtitle: "Managed around business KPIs.", items: ["Focus on true business outcomes.", "Not just software adoption.", "Continuous scaling and tracking."] }
              ].map((col, i) => (
                <div key={i} className="relative z-10 flex flex-col h-full bg-slate-50 rounded-[2rem] p-10 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 group">
                  <div className="size-20 rounded-[1.5rem] bg-white border border-slate-200 flex items-center justify-center mb-8 mx-auto shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <col.icon className="size-10 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-center text-slate-900 mb-4">{col.title}</h3>
                  <p className="text-base font-medium text-blue-700 text-center mb-8">{col.subtitle}</p>
                  <ul className="space-y-4 text-base font-light text-slate-700 flex-1">
                    {col.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="size-5 text-blue-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. WHAT IS RaaS? (Mixed Grid with Images)
            ========================================================================= */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
              <div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  A managed business outcome, <span className="font-semibold text-blue-700">powered by technology.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8">
                  Results-as-a-Service is a managed model where HIVENOX takes responsibility for designing, deploying and continuously improving the systems required to achieve a specific business outcome.
                </p>
                <a href="/book" className="group inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:-translate-y-1">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="relative h-[25rem] rounded-[2rem] overflow-hidden shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                  alt="Business Intelligence Dashboard"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Revenue Growth", icon: LineChart, desc: "Generate, qualify and convert more opportunities through AI-powered workflows." },
                { title: "Operational Efficiency", icon: Zap, desc: "Automate repetitive processes and remove manual handoffs across your business." },
                { title: "Customer Experience", icon: Users, desc: "Deliver faster, more consistent and bilingual customer support across every channel." },
                { title: "Business Intelligence", icon: PieChart, desc: "Turn disconnected business data into real-time visibility, insights and decisions." },
                { title: "Workforce Productivity", icon: Briefcase, desc: "Give your teams AI-powered workers that handle repetitive work around the clock." },
                { title: "Digital Transformation", icon: RefreshCw, desc: "Modernise legacy processes and build connected digital systems seamlessly." }
              ].map((card, i) => (
                <div key={i} className="group bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-blue-700 hover:-translate-y-1">
                  <div className="size-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                    <card.icon className="size-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">{card.title}</h3>
                  <p className="text-base font-light text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. HOW RaaS WORKS
            ========================================================================= */}
        <section id="how-it-works" className="py-24 bg-white border-y border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="mb-8 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                From business challenge to <span className="font-semibold text-blue-700">measurable result.</span>
              </h2>
              <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-slate-100 px-8 text-base font-medium text-slate-900 transition-all duration-300 hover:bg-slate-200 hover:shadow-md">
                Ask About Our Process
              </a>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="absolute left-[35px] top-4 bottom-4 w-1 bg-blue-100 md:hidden rounded-full"></div>
              
              <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 md:gap-y-20">
                {[
                  { step: "01", title: "Define", subtitle: "Start with the outcome.", desc: "Identify the business challenge, define the desired result and establish KPIs." },
                  { step: "02", title: "Diagnose", subtitle: "Understand your business.", desc: "Map your current systems, processes, data, people, and bottlenecks." },
                  { step: "03", title: "Design", subtitle: "Build the right solution.", desc: "Combine HIVENOX applications, AI Workers, automation, and custom technology." },
                  { step: "04", title: "Deploy", subtitle: "Put the system to work.", desc: "Implement the workflows, integrations and AI capabilities seamlessly." },
                  { step: "05", title: "Operate", subtitle: "Continuous management.", desc: "Our team continuously monitors performance and manages the workflows." },
                  { step: "06", title: "Optimise", subtitle: "Results get better.", desc: "Use real performance data to refine automation, AI workers, and processes." }
                ].map((item, i) => (
                  <div key={i} className="relative pl-24 md:pl-0 md:pt-20 group">
                    <div className="hidden md:flex absolute top-0 left-0 text-7xl font-black text-slate-50 transition-colors duration-300 group-hover:text-blue-50 -z-10">{item.step}</div>
                    
                    <div className="md:hidden absolute left-0 top-0 size-20 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl shadow-sm transition-all duration-300 group-hover:border-blue-700 group-hover:scale-110">
                      {item.step}
                    </div>

                    <div className="md:border-t-4 md:border-blue-100 md:pt-8 transition-colors duration-300 group-hover:border-blue-700">
                      <h3 className="text-3xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-lg font-bold text-blue-700 mb-4">{item.subtitle}</p>
                      <p className="text-base font-light text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            6. WHAT POWERS RaaS
            ========================================================================= */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/20"></div>
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-3xl">
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                  One outcome. Multiple capabilities. <br />
                  <span className="font-semibold text-blue-400">One accountable partner.</span>
                </h2>
                <p className="text-xl font-light text-slate-300">
                  Every business challenge is different. RaaS brings together the specific technologies and human expertise your outcome requires.
                </p>
              </div>
              <a href="/book" className="shrink-0 group inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1">
                Explore Capabilities
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "AI Workers", icon: Cpu, desc: "Digital workers that execute specialised marketing, sales, content, SEO and operational tasks." },
                { title: "Intelligent Automation", icon: Workflow, desc: "Connect systems and automate workflows that previously depended on manual effort." },
                { title: "Business Intelligence", icon: BarChart4, desc: "Transform business data into dashboards, insights, forecasting and actionable decisions." },
                { title: "HIVENOX ERP & Apps", icon: Layers, desc: "Run CRM, HRMS, finance, operations, projects and customer support on one platform." },
                { title: "Custom Software", icon: Settings, desc: "Build the missing technology when your business needs something unique to scale." },
                { title: "Human Expertise", icon: Users, desc: "Strategy, implementation, optimisation and ongoing support from seasoned specialists." }
              ].map((cap, i) => (
                <div key={i} className="bg-slate-800/40 border border-slate-700/50 p-10 rounded-[2rem] backdrop-blur-md transition-all duration-300 hover:bg-slate-800 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/50">
                  <cap.icon className="size-10 text-blue-400 mb-8" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{cap.title}</h3>
                  <p className="text-base font-light text-slate-300 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. EXAMPLE RaaS OUTCOMES (Blue-700 Dominant)
            ========================================================================= */}
        <section className="py-24 bg-blue-50 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="mb-8 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                What could you achieve with RaaS?
              </h2>
              <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-md">
                Discuss Your Specific Needs
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
              {[
                { 
                  title: "Lead Generation Engine", 
                  outcome: "More qualified sales opportunities.",
                  desc: "HIVENOX combines AI Sales Agents, Content Workers, SEO Workers and CRM automation to create a continuous demand-generation engine.",
                  tech: ["AI Workers", "CRM", "Automation"]
                },
                { 
                  title: "Customer Support Transformation", 
                  outcome: "Faster support, lower load.",
                  desc: "AI Support Agents handle routine enquiries while routing complex issues to your human team with full context.",
                  tech: ["AI Support Agent", "Hivenox Desk"]
                },
                { 
                  title: "Operational Automation", 
                  outcome: "Less manual work. More scale.",
                  desc: "Identify repetitive processes and automate the handoffs between teams, systems, and workflows across the enterprise.",
                  tech: ["Intelligent Automation", "ERP"]
                },
                { 
                  title: "Revenue Operations", 
                  outcome: "Smoother path from lead to revenue.",
                  desc: "Connect marketing, CRM, sales, proposals, invoicing, and renewals into one continuous, highly visible workflow.",
                  tech: ["CRM", "Insights AI", "Books"]
                }
              ].map((example, i) => (
                <div key={i} className="bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm flex flex-col h-full transition-all duration-300 hover:border-blue-700 hover:shadow-2xl hover:-translate-y-1">
                  <div className="mb-6">
                    <h3 className="text-3xl font-semibold text-slate-900 mb-4">{example.title}</h3>
                    <div className="inline-flex items-center gap-2 text-base font-bold text-blue-800 bg-blue-100 px-4 py-2 rounded-xl border border-blue-200 w-full md:w-auto">
                      <Target className="size-5 shrink-0" /> {example.outcome}
                    </div>
                  </div>
                  <p className="text-lg font-light text-slate-600 mb-10 flex-1">
                    {example.desc}
                  </p>
                  <div className="pt-8 border-t border-slate-100">
                    <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Powered By</p>
                    <div className="flex flex-wrap gap-3">
                      {example.tech.map((t, idx) => (
                        <span key={idx} className="bg-slate-50 border border-slate-200 text-slate-700 text-sm px-4 py-2 rounded-full font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. RaaS VS TRADITIONAL SOFTWARE
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="mb-8 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Software gives you the tools.<br className="hidden sm:block"/> 
                <span className="font-semibold text-blue-700">RaaS helps deliver the outcome.</span>
              </h2>
            </div>

            <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700/20 rounded-full blur-[100px]"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                
                {/* Traditional Side */}
                <div className="bg-slate-800/80 rounded-[2rem] p-10 border border-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-300 mb-8 border-b border-slate-700 pb-6 text-center">Traditional Software</h3>
                  <ul className="space-y-6 text-slate-400 font-light text-lg">
                    {["Buy the software", "Configure it yourself", "Your team manages adoption", "Pay for features", "Separate tools", "You manage integrations"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="size-2 rounded-full bg-slate-500 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RaaS Side */}
                <div className="bg-blue-700 rounded-[2rem] p-10 border border-blue-500 shadow-xl shadow-blue-900/50 transform md:-translate-y-4">
                  <h3 className="text-2xl font-semibold text-white mb-8 border-b border-blue-500 pb-6 text-center">HIVENOX RaaS</h3>
                  <ul className="space-y-6 text-blue-50 font-medium text-lg">
                    {["Define the outcome", "We design the solution", "We help operate the system", "Focus on business KPIs", "Connected capabilities", "We connect the workflow"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <CheckCircle2 className="size-6 text-white shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <a href="/book" className="flex w-full h-14 items-center justify-center rounded-full bg-white text-lg font-bold text-blue-700 transition-all duration-300 hover:bg-slate-100 hover:shadow-lg">
                      Start with RaaS
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. FLEXIBLE ENGAGEMENT MODELS
            ========================================================================= */}
        <section className="py-24 bg-slate-50 relative">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-8">
                Start with one result. Expand as you grow.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              
              {/* Model 1 */}
              <div className="bg-white rounded-[2rem] p-10 border border-slate-200 flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2">
                <h3 className="text-3xl font-semibold text-slate-900 mb-4">Outcome Sprint</h3>
                <p className="text-lg font-light text-slate-600 mb-10 flex-1">
                  A focused engagement built around one clearly defined business outcome.
                </p>
                <a href="/contact" className="w-full flex items-center justify-center h-14 text-lg font-medium text-slate-700 border-2 border-slate-200 bg-white rounded-full hover:bg-slate-50 transition-colors">
                  Inquire Now
                </a>
              </div>

              {/* Model 2 (Highlighted) */}
              <div className="bg-blue-700 rounded-[2rem] p-10 border border-blue-600 shadow-2xl flex flex-col transform md:-translate-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-800 text-blue-100 text-sm font-bold uppercase px-4 py-2 rounded-full mb-6 w-fit">
                  Most Popular
                </div>
                <h3 className="text-3xl font-semibold text-white mb-4">Managed RaaS</h3>
                <p className="text-lg font-light text-blue-100 mb-10 flex-1">
                  An ongoing partnership where HIVENOX operates and optimises the systems required to deliver agreed outcomes.
                </p>
                <a href="/book" className="w-full flex items-center justify-center h-14 text-lg font-bold text-blue-700 bg-white rounded-full hover:bg-slate-100 transition-colors shadow-lg">
                  Talk to a Specialist
                </a>
              </div>

              {/* Model 3 */}
              <div className="bg-white rounded-[2rem] p-10 border border-slate-200 flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2">
                <h3 className="text-3xl font-semibold text-slate-900 mb-4">Enterprise RaaS</h3>
                <p className="text-lg font-light text-slate-600 mb-10 flex-1">
                  A strategic, multi-function engagement spanning AI, automation, data, and custom technology.
                </p>
                <a href="/contact" className="w-full flex items-center justify-center h-14 text-lg font-medium text-slate-700 border-2 border-slate-200 bg-white rounded-full hover:bg-slate-50 transition-colors">
                  Enterprise Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. FINAL CTA
            ========================================================================= */}
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[3rem] bg-blue-700 px-8 py-24 sm:px-16 sm:py-32 text-center shadow-2xl group">
              
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[40rem] w-[40rem] rounded-full bg-blue-600 blur-[100px] opacity-50 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[40rem] w-[40rem] rounded-full bg-blue-800 blur-[120px] opacity-50 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              
              <div className="relative z-10 mx-auto max-w-4xl">
                <span className="mb-6 inline-block text-sm font-bold uppercase tracking-widest text-blue-100 bg-blue-900/50 px-6 py-2 rounded-full border border-blue-500/30">
                  Ready For The Next Result?
                </span>
                <h2 className="mb-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                  Tell us what you want your business to achieve.
                </h2>
                <p className="mb-12 text-xl font-light leading-relaxed text-blue-100 max-w-3xl mx-auto">
                  We will help you identify where AI, automation, intelligence and connected business systems can create the greatest impact across global markets—then build a roadmap around the result.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 mb-8 w-full">
                  <a href="/book" className="group flex-1 sm:flex-none inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-xl font-bold text-blue-700 transition-all duration-300 hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-1">
                    Book a Results Consultation
                    <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="/contact" className="group flex-1 sm:flex-none inline-flex h-16 items-center justify-center rounded-full border-2 border-blue-300 bg-transparent px-10 text-xl font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-1">
                    Talk to an Expert
                  </a>
                </div>
                
                <p className="text-base font-medium text-blue-200">
                  No commitment. No generic software pitch. Just a conversation about growth.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}