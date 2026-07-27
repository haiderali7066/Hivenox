"use client";

import { useState } from "react";
import { 
  Check, ArrowDown, ArrowRight, BarChart3, TrendingUp, AlertCircle, 
  BrainCircuit, Database, MessageSquare, LineChart, Activity, Search, 
  Users, Target, DollarSign, Package, GitBranch, Zap, Bell, FileText, 
  LayoutDashboard, Globe, CheckCircle, Lightbulb, Link
} from "lucide-react";

export default function AdvancedAnalyticsWorkerPage() {
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
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden mt-20">
      
      {/* Background Subtle Gradients for the top */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/60 via-white to-purple-50/60" />

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-24 pb-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            
            <span className="mb-6 text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-100 px-4 py-1.5 rounded-full border border-purple-200 shadow-sm">
              AI Worker · Advanced Analytics
            </span>
            
            <h1 className="mb-6 max-w-5xl text-5xl font-light tracking-tight text-slate-900 lg:text-7xl">
              Turn your data into decisions — <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">before the future happens.</span>
            </h1>
            
            <p className="mb-6 text-2xl font-light text-slate-700 max-w-4xl">
              AI-powered analytics that finds patterns, predicts outcomes, detects anomalies, and tells your team what to do next.
            </p>

            <p className="mb-10 max-w-3xl text-lg font-light leading-relaxed text-slate-600">
              HIVENOX Advanced Analytics Worker transforms complex business data into actionable intelligence. Go beyond dashboards and historical reports. Discover hidden patterns, forecast what's coming, identify unusual behavior, understand why performance changes, and make faster decisions with AI-powered analysis.
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-3 text-sm font-medium tracking-wide text-slate-700 max-w-4xl">
              {[
                "Predictive analytics", "AI-powered forecasting", "Anomaly detection", "Trend analysis",
                "Root-cause analysis", "Scenario planning", "Automated insights", "Natural language analytics",
                "AI recommendations", "Arabic + English insights"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-4 py-1.5 backdrop-blur-sm">
                  <Check className="size-4 text-blue-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a href="/book?plan=analytics" className="inline-flex h-14 items-center justify-center rounded-none bg-blue-600 px-10 text-lg font-normal text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5">
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
                    <span className="ml-4 text-sm font-mono text-slate-400">Advanced Analytics Worker</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Connect → Analyze → Predict → Recommend → Act
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Revenue Forecast", val: "+18.6%", color: "text-green-600", icon: TrendingUp },
                    { label: "Customer Churn Risk", val: "12.4%", color: "text-amber-600", icon: Users },
                    { label: "Anomalies Detected", val: "7", color: "text-red-500", icon: AlertCircle },
                    { label: "Forecast Accuracy", val: "94.2%", color: "text-blue-600", icon: Target }
                  ].map((kpi, i) => (
                    <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{kpi.label}</span>
                        <kpi.icon className="size-4 text-slate-400" />
                      </div>
                      <span className={`text-3xl font-light ${kpi.color}`}>{kpi.val}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="size-5 text-blue-600" />
                        <h4 className="text-sm font-bold uppercase tracking-widest text-blue-800">AI Insight</h4>
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed">
                        Revenue is expected to increase by 18.6% over the next 90 days, primarily driven by growth in the UAE customer segment.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Prediction Panel</h4>
                       <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-medium">
                          <span className="text-slate-500">Sales Forecast:</span>
                          <span className="text-slate-800">Actual <ArrowRight className="inline size-4 mx-1 text-blue-400"/> Forecast <ArrowRight className="inline size-4 mx-1 text-blue-400"/> Confidence Range</span>
                       </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                       <h4 className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">🔴 High Priority Alert</h4>
                       <p className="text-sm text-red-900">Sales in the Riyadh region are 27% below expected performance for this period.</p>
                    </div>
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-white">
                       <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">AI Recommendation</h4>
                       <p className="text-sm text-slate-300">Increase targeted sales activity in the Riyadh segment and review the 3 underperforming accounts contributing to the decline.</p>
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
        <section className="bg-purple-50/80 border-y border-purple-100 py-12">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-purple-600">The Data Problem</span>
              <h2 className="mb-5 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Your business has more data than your team can analyze.
              </h2>
              <p className="text-lg font-light leading-relaxed text-slate-700 mb-6">
                Every day, your business generates data: Sales. Customers. Operations. Finance. Employees. Marketing. Inventory. But collecting data is not the same as understanding it. Traditional reports tell you what happened.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-purple-900 bg-purple-100/50 p-4 rounded-xl max-w-3xl mx-auto">
                <span>Advanced Analytics Worker helps you understand:</span>
                <span className="bg-white px-3 py-1 rounded-full shadow-sm">Why it happened.</span>
                <span className="bg-white px-3 py-1 rounded-full shadow-sm">What happens next.</span>
                <span className="bg-white px-3 py-1 rounded-full shadow-sm">What could happen.</span>
                <span className="bg-white px-3 py-1 rounded-full shadow-sm">What to do about it.</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
              {[
                { title: "Too Much Data", desc: "Your teams have more information than they can manually analyze." },
                { title: "Too Many Reports", desc: "Reports tell you what happened, but not always why." },
                { title: "Decisions Come Too Late", desc: "By the time an issue appears, the opportunity may be gone." },
                { title: "Hidden Patterns", desc: "Important relationships and trends can be difficult to see manually." },
                { title: "Forecasting Is Difficult", desc: "Planning the future using spreadsheets creates uncertainty." }
              ].map((card, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-sm font-light text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <span className="font-mono text-sm tracking-tight text-purple-600">
                The real value of data isn't knowing what happened. It's knowing what to do next.
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. MEET YOUR AI DATA ANALYST (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600">Your AI Data Analyst</span>
              <h2 className="mb-5 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">An AI analyst that never stops looking for answers.</h2>
              <p className="text-lg font-light text-slate-600">
                Advanced Analytics Worker continuously analyzes your business data to identify patterns, risks, opportunities, and changes that deserve your attention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
              {[
                { title: "Understand", icon: BrainCircuit, color: "text-blue-500", bg: "bg-blue-50", desc: "Connect and interpret your business data." },
                { title: "Discover", icon: Search, color: "text-purple-500", bg: "bg-purple-50", desc: "Find patterns and relationships hidden inside your data." },
                { title: "Predict", icon: LineChart, color: "text-green-500", bg: "bg-green-50", desc: "Forecast future outcomes based on historical and current signals." },
                { title: "Detect", icon: AlertCircle, color: "text-orange-500", bg: "bg-orange-50", desc: "Identify anomalies and unexpected changes." },
                { title: "Explain", icon: FileText, color: "text-pink-500", bg: "bg-pink-50", desc: "Understand the reasons behind performance changes." },
                { title: "Recommend", icon: Zap, color: "text-indigo-500", bg: "bg-indigo-50", desc: "Turn insights into practical next actions." }
              ].map((feat, i) => (
                <div key={i} className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className={`size-12 rounded-2xl ${feat.bg} flex items-center justify-center mb-5`}>
                    <feat.icon className={`size-6 ${feat.color}`} />
                  </div>
                  <h3 className="text-xl font-normal text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-base font-light text-slate-600">{feat.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-base font-medium text-slate-800 border-b-2 border-blue-500 inline-block pb-1">Don't just ask what happened. Ask what happens next.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. CONNECT DATA & NATURAL LANGUAGE (Dark / Light Split Concept)
            ========================================================================= */}
        <section className="bg-slate-950 py-16 relative overflow-hidden border-b border-slate-800">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Connect Data */}
              <div>
                <h2 className="mb-5 text-4xl sm:text-5xl font-light tracking-tight text-white">Bring your data together. Let AI find the story.</h2>
                <p className="text-lg font-light text-slate-400 mb-8">
                  Advanced Analytics Worker works across the data your business already generates. Connect data from your business systems and analyze it in one intelligent environment.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { label: "ERP", sub: "Revenue, finance, inventory" },
                    { label: "CRM", sub: "Customers, leads, deals" },
                    { label: "HRMS", sub: "Employees, performance" },
                    { label: "Marketing", sub: "Campaigns, engagement" },
                    { label: "E-commerce", sub: "Orders, products" },
                    { label: "Databases/APIs", sub: "Structured & external data" }
                  ].map((src, i) => (
                    <div key={i} className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                      <div className="text-white font-medium mb-1 flex items-center gap-2"><Database className="size-4 text-blue-400"/>{src.label}</div>
                      <div className="text-xs text-slate-400">{src.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300 font-mono bg-slate-900/50 p-3 rounded-lg border border-slate-800 inline-flex">
                   Business Systems <ArrowRight className="size-4 text-blue-500" /> AI Insights <ArrowRight className="size-4 text-blue-500" /> Decisions
                </div>
              </div>

              {/* Natural Language Analytics */}
              <div className="bg-slate-900/80 p-8 rounded-[2rem] border border-slate-800 backdrop-blur-md">
                <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-blue-400">Natural Language Analytics</span>
                <h3 className="text-2xl font-normal text-white mb-4">Ask questions. Get answers.</h3>
                <p className="text-sm font-light text-slate-400 mb-6">You shouldn't need to know SQL. Ask questions in plain language and let AI explore the answers.</p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-slate-800 p-4 rounded-2xl rounded-tr-sm border border-slate-700 ml-8 text-sm text-slate-200">
                    "Why did revenue decline last month?"
                  </div>
                  <div className="bg-blue-900/40 p-5 rounded-2xl rounded-tl-sm border border-blue-800/50 mr-8">
                    <p className="text-sm text-blue-100 mb-3">Revenue declined 8.4% last month. The primary drivers were a 14% decline in the UAE segment and a 9% decrease in repeat purchases.</p>
                    <div className="bg-blue-950/50 p-3 rounded-xl border border-blue-800/50 text-xs text-blue-200">
                      <strong>Recommended action:</strong> Review the 12 accounts with reduced order frequency and launch a targeted retention campaign.
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                   {["Which products might run out?", "Customers at risk of leaving?", "Expected revenue next Q?"].map((q,i)=>(
                     <span key={i} className="text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full cursor-pointer hover:bg-slate-700">{q}</span>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. CORE ANALYTICS CAPABILITIES (Predict, Forecast, Anomaly, Root-cause)
            ========================================================================= */}
        <section className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <h2 className="mb-4 text-4xl font-light tracking-tight text-slate-900">Advanced Capabilities</h2>
              <p className="text-lg font-light text-slate-600">Deep, structural analysis that goes beyond surface-level reporting.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              
              {/* Predictive / Forecast */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">See What's Coming</span>
                <h3 className="text-2xl font-normal text-slate-900 mb-4">Predictive Analytics & Forecasting</h3>
                <p className="text-sm font-light text-slate-600 mb-6">Forecast future performance with AI-assisted models that analyze historical trends, seasonality, and current business signals.</p>
                
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 mb-6">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <div className="text-xs font-medium text-slate-500 uppercase">Revenue Forecast</div>
                      <div className="text-2xl font-normal text-slate-900">$1.02M</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-md mb-1">+21.4% Expected</div>
                      <div className="text-xs text-slate-500">92% Confidence</div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden flex">
                     <div className="h-full bg-slate-400 w-[45%]" title="Actual: $840K"></div>
                     <div className="h-full bg-blue-500 w-[55%] opacity-70" title="Forecast: $1.02M"></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                  {["Revenue Forecasting", "Demand Forecasting", "Customer Churn", "Sales Pipeline", "Inventory Prediction", "Workforce Planning"].map((tag, i)=>(
                    <span key={i} className="bg-slate-100 px-3 py-1 rounded-full border border-slate-200">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Anomaly & Root Cause */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-600 block mb-2">AI Monitoring</span>
                <h3 className="text-2xl font-normal text-slate-900 mb-4">Anomaly & Root-Cause Detection</h3>
                <p className="text-sm font-light text-slate-600 mb-6">Find problems humans might miss. AI continuously looks for unusual patterns and investigates the reasons behind the change.</p>
                
                <div className="space-y-3 mb-6">
                   <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl border border-red-100">
                     <div className="flex items-center gap-2"><div className="size-2 rounded-full bg-red-500"/> <span className="text-sm text-red-900 font-medium">Revenue 27% below expected</span></div>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-amber-100">
                     <div className="flex items-center gap-2"><div className="size-2 rounded-full bg-amber-500"/> <span className="text-sm text-amber-900 font-medium">Customer complaints +18%</span></div>
                   </div>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Root Cause Flow Example</div>
                  <div className="text-sm font-light text-slate-300 flex items-center gap-2 flex-wrap">
                    Revenue ↓ <ArrowRight className="size-3"/> UAE Revenue ↓ <ArrowRight className="size-3"/> Enterprise Sales ↓ <ArrowRight className="size-3"/> <span className="text-orange-400 font-medium">3 Deals Delayed</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            6. DEPARTMENT ANALYTICS GRID (Customer, Sales, Finance, Ops)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="mb-4 text-4xl font-light tracking-tight text-slate-900">Intelligence for every department.</h2>
              <p className="text-lg font-light text-slate-600">Turn raw department data into your next strategic move.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              
              {/* Customer Analytics */}
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                <Users className="size-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-2">Customer Analytics</h3>
                <p className="text-sm text-slate-600 mb-4">Analyze behavior to identify valuable segments, churn risks, and growth opportunities.</p>
                <div className="space-y-2 mb-4">
                  {["Customer Lifetime Value", "Churn Risk", "Purchase Patterns", "Segmentation"].map((item,i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700"><Check className="size-4 text-blue-500"/>{item}</div>
                  ))}
                </div>
                <div className="p-3 bg-blue-100/50 rounded-lg border border-blue-200 text-xs text-blue-800 font-medium">
                  Recommendation: Launch retention campaign for 42 highest-value at-risk accounts.
                </div>
              </div>

              {/* Sales Analytics */}
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                <BarChart3 className="size-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-2">Sales Analytics</h3>
                <p className="text-sm text-slate-600 mb-4">Understand your pipeline, identify risks, and discover opportunities hidden in sales data.</p>
                <div className="space-y-2 mb-4">
                  {["Pipeline forecasting", "Conversion analysis", "Sales velocity", "Win/loss analysis"].map((item,i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700"><Check className="size-4 text-purple-500"/>{item}</div>
                  ))}
                </div>
                <div className="p-3 bg-purple-100/50 rounded-lg border border-purple-200 text-xs text-purple-800 font-medium">
                  AI Insight: Pipeline is 18% below target for Q3. Prioritize 7 high-value enterprise ops.
                </div>
              </div>

              {/* Financial Analytics */}
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                <DollarSign className="size-8 text-green-500 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-2">Financial Analytics</h3>
                <p className="text-sm text-slate-600 mb-4">Connect financial data with operational performance to understand profitability drivers.</p>
                <div className="space-y-2 mb-4">
                  {["Revenue analysis", "Profitability analysis", "Cash flow forecasting", "Budget variance"].map((item,i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700"><Check className="size-4 text-green-500"/>{item}</div>
                  ))}
                </div>
                <div className="p-3 bg-green-100/50 rounded-lg border border-green-200 text-xs text-green-800 font-medium">
                  AI Insight: Margin decline driven by supplier costs. Evaluate alternative sourcing.
                </div>
              </div>

              {/* Ops & Inventory Analytics */}
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                <Package className="size-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-2">Operations & Inventory</h3>
                <p className="text-sm text-slate-600 mb-4">Understand operational performance, identify bottlenecks, and predict disruptions.</p>
                <div className="space-y-2 mb-4">
                  {["Predict demand", "Supply chain analysis", "Find bottlenecks", "Procurement costs"].map((item,i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700"><Check className="size-4 text-orange-500"/>{item}</div>
                  ))}
                </div>
                <div className="p-3 bg-orange-100/50 rounded-lg border border-orange-200 text-xs text-orange-800 font-medium">
                  AI Alert: Product A falls below safety stock in 12 days. Reorder 480 units.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            7. SCENARIOS, ALERTS, & REPORTS (Slate Section)
            ========================================================================= */}
        <section className="bg-slate-100/50 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <GitBranch className="size-6 text-indigo-500 mb-3" />
                <h4 className="text-lg font-medium text-slate-900 mb-2">Scenario Planning</h4>
                <p className="text-sm text-slate-600 mb-4">See what could happen before you decide.</p>
                <div className="text-xs text-slate-500 space-y-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                   <div>What if sales increase by 20%?</div>
                   <div>What if prices increase 10%?</div>
                   <div>What if supplier costs increase?</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <Bell className="size-6 text-red-500 mb-3" />
                <h4 className="text-lg font-medium text-slate-900 mb-2">Automated Alerts</h4>
                <p className="text-sm text-slate-600 mb-4">Let AI bring important changes to you via Dashboard, Email, Slack, or Teams.</p>
                <div className="text-xs font-medium space-y-2">
                   <div className="text-red-700 bg-red-50 p-2 rounded border border-red-100">🔴 Revenue falls below target</div>
                   <div className="text-green-700 bg-green-50 p-2 rounded border border-green-100">🟢 Sales exceed forecast</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <LayoutDashboard className="size-6 text-blue-500 mb-3" />
                <h4 className="text-lg font-medium text-slate-900 mb-2">Executive Intelligence</h4>
                <p className="text-sm text-slate-600 mb-4">Automated analytical reports giving leadership a high-level view of business health.</p>
                <div className="bg-slate-900 text-white p-3 rounded-lg text-xs">
                  "Business is on track for Q3 targets. Retention in UAE needs attention. 3 growth opportunities identified."
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            8. BUILT FOR ARABIC + ENGLISH (Rich Purple Gradient Section)
            ========================================================================= */}
        <section className="relative py-16 overflow-hidden border-b border-purple-900">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900" />
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-purple-300">Bilingual Business Intelligence</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">Understand your data in the language your team uses.</h2>
              <p className="text-lg font-light text-purple-100/80">
                Advanced Analytics Worker supports businesses operating across multilingual markets. Analyze and communicate insights across English and Arabic environments.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10 text-center">
              {[
                "Arabic Queries", "English Queries", "Bilingual Reports", 
                "RTL Support", "Hijri Context", "Ramadan Intelligence"
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                  <span className="text-sm font-medium text-purple-50">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-purple-200 bg-purple-900/50 inline-block px-6 py-3 rounded-full border border-purple-700/50">
                One source of truth. Multiple languages.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. CONNECT WITH AI WORKFORCE (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="mb-4 text-3xl sm:text-4xl font-light tracking-tight text-slate-900">Your AI Workers become smarter with data.</h2>
              <p className="text-lg font-light text-slate-600">Advanced Analytics Worker connects intelligence across your entire HIVENOX AI Workforce.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl mx-auto text-sm font-medium text-slate-700">
              <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 w-full md:w-auto">Business Data<br/><span className="text-xs font-normal text-slate-500">ERP / CRM</span></div>
              <ArrowRight className="size-5 text-blue-400 rotate-90 md:rotate-0" />
              <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg w-full md:w-auto">Advanced Analytics<br/><span className="text-xs font-normal text-blue-200">AI Insights</span></div>
              <ArrowRight className="size-5 text-blue-400 rotate-90 md:rotate-0" />
              <div className="flex flex-col gap-2 w-full md:w-auto">
                 <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs"><strong>SEO Worker:</strong> Identifies growth</div>
                 <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs"><strong>Content Worker:</strong> Creates content</div>
                 <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs"><strong>Social Worker:</strong> Distributes campaigns</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. COMPARISON TABLE (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="mb-4 text-3xl sm:text-4xl font-light tracking-tight text-slate-900">Move beyond reporting.</h2>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-lg mb-8">
              <table className="w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-5 font-bold text-slate-900 w-1/2">Traditional Analytics</th>
                    <th className="p-5 font-bold text-blue-700 w-1/2 bg-blue-50/50 border-l border-slate-200">Advanced Analytics Worker</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-light text-slate-700">
                  {[
                    ["What happened?", "What happened and why?"],
                    ["Historical reports", "Historical + predictive insights"],
                    ["Manual analysis", "AI-powered analysis"],
                    ["Static dashboards", "Dynamic intelligence"],
                    ["Manual anomaly detection", "Automated anomaly detection"],
                    ["Basic forecasting", "AI-assisted predictive forecasting"],
                    ["Data visualization", "Insights + recommendations"],
                    ["Reactive decisions", "Proactive decisions"],
                    ["Data experts required", "Natural language analytics"],
                    ["Separate reports", "Connected business intelligence"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="p-5 text-slate-500">{row[0]}</td>
                      <td className="p-5 font-medium text-slate-900 bg-blue-50/30 border-l border-slate-100 flex items-center gap-3">
                        <Check className="size-4 text-blue-500 shrink-0" />
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-center text-sm font-medium text-slate-500">Traditional analytics explains the past. Advanced Analytics Worker helps you prepare for the future.</p>
          </div>
        </section>

        {/* =========================================================================
            11. PRICING SECTION (WIDE LAYOUT, Soft Slate)
            ========================================================================= */}
        <section className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-600">AI-Powered Analytics</span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Turn your data into your competitive advantage.</h2>
            </div>

            {/* Currency / Annual Toggles */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center p-1 bg-white border border-slate-200 rounded-none shadow-sm">
                <button onClick={() => setCurrency("USD")} className={`px-6 py-2.5 text-sm font-medium rounded-none transition-colors ${currency === "USD" ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>USD</button>
                <button onClick={() => setCurrency("AUD")} className={`px-6 py-2.5 text-sm font-medium rounded-none transition-colors ${currency === "AUD" ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>AUD</button>
              </div>
              <div className="flex items-center p-1 bg-white border border-slate-200 rounded-none shadow-sm">
                <button onClick={() => setIsAnnual(false)} className={`px-6 py-2.5 text-sm font-medium rounded-none transition-colors ${!isAnnual ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>Monthly</button>
                <button onClick={() => setIsAnnual(true)} className={`px-6 py-2.5 text-sm font-medium rounded-none transition-colors ${isAnnual ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-900"}`}>Annual (Save 20%)</button>
              </div>
            </div>

            {/* EXTRA WIDE PRICING CARD */}
            <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] border-4 border-blue-600 p-8 sm:p-12 shadow-2xl relative">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-8 mb-8 gap-6">
                <div>
                  <h3 className="text-3xl font-normal text-slate-900 mb-2">Advanced Analytics Worker</h3>
                  <p className="text-sm font-light text-slate-500">The complete AI-powered intelligence engine for your business data.</p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-5xl font-light text-slate-900">
                    {getCurrencySymbol()}{calculatePrice(149)}
                    <span className="text-base font-normal text-slate-500">/month</span>
                  </div>
                  <p className="text-xs font-light text-slate-400 mt-2">{isAnnual ? "Billed annually with 20% discount." : "Billed monthly."}</p>
                </div>
              </div>
              
              {/* Features split into 3 columns for extra wide layout */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 mb-10 text-sm font-light text-slate-700">
                {[
                  "AI-powered data analysis", "Natural language analytics", "Predictive analytics", 
                  "AI forecasting", "Anomaly detection", "Root-cause analysis", 
                  "Trend analysis", "Customer analytics", "Sales analytics", 
                  "Financial analytics", "Operations analytics", "Scenario planning", 
                  "AI recommendations", "Automated alerts", "Automated analytical reports", 
                  "Executive intelligence summaries", "Arabic + English insights", "RTL support", 
                  "Hijri support", "Ramadan intelligence", "Email + WhatsApp support"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="size-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-2xl mx-auto">
                <a href="/book?plan=analytics" className="flex-1 flex h-14 items-center justify-center bg-blue-600 rounded-none font-normal text-lg text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  Start 7-Day Free Trial
                </a>
                <a href="/book" className="flex-1 flex h-14 items-center justify-center border-2 border-slate-300 bg-white rounded-none font-normal text-lg text-slate-800 hover:border-slate-800 hover:bg-slate-800 hover:text-white transition-colors">
                  Book a Demo
                </a>
              </div>
              
              <p className="text-center text-sm font-light text-slate-500 mb-8">No credit card required. No lock-in. Cancel anytime.</p>

              <div className="pt-8 border-t border-slate-100 text-center bg-blue-50/50 -mx-8 -mb-12 sm:-mx-12 p-8 rounded-b-[2.2rem]">
                <p className="text-sm font-medium text-slate-900 mb-2">Need enterprise-scale analytics?</p>
                <a href="/book?plan=enterprise" className="text-sm font-normal text-blue-600 hover:underline">
                  Explore Enterprise Growth OS for advanced data integrations, custom models & APIs →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            12. ROI & FLYWHEEL SECTION (White Section)
            ========================================================================= */}
        <section className="bg-white py-16 border-b border-slate-200">
           <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto mb-10">
              <h2 className="mb-4 text-4xl font-light tracking-tight text-slate-900">One better decision can pay for the entire system.</h2>
              <p className="text-lg font-light text-slate-600">A missed opportunity. An unexpected inventory shortage. A lost customer. Small changes have significant impacts. Advanced Analytics Worker helps your team identify signals earlier and act with confidence.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto mb-12">
              {[
                { title: "Find Problems Earlier", desc: "Detect anomalies before they become major issues." },
                { title: "Predict Demand", desc: "Prepare inventory before demand changes." },
                { title: "Reduce Churn", desc: "Identify at-risk customers before they leave." },
                { title: "Improve Decisions", desc: "Replace assumptions with evidence." }
              ].map((val, i) => (
                <div key={i} className="p-6 border border-slate-100 bg-slate-50 rounded-2xl">
                  <h4 className="font-medium text-slate-900 mb-2">{val.title}</h4>
                  <div className="text-sm font-light text-slate-600">{val.desc}</div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto bg-slate-900 p-8 rounded-[2rem] text-white">
               <h3 className="text-xl font-normal mb-6">The Analytics Flywheel</h3>
               <div className="flex flex-wrap justify-center items-center gap-2 text-sm font-light text-slate-300">
                  Connect Data <ArrowRight className="size-4 text-blue-500"/> Analyze <ArrowRight className="size-4 text-blue-500"/> Discover Patterns <ArrowRight className="size-4 text-blue-500"/> Predict Outcomes <ArrowRight className="size-4 text-blue-500"/> Recommend Actions <ArrowRight className="size-4 text-blue-500"/> Measure Results
               </div>
            </div>
           </div>
        </section>

        {/* =========================================================================
            13. REGIONS (Dark Slate Section)
            ========================================================================= */}
        <section className="bg-slate-950 py-16 border-b border-slate-800">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 text-center">
             <div className="max-w-4xl mx-auto mb-10">
              <h2 className="mb-4 text-4xl font-light tracking-tight text-white">Built for businesses operating across markets.</h2>
              <p className="text-lg font-light text-slate-400">Business patterns vary across countries, markets, and customer segments. Advanced Analytics Worker helps your team understand performance across the regions that matter to your business.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {[
                { title: "Australia", desc: "Analyze business performance across mature markets." },
                { title: "UAE", desc: "Understand diverse customer and commercial segments." },
                { title: "Saudi Arabia", desc: "Analyze regional growth and local business trends." }
              ].map((region, i) => (
                <div key={i} className="bg-slate-900 p-8 rounded-[1.5rem] border border-slate-800">
                  <Globe className="size-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-normal text-white mb-2">{region.title}</h3>
                  <p className="text-sm font-light text-slate-400">{region.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            14. FAQ (Reduced padding)
            ========================================================================= */}
        <section className="bg-white py-10 border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <h3 className="mb-8 text-center text-3xl font-light tracking-tight text-slate-900">Frequently Asked Questions</h3>
            
            <div className="space-y-3">
              {[
                { q: "What is HIVENOX Advanced Analytics Worker?", a: "Advanced Analytics Worker is an AI-powered analytics Worker that helps businesses analyze data, identify patterns, forecast outcomes, detect anomalies, understand root causes, and receive actionable recommendations." },
                { q: "How is it different from Business Intelligence?", a: "Business Intelligence focuses primarily on dashboards and historical performance. Advanced Analytics Worker goes further with predictive analytics, forecasting, anomaly detection, root-cause analysis, and AI recommendations." },
                { q: "Can I ask questions about my data?", a: "Yes. Natural language analytics allows users to ask business questions in plain language and receive AI-assisted insights." },
                { q: "Can it predict future revenue or forecast inventory?", a: "Yes. Advanced Analytics Worker supports AI-assisted forecasting for revenue, sales, demand, inventory, and other metrics." },
                { q: "Can it detect unusual business activity?", a: "Yes. Anomaly detection helps identify unexpected changes in revenue, customers, inventory, and expenses." },
                { q: "Does it support scenario planning?", a: "Yes. Scenario analysis helps businesses explore potential outcomes from changes in pricing, demand, sales, and other variables." },
                { q: "Does it support Arabic?", a: "Yes. It supports Arabic and English analytics experiences, including bilingual insights, RTL support, Hijri context, and Ramadan intelligence." },
                { q: "Can I connect my ERP and CRM data?", a: "Yes. It is designed to work with data from business systems such as ERP, CRM, HRMS, databases, spreadsheets, and APIs." }
              ].map((faq, index) => (
                <details key={index} className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-white">
                  <summary className="flex cursor-pointer items-center justify-between p-4 text-sm sm:text-base font-medium text-slate-900 outline-none list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ArrowDown className="size-4 shrink-0 text-blue-500 transition-transform duration-300 group-open:rotate-180 ml-4" />
                  </summary>
                  <div className="px-4 pb-4 pt-0 text-sm font-light leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            15. FINAL CTA (Reduced Padding)
            ========================================================================= */}
        <section className="py-10 px-5 sm:px-6 lg:px-8 bg-slate-50">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-blue-600 px-6 py-12 sm:px-12 sm:py-16 text-center shadow-xl">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[30rem] w-[30rem] rounded-full bg-blue-500 blur-[100px] opacity-60 pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[30rem] w-[30rem] rounded-full bg-blue-800 blur-[100px] opacity-40 pointer-events-none" />
              
              <div className="relative z-10 mx-auto max-w-3xl">
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-200 bg-blue-800/30 px-4 py-1.5 rounded-full border border-blue-400/30">
                  Your AI Data Analyst
                </span>
                <h2 className="mb-4 text-4xl sm:text-5xl font-light tracking-tight text-white">
                  Stop looking at data. Start using it.
                </h2>
                <p className="mb-8 text-lg font-light leading-relaxed text-blue-100 max-w-2xl mx-auto">
                  Turn your business data into insights, predictions, alerts, and actions. See what's happening. Understand why. Predict what's next. Make your next decision with confidence.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <a href="/book?plan=analytics" className="inline-flex h-14 items-center justify-center bg-white px-10 text-lg font-normal text-blue-700 rounded-none transition-all hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5">
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