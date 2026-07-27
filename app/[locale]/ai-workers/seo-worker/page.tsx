"use client";

import { useState } from "react";
import { Check, ArrowDown, ArrowRight, Search, Target, Settings, Activity, Globe, CheckCircle, AlertTriangle, TrendingUp, TrendingDown, Layers, Zap, MapPin, RefreshCw, BarChart2, ShieldAlert } from "lucide-react";

export default function SEOWorkerPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "AUD">("USD");

  const AUD_RATE = 1.5;
  const DISCOUNT_RATE = 0.8; 

  const calculatePrice = (basePriceUsd: number) => {
    let price = basePriceUsd;
    if (isAnnual) price = price * DISCOUNT_RATE;
    if (currency === "AUD") price = price * AUD_RATE;
    return Math.floor(price);
  };

  const getCurrencySymbol = () => (currency === "AUD" ? "A$" : "$");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden selection:bg-blue-200 selection:text-blue-900">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-purple-50/50" />

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION (Tighter padding)
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-24 pb-12 sm:px-6 lg:px-8 mt-20">
          <div className="flex flex-col items-center text-center">
            
            <span className="mb-5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200 shadow-sm">
              AI Worker · SEO & Organic Growth
            </span>
            
            <h1 className="mb-4 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900">
              Get found by the people <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">looking for you.</span>
            </h1>
            
            <p className="mb-5 text-xl font-light text-slate-700 max-w-2xl">
              Your AI-powered SEO team — researching, optimizing, and growing your organic presence.
            </p>

            <p className="mb-8 max-w-3xl text-base font-light leading-relaxed text-slate-600">
              HIVENOX SEO Worker helps businesses build and manage an SEO engine that works continuously.
              Discover what your audience is searching for. Build smarter content strategies. Optimize your website. Monitor rankings. Identify technical issues. Track organic growth. Turn search visibility into sustainable business growth.
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-2 max-w-4xl text-xs font-medium tracking-wide text-slate-700">
              {[
                "AI-powered keyword research", "SEO content strategy", "On-page optimization", 
                "Technical SEO monitoring", "Local SEO", "Competitor analysis", 
                "Rank tracking", "SEO performance reporting", "Arabic + English SEO", "RTL + Hijri + Ramadan-ready"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/60 shadow-sm px-3 py-1.5 backdrop-blur-sm">
                  <Check className="size-3.5 text-blue-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <a href="/book?plan=seo" className="inline-flex h-12 items-center justify-center rounded-none bg-blue-600 px-8 text-base font-normal text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5">
                Start 7-Day Free Trial
              </a>
              <a href="/book" className="inline-flex h-12 items-center justify-center rounded-none border-2 border-slate-300 bg-white/50 backdrop-blur-md px-8 text-base font-normal text-slate-800 transition-colors hover:border-slate-800 hover:bg-slate-800 hover:text-white">
                Book a Demo
              </a>
            </div>

            <p className="text-xs font-medium text-slate-500 mb-12">
              No credit card · No lock-in · Cancel anytime
            </p>

            {/* 2. Hero Product Visual */}
            <div className="w-full max-w-5xl rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 sm:p-6 shadow-2xl backdrop-blur-xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-200 pb-4 mb-6 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800">SEO Worker</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <span className="bg-slate-100 px-2 py-1 rounded">Research</span> →
                    <span className="bg-slate-100 px-2 py-1 rounded">Plan</span> →
                    <span className="bg-slate-100 px-2 py-1 rounded">Optimize</span> →
                    <span className="bg-slate-100 px-2 py-1 rounded">Monitor</span> →
                    <span className="bg-slate-100 px-2 py-1 rounded">Improve</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Organic Traffic", val: "+38%", color: "text-green-600", bg: "bg-green-50" },
                    { label: "Keywords Ranking", val: "1,284", color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Top 10 Keywords", val: "246", color: "text-purple-600", bg: "bg-purple-50" },
                    { label: "SEO Health", val: "92 / 100", color: "text-slate-800", bg: "bg-slate-100" }
                  ].map((stat, i) => (
                    <div key={i} className={`p-4 rounded-xl border border-white/40 shadow-sm ${stat.bg}`}>
                      <div className={`text-2xl font-light mb-1 ${stat.color}`}>{stat.val}</div>
                      <div className="text-[10px] font-bold uppercase text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-xs font-bold uppercase text-slate-400 mb-3">Keyword Opportunities</div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex justify-between border-b border-slate-50 pb-1"><span>AI Automation</span> <Search className="size-3 text-slate-300"/></li>
                      <li className="flex justify-between border-b border-slate-50 pb-1"><span>Business Intelligence</span> <Search className="size-3 text-slate-300"/></li>
                      <li className="flex justify-between border-b border-slate-50 pb-1"><span>ERP Software</span> <Search className="size-3 text-slate-300"/></li>
                      <li className="flex justify-between"><span>CRM Solutions</span> <Search className="size-3 text-slate-300"/></li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-xs font-bold uppercase text-slate-400 mb-3">SEO Health</div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-green-500" /> Technical SEO</li>
                      <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-green-500" /> On-page SEO</li>
                      <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-green-500" /> Content optimization</li>
                      <li className="flex items-center gap-2 text-amber-600 mt-2"><AlertTriangle className="size-3.5" /> 3 issues detected</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-xs font-bold uppercase text-slate-400 mb-3">Ranking Movement</div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                        <TrendingUp className="size-4" /> 42 Keywords improved
                      </div>
                      <div className="flex items-center gap-2 text-sm text-red-500 font-medium">
                        <TrendingDown className="size-4" /> 8 Keywords declined
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
                  <div className="bg-blue-600 rounded-full p-1.5 shrink-0 mt-0.5"><Zap className="size-3 text-white" /></div>
                  <div>
                    <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">AI Recommendation</div>
                    <p className="text-sm text-blue-900/80">"Your page targeting 'business automation software' has strong impressions but low CTR. Consider improving the title and meta description."</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. THE SEO PROBLEM (Soft Gray)
            ========================================================================= */}
        <section className="bg-slate-100 py-12 border-y border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="mb-3 inline-block text-[10px] font-bold uppercase tracking-widest text-slate-500">The Problem</span>
              <h2 className="mb-4 text-3xl sm:text-4xl font-light tracking-tight text-slate-900">
                Great businesses don't grow if nobody can find them.
              </h2>
              <p className="text-base font-light leading-relaxed text-slate-600">
                You can have a great product. A beautiful website. Excellent content. But if your customers can't find you when they're searching, you're missing opportunities every day.
                SEO is rarely a one-time project. Search behavior changes. Competitors publish new content. Algorithms evolve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {[
                { title: "You Don't Know What to Target", desc: "Without proper keyword research, content can miss the searches that matter." },
                { title: "Your Content Doesn't Rank", desc: "Creating content isn't enough. It needs the right structure, intent, and optimization." },
                { title: "Technical Issues Go Unnoticed", desc: "Broken links and performance issues can quietly hurt visibility." },
                { title: "Competitors Keep Moving", desc: "Your competitors are constantly creating and optimizing content." },
                { title: "Reporting Takes Too Long", desc: "Manually collecting rankings and performance data wastes valuable time." }
              ].map((card, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <h3 className="text-sm font-medium text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-xs font-light text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <span className="font-mono text-xs tracking-tight text-slate-500">
                SEO shouldn't be a project you finish. It should be an engine that keeps improving.
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. MEET YOUR SEO WORKER
            ========================================================================= */}
        <section className="bg-white py-12 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="mb-3 inline-block text-[10px] font-bold uppercase tracking-widest text-blue-600">Your AI SEO Team</span>
              <h2 className="mb-4 text-3xl sm:text-4xl font-light tracking-tight text-slate-900">One Worker. Your entire SEO workflow.</h2>
              <p className="text-base font-light text-slate-600">
                SEO Worker brings your SEO operations into one intelligent workspace. From finding opportunities to tracking results, your AI Worker helps your team continuously improve organic visibility.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
              {[
                { title: "Discover", icon: Search, desc: "Find keywords, topics, and search opportunities." },
                { title: "Strategize", icon: Target, desc: "Build content and keyword strategies around business goals." },
                { title: "Optimize", icon: Settings, desc: "Improve pages, content, metadata, and internal linking." },
                { title: "Monitor", icon: Activity, desc: "Track rankings, traffic, and SEO health." },
                { title: "Analyze", icon: BarChart2, desc: "Understand competitors and search performance." },
                { title: "Improve", icon: TrendingUp, desc: "Use data-driven recommendations to identify your next opportunity." }
              ].map((feat, i) => (
                <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                  <feat.icon className="size-6 text-blue-500 mb-3" />
                  <h3 className="text-base font-medium text-slate-900 mb-1">{feat.title}</h3>
                  <p className="text-xs font-light text-slate-600">{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center text-sm font-medium text-blue-600">
              Research less manually. Optimize more intelligently.
            </div>
          </div>
        </section>

        {/* =========================================================================
            5 & 6. KEYWORD RESEARCH & STRATEGY (Combined Layout)
            ========================================================================= */}
        <section className="bg-slate-50 py-12 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Keyword Research */}
              <div>
                <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-widest text-slate-500">Discover Opportunities</span>
                <h2 className="mb-4 text-3xl font-light tracking-tight text-slate-900">Find the searches that can grow your business.</h2>
                <p className="text-sm font-light text-slate-600 mb-6">Not every keyword is worth targeting. SEO Worker helps identify search opportunities based on relevance, intent, competition, and potential business value.</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    ["Commercial", "Find people actively looking for products."],
                    ["Informational", "Discover questions your audience is asking."],
                    ["Long-Tail", "Target specific searches with focused intent."],
                    ["Local", "Find opportunities in target cities."],
                    ["Question", "Discover questions your audience wants answered."]
                  ].map(([title, desc], i) => (
                    <div key={i} className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                      <div className="text-xs font-semibold text-slate-800 mb-1">{title}</div>
                      <div className="text-[10px] text-slate-500 leading-tight">{desc}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm">
                  <div className="font-mono text-xs text-blue-600 mb-2">Example Opportunity</div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-white px-2 py-1 rounded text-slate-700"><span className="text-xs text-slate-400 block">Keyword</span>CRM software for small business</div>
                    <div className="bg-white px-2 py-1 rounded text-slate-700"><span className="text-xs text-slate-400 block">Intent</span>Commercial</div>
                    <div className="bg-white px-2 py-1 rounded text-slate-700"><span className="text-xs text-slate-400 block">Competition</span>Medium</div>
                    <div className="bg-white px-2 py-1 rounded text-green-700 font-medium"><span className="text-xs text-slate-400 block">Opportunity</span>High</div>
                  </div>
                  <div className="bg-white p-2 rounded text-slate-700 border border-blue-200"><span className="font-semibold text-xs text-blue-800">Action:</span> Create a comparison-focused landing page.</div>
                </div>
              </div>

              {/* SEO Strategy */}
              <div>
                <h2 className="mb-4 text-3xl font-light tracking-tight text-slate-900 pt-6">Stop guessing what to publish next.</h2>
                <p className="text-sm font-light text-slate-600 mb-6">SEO Worker turns keyword research into a practical content strategy. Instead of creating random blog posts, build a structured content ecosystem around the topics your audience actually searches for.</p>

                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600 mb-6">
                  {["Business Goals", "Keyword Research", "Search Intent", "Topic Clusters", "Content Plan", "SEO Content", "Organic Growth"].map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="bg-slate-200 px-2 py-1 rounded">{step}</span>
                      {i < 6 && <ArrowRight className="size-3 text-slate-400" />}
                    </div>
                  ))}
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="text-xs font-bold uppercase text-slate-400 mb-3">Content Strategy Types</div>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                    {["Pillar pages", "Topic clusters", "Supporting articles", "Commercial landing pages", "Product pages", "Comparison pages", "FAQ content", "Local landing pages"].map((type, i) => (
                      <span key={i} className="border border-slate-200 px-3 py-1 rounded-full">{type}</span>
                    ))}
                  </div>
                </div>

                <p className="text-sm font-medium text-slate-800 mt-6 border-l-2 border-blue-500 pl-3">
                  Build content that supports your business — not just your blog.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            7 & 8. ON-PAGE SEO & AI CONTENT OPTIMIZATION
            ========================================================================= */}
        <section className="bg-white py-12 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              <div>
                <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-widest text-blue-500">Optimize Every Page</span>
                <h2 className="mb-4 text-3xl font-light tracking-tight text-slate-900">Make every important page easier to understand.</h2>
                <p className="text-sm font-light text-slate-600 mb-6">SEO Worker analyzes your pages and identifies opportunities to improve their search visibility and user experience.</p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {["Title tags", "Meta descriptions", "Heading structure", "Keyword usage", "Search intent", "Content depth", "Internal links", "Image optimization", "URL structure", "Schema opportunities"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="size-4 text-blue-500" /> {item}
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 flex items-start gap-3">
                  <AlertTriangle className="size-4 text-amber-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-amber-900">"Your page targets the right topic, but the primary keyword is missing from the H1 and first paragraph. Consider restructuring the opening section."</p>
                </div>
                <p className="text-xs font-medium text-slate-500 mt-4">Better structure. Better relevance. Better opportunities to rank.</p>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-light tracking-tight text-slate-900 pt-6">Create content that search engines — and humans — understand.</h2>
                <p className="text-sm font-light text-slate-600 mb-6">SEO Worker works alongside your content workflow to help optimize content for search intent while keeping it useful and readable.</p>
                
                <div className="space-y-3 mb-6">
                  {[
                    ["Search Intent", "Match content with what people actually want."],
                    ["Topic Coverage", "Identify important subtopics your competitors cover."],
                    ["Content Structure", "Improve headings, sections, and readability."],
                    ["Keyword Context", "Use relevant terms naturally."],
                    ["Internal Linking", "Connect related pages to strengthen your site structure."],
                    ["Content Refresh", "Identify older content that could benefit from updates."]
                  ].map(([title, desc], i) => (
                    <div key={i} className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                      <span className="font-medium text-slate-800">{title}</span>
                      <span className="text-slate-500 text-xs sm:text-right">{desc}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 text-white rounded-xl p-4 text-center text-xs font-medium">
                  Create with Content Worker → Optimize with SEO Worker
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            9. TECHNICAL SEO & AUDITS
            ========================================================================= */}
        <section className="bg-slate-950 py-12 text-slate-300 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-blue-900/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-widest text-blue-400">Keep Your Site Healthy</span>
              <h2 className="mb-4 text-3xl sm:text-4xl font-light tracking-tight text-white">Your SEO foundation should never be left unattended.</h2>
              <p className="text-sm font-light text-slate-400">Technical problems can prevent search engines from properly discovering, understanding, and indexing your website. Automated monitoring helps your team identify issues before they become bigger problems.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="md:col-span-1 bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center">
                <div className="text-5xl font-light text-green-400 mb-2">92<span className="text-2xl text-slate-500">/100</span></div>
                <div className="text-sm font-medium text-slate-300 mb-4">SEO Health Score (Good)</div>
                <div className="space-y-2 text-xs text-left">
                  <div className="flex justify-between bg-slate-800 px-3 py-2 rounded text-red-300"><span>Issues Detected</span> <span>3</span></div>
                  <div className="flex justify-between bg-slate-800 px-3 py-2 rounded text-amber-300"><span>Tech Issues</span> <span>7</span></div>
                  <div className="flex justify-between bg-slate-800 px-3 py-2 rounded text-blue-300"><span>Opportunities</span> <span>24</span></div>
                  <div className="flex justify-between bg-slate-800 px-3 py-2 rounded text-slate-400"><span>Pages Monitored</span> <span>24</span></div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {["Crawlability", "Indexing", "Broken links", "Redirects", "Canonical URLs", "Sitemap health", "Robots.txt", "Mobile performance", "Page speed", "Core Web Vitals", "Structured data"].map((item, i) => (
                    <div key={i} className="bg-slate-900/50 p-2 rounded-lg border border-slate-800 text-xs flex items-center gap-2">
                      <CheckCircle className="size-3 text-slate-500" /> {item}
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-sm">
                  <h4 className="text-white mb-3 font-medium">AI Priority System</h4>
                  <div className="space-y-2">
                    <div className="flex gap-2"><span className="text-red-400">🔴 Critical:</span> Fix immediately.</div>
                    <div className="flex gap-2"><span className="text-amber-400">🟡 Opportunity:</span> Improve for potential gains.</div>
                    <div className="flex gap-2"><span className="text-green-400">🟢 Healthy:</span> No action required.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10 & 11. COMPETITOR INTEL & CONTENT GAP
            ========================================================================= */}
        <section className="bg-white py-12 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              <div>
                <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-widest text-slate-400">Know Your Competition</span>
                <h2 className="mb-4 text-3xl font-light tracking-tight text-slate-900">See what your competitors are ranking for.</h2>
                <p className="text-sm font-light text-slate-600 mb-6">Your competitors are already competing for your audience's attention. SEO Worker helps identify the keywords, content topics, and search opportunities that competitors are winning.</p>
                
                <div className="flex justify-between items-end mb-6 pb-6 border-b border-slate-100">
                  <div className="text-center"><div className="text-lg font-medium text-slate-900">2,840</div><div className="text-[10px] uppercase text-slate-500">Comp A</div></div>
                  <div className="text-center"><div className="text-lg font-medium text-slate-900">1,920</div><div className="text-[10px] uppercase text-slate-500">Comp B</div></div>
                  <div className="text-center"><div className="text-xl font-medium text-blue-600">1,284</div><div className="text-[10px] uppercase text-blue-600 font-bold">You</div></div>
                </div>

                <div className="bg-purple-50 p-3 rounded-lg border border-purple-100 text-sm text-purple-900 mb-4">
                  <span className="font-bold">AI Opportunity:</span> "Competitor A ranks for 34 high-intent keywords where your website currently has no visible ranking. 12 have strong content opportunities."
                </div>

                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  {["Keyword analysis", "Content gap analysis", "Ranking comparison", "Topic opportunities", "Backlink insights", "SERP analysis"].map((f, i) => (
                    <span key={i} className="bg-slate-100 px-2 py-1 rounded">{f}</span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-3xl font-light tracking-tight text-slate-900 pt-6">Find the topics your competitors missed.</h2>
                <p className="text-sm font-light text-slate-600 mb-6">SEO Worker identifies content opportunities where your competitors rank but your website doesn't.</p>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6 bg-slate-50 p-3 rounded-lg border border-slate-200 justify-center">
                  <span>Competitor Keywords</span> <ArrowRight className="size-3" />
                  <span>Your Coverage</span> <ArrowRight className="size-3" />
                  <span>Content Gaps</span> <ArrowRight className="size-3 text-blue-500" />
                  <span className="text-blue-600">Opportunities</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-sm">
                  <div className="font-medium text-slate-900 mb-3 border-b border-slate-100 pb-2">Opportunity: AI automation for healthcare</div>
                  <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                    <div><span className="block text-slate-400">Competitors</span>4</div>
                    <div><span className="block text-slate-400">Your Pos</span>Not ranking</div>
                    <div><span className="block text-slate-400">Opportunity</span><span className="text-green-600">High</span></div>
                  </div>
                  <div className="bg-slate-50 p-2 rounded text-slate-700">
                    <span className="font-medium">Action:</span> Create an industry-specific landing page.
                  </div>
                </div>
                
                <p className="text-xs font-medium text-slate-500 mt-4 text-center">Turn content gaps into growth opportunities.</p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            12. LOCAL SEO (Small block)
            ========================================================================= */}
        <section className="bg-slate-50 py-10 border-b border-slate-200 text-center">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-widest text-blue-500">Grow Locally</span>
            <h2 className="mb-4 text-3xl font-light tracking-tight text-slate-900">Be visible when customers search nearby.</h2>
            <p className="text-sm font-light text-slate-600 mb-6 max-w-2xl mx-auto">For businesses with physical locations or local service areas, visibility in local search can directly influence calls, visits, and leads. SEO Worker helps manage and improve your local search presence.</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["Local keyword research", "Location-based content", "Local landing pages", "Business profile optimization", "Review monitoring", "NAP consistency", "Local schema", "Local tracking"].map((tag, i) => (
                <span key={i} className="bg-white px-3 py-1.5 text-xs text-slate-700 rounded-full border border-slate-200 shadow-sm flex items-center gap-1"><MapPin className="size-3 text-red-500"/>{tag}</span>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-slate-200 text-xs shadow-sm">
              <span className="text-slate-500">Search: <strong className="text-slate-800">CRM software in Dubai</strong></span>
              <ArrowRight className="size-3 text-slate-300" />
              <span className="text-green-600 font-medium">High Opp</span>
              <ArrowRight className="size-3 text-slate-300" />
              <span className="text-blue-600">Optimize UAE landing page</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            13. BILINGUAL SEO (Purple Gradient)
            ========================================================================= */}
        <section className="relative py-12 overflow-hidden border-b border-purple-900">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900" />
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-widest text-purple-300">Bilingual SEO</span>
              <h2 className="mb-4 text-3xl sm:text-4xl font-light tracking-tight text-white">One SEO strategy. Two languages. More markets.</h2>
              <p className="text-sm font-light text-purple-100/80">Search behavior isn't the same in every language. Arabic and English audiences may use different keywords, phrases, and search intent.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-6">
              {[
                { title: "Arabic Keyword Research", desc: "Discover search opportunities in Arabic." },
                { title: "English Keyword Research", desc: "Build strategies for English-speaking audiences." },
                { title: "Bilingual Content", desc: "Optimize content for both languages." },
                { title: "RTL SEO", desc: "Support right-to-left website experiences." },
                { title: "Hijri Search Planning", desc: "Plan around relevant Hijri dates and events." },
                { title: "Ramadan SEO", desc: "Build seasonal search strategies around Ramadan." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                  <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
                  <p className="text-xs font-light text-purple-200/70">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center text-xs font-medium text-purple-300">
              Don't translate your SEO strategy. Localize it.
            </div>
          </div>
        </section>

        {/* =========================================================================
            14, 15, 17. TRACKING, REPORTING & RECOMMENDATIONS
            ========================================================================= */}
        <section className="bg-white py-12 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="lg:col-span-1 border-r border-slate-100 pr-4">
                <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-widest text-slate-400">Measure Organic Growth</span>
                <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900">Turn SEO data into decisions.</h2>
                <p className="text-xs font-light text-slate-600 mb-6">SEO reporting shouldn't be a spreadsheet exercise. Bring most important SEO metrics into one clear view.</p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {["Organic Traffic: +38%", "Organic Leads: +24%", "Ranked: 1,284", "Top 10: 246", "Health: 92/100"].map((s, i) => (
                     <div key={i} className="bg-slate-50 p-2 text-xs font-medium text-slate-800 rounded border border-slate-100">{s}</div>
                  ))}
                </div>
                <div className="text-xs text-slate-500 font-medium">Know what's growing. Know what's falling. Know what to do next.</div>
              </div>

              <div className="lg:col-span-1 border-r border-slate-100 pr-4">
                <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 pt-6 lg:pt-0">Know where you stand.</h2>
                <p className="text-xs font-light text-slate-600 mb-4">Monitor keyword performance and identify meaningful movements over time.</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center bg-green-50 px-3 py-2 rounded text-xs text-green-800 border border-green-100">
                    <span>Business Automation</span> <span className="font-bold">Pos 14 → 7</span>
                  </div>
                  <div className="flex justify-between items-center bg-green-50 px-3 py-2 rounded text-xs text-green-800 border border-green-100">
                    <span>CRM Software UAE</span> <span className="font-bold">Pos 21 → 11</span>
                  </div>
                  <div className="flex justify-between items-center bg-red-50 px-3 py-2 rounded text-xs text-red-800 border border-red-100">
                    <span>AI Solutions</span> <span className="font-bold">Pos 6 → 9</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-[10px] text-blue-900">
                  <span className="font-bold block mb-1">AI Recommendation:</span> "Your 'CRM Software UAE' page has entered the top 20. Strengthen internal links."
                </div>
              </div>

              <div className="lg:col-span-1">
                <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-widest text-blue-500 pt-6 lg:pt-0">AI-Powered Actions</span>
                <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900">Know what to do next.</h2>
                <p className="text-xs font-light text-slate-600 mb-4">SEO data is useful. Actionable recommendations are better.</p>
                
                <div className="space-y-3">
                  <div className="border-l-4 border-red-500 pl-3 py-1 bg-red-50/50 rounded-r text-xs">
                    <div className="font-bold text-red-700">High Priority</div>
                    <div className="text-slate-700">Update title & meta description on /crm-software.</div>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-3 py-1 bg-amber-50/50 rounded-r text-xs">
                    <div className="font-bold text-amber-700">Medium Priority</div>
                    <div className="text-slate-700">Add internal links from 5 high-authority pages.</div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-3 py-1 bg-green-50/50 rounded-r text-xs">
                    <div className="font-bold text-green-700">Growth Opportunity</div>
                    <div className="text-slate-700">Create a landing page targeting "CRM software for real estate."</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            18 & 23. CONNECTED WORKFORCE & FLYWHEEL (Soft Gray)
            ========================================================================= */}
        <section className="bg-slate-100 py-12 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 text-center">
             <div className="max-w-3xl mx-auto mb-8">
              <h2 className="mb-3 text-3xl font-light tracking-tight text-slate-900">SEO shouldn't work alone.</h2>
              <p className="text-sm font-light text-slate-600">The best SEO strategy connects content, social, and growth. HIVENOX AI Workers work together to create a connected growth loop.</p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-8 text-xs font-medium text-slate-700">
               {["SEO Worker (Finds)", "Content Worker (Creates)", "Video Worker (Adapts)", "Social Worker (Distributes)", "Growth Worker (Measures)"].map((w, i) => (
                 <div key={i} className="flex items-center gap-2 sm:gap-4">
                   <div className="bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">{w}</div>
                   {i < 4 && <ArrowRight className="size-4 text-slate-400" />}
                 </div>
               ))}
            </div>

            <div className="bg-white p-4 max-w-4xl mx-auto rounded-xl border border-slate-200 shadow-sm flex flex-wrap justify-center items-center gap-2 text-[10px] uppercase font-bold text-slate-500">
              <RefreshCw className="size-4 text-blue-500 mr-2" />
              <span>Research</span> → <span>Create</span> → <span>Publish</span> → <span>Rank</span> → <span>Measure</span> → <span>Improve</span> → <span className="text-blue-600">Repeat</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            19. WHO IS IT FOR & 24. REGIONAL SEO (White Block)
            ========================================================================= */}
        <section className="bg-white py-12 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light tracking-tight text-slate-900 text-center mb-8">Built for businesses that want sustainable organic growth.</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
              {[
                { title: "Growing Businesses", desc: "Build organic visibility without a full team." },
                { title: "Marketing Teams", desc: "Automate repetitive SEO research." },
                { title: "Agencies", desc: "Manage workflows across multiple clients." },
                { title: "E-commerce", desc: "Improve product visibility and traffic." },
                { title: "Local Businesses", desc: "Reach customers searching in your city." },
                { title: "B2B Companies", desc: "Turn high-intent traffic into leads." },
                { title: "Prof. Services", desc: "Build authority around your expertise." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                  <h3 className="text-sm font-medium text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-[10px] font-light text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-10 text-center">
              <h2 className="mb-4 text-2xl font-light tracking-tight text-slate-900">Built for businesses growing across markets.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
                {[
                  { title: "Australia", desc: "English SEO strategies for local and national search." },
                  { title: "UAE", desc: "Bilingual search opportunities across a diverse market." },
                  { title: "Saudi Arabia", desc: "Arabic-first SEO with local search context." }
                ].map((region, i) => (
                  <div key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <Globe className="size-5 text-blue-500 mb-2" />
                    <h3 className="text-base font-normal text-slate-900 mb-1">{region.title}</h3>
                    <p className="text-xs font-light text-slate-600">{region.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            20. VS TRADITIONAL SEO
            ========================================================================= */}
        <section className="bg-white py-12 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="mb-4 text-3xl font-light tracking-tight text-slate-900">A smarter way to manage SEO.</h2>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md mb-6">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-4 font-bold text-slate-900 w-1/2">Traditional SEO Workflow</th>
                    <th className="p-4 font-bold text-blue-700 w-1/2 bg-blue-50/50 border-l border-slate-200">With SEO Worker</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-light text-slate-700">
                  {[
                    ["Manual keyword research", "AI-assisted keyword discovery"],
                    ["Separate SEO tools", "Centralized SEO workflow"],
                    ["Manual competitor research", "AI competitor intelligence"],
                    ["Periodic audits", "Continuous monitoring"],
                    ["Manual content planning", "AI-powered content strategy"],
                    ["Manual optimization", "AI on-page recommendations"],
                    ["Spreadsheet rank tracking", "Automated rank monitoring"],
                    ["Manual reporting", "Automated SEO insights"],
                    ["One-language SEO", "Arabic + English SEO"],
                    ["Reactive SEO", "Continuous optimization"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 text-slate-500">{row[0]}</td>
                      <td className="p-3 sm:p-4 font-medium text-slate-900 bg-blue-50/30 border-l border-slate-100 flex items-center gap-2">
                        <Check className="size-3 text-blue-500 shrink-0" />
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm font-medium text-slate-600">Spend less time collecting SEO data. Spend more time acting on it.</p>
          </div>
        </section>

        {/* =========================================================================
            21 & 22. PRICING & ROI (Wider layout)
            ========================================================================= */}
        <section className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <span className="mb-3 inline-block text-[10px] font-bold uppercase tracking-widest text-blue-600">Simple Pricing</span>
              <h2 className="mb-4 text-3xl sm:text-4xl font-light tracking-tight text-slate-900">Build an SEO engine that keeps working.</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center p-1 bg-white border border-slate-200 rounded-none shadow-sm">
                <button onClick={() => setCurrency("USD")} className={`px-5 py-2 text-xs font-medium rounded-none transition-colors ${currency === "USD" ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>USD</button>
                <button onClick={() => setCurrency("AUD")} className={`px-5 py-2 text-xs font-medium rounded-none transition-colors ${currency === "AUD" ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>AUD</button>
              </div>
              <div className="flex items-center p-1 bg-white border border-slate-200 rounded-none shadow-sm">
                <button onClick={() => setIsAnnual(false)} className={`px-5 py-2 text-xs font-medium rounded-none transition-colors ${!isAnnual ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>Monthly</button>
                <button onClick={() => setIsAnnual(true)} className={`px-5 py-2 text-xs font-medium rounded-none transition-colors ${isAnnual ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>Annual (Save 20%)</button>
              </div>
            </div>

            {/* WIDER PRICING CARD */}
            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] border-4 border-blue-600 p-8 sm:p-10 shadow-2xl relative">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-6 mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-normal text-slate-900 mb-1">SEO Worker</h3>
                  <p className="text-xs font-light text-slate-500">The complete organic growth engine.</p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-4xl font-light text-slate-900">
                    {getCurrencySymbol()}{calculatePrice(99)}
                    <span className="text-sm font-normal text-slate-500">/month</span>
                  </div>
                  <p className="text-[10px] font-light text-slate-400 mt-1">{isAnnual ? "Billed annually with 20% discount." : "Billed monthly."}</p>
                </div>
              </div>
              
              {/* Features split into 2 columns for wider layout */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8 text-xs font-light text-slate-700">
                {[
                  "AI keyword research", "Keyword opportunity discovery", "SEO content strategy", 
                  "On-page SEO optimization", "Technical SEO monitoring", "Automated SEO audits", 
                  "Competitor analysis", "Content gap analysis", "Local SEO tools", 
                  "Rank tracking", "SEO performance reporting", "AI SEO recommendations", 
                  "Arabic + English SEO", "RTL support", "Hijri support", 
                  "Ramadan SEO engine", "Email + WhatsApp support"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="size-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a href="/book?plan=seo" className="flex-1 flex h-12 items-center justify-center bg-blue-600 rounded-none font-normal text-base text-white hover:bg-blue-700 transition-colors shadow">
                  Start 7-Day Free Trial
                </a>
                <a href="/book" className="flex-1 flex h-12 items-center justify-center border-2 border-slate-300 bg-white rounded-none font-normal text-base text-slate-800 hover:border-slate-800 hover:bg-slate-800 hover:text-white transition-colors">
                  Book a Demo
                </a>
              </div>
              
              <p className="text-center text-[10px] font-light text-slate-500 mb-6">No credit card required. No lock-in. Cancel anytime.</p>

              <div className="pt-6 border-t border-slate-100 text-center bg-blue-50/50 -mx-8 -mb-10 sm:-mx-10 p-6 rounded-b-[1.7rem]">
                <p className="text-xs font-medium text-slate-900 mb-1">Want SEO connected to your entire growth operation?</p>
                <a href="/book?plan=growth" className="text-[10px] font-normal text-blue-600 hover:underline">
                  Combine SEO Worker with Growth Worker to connect SEO, Content, Social, Video, analytics, ROI tracking, and strategy →
                </a>
              </div>
            </div>
            
            {/* ROI */}
            <div className="max-w-3xl mx-auto mt-16 text-center">
              <h2 className="mb-4 text-2xl font-light tracking-tight text-slate-900">What is one new customer from search worth to you?</h2>
              <p className="text-sm font-light text-slate-600 mb-6">SEO compounds over time. A page that ranks today can continue bringing qualified visitors and opportunities long after the initial work is complete. SEO Worker helps your team build a repeatable organic growth system instead of relying entirely on paid acquisition.</p>
              
              <div className="flex justify-center gap-6 text-sm font-medium text-slate-800 bg-white p-4 rounded-xl border border-slate-200 inline-flex shadow-sm">
                <div><span className="block text-xl text-blue-600 font-light">24/7</span> Organic visibility</div>
                <div><span className="block text-xl text-blue-600 font-light">Multiple</span> Keyword opps</div>
                <div><span className="block text-xl text-blue-600 font-light">Continuous</span> Monitoring</div>
                <div><span className="block text-xl text-blue-600 font-light">One</span> Connected workflow</div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            25. FAQ (Smaller Section)
            ========================================================================= */}
        <section className="bg-white py-10 border-b border-slate-200">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h3 className="mb-6 text-center text-2xl font-light tracking-tight text-slate-900">Frequently Asked Questions</h3>
            
            <div className="space-y-3">
              {[
                { q: "What is HIVENOX SEO Worker?", a: "SEO Worker is an AI-powered SEO Worker that helps businesses research keywords, build content strategies, optimize pages, monitor technical SEO, track rankings, analyze competitors, and improve organic visibility." },
                { q: "Can SEO Worker do keyword research?", a: "Yes. SEO Worker helps identify relevant keywords, search intent, long-tail opportunities, commercial keywords, local searches, and content opportunities." },
                { q: "Can it optimize my website?", a: "SEO Worker provides AI-assisted recommendations for on-page and technical SEO, including metadata, headings, internal linking, content structure, and technical health." },
                { q: "Does it monitor technical SEO?", a: "Yes. It helps monitor areas such as crawlability, indexing, broken links, redirects, sitemaps, performance, and structured data opportunities." },
                { q: "Can I track keyword rankings?", a: "Yes. SEO Worker includes keyword rank tracking and helps identify ranking improvements, declines, and new opportunities." },
                { q: "Does it analyze competitors?", a: "Yes. SEO Worker can help identify competitor keywords, content gaps, ranking opportunities, and areas where your website can compete." },
                { q: "Does it support local SEO?", a: "Yes. SEO Worker includes local SEO workflows for businesses targeting specific locations and service areas." },
                { q: "Does it support Arabic SEO?", a: "Yes. SEO Worker supports Arabic and English SEO workflows, including RTL, Hijri, and Ramadan-ready capabilities." },
                { q: "Can SEO Worker create content?", a: "SEO Worker focuses primarily on SEO strategy and optimization. For full-scale content creation, it works alongside Content Worker." },
                { q: "What's the difference between SEO Worker and Growth Worker?", a: "SEO Worker focuses specifically on organic search visibility and SEO performance. Growth Worker combines broader marketing capabilities including Social + Content, advanced analytics, ROI tracking, A/B testing, reporting, and strategy." },
                { q: "Can I try SEO Worker before paying?", a: "Yes. You can start with a 7-day free trial without a credit card." }
              ].map((faq, index) => (
                <details key={index} className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-white">
                  <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-medium text-slate-900 outline-none list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ArrowDown className="size-4 shrink-0 text-blue-500 transition-transform duration-300 group-open:rotate-180 ml-4" />
                  </summary>
                  <div className="px-4 pb-4 pt-0 text-xs font-light leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            26. FINAL CTA (Smaller block)
            ========================================================================= */}
        <section className="py-10 px-5 sm:px-6 lg:px-8 bg-slate-50">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-blue-600 px-6 py-10 sm:px-10 text-center shadow-lg">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[20rem] w-[20rem] rounded-full bg-blue-500 blur-[80px] opacity-50 pointer-events-none" />
              
              <div className="relative z-10 mx-auto max-w-2xl">
                <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-widest text-blue-200 bg-blue-800/30 px-3 py-1 rounded-full">
                  Your AI SEO Team
                </span>
                <h2 className="mb-3 text-3xl font-light tracking-tight text-white">
                  Stop chasing rankings. Build lasting visibility.
                </h2>
                <p className="mb-6 text-sm font-light text-blue-100">
                  Let HIVENOX SEO Worker continuously research opportunities, optimize your website, monitor your performance, and help your business grow through organic search.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <a href="/book?plan=seo" className="inline-flex h-12 items-center justify-center bg-white px-8 text-sm font-medium text-blue-700 rounded-none transition-all hover:bg-slate-100">
                    Start 7-Day Free Trial
                  </a>
                  <a href="/book" className="inline-flex h-12 items-center justify-center border border-blue-400 bg-transparent px-8 text-sm font-medium text-white rounded-none transition-colors hover:border-white hover:bg-white/10">
                    Book a Demo
                  </a>
                </div>

                <p className="text-[10px] font-light text-blue-200">
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