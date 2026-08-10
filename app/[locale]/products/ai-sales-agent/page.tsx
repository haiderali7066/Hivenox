"use client";

import React from "react";
import { 
  Bot, Clock, Globe2, MessageSquare, CheckCircle2, ArrowRight, 
  TrendingUp, Calendar, Users, Database, Zap, Sparkles, 
  ChevronRight, Workflow, UserCheck, BarChart3, MapPin,
  Target
} from "lucide-react";

export default function AISalesAgentPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Decorative Gradients (Purple used sparingly as a touch) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-bold uppercase tracking-widest text-blue-700 shadow-sm transition-transform hover:scale-105">
                <Sparkles className="size-4 text-blue-700" />
                AI WORKFORCE · SALES
              </div>
              
              <h1 className="mb-6 text-5xl font-light tracking-tight text-slate-900 lg:text-7xl leading-[1.1]">
                Your sales team just got a <br />
                <span className="font-semibold text-blue-700">tireless new member.</span>
              </h1>
              
              <p className="mb-6 max-w-2xl text-xl font-light leading-relaxed text-slate-600">
                Hivenox AI Sales Agent prospects, qualifies, personalises outreach, follows up and books meetings — <span className="font-medium text-slate-800">24/7, in Arabic or English.</span> It works directly on your live Hivenox pipeline, keeping every interaction connected to reality.
              </p>

              {/* SEO / Geo Optimization Banner */}
              <div className="flex items-start gap-3 mb-10 text-sm font-medium text-slate-500 bg-white/80 py-3 px-5 rounded-2xl border border-slate-200/60 shadow-sm w-full max-w-2xl">
                 <MapPin className="size-5 text-blue-700 shrink-0 mt-0.5" />
                 <p>Powering enterprise sales pipelines seamlessly across the <strong>UAE, Saudi Arabia, Australia</strong>, and our technology hub in <strong>Lahore, Pakistan</strong>.</p>
              </div>

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
                {["24/7 prospecting", "Arabic + English", "Personalised outreach", "CRM-connected"].map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-blue-700" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative w-full h-[35rem] rounded-[3rem] overflow-hidden shadow-2xl group border-[8px] border-white">
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2850&auto=format&fit=crop" 
                alt="Modern AI Sales Team Dashboard" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
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
                Your pipeline doesn't stop <br/>
                <span className="font-semibold text-blue-200">when your team goes home.</span>
              </h2>
              <p className="text-xl font-light text-blue-100">
                A lead comes in. Someone needs to qualify it, personalise the message, follow up, and book the meeting. Meanwhile, your sales team is busy with existing opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { title: "Leads Go Cold", desc: "Interested prospects don't always get contacted at the exact right moment." },
                { title: "Missed Follow-Ups", desc: "Busy salespeople simply cannot manually chase every single opportunity." },
                { title: "Generic Outreach", desc: "Scaling deep personalisation manually takes too much time." },
                { title: "Pipeline Admin", desc: "Sales teams spend hours updating CRM systems instead of actually selling." }
              ].map((pain, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-blue-800/60 border border-blue-500/50 backdrop-blur-md transition-all duration-300 hover:bg-blue-600/50 hover:-translate-y-2 hover:shadow-xl">
                  {/* Subtle purple touch on the icon background */}
                  <div className="size-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6">
                    <Clock className="size-6 text-purple-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{pain.title}</h3>
                  <p className="text-base font-light text-blue-100">{pain.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center space-y-8">
              <p className="text-2xl font-medium text-white text-center">
                The cost isn't just missed leads. It's the revenue hiding inside them.
              </p>
              <div className="flex gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-blue-700 transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1">
                  Stop Losing Leads
                </a>
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-blue-400 bg-transparent px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1">
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. THE FLOW (White Background)
            ========================================================================= */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                From prospect to meeting — <br/>
                <span className="font-semibold text-blue-700">without the manual chasing.</span>
              </h2>
              <p className="text-xl font-light text-slate-600 mb-8">
                Hivenox AI Sales Agent operates across the full early sales journey. The agent keeps working through the pipeline while your sales team focuses on conversations that actually need a human.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-6 py-2 text-base font-bold text-blue-700">
                <Zap className="size-5" /> Prospecting that never sleeps.
              </div>
            </div>

            {/* Visual Flow Container */}
            <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
              {[
                { step: "Prospect", icon: Globe2 },
                { step: "Qualify", icon: UserCheck },
                { step: "Personalise", icon: Sparkles },
                { step: "Reach Out", icon: MessageSquare },
                { step: "Follow Up", icon: Clock },
                { step: "Book Meeting", icon: Calendar },
                { step: "CRM Updated", icon: Database }
              ].map((item, i, arr) => (
                <React.Fragment key={i}>
                  <div className="group flex flex-col items-center z-10 w-full md:w-auto">
                    <div className="size-16 md:size-20 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:border-blue-700 group-hover:bg-blue-700 group-hover:scale-110 group-hover:shadow-lg">
                      <item.icon className="size-7 md:size-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="mt-4 text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors text-center w-24">
                      {item.step}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden md:block h-0.5 flex-1 bg-slate-200 -mt-8">
                      <div className="h-full bg-blue-700 w-0 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  )}
                  {i < arr.length - 1 && (
                    <ChevronRight className="md:hidden size-8 text-slate-300 my-2" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:-translate-y-1">
                Automate Your Flow
              </a>
              <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 px-8 text-base font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50 hover:-translate-y-1">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. PERSONALISATION (Slate Background + UI Mockup)
            ========================================================================= */}
        <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Personalised enough to feel human. <br />
                  <span className="font-semibold text-blue-700">Scalable enough to run all day.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8 leading-relaxed">
                  The AI Sales Agent doesn't rely on sending the exact same message to every prospect. It uses available customer and CRM context to personalise outreach while maintaining the consistency needed to work at scale.
                </p>
                <div className="p-6 bg-white border border-slate-200 rounded-[2rem] shadow-sm mb-10">
                  <p className="text-lg font-bold text-slate-800 mb-2">Scale the outreach without scaling the workload.</p>
                  <p className="text-slate-500">If there is no response, the agent seamlessly continues the conversation according to your configured workflow.</p>
                </div>
                
                <div className="flex gap-4">
                  <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">
                    See It In Action
                  </a>
                  <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">
                    Get Pricing
                  </a>
                </div>
              </div>

              {/* UI Mockup Graphic */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-700/5 rounded-[3rem] transform rotate-3 scale-105"></div>
                <div className="relative bg-white border border-slate-200 p-8 rounded-[3rem] shadow-2xl flex flex-col gap-6">
                  
                  {/* Prospect Context Box */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="size-6 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">ABC Healthcare</h4>
                        <p className="text-sm text-slate-500">New Prospect Context</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white p-3 rounded-xl border border-slate-100">
                        <span className="block text-slate-400 mb-1">Industry</span>
                        <span className="font-semibold text-slate-700">Healthcare</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-100">
                        <span className="block text-slate-400 mb-1">Interest</span>
                        <span className="font-semibold text-slate-700">CRM Platform</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-100 col-span-2">
                        <span className="block text-slate-400 mb-1">Previous Interaction</span>
                        <span className="font-semibold text-slate-700">Viewed Demo Page (2 days ago)</span>
                      </div>
                    </div>
                  </div>

                  <ArrowRight className="mx-auto size-8 text-blue-300 rotate-90" />

                  {/* AI Message Box */}
                  <div className="bg-blue-700 rounded-2xl p-6 shadow-lg text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Bot className="size-6 text-blue-200" />
                      <span className="font-semibold">AI Sales Agent</span>
                      <span className="ml-auto text-xs bg-blue-800 px-3 py-1 rounded-full border border-blue-500">Personalised Sent</span>
                    </div>
                    <p className="text-blue-50 leading-relaxed font-light">
                      "Hi there, noticed your team at ABC Healthcare was checking out our CRM demo. Given the unique compliance needs in the healthcare sector, I'd love to show you how our platform handles data security..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. CRM INTEGRATION (Image & Text Split)
            ========================================================================= */}
        <section className="py-24 bg-white relative">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
              
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-700/10 rounded-[3rem] transform -rotate-2 scale-105 transition-transform duration-500 group-hover:rotate-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2850&auto=format&fit=crop" 
                  alt="CRM Dashboard Analytics" 
                  className="relative z-10 w-full h-[35rem] object-cover rounded-[3rem] shadow-xl border-4 border-white transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-slate-600">
                  <Database className="size-4 text-blue-700" />
                  CONNECTED TO HIVENOX CRM
                </div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Not a disconnected AI tool. <br />
                  <span className="font-semibold text-blue-700">Part of your sales system.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8 leading-relaxed">
                  The AI Sales Agent works directly on the live Hivenox pipeline and CRM context. That means it operates with the exact information your sales team is already using. 
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 mb-10 flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-1 text-center sm:text-left">
                    <p className="font-bold text-slate-900 mb-1">Hivenox CRM</p>
                    <p className="text-sm text-slate-500">Leads, Deals, Context</p>
                  </div>
                  <Workflow className="size-8 text-blue-700 shrink-0 mx-auto" />
                  <div className="flex-1 text-center sm:text-right">
                    <p className="font-bold text-blue-700 mb-1">AI Agent Works</p>
                    <p className="text-sm text-slate-500">Prospects, Follows Up, Books</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 text-lg font-bold text-slate-800 mb-10 border-l-4 border-blue-700 pl-4">
                  The AI doesn't work beside your CRM. It works with it.
                </div>

                <div className="flex gap-4">
                  <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">
                    Integrate Now
                  </a>
                  <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">
                    Learn More
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. AI WORKS. HUMANS CLOSE.
            ========================================================================= */}
        <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 my-10 overflow-hidden relative shadow-2xl">
          {/* Touch of Purple for background depth */}
          <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-blue-800 rounded-full blur-[120px] opacity-40"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-purple-600 rounded-full blur-[150px] opacity-20"></div>

          <div className="mx-auto max-w-[85rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                Let AI do the chasing. <br />
                <span className="font-semibold text-blue-400">Let your team do the selling.</span>
              </h2>
              <p className="text-xl font-light text-slate-300">
                The goal isn't to replace your sales team. It's to remove the repetitive work that prevents them from spending time with qualified opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
              
              {/* AI Handles */}
              <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-md rounded-[2.5rem] p-10 transition-transform duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700">
                  <div className="size-14 bg-blue-600 rounded-full flex items-center justify-center">
                    <Bot className="size-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold">AI Handles</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    { t: "Prospecting", d: "Find and work opportunities." },
                    { t: "Qualification", d: "Identify prospects worth pursuing." },
                    { t: "Outreach", d: "Start personalised conversations." },
                    { t: "Follow-Ups", d: "Keep opportunities moving." },
                    { t: "Meeting Booking", d: "Turn interest into scheduled conversations." }
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="block font-bold text-blue-300 text-lg mb-1">{item.t}</span>
                      <span className="text-slate-400">{item.d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Humans Handle */}
              <div className="bg-blue-700 border border-blue-500 rounded-[2.5rem] p-10 shadow-2xl shadow-blue-900/50 transition-transform duration-300 hover:-translate-y-2 md:translate-y-6">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-blue-500">
                  <div className="size-14 bg-white rounded-full flex items-center justify-center">
                    <Users className="size-7 text-blue-700" />
                  </div>
                  <h3 className="text-3xl font-semibold">Humans Handle</h3>
                </div>
                <ul className="space-y-6 text-xl font-light text-blue-50">
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="size-6 text-white" /> Complex conversations
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="size-6 text-white" /> Relationship building
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="size-6 text-white" /> Negotiation
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="size-6 text-white" /> Closing the deal
                  </li>
                </ul>
                <div className="mt-12 bg-blue-800/50 p-6 rounded-2xl border border-blue-600">
                  <p className="text-lg font-semibold text-white text-center">AI creates more opportunities for your humans to close.</p>
                </div>
              </div>

            </div>

            <div className="flex justify-center gap-4 mt-12">
              <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-blue-700 transition-all hover:bg-slate-100 hover:shadow-lg hover:-translate-y-1">
                Empower Your Team
              </a>
              <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-600 px-10 text-lg font-medium text-white transition-all hover:border-white hover:bg-white/10 hover:-translate-y-1">
                Speak to an Expert
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. 24/7 + ARABIC & ENGLISH (Light Blue Section)
            ========================================================================= */}
        <section className="py-24 bg-blue-50">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Your pipeline doesn't have office hours. <br />
                  <span className="font-semibold text-blue-700">Neither does your AI.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8">
                  The AI Sales Agent keeps prospecting and following up beyond the traditional working day. It engages customers seamlessly in <strong className="text-slate-800">Arabic or English</strong>, helping regional and global businesses reach prospects in the language they prefer.
                </p>
                
                <p className="text-2xl font-medium text-blue-700 mb-10 border-l-4 border-blue-700 pl-4">
                  While your team sleeps, your pipeline keeps moving.
                </p>

                <div className="flex gap-4">
                  <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">
                    Start 24/7 Selling
                  </a>
                  <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-blue-200 bg-white px-8 text-base font-medium text-blue-700 transition-all hover:border-blue-700 hover:-translate-y-1">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "24/7 Operation", desc: "Prospecting and follow-up continues around the clock.", icon: Clock },
                  { title: "Arabic Support", desc: "Engage Arabic-speaking prospects natively.", icon: Globe2 },
                  { title: "English Support", desc: "Engage English-speaking prospects globally.", icon: MessageSquare },
                  { title: "Consistent", desc: "Every prospect receives timely, structured attention.", icon: CheckCircle2 }
                ].map((card, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-700 hover:-translate-y-2 group">
                    <div className="size-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                      <card.icon className="size-7 text-blue-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            8. WHY HIVENOX (Grid)
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                A tireless sales member that <br/>
                <span className="font-semibold text-blue-700">never forgets the next follow-up.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {[
                { title: "Prospecting That Never Sleeps", desc: "The agent continuously works on finding and engaging opportunities." },
                { title: "Personalised Outreach at Scale", desc: "Reach more prospects without turning every message into a manual task." },
                { title: "Follow-Ups That Actually Happen", desc: "The agent doesn't forget the next step. Every lead is nurtured." },
                { title: "Built Into Your CRM", desc: "It operates on live pipeline and customer context rather than disconnected data." }
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-blue-200 group">
                  <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-700 transition-colors">
                    <Target className="size-6 text-blue-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-slate-800 mb-8">More qualified conversations. Less manual chasing.</p>
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
            9. FINAL CTA (Full Width Blue)
            ========================================================================= */}
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[4rem] bg-blue-700 px-8 py-24 sm:px-16 sm:py-32 text-center shadow-2xl group">
              
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[40rem] w-[40rem] rounded-full bg-blue-600 blur-[100px] opacity-60 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[40rem] w-[40rem] rounded-full bg-blue-800 blur-[120px] opacity-60 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              
              {/* Purple touch for CTA background aesthetic only */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

              <div className="relative z-10 mx-auto max-w-4xl">
                <span className="mb-6 inline-block text-sm font-bold uppercase tracking-widest text-blue-100 bg-blue-900/50 px-6 py-2 rounded-full border border-blue-500/30">
                  YOUR NEW SALES TEAM MEMBER
                </span>
                
                <h2 className="mb-8 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                  Let your pipeline work while you do.
                </h2>
                
                <p className="mb-12 text-2xl font-light leading-relaxed text-blue-100 max-w-3xl mx-auto">
                  Prospecting, qualification, personalised outreach, follow-ups and meeting booking — <strong className="text-white">running 24/7 in Arabic or English.</strong>
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
                  More conversations. More opportunities. More time for your team to close.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}