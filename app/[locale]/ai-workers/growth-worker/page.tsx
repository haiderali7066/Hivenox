"use client";

import { useState } from "react";
import { Check, ArrowDown, FileText, PenTool, CheckCircle, Send, TrendingUp, Sparkles, Split, MessageSquare, Repeat, Building2, Globe, Users, FileSignature, ArrowRight, BarChart, LineChart, Target, Zap, Share2, PieChart, Layers, FlaskConical, FileBarChart, Workflow, Briefcase, ChevronRight } from "lucide-react";

export default function GrowthWorkerPage() {
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
      
      {/* Background Subtle Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/80 via-white to-purple-100/60" />

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-28 pb-16 sm:px-6 lg:px-8 mt-20">
          <div className="flex flex-col items-center text-center">
            
            <span className="mb-6 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200 shadow-sm flex items-center gap-2">
              <Sparkles className="size-3" /> AI WORKER · GROWTH ENGINE
            </span>
            
            <h1 className="mb-6 max-w-5xl text-5xl font-light tracking-tight text-slate-900 lg:text-7xl">
              Your entire growth engine, <br/>
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">powered by AI.</span>
            </h1>
            
            <p className="mb-6 text-2xl font-light text-slate-700">
              Social + Content. Unified. Automated. Built to grow.
            </p>

            <p className="mb-10 max-w-3xl text-lg font-light leading-relaxed text-slate-600">
              HIVENOX Growth Worker brings your social media and content operations together in one intelligent AI workforce. Create content. Publish everywhere. Track performance. Measure ROI. Manage multiple brands. And get strategic guidance — all from one place.
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-3 text-sm font-medium tracking-wide text-slate-700 max-w-4xl">
              {[
                "Social + Content unified",
                "200 posts/month",
                "40 blogs/month",
                "20 videos/month",
                "3 brand profiles",
                "5,000 AI credits/month",
                "10 team seats",
                "Monthly strategy session"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-5 py-2 backdrop-blur-sm">
                  <Check className="size-4 text-blue-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            
            <div className="mb-12 inline-block px-4 py-1.5 bg-amber-100 border border-amber-200 text-amber-800 rounded-full text-xs font-bold tracking-widest shadow-sm">
              ★ MOST POPULAR · BEST VALUE
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="/book?plan=growth" className="inline-flex h-14 items-center justify-center rounded-none bg-blue-600 px-10 text-lg font-normal text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5">
                Start 7-Day Free Trial
              </a>
              <a href="/book" className="inline-flex h-14 items-center justify-center rounded-none border-2 border-slate-300 bg-white/50 backdrop-blur-md px-10 text-lg font-normal text-slate-800 transition-colors hover:border-slate-800 hover:bg-slate-800 hover:text-white">
                Book a Demo
              </a>
            </div>

            <p className="text-sm font-medium text-slate-500 mb-14">
              No credit card · No lock-in · Cancel anytime
            </p>

            {/* Hero Dashboard Visual */}
            <div className="w-full max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-8 shadow-2xl relative overflow-hidden text-left">
              <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-100 pb-5 mb-8 gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-3.5 rounded-full bg-slate-200" />
                  <div className="size-3.5 rounded-full bg-slate-200" />
                  <div className="size-3.5 rounded-full bg-slate-200" />
                  <span className="ml-4 text-sm font-bold text-slate-800">Growth Worker</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Plan → Create → Publish → Analyze → Optimize
                </div>
              </div>

              {/* Dashboard Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {[
                  { label: "Content Published", val: "200 / 200", color: "text-blue-600" },
                  { label: "Blog Content", val: "32 / 40", color: "text-purple-600" },
                  { label: "Video Content", val: "16 / 20", color: "text-pink-600" },
                  { label: "Campaign ROI", val: "+42%", color: "text-green-600" },
                  { label: "Active Brands", val: "3 / 3", color: "text-slate-800" },
                  { label: "Team Members", val: "8 / 10", color: "text-slate-800" }
                ].map((m, i) => (
                  <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">{m.label}</div>
                    <div className={`text-2xl font-light ${m.color}`}>{m.val}</div>
                  </div>
                ))}
              </div>

              {/* Dashboard Panels */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2"><BarChart className="size-4" /> Social Performance</h4>
                  <div className="space-y-4 flex-1">
                    {["Engagement", "Reach", "Growth", "Best-performing content"].map((stat, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-slate-200 pb-2 last:border-0">
                        <span className="text-sm text-slate-600">{stat}</span>
                        <div className="h-2 w-16 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500" style={{width: `${Math.random() * 50 + 50}%`}} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2"><Workflow className="size-4" /> Content Pipeline</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Draft", "Review", "Approved", "Scheduled", "Published"].map((stage, i) => (
                      <span key={i} className={`px-3 py-1.5 text-xs font-medium rounded-md ${i === 4 ? 'bg-green-100 text-green-700' : 'bg-white border border-slate-200 text-slate-600'}`}>
                        {stage} {i < 4 && "→"}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2"><Target className="size-4" /> ROI Dashboard</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["Campaign spend", "Leads generated", "Revenue attributed", "Cost per lead"].map((m, i) => (
                      <div key={i} className="bg-white p-3 rounded-lg border border-slate-200">
                        <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">{m}</div>
                        <div className="text-sm font-medium text-slate-800">Tracking...</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Recommendation Box */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-4 items-start">
                <div className="bg-blue-600 text-white p-2 rounded-lg shrink-0 mt-1">
                  <Sparkles className="size-4" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-blue-900 mb-1">AI Recommendation</h5>
                  <p className="text-sm text-blue-800">"Your LinkedIn content is outperforming other channels by 34%. Consider increasing publishing frequency next week."</p>
                </div>
              </div>

            </div>

            <p className="text-center mt-8 text-sm font-medium text-slate-500">
              Everything you need to build, automate, and scale your marketing engine.
            </p>
          </div>
        </section>

        {/* =========================================================================
            3. THE PROBLEM
            ========================================================================= */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-400">The Growth Problem</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight">
                Growth shouldn't require an entire agency.
              </h2>
              <p className="text-lg font-light leading-relaxed text-slate-400 max-w-3xl mx-auto mb-6">
                Modern marketing is fragmented. One tool for social media. Another for content. Another for analytics. Another for reporting. Another for client communication. And somehow, your team is expected to connect everything together.
              </p>
              <p className="text-lg font-medium leading-relaxed text-blue-300 bg-blue-900/30 inline-block px-6 py-3 rounded-full border border-blue-800/50">
                HIVENOX Growth Worker brings the core growth workflow into one unified AI workforce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { title: "Too Many Tools", desc: "Your marketing workflow is scattered across platforms." },
                { title: "Too Much Manual Work", desc: "Your team spends more time managing marketing than improving it." },
                { title: "No Clear ROI", desc: "You know what you're spending, but not always what it's returning." },
                { title: "Content Doesn't Scale", desc: "Creating enough content across channels requires more people and more time." }
              ].map((card, i) => (
                <div key={i} className="bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700/50 backdrop-blur-sm">
                  <h3 className="text-xl font-normal text-white mb-3">{card.title}</h3>
                  <p className="text-sm font-light text-slate-400">{card.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <span className="font-mono text-sm tracking-tight text-slate-500">
                Growth Worker connects the work that usually lives in five different systems.
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. MEET GROWTH WORKER
            ========================================================================= */}
        <section className="bg-white py-20 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600">Your AI Growth Team</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">One Worker. Your entire marketing engine.</h2>
              <p className="text-lg font-light text-slate-600">
                Growth Worker combines the capabilities of Social Worker + Content Worker and adds the automation, analytics, reporting, and strategic intelligence needed to scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {[
                { title: "Create", icon: PenTool, color: "text-blue-500", bg: "bg-blue-50", desc: "Generate content, blogs, videos, social posts, and campaigns." },
                { title: "Distribute", icon: Share2, color: "text-purple-500", bg: "bg-purple-50", desc: "Schedule and publish across your social channels and content pipeline." },
                { title: "Optimize", icon: Zap, color: "text-amber-500", bg: "bg-amber-50", desc: "Measure performance, track ROI, test what works, and continuously improve." }
              ].map((pillar, i) => (
                <div key={i} className="group text-center">
                  <div className={`size-20 mx-auto rounded-3xl ${pillar.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-105`}>
                    <pillar.icon className={`size-10 ${pillar.color}`} />
                  </div>
                  <h3 className="text-2xl font-normal text-slate-900 mb-3">{pillar.title}</h3>
                  <p className="text-base font-light text-slate-600">{pillar.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-slate-50 px-8 py-4 rounded-full border border-slate-200">
                <span className="font-medium text-slate-800">Create more.</span>
                <span className="size-1.5 rounded-full bg-slate-300" />
                <span className="font-medium text-slate-800">Distribute smarter.</span>
                <span className="size-1.5 rounded-full bg-slate-300" />
                <span className="font-medium text-blue-600">Grow faster.</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. SOCIAL + CONTENT, UNIFIED & 6. AI-POWERED GROWTH LOOP
            ========================================================================= */}
        <section className="bg-slate-50 py-20 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            {/* Unified Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Stop managing Social and Content separately.</h2>
              <p className="text-lg font-light text-slate-600">
                Your social media and content strategy shouldn't operate in separate silos. Growth Worker brings both together into one unified workflow.
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm mb-24">
              <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-medium text-slate-700">
                {["Ideas", "AI Content", "Blogs", "Social Posts", "Videos", "Publishing", "Analytics", "ROI", "Optimization"].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="bg-blue-50 px-4 py-2 rounded-full border border-blue-100 text-blue-900">{step}</span>
                    {i < arr.length - 1 && <ChevronRight className="size-4 text-slate-300 hidden md:block" />}
                    {i < arr.length - 1 && <ArrowDown className="size-4 text-slate-300 md:hidden" />}
                  </div>
                ))}
              </div>
              <p className="text-center text-sm font-light text-slate-500 mt-8 max-w-2xl mx-auto">
                With Growth Worker, the content you create feeds your social strategy — and the performance data from your social channels helps improve what you create next. One continuous growth loop.
              </p>
            </div>

            {/* Growth Loop */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-indigo-600">The Growth Engine</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Marketing that learns as it works.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { step: "01", title: "Create", desc: "Generate content based on your brand, audience, and goals." },
                { step: "02", title: "Publish", desc: "Distribute content across your channels." },
                { step: "03", title: "Measure", desc: "Track engagement, reach, conversions, and ROI." },
                { step: "04", title: "Learn", desc: "Identify what's working and what's not." },
                { step: "05", title: "Optimize", desc: "Use insights to improve future campaigns." },
                { step: "06", title: "Repeat", desc: "Build a smarter growth engine over time." }
              ].map((loop, i) => (
                <div key={i} className="bg-white p-8 rounded-[1.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="text-6xl font-bold text-slate-50 absolute -top-4 -right-4 pointer-events-none">{loop.step}</div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-medium text-slate-900 mb-2">Step {loop.step} — {loop.title}</h3>
                    <p className="text-sm font-light text-slate-600">{loop.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-base font-medium text-indigo-700 bg-indigo-50 inline-block px-8 py-3 rounded-full border border-indigo-100">
                Every campaign makes the next one smarter.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. CONTENT AT GROWTH SCALE & 8. ADVANCED AUTOMATION
            ========================================================================= */}
        <section className="py-20 relative overflow-hidden bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            {/* Scale Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">More content. More channels. More opportunities.</h2>
              <p className="text-lg font-light text-slate-600 mb-10">
                Growth Worker gives your team the capacity to produce and distribute content at a scale that would normally require a much larger team.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center max-w-5xl mx-auto">
                {[
                  { val: "200", label: "Posts/month" },
                  { val: "40", label: "Blogs/month" },
                  { val: "20", label: "Videos/month" },
                  { val: "5,000", label: "AI credits/month" },
                  { val: "3", label: "Brand profiles" },
                  { val: "10", label: "Team seats" }
                ].map((stat, i) => (
                  <div key={i} className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                    <div className="text-3xl font-light text-blue-600 mb-2">{stat.val}</div>
                    <div className="text-xs font-medium text-slate-700">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm font-light text-slate-500 mt-6 max-w-2xl mx-auto">
                From daily social content to long-form thought leadership and short-form video, your AI workforce keeps your content engine moving.
              </p>
            </div>

            <hr className="border-slate-100 my-20 max-w-5xl mx-auto" />

            {/* Automation Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Let AI handle the repetitive work.</h2>
              <p className="text-lg font-light text-slate-600">
                Growth Worker automates the operational tasks that slow marketing teams down.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {[
                { title: "Social Publishing", desc: "Schedule and manage social content across your connected channels." },
                { title: "Content Production", desc: "Create posts, blogs, and content pieces at scale." },
                { title: "Video Content", desc: "Generate and manage video content as part of your growth workflow." },
                { title: "Content Recycling", desc: "Keep high-performing evergreen content working longer." },
                { title: "Bulk Scheduling", desc: "Plan campaigns and content in batches." },
                { title: "Automated Reporting", desc: "Deliver performance reports without manually compiling data." }
              ].map((card, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-[1.5rem] border border-slate-100 hover:border-blue-200 transition-colors">
                  <h3 className="text-lg font-medium text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-sm font-light text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-base font-medium text-slate-800 bg-slate-100 inline-block px-8 py-3 rounded-full border border-slate-200">
                Your team focuses on strategy. AI handles the repetition.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            9. APPROVAL WORKFLOWS & 10. MULTI-BRAND
            ========================================================================= */}
        <section className="bg-slate-50 py-20 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-24">
              <div>
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600">Team Control</span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Move fast without losing control.</h2>
                <p className="text-lg font-light text-slate-600 mb-8">
                  AI can move quickly. Your team still needs visibility. Growth Worker gives you structured workflows to review, approve, and manage content before it reaches your audience.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-8">
                   <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md"><Sparkles className="size-4 text-blue-500"/> AI Creates</div>
                   <ArrowRight className="size-4 text-slate-300 hidden sm:block" />
                   <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-amber-50 px-3 py-1.5 rounded-md text-amber-700">Team Reviews</div>
                   <ArrowRight className="size-4 text-slate-300 hidden sm:block" />
                   <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-green-50 px-3 py-1.5 rounded-md text-green-700">Manager Approves</div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                  {["Full approval workflows", "Role-based review", "Content status tracking", "Audit logs", "Team collaboration", "Centralized management"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Check className="size-4 text-blue-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-800 border-l-4 border-blue-500 pl-4 py-1">Scale your content production without sacrificing your brand standards.</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-lg">
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl bg-slate-50">
                      <div className="flex items-center gap-4">
                        <div className="size-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center">
                          <FileText className="size-5 text-slate-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">Campaign Post {item}</div>
                          <div className="text-xs text-slate-500">Awaiting Manager Approval</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium bg-white border border-slate-200 rounded-md text-slate-600 hover:bg-slate-100">Review</button>
                        <button className="px-3 py-1.5 text-xs font-medium bg-blue-600 rounded-md text-white hover:bg-blue-700">Approve</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-slate-200 my-16 max-w-6xl mx-auto" />

            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">One growth engine. Three brands.</h2>
              <p className="text-lg font-light text-slate-600">
                Managing multiple brands shouldn't mean managing multiple disconnected systems. Growth Worker lets you organize your marketing operations across up to 3 brand profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {[1, 2, 3].map((brand) => (
                <div key={brand} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
                    <Building2 className="size-6 text-blue-600" />
                    <h3 className="text-lg font-medium text-slate-900">Brand 0{brand}</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600 font-light">
                    <li className="flex items-center gap-2"><CheckCircle className="size-4 text-green-500" /> Brand voice</li>
                    <li className="flex items-center gap-2"><CheckCircle className="size-4 text-green-500" /> Audience</li>
                    <li className="flex items-center gap-2"><CheckCircle className="size-4 text-green-500" /> Content strategy</li>
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10 text-xs font-medium text-slate-600">
              {["Separate brand profiles", "Distinct brand voices", "Centralized management", "Shared team workspace", "Cross-brand reporting", "Brand-specific content"].map((b, i) => (
                <span key={i} className="bg-blue-50 px-4 py-2 rounded-full border border-blue-100">{b}</span>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-sm font-medium text-slate-800">One AI workforce. Multiple brands. One view of growth.</p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            11. ADVANCED ANALYTICS & 12. ROI TRACKING & 13. A/B TESTING
            ========================================================================= */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
            
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-400">Data-Driven Growth</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight">Know what's working before you spend more.</h2>
              <p className="text-lg font-light text-slate-400">
                Growth Worker goes beyond vanity metrics. Understand which campaigns, channels, and content are actually contributing to your business goals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
              {[
                { title: "Advanced Dashboards", desc: "See your growth performance in one place." },
                { title: "ROI Tracking", desc: "Understand the return generated by your marketing activity." },
                { title: "Campaign Attribution", desc: "Connect campaigns to measurable outcomes." },
                { title: "A/B Testing", desc: "Test different approaches and learn what performs better." },
                { title: "Performance Trends", desc: "Track how your marketing changes over time." },
                { title: "Audience Insights", desc: "Understand what your audience responds to." }
              ].map((feat, i) => (
                <div key={i} className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                  <h3 className="text-base font-medium text-white mb-2">{feat.title}</h3>
                  <p className="text-xs font-light text-slate-400">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* ROI Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
              <div>
                <h2 className="mb-6 text-3xl sm:text-4xl font-light tracking-tight">Turn marketing activity into business outcomes.</h2>
                <p className="text-lg font-light text-slate-400 mb-6">
                  Growth isn't just about likes, views, and impressions. It's about leads. It's about customers. It's about revenue. Growth Worker helps connect your marketing activity to measurable business outcomes.
                </p>
                <p className="text-base font-medium text-blue-300 border-l-4 border-blue-500 pl-4 py-1">
                  Know where your money is going — and where your growth is coming from.
                </p>
              </div>
              <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700 shadow-2xl">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">ROI Dashboard Snapshot</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Campaign Spend", val: "$12,500", color: "text-slate-300" },
                    { label: "Leads Generated", val: "842", color: "text-blue-400" },
                    { label: "Qualified Leads", val: "324", color: "text-purple-400" },
                    { label: "Revenue Attributed", val: "$78,400", color: "text-green-400" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-900 p-4 rounded-xl border border-slate-700/50">
                      <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                      <div className={`text-2xl font-light ${stat.color}`}>{stat.val}</div>
                    </div>
                  ))}
                  <div className="col-span-2 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-4 rounded-xl border border-blue-800/50 flex justify-between items-center mt-2">
                    <span className="text-sm text-slate-300">Total ROI</span>
                    <span className="text-3xl font-light text-white">6.27×</span>
                  </div>
                </div>
              </div>
            </div>

            {/* A/B Testing */}
            <div className="max-w-5xl mx-auto bg-slate-800/30 p-8 sm:p-12 rounded-[2rem] border border-slate-700/50 backdrop-blur-md">
              <div className="text-center mb-10">
                <h2 className="mb-4 text-3xl sm:text-4xl font-light tracking-tight">Test. Learn. Improve.</h2>
                <p className="text-base font-light text-slate-400 max-w-2xl mx-auto">
                  The best growth teams don't rely on assumptions. Growth Worker helps you compare different content and campaign approaches so you can identify what resonates with your audience.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm font-medium text-slate-300">
                {["Headline A vs. Headline B", "Creative A vs. Creative B", "CTA A vs. CTA B", "Campaign A vs. Campaign B"].map((test, i) => (
                  <span key={i} className="bg-slate-900 px-5 py-2.5 rounded-full border border-slate-700 flex items-center gap-2">
                    <FlaskConical className="size-4 text-blue-400" /> {test}
                  </span>
                ))}
              </div>
              <div className="bg-blue-900/40 border border-blue-800 rounded-xl p-5 max-w-2xl mx-auto text-center">
                <p className="text-sm text-blue-200">
                  <span className="font-bold text-blue-400 mr-2">AI Recommendation:</span>
                  "Version B generated 28% more engagement. Consider using this messaging pattern in future campaigns."
                </p>
              </div>
              <p className="text-center mt-8 text-sm font-medium text-slate-500 uppercase tracking-widest">Turn every experiment into a lesson.</p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            14. REPORTING, 15. STRATEGY, 16. INTEGRATIONS
            ========================================================================= */}
        <section className="bg-white py-20 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            {/* Reporting & Strategy Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
              
              {/* Reporting */}
              <div className="bg-slate-50 p-8 sm:p-10 rounded-[2rem] border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-slate-500">Reporting</span>
                  <h3 className="mb-4 text-3xl font-light tracking-tight text-slate-900">Your reports, ready before the meeting.</h3>
                  <p className="text-base font-light text-slate-600 mb-8">
                    Stop spending hours pulling numbers from different platforms. Growth Worker automatically turns your performance data into clear, client-ready reports.
                  </p>
                  <ul className="space-y-3 mb-8 text-sm font-medium text-slate-700">
                    {["12 automated client reports/month", "Arabic + English reports", "Performance summaries", "Campaign results", "ROI reporting", "Growth trends", "Export-ready reporting"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2"><Check className="size-4 text-blue-500" /> {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
                   <div className="text-xs font-bold uppercase text-slate-400 mb-2">Monthly Growth Report</div>
                   <div className="text-sm font-medium text-blue-600">Performance → Campaigns → ROI → Recommendations</div>
                </div>
                <p className="text-sm font-medium text-slate-800 text-center mt-6">Spend less time reporting. Spend more time growing.</p>
              </div>

              {/* Strategy */}
              <div className="bg-blue-50 p-8 sm:p-10 rounded-[2rem] border border-blue-100 flex flex-col justify-between">
                <div>
                  <h3 className="mb-4 text-3xl font-light tracking-tight text-slate-900">AI handles the work. A strategist helps you see what's next.</h3>
                  <p className="text-base font-light text-slate-600 mb-8">
                    Growth Worker doesn't stop at automation. Your plan includes a monthly 60-minute strategy session to review performance, identify opportunities, and help shape your next growth moves.
                  </p>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Strategy Session Includes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm font-medium text-slate-700">
                    {["Performance review", "Growth opportunities", "Campaign analysis", "Content recommendations", "Channel strategy", "Next-month priorities"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2"><CheckCircle className="size-4 text-blue-600" /> {item}</div>
                    ))}
                  </div>
                </div>
                <p className="text-base font-medium text-blue-800 bg-white/60 p-4 rounded-xl border border-blue-200 text-center">
                  Your AI workforce works every day. Your strategist helps you zoom out.
                </p>
              </div>

            </div>

            {/* Integrations */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Connect growth to the tools you already use.</h2>
              <p className="text-lg font-light text-slate-600">
                Your marketing doesn't exist in isolation. Growth Worker connects with the systems that help your business manage leads, customers, and operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {[
                { title: "Zapier", desc: "Connect your marketing workflows to thousands of apps." },
                { title: "CRM", desc: "Sync marketing activity with your customer pipeline." },
                { title: "Webhooks", desc: "Trigger automated workflows based on events." }
              ].map((integ, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                  <h3 className="text-xl font-medium text-slate-900 mb-2">{integ.title}</h3>
                  <p className="text-sm font-light text-slate-600">{integ.desc}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest">
              Your growth engine should work with your business — not sit beside it.
            </p>

          </div>
        </section>

        {/* =========================================================================
            17. ARABIC + ENGLISH & 18. AGENCIES
            ========================================================================= */}
        <section className="py-20 relative overflow-hidden bg-slate-900 border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            {/* Arabic + English */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-indigo-400">Built for modern regional businesses</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">Grow across languages and markets.</h2>
              <p className="text-lg font-light text-slate-300">
                Growth doesn't happen in one language. Growth Worker is designed for businesses operating across Australia, UAE, Saudi Arabia, and international markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
              {[
                { title: "Arabic AI", desc: "Create and optimize Arabic content." },
                { title: "English AI", desc: "Build polished English campaigns and content." },
                { title: "Bilingual Reporting", desc: "Understand performance in the language your team needs." },
                { title: "RTL Support", desc: "Built for right-to-left experiences." },
                { title: "Hijri Support", desc: "Plan campaigns around the Hijri calendar." },
                { title: "Ramadan Engine", desc: "Build campaigns around Ramadan and regional moments." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-[1.5rem] border border-white/10 backdrop-blur-md">
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-sm font-light text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-slate-800 mb-20 max-w-6xl mx-auto" />

            {/* Agencies */}
            <div className="max-w-5xl mx-auto bg-slate-800/40 p-10 sm:p-12 rounded-[2.5rem] border border-slate-700/50 backdrop-blur-sm text-center">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-400">The Agency Escape Hatch</span>
              <h2 className="mb-6 text-3xl sm:text-4xl font-light tracking-tight text-white">Scale your output without scaling your overhead.</h2>
              <p className="text-lg font-light text-slate-300 max-w-3xl mx-auto mb-10">
                Growth Worker gives agencies the capabilities of a larger marketing operation without requiring a larger team for every client.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {["3 brand profiles", "10 team seats", "Automated client reporting", "White-label-ready workflows", "Approval workflows", "ROI reporting", "Campaign analytics", "Monthly strategy support"].map((ben, i) => (
                  <span key={i} className="bg-slate-900 px-4 py-2 rounded-full border border-slate-700 text-sm font-medium text-slate-300">
                    {ben}
                  </span>
                ))}
              </div>

              <p className="text-base font-medium text-blue-300 mb-8">Deliver more. Manage less. Keep your margins healthy.</p>
              
              <a href="/book?plan=growth" className="inline-flex h-12 items-center justify-center bg-blue-600 px-8 text-base font-normal text-white rounded-none transition-all hover:bg-blue-700">
                Build Your AI-Powered Agency
              </a>
            </div>

          </div>
        </section>

        {/* =========================================================================
            19. WHO IS IT FOR? & 20. COMPARISON
            ========================================================================= */}
        <section className="bg-white py-20 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Built for teams ready to scale.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
              {[
                { title: "Growing Businesses", desc: "Build a complete marketing engine without building a massive internal team." },
                { title: "Marketing Teams", desc: "Automate repetitive work and focus on strategic growth." },
                { title: "Agencies", desc: "Manage more clients and campaigns without adding overhead at the same rate." },
                { title: "Multi-Brand Operators", desc: "Run multiple brands from one unified AI workforce." },
                { title: "E-commerce Businesses", desc: "Connect content, social, campaigns, and performance." },
                { title: "Professional Services", desc: "Turn expertise into content, leads, and measurable growth." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-[1.5rem] border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-normal text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm font-light text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Why choose Growth Worker?</h2>
            </div>

            <div className="max-w-6xl mx-auto bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-lg mb-10 overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-6 font-medium text-slate-500 w-1/4">Feature</th>
                    <th className="p-6 font-bold text-slate-900 w-1/4">Social Worker</th>
                    <th className="p-6 font-bold text-slate-900 w-1/4">Content Worker</th>
                    <th className="p-6 font-bold text-blue-700 w-1/4 bg-blue-50/50 border-l-2 border-blue-200">Growth Worker</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-light text-slate-700">
                  {[
                    ["Focus", "Social publishing", "Content creation", "Social + Content"],
                    ["Posts Capacity", "50 posts/month", "70 posts/month", "200 posts/month"],
                    ["Long-form / Platforms", "6 platforms", "8 blogs/month", "40 blogs/month"],
                    ["Core Workflow", "Social calendar", "Content workflows", "Full growth engine"],
                    ["Analytics & Structure", "Basic analytics", "Brand profiles", "Advanced analytics"],
                    ["Team Access", "3 seats", "5 seats", "10 seats"],
                    ["ROI Tracking", "——", "——", "✓ Included"],
                    ["A/B Testing", "——", "——", "✓ Included"],
                    ["Reporting", "——", "——", "✓ Automated reporting"],
                    ["Strategy Support", "——", "——", "✓ Monthly strategy"],
                    ["Brand Profiles", "1 brand", "3 brands", "3 brands"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="p-4 sm:p-6 text-slate-500 font-medium">{row[0]}</td>
                      <td className="p-4 sm:p-6">{row[1]}</td>
                      <td className="p-4 sm:p-6">{row[2]}</td>
                      <td className="p-4 sm:p-6 font-medium text-slate-900 bg-blue-50/30 border-l-2 border-blue-200">
                        {row[3]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-base font-medium text-slate-800 bg-slate-100 p-4 rounded-xl">
                Social keeps you visible. Content builds authority. Growth connects everything and turns it into a measurable engine.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            21. PRICING SECTION
            ========================================================================= */}
        <section className="bg-slate-50 py-20 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-4 py-1 rounded-full">MOST POPULAR · BEST VALUE</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Your complete AI growth engine.</h2>
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
            <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] border-4 border-blue-600 p-8 sm:p-12 shadow-2xl relative">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-8 mb-8 gap-6">
                <div>
                  <h3 className="text-3xl font-normal text-slate-900 mb-2">Growth Worker</h3>
                  <p className="text-sm font-light text-slate-500">The flagship AI Worker for growing businesses.</p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-5xl font-light text-slate-900">
                    {getCurrencySymbol()}{calculatePrice(199)}
                    <span className="text-base font-normal text-slate-500">/month</span>
                  </div>
                  <p className="text-xs font-light text-slate-400 mt-2">{isAnnual ? "Billed annually with 20% discount." : "Billed monthly."}</p>
                </div>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 text-sm font-light text-slate-700">
                {[
                  "Everything in Social Worker", "Everything in Content Worker", "200 posts/month", "40 blogs/month",
                  "20 videos/month", "Full approval workflows", "Audit logs", "Advanced analytics",
                  "ROI tracking", "A/B testing", "12 automated client reports/month", "Arabic + English reports",
                  "Zapier integration", "Monthly 60-minute strategy session", "5,000 AI credits/month", "10 team seats",
                  "3 brand profiles", "Priority + Slack support"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="size-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className={i < 2 ? "font-medium text-slate-900" : ""}>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a href="/book?plan=growth" className="flex-1 flex h-14 items-center justify-center bg-blue-600 rounded-none font-normal text-lg text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  Start 7-Day Free Trial
                </a>
                <a href="/book" className="flex-1 flex h-14 items-center justify-center border-2 border-slate-300 bg-white rounded-none font-normal text-lg text-slate-800 hover:border-slate-800 hover:bg-slate-800 hover:text-white transition-colors">
                  Book a Demo
                </a>
              </div>
              
              <p className="text-center text-sm font-light text-slate-500 mb-8">No credit card required. No lock-in. Cancel anytime.</p>

              
            </div>
          </div>
        </section>

        {/* =========================================================================
            22. ROI / VALUE & 23. METRICS
            ========================================================================= */}
        <section className="bg-white py-20 border-b border-slate-200">
           <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 text-center">
            
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="mb-4 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">The agency costs more than $199/month.</h2>
              <p className="text-lg font-light text-slate-600 max-w-3xl mx-auto mb-10">
                A traditional growth operation requires multiple people, tools, subscriptions, and agencies. Growth Worker brings the core capabilities together in one AI-powered workforce.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-10 text-sm font-medium text-slate-700">
                {[
                  "Social Management ✓ Included",
                  "Content Production ✓ Included",
                  "Video Content ✓ Included",
                  "Analytics ✓ Included",
                  "ROI Tracking ✓ Included",
                  "Reporting ✓ Included",
                  "Strategy ✓ Monthly session"
                ].map((item, i) => (
                  <span key={i} className="bg-green-50 text-green-800 px-5 py-2.5 rounded-full border border-green-200">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-base font-medium text-slate-800">One AI workforce. A fraction of the traditional overhead.</p>
            </div>
            
            <hr className="border-slate-100 my-16 max-w-4xl mx-auto" />

            <div className="max-w-5xl mx-auto mb-10">
              <h2 className="mb-10 text-3xl font-light tracking-tight text-slate-900">Measure the growth engine.</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {[
                  { val: "200", label: "Posts/month" },
                  { val: "40", label: "Blogs/month" },
                  { val: "20", label: "Videos/month" },
                  { val: "3", label: "Brands" },
                  { val: "10", label: "Team seats" },
                  { val: "12", label: "Reports/month" },
                  { val: "5,000", label: "AI credits/mo" }
                ].map((stat, i) => (
                  <div key={i} className="p-4 border border-slate-100 bg-slate-50 rounded-2xl">
                    <div className="text-2xl font-light text-blue-600 mb-1">{stat.val}</div>
                    <div className="text-xs font-medium text-slate-600 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-base font-medium text-slate-800">Your marketing team gets more capacity. Your business gets more visibility.</p>
           </div>
        </section>

        {/* =========================================================================
            24. FAQ
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <h3 className="mb-10 text-center text-3xl sm:text-4xl font-light tracking-tight text-slate-900">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {[
                { q: "What is HIVENOX Growth Worker?", a: "Growth Worker is HIVENOX's unified AI marketing Worker that combines Social + Content capabilities with advanced analytics, ROI tracking, A/B testing, reporting, automation, and strategic support." },
                { q: "How much does Growth Worker cost?", a: "Growth Worker costs $199/month, with annual billing available at a 20% saving." },
                { q: "Is Growth Worker the same as Social + Content?", a: "Growth Worker includes the capabilities of both Social Worker and Content Worker, but adds advanced growth capabilities such as analytics, ROI tracking, A/B testing, automated reporting, multiple brands, and strategy support." },
                { q: "How many posts can I publish?", a: "Growth Worker includes 200 posts per month." },
                { q: "How many blogs are included?", a: "The plan includes 40 blogs per month." },
                { q: "Are videos included?", a: "Yes. Growth Worker includes 20 videos per month." },
                { q: "How many brands can I manage?", a: "Growth Worker supports 3 brand profiles." },
                { q: "How many team members can use it?", a: "The plan includes 10 team seats." },
                { q: "Does Growth Worker support Arabic?", a: "Yes. Growth Worker supports Arabic and English, including Arabic + English reporting, RTL support, Hijri support, and the Ramadan engine." },
                { q: "What is the monthly strategy session?", a: "Growth Worker includes a 60-minute monthly strategy session to review performance, identify opportunities, and plan next steps." },
                { q: "Can agencies use Growth Worker?", a: "Yes. Growth Worker is particularly suited to agencies and multi-brand operators, with multiple brands, team seats, automated client reporting, analytics, and strategy support." },
                { q: "Can I try Growth Worker before paying?", a: "Yes. You can start a 7-day free trial without a credit card." },
                { q: "What happens when I need more capacity?", a: "You can use pay-as-you-go top-ups where available or move to Enterprise Growth OS for custom quotas and enterprise requirements." }
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
            25. FINAL CTA
            ========================================================================= */}
        <section className="py-20 px-5 sm:px-6 lg:px-8 bg-slate-50">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[3rem] bg-blue-600 px-6 py-20 sm:px-12 sm:py-24 text-center shadow-xl">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[40rem] w-[40rem] rounded-full bg-blue-500 blur-[120px] opacity-60 pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[40rem] w-[40rem] rounded-full bg-indigo-800 blur-[120px] opacity-40 pointer-events-none" />
              
              <div className="relative z-10 mx-auto max-w-3xl">
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-200 bg-blue-800/40 px-4 py-1.5 rounded-full border border-blue-400/30">
                  The AI Growth Workforce
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
                  Stop piecing your marketing together.
                </h2>
                <p className="mb-10 text-lg font-light leading-relaxed text-blue-100">
                  Bring Social, Content, Analytics, Automation, and Strategy together in one AI-powered growth engine. Start your 7-day trial and see what your business can do with an AI workforce behind it.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <a href="/book?plan=growth" className="inline-flex h-14 items-center justify-center bg-white px-10 text-lg font-normal text-blue-700 rounded-none transition-all hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5">
                    Start 7-Day Free Trial
                  </a>
                  <a href="/book" className="inline-flex h-14 items-center justify-center border-2 border-blue-400 bg-transparent px-10 text-lg font-normal text-white rounded-none transition-colors hover:border-white hover:bg-white/10">
                    Book a Demo
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