"use client";

import { useState } from "react";
import { Check, ArrowDown, Globe, Shield, TrendingUp, Sparkles, Calendar, Clock, RefreshCw, Share2, BarChart3, Users, Link as LinkIcon, Zap, Languages, LayoutGrid } from "lucide-react";

export default function SocialWorkerPage() {
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
            1. HERO SECTION (Wider, gradient background)
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            
            <span className="mb-6 text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-100 px-4 py-1.5 rounded-full border border-purple-200 shadow-sm">
              AI Worker · Social Media
            </span>
            
            <h1 className="mb-6 max-w-5xl text-5xl font-light tracking-tight text-slate-900 lg:text-7xl">
              Your social media team, <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">always on.</span>
            </h1>
            
            <p className="mb-6 text-2xl font-light text-slate-700">
              Create less. Publish more. Grow consistently.
            </p>

            <p className="mb-10 max-w-3xl text-lg font-light leading-relaxed text-slate-600">
              HIVENOX Social Worker handles the repetitive work behind your social media — from content planning and scheduling to publishing, hashtags, engagement, and performance tracking. Build your presence across multiple platforms without spending hours every week managing your social calendar.
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-3 text-sm font-medium tracking-wide text-slate-700">
              {[
                "6 social platforms",
                "50 scheduled posts/month",
                "1,500 AI credits/month",
                "Arabic + English native",
                "RTL, Hijri & Ramadan-ready",
                "3 team seats",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-5 py-2 backdrop-blur-sm">
                  <Check className="size-4 text-blue-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a href="/book?plan=social" className="inline-flex h-14 items-center justify-center rounded-none bg-blue-600 px-10 text-lg font-normal text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5">
                Start 7-Day Free Trial
              </a>
              <a href="/book" className="inline-flex h-14 items-center justify-center rounded-none border-2 border-slate-300 bg-white/50 backdrop-blur-md px-10 text-lg font-normal text-slate-800 transition-colors hover:border-slate-800 hover:bg-slate-800 hover:text-white">
                Book a Demo
              </a>
            </div>

            <p className="text-sm font-medium text-slate-500 mb-16">
              No credit card · No lock-in · Cancel anytime
            </p>

            {/* Hero Visual Mockup */}
            <div className="w-full max-w-6xl rounded-[2rem] border border-slate-200 bg-white/80 p-4 sm:p-8 shadow-2xl backdrop-blur-xl text-left relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-[2rem] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-slate-200 pb-5 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="size-3.5 rounded-full bg-red-400" />
                    <div className="size-3.5 rounded-full bg-yellow-400" />
                    <div className="size-3.5 rounded-full bg-green-400" />
                    <span className="ml-4 text-sm font-mono text-slate-400">hivenox://social-worker/dashboard</span>
                  </div>
                  <span className="text-xs bg-purple-100 text-purple-700 px-4 py-1.5 font-bold uppercase tracking-wider rounded-full">Arabic / English Active</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <Calendar className="size-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">Content Calendar</h4>
                    <p className="text-sm text-slate-500 mt-2">12 posts scheduled this week across all platforms.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="size-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                      <Share2 className="size-6 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">Multi-Platform Sync</h4>
                    <p className="text-sm text-slate-500 mt-2">Publishing to LinkedIn, X, Instagram, and TikTok.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="size-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                      <Sparkles className="size-6 text-green-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">AI Analytics Insights</h4>
                    <p className="text-sm text-slate-500 mt-2">+42% engagement boost tracked from best-time posting.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. THE PROBLEM (Soft Purple Section)
            ========================================================================= */}
        <section className="bg-purple-50/80 border-y border-purple-100 py-24">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-purple-600">The Problem</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Your audience is always online.<br/> Your team shouldn't have to be.
              </h2>
              <p className="text-lg font-light leading-relaxed text-slate-700 mb-6">
                Social media demands constant attention. Plan the content. Write the captions. Find the hashtags. Schedule every post. Keep every channel active. Respond to engagement. Check the numbers. Then do it all again next week.
              </p>
              <p className="text-lg font-medium leading-relaxed text-purple-900 bg-purple-100/50 inline-block p-4 rounded-xl">
                HIVENOX Social Worker takes the repetitive work off your plate — so your team can focus on the ideas, conversations, and decisions that actually move your business forward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { title: "Always creating", desc: "Never-ending content demands drain your team's time." },
                { title: "Always scheduling", desc: "Managing multiple platforms manually creates unnecessary work." },
                { title: "Always measuring", desc: "Scattered analytics make it difficult to understand what's actually working." }
              ].map((card, i) => (
                <div key={i} className="bg-white p-10 rounded-[2rem] border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-normal text-slate-900 mb-4">{card.title}</h3>
                  <p className="text-base font-light text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <span className="font-mono text-sm tracking-tight text-purple-600">
                Let your AI Worker handle the routine. Your team handles the strategy.
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. MEET YOUR SOCIAL WORKER (White Section)
            ========================================================================= */}
        <section className="bg-white py-24 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600">Your AI Social Media Team</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">One Worker. Your entire social presence.</h2>
              <p className="text-lg font-light text-slate-600">
                Social Worker brings your social media workflow into one intelligent workspace. From planning to publishing, HIVENOX helps you stay consistent across your channels while adapting content for your audience, language, and market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Plan", icon: Calendar, color: "text-blue-500", bg: "bg-blue-50", desc: "Build and manage your content calendar in one place." },
                { title: "Create", icon: Sparkles, color: "text-purple-500", bg: "bg-purple-50", desc: "Generate captions, hashtags, and social content with AI." },
                { title: "Schedule", icon: Clock, color: "text-green-500", bg: "bg-green-50", desc: "Plan your posts ahead of time and keep your channels active." },
                { title: "Publish", icon: Share2, color: "text-orange-500", bg: "bg-orange-50", desc: "Publish across multiple social platforms from one workspace." },
                { title: "Recycle", icon: RefreshCw, color: "text-pink-500", bg: "bg-pink-50", desc: "Automatically bring evergreen content back into rotation." },
                { title: "Measure", icon: BarChart3, color: "text-indigo-500", bg: "bg-indigo-50", desc: "Track performance and understand what your audience responds to." }
              ].map((feat, i) => (
                <div key={i} className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className={`size-14 rounded-2xl ${feat.bg} flex items-center justify-center mb-6`}>
                    <feat.icon className={`size-7 ${feat.color}`} />
                  </div>
                  <h3 className="text-2xl font-normal text-slate-900 mb-3">{feat.title}</h3>
                  <p className="text-base font-light text-slate-600">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. EVERYTHING YOU NEED (Dark Slate Section for massive contrast)
            ========================================================================= */}
        <section className="bg-slate-950 py-24 relative overflow-hidden">
          {/* Subtle glow effects */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">Your social media, on autopilot.</h2>
              <p className="text-lg font-light text-slate-400">Social Worker handles the operational side of social media so you can spend more time growing your brand.</p>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {[
                { title: "Feature 01 — Multi-Platform Publishing", sub: "Publish everywhere from one place.", desc: "Schedule and manage your social content across 6 platforms without switching between multiple tools.", list: ["Multi-platform scheduling", "Centralized publishing", "Content calendar", "Platform-specific planning", "Scheduled post management"] },
                { title: "Feature 02 — AI-Powered Content", sub: "Never start with a blank screen.", desc: "Turn your ideas into ready-to-publish social content with AI-assisted captions, hashtags, and content suggestions. Create content faster while keeping your brand voice consistent.", list: [] },
                { title: "Feature 03 — Best-Time Posting", sub: "Publish when your audience is most likely to listen.", desc: "Use intelligent timing recommendations to help identify better opportunities to publish your content. Spend less time guessing when to post.", list: [] },
                { title: "Feature 04 — Evergreen Content Recycling", sub: "Your best content shouldn't disappear after one post.", desc: "Keep valuable evergreen content working for you. Social Worker helps recycle content so your strongest posts can continue reaching your audience over time.", list: [] },
                { title: "Feature 05 — Bilingual Social Content", sub: "One brand. Two languages. One workflow.", desc: "Create and manage social content in English and Arabic.", list: ["Native Arabic AI", "Arabic + English content", "RTL support", "Bilingual hashtags", "Hijri calendar support", "Ramadan-aware planning"] }
              ].map((f, i) => (
                <div key={i} className="bg-slate-900/50 p-10 rounded-[2rem] border border-slate-800 backdrop-blur-sm">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 block">{f.title}</span>
                  <h3 className="text-3xl font-normal text-white mb-4">{f.sub}</h3>
                  <p className="text-lg font-light text-slate-300 mb-6 max-w-3xl">{f.desc}</p>
                  {f.list.length > 0 && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800/50">
                      {f.list.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-base font-light text-slate-300">
                          <Check className="size-5 text-blue-500 shrink-0 bg-blue-500/10 p-1 rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-8 rounded-[2rem] border border-blue-800/50 text-center mt-12">
                <p className="text-base font-medium text-blue-200">
                  HIVENOX is designed for businesses operating across Australia, the UAE, and Saudi Arabia — where bilingual communication isn't an extra feature. It's part of the job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. YOUR SOCIAL WORKFLOW (White Section)
            ========================================================================= */}
        <section className="bg-white py-24 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-slate-400">How It Works</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">From idea to published post —<br/>without the busywork.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto mb-16 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-slate-100 via-blue-200 to-slate-100 z-0" />
              
              {[
                { step: "01", title: "Plan", desc: "Build your content calendar and decide what you want to say." },
                { step: "02", title: "Create", desc: "Use AI to generate captions, hashtags, and content ideas." },
                { step: "03", title: "Schedule", desc: "Choose your publishing dates and organize your upcoming content." },
                { step: "04", title: "Publish", desc: "Publish across your connected social platforms." },
                { step: "05", title: "Measure", desc: "Review performance and learn what works." }
              ].map((s, i) => (
                <div key={i} className="relative z-10 bg-slate-50 p-8 rounded-[2rem] border border-slate-200 text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="size-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mx-auto mb-6 shadow-lg shadow-blue-600/20">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-normal text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-sm font-light text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-base font-medium text-slate-700 bg-slate-100 inline-block px-6 py-3 rounded-full">
                One workflow. Multiple channels. Less manual work.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. SOCIAL MEDIA CONTENT CALENDAR (Soft Blue Section)
            ========================================================================= */}
        <section className="bg-blue-50/50 py-24 border-b border-blue-100">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">See everything before it goes live.</h2>
              <p className="text-lg font-light text-slate-600">Your entire social publishing schedule, organized in one visual calendar. Plan campaigns, manage upcoming posts, review scheduled content, and keep your team aligned.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-blue-100 shadow-xl shadow-blue-900/5 max-w-6xl mx-auto mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-slate-700">
                {["Monthly calendar view", "Scheduled posts", "Drafts", "Published content", "Campaign organization", "Platform filters", "Content status", "Team collaboration"].map((c, i) => (
                  <div key={i} className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 flex items-center justify-center text-center hover:bg-blue-100/50 transition-colors">
                    {c}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <a href="/book?plan=social" className="inline-flex h-14 items-center justify-center bg-blue-600 px-10 text-lg font-normal text-white rounded-none transition-all hover:bg-blue-700 hover:shadow-lg">
                Explore Social Worker
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. MANAGE EVERY CHANNEL (White Section)
            ========================================================================= */}
        <section className="bg-white py-24 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">One login. Six social channels.</h2>
              <p className="text-lg font-light text-slate-600">Stop jumping between social platforms just to keep your content moving. Social Worker brings your publishing workflow together so your team can manage multiple channels from a single workspace.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto mb-16">
              {[
                { num: 1, color: "bg-indigo-100 text-indigo-700" },
                { num: 2, color: "bg-slate-900 text-white" },
                { num: 3, color: "bg-pink-100 text-pink-700" },
                { num: 4, color: "bg-sky-100 text-sky-700" },
                { num: 5, color: "bg-red-100 text-red-700" },
                { num: 6, color: "bg-blue-100 text-blue-700" }
              ].map((item) => (
                <div key={item.num} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center hover:shadow-md transition-shadow group">
                  <div className={`size-16 mx-auto rounded-full ${item.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <LayoutGrid className="size-6 opacity-70" />
                  </div>
                  <span className="font-medium text-slate-800 text-base">Social Channel</span>
                  <span className="text-xs font-mono text-slate-400 block mt-2">Platform 0{item.num}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-base font-light text-slate-600">Connect your channels. Plan once. Publish everywhere.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. BUILT FOR ARABIC + ENGLISH (Rich Purple Gradient Section)
            ========================================================================= */}
        <section className="relative py-24 overflow-hidden border-b border-purple-900">
          {/* Deep dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900" />
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-purple-300">Built For The Region</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">Global reach. Local intelligence.</h2>
              <p className="text-lg font-light text-purple-100/80 leading-relaxed">
                Social media doesn't sound the same in every market. HIVENOX Social Worker understands that your audience may switch between languages, calendars, and cultural contexts. That's why bilingual capability is built directly into the Worker.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {[
                { title: "Arabic AI", desc: "Create content designed for Arabic-speaking audiences." },
                { title: "English AI", desc: "Create clear, natural English content." },
                { title: "RTL Support", desc: "Designed for right-to-left experiences." },
                { title: "Hijri Support", desc: "Plan content around the Hijri calendar." },
                { title: "Ramadan Engine", desc: "Build campaigns around Ramadan and seasonal moments." },
                { title: "Bilingual Hashtags", desc: "Discover and organize hashtags across languages." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                  <p className="text-base font-light text-purple-200/70">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-purple-200 bg-purple-900/50 inline-block px-6 py-3 rounded-full border border-purple-700/50">
                Built for businesses operating between cultures — not just translating between them.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. LINK-IN-BIO (White Section)
            ========================================================================= */}
        <section className="bg-white py-24 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <LinkIcon className="size-8" />
              </div>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Turn your social traffic into action.</h2>
              <p className="text-lg font-light text-slate-600">Give your audience one place to discover everything you want them to see. Create a simple link-in-bio experience that connects your social audience to your website, campaigns, products, services, and more.</p>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 max-w-5xl mx-auto text-center mb-16">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-base font-light text-slate-800">
                {["Centralized links", "Campaign destinations", "Website traffic", "Product links", "Lead generation", "Mobile-friendly experience"].map((b, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">{b}</div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <a href="/book?plan=social" className="inline-flex h-14 items-center justify-center bg-blue-600 px-10 text-lg font-normal text-white rounded-none transition-all hover:bg-blue-700 shadow-md hover:shadow-xl">
                Turn attention into action.
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. TEAM COLLABORATION (Soft Slate Section)
            ========================================================================= */}
        <section className="bg-slate-100/50 py-24 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <div>
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-8">
                  <Users className="size-8" />
                </div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Your team stays in sync.</h2>
                <p className="text-lg font-light text-slate-600 mb-8">Social media works better when everyone knows what's happening. Bring your team into one shared workflow and keep content moving without endless messages, spreadsheets, and scattered approvals.</p>
                <p className="text-base font-medium text-slate-800 border-l-4 border-purple-500 pl-4 py-1">Everyone sees what's planned. Everyone knows what's next.</p>
              </div>
              
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                  {["3 team seats", "Shared content calendar", "Content management", "Scheduling workflow", "Team collaboration", "Centralized workspace"].map((t, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                      <Check className="size-5 text-purple-500 shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            11. ANALYTICS & PERFORMANCE (Dark Slate Section)
            ========================================================================= */}
        <section className="bg-slate-950 py-24 border-b border-slate-800">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-400">Measure What Matters</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">Don't just post. Learn.</h2>
              <p className="text-lg font-light text-slate-400">Understand how your social content is performing and identify the patterns that matter. Social Worker gives you a clearer view of your content performance so you can make better decisions about what to publish next.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {[
                { title: "Content Performance", desc: "See which posts are getting attention." },
                { title: "Engagement", desc: "Understand how your audience interacts with your content." },
                { title: "Publishing Insights", desc: "Identify patterns in your posting activity." },
                { title: "Performance Trends", desc: "Track how your social presence changes over time." }
              ].map((card, i) => (
                <div key={i} className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 hover:border-slate-700 transition-colors">
                  <h3 className="text-2xl font-normal text-white mb-3">{card.title}</h3>
                  <p className="text-base font-light text-slate-400">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-base font-medium text-blue-300 bg-blue-900/30 inline-block px-6 py-3 rounded-full border border-blue-800/50">
                See what's working. Do more of it.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            12. WHY HIVENOX SOCIAL WORKER? (White Section)
            ========================================================================= */}
        <section className="bg-white py-24 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Built to give your team time back.</h2>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-xl mb-12">
              <table className="w-full text-left text-base">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-8 font-bold text-slate-900 w-1/2">Without Social Worker</th>
                    <th className="p-8 font-bold text-blue-700 w-1/2 bg-blue-50/50 border-l border-slate-200">With Social Worker</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-light text-slate-700">
                  {[
                    ["Multiple publishing tools", "One centralized workspace"],
                    ["Manual scheduling", "Automated scheduling"],
                    ["Repetitive content creation", "AI-assisted creation"],
                    ["One language at a time", "Arabic + English natively integrated"],
                    ["Manual content recycling", "Intelligent evergreen recycling"],
                    ["Scattered workflows across apps", "One shared visual calendar"],
                    ["Guessing performance metrics", "Clear performance insights"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="p-8 text-slate-500">{row[0]}</td>
                      <td className="p-8 font-medium text-slate-900 bg-blue-50/30 border-l border-slate-100 flex items-center gap-3">
                        <Check className="size-5 text-blue-500 shrink-0" />
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <p className="text-lg font-light text-slate-600">The goal isn't to replace your social team. It's to give them a better way to work.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            13. PRICING SECTION (White Section)
            ========================================================================= */}
        <section className="bg-slate-50 py-24 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600">Simple Pricing</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Start growing your social presence today.</h2>
            </div>

            {/* Currency / Annual Toggles */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <div className="flex items-center p-1 bg-white border border-slate-200 rounded-none shadow-sm">
                <button onClick={() => setCurrency("USD")} className={`px-8 py-3 text-sm font-medium rounded-none transition-colors ${currency === "USD" ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>USD</button>
                <button onClick={() => setCurrency("AUD")} className={`px-8 py-3 text-sm font-medium rounded-none transition-colors ${currency === "AUD" ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>AUD</button>
              </div>
              <div className="flex items-center p-1 bg-white border border-slate-200 rounded-none shadow-sm">
                <button onClick={() => setIsAnnual(false)} className={`px-8 py-3 text-sm font-medium rounded-none transition-colors ${!isAnnual ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>Monthly</button>
                <button onClick={() => setIsAnnual(true)} className={`px-8 py-3 text-sm font-medium rounded-none transition-colors ${isAnnual ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>Annual (Save 20%)</button>
              </div>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-[2.5rem] border-4 border-blue-600 p-10 shadow-2xl relative">
              <div className="absolute top-0 right-8 -mt-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 shadow-md">
                Most Popular
              </div>
              <h3 className="text-2xl font-normal text-slate-900 mb-2">Social Worker</h3>
              <div className="my-6 text-5xl font-light text-slate-900">
                {getCurrencySymbol()}{calculatePrice(79)}
                <span className="text-base font-normal text-slate-500">/month</span>
              </div>
              <p className="text-sm font-light text-slate-500 mb-8">{isAnnual ? "Billed annually with 20% discount." : "Billed monthly."}</p>
              
              <ul className="space-y-4 mb-10 text-base font-light text-slate-700">
                {[
                  "50 scheduled posts/month", "6 social platforms", "1,500 AI credits/month", "Link-in-bio page",
                  "Bilingual hashtags", "Best-time posting", "Evergreen content recycling", "Content calendar",
                  "Arabic AI natively integrated", "RTL support out-of-box", "Hijri calendar support", "Ramadan engine", "3 team seats", "Email + WhatsApp support"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="size-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a href="/book?plan=social" className="flex h-14 w-full items-center justify-center bg-blue-600 rounded-none font-normal text-lg text-white mb-6 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Start 7-Day Free Trial
              </a>
              
              <p className="text-center text-sm font-light text-slate-500 mb-8">No credit card required. Cancel anytime.</p>

              <div className="pt-8 border-t border-slate-100 text-center bg-slate-50 -mx-10 -mb-10 p-8 rounded-b-[2.2rem]">
                <p className="text-sm font-medium text-slate-900 mb-2">Need more capacity?</p>
                <a href="/book?plan=growth" className="text-sm font-normal text-blue-600 hover:underline">
                  Upgrade to Growth Worker and combine Social + Content in one unified AI workforce →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            14. ROI / VALUE SECTION (Glassmorphism Gradient)
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 py-24 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-200 via-blue-50 to-white p-10 sm:p-16 lg:p-20 shadow-2xl border border-white/80">
            {/* Background Blur Orbs */}
            <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-blue-400 blur-[120px] opacity-30 mix-blend-multiply pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 h-[40rem] w-[40rem] rounded-full bg-purple-300 blur-[120px] opacity-40 mix-blend-multiply pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">What would your team do with the time back?</h2>
              <p className="text-xl font-light text-slate-700">Social media management can consume hours every week. HIVENOX Social Worker automates the repetitive work so your team can spend that time on strategy, customers, and growth.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto mb-12 relative z-10">
              {[
                { val: "50", label: "Posts scheduled every month" },
                { val: "6", label: "Platforms managed simultaneously" },
                { val: "1,500", label: "AI credits every month" },
                { val: "3", label: "Team seats included" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/80 shadow-sm hover:bg-white/80 transition-colors">
                  <div className="text-5xl font-light text-blue-600 mb-3">{stat.val}</div>
                  <div className="text-sm font-medium text-slate-700">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center relative z-10">
              <p className="text-lg font-medium text-blue-900 bg-white/50 inline-block px-8 py-4 rounded-full border border-white">
                Less time managing social. More time growing your business.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            15. WHO IS SOCIAL WORKER FOR? (White Section)
            ========================================================================= */}
        <section className="bg-white py-24 border-t border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Built for teams that need to stay visible.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                { title: "Small Businesses", desc: "Keep your social presence active without hiring a full-time social media manager." },
                { title: "Marketing Teams", desc: "Automate repetitive publishing and spend more time on strategy." },
                { title: "Agencies", desc: "Manage social workflows across clients and campaigns." },
                { title: "Founders", desc: "Stay visible without spending your day inside social platforms." },
                { title: "Regional Businesses", desc: "Create bilingual content for Arabic and English-speaking audiences." },
                { title: "Multi-Location Businesses", desc: "Keep social content consistent across markets and locations." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-normal text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-base font-light text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            16. FAQ (White Section)
            ========================================================================= */}
        <section className="bg-white py-24 border-t border-slate-200">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <h3 className="mb-16 text-center text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              {[
                { q: "Is Social Worker an AI social media manager?", a: "Yes. Social Worker is an AI-powered social media Worker designed to help with planning, content creation, scheduling, publishing, recycling, and performance tracking." },
                { q: "How many social platforms can I manage?", a: "The Social Worker plan supports publishing and scheduling across 6 social platforms." },
                { q: "How many posts can I schedule?", a: "The Social Worker plan includes 50 scheduled posts per month." },
                { q: "Does it support Arabic?", a: "Yes. Social Worker includes Arabic AI, bilingual hashtags, RTL support, Hijri support, and a Ramadan engine natively integrated." },
                { q: "Can I manage my social media team?", a: "Yes. The plan includes 3 team seats for collaboration, approvals, and shared scheduling." },
                { q: "Does it automatically post?", a: "Social Worker is designed around scheduling and publishing workflows so your team can plan content in advance and manage multiple channels from one place." },
                { q: "Can I try it before paying?", a: "Yes. You can start a 7-day free trial without a credit card to see exactly how it fits your workflow." },
                { q: "What happens after the trial?", a: "You can continue with the paid Social Worker plan, move to another HIVENOX Worker, or choose the free plan if it meets your needs." },
                { q: "Can I upgrade later?", a: "Yes. You can move from Social Worker to Content Worker or Growth Worker instantly as your needs grow." },
                { q: "What's the difference between Social Worker and Growth Worker?", a: "Social Worker focuses strictly on social media management and publishing. Growth Worker combines Social + Content and adds more advanced workflows, blogs, long-form content, multiple brands, and comprehensive strategy." }
              ].map((faq, index) => (
                <details key={index} className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-white">
                  <summary className="flex cursor-pointer items-center justify-between p-6 sm:p-8 text-lg font-normal text-slate-900 outline-none list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ArrowDown className="size-6 shrink-0 text-blue-500 transition-transform duration-300 group-open:rotate-180 ml-6 bg-blue-100 rounded-full p-1" />
                  </summary>
                  <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 text-base font-light leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            17. FINAL CTA (Vibrant Blue Background)
            ========================================================================= */}
        <section className="py-24 px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[3rem] bg-blue-600 px-6 py-24 sm:px-16 sm:py-32 lg:px-24 text-center shadow-2xl">
              {/* Decorative blurs */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[30rem] w-[30rem] rounded-full bg-blue-500 blur-[100px] opacity-60 pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[30rem] w-[30rem] rounded-full bg-blue-800 blur-[100px] opacity-40 pointer-events-none" />
              
              <div className="relative z-10 mx-auto max-w-4xl">
                <span className="mb-6 inline-block text-xs font-bold uppercase tracking-widest text-blue-200 bg-blue-800/30 px-4 py-2 rounded-full border border-blue-400/30">
                  Your Social Media Workforce
                </span>
                <h2 className="mb-8 text-5xl font-light tracking-tight text-white lg:text-7xl">
                  Stop managing social media.<br/> Start growing it.
                </h2>
                <p className="mb-12 text-xl font-light leading-relaxed text-blue-100 max-w-3xl mx-auto">
                  Let HIVENOX Social Worker handle the repetitive work behind your social presence — while your team focuses on the work that matters. Start free for 7 days. No credit card. No lock-in.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                  <a href="/book?plan=social" className="inline-flex h-16 items-center justify-center bg-white px-12 text-xl font-normal text-blue-700 rounded-none transition-all hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1">
                    Start 7-Day Free Trial
                  </a>
                  <a href="/book" className="inline-flex h-16 items-center justify-center border-2 border-blue-400 bg-transparent px-12 text-xl font-normal text-white rounded-none transition-colors hover:border-white hover:bg-white/10">
                    Book a Demo
                  </a>
                </div>

                <p className="text-sm font-light text-blue-200">
                  Arabic + English · Built for Australia, UAE & Saudi Arabia · Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}