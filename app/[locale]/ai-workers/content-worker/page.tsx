"use client";

import { useState } from "react";
import { Check, ArrowDown, FileText, PenTool, GitMerge, CheckCircle, Send, TrendingUp, Sparkles, LayoutTemplate, Split, MessageSquare, Repeat, Building2, Globe, Users, FileSignature, ArrowRight } from "lucide-react";

export default function ContentWorkerPage() {
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
            1. HERO SECTION (Wider, gradient background, slightly reduced height)
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-28 pb-16 sm:px-6 lg:px-8 mt-20">
          <div className="flex flex-col items-center text-center">
            
            <span className="mb-6 text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-100 px-4 py-1.5 rounded-full border border-purple-200 shadow-sm">
              AI Worker · Content & Thought Leadership
            </span>
            
            <h1 className="mb-6 max-w-5xl text-5xl font-light tracking-tight text-slate-900 lg:text-7xl">
              Sound like the expert you are — <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">at scale.</span>
            </h1>
            
            <p className="mb-6 text-2xl font-light text-slate-700">
              Your brand voice. Your ideas. Always-on content.
            </p>

            <p className="mb-10 max-w-3xl text-lg font-light leading-relaxed text-slate-600">
              HIVENOX Content Worker turns your expertise into a continuous stream of high-quality content — from social posts and blog articles to newsletters and thought leadership. Create more content, stay consistent, and build authority in English and Arabic without adding more people to your team.
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-3 text-sm font-medium tracking-wide text-slate-700">
              {[
                "70 scheduled social posts/month",
                "20 AI content pieces/month",
                "8 blog drafts/month",
                "3 brand profiles",
                "3,000 AI credits/month",
                "Arabic + English native",
                "5 team seats",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-5 py-2 backdrop-blur-sm">
                  <Check className="size-4 text-blue-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-14">
              <a href="/book?plan=content" className="inline-flex h-14 items-center justify-center rounded-none bg-blue-600 px-10 text-lg font-normal text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5">
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
                  <div className="flex items-center gap-2">
                    <div className="size-3.5 rounded-full bg-red-400" />
                    <div className="size-3.5 rounded-full bg-yellow-400" />
                    <div className="size-3.5 rounded-full bg-green-400" />
                    <span className="ml-4 text-sm font-mono text-slate-400">hivenox://content-worker/dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200">Create → Review → Approve → Publish</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full">English / العربية</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Pipeline */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Content Pipeline</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { num: 12, label: "Drafts", color: "text-slate-600 bg-slate-200/50" },
                        { num: 8, label: "In Review", color: "text-amber-600 bg-amber-100" },
                        { num: 24, label: "Approved", color: "text-green-600 bg-green-100" },
                        { num: 36, label: "Scheduled", color: "text-blue-600 bg-blue-100" }
                      ].map((stat, i) => (
                        <div key={i} className={`p-4 rounded-xl ${stat.color} border border-white/20`}>
                          <div className="text-2xl font-light mb-1">{stat.num}</div>
                          <div className="text-xs font-bold uppercase tracking-wider opacity-80">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transformation Visual */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 flex flex-col justify-center">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Content Transformation</h4>
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1 text-center w-full">
                        <FileText className="size-6 text-slate-400 mx-auto mb-2" />
                        <span className="text-sm font-medium text-slate-800">Core Idea / AI Generation</span>
                      </div>
                      <ArrowRight className="size-5 text-blue-400 shrink-0 rotate-90 md:rotate-0" />
                      <div className="flex flex-col gap-2 flex-1 w-full">
                        {["Blog Article", "LinkedIn Post", "Instagram Caption", "Newsletter"].map((item, i) => (
                          <div key={i} className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 text-sm font-medium text-slate-600 flex items-center justify-between">
                            {item} <CheckCircle className="size-4 text-green-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. THE PROBLEM (Soft Purple Section, reduced height)
            ========================================================================= */}
        <section className="bg-purple-50/80 border-y border-purple-100 py-16">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-purple-600">The Problem</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Your expertise is valuable.<br/> Your content shouldn't be an afterthought.
              </h2>
              <p className="text-lg font-light leading-relaxed text-slate-700 mb-6">
                You know your industry. You have ideas, experience, customer stories, and insights worth sharing. But turning all of that into consistent content takes time. One blog becomes two. Two social posts become four. Then the calendar goes quiet.
              </p>
              <p className="text-lg font-medium leading-relaxed text-purple-900 bg-purple-100/50 inline-block p-4 rounded-xl">
                Content Worker keeps your content engine running — so your expertise keeps reaching the people who need it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { title: "Content Takes Time", desc: "Researching, writing, editing, and publishing can consume hours every week." },
                { title: "Consistency Is Hard", desc: "One busy week can quickly turn into one quiet month." },
                { title: "Every Channel Needs Content", desc: "Your website, social channels, newsletters, and campaigns all need different formats." },
                { title: "Your Brand Voice Gets Lost", desc: "Generic AI content doesn't sound like your business." }
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-normal text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-sm font-light text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <span className="font-mono text-sm tracking-tight text-purple-600">
                Your team knows what to say. Content Worker helps you say it consistently.
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. MEET YOUR CONTENT WORKER (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600">Your AI Content Team</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">One Worker. An entire content engine.</h2>
              <p className="text-lg font-light text-slate-600">
                Content Worker helps your team go from a single idea to a complete content ecosystem. Create, adapt, organize, review, and publish content from one intelligent workspace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Think", icon: MessageSquare, color: "text-blue-500", bg: "bg-blue-50", desc: "Turn your ideas, expertise, and topics into content opportunities." },
                { title: "Create", icon: Sparkles, color: "text-purple-500", bg: "bg-purple-50", desc: "Generate high-quality content with AI." },
                { title: "Repurpose", icon: Split, color: "text-green-500", bg: "bg-green-50", desc: "Turn one piece of content into multiple formats." },
                { title: "Review", icon: CheckCircle, color: "text-orange-500", bg: "bg-orange-50", desc: "Keep your team and brand aligned with approval workflows." },
                { title: "Publish", icon: Send, color: "text-pink-500", bg: "bg-pink-50", desc: "Move approved content into your publishing workflow." },
                { title: "Scale", icon: TrendingUp, color: "text-indigo-500", bg: "bg-indigo-50", desc: "Produce more content without increasing your team's workload." }
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
          </div>
        </section>

        {/* =========================================================================
            4. CONTENT FROM ONE IDEA (Dark Slate Section)
            ========================================================================= */}
        <section className="bg-slate-950 py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">One idea. Multiple channels.<br/>Endless possibilities.</h2>
              <p className="text-lg font-light text-slate-400">
                Your best ideas shouldn't live in one blog post. Content Worker helps you transform one core idea into multiple content formats — giving your team more ways to reach your audience.
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-slate-900/50 p-10 rounded-[2rem] border border-slate-800 backdrop-blur-sm text-center">
              <div className="mb-8 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 inline-block">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">Core Idea</span>
                <span className="text-xl font-medium text-white">"How AI is changing customer support."</span>
              </div>
              
              <div className="flex justify-center mb-8">
                <ArrowDown className="size-8 text-blue-500 animate-bounce" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  "1 Long-form blog",
                  "5 LinkedIn posts",
                  "5 Social captions",
                  "1 Newsletter",
                  "3 Thought leadership posts",
                  "1 Campaign topic"
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-sm font-light text-slate-300 flex items-center justify-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-base font-medium text-blue-300 bg-blue-900/30 inline-block px-8 py-3 rounded-full border border-blue-800/50">
                Create once. Multiply your reach.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. AI-POWERED CONTENT CREATION (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-slate-400">Create Faster</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Start with a blank page. Finish with a content library.</h2>
              <p className="text-lg font-light text-slate-600">Stop staring at empty documents. Content Worker helps generate content ideas, outlines, drafts, and finished content across the formats your business needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {[
                { title: "Social Posts", desc: "Create engaging social content that matches your brand and audience." },
                { title: "Blog Articles", desc: "Turn topics and expertise into structured long-form content." },
                { title: "Newsletters", desc: "Keep your audience informed with consistent email content." },
                { title: "Thought Leadership", desc: "Share your expertise and build authority in your industry." },
                { title: "Campaign Content", desc: "Create content around launches, offers, events, and campaigns." },
                { title: "Repurposed Content", desc: "Transform existing content into new formats and channels." }
              ].map((c, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-[1.5rem] border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-normal text-slate-900 mb-2">{c.title}</h3>
                  <p className="text-sm font-light text-slate-600">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="/book?plan=content" className="inline-flex h-14 items-center justify-center bg-slate-900 px-8 text-base font-normal text-white rounded-none transition-all hover:bg-slate-800">
                Create Your First Content Piece
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. YOUR BRAND VOICE (Soft Slate Section)
            ========================================================================= */}
        <section className="bg-slate-100/50 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">AI that sounds like you.</h2>
                <p className="text-lg font-light text-slate-600 mb-8">
                  Your content shouldn't sound like everyone else's. Content Worker helps maintain consistency across your communication by working around your chosen brand voice, tone, and messaging style.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 flex items-start gap-4">
                  <Building2 className="size-6 text-blue-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Brand Profiles</h4>
                    <p className="text-sm text-slate-600 mt-1">Create up to 3 brand profiles to manage different brands, businesses, or communication styles.</p>
                  </div>
                </div>
                <p className="text-base font-medium text-slate-800 border-l-4 border-blue-500 pl-4 py-1">Your voice stays yours. AI simply helps you use it everywhere.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Professional", desc: "Clear, confident, and credible." },
                  { title: "Expert", desc: "Detailed, authoritative, and insightful." },
                  { title: "Conversational", desc: "Natural, approachable, and human." },
                  { title: "Custom", desc: "Define your own voice and communication style." }
                ].map((voice, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="text-lg font-medium text-slate-900 mb-2">{voice.title}</h4>
                    <p className="text-sm font-light text-slate-600">{voice.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. BUILT FOR ARABIC + ENGLISH (Rich Purple Gradient Section)
            ========================================================================= */}
        <section className="relative py-16 overflow-hidden border-b border-purple-900">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900" />
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-purple-300">Bilingual By Design</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">One message. Two languages. Native to both.</h2>
              <p className="text-lg font-light text-purple-100/80 leading-relaxed">
                For businesses operating across Australia, the UAE, Saudi Arabia, and international markets, content often needs to work across languages and cultures. Content Worker is built for Arabic and English content creation, not simply translation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {[
                { title: "Arabic AI", desc: "Create natural Arabic content for your audience." },
                { title: "English AI", desc: "Produce polished English content at scale." },
                { title: "Bilingual Brand Voice", desc: "Maintain consistent messaging across both languages." },
                { title: "RTL Support", desc: "Designed for right-to-left content experiences." },
                { title: "Hijri Calendar", desc: "Plan content around Hijri dates and events." },
                { title: "Ramadan Engine", desc: "Build timely content around Ramadan and seasonal moments." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-[1.5rem] border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-sm font-light text-purple-200/70">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-purple-200 bg-purple-900/50 inline-block px-6 py-3 rounded-full border border-purple-700/50">
                Create for your audience — in the language they actually use.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. CONTENT CALENDAR (Soft Blue Section)
            ========================================================================= */}
        <section className="bg-blue-50/50 py-16 border-b border-blue-100">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-500">Plan Everything</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Your entire content pipeline, in one view.</h2>
              <p className="text-lg font-light text-slate-600">See what you're creating, what's being reviewed, what's approved, and what's ready to publish. Content Worker gives your team a central place to organize your content production.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-blue-100 shadow-xl shadow-blue-900/5 max-w-6xl mx-auto mb-14">
              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {["All Content", "Social", "Blogs", "Newsletters", "Thought Leadership", "Campaigns"].map((filter, i) => (
                  <span key={i} className="px-4 py-1.5 text-sm font-medium text-slate-600 bg-slate-100 rounded-full border border-slate-200 hover:bg-slate-200 cursor-pointer transition-colors">
                    {filter}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { title: "Draft", desc: "Content is being created.", color: "border-slate-200 bg-slate-50" },
                  { title: "Review", desc: "Your team checks and refines it.", color: "border-amber-200 bg-amber-50" },
                  { title: "Approved", desc: "Content is ready to go.", color: "border-green-200 bg-green-50" },
                  { title: "Scheduled", desc: "Content is queued for publishing.", color: "border-blue-200 bg-blue-50" }
                ].map((step, i) => (
                  <div key={i} className={`p-6 rounded-2xl border ${step.color} relative`}>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                    {i < 3 && <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-300 size-5 z-10 bg-white rounded-full" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <a href="/book?plan=content" className="inline-flex h-12 items-center justify-center bg-blue-600 px-8 text-base font-normal text-white rounded-none transition-all hover:bg-blue-700 shadow-md">
                Take control of your content pipeline.
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. APPROVAL WORKFLOW (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <div className="order-2 lg:order-1 bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
                <div className="flex flex-col gap-4">
                  {[
                    { step: "AI Creates", icon: Sparkles },
                    { step: "Writer Reviews", icon: FileSignature },
                    { step: "Manager Approves", icon: CheckCircle },
                    { step: "Content Gets Published", icon: Send }
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
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Great content is collaborative.</h2>
                <p className="text-lg font-light text-slate-600 mb-8">AI can create the first draft. Your team makes it yours. Content Worker helps teams review, refine, and approve content before it goes live.</p>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
                  {["Content review", "Approval workflow", "Team collaboration", "Content status tracking", "Centralized content library", "Brand voice consistency"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Check className="size-4 text-blue-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-base font-medium text-slate-800 border-l-4 border-blue-500 pl-4 py-1">Less back-and-forth. More content moving forward.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. CONTENT PRODUCTION AT SCALE (Glassmorphism Gradient)
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-200 via-blue-50 to-white p-10 sm:p-14 shadow-2xl border border-white/80 text-center">
            <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-blue-400 blur-[120px] opacity-30 mix-blend-multiply pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 h-[40rem] w-[40rem] rounded-full bg-purple-300 blur-[120px] opacity-40 mix-blend-multiply pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto mb-12">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">More content without more headcount.</h2>
              <p className="text-xl font-light text-slate-700">Content Worker gives your team the capacity to produce more without constantly adding more people, freelancers, or agencies.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center max-w-6xl mx-auto mb-10 relative z-10">
              {[
                { val: "70", label: "Scheduled social posts/mo" },
                { val: "20", label: "AI content pieces/mo" },
                { val: "8", label: "Blog drafts/mo" },
                { val: "3", label: "Brand profiles" },
                { val: "3,000", label: "AI credits/mo" },
                { val: "5", label: "Team seats" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-white/80 shadow-sm">
                  <div className="text-3xl font-light text-blue-600 mb-2">{stat.val}</div>
                  <div className="text-xs font-medium text-slate-700 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-base font-medium text-slate-800 relative z-10 bg-white/50 inline-block px-6 py-2 rounded-full border border-white">
              Build a bigger content engine with the team you already have.
            </p>
          </div>
        </section>

        {/* =========================================================================
            11. CONTENT REPURPOSING (Dark Slate Section)
            ========================================================================= */}
        <section className="bg-slate-950 py-16 border-b border-slate-800">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-400">Work Smarter</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">Don't create the same idea five times.</h2>
              <p className="text-lg font-light text-slate-400">Create your core content once, then adapt it for every channel.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800">
                <div className="flex flex-col gap-4">
                  {["Blog Article", "LinkedIn Post", "Social Caption", "Newsletter", "Thought Leadership"].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 text-white">
                      <div className="size-8 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-800/50 shrink-0 text-sm">{i+1}</div>
                      <span className="font-light text-lg">{step}</span>
                      {i < 4 && <ArrowDown className="size-5 text-slate-600 ml-auto" />}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-widest block mb-2">Original</span>
                  <div className="bg-slate-800 p-4 rounded-xl text-white font-medium">"The Future of AI in Healthcare"</div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-blue-400 uppercase tracking-widest block mb-3">Content Worker Creates</span>
                  <ul className="space-y-3">
                    {["Long-form article", "LinkedIn thought leadership", "Short social post", "Newsletter edition", "Executive summary"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 font-light">
                        <Check className="size-4 text-blue-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-14">
              <p className="text-base font-medium text-slate-300">One idea can power your content calendar for weeks.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            12. PUBLISHING & WEBSITE INTEGRATION (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">From content creation to publishing.</h2>
              <p className="text-lg font-light text-slate-600">Content shouldn't get stuck in a document. Content Worker helps move approved content toward publication through your connected workflows.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-10 text-sm font-medium text-slate-700">
              {["Lite website publishing", "Content scheduling", "Social publishing workflow", "Blog content", "Newsletter content", "Content calendar", "Approval process"].map((item, i) => (
                <span key={i} className="bg-slate-50 px-5 py-2.5 rounded-full border border-slate-200">
                  {item}
                </span>
              ))}
            </div>

            <div className="text-center">
              <p className="text-base font-medium text-slate-800">Create it. Review it. Get it out into the world.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            13. CONTENT WORKER FOR AGENCIES (Soft Slate Section)
            ========================================================================= */}
        <section className="bg-slate-100/50 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-slate-500">Built For Multi-Brand Teams</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">One content engine. Multiple brands.</h2>
              <p className="text-lg font-light text-slate-600">Managing content for multiple brands can quickly become chaotic. Content Worker lets you organize content production across up to 3 brand profiles, helping teams maintain distinct voices and messaging.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center max-w-5xl mx-auto mb-12">
              {["3 brand profiles", "Separate brand voices", "Shared team workspace", "Centralized content pipeline", "Approval workflows", "Bilingual content", "Content production at scale"].map((b, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-xs font-medium text-slate-700 flex items-center justify-center">
                  {b}
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="/book" className="text-base font-medium text-blue-600 hover:underline">Manage your brands with less complexity. →</a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            14. WHO IS CONTENT WORKER FOR? (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Built for businesses that have something to say.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Marketing Teams", desc: "Create more content without increasing the size of your team." },
                { title: "Founders & Executives", desc: "Turn your expertise into consistent thought leadership." },
                { title: "Agencies", desc: "Produce content for multiple brands and clients." },
                { title: "Professional Services", desc: "Turn industry knowledge into content that builds trust." },
                { title: "B2B Companies", desc: "Create content that educates prospects and supports sales." },
                { title: "Regional Businesses", desc: "Communicate naturally across English and Arabic audiences." }
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
            15. VS TRADITIONAL CONTENT PRODUCTION (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">A smarter way to build your content engine.</h2>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-lg mb-10">
              <table className="w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-6 font-bold text-slate-900 w-1/2">Traditional Content Production</th>
                    <th className="p-6 font-bold text-blue-700 w-1/2 bg-blue-50/50 border-l border-slate-200">With Content Worker</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-light text-slate-700">
                  {[
                    ["Start from scratch", "Start with AI-assisted ideas"],
                    ["Separate tools", "One content workspace"],
                    ["Manual repurposing", "AI-assisted repurposing"],
                    ["Inconsistent brand voice", "Defined brand profiles"],
                    ["Manual workflows", "Structured approvals"],
                    ["English-only workflows", "Arabic + English"],
                    ["Limited content capacity", "70 posts + 20 content pieces + 8 blogs"],
                    ["Multiple freelancers", "One AI-powered content engine"]
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
              <p className="text-lg font-light text-slate-600">AI doesn't replace your expertise. It helps your expertise reach more people.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            16. PRICING SECTION (WIDER CARD, Soft Slate)
            ========================================================================= */}
        <section className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600">Simple Pricing</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Build your content engine.</h2>
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
                  <h3 className="text-3xl font-normal text-slate-900 mb-2">Content Worker</h3>
                  <p className="text-sm font-light text-slate-500">The complete AI content production engine.</p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-5xl font-light text-slate-900">
                    {getCurrencySymbol()}{calculatePrice(99)}
                    <span className="text-base font-normal text-slate-500">/month</span>
                  </div>
                  <p className="text-xs font-light text-slate-400 mt-2">{isAnnual ? "Billed annually with 20% discount." : "Billed monthly."}</p>
                </div>
              </div>
              
              {/* Features split into 2 columns for wider layout */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 text-sm font-light text-slate-700">
                {[
                  "70 scheduled posts/month", "20 AI content pieces/month", "8 blog drafts/month", "Lite website publishing",
                  "Bilingual brand voice", "3 brand profiles", "Arabic + English", "Content categories",
                  "Bulk scheduling", "Lite approval workflow", "3,000 AI credits/month", "5 team seats", "Email + WhatsApp support"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="size-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a href="/book?plan=content" className="flex-1 flex h-14 items-center justify-center bg-blue-600 rounded-none font-normal text-lg text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
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
                  Upgrade to Growth Worker and combine Content + Social in one unified AI workforce →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            17. ROI / VALUE SECTION (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
           <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto mb-10">
              <h2 className="mb-4 text-4xl font-light tracking-tight text-slate-900">What could your team create with more time?</h2>
              <p className="text-lg font-light text-slate-600">Content production shouldn't consume your entire marketing team's week. Content Worker helps reduce the repetitive work involved in creating, adapting, organizing, and managing content.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto mb-8">
              {[
                { val: "70", label: "Scheduled posts/mo" },
                { val: "20", label: "Content pieces/mo" },
                { val: "8", label: "Blog drafts/mo" },
                { val: "3", label: "Brand profiles" }
              ].map((stat, i) => (
                <div key={i} className="p-6 border border-slate-100 bg-slate-50 rounded-2xl">
                  <div className="text-4xl font-light text-blue-600 mb-2">{stat.val}</div>
                  <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <p className="text-base font-medium text-slate-800">More ideas published. More expertise shared. More opportunities created.</p>
           </div>
        </section>

        {/* =========================================================================
            18. ARABIC + ENGLISH REGIONS (Dark Slate Section)
            ========================================================================= */}
        <section className="bg-slate-950 py-16 border-b border-slate-800">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 text-center">
             <div className="max-w-4xl mx-auto mb-12">
              <h2 className="mb-4 text-4xl font-light tracking-tight text-white">Built for businesses between markets.</h2>
              <p className="text-lg font-light text-slate-400">Whether you're operating in Australia, expanding across the UAE, or building your presence in Saudi Arabia, your content needs to work across cultures and languages. HIVENOX Content Worker gives your team a bilingual content engine designed for modern regional businesses.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {[
                { title: "Australia", desc: "Professional English content for local and international audiences." },
                { title: "UAE", desc: "Bilingual content for diverse, multilingual markets." },
                { title: "Saudi Arabia", desc: "Arabic-first communication with regional and cultural context." }
              ].map((region, i) => (
                <div key={i} className="bg-slate-900 p-8 rounded-[1.5rem] border border-slate-800">
                  <Globe className="size-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-normal text-white mb-2">{region.title}</h3>
                  <p className="text-sm font-light text-slate-400">{region.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">One content engine. Multiple markets.</p>
          </div>
        </section>

        {/* =========================================================================
            19. FAQ (White Section - Reduced padding)
            ========================================================================= */}
        <section className="bg-white py-12 border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <h3 className="mb-10 text-center text-3xl sm:text-4xl font-light tracking-tight text-slate-900">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {[
                { q: "What is HIVENOX Content Worker?", a: "Content Worker is an AI-powered content production Worker that helps businesses create social posts, blog articles, newsletters, thought leadership, and other content at scale." },
                { q: "How much does Content Worker cost?", a: "Content Worker is $99/month. Annual billing provides a 20% saving." },
                { q: "How many blog articles can I create?", a: "The plan includes 8 blog drafts per month." },
                { q: "How many social posts are included?", a: "Content Worker includes 70 scheduled social posts per month." },
                { q: "Can I create Arabic content?", a: "Yes. Content Worker supports Arabic and English content creation, alongside RTL, Hijri, and Ramadan-ready capabilities." },
                { q: "Can I manage multiple brands?", a: "Yes. The plan includes 3 brand profiles." },
                { q: "Can my team collaborate?", a: "Yes. Content Worker includes 5 team seats and supports content review and approval workflows." },
                { q: "Can Content Worker create newsletters?", a: "Yes. Newsletter creation is one of the content formats supported by the Worker." },
                { q: "Can I repurpose existing content?", a: "Yes. Content Worker is designed to help adapt core ideas and content into multiple formats and channels." },
                { q: "Can I try Content Worker for free?", a: "Yes. You can start with a 7-day free trial without a credit card." },
                { q: "What is the difference between Content Worker and Growth Worker?", a: "Content Worker focuses on content creation and production. Growth Worker combines Social + Content and adds broader marketing automation, advanced analytics, ROI tracking, A/B testing, reporting, additional brands, and a monthly strategy session." }
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
            20. FINAL CTA (Blue Background - Smaller size)
            ========================================================================= */}
        <section className="py-12 px-5 sm:px-6 lg:px-8 bg-slate-50">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-blue-600 px-6 py-16 sm:px-12 sm:py-20 text-center shadow-xl">
              {/* Decorative blurs */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[30rem] w-[30rem] rounded-full bg-blue-500 blur-[100px] opacity-60 pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[30rem] w-[30rem] rounded-full bg-blue-800 blur-[100px] opacity-40 pointer-events-none" />
              
              <div className="relative z-10 mx-auto max-w-3xl">
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-200 bg-blue-800/30 px-4 py-1.5 rounded-full border border-blue-400/30">
                  Your AI Content Team
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">
                  Your ideas deserve to be everywhere.
                </h2>
                <p className="mb-10 text-lg font-light leading-relaxed text-blue-100">
                  Turn your expertise into content that builds trust, starts conversations, and keeps your brand visible. Start your 7-day trial and build your content engine with HIVENOX.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <a href="/book?plan=content" className="inline-flex h-14 items-center justify-center bg-white px-10 text-lg font-normal text-blue-700 rounded-none transition-all hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5">
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