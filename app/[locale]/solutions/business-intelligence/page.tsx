"use client";

import React from "react";
import {
  Sparkles,
  ArrowRight,
  Database,
  BarChart3,
  Globe,
  Zap,
  TrendingUp,
  Bot,
  Layers,
  Shield,
  ArrowDown,
  Users,
  DollarSign,
  Boxes,
  Megaphone,
  HelpCircle,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  Clock,
  MessageSquareQuoteIcon,
  Activity,
  Workflow,
  PieChart,
  LineChart,
  Briefcase
} from "lucide-react";

export default function BusinessIntelligencePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Animated Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              
              {/* Eyebrow */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-base font-bold uppercase tracking-widest text-blue-700 shadow-sm">
                <Sparkles className="size-5 text-blue-700" />
                PRODUCTS · SOLUTIONS
              </div>
              
              {/* Headline */}
              <h1 className="mb-6 text-5xl font-light tracking-tight text-slate-900 lg:text-7xl leading-tight">
                You don’t have a data problem. <br />
                <span className="font-semibold text-blue-700">
                  You have a clarity problem.
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="mb-6 max-w-2xl text-2xl font-normal leading-relaxed text-slate-900">
                Because every product in HIVENOX shares one database, your dashboards are built on a single, live, trustworthy source of truth.
              </p>

              {/* Supporting Text */}
              <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-slate-600">
                Revenue, cash, pipeline, headcount, inventory and campaign performance — see what is happening across your business right now, without exporting spreadsheets or reconciling conflicting numbers.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12 w-full">
                <a href="/book" className="group flex-1 sm:flex-none inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-1">
                  Book a Demo
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/contact" className="group flex-1 sm:flex-none inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50 hover:-translate-y-1">
                  Explore the Platform
                </a>
              </div>

              {/* Trust Points */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-200/80">
                {[
                  { icon: Database, label: "One shared database" },
                  { icon: Activity, label: "Live dashboards" },
                  { icon: Globe, label: "Arabic + English" },
                  { icon: Zap, label: "Real-time reporting" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 font-medium text-sm sm:text-base">
                    <item.icon className="size-5 text-blue-700 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

            </div>
            
            {/* Hero Image / Visual Asset */}
            <div className="relative w-full h-[30rem] lg:h-[40rem] rounded-[2rem] overflow-hidden shadow-2xl group border border-slate-200">
              <div className="absolute inset-0 bg-blue-700/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2850&auto=format&fit=crop" 
                alt="HIVENOX Business Intelligence Dashboard Showcase" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. THE PROBLEM (The Clarity Gap)
            ========================================================================= */}
        <section className="bg-blue-700 py-24 relative overflow-hidden rounded-t-[3rem]">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="mb-4 inline-block text-base font-bold uppercase tracking-widest text-blue-100 border border-blue-500 bg-blue-800/50 px-5 py-2 rounded-full">
                  THE CLARITY GAP
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                  Your numbers exist. <br/>
                  <span className="font-semibold text-blue-200">But do they agree?</span>
                </h2>
                <div className="space-y-6 text-xl font-light text-blue-50 leading-relaxed mb-8">
                  <p>
                    Most businesses don't suffer from a shortage of data.
                  </p>
                  <p>
                    They suffer from data scattered across systems, spreadsheets and departments — with every team working from a slightly different version of the truth.
                  </p>
                  <p className="font-medium text-white">
                    By the time the reports are assembled, the picture is already out of date.
                  </p>
                </div>
                
                <a href="/book" className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-medium text-blue-700 transition-all duration-300 hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1">
                  Close the Clarity Gap
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Problem Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Layers, title: "Scattered Data", desc: "Revenue in one system. Customers in another. Operations somewhere else." },
                  { icon: FileSpreadsheet, title: "Spreadsheet Reporting", desc: "Teams export, clean, combine and interpret data manually." },
                  { icon: AlertTriangle, title: "Conflicting Numbers", desc: "Finance, sales and operations can end up working from different figures." },
                  { icon: Clock, title: "Delayed Decisions", desc: "When the information finally reaches leadership, the opportunity or problem may already have changed." }
                ].map((pain, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-blue-800/50 border border-blue-500 backdrop-blur-sm transition-all duration-300 hover:bg-blue-800 hover:scale-[1.02] hover:shadow-xl">
                    <pain.icon className="size-8 text-blue-200 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{pain.title}</h3>
                    <p className="text-base font-light text-blue-100 leading-relaxed">{pain.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. THE HIVENOX DIFFERENCE
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                One business. <span className="font-semibold text-blue-700">One source of truth.</span>
              </h2>
              <p className="text-xl font-light text-slate-600">
                Every HIVENOX application works from the same shared database, so your business intelligence doesn't need to reconstruct reality from disconnected systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: Database, 
                  title: "One Source of Truth", 
                  desc: "Every metric comes from the same underlying business data. No exports. No conflicting numbers." 
                },
                { 
                  icon: Activity, 
                  title: "Live, Not Lagging", 
                  desc: "Dashboards update continuously so leadership can see what is happening now. Run your business by the instrument panel, not the rear-view mirror." 
                },
                { 
                  icon: Shield, 
                  title: "Catch Problems Early", 
                  desc: "Identify variances, risks and unexpected changes while they are still small and easier to fix." 
                },
                { 
                  icon: Globe, 
                  title: "Bilingual Reporting", 
                  desc: "Dashboards and reports are available natively in Arabic and English across your enterprise." 
                }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col h-full bg-slate-50 rounded-[2rem] p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 group">
                  <div className="size-16 rounded-[1.2rem] bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-700 transition-colors duration-300">
                    <feature.icon className="size-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-base font-light text-slate-600 leading-relaxed flex-1">{feature.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. WHAT YOU CAN SEE
            ========================================================================= */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Your whole business, <span className="font-semibold text-blue-700">in one view.</span>
              </h2>
              <p className="text-xl font-light text-slate-600">
                Bring the metrics that matter to leadership into one continuously updated intelligence layer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { icon: DollarSign, title: "Revenue", desc: "Track revenue performance and trends across your business." },
                { icon: LineChart, title: "Cash", desc: "Understand current financial position and movement." },
                { icon: TrendingUp, title: "Pipeline", desc: "See sales pipeline performance and where opportunities stand." },
                { icon: Users, title: "Headcount", desc: "Understand workforce numbers and business capacity." },
                { icon: Boxes, title: "Inventory", desc: "Monitor inventory performance alongside the rest of your business." },
                { icon: Megaphone, title: "Campaign Performance", desc: "Connect marketing activity with measurable business performance." }
              ].map((card, i) => (
                <div key={i} className="group bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-blue-700 hover:-translate-y-1">
                  <div className="size-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                    <card.icon className="size-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-base font-light text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-white border border-slate-200 py-6 px-8 rounded-full max-w-2xl mx-auto shadow-sm">
              <p className="text-lg font-semibold text-blue-700">
                One platform. One database. One version of the truth.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. LIVE EXECUTIVE DASHBOARDS
            ========================================================================= */}
        <section className="py-24 bg-white border-y border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Stop waiting for the <br />
                  <span className="font-semibold text-blue-700">monthly report.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 leading-relaxed mb-8">
                  Your leadership dashboards are ready when you are. Instead of waiting for someone to collect data, reconcile spreadsheets and prepare a presentation, HIVENOX gives decision-makers a continuously updated view of the business.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Live business KPIs",
                    "Revenue and financial visibility",
                    "Sales pipeline monitoring",
                    "Operational performance",
                    "Workforce visibility",
                    "Inventory performance",
                    "Marketing performance",
                    "Executive-ready reporting"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 p-4 rounded-2xl">
                      <CheckCircle2 className="size-5 text-blue-700 shrink-0" />
                      <span className="text-base font-medium text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" className="group inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:-translate-y-1">
                  See the Platform
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Visual Display */}
              <div className="relative rounded-[2.5rem] bg-slate-900 p-8 sm:p-10 text-white shadow-2xl border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="size-3 rounded-full bg-red-500" />
                    <div className="size-3 rounded-full bg-yellow-500" />
                    <div className="size-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs font-mono text-slate-400">HIVENOX Executive Console</span>
                  </div>
                  <span className="text-xs font-mono bg-blue-900/60 text-blue-300 px-3 py-1 rounded-full border border-blue-700/50">LIVE SYSTEM</span>
                </div>

                <div className="space-y-6">
                  <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
                    <p className="text-sm font-mono text-slate-400 mb-1">Total Monthly Recurring Revenue</p>
                    <p className="text-4xl font-bold text-white mb-2">$1,248,500 <span className="text-sm font-normal text-emerald-400">+14.2%</span></p>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-[78%]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                      <p className="text-xs font-mono text-slate-400 mb-1">Active Pipeline</p>
                      <p className="text-2xl font-bold text-white">$4.8M</p>
                    </div>
                    <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                      <p className="text-xs font-mono text-slate-400 mb-1">Inventory Velocity</p>
                      <p className="text-2xl font-bold text-white">99.4%</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            6. FROM DATA TO DECISIONS
            ========================================================================= */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                See the signal before it <span className="font-semibold text-blue-700">becomes a problem.</span>
              </h2>
              <p className="text-xl font-light text-slate-600">
                Real-time visibility changes how a business operates. When leadership can see the real numbers as they change:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
              {[
                { step: "Spot", action: "Unexpected variances." },
                { step: "Understand", action: "What is changing and where." },
                { step: "Act", action: "Before the problem becomes expensive." },
                { step: "Measure", action: "Whether the action worked." }
              ].map((item, idx) => (
                <div key={idx} className="relative bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-blue-700 hover:shadow-xl transition-all duration-300">
                  <div>
                    <span className="text-base font-bold text-blue-700 uppercase tracking-widest block mb-2">Step 0{idx + 1}</span>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">{item.step}</h3>
                    <p className="text-base font-light text-slate-600 leading-relaxed">{item.action}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-50 border border-blue-200 text-blue-700 p-2 rounded-full">
                      <ChevronRight className="size-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-2xl font-semibold text-slate-900">
              Better visibility creates faster decisions.
            </p>

          </div>
        </section>

        {/* =========================================================================
            7. INSIGHTS AI
            ========================================================================= */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/20" />
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500 bg-blue-950/80 px-5 py-2 text-sm font-bold uppercase tracking-widest text-blue-300">
                  <Bot className="size-4 text-blue-400" />
                  MEET YOUR AI ANALYST
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                  Don't just see the numbers. <br />
                  <span className="font-semibold text-blue-400">Ask them questions.</span>
                </h2>
                <p className="text-xl font-light text-slate-300 mb-8 leading-relaxed">
                  Insights AI lets you ask questions about your business in plain language and get answers, charts and next steps. Because Insights AI can read across CRM, finance, inventory, operations and HR, it can connect information that would otherwise take a human analyst days to assemble.
                </p>

                <a href="/contact" className="group inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1">
                  Explore Insights AI
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Conversational AI Visual */}
              <div className="bg-slate-800/90 rounded-[2.5rem] p-8 border border-slate-700/80 shadow-2xl space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Example Conversational Queries</div>
                {[
                  "“How did sales compare to last month?”",
                  "“Which customers are at risk of churning?”",
                  "“What’s driving the drop in margin?”"
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-4 bg-slate-900/90 p-5 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                    <MessageSquareQuoteIcon className="size-6 text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-lg font-medium text-slate-100">{q}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            8. CONNECTED INTELLIGENCE
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                The intelligence layer sits <span className="font-semibold text-blue-700">on top of the whole business.</span>
              </h2>
              <p className="text-xl font-light text-slate-600">
                Because these applications share the same platform, your dashboards don't need to constantly reconcile disconnected sources.
              </p>
            </div>

            {/* Visual Flow Diagram */}
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                {[
                  { title: "CRM", detail: "Customer + pipeline data" },
                  { title: "Finance", detail: "Revenue + cash" },
                  { title: "HRMS", detail: "People + workforce" },
                  { title: "Inventory", detail: "Stock + movement" },
                  { title: "Operations", detail: "Projects + execution" }
                ].map((node, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center">
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{node.title}</h3>
                    <p className="text-xs font-light text-slate-600">{node.detail}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mb-8">
                <ArrowDown className="size-8 text-blue-700 animate-bounce" />
              </div>

              <div className="bg-blue-700 text-white rounded-[2.5rem] p-10 text-center shadow-xl border border-blue-600">
                <h3 className="text-3xl font-bold mb-2">HIVENOX BUSINESS INTELLIGENCE</h3>
                <p className="text-xl font-light text-blue-100">One live source of truth</p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            9. WHY THIS CHANGES HOW YOU RUN THE BUSINESS
            ========================================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                From rear-view mirror to <span className="font-semibold text-blue-700">live instrument panel.</span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Before */}
                <div className="bg-slate-800/80 rounded-[2rem] p-8 border border-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-300 mb-6 border-b border-slate-700 pb-4 text-center">Before HIVENOX BI</h3>
                  <ul className="space-y-4 text-slate-400 font-light text-base sm:text-lg">
                    {[
                      "Data scattered across systems",
                      "Manual exports & spreadsheet cleaning",
                      "Conflicting numbers between teams",
                      "Monthly delayed reporting",
                      "Problems discovered late",
                      "Time spent on data collection",
                      "Reports explain the past"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="size-2 rounded-full bg-slate-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* With HIVENOX BI */}
                <div className="bg-blue-700 rounded-[2rem] p-8 border border-blue-500 shadow-xl">
                  <h3 className="text-2xl font-semibold text-white mb-6 border-b border-blue-500 pb-4 text-center">With HIVENOX BI</h3>
                  <ul className="space-y-4 text-blue-50 font-medium text-base sm:text-lg">
                    {[
                      "One connected source of truth",
                      "Live, automated dashboards",
                      "Shared, agreed-upon metrics",
                      "Continuous real-time visibility",
                      "Problems spotted earlier",
                      "Time spent on decision-making",
                      "Intelligence supports the next move"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="size-5 text-white shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="mt-12 text-center border-t border-slate-800 pt-8">
                <p className="text-2xl font-light text-white">
                  The goal isn't more dashboards. <span className="font-semibold text-blue-400">It's better decisions.</span>
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            10. BILINGUAL BUSINESS INTELLIGENCE
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <span className="mb-4 inline-block text-base font-bold uppercase tracking-widest text-blue-700 border border-blue-200 bg-blue-50 px-5 py-2 rounded-full">
                  GLOBAL FOUNDATION
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Business intelligence in the language <span className="font-semibold text-blue-700">your team actually uses.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-6 leading-relaxed">
                  HIVENOX is built for businesses operating across Australia, UAE and Saudi Arabia. Your dashboards and reports can be available natively in English and Arabic.
                </p>
                <p className="text-lg font-normal text-slate-800 mb-8">
                  Not simply translated after the fact — designed as part of the platform's bilingual foundation.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Arabic", "English", "RTL-ready", "Regional operations"].map((chip, idx) => (
                    <span key={idx} className="bg-slate-100 border border-slate-200 text-slate-800 text-base font-semibold px-5 py-2.5 rounded-full">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-10 shadow-lg text-center">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-right">
                    <p className="text-xs text-slate-400 font-mono mb-1">لوحة التحكم التنفيذية</p>
                    <p className="text-2xl font-bold text-slate-900">الإيرادات الشهرية المباشرة</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-left">
                    <p className="text-xs text-slate-400 font-mono mb-1">Executive Dashboard</p>
                    <p className="text-2xl font-bold text-slate-900">Live Monthly Revenue</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            11. WHO IS IT FOR?
            ========================================================================= */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Built for leaders who need to know <span className="font-semibold text-blue-700">what is actually happening.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Business Leaders", desc: "Get an immediate view of the metrics that drive the company." },
                { title: "Finance Teams", desc: "Reduce manual reporting and gain a current view of financial performance." },
                { title: "Sales Leaders", desc: "Monitor pipeline, revenue and sales performance." },
                { title: "Operations Teams", desc: "See operational performance and emerging risks." },
                { title: "HR Leaders", desc: "Understand workforce and capacity information." },
                { title: "Marketing Teams", desc: "Connect campaigns and activity with measurable performance." }
              ].map((role, i) => (
                <div key={i} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:border-blue-700 hover:shadow-2xl hover:-translate-y-1">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{role.title}</h3>
                  <p className="text-base font-light text-slate-600 leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            12. BUSINESS INTELLIGENCE + AI + AUTOMATION
            ========================================================================= */}
        <section className="py-24 bg-white border-y border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                See it. Understand it. <span className="font-semibold text-blue-700">Act on it.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Business Intelligence",
                  action: "See",
                  desc: "Live dashboards show what is happening across your whole enterprise in real time."
                },
                {
                  title: "Insights AI",
                  action: "Understand",
                  desc: "Ask questions in plain language and understand why something is happening."
                },
                {
                  title: "Intelligent Automation",
                  action: "Act",
                  desc: "Turn business events and insights directly into automated, executed workflows."
                }
              ].map((pillar, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between group hover:border-blue-700 hover:bg-white hover:shadow-2xl transition-all duration-300">
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 px-4 py-1.5 rounded-full mb-6">
                      {pillar.action}
                    </span>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">{pillar.title}</h3>
                    <p className="text-base font-light text-slate-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-2xl font-light text-slate-800">
                Visibility becomes intelligence. <span className="font-semibold text-blue-700">Intelligence becomes action.</span>
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            13. FAQ SECTION
            ========================================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Frequently Asked <span className="font-semibold text-blue-700">Questions</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "Do I need an analyst to use HIVENOX Business Intelligence?",
                  a: "No. Dashboards are ready out of the box and update themselves. Insights AI also lets you ask questions in plain language."
                },
                {
                  q: "Where does the data come from?",
                  a: "From the HIVENOX applications you use — including CRM, finance, HR and operations — all connected through the shared database."
                },
                {
                  q: "Do I need to export data into spreadsheets?",
                  a: "No. The purpose of the shared database is to eliminate the need to constantly export and reconcile information."
                },
                {
                  q: "Can we use it in Arabic?",
                  a: "Yes. HIVENOX BI is designed for native Arabic and English reporting."
                },
                {
                  q: "Is Business Intelligence only for executives?",
                  a: "No. Different teams can use dashboards relevant to their responsibilities while leadership maintains an overall view of the business."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:border-blue-300">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-start gap-3">
                    <HelpCircle className="size-6 text-blue-700 shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-base font-light text-slate-600 leading-relaxed pl-9">{faq.a}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            14. FINAL CTA
            ========================================================================= */}
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[3rem] bg-blue-700 px-8 py-24 sm:px-16 sm:py-32 text-center shadow-2xl group">
              
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[40rem] w-[40rem] rounded-full bg-blue-600 blur-[100px] opacity-50 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[40rem] w-[40rem] rounded-full bg-blue-800 blur-[120px] opacity-50 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              
              <div className="relative z-10 mx-auto max-w-4xl">
                <span className="mb-6 inline-block text-sm font-bold uppercase tracking-widest text-blue-100 bg-blue-900/50 px-6 py-2 rounded-full border border-blue-500/30">
                  SEE YOUR BUSINESS CLEARLY
                </span>
                <h2 className="mb-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                  See your whole business, clearly, in real time.
                </h2>
                <p className="mb-12 text-xl font-light leading-relaxed text-blue-100 max-w-3xl mx-auto">
                  One source of truth, always ready, in both languages.
                </p>
                
                <div className="flex justify-center w-full">
                  <a href="/book" className="group inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-xl font-bold text-blue-700 transition-all duration-300 hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-1">
                    Book a Demo
                    <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
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