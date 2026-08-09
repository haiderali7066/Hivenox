"use client";

import React from "react";
import { 
  ArrowRight, Code, Layers, Puzzle, Shield, Zap, Database, 
  Workflow, Cpu, Globe, Users, CheckCircle2, ChevronRight, 
  Settings, Briefcase, Lightbulb, Box, ArrowDown, MoveRight
} from "lucide-react";

export default function CustomSoftwareRaaS() {
  return (
    <main className="min-h-screen w-full bg-slate-50 text-slate-900 font-sans selection:bg-cyan-200 selection:text-blue-900 overflow-x-hidden">
      
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] rounded-full bg-blue-50 blur-[120px] opacity-70 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
                <Box className="size-4 text-cyan-500" />
                PRODUCTS · SOLUTIONS
              </div>
              <h1 className="mb-6 text-4xl font-light tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                When the standard product isn’t the shape of your business, <span className="font-semibold text-blue-700">we build what is.</span>
              </h1>
              <p className="mb-6 text-lg text-slate-600 leading-relaxed">
                Backed by the engineering depth of AI Solution Technologies, HIVENOX designs and builds exactly what your business needs — on top of the platform you already run.
              </p>
              <p className="mb-10 text-base font-medium text-slate-500 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                Create the workflow, capability or integration your business needs without starting from zero. Your custom software shares your data, login, language and AI workforce from day one.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a href="/book" className="group inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-700/30 hover:-translate-y-1">
                  Scope a Build
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1 text-cyan-300" />
                </a>
                <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50">
                  Talk to Engineering
                </a>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm font-medium text-slate-600">
                {[
                  "Shaped to your business",
                  "Built on HIVENOX",
                  "Enterprise engineering",
                  "Production-grade from day one"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-cyan-500" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-cyan-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" 
                alt="Custom Software Engineering" 
                className="relative rounded-3xl shadow-2xl object-cover h-[600px] w-full border border-slate-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE PROBLEM
          ========================================================================= */}
      <section className="py-24 bg-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-blue-700">
              WHEN OFF-THE-SHELF ISN'T ENOUGH
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-6">
              Your business isn't standard. <br/>
              <span className="font-semibold text-blue-700">Your software shouldn't have to be.</span>
            </h2>
            <div className="text-lg text-slate-600 space-y-4 font-light">
              <p>Sometimes the standard product is almost right — but not quite.</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 font-medium">
                <li>You have a workflow no off-the-shelf tool anticipates.</li>
                <li>A process that gives your business a competitive advantage.</li>
                <li>An integration that could unlock disproportionate value.</li>
                <li>Or a capability that simply doesn't exist yet.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "The workflow doesn't fit", desc: "Your business works differently from the assumptions built into standard software." },
              { title: "The right integration doesn't exist", desc: "Your systems need to communicate in a way existing connectors don't support." },
              { title: "Your competitive advantage is unique", desc: "The process that makes you different can't be forced into a generic workflow." },
              { title: "Building from scratch is too much", desc: "A ground-up platform means greater cost, risk, time and complexity." }
            ].map((card, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{card.title}</h3>
                <p className="text-slate-600 font-light">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-700 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-xl font-light">
              <p className="mb-2">You don't need another disconnected system.</p>
              <p className="font-semibold text-cyan-200">You need software that fits the way your business actually works.</p>
            </div>
            <a href="/contact" className="shrink-0 bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-cyan-50 transition-colors">
              Discuss Your Workflow
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. THE HIVENOX DIFFERENCE
          ========================================================================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6">
              Custom software without <span className="text-blue-700">starting from scratch.</span>
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Build exactly what you need while inheriting everything you already have.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6 mx-auto w-64 shadow-sm">
              <span className="font-bold text-slate-800">Your Business Need</span>
            </div>
            
            <ArrowDown className="mx-auto text-cyan-500 size-8 mb-6 animate-bounce" />

            <div className="bg-blue-700 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 inline-block">
                  <span className="text-xl font-bold text-white flex items-center gap-2">
                    <Code className="text-cyan-300" /> Custom HIVENOX Capability
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white">
                  {[
                    { icon: Database, text: "Shared Data" },
                    { icon: Shield, text: "Shared Login" },
                    { icon: Globe, text: "Bilingual Foundation" },
                    { icon: Settings, text: "Security" },
                    { icon: Cpu, text: "AI Workforce" },
                    { icon: Layers, text: "Business Applications" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-center gap-3 bg-blue-800/50 p-4 rounded-xl border border-blue-500/30">
                      <item.icon className="size-5 text-cyan-400" />
                      <span className="font-medium text-sm sm:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="mt-12 max-w-2xl mx-auto text-lg text-slate-600">
              Instead of building an entirely separate application, HIVENOX lets your custom capability become a <span className="font-semibold text-blue-700">first-class part of the platform.</span>
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHAT WE BUILD
          ========================================================================= */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              If the capability doesn't exist, <span className="text-cyan-400">we can build it.</span>
            </h2>
            <p className="text-lg text-slate-300 font-light">
              Custom development can extend HIVENOX around the specific requirements of your organisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: "Custom Business Applications", desc: "Purpose-built applications around your exact business workflows." },
              { icon: Workflow, title: "Bespoke Workflows", desc: "Turn unique operational processes into connected digital workflows." },
              { icon: Puzzle, title: "Custom Integrations", desc: "Connect the systems, services and data sources your business depends on." },
              { icon: Cpu, title: "AI-Powered Capabilities", desc: "Add AI-powered functionality to processes that need more than rules-based software." },
              { icon: Briefcase, title: "Industry-Specific Solutions", desc: "Build functionality around requirements that are unique to your sector." },
              { icon: Code, title: "Internal Tools & Portals", desc: "Give teams purpose-built interfaces for the work they perform every day." }
            ].map((srv, i) => (
              <div key={i} className="group bg-slate-800 p-8 rounded-3xl border border-slate-700 transition-all duration-300 hover:bg-blue-900 hover:border-cyan-500/50 hover:-translate-y-2">
                <div className="size-12 rounded-2xl bg-slate-700/50 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 text-slate-400 transition-colors">
                  <srv.icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{srv.title}</h3>
                <p className="text-slate-400 font-light group-hover:text-slate-300 transition-colors">{srv.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
             <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-500 px-8 font-medium text-slate-900 transition-all hover:bg-cyan-400 hover:scale-105">
                Explore Custom Solutions
             </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. BUILT ON THE PLATFORM
          ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                Why build on <span className="text-blue-700">HIVENOX</span> instead of from scratch?
              </h2>
              <p className="text-slate-600 mb-6 text-lg font-light">
                A ground-up application has to solve everything before it can solve your specific problem. With HIVENOX, the foundation already exists.
              </p>
              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-2xl text-blue-900 font-medium">
                Build the capability you need — not the infrastructure you don't.
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { title: "Shared Database", desc: "Your custom capability works with the same underlying business data.", icon: Database },
                  { title: "One Login", desc: "Users don't need another disconnected identity or application.", icon: Shield },
                  { title: "Bilingual Foundation", desc: "Your custom software inherits HIVENOX's Arabic + English foundation.", icon: Globe },
                  { title: "Security", desc: "Your custom capability benefits from the platform's security posture.", icon: Settings },
                  { title: "AI Workforce", desc: "Your custom software can work alongside HIVENOX AI Workers and agents.", icon: Cpu },
                  { title: "Connected Applications", desc: "The capability becomes part of the wider HIVENOX ecosystem.", icon: Layers }
                ].map((feat, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="shrink-0 size-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-cyan-300 transition-colors">
                      <feat.icon className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{feat.title}</h4>
                      <p className="text-slate-600 font-light">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FROM IDEA TO PRODUCTION
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
              From business requirement to <span className="text-blue-700">production-grade capability.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Understand", sub: "We start with your business.", desc: "We understand the workflow, problem, users, systems and outcome the software needs to support." },
              { step: "02", title: "Design", sub: "We shape the solution.", desc: "We translate the requirement into a practical product and technical architecture." },
              { step: "03", title: "Build", sub: "We engineer the capability.", desc: "The software is developed using the HIVENOX platform as its foundation." },
              { step: "04", title: "Connect", sub: "We connect it to your business.", desc: "The new capability works with your existing HIVENOX data, applications and workflows." },
              { step: "05", title: "Launch", sub: "Production-ready from day one.", desc: "The custom capability becomes part of your operating environment rather than another isolated tool." },
              { step: "06", title: "Evolve", sub: "Improve as your business changes.", desc: "The software can evolve with the processes and requirements it was built to support." }
            ].map((s, i) => (
              <div key={i} className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-lg transition-all">
                <div className="text-5xl font-bold text-slate-100 absolute top-4 right-6 pointer-events-none group-hover:text-blue-50 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Step {s.step} — {s.title}</h3>
                  <p className="font-semibold text-cyan-600 mb-3 text-sm">{s.sub}</p>
                  <p className="text-slate-600 font-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. A CUSTOM CAPABILITY, NOT A SIDE PROJECT
          ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-16">
            Your custom software should feel <span className="text-blue-700">native to your business.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-500 mb-6 pb-6 border-b border-slate-200">
                Before: Disconnected custom software
              </h3>
              <ul className="space-y-4 text-left">
                {["Separate login", "Separate database", "Separate reporting", "Separate security", "Manual integrations", "Data duplication", "Another system to maintain"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 font-medium line-through decoration-slate-300">
                    <div className="size-2 rounded-full bg-slate-300"></div> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With Hivenox */}
            <div className="bg-blue-700 p-8 rounded-3xl text-white shadow-xl transform lg:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Shield className="size-40 text-cyan-400" />
              </div>
              <h3 className="relative z-10 text-xl font-bold text-cyan-300 mb-6 pb-6 border-b border-blue-600">
                With HIVENOX: Connected custom capability
              </h3>
              <ul className="relative z-10 space-y-4 text-left">
                {["One login", "Shared data", "Shared business context", "Native bilingual foundation", "Connected workflows", "AI workforce access", "Production-grade platform foundation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-blue-50">
                    <CheckCircle2 className="size-5 text-cyan-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-xl font-semibold text-slate-700">
            Bottom line: <span className="text-blue-700">Custom doesn't have to mean disconnected.</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. ENTERPRISE ENGINEERING
          ========================================================================= */}
      <section className="relative py-24 bg-blue-900 text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
          alt="Enterprise Engineering" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-cyan-400">
              ENGINEERING DEPTH
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              Enterprise engineering, without the ground-up cost, risk or timeline.
            </h2>
            <p className="text-lg text-blue-100 font-light leading-relaxed">
              HIVENOX's custom software capability is backed by the engineering depth of AI Solution Technologies, giving businesses access to enterprise-level software and data-platform engineering without having to build an entire technology organisation from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Scalable Architecture", desc: "Build capabilities designed to support real business operations." },
              { title: "Business-First Engineering", desc: "Technology decisions start with the workflow and business requirement." },
              { title: "Connected by Design", desc: "The custom capability belongs inside the wider HIVENOX platform." },
              { title: "Long-Term Capability", desc: "Build something that can evolve as your business grows." }
            ].map((pt, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="mt-1 size-8 rounded-full bg-blue-800 flex items-center justify-center shrink-0 border border-blue-600">
                  <div className="size-2 rounded-full bg-cyan-400"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{pt.title}</h3>
                  <p className="text-blue-200 font-light">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-blue-800 pt-8 flex items-center gap-6">
             <a href="/contact" className="text-cyan-400 hover:text-white font-medium flex items-center gap-2 group transition-colors">
               Talk to our Engineering Team <MoveRight className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. WHERE CUSTOM SOFTWARE FITS
          ========================================================================= */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
              Build when the <span className="text-blue-700">standard product stops short.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Scenario 01", title: "You have a unique workflow", desc: "Your process gives you an advantage, but standard software can't represent it.", build: "A purpose-built workflow application." },
              { label: "Scenario 02", title: "You need a missing integration", desc: "Two critical systems don't communicate the way your business requires.", build: "A connected integration layer." },
              { label: "Scenario 03", title: "You need a specialised capability", desc: "Your industry or organisation has requirements generic products don't cover.", build: "A custom business capability." },
              { label: "Scenario 04", title: "You want AI inside your process", desc: "You need AI to execute part of a workflow rather than simply provide a chatbot.", build: "A custom AI-powered capability connected to your HIVENOX environment." }
            ].map((scen, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-cyan-300 transition-colors group">
                <span className="text-sm font-bold text-cyan-600 mb-2 block uppercase">{scen.label}</span>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{scen.title}</h3>
                <p className="text-slate-600 mb-6 font-light">{scen.desc}</p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Build</span>
                  <span className="font-medium text-blue-900">{scen.build}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. CUSTOM SOFTWARE + AI WORKERS
          ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6">
                Your custom software can have a <span className="text-blue-700">workforce behind it.</span>
              </h2>
              <div className="space-y-4 text-lg text-slate-600 font-light mb-8">
                <p>Custom software doesn't have to stop at forms, dashboards and workflows.</p>
                <p>Because it is built on HIVENOX, your custom capability can work alongside the platform's AI workforce.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-2xl">
                <p className="font-semibold text-blue-900 mb-1">The result is software that doesn't simply record work.</p>
                <p className="text-blue-700">It can help perform it.</p>
              </div>
              <div className="mt-8">
                <a href="/book" className="text-blue-700 font-bold hover:text-cyan-600 transition-colors flex items-center gap-2">
                  See AI Workers in Action <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="bg-slate-900 p-8 sm:p-12 rounded-3xl shadow-2xl">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 text-white font-medium">
                  Custom Application
                </div>
                <ArrowDown className="text-cyan-500 animate-pulse" />
                <div className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 text-white font-medium">
                  Business Data
                </div>
                <ArrowDown className="text-cyan-500 animate-pulse" />
                <div className="w-full bg-blue-700 p-4 rounded-xl border border-blue-600 text-white font-bold shadow-lg shadow-blue-700/20">
                  Intelligent Automation
                </div>
                <ArrowDown className="text-cyan-500 animate-pulse" />
                <div className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 text-white font-medium">
                  AI Worker / Agent
                </div>
                <ArrowDown className="text-cyan-500 animate-pulse" />
                <div className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 text-cyan-300 font-bold">
                  Human Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. WHY BUSINESSES CHOOSE CUSTOM DEVELOPMENT
          ========================================================================= */}
      <section className="py-24 bg-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Build precisely where your <span className="text-cyan-300">business is different.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Exact Fit", desc: "Software follows your workflow instead of forcing your team to change it.", icon: Zap },
              { title: "Lower Complexity", desc: "Build on an existing platform rather than creating every foundational service yourself.", icon: Layers },
              { title: "Connected From Day One", desc: "Your custom capability can share the platform's data and ecosystem.", icon: Globe },
              { title: "Faster Path to Production", desc: "Start from an existing platform foundation.", icon: ArrowRight },
              { title: "Future-Ready", desc: "Extend your operating environment as new requirements emerge.", icon: Lightbulb },
              { title: "Competitive Advantage", desc: "Turn unique processes into technology your competitors can't simply buy off the shelf.", icon: Shield }
            ].map((ben, i) => (
              <div key={i} className="bg-blue-800/50 p-6 rounded-2xl border border-blue-600/50 hover:bg-blue-800 transition-colors">
                <ben.icon className="size-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{ben.title}</h3>
                <p className="text-blue-100 font-light">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. WHO IS THIS FOR?
          ========================================================================= */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6">
              For businesses whose ambition has outgrown the standard product.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Growing Businesses", desc: "You have reached the point where generic software is slowing down the way you operate." },
              { title: "Established Businesses", desc: "You have complex workflows that need to become digital and connected." },
              { title: "Enterprise Organisations", desc: "You need specialised capabilities without creating another disconnected technology stack." },
              { title: "Innovation Teams", desc: "You have a new business idea or process that needs to become a production-ready product." },
              { title: "Organisations with Legacy Systems", desc: "You need new capabilities without rebuilding your entire operating environment." }
            ].map((who, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 group hover:-translate-y-1 transition-transform">
                <Users className="size-8 text-blue-700 mb-4 group-hover:text-cyan-500 transition-colors" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{who.title}</h3>
                <p className="text-slate-600 font-light">{who.desc}</p>
              </div>
            ))}
            
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Ready to build?</h3>
              <a href="/contact" className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors">
                Contact Engineering
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          13. HIVENOX + AI SOLUTION TECHNOLOGIES
          ========================================================================= */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-8">
              Platform-led software. <span className="text-blue-700">Enterprise engineering behind it.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 font-light">
              <span className="font-semibold text-blue-900">HIVENOX</span> provides the platform foundation.<br/>
              <span className="font-semibold text-blue-900">AI Solution Technologies</span> provides the engineering depth behind custom development.
            </p>

            <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-12">
              <p className="text-cyan-400 font-bold mb-8 uppercase tracking-widest text-sm">Together, they allow businesses to move from:</p>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-lg font-medium">
                {["Business requirement", "Solution architecture", "Custom development", "Platform integration", "Production", "Continuous evolution"].map((step, i, arr) => (
                  <React.Fragment key={i}>
                    <span className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">{step}</span>
                    {i < arr.length - 1 && <ChevronRight className="text-cyan-500 hidden sm:block" />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <p className="text-2xl font-bold text-blue-700">
              One platform. One engineering partner. One connected outcome.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          14. FAQ
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: "Why shouldn't I build completely from scratch?", a: "If your requirement can benefit from the HIVENOX platform foundation, building on it means you inherit shared data, bilingual capabilities, security and the AI workforce instead of recreating those foundations yourself." },
              { q: "Will custom software be connected to my HIVENOX apps?", a: "Yes. The positioning of this service is specifically to create a custom capability on top of the platform you already run, rather than as a disconnected side project." },
              { q: "Can custom software support Arabic and English?", a: "The custom capability inherits HIVENOX's bilingual foundation from day one." },
              { q: "Can custom software use HIVENOX AI Workers?", a: "Custom capabilities inherit the platform's AI workforce, allowing them to work intelligently within the wider HIVENOX environment." },
              { q: "Is this suitable for enterprise projects?", a: "Yes. The offering is delivered by the team behind AI Solution Technologies' enterprise software and data platforms." },
              { q: "How is custom development priced?", a: "Every business has distinct needs. Pricing is determined based on consultation and scoping of your specific workflow requirements." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 group">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{faq.q}</h3>
                <p className="text-slate-600 font-light">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
             <a href="/contact" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-cyan-600 transition-colors">
               Have more questions? Contact us <ArrowRight className="size-4" />
             </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          15. FINAL CTA
          ========================================================================= */}
      <section className="py-24 lg:py-32 bg-blue-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50rem] h-[50rem] rounded-full bg-blue-600/50 blur-[100px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[40rem] h-[40rem] rounded-full bg-cyan-500/30 blur-[100px]" />
        </div>
        
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan-300">
            WHEN STANDARD STOPS SHORT
          </span>
          <h2 className="mb-6 text-4xl font-light text-white sm:text-5xl lg:text-6xl">
            When your ambition outgrows the standard product, <span className="font-bold">we'll build exactly what you need.</span>
          </h2>
          <p className="mb-12 text-xl text-blue-100 font-light">
            On the platform you already run. Connected from day one.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/book" className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-blue-700 transition-all hover:bg-cyan-50 hover:scale-105 hover:shadow-xl hover:shadow-cyan-900/20">
              Scope a Build
            </a>
            <a href="/contact" className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-full border-2 border-blue-400 bg-transparent px-10 text-lg font-bold text-white transition-all hover:border-cyan-300 hover:text-cyan-300 hover:bg-blue-800/30">
              Talk to Engineering
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}