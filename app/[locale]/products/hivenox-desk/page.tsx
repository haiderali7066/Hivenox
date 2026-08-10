"use client";

import { 
  Headphones, MessageSquare, Phone, Mail, Globe, Cpu, Users, 
  CheckCircle2, ArrowRight, Shield, Clock, Sparkles, Layers, Zap, 
  ArrowDown, RefreshCw, HeartHandshake, Database, BarChart3
} from "lucide-react";
import React from "react";

export default function HivenoxDeskPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Glow Accents */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-base font-bold uppercase tracking-widest text-blue-700 shadow-sm">
                <Sparkles className="size-5 text-purple-600" />
                PRODUCTS · HIVENOX DESK
              </div>
              
              <h1 className="mb-6 text-5xl font-light tracking-tight text-slate-900 lg:text-7xl leading-tight">
                Turn customer support from a source of stress into a <span className="font-semibold text-blue-700">source of loyalty.</span>
              </h1>
              
              <p className="mb-6 max-w-2xl text-xl font-light leading-relaxed text-slate-700">
                Every conversation — email, chat, social and phone — flows into one tidy, fast-moving queue, automatically routed with the full context of the customer attached.
              </p>

              <div className="mb-8 text-base font-medium text-slate-500 bg-white/80 py-3 px-6 rounded-2xl border border-slate-200/60 backdrop-blur-sm w-full max-w-2xl shadow-sm">
                <p className="text-slate-600 font-normal">Nothing gets lost. Nothing gets repeated. Response times drop because the friction is gone.</p>
              </div>

              {/* Trust points */}
              <div className="flex flex-wrap gap-3 mb-10">
                {["Omnichannel", "AI-powered", "Bilingual", "24/7"].map((point, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium">
                    <CheckCircle2 className="size-4 text-purple-600" />
                    {point}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 w-full">
                <a href="/book" className="group flex-1 sm:flex-none inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-1">
                  Book a Demo
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/contact" className="group flex-1 sm:flex-none inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50 hover:-translate-y-1">
                  Start Free
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative w-full h-[30rem] lg:h-[40rem] rounded-[2rem] overflow-hidden shadow-2xl group border border-slate-200">
              <div className="absolute inset-0 bg-blue-700/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2850&auto=format&fit=crop" 
                alt="Customer support team managing helpdesk queues" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. THE PROBLEM — Support Shouldn't Feel Like Firefighting
            ========================================================================= */}
        <section className="bg-blue-700 py-24 relative overflow-hidden rounded-t-[3rem] text-white">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="mb-4 inline-block text-base font-bold uppercase tracking-widest text-blue-100 border border-blue-500 bg-blue-800/50 px-4 py-2 rounded-full">
                  The Problem
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                  Your team shouldn't be drowning in <span className="font-semibold text-blue-200">scattered messages.</span>
                </h2>
                <div className="space-y-4 text-lg font-light text-blue-50 mb-8">
                  <p>A customer sends an email. Then follows up on chat. Someone else receives a phone call. Another team member sees a social message.</p>
                  <p className="font-semibold text-white">Nobody has the complete context. The customer repeats themselves. Your team searches for answers. And response times climb.</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a href="/book" className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-medium text-blue-700 transition-all duration-300 hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1">
                    Fix Your Support Queue
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border border-blue-400 bg-blue-800/50 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800">
                    Talk to Support
                  </a>
                </div>
              </div>

              {/* Four pain points grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Scattered Conversations", desc: "Customer messages live across different channels." },
                  { title: "Lost Context", desc: "Agents don't always have the customer's complete history." },
                  { title: "Repeated Questions", desc: "Customers explain the same problem more than once." },
                  { title: "Slow Responses", desc: "Your team spends time finding information instead of helping customers." }
                ].map((pain, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-blue-800/40 border border-blue-600 backdrop-blur-sm transition-all duration-300 hover:bg-blue-800 hover:scale-[1.02] hover:shadow-xl">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="size-2 rounded-full bg-purple-400"></span>
                      {pain.title}
                    </h3>
                    <p className="text-base font-light text-blue-100">{pain.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center border-t border-blue-600/60 pt-8">
              <p className="text-2xl font-light italic text-blue-100">
                "Support should feel calm for your team — and effortless for your customer."
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. ONE TIDY SUPPORT QUEUE
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Every conversation. <span className="font-semibold text-blue-700">One queue.</span>
              </h2>
              <p className="text-xl font-light text-slate-600 mb-8">
                Bring your customer conversations together and automatically route them to the right person with the right context.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-800 shadow-md">
                  Book a Demo
                </a>
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-transparent px-8 text-base font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700">
                  Contact Sales
                </a>
              </div>
            </div>

            {/* Channels flow visualization */}
            <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Mail, label: "Email" },
                  { icon: MessageSquare, label: "Chat" },
                  { icon: Globe, label: "Social" },
                  { icon: Phone, label: "Phone" }
                ].map((ch, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm flex flex-col items-center">
                    <ch.icon className="size-8 text-blue-700 mb-2" />
                    <span className="font-semibold text-slate-800">{ch.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center my-6">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 animate-bounce">
                  <ArrowDown className="size-6" />
                </div>
              </div>

              <div className="bg-blue-700 text-white p-8 rounded-3xl text-center shadow-xl mb-8">
                <h3 className="text-2xl font-semibold mb-2">HIVENOX DESK</h3>
                <p className="text-blue-100 text-lg">One fast-moving support queue</p>
              </div>

              <div className="flex justify-center my-6">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                  <ArrowDown className="size-6" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 font-semibold text-slate-800 shadow-sm">
                  Right Person Assigned
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 font-semibold text-slate-800 shadow-sm">
                  Full Customer Context Attached
                </div>
              </div>

              <div className="mt-12 text-center border-t border-slate-200 pt-8">
                <p className="text-lg font-light text-slate-600 mb-4">
                  Instead of switching between inboxes and applications, your support team works from one organised queue.
                </p>
                <div className="inline-block bg-purple-50 border border-purple-200 text-purple-700 font-semibold px-6 py-2 rounded-full text-sm">
                  Nothing gets lost. Nothing gets repeated.
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. FULL CUSTOMER CONTEXT
            ========================================================================= */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <span className="mb-4 inline-block text-base font-bold uppercase tracking-widest text-blue-700 bg-blue-100 px-4 py-2 rounded-full">
                  Unified Intelligence
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Give every ticket the <span className="font-semibold text-blue-700">whole story.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-6">
                  Because Hivenox Desk lives on the HIVENOX platform, a support ticket doesn't arrive alone. It arrives with the customer's existing business context.
                </p>
                <p className="text-lg font-medium text-slate-800 mb-8">
                  Your team doesn't need to ask the customer what happened. They already know.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 shadow-lg">
                    Book a Demo
                  </a>
                  <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700">
                    Start Free
                  </a>
                </div>
              </div>

              {/* Context cards breakdown */}
              <div className="space-y-4">
                {[
                  { source: "CRM", detail: "Customer history attached automatically" },
                  { source: "Inventory", detail: "Recent product orders and tracking details visible" },
                  { source: "Books", detail: "Invoices and financial standings accessible instantly" },
                  { source: "Desk", detail: "Active support conversation managed in real-time" }
                ].map((card, i) => (
                  <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center justify-between transition-all duration-300 hover:border-blue-700 hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 font-bold">
                        {card.source.substring(0, 3)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{card.source}</h3>
                        <p className="text-sm font-light text-slate-600">{card.detail}</p>
                      </div>
                    </div>
                    <CheckCircle2 className="size-6 text-purple-600 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Example Card Box */}
            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex justify-between items-center">
                <span>Live Ticket Preview Example</span>
                <span className="text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Active Context</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-500 mb-1">Customer</span>
                  <span className="font-semibold text-slate-800">ABC Company</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-500 mb-1">Previous Chats</span>
                  <span className="font-semibold text-blue-700">Available (3)</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-500 mb-1">Orders</span>
                  <span className="font-semibold text-blue-700">View History</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-500 mb-1">Invoices</span>
                  <span className="font-semibold text-blue-700">Paid & Verified</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. AI ALONGSIDE HUMANS
            ========================================================================= */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/20"></div>
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-purple-400 bg-purple-950/80 px-4 py-2 rounded-full border border-purple-800">
                AI Support Agent
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                Let AI handle the routine. <br />
                <span className="font-semibold text-blue-400">Let humans handle what matters.</span>
              </h2>
              <p className="text-xl font-light text-slate-300 mb-8">
                The Hivenox AI Support Agent works alongside your support team, resolving routine tickets before a human is needed. When something requires human attention, it is handed over with the context intact.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-500 shadow-xl">
                  Book a Demo
                </a>
                <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800 px-8 text-lg font-medium text-slate-200 transition-all duration-300 hover:bg-slate-700">
                  Start Free
                </a>
              </div>
            </div>

            {/* Workflow Pipeline */}
            <div className="max-w-4xl mx-auto bg-slate-800/80 border border-slate-700 rounded-[3rem] p-8 md:p-12 shadow-2xl backdrop-blur-md mb-16">
              <div className="space-y-6 text-center">
                <div className="inline-block bg-slate-700/80 border border-slate-600 px-6 py-3 rounded-2xl text-white font-medium">
                  Customer asks a question
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="size-6 text-blue-400 animate-bounce" />
                </div>
                <div className="bg-blue-950 border border-blue-800 p-6 rounded-2xl max-w-lg mx-auto text-center">
                  <Cpu className="size-8 text-blue-400 mx-auto mb-2" />
                  <h3 className="text-xl font-semibold text-white">AI Support Agent</h3>
                  <p className="text-sm font-light text-blue-200">Understands + resolves routine request automatically</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-700">
                  <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700 text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">If Routine</span>
                    <h4 className="font-semibold text-white">Resolved Instantly</h4>
                    <p className="text-sm font-light text-slate-400 mt-1">Zero human intervention needed, full log saved.</p>
                  </div>
                  <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700 text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1">If Complex</span>
                    <h4 className="font-semibold text-white">Human Agent Handover</h4>
                    <p className="text-sm font-light text-slate-400 mt-1">Receives full context instantly for rapid resolution.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                "Routine tickets handled automatically",
                "Complex issues handed to humans",
                "Context stays intact",
                "Support remains consistent"
              ].map((pt, i) => (
                <div key={i} className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200 font-medium">{pt}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            6. FASTER, CALMER SUPPORT
            ========================================================================= */}
        <section className="py-24 bg-blue-700 text-white relative">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-blue-100 bg-blue-800 px-4 py-2 rounded-full border border-blue-500">
                Outcomes
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                Less friction for your team. <br />
                <span className="font-semibold text-blue-200">Better experiences for your customers.</span>
              </h2>
              <p className="text-xl font-light text-blue-50 mb-8">
                When conversations are unified, automatically routed and supported by AI, your team spends less time searching, switching systems and repeating work.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-medium text-blue-700 transition-all duration-300 hover:bg-slate-100 shadow-lg">
                  Book a Demo
                </a>
                <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border border-blue-300 bg-blue-800/60 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800">
                  Contact Sales
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { title: "Faster Responses", desc: "Customers get help sooner with intelligent routing." },
                { title: "Less Repetition", desc: "The full conversation and customer history stay attached." },
                { title: "Less Team Friction", desc: "Agents work from one organised, tidy queue." },
                { title: "More Consistent", desc: "The same context follows the customer through the journey." }
              ].map((out, i) => (
                <div key={i} className="bg-blue-800/50 border border-blue-600 p-8 rounded-[2rem] backdrop-blur-sm transition-all duration-300 hover:bg-blue-800 hover:-translate-y-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">{out.title}</h3>
                  <p className="text-base font-light text-blue-100">{out.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-blue-800/80 border border-blue-600 rounded-[2rem] p-8 max-w-4xl mx-auto">
              <p className="text-xl font-light italic text-white">
                "Support that feels instant and personal to the customer — and manageable and calm for your team."
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            7. BILINGUAL & AROUND THE CLOCK
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Support that doesn't stop <span className="font-semibold text-blue-700">when your team does.</span>
              </h2>
              <p className="text-xl font-light text-slate-600 mb-8">
                Hivenox Desk combines bilingual support with AI-powered availability so customers can receive consistent assistance across the day.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-800 shadow-md">
                  Book a Demo
                </a>
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-transparent px-8 text-base font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700">
                  Start Free
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {[
                { title: "Arabic + English", desc: "Support customers bilingually with full regional fluency.", icon: Globe },
                { title: "Around the Clock", desc: "AI can handle routine support beyond normal team hours seamlessly.", icon: Clock },
                { title: "Consistent", desc: "The customer experience stays steady even when support volume spikes.", icon: Shield }
              ].map((feat, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-10 rounded-[2rem] text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300">
                  <div className="size-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <feat.icon className="size-8 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">{feat.title}</h3>
                  <p className="text-base font-light text-slate-600">{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <span className="inline-block bg-purple-50 border border-purple-200 text-purple-700 font-semibold px-8 py-3 rounded-full text-lg">
                Bilingual. Around the clock. Consistent no matter how busy you get.
              </span>
            </div>

          </div>
        </section>

        {/* =========================================================================
            8. FROM SUPPORT TO LOYALTY
            ========================================================================= */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-4 py-2 rounded-full border border-purple-200">
                Customer Advocacy
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Great support doesn't just solve problems. <span className="font-semibold text-blue-700">It creates advocates.</span>
              </h2>
              <p className="text-xl font-light text-slate-600 mb-6">
                A customer contacts you because something went wrong, something is unclear or they need help. What happens next determines how they remember your business.
              </p>
              <p className="text-lg font-medium text-slate-800 mb-8">
                Hivenox Desk helps turn that moment into a positive customer experience.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-800 shadow-md">
                  Book a Demo
                </a>
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700">
                  Start Free
                </a>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm mb-16">
              <div className="space-y-4">
                {[
                  "Customer reaches out through any channel",
                  "Conversation captured immediately in queue",
                  "Right person receives it with AI routing",
                  "Full customer context available instantly",
                  "AI resolves routine issues; human handles complex ones",
                  "Customer feels looked after and valued"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="size-8 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                      0{i + 1}
                    </div>
                    <span className="font-medium text-slate-800 text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-900">
                Loyalty, <span className="text-purple-600">not stress.</span>
              </h3>
            </div>

          </div>
        </section>

        {/* =========================================================================
            9. FINAL CTA
            ========================================================================= */}
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[3rem] bg-blue-700 px-8 py-24 sm:px-16 sm:py-32 text-center shadow-2xl group text-white">
              
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[40rem] w-[40rem] rounded-full bg-blue-600 blur-[100px] opacity-50 pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[40rem] w-[40rem] rounded-full bg-purple-600 blur-[120px] opacity-30 pointer-events-none" />
              
              <div className="relative z-10 mx-auto max-w-4xl">
                <span className="mb-6 inline-block text-sm font-bold uppercase tracking-widest text-blue-100 bg-blue-900/50 px-6 py-2 rounded-full border border-blue-500/30">
                  CUSTOMER SUPPORT, WITHOUT THE CHAOS
                </span>
                <h2 className="mb-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                  Turn every support conversation into an opportunity to build loyalty.
                </h2>
                <p className="mb-10 text-xl font-light leading-relaxed text-blue-100 max-w-3xl mx-auto">
                  One tidy queue. Full customer context. AI alongside humans. Bilingual, around the clock.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 mb-10 w-full">
                  <a href="/book" className="group flex-1 sm:flex-none inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-xl font-bold text-blue-700 transition-all duration-300 hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-1">
                    Book a Demo
                    <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="/contact" className="group flex-1 sm:flex-none inline-flex h-16 items-center justify-center rounded-full border-2 border-blue-300 bg-transparent px-10 text-xl font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-1">
                    Start Free
                  </a>
                </div>
                
                <p className="text-lg font-medium text-blue-200 italic">
                  Make support calmer for your team — and better for your customers.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}