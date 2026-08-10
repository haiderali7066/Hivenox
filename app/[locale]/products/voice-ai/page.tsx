"use client";

import React from "react";
import { 
  Bot, Clock, Globe2, MessageSquare, CheckCircle2, ArrowRight, 
  Database, Zap, Sparkles, ChevronRight, Workflow, MapPin,
  Target, PhoneCall, Mic, Volume2, Headphones, Users, Server,
  BrainCircuitIcon
} from "lucide-react";

export default function HivenoxVoiceAIPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Decorative Gradients (Purple touch used sparingly) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-bold uppercase tracking-widest text-blue-700 shadow-sm transition-transform hover:scale-105">
                <Mic className="size-4 text-blue-700" />
                PRODUCTS · VOICE AI
              </div>
              
              <h1 className="mb-6 text-5xl font-light tracking-tight text-slate-900 lg:text-7xl leading-[1.1]">
                AI that speaks <br />
                <span className="font-semibold text-blue-700">like a person.</span>
              </h1>
              
              <p className="mb-6 max-w-2xl text-xl font-light leading-relaxed text-slate-600">
                Hivenox Voice AI lets your business have natural, human-sounding conversations with customers and teams — <span className="font-medium text-slate-800">in Arabic or English, around the clock.</span>
              </p>

              <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-slate-500">
                From answering questions to handling routine conversations, Voice AI gives your business a voice that is always available, consistent and connected to the Hivenox platform.
              </p>

              {/* SEO / Geo Optimization Banner */}
              <div className="flex items-start gap-3 mb-10 text-sm font-medium text-slate-600 bg-white/80 py-4 px-6 rounded-2xl border border-slate-200/60 shadow-sm w-full max-w-2xl transition-all hover:border-blue-300 hover:shadow-md">
                 <MapPin className="size-5 text-blue-700 shrink-0 mt-0.5" />
                 <p>Powering enterprise voice support seamlessly across the <strong>UAE, Saudi Arabia, Australia</strong>.</p>
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
                {["Human-sounding", "Arabic + English", "24/7 availability", "AI-powered", "Connected to Hivenox"].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 group cursor-default">
                    <CheckCircle2 className="size-4 text-blue-700 group-hover:scale-125 transition-transform" />
                    <span className="group-hover:text-blue-700 transition-colors">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative w-full h-[40rem] rounded-[3rem] overflow-hidden shadow-2xl group border-[8px] border-white">
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {/* Subtle purple glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/30 blur-[80px] z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2850&auto=format&fit=crop" 
                alt="Modern AI Voice Support" 
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
                Every call matters. <br/>
                <span className="font-semibold text-blue-200">But your team can't answer everything.</span>
              </h2>
              <p className="text-xl font-light text-blue-100">
                A customer calls after hours. Someone needs an answer immediately. Another wants an update. A team member is busy. The phone keeps ringing...
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { title: "Missed Calls", desc: "Customers can't always reach someone when they need help.", icon: PhoneCall },
                { title: "Limited Availability", desc: "Human teams have working hours and finite capacity.", icon: Clock },
                { title: "Repetitive Conversations", desc: "The same questions consume valuable team time.", icon: Workflow },
                { title: "Inconsistent Response", desc: "Customers may wait depending on when they call.", icon: Target }
              ].map((pain, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-blue-800/60 border border-blue-500/50 backdrop-blur-md transition-all duration-300 hover:bg-blue-600/50 hover:-translate-y-2 hover:shadow-xl">
                  {/* Subtle purple touch on the icon background */}
                  <div className="size-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6">
                    <pain.icon className="size-6 text-purple-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{pain.title}</h3>
                  <p className="text-base font-light text-blue-100">{pain.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center space-y-8">
              <p className="text-2xl font-medium text-white text-center border-b border-blue-500/50 pb-8 px-4">
                And every unanswered conversation can become a missed opportunity. <br />
                <span className="text-blue-200">Your customers shouldn't have to wait for your business to become available.</span>
              </p>
              <div className="flex gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-blue-700 transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1">
                  Answer Every Call
                </a>
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-blue-400 bg-transparent px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1">
                  Speak to an Expert
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. A VOICE THAT WORKS AROUND THE CLOCK
            ========================================================================= */}
        <section className="py-24 bg-white relative">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Give your business a voice <br/>
                <span className="font-semibold text-blue-700">that never clocks out.</span>
              </h2>
              <p className="text-xl font-light text-slate-600 mb-8">
                Hivenox Voice AI can handle conversations beyond traditional working hours, helping customers get assistance whenever they need it.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-6 py-2 text-base font-bold text-blue-700 shadow-sm border border-blue-100">
                <Zap className="size-5" /> Always available. Always ready to respond.
              </div>
            </div>

            {/* Visual Flow Container */}
            <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
              {[
                { step: "Customer Calls", icon: PhoneCall },
                { step: "Voice AI", icon: Bot },
                { step: "Understands", icon: BrainCircuitIcon }, 
                { step: "Responds", icon: Volume2 },
                { step: "Handles Routine", icon: CheckCircle2 },
                { step: "Escalates (If Needed)", icon: Headphones }
              ].map((item, i, arr) => (
                <React.Fragment key={i}>
                  <div className="group flex flex-col items-center z-10 w-full md:w-auto">
                    <div className="size-16 md:size-20 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:border-blue-700 group-hover:bg-blue-700 group-hover:scale-110 group-hover:shadow-lg">
                      <item.icon className="size-7 md:size-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="mt-4 text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors text-center w-28">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
                {[
                    "Available around the clock",
                    "Consistent responses",
                    "Handles routine conversations",
                    "Escalates when human involvement is needed"
                ].map((pt, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="size-8 text-blue-700 mb-3" />
                        <span className="text-sm font-semibold text-slate-800">{pt}</span>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-4">
              <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:-translate-y-1 hover:shadow-lg">
                Automate Your Calls
              </a>
              <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 px-8 text-base font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50 hover:-translate-y-1">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. HUMAN-SOUNDING (Slate Background + UI Mockup)
            ========================================================================= */}
        <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Not robotic. Not scripted. <br />
                  <span className="font-semibold text-blue-700">Natural.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8 leading-relaxed">
                  Voice AI should feel like a conversation — not like navigating a rigid phone menu. Hivenox Voice AI is designed for human-sounding interactions that make it easier for customers to communicate naturally with your business.
                </p>
                <div className="p-6 bg-white border border-slate-200 rounded-[2rem] shadow-sm mb-10">
                  <p className="text-lg font-bold text-slate-800 mb-2 border-l-4 border-blue-700 pl-3">
                    The goal isn't to sound like AI. It's to make the conversation feel natural.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">
                    Hear It In Action
                  </a>
                  <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">
                    Learn More
                  </a>
                </div>
              </div>

              {/* Real-time Voice UI Mockup */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-700/5 rounded-[3rem] transform rotate-3 scale-105"></div>
                <div className="relative bg-white border border-slate-200 p-8 rounded-[3rem] shadow-2xl flex flex-col gap-6">
                  
                  {/* Live Call Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="relative flex size-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-4 bg-green-500"></span>
                        </div>
                        <span className="font-semibold text-slate-700">Live Call Connected</span>
                    </div>
                    <span className="text-slate-400 font-mono text-sm">00:14</span>
                  </div>

                  {/* Customer Message */}
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                        <Users className="size-4" /> Customer
                    </div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-4 text-slate-700 border border-slate-200">
                        "I need help with my order."
                    </div>
                  </div>

                  {/* AI Processing Steps */}
                  <div className="flex flex-col gap-2 pl-6 border-l-2 border-blue-100 py-2">
                    <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold uppercase tracking-wider">
                        <Sparkles className="size-3" /> Understands request
                    </div>
                    <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold uppercase tracking-wider">
                        <Database className="size-3" /> Fetches order history
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-blue-700 text-sm font-bold justify-end">
                        Voice AI <Bot className="size-4" /> 
                    </div>
                    <div className="bg-blue-700 text-white rounded-2xl rounded-tr-sm p-4 shadow-md text-right relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/10 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        "Of course. I can help with that. Let me check your order details right now."
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                      <div className="flex items-center gap-1">
                          {[1,2,3,4,5,6,5,4,3,2,1].map((bar, i) => (
                              <div key={i} className="w-1.5 bg-blue-500 rounded-full animate-pulse" style={{ height: `${bar * 6}px`, animationDelay: `${i * 0.1}s` }}></div>
                          ))}
                      </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. ARABIC + ENGLISH (Light Blue/White Background)
            ========================================================================= */}
        <section className="py-24 bg-white relative">
            {/* Soft decorative background shape */}
            <div className="absolute left-0 top-0 w-1/3 h-full bg-blue-50 rounded-r-[5rem] -z-10"></div>
            
            <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-6 border border-blue-100">
                    <Globe2 className="size-10 text-blue-700" />
                </div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                    Speak to customers <br/>
                    <span className="font-semibold text-blue-700">in the language they prefer.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8">
                    Hivenox Voice AI supports conversations in Arabic and English, helping businesses serve bilingual customer bases with a consistent voice experience.
                </p>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-2 text-base font-bold text-slate-700">
                    One AI voice experience. Two languages.
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                {/* Arabic Panel */}
                <div className="bg-white border-2 border-slate-100 p-12 rounded-[3rem] shadow-lg hover:-translate-y-2 hover:border-blue-700 hover:shadow-2xl transition-all duration-300 text-center group relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 size-40 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="text-7xl mb-8 select-none opacity-20 group-hover:opacity-100 group-hover:text-blue-700 transition-all font-serif">عربي</div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Arabic</h3>
                        <p className="text-lg text-slate-600">Natural voice conversations for Arabic-speaking customers.</p>
                    </div>
                </div>
                
                {/* English Panel */}
                <div className="bg-white border-2 border-slate-100 p-12 rounded-[3rem] shadow-lg hover:-translate-y-2 hover:border-blue-700 hover:shadow-2xl transition-all duration-300 text-center group relative overflow-hidden">
                    <div className="absolute -left-10 -bottom-10 size-40 bg-slate-50 rounded-full group-hover:bg-blue-100 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="text-7xl mb-8 select-none opacity-20 group-hover:opacity-100 group-hover:text-blue-700 transition-all font-sans font-bold">EN</div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">English</h3>
                        <p className="text-lg text-slate-600">Natural voice conversations for English-speaking customers.</p>
                    </div>
                </div>
            </div>
            
            <div className="text-center">
                <p className="text-2xl font-bold text-blue-700 mb-8">Arabic + English, built into the experience.</p>
                <div className="flex justify-center gap-4">
                    <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">
                        Experience Bilingual AI
                    </a>
                    <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">
                        Contact Us
                    </a>
                </div>
            </div>
            </div>
        </section>

        {/* =========================================================================
            6. CONNECTED TO HIVENOX (Dark Slate Background)
            ========================================================================= */}
        <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 my-10 overflow-hidden relative shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2850&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-blue-600 rounded-full blur-[150px] opacity-30"></div>

          <div className="mx-auto max-w-[85rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                <div className="w-full lg:w-1/2">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-slate-300 border border-slate-700">
                        <Server className="size-4 text-blue-400" />
                        ECOSYSTEM INTEGRATION
                    </div>
                    <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                        Voice AI shouldn't operate <br />
                        <span className="font-semibold text-blue-400">in isolation.</span>
                    </h2>
                    <p className="text-xl font-light text-slate-300 mb-8 leading-relaxed">
                        Voice becomes more useful when it can work alongside the systems that already understand your business. A conversation is more powerful when it's connected to the business behind it.
                    </p>

                    <div className="space-y-6 mb-10">
                        {[
                            { t: "Customer Support", d: "Voice AI handles routine customer conversations.", icon: Headphones },
                            { t: "Sales", d: "Voice interactions can support customer engagement and sales workflows.", icon: Target },
                            { t: "Operations", d: "Voice can help communicate information and handle operational conversations.", icon: Workflow }
                        ].map((uc, i) => (
                            <div key={i} className="flex items-start gap-4 p-5 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors backdrop-blur-sm">
                                <div className="p-3 bg-blue-900/50 rounded-xl">
                                    <uc.icon className="size-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">{uc.t}</h4>
                                    <p className="text-slate-400">{uc.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                    <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-medium text-white transition-all hover:bg-blue-500 hover:-translate-y-1">
                        Explore Platform
                    </a>
                    <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-600 bg-transparent px-8 text-base font-medium text-white transition-all hover:border-slate-400 hover:-translate-y-1">
                        Talk to Sales
                    </a>
                    </div>
                </div>

                {/* Visual Diagram */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="bg-slate-800/80 border border-slate-600 p-8 rounded-[3rem] backdrop-blur-md w-full max-w-md flex flex-col items-center gap-6 shadow-2xl">
                        
                        <div className="flex items-center gap-3 bg-slate-700/50 p-4 rounded-full w-full justify-center border border-slate-600">
                            <Users className="size-6 text-slate-300" />
                            <span className="font-semibold text-lg">Customer</span>
                        </div>
                        
                        <ArrowRight className="size-8 text-blue-400 rotate-90" />
                        
                        <div className="flex items-center gap-3 bg-blue-600 p-6 rounded-[2rem] w-full justify-center shadow-lg shadow-blue-900/50 transform hover:scale-105 transition-transform cursor-default">
                            <Bot className="size-8 text-white" />
                            <span className="font-bold text-xl">Voice AI</span>
                        </div>
                        
                        <ArrowRight className="size-8 text-blue-400 rotate-90" />
                        
                        <div className="bg-slate-900 p-6 rounded-[2rem] w-full border border-slate-700 text-center">
                            <p className="font-bold text-slate-300 mb-4 text-sm uppercase tracking-wider">Hivenox Platform</p>
                            <div className="flex flex-wrap justify-center gap-3 mb-4 text-sm">
                                <span className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">CRM</span>
                                <span className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">Desk</span>
                                <span className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">Sales</span>
                                <span className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">ERP</span>
                            </div>
                        </div>

                        <ArrowRight className="size-8 text-green-400 rotate-90" />

                        <div className="flex items-center gap-3 bg-green-500/10 p-4 rounded-full w-full justify-center border border-green-500/30 text-green-400">
                            <CheckCircle2 className="size-6" />
                            <span className="font-semibold text-lg">Action / Resolution</span>
                        </div>

                    </div>
                </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            7. AI WORKS. HUMANS HANDLE WHAT MATTERS.
            ========================================================================= */}
        <section className="py-24 bg-slate-50 relative">
          <div className="mx-auto max-w-[85rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                AI handles the conversation. <br />
                <span className="font-semibold text-blue-700">Your people handle what matters.</span>
              </h2>
              <p className="text-xl font-light text-slate-600">
                Voice AI isn't about forcing every interaction through automation. It's about giving your team an intelligent first layer that can handle routine conversations and involve humans when the situation requires them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
              
              {/* AI Handles */}
              <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 transition-transform duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="size-14 bg-blue-50 rounded-full flex items-center justify-center">
                    <Bot className="size-7 text-blue-700" />
                  </div>
                  <h3 className="text-3xl font-semibold text-slate-800">AI Handles</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Routine questions",
                    "Basic assistance",
                    "Common customer requests",
                    "After-hours conversations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg text-slate-600 font-medium">
                      <CheckCircle2 className="size-6 text-blue-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Humans Handle */}
              <div className="bg-blue-700 border border-blue-500 rounded-[2.5rem] p-10 shadow-2xl shadow-blue-900/20 transition-transform duration-300 hover:-translate-y-2 md:translate-y-6">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-blue-500">
                  <div className="size-14 bg-white rounded-full flex items-center justify-center">
                    <Users className="size-7 text-blue-700" />
                  </div>
                  <h3 className="text-3xl font-semibold text-white">Humans Handle</h3>
                </div>
                <ul className="space-y-6 text-lg font-medium text-blue-50">
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="size-6 text-white shrink-0" /> Complex situations
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="size-6 text-white shrink-0" /> Sensitive conversations
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="size-6 text-white shrink-0" /> Relationship-driven interactions
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="size-6 text-white shrink-0" /> Decisions requiring human judgement
                  </li>
                </ul>
              </div>

            </div>

            <div className="text-center mt-20">
                <p className="text-2xl font-bold text-slate-800 mb-8 border-t border-slate-200 pt-10 max-w-2xl mx-auto">
                    AI takes the volume. <span className="text-blue-700">Humans take the important moments.</span>
                </p>
                <div className="flex justify-center gap-4">
                    <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-bold text-white transition-all hover:bg-blue-800 hover:shadow-lg hover:-translate-y-1">
                        Empower Your Team
                    </a>
                    <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-300 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">
                        General Inquiry
                    </a>
                </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. WHY HIVENOX VOICE AI? (Grid)
            ========================================================================= */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                A voice your customers <br/>
                <span className="font-semibold text-blue-700">can actually use.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
              {[
                { title: "Human-Sounding", desc: "Natural conversations instead of rigid automated menus.", icon: Mic },
                { title: "Bilingual", desc: "Arabic and English support built into the Voice AI experience.", icon: Globe2 },
                { title: "Around the Clock", desc: "Give customers access to assistance beyond traditional business hours.", icon: Clock },
                { title: "Connected", desc: "Voice AI sits within the wider Hivenox ecosystem instead of operating in isolation.", icon: Database }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-blue-200 hover:-translate-y-2 group">
                  <div className="size-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                    <feature.icon className="size-7 text-blue-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-slate-800 mb-8 px-6 py-4 bg-slate-50 rounded-full inline-block border border-slate-200">
                More conversations. Less waiting. <span className="text-blue-700">Better customer experiences.</span>
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-1">
                  See Pricing & Plans
                </a>
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 hover:-translate-y-1">
                  Ask a Question
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
            <div className="relative overflow-hidden rounded-[4rem] bg-blue-700 px-8 py-24 sm:px-16 sm:py-32 text-center shadow-2xl group border-[8px] border-slate-50">
              
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[40rem] w-[40rem] rounded-full bg-blue-600 blur-[100px] opacity-60 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[40rem] w-[40rem] rounded-full bg-blue-800 blur-[120px] opacity-60 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              
              {/* Purple touch for CTA background aesthetic only */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

              <div className="relative z-10 mx-auto max-w-4xl">
                <span className="mb-6 inline-block text-sm font-bold uppercase tracking-widest text-blue-100 bg-blue-900/50 px-6 py-2 rounded-full border border-blue-500/30 shadow-sm backdrop-blur-sm">
                  THE VOICE OF YOUR BUSINESS
                </span>
                
                <h2 className="mb-8 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                  Give your business a voice that never sleeps.
                </h2>
                
                <p className="mb-12 text-2xl font-light leading-relaxed text-blue-100 max-w-3xl mx-auto">
                  Human-sounding AI conversations in <strong className="text-white font-medium">Arabic or English</strong> — available around the clock and connected to your Hivenox platform.
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
                
                <p className="text-xl font-medium text-blue-200">
                  Let every conversation start with an answer.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}