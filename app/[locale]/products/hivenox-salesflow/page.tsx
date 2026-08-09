"use client";

import React from "react";
import { 
  Users, TrendingUp, Kanban, Workflow, BarChart3, Layers, 
  CheckCircle2, ArrowRight, Clock, Sparkles, Database, 
  Briefcase, PhoneCall, ChevronRight, Target, Shield, Zap, RefreshCw
} from "lucide-react";

export default function HivenoxSalesFlowPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-base font-bold uppercase tracking-widest text-blue-700 shadow-sm">
                <Sparkles className="size-5 text-blue-700" />
                Hivenox SalesFlow
              </div>
              
              <h1 className="mb-6 text-5xl font-light tracking-tight text-slate-900 lg:text-7xl leading-tight">
                Turn Every Lead Into <br />
                <span className="font-semibold text-blue-700">
                  Your Next Customer.
                </span>
              </h1>
              
              <p className="mb-8 max-w-2xl text-xl font-light leading-relaxed text-slate-600">
                Manage leads, automate follow-ups, track your pipeline, and close more deals from one intelligent sales workspace.
              </p>

              {/* Highlights Pill */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 w-full">
                {["Lead management", "Sales pipeline", "Automated follow-ups", "Sales analytics"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-3 rounded-2xl shadow-sm text-sm font-medium text-slate-700">
                    <CheckCircle2 className="size-4 text-blue-700 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 w-full">
                <a href="/book" className="group flex-1 sm:flex-none inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-1">
                  Book a Demo
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/contact" className="group flex-1 sm:flex-none inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50 hover:-translate-y-1">
                  Explore Products
                </a>
              </div>
            </div>
            
            {/* Hero Visual: Pipeline Dashboard Mockup */}
            <div className="relative w-full rounded-[2.5rem] bg-slate-900 p-6 shadow-2xl border border-slate-800 group">
              <div className="absolute top-4 right-6 flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-500"></span>
                <span className="size-3 rounded-full bg-amber-500"></span>
                <span className="size-3 rounded-full bg-emerald-500"></span>
              </div>
              <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-sm font-semibold text-slate-400">Sales Workspace Overview</span>
                <span className="rounded-full bg-purple-500/10 border border-purple-500/30 px-3 py-1 text-xs font-medium text-purple-300">Live Active Pipeline</span>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                    <p className="text-xs text-slate-400 mb-1">Pipeline Value</p>
                    <p className="text-xl font-bold text-white">$ 12.4M</p>
                  </div>
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                    <p className="text-xs text-slate-400 mb-1">Won Revenue</p>
                    <p className="text-xl font-bold text-emerald-400">$ 4.8M</p>
                  </div>
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                    <p className="text-xs text-slate-400 mb-1">Win Rate</p>
                    <p className="text-xl font-bold text-blue-400">24.6%</p>
                  </div>
                </div>
                <div className="h-48 rounded-2xl overflow-hidden relative border border-slate-700">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2850&auto=format&fit=crop" 
                    alt="Sales Pipeline Dashboard" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className="text-sm text-white font-medium">Active Deals Moving: 184</span>
                    <a href="/book" className="px-4 py-2 rounded-xl bg-blue-700 text-xs font-bold text-white hover:bg-blue-600 transition-colors">View Kanban</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. OVERVIEW SECTION (Blue-700 Background)
            ========================================================================= */}
        <section className="bg-blue-700 py-24 relative overflow-hidden rounded-t-[3rem]">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-base font-bold uppercase tracking-widest text-blue-100 border border-blue-500 bg-blue-800/50 px-4 py-2 rounded-full">
                Seamless Flow
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                Your Entire Sales Process. <br />
                <span className="font-semibold text-blue-200">In One Flow.</span>
              </h2>
              <p className="text-xl font-light text-blue-100 mb-8">
                SalesFlow connects everything from the first interaction with a prospect to the final closed deal.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-blue-700 transition-all duration-300 hover:bg-slate-100 hover:shadow-lg">
                  Book a Demo
                </a>
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border border-blue-400 bg-transparent px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-600">
                  Contact Sales
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Capture Leads", desc: "Bring leads from your sales channels into one workspace.", icon: Target },
                { title: "Manage Pipeline", desc: "See exactly where every opportunity stands.", icon: Kanban },
                { title: "Automate Follow-Ups", desc: "Keep prospects moving without manual reminders.", icon: Workflow },
                { title: "Close Deals", desc: "Give your sales team the tools to convert opportunities faster.", icon: TrendingUp }
              ].map((card, i) => (
                <div key={i} className="bg-blue-800/40 border border-blue-600 p-8 rounded-[2rem] backdrop-blur-sm transition-all duration-300 hover:bg-blue-800 hover:-translate-y-2 hover:shadow-2xl group">
                  <div className="size-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <card.icon className="size-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-base font-light text-blue-100 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. SALES PIPELINE SECTION
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-4 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Know Exactly What's in <span className="font-semibold text-blue-700">Your Pipeline</span>
              </h2>
              <p className="text-lg font-light text-slate-600 mb-8">
                Give every salesperson a clear view of their opportunities and next steps.
              </p>
              <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-blue-700 bg-transparent px-8 text-base font-medium text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white">
                Book a Demo
              </a>
            </div>

            {/* Kanban Board Visual */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
              {[
                { stage: "New Leads", count: "42", leads: ["Lead A", "Lead B", "Lead C"] },
                { stage: "Qualified", count: "28", leads: ["Lead D", "Lead E", "Lead F"] },
                { stage: "Proposal", count: "16", leads: ["Deal X", "Deal Y", "Deal Z"] },
                { stage: "Negotiation", count: "9", leads: ["Deal M", "Deal N", "Deal O"] },
                { stage: "Won", count: "14", leads: ["Deal Q", "Deal R", "Deal S"] }
              ].map((col, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-blue-300">
                  <div>
                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-200">
                      <span className="font-bold text-slate-900 text-base">{col.stage}</span>
                      <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-xs">{col.count}</span>
                    </div>
                    <div className="space-y-3">
                      {col.leads.map((lead, lIdx) => (
                        <div key={lIdx} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm text-sm font-medium text-slate-700 hover:border-blue-500 transition-colors">
                          {lead}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-3 text-center">
                    <a href="/contact" className="text-xs font-semibold text-blue-700 hover:underline">Manage column →</a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. LEAD MANAGEMENT SECTION (Slate Background)
            ========================================================================= */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full">
                  Lifecycle Control
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                  Capture. Qualify. <span className="font-semibold text-blue-700">Convert.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8">
                  Manage your entire lead lifecycle with advanced tracking, automated assignment, and intelligent scoring models.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Lead capture", "Lead assignment", "Lead scoring", "Contact management",
                    "Activity history", "Lead qualification", "Lead status", "Conversion tracking"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                      <CheckCircle2 className="size-5 text-blue-700 shrink-0" />
                      <span className="font-medium text-slate-700 text-base">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg">
                    Book a Demo
                  </a>
                  <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700">
                    Contact Sales
                  </a>
                </div>
              </div>

              {/* Flow Visual Card */}
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl flex flex-col items-center justify-center space-y-4">
                <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Simple Conversion Flow</p>
                {["Lead", "Qualified", "Opportunity", "Proposal", "Won"].map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="w-full bg-blue-50 border border-blue-200 py-4 px-6 rounded-2xl text-center text-lg font-semibold text-blue-900 shadow-sm transition-all hover:scale-105">
                      {step}
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="text-blue-700 font-bold text-lg">↓</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. FOLLOW-UP AUTOMATION (Dark Slate-900 Background with Purple Touch)
            ========================================================================= */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-purple-300 bg-purple-900/40 border border-purple-500/30 px-4 py-2 rounded-full">
                  Smart Automation
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">
                  Never Let a Good Lead <span className="font-semibold text-blue-400">Go Cold.</span>
                </h2>
                <p className="text-xl font-light text-slate-300 mb-8">
                  Automate repetitive sales activities so your team can focus on closing deals rather than manual tracking.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Follow-up reminders", "Email sequences", "Task creation",
                    "Lead assignment", "Meeting reminders", "Inactivity alerts"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                      <Zap className="size-5 text-purple-400 shrink-0" />
                      <span className="font-medium text-slate-200 text-base">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg">
                  Book a Demo
                </a>
              </div>

              {/* Automation Sequence Box */}
              <div className="bg-slate-800/90 border border-slate-700 p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-md">
                <p className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">Example Automation Workflow</p>
                <div className="space-y-4 text-center">
                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700 text-slate-200 font-medium">
                    Lead hasn't responded for 3 days
                  </div>
                  <div className="text-blue-400 text-xl font-bold">↓</div>
                  <div className="bg-blue-950/80 border border-blue-500/40 p-4 rounded-2xl text-blue-200 font-medium">
                    Automatic follow-up email triggered
                  </div>
                  <div className="text-blue-400 text-xl font-bold">↓</div>
                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700 text-slate-200 font-medium">
                    Sales task created in workspace
                  </div>
                  <div className="text-blue-400 text-xl font-bold">↓</div>
                  <div className="bg-purple-950/80 border border-purple-500/40 p-4 rounded-2xl text-purple-200 font-medium">
                    Salesperson notified instantly
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            6. SALES ANALYTICS SECTION
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-4 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Know What's Driving <span className="font-semibold text-blue-700">Your Revenue</span>
              </h2>
              <p className="text-lg font-light text-slate-600 mb-8">
                Deep real-time metrics and tracking to empower sales leaders and individual contributors.
              </p>
              <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-blue-700 bg-transparent px-8 text-base font-medium text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white">
                Contact Sales
              </a>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { label: "Pipeline Value", val: "$ 12.4M", icon: BarChart3 },
                { label: "Won Revenue", val: "$ 4.8M", icon: TrendingUp },
                { label: "Conversion Rate", val: "24.6%", icon: Target },
                { label: "Open Opportunities", val: "184", icon: Users }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-300">
                  <stat.icon className="size-8 text-blue-700 mb-4" />
                  <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-900">{stat.val}</p>
                </div>
              ))}
            </div>

            {/* Tracking list */}
            <div className="bg-blue-50 border border-blue-100 rounded-[2.5rem] p-8 md:p-12">
              <p className="text-lg font-bold text-blue-900 mb-6">Comprehensive Tracking Capabilities:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  "Revenue", "Pipeline value", "Conversion rate", "Win rate",
                  "Sales targets", "Salesperson performance", "Deal velocity", "Advanced reporting"
                ].map((trackItem, idx) => (
                  <div key={idx} className="bg-white border border-blue-200 p-4 rounded-2xl text-slate-700 font-medium text-sm shadow-sm flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-blue-700 shrink-0" />
                    <span>{trackItem}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            7. TEAM COLLABORATION SECTION
            ========================================================================= */}
        <section className="py-24 bg-blue-50/60">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-blue-700 bg-white border border-blue-200 px-4 py-2 rounded-full shadow-sm">
                  Shared Workspace
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                  Give Your Sales Team <span className="font-semibold text-blue-700">One Shared Workspace</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8">
                  Keep every customer interaction and sales activity completely connected to the active opportunity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Assign leads", "Add notes", "Schedule activities", "Track calls",
                    "Share deal information", "Manage tasks", "View customer history", "Instant notifications"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                      <Users className="size-5 text-blue-700 shrink-0" />
                      <span className="font-medium text-slate-700 text-base">{feat}</span>
                    </div>
                  ))}
                </div>

                <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg">
                  Book a Demo
                </a>
              </div>

              {/* Visual Graphic */}
              <div className="relative h-[25rem] rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-200 group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop" 
                  alt="Team Collaboration Workspace" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            8. CONNECTED HIVENOX ECOSYSTEM
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full">
                Unified Ecosystem
              </span>
              <h2 className="mb-4 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Sales Connected to the <span className="font-semibold text-blue-700">Rest of Your Business</span>
              </h2>
              <p className="text-lg font-light text-slate-600 mb-8">
                SalesFlow integrates seamlessly across the entire Hivenox enterprise suite.
              </p>
              <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-blue-700 bg-transparent px-8 text-base font-medium text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white">
                Contact Sales
              </a>
            </div>

            {/* Ecosystem Mapping Card */}
            <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 shadow-2xl relative">
              <div className="text-center mb-10">
                <span className="inline-block bg-blue-700 text-white font-bold px-6 py-3 rounded-2xl text-lg shadow-lg">SalesFlow Core</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {["Hivenox CRM", "Hivenox Books", "Hivenox Inventory", "Hivenox Desk"].map((prod, idx) => (
                  <div key={idx} className="bg-slate-800 border border-slate-700 p-4 rounded-2xl text-center text-slate-200 font-medium text-sm">
                    {prod}
                  </div>
                ))}
              </div>
              <div className="text-center pt-6 border-t border-slate-800">
                <span className="inline-block bg-emerald-600 text-white font-semibold px-6 py-2 rounded-xl text-sm">
                  ↓ Closed Deal Outcome
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            9. BENEFITS SECTION (Dark Slate Background)
            ========================================================================= */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-4 text-4xl sm:text-5xl font-light tracking-tight text-white">
                Build a Sales Process <span className="font-semibold text-blue-400">That Scales</span>
              </h2>
              <p className="text-lg font-light text-slate-300 mb-8">
                Drive consistent revenue growth through structured visibility and automated execution.
              </p>
              <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg">
                Book a Demo
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Close Faster", desc: "Keep opportunities moving forward." },
                { title: "Follow Up Consistently", desc: "Reduce missed sales opportunities." },
                { title: "Improve Visibility", desc: "Know exactly what your team is working on." },
                { title: "Grow Revenue", desc: "Turn more qualified opportunities into customers." }
              ].map((benefit, i) => (
                <div key={i} className="bg-slate-800/60 border border-slate-700 p-8 rounded-[2rem] backdrop-blur-md transition-all duration-300 hover:bg-slate-800 hover:border-blue-500 hover:-translate-y-2">
                  <Shield className="size-8 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-base font-light text-slate-300">{benefit.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            10. FAQ + FINAL CTA SECTION
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-4 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Frequently Asked <span className="font-semibold text-blue-700">Questions</span>
              </h2>
            </div>

            {/* FAQs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
              {[
                { q: "Can I manage leads and opportunities?", a: "Yes. SalesFlow supports the complete lead-to-deal journey." },
                { q: "Can I automate follow-ups?", a: "Yes. Create automated follow-up workflows and reminders." },
                { q: "Can managers track sales performance?", a: "Yes. Managers can monitor pipeline, revenue, conversion, and individual performance." },
                { q: "Does SalesFlow connect with CRM?", a: "Yes. SalesFlow works alongside Hivenox CRM and other Hivenox products." }
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem] shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-base font-light text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Final CTA Card */}
            <div className="max-w-5xl mx-auto rounded-[3rem] bg-blue-700 px-8 py-20 sm:px-16 text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="mb-6 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                  Turn Your Pipeline Into Revenue.
                </h2>
                <p className="mb-10 text-xl font-light text-blue-100">
                  Give your sales team a smarter way to manage leads, opportunities, and deals.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/book" className="inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-xl font-bold text-blue-700 transition-all duration-300 hover:bg-slate-100 hover:shadow-2xl hover:-translate-y-1">
                    Book a Demo
                  </a>
                  <a href="/contact" className="inline-flex h-16 items-center justify-center rounded-full border-2 border-blue-300 bg-transparent px-10 text-xl font-medium text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                    Contact Sales
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