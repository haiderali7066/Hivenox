"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  MessageSquare,
  DollarSign,
  FileText,
  LifeBuoy,
  RefreshCcw,
  Users,
  Briefcase,
  PieChart,
  Globe2,
  Calendar,
  Layers,
  Zap,
  Phone,
  BarChart,
  ArrowDown,
  Sparkles,
  Database
} from "lucide-react";

export default function HivenoxCRMPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-700 py-20 lg:py-32 overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem] shadow-xl">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-blue-500 blur-[100px] opacity-50 z-0"></div>

        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400 bg-blue-800/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-100 backdrop-blur-md">
                <Layers className="size-4 text-blue-300" />
                ERP APPS · CRM
              </div>
              <h1 className="mb-6 text-5xl font-light tracking-tight text-white lg:text-7xl leading-[1.1]">
                Every customer relationship, <span className="font-semibold text-green-400">remembered perfectly</span> — and shared with everyone who needs it.
              </h1>
              <p className="mb-8 text-xl font-light leading-relaxed text-blue-100 max-w-2xl">
                A single, living view of each customer: every conversation, every deal, every invoice and every ticket, in one place. Hivenox CRM turns scattered customer information into a reliable shared brain for your business.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="/start-free" className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-semibold text-blue-700 transition-all hover:bg-green-50 hover:text-green-700 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1">
                  Start Free
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-blue-400 bg-blue-700/30 backdrop-blur-sm px-8 text-lg font-medium text-white transition-colors hover:bg-blue-600 hover:border-blue-300">
                  Book a Demo
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-blue-100">
                {["One living customer record", "Automated follow-ups", "Connected to finance & ops", "AI-powered", "Arabic + English"].map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-green-400" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image/Abstract UI Graphic */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transform transition-transform hover:scale-[1.02] duration-500">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" alt="Team collaborating on CRM" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="size-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                      <TrendingUp className="size-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Deal Closed</p>
                      <p className="text-lg font-semibold">$45,000 Pipeline Value</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-700 mb-2 block">The Customer Data Problem</span>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6">
              Your customer relationship shouldn't live in <span className="font-semibold text-blue-700">six different places.</span>
            </h2>
            <div className="text-lg font-light text-slate-600 space-y-4 border-l-4 border-blue-200 pl-6">
              <p>A conversation happens in email. A deal sits in the sales pipeline. An invoice lives in finance. A support ticket sits somewhere else. Then someone needs to piece everything together.</p>
              <p className="font-medium text-slate-800">Your team shouldn't have to remember the history of the customer. The CRM should.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: Database, title: "Scattered Customer Data", desc: "Contacts, conversations, deals and commitments live across disconnected tools." },
              { icon: Calendar, title: "Lost Follow-Ups", desc: "Deals stall because the next action depends on someone remembering to do it." },
              { icon: Users, title: "No Complete Context", desc: "Sales may not know what support is handling. Finance may not know what sales has promised." },
              { icon: BarChart, title: "Unreliable Forecasting", desc: "Forecasts become guesses when they aren't based on live pipeline data." }
            ].map((card, i) => (
              <div key={i} className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="size-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  <card.icon className="size-6 text-slate-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="bg-blue-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between border border-blue-100 shadow-sm">
            <p className="text-blue-900 font-medium mb-4 sm:mb-0">Ready to unify your customer data?</p>
            <div className="flex gap-4">
              <a href="/book" className="px-6 py-2 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition-colors">Book a Demo</a>
              <a href="/contact" className="px-6 py-2 bg-white text-blue-700 border border-blue-200 font-medium rounded-full hover:bg-blue-50 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ONE LIVING CUSTOMER VIEW */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6">
                One customer. <br/><span className="font-semibold text-blue-700">One complete story.</span>
              </h2>
              <p className="text-lg font-light text-slate-600 mb-8">
                Hivenox CRM brings the customer's relationship with your business into one living record. Anyone who needs to understand the relationship can see the same customer history without asking three different people or searching through multiple systems.
              </p>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-green-500"></div>
                <p className="text-xl font-medium text-slate-800 pl-4 italic text-center">
                  "Nothing forgotten. Nothing repeated. Nothing hidden."
                </p>
              </div>

              <div className="flex gap-4">
                <a href="/contact" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 hover:underline">
                  Talk to our team <ArrowRight className="ml-1 size-4" />
                </a>
              </div>
            </div>

            {/* Timeline Graphic */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border border-slate-100 relative">
              <div className="absolute top-12 bottom-12 left-12 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 hidden md:block"></div>
              <div className="space-y-8 relative">
                {[
                  { title: "Customer Profile", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
                  { title: "Conversations", icon: MessageSquare, color: "text-purple-600", bg: "bg-purple-100" },
                  { title: "Deals", icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-100" },
                  { title: "Invoices", icon: DollarSign, color: "text-amber-600", bg: "bg-amber-100" },
                  { title: "Support Tickets", icon: LifeBuoy, color: "text-rose-600", bg: "bg-rose-100" },
                  { title: "Activities & Commitments", icon: Calendar, color: "text-indigo-600", bg: "bg-indigo-100" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className={`size-12 rounded-full ${item.bg} border-2 border-white flex items-center justify-center shadow-md relative z-10 transition-transform group-hover:scale-110 duration-300`}>
                      <item.icon className={`size-5 ${item.color}`} />
                    </div>
                    <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-100 group-hover:border-blue-200 group-hover:shadow-sm transition-all">
                      <span className="font-semibold text-slate-800">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CRM THAT MOVES THE PIPELINE */}
      <section className="py-24 bg-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Deals don't just sit in a pipeline. <br/>
              <span className="font-semibold text-green-400">They move themselves forward.</span>
            </h2>
            <p className="text-lg font-light text-blue-100">
              Hivenox CRM keeps your sales process moving with automated follow-ups and reminders. Nothing dies in the gaps of a busy week.
            </p>
          </div>

          {/* Pipeline Visualization */}
          <div className="bg-blue-800/50 backdrop-blur-lg rounded-[2rem] p-8 border border-blue-500/50 mb-12 shadow-2xl overflow-x-auto">
            <div className="flex items-center justify-between min-w-[800px] gap-4">
              {["New Lead", "Qualified", "Opportunity", "Proposal", "Negotiation", "Won"].map((stage, i) => (
                <React.Fragment key={i}>
                  <div className={`flex flex-col items-center flex-1 group`}>
                    <div className={`w-full py-4 text-center rounded-xl mb-6 font-semibold transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg ${i === 5 ? "bg-green-500 text-white shadow-green-500/30" : "bg-blue-900 border border-blue-600 text-blue-100"}`}>
                      {stage}
                    </div>
                    {/* Underlying data indicators */}
                    <div className="w-full space-y-2 px-2">
                      <div className="h-2 w-full bg-blue-900/50 rounded-full overflow-hidden">
                        <div className={`h-full ${i === 5 ? "bg-green-400" : "bg-blue-400"} w-full rounded-full opacity-50`}></div>
                      </div>
                    </div>
                  </div>
                  {i < 5 && <ArrowRight className="size-6 text-blue-400 shrink-0 mb-8" />}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-8 text-sm font-medium text-blue-200">
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-green-400"/> Automatic follow-up</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-green-400"/> Reminder</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-green-400"/> Next action</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-green-400"/> Deal context</span>
            </div>
          </div>
          
          <div className="text-center">
             <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-green-500 px-8 text-base font-semibold text-white transition-all hover:bg-green-400 hover:shadow-lg hover:-translate-y-0.5">
                See it in action — Book a Demo
              </a>
          </div>
        </div>
      </section>

      {/* 5. SELL INSTEAD OF UPDATING */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6">
              Your team should be selling — <span className="font-semibold text-blue-700">not updating the CRM.</span>
            </h2>
            <p className="text-lg font-light text-slate-600">
              Hivenox CRM captures the administrative side of customer management so your team can spend more time building relationships and closing opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl">
            {/* Traditional CRM */}
            <div className="p-10 bg-slate-100 border-r border-slate-200">
              <h3 className="text-2xl font-medium text-slate-500 mb-8 pb-4 border-b border-slate-300">Traditional CRM</h3>
              <ul className="space-y-6 text-slate-500 font-light">
                {["Manually update records", "Remember follow-ups", "Search across systems", "Manually reconcile information", "Update forecasts manually", "Admin after every conversation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 line-through opacity-70">
                    <div className="size-2 rounded-full bg-slate-400 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hivenox CRM */}
            <div className="p-10 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-[50px] pointer-events-none"></div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-8 pb-4 border-b border-blue-100">Hivenox CRM</h3>
              <ul className="space-y-6 text-slate-800 font-medium">
                {["Information captured automatically", "Automated reminders", "One customer view", "Connected business data", "Forecast from live pipeline", "Less record-keeping"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="size-6 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-medium text-slate-800 bg-green-50 border border-green-100 inline-block px-8 py-4 rounded-full shadow-sm">
              The CRM carries the memory. <span className="text-blue-700">Your team carries the relationship.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 6. CONNECTED CRM */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Your CRM doesn't work alone. <br/><span className="font-semibold text-blue-400">Neither should your customer data.</span>
            </h2>
            <p className="text-lg font-light text-slate-300">
              Because Hivenox CRM sits inside the wider HIVENOX platform, customer information can flow naturally into the rest of the business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { title: "CRM → Books", desc: "A customer relationship can connect directly to invoices and financial activity.", icon: DollarSign },
              { title: "CRM → SalesFlow", desc: "Move opportunities from relationship management into quotes, proposals, signatures and renewals.", icon: FileText },
              { title: "CRM → Desk", desc: "Support teams can see the customer's existing relationship and history.", icon: LifeBuoy },
              { title: "CRM → AI Sales Agent", desc: "The AI Sales Agent can act on the real pipeline — stages, leads, renewals and cold opportunities.", icon: BrainCircuit },
              { title: "CRM → Insights AI", desc: "Business leaders can ask questions about customers, pipeline and performance.", icon: PieChart },
              { title: "One connected journey", desc: "One customer relationship. Every department connected.", icon: Globe2, special: true }
            ].map((conn, i) => (
              <div key={i} className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${conn.special ? "bg-blue-700 border-blue-500 shadow-lg shadow-blue-900/50" : "bg-slate-800/50 border-slate-700 hover:bg-slate-800 hover:border-blue-400/50"}`}>
                <conn.icon className={`size-8 mb-6 ${conn.special ? "text-white" : "text-blue-400"}`} />
                <h3 className="text-xl font-semibold mb-3">{conn.title}</h3>
                <p className={`font-light leading-relaxed ${conn.special ? "text-blue-100" : "text-slate-400"}`}>{conn.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
             <a href="/book" className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-blue-50 transition-colors inline-block">
                See How It Connects
             </a>
          </div>
        </div>
      </section>

      {/* 7. AI-POWERED CRM */}
      <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Flow */}
            <div className="order-2 lg:order-1 bg-slate-50 p-8 rounded-[3rem] border border-slate-200 shadow-xl relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-[60px]"></div>
              
              <div className="flex flex-col items-center justify-center space-y-3 relative z-10">
                {["Cold lead detected", "AI Sales Agent", "Personalised outreach", "Follow-up", "Qualified meeting", "CRM updated"].map((step, i) => (
                  <React.Fragment key={i}>
                    <div className={`px-6 py-3 w-64 text-center rounded-full text-sm font-bold shadow-sm transition-transform hover:scale-105 duration-300 ${
                      i === 1 ? "bg-blue-700 text-white shadow-blue-500/30 border border-blue-600" :
                      i === 5 ? "bg-green-500 text-white shadow-green-500/30 border border-green-400" :
                      "bg-white text-slate-700 border border-slate-200"
                    }`}>
                      {i === 1 && <Sparkles className="inline size-4 mr-2" />}
                      {step}
                    </div>
                    {i < 5 && <ArrowDown className="size-5 text-blue-300" />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-700 mb-2 flex items-center gap-2">
                <BrainCircuit className="size-5" /> CRM + AI
              </span>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6">
                Your CRM doesn't just remember. <span className="font-semibold text-blue-700">It can act.</span>
              </h2>
              <p className="text-lg font-light text-slate-600 mb-10">
                Hivenox CRM becomes more powerful when the HIVENOX AI workforce operates on the same customer data. Turn customer data into customer action.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { title: "AI Sales Agent", desc: "Prospects, personalises outreach, follows up and books qualified meetings." },
                  { title: "Insights AI", desc: "Answers questions about pipeline, customers and business performance." },
                  { title: "Intelligent Automation", desc: "Moves information and actions between CRM and the rest of the business." }
                ].map((ai, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="size-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                      <Zap className="size-5 text-blue-700 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">{ai.title}</h4>
                      <p className="font-light text-slate-600">{ai.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="/book" className="px-6 py-2.5 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition-colors shadow-lg shadow-blue-700/20">Talk to an Expert</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FORECASTS YOU CAN TRUST & 9. CUSTOMER INTELLIGENCE */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* FORECASTS */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 mb-6">
              The difference between <span className="font-semibold text-blue-700">hoping and knowing.</span>
            </h2>
            <p className="text-lg font-light text-slate-600 mb-8">
              A forecast is only as reliable as the pipeline behind it. Hivenox CRM gives your team visibility into live opportunities, stages and customer activity so forecasts are grounded in what is actually happening.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { title: "Pipeline Value", value: "Total active opportunity value." },
                { title: "Weighted Pipeline", value: "Pipeline based on opportunity stages." },
                { title: "Conversion", value: "How opportunities move through the funnel." },
                { title: "Velocity", value: "How quickly deals progress." },
                { title: "Renewals", value: "Customers approaching renewal." }
              ].map((metric, i) => (
                <div key={i} className={`p-4 rounded-xl border border-slate-200 bg-white shadow-sm ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{metric.title}</h4>
                  <p className="text-xs font-light text-slate-500">{metric.value}</p>
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-blue-700 bg-blue-50 inline-block px-4 py-2 rounded-lg border border-blue-100">
              Forecasts built on live pipeline — not wishful thinking.
            </p>
          </div>

          {/* CUSTOMER INTELLIGENCE */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 mb-6">
              Know the relationship <span className="font-semibold text-blue-700">before you enter the conversation.</span>
            </h2>
            <p className="text-lg font-light text-slate-600 mb-8">
              Before anyone speaks to a customer, the full context is already there. Sales, support, finance and leadership can work from the same customer context.
            </p>
            
            {/* Profile Example UI Card */}
            <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-slate-200 transform transition-transform hover:scale-[1.02] duration-300">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="size-16 bg-blue-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-md">
                  ABC
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">ABC Company</h3>
                  <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-md">Client (3 years)</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Open Deal</p>
                  <p className="text-lg font-semibold text-slate-800">$45,000</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Last Conversation</p>
                  <p className="text-lg font-semibold text-slate-800">2 days ago</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Open Ticket</p>
                  <p className="text-lg font-semibold text-rose-600">1</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Outstanding Invoice</p>
                  <p className="text-lg font-semibold text-amber-600">$8,500</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Renewal</p>
                  <p className="text-sm font-semibold text-blue-700 bg-blue-50 p-2 rounded-lg inline-block border border-blue-100">In 45 days</p>
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-slate-800 font-medium italic border-l-4 border-green-400 pl-4">
              No repeated explanations. No missing history.
            </p>
          </div>

        </div>
      </section>

      {/* 10. BILINGUAL CRM */}
      <section className="py-24 bg-blue-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 relative z-10">
          <Globe2 className="size-16 text-blue-300 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            One customer brain. <span className="font-semibold text-green-400">Two languages.</span>
          </h2>
          <p className="text-xl font-light text-blue-100 mb-10 max-w-2xl mx-auto">
            Hivenox is built for businesses operating across Australia, UAE and Saudi Arabia. CRM workflows and customer information can operate across Arabic and English, giving teams a shared platform regardless of the language they work in.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Arabic + English", "RTL-ready", "Bilingual customer communication", "Regional business ready"].map((chip, i) => (
              <span key={i} className="px-5 py-2 rounded-full bg-blue-800/80 border border-blue-500 text-blue-50 text-sm font-medium backdrop-blur-sm shadow-lg">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11. BUILT FOR THE WHOLE SALES JOURNEY */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6">
              From first conversation to <span className="font-semibold text-blue-700">long-term relationship.</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-blue-100 pl-8 space-y-12">
              {[
                { title: "Lead", desc: "Capture the relationship.", icon: Users },
                { title: "Qualification", desc: "Understand the opportunity.", icon: BrainCircuit },
                { title: "Deal", desc: "Move the opportunity through the pipeline.", icon: TrendingUp },
                { title: "Proposal", desc: "Connect the deal to the next commercial step.", icon: FileText },
                { title: "Invoice", desc: "Connect the customer relationship to finance.", icon: DollarSign },
                { title: "Support", desc: "Continue the relationship after the sale.", icon: LifeBuoy },
                { title: "Renewal", desc: "Identify the next opportunity.", icon: RefreshCcw }
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[45px] top-1 size-7 bg-white border-2 border-blue-400 rounded-full flex items-center justify-center group-hover:bg-blue-700 group-hover:border-blue-700 transition-colors shadow-sm">
                    <step.icon className="size-3.5 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-slate-600 font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg font-semibold text-slate-800 bg-slate-50 py-4 px-8 rounded-full inline-block border border-slate-200">
              CRM shouldn't stop when the deal closes.
            </p>
          </div>
        </div>
      </section>

      {/* 12. CRM FEATURES */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6">
              Everything your team needs to <span className="font-semibold text-blue-700">manage relationships.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Customer Records", desc: "A complete living record for every customer." },
              { title: "Contact Management", desc: "Keep customer and contact information organised." },
              { title: "Sales Pipeline", desc: "Manage opportunities through clearly defined stages." },
              { title: "Automated Follow-Ups", desc: "Keep conversations moving without relying on memory." },
              { title: "Reminders", desc: "Never lose track of the next action." },
              { title: "Deal Management", desc: "Track opportunities, commitments and progress." },
              { title: "Customer History", desc: "See conversations, deals, invoices and tickets together." },
              { title: "Forecasting", desc: "Understand future revenue through live pipeline data." },
              { title: "AI Sales", desc: "Let the AI Sales Agent work directly with your pipeline." },
              { title: "Connected Finance", desc: "Link customer activity with invoices and financial information." },
              { title: "Support Context", desc: "Give support teams the customer's full relationship history." },
              { title: "Analytics", desc: "Turn CRM activity into business intelligence." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all">
                <CheckCircle2 className="size-5 text-green-500 mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-sm font-light text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. WHY HIVENOX & 14. WHO IS IT FOR? */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          
          {/* WHY HIVENOX */}
          <div className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 mb-12 text-center">
              Make a small team feel like a <span className="font-semibold text-blue-700">large, well-drilled one.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "One Living Customer View", desc: "Everyone works from the same complete relationship history." },
                { title: "Pipelines That Move", desc: "Follow-ups and reminders keep opportunities progressing." },
                { title: "Selling, Not Updating", desc: "Less administrative work means more time for customers." },
                { title: "Connected to Everything", desc: "CRM data flows naturally into finance, operations and AI." }
              ].map((diff, i) => (
                <div key={i} className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl mb-4 border border-blue-200">
                    {i + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">{diff.title}</h4>
                  <p className="text-sm font-light text-slate-600">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WHO IS IT FOR? */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 mb-12 text-center">
              Built for teams that <span className="font-semibold text-blue-700">depend on relationships.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Sales Teams", desc: "Keep every opportunity moving and every follow-up visible." },
                { title: "Founders & Owners", desc: "See the entire customer and pipeline picture without chasing reports." },
                { title: "Service Businesses", desc: "Keep customer relationships, projects and financial activity connected." },
                { title: "Growing Teams", desc: "Give a small team the operational discipline of a much larger sales organisation." },
                { title: "Multi-Department", desc: "Give sales, finance and support one shared customer context." }
              ].map((target, i) => (
                <div key={i} className={`p-8 rounded-2xl border ${i === 3 || i === 4 ? "md:col-span-1.5" : ""} bg-slate-50 border-slate-200 hover:bg-white hover:shadow-lg transition-all`}>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">{target.title}</h4>
                  <p className="text-slate-600 font-light">{target.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 flex justify-center gap-4">
             <a href="/contact" className="px-8 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition-colors shadow-lg">Contact Sales</a>
             <a href="/book" className="px-8 py-3 bg-white text-blue-700 border border-blue-200 font-medium rounded-full hover:bg-blue-50 transition-colors">Book a Demo</a>
          </div>
        </div>
      </section>

      {/* 15. CRM + ERP */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
            CRM is where the customer starts. <br/>
            <span className="font-semibold text-blue-400">The platform is where the relationship continues.</span>
          </h2>
          <p className="text-lg font-light text-slate-300 mb-16 max-w-3xl mx-auto">
            Hivenox CRM is one part of the wider Hivenox ERP ecosystem. One customer. One connected journey.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
            {[
              { label: "CRM", sub: "Customer relationship" },
              { label: "SalesFlow", sub: "Quotes & proposals" },
              { label: "Books", sub: "Invoices & finance" },
              { label: "Desk", sub: "Support" },
              { label: "Insights AI", sub: "Business intelligence" }
            ].map((app, i) => (
              <React.Fragment key={i}>
                <div className={`p-4 rounded-xl border w-full md:w-auto ${i === 0 ? "bg-blue-700 border-blue-500 shadow-lg shadow-blue-500/20" : "bg-slate-800 border-slate-700"}`}>
                  <p className="font-bold text-lg mb-1">{app.label}</p>
                  <p className="text-xs text-slate-400">{app.sub}</p>
                </div>
                {i < 4 && <ArrowRight className="hidden md:block size-5 text-blue-500 shrink-0" />}
                {i < 4 && <ArrowDown className="block md:hidden size-5 text-blue-500 shrink-0" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 16. FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              { q: "What makes Hivenox CRM different from a traditional CRM?", a: "Hivenox CRM is part of a connected business platform. Customer information can flow into finance, operations and AI instead of remaining isolated inside the CRM." },
              { q: "Can I see all customer activity in one place?", a: "Yes. The CRM is designed around a single living customer record containing conversations, deals, invoices and tickets." },
              { q: "Can Hivenox CRM automate follow-ups?", a: "Yes. Automated follow-ups and reminders help keep deals moving and prevent opportunities from being forgotten." },
              { q: "Does Hivenox CRM include AI?", a: "The wider HIVENOX platform includes AI capabilities that operate on CRM data, including the AI Sales Agent and Insights AI." },
              { q: "Is Hivenox CRM bilingual?", a: "Yes. The product is positioned as bilingual, supporting Arabic and English." },
              { q: "Can CRM connect with finance?", a: "Yes. CRM is part of the shared HIVENOX platform and its customer information can connect with financial activity." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <div className={`shrink-0 ml-4 p-1 rounded-full bg-slate-100 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>
                    <ArrowDown className="size-4 text-blue-700" />
                  </div>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-slate-600 font-light">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. FINAL CTA */}
      <section className="py-24 bg-white px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[90rem]">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-6 py-20 sm:px-12 sm:py-24 text-center shadow-2xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-green-300 bg-green-900/30 px-4 py-1.5 rounded-full border border-green-500/30">
                YOUR CUSTOMERS, FINALLY CONNECTED
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
                Make every customer relationship count.
              </h2>
              <p className="mb-10 text-lg font-light leading-relaxed text-blue-100 max-w-2xl mx-auto">
                One living customer view. Pipelines that move themselves. Forecasts you can trust.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/start-free" className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-blue-700 transition-all hover:bg-green-50 hover:text-green-700 hover:shadow-xl hover:-translate-y-1">
                  Start Free
                </a>
                <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-blue-400/50 bg-transparent px-10 text-lg font-medium text-white transition-colors hover:border-white hover:bg-white/10">
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}