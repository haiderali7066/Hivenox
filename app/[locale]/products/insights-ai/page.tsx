"use client";

import React from "react";
import { 
  Bot, Clock, Globe2, MessageSquare, CheckCircle2, ArrowRight, 
  Database, Zap, Sparkles, ChevronRight, Workflow, BarChart3, 
  TrendingUp, Layers, HelpCircle, FileText, PieChart, ArrowUpRight
} from "lucide-react";

export default function HivenoxInsightsAIPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Decorative Gradients (Purple used sparingly as a touch, never on CTAs) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="absolute top-[35%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION (White Background)
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-bold uppercase tracking-widest text-blue-700 shadow-sm transition-transform hover:scale-105">
                <Sparkles className="size-4 text-blue-700" />
                PRODUCTS · HIVENOX INSIGHTS AI
              </div>
              
              <h1 className="mb-6 text-5xl font-light tracking-tight text-slate-900 lg:text-7xl leading-[1.1]">
                The analyst who knows <br />
                <span className="font-semibold text-blue-700">your entire business.</span>
              </h1>
              
              <p className="mb-6 max-w-2xl text-xl font-light leading-relaxed text-slate-600">
                Ask anything in plain language and get answers, charts and next steps — <span className="font-medium text-slate-800">drawn from across every product on the Hivenox platform.</span>
              </p>

              <p className="mb-8 text-lg font-light text-slate-500">
                No report to commission. No analyst to wait for. No spreadsheet to build. Just ask the question.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10 w-full">
                <a href="/book" className="group flex-1 sm:flex-none inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/20 hover:-translate-y-1">
                  Book a Demo
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/contact" className="group flex-1 sm:flex-none inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50 hover:-translate-y-1">
                  Start Free
                </a>
              </div>

              {/* Trust Points */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                {["Plain-language questions", "Numbers + charts + actions", "Whole-business visibility", "Bilingual", "Instant answers"].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 group cursor-default">
                    <CheckCircle2 className="size-4 text-blue-700 group-hover:scale-125 transition-transform" />
                    <span className="group-hover:text-blue-700 transition-colors">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image / Dashboard Visual */}
            <div className="relative w-full h-[38rem] rounded-[3rem] overflow-hidden shadow-2xl group border-[8px] border-white">
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {/* Subtle purple background touch */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 blur-[80px] z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2850&auto=format&fit=crop" 
                alt="Insights AI Business Analyst Dashboard" 
                className="relative z-10 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. THE PROBLEM (Blue-700 Background)
            ========================================================================= */}
        <section className="bg-blue-700 py-24 relative overflow-hidden rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-2xl shadow-blue-900/20">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-600 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
          
          <div className="mx-auto max-w-[85rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                Your business doesn't have a data problem. <br/>
                <span className="font-semibold text-blue-200">It has a clarity problem.</span>
              </h2>
              <p className="text-xl font-light text-blue-100">
                The numbers already exist. Sales in CRM, revenue in finance, stock in inventory, people in HR. But answering a simple question shouldn't require opening multiple systems and exporting spreadsheets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { title: "Scattered Information", desc: "Business data is spread across different disconnected systems." },
                { title: "Slow Analysis", desc: "Simple business questions can require hours of manual work." },
                { title: "Report Dependency", desc: "Teams wait days for someone to create the report they need." },
                { title: "Numbers Without Context", desc: "Dashboards show what happened, but not always why." }
              ].map((pain, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-blue-800/60 border border-blue-500/50 backdrop-blur-md transition-all duration-300 hover:bg-blue-600/50 hover:-translate-y-2 hover:shadow-xl">
                  {/* Subtle purple touch on the icon container */}
                  <div className="size-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6">
                    <Database className="size-6 text-purple-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{pain.title}</h3>
                  <p className="text-base font-light text-blue-100">{pain.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center space-y-6">
              <p className="text-2xl font-medium text-white text-center">
                The information exists. <span className="text-blue-200">The understanding shouldn't take days.</span>
              </p>
              <div className="flex gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-blue-700 transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1">
                  Get Instant Clarity
                </a>
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-blue-400 bg-transparent px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. ASK IN PLAIN LANGUAGE (White Background)
            ========================================================================= */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Stop building reports. <br/>
                <span className="font-semibold text-blue-700">Start asking questions.</span>
              </h2>
              <p className="text-xl font-light text-slate-600 mb-8">
                You don't need to know SQL. You don't need to know where the data lives. Just ask the question the way you would ask a human analyst.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-6 py-2 text-base font-bold text-blue-700">
                <Zap className="size-5" /> Ask naturally. Understand instantly.
              </div>
            </div>

            {/* Interactive Example Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              
              {/* Card 1 */}
              <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm font-bold uppercase tracking-wider mb-4">
                    <HelpCircle className="size-4 text-blue-700" /> Example Question 01
                  </div>
                  <div className="text-xl font-bold text-slate-900 mb-6 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                    “How did sales compare to last month?”
                  </div>
                  <div className="space-y-3 pl-4 border-l-2 border-blue-700 my-6">
                    <p className="text-lg font-semibold text-blue-700">Sales increased 14%</p>
                    <p className="text-sm text-slate-600 flex items-center gap-2"><BarChart3 className="size-4 text-blue-600" /> Comparison chart rendered instantly</p>
                    <p className="text-sm text-slate-600 flex items-center gap-2"><TrendingUp className="size-4 text-blue-600" /> Top growth: Enterprise accounts</p>
                    <p className="text-sm font-medium text-slate-800">Next step: Review the accounts driving the increase.</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Insights AI Output</span>
                  <a href="/book" className="text-sm font-bold text-blue-700 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Try this query <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm font-bold uppercase tracking-wider mb-4">
                    <HelpCircle className="size-4 text-blue-700" /> Example Question 02
                  </div>
                  <div className="text-xl font-bold text-slate-900 mb-6 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                    “Which customers are at risk of churning?”
                  </div>
                  <div className="space-y-3 pl-4 border-l-2 border-blue-700 my-6">
                    <p className="text-lg font-semibold text-blue-700">Identifies relevant customer patterns</p>
                    <p className="text-sm text-slate-600 flex items-center gap-2"><PieChart className="size-4 text-blue-600" /> Risk breakdown generated</p>
                    <p className="text-sm text-slate-600 flex items-center gap-2"><Bot className="size-4 text-blue-600" /> Top risk accounts isolated</p>
                    <p className="text-sm font-medium text-slate-800">Next steps: Initiate automated customer success check-ins.</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Insights AI Output</span>
                  <a href="/book" className="text-sm font-bold text-blue-700 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Try this query <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>

            </div>

            <div className="flex justify-center gap-4">
              <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">
                Ask Your First Question
              </a>
              <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50 hover:-translate-y-1">
                Talk to Expert
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. IT SEES THE WHOLE PICTURE (Slate Background + Platform Map)
            ========================================================================= */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-blue-700">
                  <Layers className="size-4 text-blue-700" />
                  CONNECTED ECOSYSTEM
                </div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  One analyst. <br />
                  <span className="font-semibold text-blue-700">The whole business.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8 leading-relaxed">
                  Insights AI reads across the connected Hivenox platform rather than analysing one isolated dataset. Because the data is connected, it bridges relationships between departments that would take a human days to assemble manually.
                </p>
                <div className="p-6 bg-white border border-slate-200 rounded-[2rem] shadow-sm mb-10">
                  <p className="text-lg font-bold text-slate-800 mb-1">It doesn't just see a number.</p>
                  <p className="text-slate-500">It sees where the number came from across every department.</p>
                </div>
                
                <div className="flex gap-4">
                  <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">
                    Explore Platform
                  </a>
                  <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Connected Modules Visual Stack */}
              <div className="flex flex-col gap-4">
                {[
                  { name: "CRM", desc: "Sales + customers", color: "border-blue-200 bg-white text-blue-700" },
                  { name: "Finance", desc: "Revenue + margins", color: "border-blue-200 bg-white text-blue-700" },
                  { name: "Inventory", desc: "Stock + movement", color: "border-blue-200 bg-white text-blue-700" },
                  { name: "Operations", desc: "Projects + delivery", color: "border-blue-200 bg-white text-blue-700" },
                  { name: "HR", desc: "People + capacity", color: "border-blue-200 bg-white text-blue-700" }
                ].map((mod, i) => (
                  <div key={i} className={`p-5 rounded-2xl border-2 ${mod.color} shadow-sm flex items-center justify-between transition-transform hover:scale-[1.02]`}>
                    <div>
                      <span className="font-bold text-lg text-slate-900">{mod.name}</span>
                      <p className="text-sm text-slate-500">{mod.desc}</p>
                    </div>
                    <div className="size-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-bold">✓</div>
                  </div>
                ))}
                
                <div className="p-6 bg-blue-700 text-white rounded-2xl shadow-xl text-center mt-2">
                  <p className="text-xs uppercase tracking-widest text-blue-200 mb-1">Unified Intelligence</p>
                  <p className="text-xl font-bold">Insights AI Whole-Business Understanding</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            5. FROM WHAT HAPPENED → WHY → WHAT NEXT (White Background)
            ========================================================================= */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Don't just know what happened. <br/>
                <span className="font-semibold text-blue-700">Understand why — and what to do next.</span>
              </h2>
              <p className="text-xl font-light text-slate-600">
                Traditional reporting stops at what happened. Insights AI goes further with deep causal understanding and proactive advisory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {[
                { step: "01", title: "What Happened?", desc: "Sales dropped 8% this month across regional distribution channels.", icon: BarChart3 },
                { step: "02", title: "Why?", desc: "The decline is concentrated in two customer segments and follows a reduction in new qualified opportunities.", icon: FileText },
                { step: "03", title: "What Next?", desc: "Prioritise follow-up with high-value prospects and review the affected customer segment immediately.", icon: TrendingUp }
              ].map((card, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-extralight text-blue-700">{card.step}</span>
                      <div className="size-12 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                        <card.icon className="size-6 text-blue-700 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                    Step {card.step} Analysis
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">
                See Live Analysis
              </a>
              <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. ANSWERS WITH NUMBERS, CHARTS & NEXT STEPS (Dark Slate Background)
            ========================================================================= */}
        <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 my-10 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-600 rounded-full blur-[150px] opacity-25 pointer-events-none"></div>

          <div className="mx-auto max-w-[85rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                Every answer should help you <br />
                <span className="font-semibold text-blue-400">make a decision.</span>
              </h2>
              <p className="text-xl font-light text-slate-300">
                Insights AI doesn't return a wall of text. It turns business questions into actionable, structured visual outputs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { title: "Numbers", desc: "Get the actual figures behind the answer instantly." },
                { title: "Charts", desc: "See trends, comparisons and patterns visually." },
                { title: "Explanation", desc: "Understand precisely what is driving the result." },
                { title: "Next Steps", desc: "Know what deserves your team's attention next." }
              ].map((output, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-slate-800/80 border border-slate-700 backdrop-blur-md transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2 hover:border-blue-500">
                  <div className="size-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="size-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{output.title}</h3>
                  <p className="text-base font-light text-slate-300">{output.desc}</p>
                </div>
              ))}
            </div>

            {/* Example Card Box */}
            <div className="max-w-4xl mx-auto bg-slate-800/90 border border-slate-700 rounded-[2.5rem] p-8 mb-16 shadow-2xl">
              <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">Query Example Output</p>
              <p className="text-lg font-bold text-white mb-4">“What is driving the drop in margin?”</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm bg-slate-900 p-6 rounded-2xl border border-slate-700">
                <div>
                  <span className="block text-slate-400 mb-1">Margin Drop</span>
                  <span className="text-xl font-bold text-red-400">↓ 6.2%</span>
                </div>
                <div>
                  <span className="block text-slate-400 mb-1">Primary Driver</span>
                  <span className="font-semibold text-white">Increased operating costs</span>
                </div>
                <div>
                  <span className="block text-slate-400 mb-1">Next Action</span>
                  <span className="font-semibold text-blue-300">Review highest-cost activities</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-10 text-lg font-bold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1">
                Explore Structured Outputs
              </a>
              <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-700 px-10 text-lg font-medium text-white transition-all hover:border-slate-500 hover:-translate-y-1">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. BILINGUAL INTELLIGENCE (Light Blue Section)
            ========================================================================= */}
        <section className="py-24 bg-blue-50">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-4 bg-white rounded-full mb-6 shadow-sm border border-blue-100">
                <Globe2 className="size-10 text-blue-700" />
              </div>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Ask your business questions <br />
                <span className="font-semibold text-blue-700">in the language you prefer.</span>
              </h2>
              <p className="text-xl font-light text-slate-600 mb-8">
                Insights AI provides instant understanding bilingually, allowing teams to interact with business intelligence in the language that works naturally for them.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-base font-bold text-blue-700 shadow-sm">
                One business brain. Two languages.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              
              {/* Arabic Panel */}
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-700 transition-all text-center group">
                <div className="text-5xl font-serif text-blue-700 mb-4 opacity-80 group-hover:scale-110 transition-transform">عربي</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Arabic</h3>
                <p className="text-slate-600 text-lg">Ask and understand business information fluently in Arabic.</p>
              </div>

              {/* English Panel */}
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-700 transition-all text-center group">
                <div className="text-5xl font-sans font-bold text-blue-700 mb-4 opacity-80 group-hover:scale-110 transition-transform">EN</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">English</h3>
                <p className="text-slate-600 text-lg">Ask and understand business information seamlessly in English.</p>
              </div>

            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-blue-700 mb-8">Instant understanding, bilingually.</p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">
                  Try Bilingual AI
                </a>
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-blue-200 bg-white px-8 text-base font-medium text-blue-700 transition-all hover:border-blue-700 hover:-translate-y-1">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. WHY HIVENOX INSIGHTS AI? (White Background Grid)
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                The difference between drowning in data <br/>
                <span className="font-semibold text-blue-700">and swimming in understanding.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {[
                { title: "Ask Your Business Anything", desc: "Plain-language questions instead of complicated reporting workflows." },
                { title: "Sees the Whole Picture", desc: "Reads across CRM, Finance, Inventory, Operations and HR." },
                { title: "Explains & Advises", desc: "Shows not just what happened, but why and what to do next." },
                { title: "An Analyst on Call", desc: "Instant understanding without commissioning a report or waiting." }
              ].map((diff, i) => (
                <div key={i} className="flex items-start gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-blue-200 group">
                  <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-700 transition-colors">
                    <CheckCircle2 className="size-6 text-blue-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{diff.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed">{diff.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-slate-800 mb-8">Turn a connected platform into an intelligent one.</p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">
                  Book a Consultation
                </a>
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">
                  General Inquiry
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. FINAL CTA (Full Width Blue Background)
            ========================================================================= */}
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[4rem] bg-blue-700 px-8 py-24 sm:px-16 sm:py-32 text-center shadow-2xl group">
              
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[40rem] w-[40rem] rounded-full bg-blue-600 blur-[100px] opacity-60 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[40rem] w-[40rem] rounded-full bg-blue-800 blur-[120px] opacity-60 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              
              {/* Purple touch for CTA aesthetic background only */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

              <div className="relative z-10 mx-auto max-w-4xl">
                <span className="mb-6 inline-block text-sm font-bold uppercase tracking-widest text-blue-100 bg-blue-900/50 px-6 py-2 rounded-full border border-blue-500/30">
                  YOUR BUSINESS, UNDERSTOOD
                </span>
                
                <h2 className="mb-8 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                  Turn your business data into clear decisions.
                </h2>
                
                <p className="mb-12 text-2xl font-light leading-relaxed text-blue-100 max-w-3xl mx-auto">
                  Ask questions in plain language. Get answers, charts and next steps <strong className="text-white">across your entire business.</strong>
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 mb-12 w-full">
                  <a href="/book" className="group flex-1 sm:flex-none inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-xl font-bold text-blue-700 transition-all duration-300 hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-1">
                    Book a Demo
                    <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="/contact" className="group flex-1 sm:flex-none inline-flex h-16 items-center justify-center rounded-full border-2 border-blue-400 bg-transparent px-10 text-xl font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-1">
                    Start Free
                  </a>
                </div>
                
                <p className="text-lg font-medium text-blue-200">
                  Answers the moment you ask.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}