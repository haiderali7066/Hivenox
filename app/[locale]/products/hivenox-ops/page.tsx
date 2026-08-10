"use client";

import React from "react";
import { 
  CheckCircle2, ArrowRight, Users, Clock, Box, FileText, 
  Activity, GitMerge, AlertTriangle, Shield, Check, 
  MapPin, Settings, LayoutDashboard, BrainCircuit, Globe
} from "lucide-react";

export default function HivenoxOpsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Decorative Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-700/5 blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION (Light Theme with Geo-SEO)
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-32 pb-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start text-left">
              
              {/* Purple Accent Eyebrow */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-5 py-2 text-sm font-bold uppercase tracking-widest text-purple-700 shadow-sm animate-fade-in-up">
                <Box className="size-4 text-purple-700" />
                PRODUCTS · PROJECTS WITH CLARITY
              </div>
              
              <h1 className="mb-6 text-5xl font-light tracking-tight text-slate-900 lg:text-7xl leading-tight">
                Where projects and operations finally <span className="font-semibold text-blue-700">get their act together.</span>
              </h1>
              
              <p className="mb-8 max-w-2xl text-xl font-light leading-relaxed text-slate-600">
                Tasks, timelines, teams and deliverables in one clear view — so everyone knows what they own, what’s next, and what’s at risk. Hivenox Ops connects projects and operations with the rest of your business.
              </p>

              {/* Geo/SEO Element */}
              <div className="flex items-center gap-3 mb-10 text-sm font-medium text-slate-500 bg-white py-3 px-5 rounded-2xl border border-slate-200 shadow-sm w-full max-w-2xl">
                 <MapPin className="size-5 text-blue-700 shrink-0" />
                 <span>Powering enterprise operations and project delivery globally—from Australia and the UAE to Saudi Arabia and our technical operations hub in Lahore, Pakistan.</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10 w-full">
                <a href="/book" className="group inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-1">
                  Book a Demo
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/contact" className="group inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50 hover:-translate-y-1">
                  Start Free
                </a>
              </div>

              {/* Trust Points */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-700">
                {["Projects & tasks", "Resource planning", "Procurement & delivery", "Live costs & inventory", "AI-powered"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-blue-700" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative w-full h-[35rem] lg:h-[45rem] rounded-[2rem] overflow-hidden shadow-2xl group border-8 border-white">
              <div className="absolute inset-0 bg-blue-700/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2850&auto=format&fit=crop" 
                alt="Team collaborating on project management dashboard" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. THE PROBLEM (Blue-700 Background)
            ========================================================================= */}
        <section className="bg-blue-700 py-24 relative overflow-hidden rounded-[3rem] mx-2 sm:mx-6 lg:mx-8 shadow-xl">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
          
          <div className="mx-auto max-w-[85rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-5 text-white">
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight leading-tight">
                  Projects shouldn't depend on <span className="font-semibold text-blue-200">spreadsheets, memory and heroics.</span>
                </h2>
                <div className="space-y-4 text-lg font-light text-blue-100 mb-10">
                  <p>A project starts with a plan. Then the spreadsheets multiply. Tasks move. People become unavailable. Stock changes. Costs increase. A deadline gets closer.</p>
                  <p className="font-medium text-white border-l-4 border-purple-400 pl-4 py-2">
                    And suddenly nobody has one clear view of what's actually happening.
                  </p>
                  <p className="pt-4 text-blue-200">
                    The problem isn't that your people aren't working hard enough. It's that coordination is carrying too much of the load.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a href="/book" className="group inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-blue-700 transition-all duration-300 hover:bg-slate-100 hover:shadow-lg hover:-translate-y-1">
                    See a Better Way
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Problem Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Scattered Work", desc: "Tasks and timelines live across spreadsheets, messages and separate tools.", icon: FileText },
                  { title: "Missed Handoffs", desc: "Information gets lost between people, teams and departments.", icon: GitMerge },
                  { title: "Unknown Capacity", desc: "Plans don't always reflect who is actually available.", icon: Users },
                  { title: "Hidden Risks", desc: "Bottlenecks become visible only after they've already affected delivery.", icon: AlertTriangle }
                ].map((pain, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl group">
                    <pain.icon className="size-8 text-purple-300 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-white mb-3">{pain.title}</h3>
                    <p className="text-base font-light text-blue-100">{pain.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. ONE CLEAR PROJECT VIEW (White Theme & Dashboard Mockup)
            ========================================================================= */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Everyone knows what they own, <span className="font-semibold text-blue-700">what's next and what's at risk.</span>
              </h2>
              <p className="text-xl font-light text-slate-600 mb-8">
                Hivenox Ops puts the moving parts of a project into one clear view. Kickoff to completion without the usual fog.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">
                  Explore Dashboard
                </a>
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Dashboard Mockup UI */}
            <div className="max-w-6xl mx-auto bg-slate-50 border border-slate-200 rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 shadow-2xl relative overflow-hidden group">
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-6 mb-6">
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Project</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Website Transformation</h3>
                </div>
                <div className="mt-4 md:mt-0 flex gap-3">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm border border-green-200">
                    <span className="size-2 rounded-full bg-green-600 animate-pulse"></span>
                    On Track
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
                {[
                  { label: "Timeline", value: "12 Jun → 30 Jul" },
                  { label: "Team", value: "8 members" },
                  { label: "Tasks", value: "42 / 58 complete" },
                  { label: "At Risk", value: "3 tasks", alert: true },
                  { label: "Budget", value: "72% used" },
                ].map((stat, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${stat.alert ? 'bg-red-50 border-red-200 text-red-900' : 'bg-white border-slate-200 text-slate-800'} shadow-sm`}>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${stat.alert ? 'text-red-500' : 'text-slate-400'}`}>{stat.label}</p>
                    <p className="text-lg font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { icon: Users, title: "Tasks", desc: "Who owns what?" },
                  { icon: Clock, title: "Timelines", desc: "What's happening next?" },
                  { icon: Shield, title: "Teams", desc: "Who is available?" },
                  { icon: Box, title: "Deliverables", desc: "What's due?" },
                  { icon: AlertTriangle, title: "Risks", desc: "What needs attention?" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-blue-500 hover:shadow-lg group/card">
                    <item.icon className="size-8 text-blue-600 mb-4 group-hover/card:scale-110 transition-transform" />
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. PROCUREMENT TO DELIVERY (Slate-50 with Images)
            ========================================================================= */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                  One visible flow from <span className="font-semibold text-blue-700">request to fulfilment.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8">
                  Operations shouldn't be a collection of disconnected steps. Hivenox Ops connects the operational journey from procurement through projects and delivery.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    { title: "Procurement", desc: "Move from request to receipt with visibility across the process." },
                    { title: "Projects", desc: "Move work from kickoff to completion with tasks, timelines and ownership." },
                    { title: "Delivery", desc: "Connect the work to the actual fulfilment of the customer outcome." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-5 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:border-blue-700 hover:shadow-md transition-all">
                      <div className="size-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                        <p className="text-base text-slate-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-5 py-2.5 rounded-full font-bold text-sm mb-8">
                  <GitMerge className="size-5" /> Procure to deliver, connected.
                </div>

                <div className="flex gap-4">
                  <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">Book a Demo</a>
                  <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-300 bg-transparent px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">Contact Sales</a>
                </div>
              </div>

              <div className="relative w-full h-[40rem] rounded-[2rem] overflow-hidden shadow-2xl group border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Logistics and supply chain flow" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]"
                />
                
                {/* Floating overlay card */}
                <div className="absolute bottom-10 right-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] border border-slate-200 shadow-xl">
                  <div className="flex items-center justify-between text-sm font-bold text-slate-500 mb-4">
                    <span>Request</span> <ArrowRight className="size-4" />
                    <span>Purchase</span> <ArrowRight className="size-4" />
                    <span>Fulfilment</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-blue-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. LIVE BUSINESS CONTEXT (Dark Theme with Purple accents)
            ========================================================================= */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight leading-tight">
                Your operations plan should reflect reality — <span className="font-semibold text-blue-400">not yesterday's data.</span>
              </h2>
              <p className="text-xl font-light text-slate-300 mb-8">
                Because Hivenox Ops is part of the wider HIVENOX platform, operational planning doesn't happen in isolation.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-medium text-white transition-all hover:bg-blue-500 hover:-translate-y-1 shadow-lg">
                  See Connected Data Live
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { title: "Finance", desc: "Live project costs", icon: Activity, detail: "Budget directly updates based on real invoices." },
                { title: "HRMS", desc: "Actual resource availability", icon: Users, detail: "See who is on leave before assigning tasks." },
                { title: "Inventory", desc: "Live stock & deliverables", icon: Box, detail: "Know instantly if materials are delayed." }
              ].map((card, i) => (
                <div key={i} className="bg-slate-800/60 p-8 rounded-[2rem] border border-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-purple-500 hover:-translate-y-2 group">
                  <div className="size-14 rounded-full bg-slate-700/50 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                    <card.icon className="size-7 text-purple-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-blue-300 font-medium mb-4">{card.desc}</p>
                  <p className="text-slate-400 text-sm">{card.detail}</p>
                </div>
              ))}
            </div>

            {/* Example Workflow Box */}
            <div className="max-w-4xl mx-auto bg-blue-800/30 border border-blue-600/50 p-8 rounded-[2rem] backdrop-blur-md text-center">
              <p className="text-purple-300 font-bold uppercase tracking-widest text-sm mb-4">Real-world Example</p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-lg font-medium text-blue-100">
                <span className="bg-blue-900/50 px-4 py-2 rounded-xl">Project needs 3 people</span>
                <ArrowRight className="size-5 text-blue-400" />
                <span className="bg-blue-900/50 px-4 py-2 rounded-xl">HRMS shows 2 available</span>
                <ArrowRight className="size-5 text-blue-400" />
                <span className="bg-purple-900/50 border border-purple-500/30 px-4 py-2 rounded-xl text-white">Risk becomes visible</span>
              </div>
              <p className="mt-6 text-xl text-white font-semibold">Live, not stale.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. NOTHING SLIPS (Blue-50 Theme)
            ========================================================================= */}
        <section className="py-24 bg-blue-50">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div className="order-2 lg:order-1 relative p-8 bg-white rounded-[3rem] border border-blue-100 shadow-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-8 px-4 text-center">Typical Risk Workflow</h3>
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-10 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-blue-100">
                  {[
                    "Task falls behind",
                    "Timeline impact detected",
                    "Workload becomes visible",
                    "Risk surfaced",
                    "Team responds"
                  ].map((step, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-blue-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <Check className="size-4" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm transition-all hover:border-blue-500 hover:bg-white hover:scale-105">
                        <p className="font-semibold text-slate-800">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                  Surface bottlenecks before <span className="font-semibold text-blue-700">they become crises.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8">
                  Hivenox Ops gives teams visibility into tasks, timelines and workloads so problems can be identified while there is still time to act.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {["Overloaded team member", "Delayed dependency", "Missing inventory", "Budget pressure", "Upcoming deadline"].map((risk, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200">
                      <AlertTriangle className="size-5 text-red-500 shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">{risk}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8 p-6 bg-blue-100 rounded-2xl border border-blue-200 text-blue-900 font-medium text-lg">
                  Instead of discovering the problem at the deadline, your team sees it while it can still be solved. <br/><br/>
                  <span className="font-bold text-2xl">Nothing slips.</span>
                </div>

                <div className="flex gap-4">
                  <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">Book a Demo</a>
                  <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-300 bg-transparent px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">Contact Us</a>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. AI WORKFORCE + OPS (White Theme)
            ========================================================================= */}
        <section className="py-24 bg-white border-y border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-5 py-2 text-sm font-bold uppercase tracking-widest text-purple-700 shadow-sm">
                  <BrainCircuit className="size-4 text-purple-700" />
                  AI-POWERED OPERATIONS
                </div>
                
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                  Let the platform carry <span className="font-semibold text-blue-700">the coordination.</span>
                </h2>
                
                <p className="text-xl font-light text-slate-600 mb-8">
                  Hivenox Ops doesn't leave managers to monitor every moving part manually. The AI workforce can help flag risks and keep stakeholders informed, allowing people to focus on decisions rather than constant coordination.
                </p>

                <ul className="space-y-6 mb-10">
                  {[
                    { label: "Project risk", action: "Flag the risk instantly" },
                    { label: "Important change", action: "Keep stakeholders informed" },
                    { label: "Operational bottleneck", action: "Surface the issue early" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-lg">
                      <span className="font-semibold text-slate-800">{item.label}</span>
                      <ArrowRight className="size-5 text-blue-500" />
                      <span className="text-blue-700 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">{item.action}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-lg font-medium text-slate-900 mb-10 border-l-4 border-purple-500 pl-4">
                  Coordination carried by the platform, not by a manager's full-time effort.
                </p>

                <div className="flex gap-4">
                  <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1 shadow-lg">Book a Demo</a>
                  <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">Talk to Sales</a>
                </div>
              </div>
              
              <div className="relative w-full h-[35rem] rounded-[3rem] overflow-hidden shadow-2xl group border-[10px] border-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="AI and Data Visualisation" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-10">
                  <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 text-white w-full">
                    <p className="font-bold text-lg mb-2 flex items-center gap-2">
                      <BrainCircuit className="size-5 text-purple-300" /> AI Agent Activity
                    </p>
                    <p className="text-sm font-light">"I detected a schedule conflict with the Lead Developer. I have flagged the timeline risk and notified the project manager."</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            8. WHY HIVENOX OPS? (Blue-700 Theme Grid)
            ========================================================================= */}
        <section className="py-24 bg-blue-700 text-white relative">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight">
                Turn coordination from a burden <span className="font-semibold text-blue-200">into a system.</span>
              </h2>
              <div className="flex justify-center gap-4 mt-8">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-blue-700 transition-all hover:bg-slate-100 hover:-translate-y-1 shadow-lg">
                  Book a Demo Today
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { title: "Projects With Clarity", desc: "Tasks, timelines, teams and deliverables in one clear view.", icon: LayoutDashboard },
                { title: "No More Fog", desc: "Kickoff to completion without scattered spreadsheets or missed handoffs.", icon: Settings },
                { title: "Connected Execution", desc: "Live costs from Finance, capacity from HR and deliverables from Inventory.", icon: Activity },
                { title: "Ship on Time", desc: "Coordination is carried by the platform instead of relying on heroics.", icon: Clock }
              ].map((benefit, i) => (
                <div key={i} className="bg-blue-800/50 p-8 rounded-[2rem] border border-blue-500 backdrop-blur-sm transition-all duration-300 hover:bg-blue-800 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="size-14 rounded-full bg-blue-600/50 flex items-center justify-center mb-6">
                    <benefit.icon className="size-7 text-blue-100" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-blue-100 text-lg font-light leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-2xl font-semibold text-white">
                Deliver reliably, <span className="text-purple-300">even as volume grows.</span>
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. FINAL CTA (White Theme with Big Blue Card)
            ========================================================================= */}
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[3rem] bg-blue-700 px-8 py-24 sm:px-16 sm:py-32 text-center shadow-2xl group">
              
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[40rem] w-[40rem] rounded-full bg-blue-600 blur-[100px] opacity-60 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[40rem] w-[40rem] rounded-full bg-purple-600 blur-[120px] opacity-30 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              
              <div className="relative z-10 mx-auto max-w-4xl">
                <span className="mb-6 inline-block text-sm font-bold uppercase tracking-widest text-blue-100 bg-blue-900/50 px-6 py-2 rounded-full border border-blue-500/30">
                  PROJECTS & OPERATIONS, CONNECTED
                </span>
                
                <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                  Turn coordination from a burden into a system.
                </h2>
                
                <p className="mb-12 text-xl font-light leading-relaxed text-blue-100 max-w-3xl mx-auto">
                  Tasks, timelines, teams, costs, capacity and deliverables — connected in one operational view. Deliver reliably, even as volume grows.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 mb-8 w-full">
                  <a href="/book" className="group flex-1 sm:flex-none inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-xl font-bold text-blue-700 transition-all duration-300 hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-1">
                    Book a Demo
                    <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="/contact" className="group flex-1 sm:flex-none inline-flex h-16 items-center justify-center rounded-full border-2 border-blue-300 bg-transparent px-10 text-xl font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-1">
                    Start Free
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2 mt-8 text-sm font-medium text-blue-200">
                  <Globe className="size-4" /> Available globally. Trusted locally.
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}