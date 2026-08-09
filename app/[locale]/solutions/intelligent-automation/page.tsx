"use client";

import { 
  CheckCircle2, ArrowRight, Workflow, Zap, Brain, 
  Users, Database, Layers, ArrowDown, 
  FileText, Check, XCircle, RefreshCw, 
  LineChart, Cpu, Network, Shield,
  MessageSquare, LayoutGrid, Repeat, Activity, ChevronRight
} from "lucide-react";
import React from "react";

export default function IntelligentAutomationPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Animated Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] rounded-full bg-blue-700/10 blur-[80px] md:blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] rounded-full bg-blue-500/10 blur-[60px] md:blur-[100px]" />
      </div>

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-bold uppercase tracking-widest text-blue-700 shadow-sm animate-fade-in-up">
                <Layers className="size-4 text-blue-700" />
                Intelligent Automation
              </div>
              
              {/* Shortened Hero Heading */}
              <h1 className="mb-6 text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl lg:text-7xl leading-[1.1]">
                Stop leaking time <br className="hidden md:block"/>
                <span className="text-blue-700">between systems.</span>
              </h1>
              
              <p className="mb-6 max-w-2xl text-xl md:text-2xl font-medium text-slate-800">
                Work moves from one place to the next—without a human carrying it by hand.
              </p>

              <p className="mb-8 max-w-2xl text-base md:text-lg font-light leading-relaxed text-slate-600">
                A deal closes. An order ships. A new employee joins. HIVENOX automatically moves the right information to the right place, executes the next step, and logs what happened.
              </p>

              {/* Supporting Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10 w-full max-w-2xl">
                {[
                  "Work moves automatically", 
                  "Fewer manual errors", 
                  "Context-aware execution", 
                  "End-to-end visibility"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm md:text-base font-medium text-slate-700 bg-white/80 py-3 px-4 md:px-5 rounded-xl border border-slate-200/60 backdrop-blur-sm">
                    <CheckCircle2 className="size-5 text-blue-700 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 w-full">
                <a href="/book" className="group w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-base md:text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-1">
                  Book a Demo
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#how-it-works" className="group w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base md:text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50 hover:-translate-y-1">
                  See How It Works
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative w-full h-[24rem] sm:h-[30rem] lg:h-[40rem] rounded-[2rem] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-blue-700/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2850&auto=format&fit=crop" 
                alt="Automated Workflow Data Dashboard" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. THE PROBLEM
            ========================================================================= */}
        <section className="bg-blue-700 py-16 lg:py-24 relative overflow-hidden rounded-t-[2rem] md:rounded-t-[3rem]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="mb-4 inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-blue-100 border border-blue-500 bg-blue-800/50 px-4 py-2 rounded-full">
                  The Hidden Cost of Handoffs
                </span>
                <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                  Every manual handoff is a place for time and momentum to <span className="font-semibold text-blue-200">disappear.</span>
                </h2>
                <div className="space-y-4 text-base md:text-lg font-light text-blue-50 mb-8">
                  <p>A deal closes, and someone re-keys it into accounting.</p>
                  <p>An order ships, and someone updates a spreadsheet and emails three people.</p>
                  <p>Each task seems small. Together, they quietly consume entire roles.</p>
                </div>
                
                <div className="mt-8 p-6 bg-blue-800/60 border border-blue-500 rounded-2xl backdrop-blur-sm hidden sm:block">
                  <p className="text-base md:text-lg font-medium text-white italic">
                    "The problem isn't that your people aren't working hard enough. It's that they're carrying work between systems that should carry itself."
                  </p>
                </div>
              </div>

              {/* Workflow Examples Grid */}
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {[
                  { 
                    title: "Deal Closed", 
                    ideal: "CRM → Accounting → Finance",
                    manual: "CRM → Human → Spreadsheet → Accounting"
                  },
                  { 
                    title: "New Hire", 
                    ideal: "HRMS → Payroll → Operations",
                    manual: "HRMS → Human → Payroll → Human → Ops"
                  }
                ].map((flow, i) => (
                  <div key={i} className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-blue-600 backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/60 hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-5">{flow.title}</h3>
                    
                    <div className="mb-4">
                      <p className="text-[10px] md:text-xs font-bold uppercase text-emerald-400 mb-2 tracking-wider">With Intelligent Automation</p>
                      <div className="flex flex-wrap items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium text-white">
                        {flow.ideal.split(' → ').map((step, idx, arr) => (
                          <React.Fragment key={idx}>
                            <span className="bg-emerald-500/20 border border-emerald-500/30 px-2 py-1 md:px-3 md:py-1.5 rounded-lg">{step}</span>
                            {idx < arr.length - 1 && <ArrowRight className="size-3 md:size-4 text-emerald-400" />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-blue-800/50">
                      <p className="text-[10px] md:text-xs font-bold uppercase text-rose-400 mb-2 tracking-wider">Instead of (Manual)</p>
                      <div className="flex flex-wrap items-center gap-1.5 md:gap-2 text-xs md:text-sm text-slate-400">
                        {flow.manual.split(' → ').map((step, idx, arr) => (
                          <React.Fragment key={idx}>
                            <span className={`px-2 py-1 rounded-lg ${step === 'Human' ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20' : 'bg-slate-800 border border-slate-700'}`}>
                              {step}
                            </span>
                            {idx < arr.length - 1 && <ArrowRight className="size-3 text-slate-500" />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section CTA */}
            <div className="mt-12 text-center lg:text-left">
               <a href="#how-it-works" className="inline-flex items-center gap-2 text-blue-200 hover:text-white font-medium transition-colors group">
                  See how HIVENOX fixes this <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. THE HIVENOX APPROACH
            ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
              <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                Work that <span className="font-semibold text-blue-700">moves itself.</span>
              </h2>
              <p className="text-lg lg:text-xl font-light text-slate-600">
                HIVENOX connects business events to the actions that should follow them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 z-0"></div>

              {[
                { step: "01", icon: Zap, title: "Event-Driven", desc: "Automation starts when something actually happens in your business. Deal closed. Order shipped." },
                { step: "02", icon: Repeat, title: "End-to-End", desc: "The workflow doesn't stop after one action. It moves through the entire process automatically." },
                { step: "03", icon: Brain, title: "Context-Aware", desc: "The automation understands the difference between routine work and an exception needing review." },
                { step: "04", icon: Database, title: "Fully Logged", desc: "Every automated action is recorded, giving you absolute visibility into what happened and why." }
              ].map((col, i) => (
                <div key={i} className="relative z-10 flex flex-col h-full bg-slate-50 rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 group">
                  <div className="size-12 lg:size-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300">
                    <col.icon className="size-6 lg:size-8 text-blue-700" />
                  </div>
                  <div className="text-xs lg:text-sm font-bold text-blue-700 mb-2">{col.step} —</div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-3">{col.title}</h3>
                  <p className="text-sm lg:text-base font-light text-slate-600 leading-relaxed flex-1">
                    {col.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="/features" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 group">
                Explore Core Platform Features <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. HOW INTELLIGENT AUTOMATION WORKS
            ========================================================================= */}
        <section id="how-it-works" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
              <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                From business event to <span className="font-semibold text-blue-700">completed work.</span>
              </h2>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Mobile Timeline Line */}
              <div className="absolute left-[31px] top-4 bottom-4 w-1 bg-blue-100 md:hidden rounded-full"></div>
              
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 md:gap-y-16">
                {[
                  { step: "01", title: "Something Happens", desc: "A real business event triggers the workflow. (e.g., Deal closed)" },
                  { step: "02", title: "HIVENOX Understands", desc: "The platform analyzes what happened and what should occur next." },
                  { step: "03", title: "The Workflow Runs", desc: "Information moves between the required systems automatically." },
                  { step: "04", title: "Exceptions Detected", desc: "Routine work continues. Anything unusual is routed to a human." },
                  { step: "05", title: "Everything Is Logged", desc: "Every action is recorded for visibility and accountability." },
                  { step: "06", title: "Process Completes", desc: "Work reaches its final destination without manual intervention." }
                ].map((item, i) => (
                  <div key={i} className="relative pl-20 md:pl-0 md:pt-16 group">
                    <div className="hidden md:flex absolute top-0 left-0 text-7xl font-black text-slate-200 transition-colors duration-300 group-hover:text-blue-100 -z-10">{item.step}</div>
                    
                    <div className="md:hidden absolute left-0 top-0 size-16 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg shadow-sm transition-all duration-300 group-hover:border-blue-700 group-hover:scale-110">
                      {item.step}
                    </div>

                    <div className="md:border-t-4 md:border-blue-100 md:pt-6 transition-colors duration-300 group-hover:border-blue-700">
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2 md:mb-3">{item.title}</h3>
                      <p className="text-sm md:text-base font-light text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Quick Flow Summary */}
              <div className="mt-16 lg:mt-20 max-w-4xl mx-auto text-center bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap justify-center items-center gap-2 md:gap-3 text-xs md:text-sm font-bold text-blue-700">
                <span>Trigger</span> <ArrowRight className="size-3 md:size-4" />
                <span>Understand</span> <ArrowRight className="size-3 md:size-4" />
                <span>Execute</span> <ArrowRight className="size-3 md:size-4" />
                <span>Check</span> <ArrowRight className="size-3 md:size-4" />
                <span>Log</span> <ArrowRight className="size-3 md:size-4" />
                <span>Complete</span>
              </div>
            </div>

            <div className="mt-12 text-center">
               <a href="/demo" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800 transition-colors group">
                  See a live walkthrough <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. AUTOMATION EXAMPLES
            ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                Automate the work <span className="font-semibold text-blue-700">between your systems.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {[
                { 
                  title: "Sales to Finance", 
                  trigger: "When a deal closes",
                  steps: ["CRM detects the closed deal.", "Information moves to finance.", "Invoice workflow begins.", "Revenue is reported."],
                  result: "No re-keying. No forgotten handoffs."
                },
                { 
                  title: "Order to Operations", 
                  trigger: "When an order ships",
                  steps: ["Inventory updates.", "Customer gets notified.", "Finance logs transaction.", "Operations gets requirements."],
                  result: "One event moves the entire workflow."
                },
                { 
                  title: "Hire to Operations", 
                  trigger: "When a new employee joins",
                  steps: ["HRMS creates record.", "Payroll receives data.", "Operations capacity updates.", "Analytics reflect headcount."],
                  result: "One entry. Multiple connected outcomes."
                },
                { 
                  title: "Document Processing", 
                  trigger: "When a document arrives",
                  steps: ["HIVENOX reads document.", "Extracts relevant information.", "Routes to correct workflow.", "Logs the action."],
                  result: "Less manual data entry and errors."
                }
              ].map((card, i) => (
                <div key={i} className="bg-slate-50 rounded-[2rem] p-6 lg:p-10 border border-slate-200 shadow-sm flex flex-col h-full transition-all duration-300 hover:border-blue-700 hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-6 lg:mb-8">
                    <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-3">{card.title}</h3>
                    <div className="inline-flex items-center gap-2 text-xs lg:text-sm font-bold text-white bg-blue-600 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg w-fit">
                      <Zap className="size-3 lg:size-4" /> {card.trigger}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 lg:space-y-4 text-sm lg:text-base font-medium text-slate-700 mb-8 lg:mb-10 flex-1">
                    {card.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {idx === 0 ? (
                          <div className="size-5 lg:size-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="size-3 text-slate-600" />
                          </div>
                        ) : (
                          <ArrowRight className="size-4 lg:size-5 text-blue-500 shrink-0 mt-0.5" />
                        )}
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-5 lg:pt-6 border-t border-slate-200">
                    <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Result</p>
                    <p className="text-sm lg:text-lg font-medium text-blue-800 bg-blue-100/50 p-3 lg:p-4 rounded-xl border border-blue-100">
                      {card.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="/solutions" className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 group">
                Find Your Specific Use Case <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. INTELLIGENT VS MECHANICAL AUTOMATION
            ========================================================================= */}
        <section className="py-16 lg:py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700/20 rounded-full blur-[100px]"></div>
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
                Not every automation should behave like a robot.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              
              {/* Mechanical */}
              <div className="bg-slate-800/80 rounded-[2rem] p-8 lg:p-10 border border-slate-700">
                <h3 className="text-xl lg:text-2xl font-semibold text-slate-300 mb-4 border-b border-slate-700 pb-4 lg:pb-6">Mechanical Automation</h3>
                <div className="mb-6 lg:mb-8 p-4 bg-slate-900 rounded-xl font-mono text-xs lg:text-sm text-slate-400">
                  If X → Do Y
                </div>
                <p className="text-base lg:text-lg text-slate-300 mb-4">Works fine when everything is perfectly predictable.</p>
                <p className="text-base lg:text-lg text-rose-400 font-medium flex items-center gap-2">
                  <XCircle className="size-5 shrink-0" /> But when something changes, it breaks.
                </p>
              </div>

              {/* Intelligent */}
              <div className="bg-blue-700 rounded-[2rem] p-8 lg:p-10 border border-blue-500 shadow-2xl shadow-blue-900/50 transform md:-translate-y-4 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 size-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 border-b border-blue-500 pb-4 lg:pb-6 relative z-10">Intelligent Automation</h3>
                <div className="mb-6 lg:mb-8 p-4 bg-blue-900/50 rounded-xl font-mono text-xs lg:text-sm text-blue-200 border border-blue-500/50 relative z-10">
                  If X → Understand context → Decide → Act
                </div>
                <ul className="space-y-3 lg:space-y-4 text-blue-100 text-sm lg:text-base relative z-10">
                  {[
                    "Recognises routine vs exception",
                    "Extracts unformatted information",
                    "Adapts as processes change",
                    "Escalates to humans when needed"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 text-white shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 lg:mt-16 text-center flex flex-col items-center gap-6">
              <p className="inline-block text-lg lg:text-xl font-semibold text-white bg-blue-600/30 border border-blue-500/30 px-6 lg:px-8 py-3 lg:py-4 rounded-full backdrop-blur-sm">
                Context-aware, not brittle.
              </p>
              <a href="/ai" className="inline-flex items-center gap-2 font-medium text-blue-300 hover:text-white transition-colors group">
                Discover the AI powering this <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. HUMAN + AUTOMATION
            ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
              <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                Automation handles the routine. <br className="hidden sm:block"/>
                <span className="font-semibold text-blue-700">People handle what matters.</span>
              </h2>
              <p className="text-base lg:text-xl font-light text-slate-600 max-w-3xl mx-auto">
                Intelligent Automation isn't about removing people. It's about removing people from tasks that never required a human mind in the first place.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto bg-slate-50 rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-16 border border-slate-200 shadow-sm">
              
              {/* Automation Handles */}
              <div>
                <div className="flex items-center gap-4 mb-6 lg:mb-8">
                  <div className="size-10 lg:size-12 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                    <Cpu className="size-5 lg:size-6 text-slate-700" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900">Automation handles</h3>
                </div>
                <ul className="space-y-3 lg:space-y-4 text-slate-600 font-medium text-sm lg:text-lg">
                  {[
                    "Data movement", "Re-keying", "Notifications", 
                    "Document extraction", "Routine approvals", 
                    "System updates"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="size-4 lg:size-5 text-slate-400 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Your Team Handles */}
              <div>
                <div className="flex items-center gap-4 mb-6 lg:mb-8">
                  <div className="size-10 lg:size-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Users className="size-5 lg:size-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-blue-900">Your team handles</h3>
                </div>
                <ul className="space-y-3 lg:space-y-4 text-blue-900 font-medium text-sm lg:text-lg">
                  {[
                    "Exceptions", "Judgement", "Relationships", 
                    "Strategy", "Complex decisions", "Customer situations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="size-4 lg:size-5 text-blue-600 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
            
            <div className="mt-12 text-center flex flex-col items-center gap-6">
              <p className="text-base lg:text-lg font-medium text-slate-500 italic max-w-2xl">
                "Let technology carry the work. Let people carry the responsibility."
              </p>
              <a href="/about" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 group">
                Learn About Our Philosophy <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. CONNECTED BUSINESS AUTOMATION
            ========================================================================= */}
        <section className="py-16 lg:py-24 bg-blue-50 border-b border-slate-200 overflow-hidden">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
              One event can move your <span className="font-semibold text-blue-700">entire business.</span>
            </h2>
            <p className="text-base lg:text-xl font-light text-slate-600 max-w-2xl mx-auto mb-12 lg:mb-16">
              Because HIVENOX applications share the same platform, automation doesn't have to stitch together isolated systems.
            </p>

            <div className="max-w-2xl mx-auto flex flex-col items-center relative">
              <div className="absolute top-0 bottom-0 w-1 bg-blue-200 z-0"></div>

              {[
                { app: "CRM", action: "Deal closes" },
                { app: "Intelligent Automation", action: "Understands event", highlight: true },
                { app: "SalesFlow", action: "Moves deal to next stage" },
                { app: "Books", action: "Creates financial workflow" },
                { app: "Analytics", action: "Updates business visibility" }
              ].map((node, i) => (
                <div key={i} className={`relative z-10 flex flex-col items-center justify-center w-[85%] sm:w-64 p-4 lg:p-5 rounded-2xl border-2 mb-6 lg:mb-8 shadow-sm transition-transform hover:scale-105 ${node.highlight ? 'bg-blue-700 border-blue-700 text-white shadow-xl shadow-blue-500/30' : 'bg-white border-slate-200 text-slate-800'}`}>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${node.highlight ? 'text-blue-200' : 'text-slate-400'}`}>{node.app}</p>
                  <p className={`text-base lg:text-lg font-semibold ${node.highlight ? 'text-white' : 'text-slate-900'}`}>{node.action}</p>
                  {i !== 4 && <ArrowDown className={`absolute -bottom-6 lg:-bottom-8 size-5 lg:size-6 ${node.highlight ? 'text-blue-500' : 'text-blue-300'}`} />}
                </div>
              ))}
            </div>

            <div className="mt-8">
               <a href="/integrations" className="inline-flex items-center gap-2 font-medium text-blue-700 hover:text-blue-800 transition-colors group">
                  See the connected ecosystem <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. WHERE AUTOMATION CREATES IMPACT
            ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
              <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                Start where your people spend the most time <span className="font-semibold text-blue-700">chasing.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { title: "Sales", icon: LineChart, desc: "Lead routing, follow-ups, deal progression and handoffs." },
                { title: "Finance", icon: Database, desc: "Invoices, reconciliation, approvals and financial workflows." },
                { title: "Operations", icon: Activity, desc: "Orders, projects, tasks and internal coordination." },
                { title: "HR", icon: Users, desc: "Employee onboarding, payroll workflows, and workforce updates." },
                { title: "Customer Support", icon: MessageSquare, desc: "Ticket routing, notifications, and customer context." },
                { title: "Documents", icon: FileText, desc: "Extract information and route it to the correct process." }
              ].map((area, i) => (
                <div key={i} className="group bg-slate-50 p-6 lg:p-10 rounded-[2rem] border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-700 hover:bg-white hover:-translate-y-1">
                  <div className="size-12 lg:size-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                    <area.icon className="size-6 lg:size-8 text-slate-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-3">{area.title}</h3>
                  <p className="text-sm lg:text-base font-light text-slate-600 leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="/solutions" className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 group">
                Explore Solutions by Department <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. BUSINESS OUTCOMES
            ========================================================================= */}
        <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/10"></div>
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
                Less friction. Fewer errors. <br className="hidden sm:block"/>
                <span className="font-semibold text-blue-400">More capacity.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { title: "Less Manual Work", desc: "Remove repetitive data entry and system handoffs." },
                { title: "Fewer Errors", desc: "Reduce mistakes caused by re-keying and manual syncing." },
                { title: "Faster Execution", desc: "Work begins immediately when the trigger occurs." },
                { title: "No Dropped Balls", desc: "Automated workflows don't forget the next step." },
                { title: "Full Visibility", desc: "Every automated action is logged and auditable." },
                { title: "More Capacity", desc: "Give people their time back for higher-value work." }
              ].map((outcome, i) => (
                <div key={i} className="bg-slate-800/40 border border-slate-700/50 p-6 lg:p-8 rounded-[2rem] backdrop-blur-md transition-all duration-300 hover:bg-slate-800 hover:border-blue-500">
                  <CheckCircle2 className="size-8 lg:size-10 text-blue-400 mb-5 lg:mb-6" />
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2 lg:mb-3">{outcome.title}</h3>
                  <p className="text-sm lg:text-base font-light text-slate-300 leading-relaxed">{outcome.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="/pricing" className="inline-flex items-center gap-2 font-medium text-blue-300 hover:text-white transition-colors group">
                Calculate your potential ROI <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            11. INTELLIGENT AUTOMATION + AI
            ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Automation gets smarter with <span className="font-semibold text-blue-700">AI in the workflow.</span>
                </h2>
                <p className="text-base lg:text-xl font-light text-slate-600 mb-8">
                  Traditional automation follows predefined rules. HIVENOX combines automation with AI capabilities that can read unstructured documents, interpret context, and support decisions.
                </p>
                <div className="p-5 lg:p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                  <p className="text-base lg:text-lg font-semibold text-blue-900 mb-1">Automation moves the work.</p>
                  <p className="text-base lg:text-lg font-semibold text-blue-700">AI helps understand the work.</p>
                </div>
                
                <div className="mt-8 hidden lg:block">
                  <a href="/ai" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 group">
                    Explore Hivenox AI <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                {[
                  { title: "Business Event", desc: "Something happens in your business.", icon: Zap },
                  { title: "Intelligent Automation", desc: "Determines what should happen next.", icon: Workflow },
                  { title: "AI", desc: "Understands information and context.", icon: Brain }
                ].map((layer, i) => (
                  <div key={i} className="relative p-5 lg:p-8 bg-white border border-slate-200 shadow-sm rounded-2xl flex items-start gap-4 lg:gap-6 hover:border-blue-300 transition-colors">
                    <div className="size-10 lg:size-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      <layer.icon className="size-5 lg:size-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-1 lg:mb-2">{layer.title}</h3>
                      <p className="text-sm lg:text-base text-slate-600">{layer.desc}</p>
                    </div>
                    {i !== 2 && (
                      <ArrowDown className="absolute -bottom-4 lg:-bottom-5 left-[2.75rem] lg:left-[3.25rem] size-4 lg:size-5 text-slate-300 z-10 bg-white" />
                    )}
                  </div>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-4 lg:hidden text-center">
                  <a href="/ai" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 w-full group">
                    Explore Hivenox AI <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            12. BUILT FOR A CONNECTED BUSINESS
            ========================================================================= */}
        <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
              The more you connect, <br className="hidden sm:block"/>
              the more <span className="font-semibold text-blue-700">valuable automation becomes.</span>
            </h2>
            <p className="text-base lg:text-xl font-light text-slate-600 max-w-3xl mx-auto mb-10 lg:mb-16">
              Intelligent Automation works seamlessly across the HIVENOX ecosystem rather than operating as another isolated tool.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 max-w-6xl mx-auto mb-10 lg:mb-12">
              {[
                { name: "CRM", label: "Customers & deals" },
                { name: "HRMS", label: "People & workforce" },
                { name: "Books", label: "Finance & invoices" },
                { name: "SalesFlow", label: "Quotes & revenue" },
                { name: "Desk", label: "Customer support" },
                { name: "Ops", label: "Projects & execution" },
                { name: "Inventory", label: "Orders & stock" },
                { name: "Analytics", label: "Data reporting" }
              ].map((app, i) => (
                <div key={i} className="bg-white p-3 lg:p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:border-blue-500 hover:shadow-md transition-all">
                  <LayoutGrid className="size-5 lg:size-6 text-slate-400 mb-2 lg:mb-3" />
                  <p className="text-xs lg:text-sm font-bold text-slate-900 mb-1">{app.name}</p>
                  <p className="text-[10px] lg:text-xs text-slate-500 leading-tight">{app.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <p className="text-sm md:text-base lg:text-lg font-medium text-blue-800 bg-blue-100/50 inline-block px-6 lg:px-8 py-3 rounded-full border border-blue-200">
                One platform. One shared data foundation.
              </p>
              <a href="/platform" className="inline-flex items-center gap-2 font-medium text-blue-700 hover:text-blue-800 transition-colors group">
                View full platform ecosystem <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            13. WHY HIVENOX INTELLIGENT AUTOMATION?
            ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900">
                Automation without another layer of <span className="font-semibold text-blue-700">complexity.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {[
                { title: "Connected by Design", icon: Network, desc: "Operates seamlessly across applications sharing the same platform." },
                { title: "Context-Aware", icon: Brain, desc: "Workflows deeply understand routine actions versus exceptions." },
                { title: "Adaptable", icon: RefreshCw, desc: "Processes can evolve without the entire automation sequence breaking." },
                { title: "Transparent", icon: Shield, desc: "Every action is logged and tracked for complete audit visibility." }
              ].map((diff, i) => (
                <div key={i} className="flex gap-4 lg:gap-6 p-6 lg:p-8 bg-slate-50 rounded-2xl lg:rounded-3xl border border-slate-200">
                  <diff.icon className="size-6 lg:size-8 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-1 lg:mb-2">{diff.title}</h3>
                    <p className="text-sm lg:text-base text-slate-600">{diff.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="/why-us" className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 group">
                Why Choose Hivenox <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            14. FAQ
            ========================================================================= */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 lg:mb-12 text-3xl sm:text-4xl font-light tracking-tight text-slate-900 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 lg:space-y-6">
              {[
                { q: "What can HIVENOX automate?", a: "Business processes involving data movement, notifications, document processing, approvals, reconciliation and system-to-system handoffs." },
                { q: "Does automation replace our employees?", a: "No. The goal is to remove repetitive manual work and allow people to focus on judgement, strategy, and relationships." },
                { q: "What happens when something unusual occurs?", a: "Context-aware workflows identify exceptions and intelligently route them to a human rather than blindly breaking or continuing." },
                { q: "Can HIVENOX read documents?", a: "Yes. Automation can extract relevant information from unformatted documents and route it correctly using integrated AI." },
                { q: "Can we see what the automation did?", a: "Yes. All automated actions are completely logged so you have a trail of what happened and why." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-base lg:text-lg font-semibold text-slate-900 mb-2 lg:mb-3">{faq.q}</h3>
                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-slate-500 mb-4">Still have questions?</p>
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-white border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-400">
                Contact our support team
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            15. FINAL CTA
            ========================================================================= */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-blue-700 px-6 py-16 sm:px-16 sm:py-24 lg:py-32 text-center shadow-2xl group">
              
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[30rem] lg:h-[40rem] w-[30rem] lg:w-[40rem] rounded-full bg-blue-600 blur-[80px] lg:blur-[100px] opacity-50 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[30rem] lg:h-[40rem] w-[30rem] lg:w-[40rem] rounded-full bg-blue-800 blur-[100px] lg:blur-[120px] opacity-50 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              
              <div className="relative z-10 mx-auto max-w-4xl">
                <span className="mb-6 inline-block text-xs lg:text-sm font-bold uppercase tracking-widest text-blue-100 bg-blue-900/50 px-5 lg:px-6 py-2 rounded-full border border-blue-500/30">
                  STOP CARRYING WORK
                </span>
                <h2 className="mb-6 lg:mb-8 text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                  Stop carrying work between systems by hand.
                </h2>
                <p className="mb-10 lg:mb-12 text-lg lg:text-xl font-light leading-relaxed text-blue-100 max-w-3xl mx-auto">
                  Let it move itself — instantly, accurately, and securely logged.
                </p>
                
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:gap-6 mb-4 w-full">
                  <a href="/book" className="group w-full sm:w-auto inline-flex h-14 lg:h-16 items-center justify-center rounded-full bg-white px-8 lg:px-10 text-base lg:text-xl font-bold text-blue-700 transition-all duration-300 hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-1">
                    Book a Demo
                    <ArrowRight className="ml-3 size-5 lg:size-6 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="/trial" className="group w-full sm:w-auto inline-flex h-14 lg:h-16 items-center justify-center rounded-full border-2 border-blue-300 bg-transparent px-8 lg:px-10 text-base lg:text-xl font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-1">
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}