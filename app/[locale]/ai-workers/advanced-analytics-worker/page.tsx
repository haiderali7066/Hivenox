"use client";

import { useState } from "react";
import { Check, ArrowDown, FileText, Split, CheckCircle, Send, PlayCircle, MonitorPlay, Clapperboard, Mic, Type, Music, LayoutTemplate, MessageSquare, Repeat, Building2, Globe, Users, ArrowRight, Video, BarChart, Clock, MonitorSmartphone, Wand2, Captions, Target } from "lucide-react";

export default function VideoWorkerPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "AUD">("USD");

  const AUD_RATE = 1.5;
  const DISCOUNT_RATE = 0.8; // 20% off for annual

  const calculatePrice = (basePriceUsd: number) => {
    let price = basePriceUsd;
    if (isAnnual) price = price * DISCOUNT_RATE;
    if (currency === "AUD") price = price * AUD_RATE;
    return Math.floor(price);
  };

  const getCurrencySymbol = () => (currency === "AUD" ? "A$" : "$");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Subtle Gradients for the top */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/60 via-white to-purple-50/60" />

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-28 pb-16 sm:px-6 lg:px-8 mt-20">
          <div className="flex flex-col items-center text-center">
            
            <span className="mb-6 text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-100 px-4 py-1.5 rounded-full border border-purple-200 shadow-sm">
              AI Worker · Video Creation
            </span>
            
            <h1 className="mb-6 max-w-5xl text-5xl font-light tracking-tight text-slate-900 lg:text-7xl">
              Turn your ideas into videos — <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">at scale.</span>
            </h1>
            
            <p className="mb-6 text-2xl font-light text-slate-700">
              Create. Repurpose. Publish. Grow.
            </p>

            <p className="mb-10 max-w-3xl text-lg font-light leading-relaxed text-slate-600">
              HIVENOX Video Worker helps your business create professional video content faster — from scripts and AI-generated visuals to short-form social videos, explainers, product videos, and content repurposing. Turn your existing content into videos your audience can actually watch, share, and remember.
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-3 text-sm font-medium tracking-wide text-slate-700">
              {[
                "20 AI videos/month",
                "AI-powered video creation",
                "Short-form + long-form",
                "Script-to-video workflows",
                "Content repurposing",
                "Multiple video formats",
                "Arabic + English",
                "RTL + Hijri + Ramadan-ready",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-5 py-2 backdrop-blur-sm">
                  <Check className="size-4 text-blue-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-14">
              <a href="/book?plan=video" className="inline-flex h-14 items-center justify-center rounded-none bg-blue-600 px-10 text-lg font-normal text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5">
                Start 7-Day Free Trial
              </a>
              <a href="/book" className="inline-flex h-14 items-center justify-center rounded-none border-2 border-slate-300 bg-white/50 backdrop-blur-md px-10 text-lg font-normal text-slate-800 transition-colors hover:border-slate-800 hover:bg-slate-800 hover:text-white">
                Book a Demo
              </a>
            </div>

            <p className="text-sm font-medium text-slate-500 mb-14">
              No credit card · No lock-in · Cancel anytime
            </p>

            {/* Hero Visual Mockup */}
            <div className="w-full max-w-6xl rounded-[2rem] border border-slate-200 bg-white/80 p-4 sm:p-8 shadow-2xl backdrop-blur-xl text-left relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-[2rem] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-200 pb-5 mb-8 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="size-3.5 rounded-full bg-red-400" />
                      <div className="size-3.5 rounded-full bg-yellow-400" />
                      <div className="size-3.5 rounded-full bg-green-400" />
                    </div>
                    <span className="text-sm font-mono text-slate-400">hivenox://video-worker/dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider overflow-x-auto w-full md:w-auto pb-2 md:pb-0 whitespace-nowrap">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200">Idea → Script → Create → Edit → Approve → Publish</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full shrink-0">English / العربية</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Pipeline */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Dashboard Metrics</h4>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { num: "16 / 20", label: "Videos Created", color: "text-slate-600 bg-slate-200/50" },
                        { num: 4, label: "In Production", color: "text-amber-600 bg-amber-100" },
                        { num: 8, label: "Ready to Publish", color: "text-green-600 bg-green-100" },
                        { num: 24, label: "Published", color: "text-blue-600 bg-blue-100" }
                      ].map((stat, i) => (
                        <div key={i} className={`p-4 rounded-xl ${stat.color} border border-white/20`}>
                          <div className="text-xl font-light mb-1">{stat.num}</div>
                          <div className="text-[10px] font-bold uppercase tracking-wider opacity-80">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Content Types</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Social Videos", "Reels", "Shorts", "Explainer Videos", "Product Videos", "Educational Videos"].map((type, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-600">{type}</span>
                      ))}
                    </div>
                  </div>

                  {/* Transformation Visual / Video Editor */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col">
                    <div className="flex items-center gap-3 mb-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                      <Wand2 className="size-5 text-purple-400 shrink-0" />
                      <p className="text-sm font-medium text-slate-200">
                        "Your latest blog has been converted into a 45-second social video script."
                      </p>
                    </div>
                    
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Video Timeline</h4>
                    <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800 flex-1 flex flex-col justify-between">
                       {/* Video Player Mock */}
                       <div className="w-full aspect-video bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center mb-4 relative overflow-hidden">
                          <PlayCircle className="size-12 text-slate-600" />
                          <div className="absolute bottom-2 right-2 text-[10px] bg-black/50 text-white px-2 py-1 rounded">00:45</div>
                       </div>
                       
                       {/* Tracks */}
                       <div className="space-y-2">
                         <div className="flex gap-2 items-center">
                           <span className="text-[10px] text-slate-500 w-16">Scenes</span>
                           <div className="flex-1 h-6 flex gap-1">
                             <div className="bg-blue-500/80 h-full w-1/3 rounded-sm"></div>
                             <div className="bg-blue-400/80 h-full w-1/4 rounded-sm"></div>
                             <div className="bg-blue-600/80 h-full w-auto flex-1 rounded-sm"></div>
                           </div>
                         </div>
                         <div className="flex gap-2 items-center">
                           <span className="text-[10px] text-slate-500 w-16">Voiceover</span>
                           <div className="flex-1 h-4 bg-purple-500/50 rounded-sm"></div>
                         </div>
                         <div className="flex gap-2 items-center">
                           <span className="text-[10px] text-slate-500 w-16">Captions</span>
                           <div className="flex-1 h-4 flex gap-1">
                             <div className="bg-amber-500/50 h-full w-1/4 rounded-sm"></div>
                             <div className="bg-amber-500/50 h-full w-1/2 rounded-sm"></div>
                             <div className="bg-amber-500/50 h-full w-auto flex-1 rounded-sm"></div>
                           </div>
                         </div>
                         <div className="flex gap-2 items-center">
                           <span className="text-[10px] text-slate-500 w-16">Music</span>
                           <div className="flex-1 h-4 bg-green-500/30 rounded-sm"></div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. THE PROBLEM (Soft Purple Section)
            ========================================================================= */}
        <section className="bg-purple-50/80 border-y border-purple-100 py-16">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-purple-600">The Problem</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Your audience is watching.<br/>Is your business keeping up?
              </h2>
              <p className="text-lg font-light leading-relaxed text-slate-700 mb-6">
                Video has become one of the most powerful ways to communicate. But creating video consistently takes time. You need ideas. Scripts. Visuals. Editing. Captions. Voiceovers. Publishing. And then you need to do it all again next week.
              </p>
              <p className="text-lg font-medium leading-relaxed text-purple-900 bg-purple-100/50 inline-block p-4 rounded-xl">
                Video Worker helps remove the repetitive work from the production process so your team can create more video without building a full production studio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { title: "Video Takes Too Long", desc: "Traditional video production requires too many steps and too much manual work." },
                { title: "Ideas Stay Unused", desc: "Your blogs, presentations, and expertise contain video ideas that never get produced." },
                { title: "Content Gets Repeated", desc: "Creating unique content for every platform wastes valuable time." },
                { title: "Production Is Expensive", desc: "Hiring external teams for every video quickly increases costs." }
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-normal text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-sm font-light text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <span className="font-mono text-sm tracking-tight text-purple-600">
                Your business already has the ideas. Video Worker helps turn them into content.
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. MEET YOUR VIDEO WORKER (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600">Your AI Video Production Team</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">One Worker. Your entire video workflow.</h2>
              <p className="text-lg font-light text-slate-600">
                Video Worker helps you move from idea to published video without managing disconnected tools and complicated production workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Script", icon: FileText, color: "text-blue-500", bg: "bg-blue-50", desc: "Generate video scripts from your ideas, topics, or existing content." },
                { title: "Create", icon: Video, color: "text-purple-500", bg: "bg-purple-50", desc: "Turn scripts into structured video concepts." },
                { title: "Repurpose", icon: Split, color: "text-green-500", bg: "bg-green-50", desc: "Transform blogs, social posts, and long-form content into video." },
                { title: "Customize", icon: LayoutTemplate, color: "text-orange-500", bg: "bg-orange-50", desc: "Apply your brand voice, visuals, messaging, and style." },
                { title: "Review", icon: CheckCircle, color: "text-pink-500", bg: "bg-pink-50", desc: "Collaborate with your team before publishing." },
                { title: "Publish", icon: Send, color: "text-indigo-500", bg: "bg-indigo-50", desc: "Prepare content for your social and marketing channels." }
              ].map((feat, i) => (
                <div key={i} className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className={`size-12 rounded-2xl ${feat.bg} flex items-center justify-center mb-5`}>
                    <feat.icon className={`size-6 ${feat.color}`} />
                  </div>
                  <h3 className="text-2xl font-normal text-slate-900 mb-3">{feat.title}</h3>
                  <p className="text-base font-light text-slate-600">{feat.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-base font-medium text-slate-800">
                From blank page to finished video — faster.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. ONE IDEA → MULTIPLE VIDEOS (Dark Slate Section)
            ========================================================================= */}
        <section className="bg-slate-950 py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">Your best ideas deserve more than one format.</h2>
              <p className="text-lg font-light text-slate-400">
                Don't let your best content live in just one place. Video Worker transforms existing content into video formats designed for different audiences and platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800">
                <div className="flex flex-col gap-4">
                  {["One Core Idea", "Blog Article", "Long-Form Video", "60-Second Video", "Short-Form Clip", "Social Reel", "Educational Video"].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 text-white">
                      <div className={`size-8 rounded-full ${i === 0 ? 'bg-purple-600' : 'bg-blue-900/50'} flex items-center justify-center border ${i === 0 ? 'border-purple-500' : 'border-blue-800/50'} shrink-0 text-sm`}>
                        {i === 0 ? <Wand2 className="size-4" /> : i}
                      </div>
                      <span className={`font-light text-lg ${i === 0 ? 'font-medium' : ''}`}>{step}</span>
                      {i < 6 && <ArrowDown className="size-5 text-slate-600 ml-auto" />}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-widest block mb-2">Original Content</span>
                  <div className="bg-slate-800 p-4 rounded-xl text-white font-medium">"5 Ways AI Can Improve Customer Service"</div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-blue-400 uppercase tracking-widest block mb-3">Video Worker can turn it into:</span>
                  <ul className="space-y-3">
                    {["1 explainer video", "1 long-form video", "5 short-form clips", "5 social videos", "1 educational video"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 font-light">
                        <Check className="size-4 text-blue-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-base font-medium text-blue-300 bg-blue-900/30 inline-block px-8 py-3 rounded-full border border-blue-800/50">
                Create once. Repurpose everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. AI SCRIPT GENERATION (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <div>
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-slate-400">Script to Video</span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Never start your next video with a blank page.</h2>
                <p className="text-lg font-light text-slate-600 mb-8">
                  Give Video Worker a topic, idea, blog, or product and let AI help structure the story. Create scripts that are clear, engaging, and aligned with your brand voice.
                </p>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
                  {["Strong opening hooks", "Structured storytelling", "Short-form scripts", "Long-form scripts", "Educational scripts", "Product scripts", "Promotional scripts", "Social CTAs"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Check className="size-4 text-blue-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <a href="/book?plan=video" className="inline-flex h-12 items-center justify-center bg-slate-900 px-8 text-base font-normal text-white rounded-none transition-all hover:bg-slate-800">
                  Create Your First Video Script
                </a>
              </div>

              {/* Script Example Visual */}
              <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200 shadow-sm relative">
                <div className="mb-4 pb-4 border-b border-slate-200">
                  <span className="text-xs font-bold uppercase text-blue-600 block mb-1">Input</span>
                  <p className="text-sm text-slate-700 font-medium">Create a video about why businesses should automate customer support.</p>
                </div>
                
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase text-purple-600 block mb-1">Output Workflow</span>
                  {[
                    { label: "Hook", text: '"How many hours does your team lose answering the same customer questions?"' },
                    { label: "Problem", text: "Manual support takes time." },
                    { label: "Solution", text: "AI automation handles repetitive questions." },
                    { label: "CTA", text: '"Discover how your business can automate support."' }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-16 shrink-0 text-right mt-0.5">
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{step.label}</span>
                       </div>
                       <div className="flex-1 bg-white p-3 rounded-lg border border-slate-100 shadow-sm text-sm text-slate-600 font-light relative">
                         {step.text}
                         {i < 3 && <div className="absolute -bottom-5 left-4 text-slate-300">↓</div>}
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. AI-POWERED VIDEO CREATION (Soft Slate Section)
            ========================================================================= */}
        <section className="bg-slate-100/50 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">From script to screen.</h2>
              <p className="text-lg font-light text-slate-600">
                Turn your scripts into structured video content with AI-assisted production workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {[
                { title: "AI Visuals", icon: MonitorPlay, desc: "Create visual concepts that support your story." },
                { title: "Voiceovers", icon: Mic, desc: "Build professional voice-led video experiences." },
                { title: "Captions", icon: Captions, desc: "Generate captions automatically for better accessibility and engagement." },
                { title: "Scene Planning", icon: Clapperboard, desc: "Break your script into structured visual scenes." },
                { title: "Music", icon: Music, desc: "Add background audio to match your content." },
                { title: "Brand Elements", icon: LayoutTemplate, desc: "Keep your logo, messaging, and visual identity consistent." }
              ].map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <div className="size-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <c.icon className="size-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-normal text-slate-900 mb-2">{c.title}</h3>
                  <p className="text-sm font-light text-slate-600">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-base font-medium text-slate-800 border-l-4 border-blue-500 pl-4 py-1 inline-block">
                Your content. Your brand. Your story.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. SHORT-FORM & LONG-FORM VIDEO (White Sections)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Short-form */}
              <div className="bg-slate-50 p-8 sm:p-10 rounded-[2rem] border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 size-40 bg-pink-100 rounded-full blur-[50px] pointer-events-none" />
                <div className="relative z-10">
                  <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-pink-600">Social Video</span>
                  <h2 className="mb-4 text-3xl sm:text-4xl font-light tracking-tight text-slate-900">Create videos built for attention.</h2>
                  <p className="text-base font-light text-slate-600 mb-8">
                    Short-form content moves fast. Video Worker helps your team create concise videos designed for social platforms and modern audiences.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Video Formats</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Reels", "Shorts", "Social clips", "Product highlights", "Educational snippets", "Promotional videos", "Quick tips", "Industry insights"].map((fmt, i) => (
                        <span key={i} className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-md text-slate-600 shadow-sm">{fmt}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200 mb-6">
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-3">Example Flow</h4>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <span className="bg-slate-100 px-2 py-1 rounded">60-s Idea</span>
                      <ArrowRight className="size-3 text-slate-400" />
                      <span className="bg-slate-100 px-2 py-1 rounded">Hook</span>
                      <ArrowRight className="size-3 text-slate-400" />
                      <span className="bg-slate-100 px-2 py-1 rounded">3 Points</span>
                      <ArrowRight className="size-3 text-slate-400" />
                      <span className="bg-slate-100 px-2 py-1 rounded">CTA</span>
                    </div>
                  </div>
                  
                  <p className="text-sm font-medium text-pink-700">Turn your expertise into content people can watch in under a minute.</p>
                </div>
              </div>

              {/* Long-form */}
              <div className="bg-slate-50 p-8 sm:p-10 rounded-[2rem] border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 size-40 bg-blue-100 rounded-full blur-[50px] pointer-events-none" />
                <div className="relative z-10">
                  <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600">Deep Dives</span>
                  <h2 className="mb-4 text-3xl sm:text-4xl font-light tracking-tight text-slate-900">Go deeper when the story demands it.</h2>
                  <p className="text-base font-light text-slate-600 mb-8">
                    Not every idea belongs in 30 seconds. Create longer educational, explainer, product, and thought leadership videos that give your audience more value.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { title: "Educational Videos", desc: "Teach your audience something useful." },
                      { title: "Explainer Videos", desc: "Explain complex products and services clearly." },
                      { title: "Product Videos", desc: "Show customers what your product can do." },
                      { title: "Thought Leadership", desc: "Share deeper insights and industry expertise." },
                      { title: "Training Content", desc: "Create internal educational content for your team." }
                    ].map((useCase, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                        <span className="text-sm font-medium text-slate-900 shrink-0">{useCase.title}</span>
                        <span className="text-sm font-light text-slate-600">{useCase.desc}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm font-medium text-blue-700">Short when it needs to be. Deep when it matters.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            8. CONTENT REPURPOSING (Glassmorphism Gradient)
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-200 via-blue-50 to-white p-10 sm:p-14 shadow-2xl border border-white/80 text-center">
            <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-blue-400 blur-[120px] opacity-30 mix-blend-multiply pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 h-[40rem] w-[40rem] rounded-full bg-purple-300 blur-[120px] opacity-40 mix-blend-multiply pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto mb-12">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-white/50 px-3 py-1 rounded-full border border-blue-200">Work Smarter</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Your content library is your video library.</h2>
              <p className="text-xl font-light text-slate-700">
                You already have valuable content. Blogs. Reports. Presentations. Social posts. Podcasts. Product information. Video Worker helps turn those assets into new video opportunities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center max-w-6xl mx-auto mb-10 relative z-10">
              {[
                { from: "Blog", to: "Video Script" },
                { from: "Podcast", to: "Short Clips" },
                { from: "Report", to: "Explainer Video" },
                { from: "Product Page", to: "Product Video" },
                { from: "Webinar", to: "Social Clips" },
                { from: "Social Post", to: "Video Reel" }
              ].map((flow, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-white/80 shadow-sm flex flex-col items-center justify-center h-full">
                  <div className="text-sm font-medium text-slate-900 mb-2">{flow.from}</div>
                  <ArrowDown className="size-4 text-blue-500 mb-2" />
                  <div className="text-sm font-bold text-blue-700">{flow.to}</div>
                </div>
              ))}
            </div>

            <p className="text-base font-medium text-slate-800 relative z-10 bg-white/50 inline-block px-6 py-2 rounded-full border border-white">
              Stop creating from scratch. Start creating from what you already have.
            </p>
          </div>
        </section>

        {/* =========================================================================
            9. CALENDAR (Soft Blue Section)
            ========================================================================= */}
        <section className="bg-blue-50/50 py-16 border-b border-blue-100">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Plan your video presence before you press publish.</h2>
              <p className="text-lg font-light text-slate-600">Keep your entire video pipeline organized from idea to publication.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-blue-100 shadow-xl shadow-blue-900/5 max-w-6xl mx-auto mb-14">
              <div className="flex flex-wrap gap-3 mb-8 justify-center border-b border-slate-100 pb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 w-full text-center mb-2 block">Content Filters</span>
                {["Short-form", "Long-form", "Social", "Educational", "Product", "Promotional", "Thought Leadership"].map((filter, i) => (
                  <span key={i} className="px-4 py-1.5 text-sm font-medium text-slate-600 bg-slate-100 rounded-full border border-slate-200 hover:bg-slate-200 cursor-pointer transition-colors">
                    {filter}
                  </span>
                ))}
              </div>

              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 w-full text-center mb-6">Calendar Views</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { title: "Ideas", color: "border-slate-200 bg-slate-50" },
                  { title: "Scripts", color: "border-slate-200 bg-white shadow-sm" },
                  { title: "In Production", color: "border-amber-200 bg-amber-50" },
                  { title: "In Review", color: "border-purple-200 bg-purple-50" },
                  { title: "Approved & Scheduled", color: "border-blue-200 bg-blue-50" },
                  { title: "Published", color: "border-green-200 bg-green-50" }
                ].map((step, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${step.color} relative text-center flex items-center justify-center h-20`}>
                    <h4 className="font-bold text-slate-800 text-sm">{step.title}</h4>
                    {i < 5 && <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-300 size-5 z-10 bg-white rounded-full" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-base font-medium text-slate-800">Know what's coming next. Keep your video engine moving.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. BRAND CONSISTENCY (Soft Slate Section)
            ========================================================================= */}
        <section className="bg-slate-100/50 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Every video should feel like your brand.</h2>
                <p className="text-lg font-light text-slate-600 mb-8">
                  Consistency builds recognition. Video Worker helps your team maintain a recognizable style across every video you create.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 flex items-start gap-4">
                  <Building2 className="size-6 text-blue-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Brand Controls</h4>
                    <p className="text-sm text-slate-600 mt-1">Manage everything from visuals to voice.</p>
                  </div>
                </div>
                <p className="text-base font-medium text-slate-800 border-l-4 border-blue-500 pl-4 py-1">AI creates the video. Your brand makes it yours.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Logo", desc: "Keep your brand visible." },
                  { title: "Colours", desc: "Maintain visual consistency." },
                  { title: "Typography", desc: "Use your preferred brand fonts." },
                  { title: "Voice", desc: "Keep messaging consistent." },
                  { title: "Tone", desc: "Define how your brand communicates." },
                  { title: "CTA", desc: "Use consistent calls to action." }
                ].map((ctrl, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="text-lg font-medium text-slate-900 mb-2">{ctrl.title}</h4>
                    <p className="text-sm font-light text-slate-600">{ctrl.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            11. ARABIC + ENGLISH (Rich Purple Gradient)
            ========================================================================= */}
        <section className="relative py-16 overflow-hidden border-b border-purple-900">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900" />
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-purple-300">Bilingual Video Creation</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">Speak to your audience in their language.</h2>
              <p className="text-lg font-light text-purple-100/80 leading-relaxed">
                Video Worker is designed for businesses communicating across English and Arabic-speaking markets. Create content that works across languages, cultures, and audiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {[
                { title: "Arabic Scripts", desc: "Generate video scripts for Arabic audiences." },
                { title: "English Scripts", desc: "Create professional English video content." },
                { title: "Bilingual Content", desc: "Adapt campaigns across both languages." },
                { title: "RTL Support", desc: "Support right-to-left content experiences." },
                { title: "Hijri Calendar", desc: "Plan content around Hijri dates." },
                { title: "Ramadan Engine", desc: "Create timely Ramadan campaigns and content." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-[1.5rem] border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-sm font-light text-purple-200/70">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-purple-200 bg-purple-900/50 inline-block px-6 py-3 rounded-full border border-purple-700/50">
                One story. Multiple languages. Wider reach.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            12. APPROVAL WORKFLOW (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <div className="order-2 lg:order-1 bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
                <div className="flex flex-col gap-4">
                  {[
                    { step: "AI Creates", icon: Wand2 },
                    { step: "Team Reviews", icon: Users },
                    { step: "Manager Approves", icon: CheckCircle },
                    { step: "Video Published", icon: Send }
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="size-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                        <s.icon className="size-5 text-blue-600" />
                      </div>
                      <span className="font-medium text-slate-800">{s.step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600">Team Collaboration</span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Create faster without losing control.</h2>
                <p className="text-lg font-light text-slate-600 mb-8">Video production often involves too many handoffs. Video Worker brings your team into one workflow so everyone knows what's happening.</p>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
                  {["Video review", "Approval workflow", "Team collaboration", "Content status", "Centralized video library", "Brand controls"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Check className="size-4 text-blue-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-base font-medium text-slate-800 border-l-4 border-blue-500 pl-4 py-1">Move faster while keeping your standards high.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            13. MULTI-PLATFORM & PERFORMANCE (Dark / Light split conceptually, laid out horizontally)
            ========================================================================= */}
        <section className="bg-slate-950 py-16 border-b border-slate-800">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
             <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">One video. Multiple destinations.</h2>
              <p className="text-lg font-light text-slate-400">
                Your audience isn't on one platform. Create video content that can be adapted across your marketing channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {[
                { title: "Vertical", desc: "For short-form social content." },
                { title: "Square", desc: "For social feeds." },
                { title: "Landscape", desc: "For websites and long-form video." }
              ].map((format, i) => (
                <div key={i} className="bg-slate-900 p-8 rounded-[1.5rem] border border-slate-800 text-center">
                  <MonitorSmartphone className="size-10 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">{format.title}</h3>
                  <p className="text-sm font-light text-slate-400">{format.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-slate-300 max-w-4xl mx-auto mb-10">
              {["Social media", "Website", "Landing pages", "Product pages", "Presentations", "Campaigns", "Email marketing"].map((useCase, i) => (
                <span key={i} className="bg-slate-800 px-5 py-2 rounded-full border border-slate-700">
                  {useCase}
                </span>
              ))}
            </div>

            <div className="text-center">
               <p className="text-base font-medium text-blue-300 bg-blue-900/30 inline-block px-8 py-3 rounded-full border border-blue-800/50">
                Create once. Adapt for every screen.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            14. PERFORMANCE (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-slate-400">Measure What Matters</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Don't just create videos. Learn from them.</h2>
              <p className="text-lg font-light text-slate-600">
                Understand how your video content performs and identify which topics, formats, and messages resonate with your audience.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
              {[
                { title: "Views", desc: "Understand content reach.", icon: PlayCircle },
                { title: "Watch Time", desc: "See how long people stay engaged.", icon: Clock },
                { title: "Completion Rate", desc: "Identify which videos hold attention.", icon: CheckCircle },
                { title: "Engagement", desc: "Track audience interactions.", icon: MessageSquare },
                { title: "Conversion", desc: "Understand which content drives action.", icon: Target }
              ].map((metric, i) => (
                <div key={i} className="bg-slate-50 p-5 rounded-[1.5rem] border border-slate-100 text-center">
                  <metric.icon className="size-6 text-blue-500 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-slate-900 mb-2">{metric.title}</h3>
                  <p className="text-xs font-light text-slate-600">{metric.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-base font-medium text-slate-800 border-l-4 border-blue-500 pl-4 py-1 inline-block">
                Create better videos by learning from the ones you already made.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            15. GROWTH WORKER INTEGRATION (Soft Slate Banner)
            ========================================================================= */}
        <section className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[2rem] p-10 sm:p-14 text-center text-white relative overflow-hidden shadow-xl">
               <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
               <div className="relative z-10 max-w-4xl mx-auto">
                 <h2 className="mb-4 text-3xl sm:text-4xl font-light tracking-tight">Your videos become part of your growth engine.</h2>
                 <p className="text-lg font-light text-blue-100 mb-10">
                   Video shouldn't operate separately from your marketing strategy. Connect Video Worker with your wider HIVENOX AI workforce to turn video content into a complete growth workflow.
                 </p>
                 
                 <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
                   {["Content Worker", "Video Worker", "Social Worker", "Growth Worker"].map((worker, i) => (
                     <div key={i} className="flex items-center gap-4">
                       <div className="bg-white/10 backdrop-blur border border-white/20 px-6 py-3 rounded-xl font-medium">
                         {worker}
                       </div>
                       {i < 3 && <ArrowRight className="size-5 text-blue-300 hidden md:block" />}
                       {i < 3 && <ArrowDown className="size-5 text-blue-300 md:hidden" />}
                     </div>
                   ))}
                 </div>

                 <p className="text-base font-medium text-white mb-8">One idea. One connected AI workforce.</p>
                 
                 <a href="/book?plan=growth" className="inline-flex h-12 items-center justify-center bg-white px-8 text-base font-medium text-blue-900 rounded-none transition-all hover:bg-slate-100">
                    Explore Growth Worker
                 </a>
               </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            16. WHO IS VIDEO WORKER FOR? (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Built for businesses ready to become more visible.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Marketing Teams", desc: "Create more video without expanding your production team." },
                { title: "Founders & Executives", desc: "Turn your knowledge and expertise into thought leadership." },
                { title: "Agencies", desc: "Produce more video content for clients." },
                { title: "E-commerce Businesses", desc: "Create product videos and promotional content." },
                { title: "Professional Services", desc: "Explain complex services through engaging video." },
                { title: "Educators & Trainers", desc: "Turn knowledge into structured learning content." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-[1.5rem] border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-normal text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm font-light text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            17. VS TRADITIONAL VIDEO PRODUCTION (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">A smarter way to produce video.</h2>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-lg mb-10">
              <table className="w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-6 font-bold text-slate-900 w-1/2">Traditional Video Production</th>
                    <th className="p-6 font-bold text-blue-700 w-1/2 bg-blue-50/50 border-l border-slate-200">With Video Worker</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-light text-slate-700">
                  {[
                    ["Start from scratch", "Start with AI-assisted ideas"],
                    ["Manual scripting", "AI-assisted scripts"],
                    ["Separate production tools", "Unified workflow"],
                    ["Expensive production", "AI-powered production"],
                    ["Manual repurposing", "Automated content repurposing"],
                    ["One format at a time", "Multiple formats"],
                    ["English-focused workflows", "Arabic + English"],
                    ["Slow production cycles", "Faster content production"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="p-6 text-slate-500">{row[0]}</td>
                      <td className="p-6 font-medium text-slate-900 bg-blue-50/30 border-l border-slate-100 flex items-center gap-3">
                        <Check className="size-4 text-blue-500 shrink-0" />
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <p className="text-lg font-light text-slate-600">The goal isn't to remove creativity. It's to remove the friction between an idea and the finished video.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            18. PRICING SECTION (WIDER CARD, Soft Slate)
            ========================================================================= */}
        <section className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600">Simple Pricing</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Turn your ideas into video.</h2>
            </div>

            {/* Currency / Annual Toggles */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center p-1 bg-white border border-slate-200 rounded-none shadow-sm">
                <button onClick={() => setCurrency("USD")} className={`px-6 py-2.5 text-sm font-medium rounded-none transition-colors ${currency === "USD" ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>USD</button>
                <button onClick={() => setCurrency("AUD")} className={`px-6 py-2.5 text-sm font-medium rounded-none transition-colors ${currency === "AUD" ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>AUD</button>
              </div>
              <div className="flex items-center p-1 bg-white border border-slate-200 rounded-none shadow-sm">
                <button onClick={() => setIsAnnual(false)} className={`px-6 py-2.5 text-sm font-medium rounded-none transition-colors ${!isAnnual ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>Monthly</button>
                <button onClick={() => setIsAnnual(true)} className={`px-6 py-2.5 text-sm font-medium rounded-none transition-colors ${isAnnual ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>Annual (Save 20%)</button>
              </div>
            </div>

            {/* WIDER PRICING CARD */}
            <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] border-4 border-blue-600 p-8 sm:p-12 shadow-2xl relative">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-8 mb-8 gap-6">
                <div>
                  <h3 className="text-3xl font-normal text-slate-900 mb-2">Video Worker</h3>
                  <p className="text-sm font-light text-slate-500">The complete AI video production engine.</p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-5xl font-light text-slate-900">
                    {getCurrencySymbol()}{calculatePrice(99)}
                    <span className="text-base font-normal text-slate-500">/month</span>
                  </div>
                  <p className="text-xs font-light text-slate-400 mt-2">{isAnnual ? "Billed annually with 20% discount." : "Billed monthly."}</p>
                </div>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 text-sm font-light text-slate-700">
                {[
                  "20 AI videos/month", "AI script generation", "Short-form video creation", "Long-form video workflows",
                  "AI visual generation", "AI voiceover workflows", "Automatic captions", "Content repurposing",
                  "Multiple video formats", "Video content calendar", "Brand consistency tools", "Arabic + English", 
                  "RTL support", "Hijri support", "Ramadan engine", "Video approval workflow", "Performance insights"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="size-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a href="/book?plan=video" className="flex-1 flex h-14 items-center justify-center bg-blue-600 rounded-none font-normal text-lg text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  Start 7-Day Free Trial
                </a>
                <a href="/book" className="flex-1 flex h-14 items-center justify-center border-2 border-slate-300 bg-white rounded-none font-normal text-lg text-slate-800 hover:border-slate-800 hover:bg-slate-800 hover:text-white transition-colors">
                  Book a Demo
                </a>
              </div>
              
              <p className="text-center text-sm font-light text-slate-500 mb-8">No credit card required. No lock-in. Cancel anytime.</p>

              <div className="pt-8 border-t border-slate-100 text-center bg-blue-50/50 -mx-8 -mb-12 sm:-mx-12 p-8 rounded-b-[2.2rem]">
                <p className="text-sm font-medium text-slate-900 mb-2">Need a complete marketing engine?</p>
                <a href="/book?plan=growth" className="text-sm font-normal text-blue-600 hover:underline">
                  Combine Video Worker with Growth Worker to connect your video production with content, social publishing, analytics, ROI tracking, and growth strategy. [ Explore Growth Worker → ]
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            19. ROI / VALUE SECTION (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
           <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto mb-10">
              <h2 className="mb-4 text-4xl font-light tracking-tight text-slate-900">What could your business create with more video?</h2>
              <p className="text-lg font-light text-slate-600">Traditional video production can take days or weeks. Video Worker helps your team move from idea to production faster, allowing you to create more content without adding the same level of production overhead.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto mb-8">
              {[
                { val: "20", label: "AI videos/month" },
                { val: "Multiple", label: "Video formats" },
                { val: "2", label: "Languages" },
                { val: "1", label: "Connected workflow" }
              ].map((stat, i) => (
                <div key={i} className="p-6 border border-slate-100 bg-slate-50 rounded-2xl">
                  <div className="text-4xl font-light text-blue-600 mb-2">{stat.val}</div>
                  <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <p className="text-base font-medium text-slate-800">More videos. More opportunities to be seen.</p>
           </div>
        </section>

        {/* =========================================================================
            20. REGIONAL SECTION (Dark Slate Section)
            ========================================================================= */}
        <section className="bg-slate-950 py-16 border-b border-slate-800">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 text-center">
             <div className="max-w-4xl mx-auto mb-12">
              <h2 className="mb-4 text-4xl font-light tracking-tight text-white">Built for businesses growing across borders.</h2>
              <p className="text-lg font-light text-slate-400">Whether your audience is in Australia, the UAE, Saudi Arabia, or across international markets, your video content needs to communicate clearly. Video Worker helps your team create bilingual video content that works across markets.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {[
                { title: "Australia", desc: "Professional English video content." },
                { title: "UAE", desc: "Bilingual content for diverse audiences." },
                { title: "Saudi Arabia", desc: "Arabic-first content with regional context." }
              ].map((region, i) => (
                <div key={i} className="bg-slate-900 p-8 rounded-[1.5rem] border border-slate-800">
                  <Globe className="size-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-normal text-white mb-2">{region.title}</h3>
                  <p className="text-sm font-light text-slate-400">{region.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">Create globally. Communicate locally.</p>
          </div>
        </section>

        {/* =========================================================================
            21. FAQ (White Section)
            ========================================================================= */}
        <section className="bg-white py-12 border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <h3 className="mb-10 text-center text-3xl sm:text-4xl font-light tracking-tight text-slate-900">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {[
                { q: "What is HIVENOX Video Worker?", a: "Video Worker is an AI-powered video production Worker that helps businesses create scripts, videos, short-form content, long-form content, and repurposed video assets." },
                { q: "How many videos are included?", a: "The plan includes 20 AI videos per month." },
                { q: "Can I create short-form videos?", a: "Yes. Video Worker supports short-form content designed for social platforms, including reels, shorts, and quick educational videos." },
                { q: "Can I create long-form videos?", a: "Yes. Video Worker supports longer educational, explainer, product, and thought leadership video workflows." },
                { q: "Can I turn blogs into videos?", a: "Yes. Video Worker can help transform existing blogs and other content into video scripts and video concepts." },
                { q: "Does it support Arabic?", a: "Yes. Video Worker supports Arabic and English workflows, along with RTL, Hijri, and Ramadan-ready capabilities." },
                { q: "Can I add my branding?", a: "Yes. You can maintain consistent branding across your video workflows using brand elements such as logos, colours, typography, messaging, and CTAs." },
                { q: "Can my team review videos?", a: "Yes. Video Worker includes collaboration and approval workflows to help teams review content before publishing." },
                { q: "Can I use the videos on different platforms?", a: "Yes. Video Worker supports multiple video formats for social media, websites, landing pages, campaigns, presentations, and other marketing channels." },
                { q: "Can I try Video Worker for free?", a: "Yes. You can start with a 7-day free trial without a credit card." },
                { q: "Can Video Worker work with Growth Worker?", a: "Yes. Video Worker can complement Growth Worker by adding AI-powered video creation to your broader content, social, analytics, and growth workflow." }
              ].map((faq, index) => (
                <details key={index} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-white">
                  <summary className="flex cursor-pointer items-center justify-between p-5 text-base sm:text-lg font-normal text-slate-900 outline-none list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ArrowDown className="size-5 shrink-0 text-blue-500 transition-transform duration-300 group-open:rotate-180 ml-4 bg-blue-100 rounded-full p-1" />
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-sm sm:text-base font-light leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            22. FINAL CTA (Blue Background)
            ========================================================================= */}
        <section className="py-12 px-5 sm:px-6 lg:px-8 bg-slate-50">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-blue-600 px-6 py-16 sm:px-12 sm:py-20 text-center shadow-xl">
              {/* Decorative blurs */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[30rem] w-[30rem] rounded-full bg-blue-500 blur-[100px] opacity-60 pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[30rem] w-[30rem] rounded-full bg-blue-800 blur-[100px] opacity-40 pointer-events-none" />
              
              <div className="relative z-10 mx-auto max-w-3xl">
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-200 bg-blue-800/30 px-4 py-1.5 rounded-full border border-blue-400/30">
                  Your AI Video Workforce
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">
                  Your next video shouldn't take weeks.
                </h2>
                <p className="mb-10 text-lg font-light leading-relaxed text-blue-100">
                  Turn your ideas, expertise, and existing content into videos your audience can watch, share, and remember. Start creating more video with HIVENOX Video Worker.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <a href="/book?plan=video" className="inline-flex h-14 items-center justify-center bg-white px-10 text-lg font-normal text-blue-700 rounded-none transition-all hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5">
                    Start 7-Day Free Trial
                  </a>
                  <a href="/book" className="inline-flex h-14 items-center justify-center border-2 border-blue-400 bg-transparent px-10 text-lg font-normal text-white rounded-none transition-colors hover:border-white hover:bg-white/10">
                    Book a Demo
                  </a>
                </div>

                <p className="text-sm font-light text-blue-200">
                  No credit card required. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}