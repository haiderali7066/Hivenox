import React from 'react';

export default function AnalyticsReportingPage() {
  return (
    <div className="w-full font-sans text-slate-800 bg-white selection:bg-blue-200 selection:text-blue-900">
      
      {/* SEO & Geo Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Hivenox ERP Analytics & Reporting",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "description": "Bring your sales, finance, inventory, CRM, and operations data together with powerful dashboards, KPIs, and reports.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "$"
            },
            "areaServed": ["Lahore", "Karachi", "Islamabad", "Dubai", "MENA", "Global"]
          })
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-blue-700 text-white py-24 lg:py-32 rounded-b-[3rem] lg:rounded-b-[5rem] z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-300 via-transparent to-transparent"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-800/60 border border-blue-500 text-emerald-300 text-sm font-semibold tracking-wider mb-6 shadow-sm backdrop-blur-md">
              Hivenox ERP • Analytics & Reporting
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Turn Business Data Into <span className="text-emerald-400">Better Decisions.</span>
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-10 leading-relaxed">
              Bring your sales, finance, inventory, CRM, and operations data together with powerful dashboards, KPIs, and reports.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/book" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:-translate-y-1 flex items-center gap-2 group">
                Book a Demo 
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
              <a href="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                Explore Hivenox ERP
              </a>
            </div>
          </div>
          
          <div className="relative group perspective">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
              alt="Hivenox Analytics Dashboard" 
              className="relative rounded-2xl shadow-2xl shadow-black/40 border border-white/10 group-hover:rotate-1 group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">One Clear View of Your Business</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Stop working with disconnected spreadsheets and outdated reports. Hivenox gives your team a centralized, real-time view of business performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Real-Time Dashboards", desc: "Monitor your most important metrics as they happen.", icon: "📊" },
              { title: "Custom Reports", desc: "Build reports tailored perfectly around your business.", icon: "📝" },
              { title: "KPI Tracking", desc: "Measure true performance against your core targets.", icon: "🎯" },
              { title: "Automated Reports", desc: "Schedule reports and deliver them automatically.", icon: "⚡" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-50 text-2xl rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-4">
             <a href="/contact" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold py-3 px-8 rounded-full hover:border-blue-700 hover:text-blue-700 transition-colors">
               Contact Sales
             </a>
             <a href="/book" className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition-colors">
               See it in action <span aria-hidden="true">&rarr;</span>
             </a>
          </div>
        </div>
      </section>

      {/* 3. DASHBOARD SHOWCASE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">Everything Important.<br/><span className="text-blue-700">At a Glance.</span></h2>
              <p className="text-lg text-slate-600 mb-8">
                Instantly understand your financial health, operational efficiency, and sales velocity without digging through menus.
              </p>
              <ul className="space-y-4 mb-8">
                {['Revenue Trend', 'Sales by Product', 'Profitability Tracking', 'Inventory Performance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="/book" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all hover:shadow-lg inline-block">Build Your Dashboard</a>
            </div>
            
            {/* Massive Dashboard UI Mockup */}
            <div className="lg:w-2/3 w-full">
              <div className="bg-slate-50 p-4 lg:p-8 rounded-[2.5rem] shadow-2xl border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                   <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                </div>
                
                {/* KPIs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 relative z-10">
                  {[
                    { label: 'Revenue', val: '$ 8.42M', inc: '↑ 18.4%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { label: 'Net Profit', val: '$ 3.24M', inc: '↑ 12.7%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { label: 'Orders', val: '4,284', inc: '↑ 21.3%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { label: 'Customers', val: '2,841', inc: '↑ 9.6%', color: 'text-emerald-600', bg: 'bg-emerald-50' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer">
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">{stat.label}</p>
                      <p className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">{stat.val}</p>
                      <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md ${stat.bg} ${stat.color}`}>
                        {stat.inc}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Charts Area */}
                <div className="grid md:grid-cols-3 gap-4 relative z-10">
                  <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                     <div className="flex justify-between items-center mb-6">
                       <h4 className="font-bold text-slate-800">Revenue Trend</h4>
                       <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">This Year</span>
                     </div>
                     <div className="h-48 flex items-end gap-2 justify-between">
                       {[30, 45, 35, 60, 50, 75, 65, 90, 80, 100].map((h, i) => (
                         <div key={i} className="w-full bg-blue-100 rounded-t-md relative group">
                           <div className="absolute bottom-0 w-full bg-blue-600 rounded-t-md transition-all duration-700 group-hover:bg-emerald-400" style={{ height: `${h}%` }}></div>
                         </div>
                       ))}
                     </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                     <h4 className="font-bold text-slate-800 mb-4">Sales by Product</h4>
                     <div className="space-y-4">
                       {[
                         { name: 'Enterprise ERP', pct: 45, color: 'bg-blue-600' },
                         { name: 'POS Hardware', pct: 30, color: 'bg-emerald-400' },
                         { name: 'Consulting', pct: 25, color: 'bg-slate-300' }
                       ].map((item, i) => (
                         <div key={i}>
                           <div className="flex justify-between text-xs mb-1 font-medium">
                             <span>{item.name}</span>
                             <span>{item.pct}%</span>
                           </div>
                           <div className="w-full bg-slate-100 rounded-full h-2">
                             <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.pct}%` }}></div>
                           </div>
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

      {/* 4. ANALYTICS ACROSS YOUR BUSINESS */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] lg:rounded-[5rem] mx-4 lg:mx-8 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Every Team. <span className="text-blue-400">One Source of Truth.</span></h2>
            <p className="text-slate-300 text-lg">
              Break down data silos. Give every department the exact metrics they need to perform at their best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Sales', metrics: 'Revenue, orders, conversion, and product performance.', icon: '📈', color: 'from-blue-500/20 to-blue-600/5 border-blue-500/30' },
              { title: 'Finance', metrics: 'Profit, expenses, cash flow, and receivables.', icon: '💰', color: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/30' },
              { title: 'Inventory', metrics: 'Stock value, turnover, fast & slow-moving products.', icon: '📦', color: 'from-orange-500/20 to-orange-600/5 border-orange-500/30' },
              { title: 'CRM', metrics: 'Customers, acquisition, retention, and sales performance.', icon: '🤝', color: 'from-purple-500/20 to-purple-600/5 border-purple-500/30' },
              { title: 'Operations', metrics: 'Tasks, workflows, productivity, and branch performance.', icon: '⚙️', color: 'from-pink-500/20 to-pink-600/5 border-pink-500/30' },
              { title: 'HR', metrics: 'Headcount, payroll, recruitment, and workforce trends.', icon: '👥', color: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/30' }
            ].map((dept, i) => (
              <div key={i} className={`bg-gradient-to-br ${dept.color} backdrop-blur-sm border p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{dept.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{dept.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{dept.metrics}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center flex flex-col sm:flex-row justify-center gap-4">
             <a href="/book" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all duration-300">
                Unify Your Data
             </a>
             <a href="/contact" className="px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white font-bold rounded-full transition-all duration-300">
                Talk to an Expert
             </a>
          </div>
        </div>
      </section>

      {/* 5. CUSTOM REPORTING */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200 shadow-xl relative">
               <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                 <h4 className="font-bold text-slate-800">Report Builder</h4>
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                   <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                 </div>
               </div>
               
               <div className="space-y-4">
                 <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center cursor-pointer hover:border-blue-400">
                   <span className="text-sm font-semibold text-slate-600">Select Metric</span>
                   <span className="text-blue-600 text-sm font-bold">Total Sales ▼</span>
                 </div>
                 <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center cursor-pointer hover:border-blue-400">
                   <span className="text-sm font-semibold text-slate-600">Filter By</span>
                   <span className="text-blue-600 text-sm font-bold">Dubai Branch ▼</span>
                 </div>
                 <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center cursor-pointer hover:border-blue-400">
                   <span className="text-sm font-semibold text-slate-600">Date Range</span>
                   <span className="text-blue-600 text-sm font-bold">Last 30 Days ▼</span>
                 </div>
                 <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center cursor-pointer hover:border-blue-400">
                   <span className="text-sm font-semibold text-slate-600">Group By</span>
                   <span className="text-blue-600 text-sm font-bold">Product Category ▼</span>
                 </div>
               </div>
               
               <button className="w-full mt-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg transition-colors">
                 Generate Report
               </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900">Build Reports That <span className="text-emerald-500">Fit Your Business</span></h2>
            <p className="text-lg text-slate-600 mb-8">
              No more rigid, pre-built templates that don't answer your specific questions. Create reports using any dimension across your entire Hivenox ERP.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['Custom metrics', 'Filters', 'Date ranges', 'Departments', 'Branches', 'Products', 'Customers'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-bold">
                  + {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/book" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg inline-flex items-center gap-2">
                Build Better Reports <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="/contact" className="bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-400 font-semibold py-3 px-8 rounded-full transition-all inline-block">
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AUTOMATED INSIGHTS */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900">Know What Needs <span className="text-blue-700">Your Attention.</span></h2>
            <p className="text-lg text-slate-600 mb-8">
              Don't wait until the end of the month to find out you missed a target. Hivenox continuously monitors your data and pushes actionable insights to you.
            </p>
            <a href="/book" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition-all inline-block hover:shadow-lg shadow-emerald-500/30">
              Set Up Smart Alerts
            </a>
          </div>

          <div className="space-y-4">
            {/* Alert Cards */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-red-500 hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 font-bold">⚠</div>
              <div>
                <h4 className="font-bold text-slate-900">Revenue below target</h4>
                <p className="text-sm text-slate-600 mt-1">Monthly revenue is 8% below the forecasted target.</p>
                <button className="text-xs font-bold text-red-600 mt-3 hover:underline">View Sales Breakdown &rarr;</button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-emerald-500 hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 font-bold">✓</div>
              <div>
                <h4 className="font-bold text-slate-900">Sales target reached</h4>
                <p className="text-sm text-slate-600 mt-1">Dubai branch reached 112% of their Q3 target.</p>
                <button className="text-xs font-bold text-emerald-600 mt-3 hover:underline">Send Recognition &rarr;</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-amber-500 hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 font-bold">⚠</div>
              <div>
                <h4 className="font-bold text-slate-900">Inventory risk</h4>
                <p className="text-sm text-slate-600 mt-1">24 fast-moving products are below the reorder level.</p>
                <button className="text-xs font-bold text-amber-600 mt-3 hover:underline">Create Purchase Order &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONNECTED ECOSYSTEM */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Your Business Data, <span className="text-blue-700">Connected.</span></h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
            Hivenox Analytics connects data seamlessly across your business so every team works from the exact same numbers.
          </p>

          <div className="relative max-w-5xl mx-auto py-10">
            {/* Visual routing lines for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-100 via-blue-400 to-emerald-400 -translate-y-1/2 z-0 rounded-full"></div>
            
            <div className="grid grid-cols-2 lg:grid-cols-7 gap-6 items-center relative z-10">
              {/* Left Modules */}
              <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
                {['CRM', 'SalesFlow', 'Books'].map((app, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-md border border-slate-100 font-bold text-slate-700 hover:border-blue-400 transition-colors cursor-pointer">
                    {app}
                  </div>
                ))}
              </div>

              {/* Connecting Arrows (Mobile hidden) */}
              <div className="hidden lg:flex col-span-1 justify-center">
                 <span className="text-blue-300 text-4xl animate-pulse">→</span>
              </div>

              {/* Center Analytics Hub */}
              <div className="col-span-2 lg:col-span-1 flex justify-center">
                <div className="bg-blue-700 text-white w-32 h-32 lg:w-40 lg:h-40 rounded-full flex flex-col items-center justify-center shadow-2xl shadow-blue-700/40 transform hover:scale-110 transition-transform">
                  <span className="text-2xl mb-1">📊</span>
                  <span className="font-extrabold text-sm lg:text-base">Analytics</span>
                </div>
              </div>

              {/* Connecting Arrows (Mobile hidden) */}
              <div className="hidden lg:flex col-span-1 justify-center">
                 <span className="text-emerald-300 text-4xl animate-pulse">←</span>
              </div>

              {/* Right Modules */}
              <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
                {['HRMS', 'Inventory', 'Operations'].map((app, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-md border border-slate-100 font-bold text-slate-700 hover:border-emerald-400 transition-colors cursor-pointer">
                    {app}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <a href="/book" className="text-blue-700 font-bold hover:text-blue-800 transition-colors inline-flex items-center gap-2 text-lg">
              Explore the Ecosystem <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. BENEFITS & GEO SEO */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group perspective hidden lg:block">
             <div className="absolute inset-0 bg-blue-200 rounded-3xl transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500"></div>
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Team reviewing data" className="relative rounded-3xl shadow-xl z-10 group-hover:-translate-y-2 transition-transform duration-500" />
          </div>

          <div>
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4 block">Why Hivenox Analytics?</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-slate-900">From Raw Data to <span className="text-blue-700">Decisions.</span></h2>
            
            <div className="space-y-8">
              {[
                { title: 'Real-Time Visibility', desc: 'Know exactly what is happening right now, across all departments.' },
                { title: 'Less Manual Reporting', desc: 'Automate repetitive reporting and eliminate spreadsheet errors.' },
                { title: 'Better Decisions', desc: 'Turn complex business data into clear, actionable insights.' },
                { title: 'Complete Accountability', desc: 'Track performance across teams and global locations seamlessly.' }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0 text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-slate-200/50 rounded-xl">
               <p className="text-xs text-slate-500 text-center">
                 Trusted by growing businesses across Lahore, Karachi, Islamabad, Dubai, and the broader MENA region.
               </p>
            </div>
            
            <div className="mt-8">
               <a href="/contact" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-full transition-all inline-block w-full sm:w-auto text-center">Contact our Data Experts</a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <a href="/contact" className="text-blue-600 font-medium hover:underline">Have another question? Contact us.</a>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Can I create custom reports?", a: "Yes, you can easily build robust reports using your specific business data, custom metrics, filters, and operational dimensions without needing coding skills." },
              { q: "Can reports be automated?", a: "Yes, you can schedule recurring reports for your teams, management, or stakeholders and have them delivered automatically to their inbox." },
              { q: "Does it connect with other Hivenox apps?", a: "Absolutely. Hivenox Analytics connects natively with CRM, SalesFlow, Books, HRMS, Inventory, and Operations to provide a holistic view." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-2xl border border-slate-100 open:bg-white open:border-blue-200 open:shadow-md transition-all duration-300">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-slate-800 marker:content-none selection:bg-transparent">
                  <span className="text-lg">{faq.q}</span>
                  <span className="transition group-open:rotate-180 text-blue-600 bg-blue-50 p-2 rounded-full">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-24 bg-blue-700 text-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500 rounded-full blur-3xl opacity-20 pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">Make Your Business Data <br/><span className="text-emerald-400">Work Harder.</span></h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
            Get the absolute clarity you need to make faster, smarter decisions and scale your business with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="/book" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-5 px-12 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:-translate-y-1 text-lg flex items-center justify-center gap-2 group">
              Book a Demo <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
            <a href="/contact" className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-blue-700 font-bold py-5 px-12 rounded-full transition-all duration-300 text-lg">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}