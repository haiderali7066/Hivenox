
import React from 'react';

export default function OperationsManagement() {
  return (
    <div className="w-full font-sans text-slate-800 bg-white selection:bg-blue-200 selection:text-blue-900">
      {/* SEO & Geo Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "[https://schema.org](https://schema.org)",
            "@type": "SoftwareApplication",
            "name": "Hivenox ERP Operations Management",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "description": "Coordinate people, processes, tasks, approvals, and daily operations with complete visibility across your business.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Global"]
          })
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-blue-700 text-white py-24 lg:py-32 rounded-b-[3rem] lg:rounded-b-[5rem] z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-300 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-600 text-emerald-300 text-sm font-semibold tracking-wider mb-6 shadow-sm">
              Hivenox ERP • Operations Management
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Run Every Operation From One <span className="text-emerald-400">Connected Workspace.</span>
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
              Coordinate people, processes, tasks, approvals, and daily operations with complete visibility across your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/book" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1">
                Book a Demo
              </a>
              <a href="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1">
                Explore Hivenox ERP
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-blue-200">
              <span className="flex items-center gap-2">✓ Centralized operations</span>
              <span className="flex items-center gap-2">✓ Workflow automation</span>
              <span className="flex items-center gap-2">✓ Task & team management</span>
              <span className="flex items-center gap-2">✓ Real-time visibility</span>
            </div>
          </div>
          <div className="relative group perspective">
            <img 
              src="[https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80)" 
              alt="Hivenox ERP Dashboard" 
              className="rounded-2xl shadow-2xl shadow-black/40 border border-white/10 group-hover:rotate-1 group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 2. OPERATIONS OVERVIEW */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Everything Your Business Does. One Place.</h2>
            <p className="text-slate-600 text-lg">
              Hivenox Operations Management brings your everyday business activities into one connected workspace, helping teams move work from request to completion without disconnected tools or spreadsheets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Task Management", desc: "Assign, prioritize, and track operational work." },
              { title: "Workflow Automation", desc: "Standardize repetitive processes and approvals." },
              { title: "Team Coordination", desc: "Keep employees aligned around daily responsibilities." },
              { title: "Process Management", desc: "Create consistent workflows for recurring operations." },
              { title: "Approvals", desc: "Route requests to the right people automatically." },
              { title: "Operational Reporting", desc: "Understand what is happening across the business." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <a href="/book" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors">
               Start managing operations better <span>&rarr;</span>
             </a>
          </div>
        </div>
      </section>

      {/* 3. OPERATIONS DASHBOARD UI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">See What’s Happening <span className="text-blue-700">Right Now</span></h2>
              <p className="text-lg text-slate-600 mb-8">
                Give managers a real-time view of operational activity without chasing updates across teams.
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-inner mb-8">
                <h4 className="font-semibold text-slate-900 mb-4 uppercase tracking-wider text-sm">Live Activity Feed</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-600"><span className="text-emerald-500 bg-emerald-100 p-1 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></span> Purchase request approved</li>
                  <li className="flex items-center gap-3 text-slate-600"><span className="text-emerald-500 bg-emerald-100 p-1 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></span> Warehouse transfer completed</li>
                  <li className="flex items-center gap-3 text-slate-600"><span className="text-blue-500 bg-blue-100 p-1 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></span> Customer request assigned</li>
                  <li className="flex items-center gap-3 text-slate-600"><span className="text-orange-500 bg-orange-100 p-1 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg></span> 3 tasks overdue</li>
                </ul>
              </div>
              <a href="/book" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all hover:shadow-lg inline-block">View Dashboard Demo</a>
            </div>
            
            {/* Dashboard Mockup */}
            <div className="lg:w-1/2 w-full bg-slate-100 p-4 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-slate-200">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-blue-50 rounded-2xl">
                    <p className="text-blue-600 text-sm font-semibold">Active Tasks</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">248</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-2xl">
                    <p className="text-emerald-600 text-sm font-semibold">Completed Today</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">186</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-2xl">
                    <p className="text-orange-600 text-sm font-semibold">Pending Approvals</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">32</p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-2xl">
                    <p className="text-red-600 text-sm font-semibold">Overdue Tasks</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">14</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center border-t border-slate-100 pt-4 mt-2">
                  <div><p className="text-xl font-bold text-slate-800">47</p><p className="text-xs text-slate-500">Open Req.</p></div>
                  <div><p className="text-xl font-bold text-slate-800">29</p><p className="text-xs text-slate-500">Workflows</p></div>
                  <div><p className="text-xl font-bold text-slate-800">86</p><p className="text-xs text-slate-500">Members</p></div>
                  <div><p className="text-xl font-bold text-slate-800">8</p><p className="text-xs text-slate-500">Branches</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TASK MANAGEMENT & 5. WORKFLOW AUTOMATION (Split Layout) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32">
          
          {/* Task Management */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative">
                <img src="[https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80)" alt="Task Management" className="rounded-3xl shadow-xl"/>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-slate-600">To Do</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">In Progress</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">Completed</span>
                  </div>
                </div>
             </div>
             <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Turn Daily Work Into Clear, <span className="text-blue-700">Trackable Tasks</span></h2>
                <p className="text-lg text-slate-600 mb-8">Manage operational work from creation to completion.</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
                  {['Create tasks', 'Assign employees', 'Set priorities', 'Due dates', 'Task dependencies', 'Attachments', 'Comments', 'Checklists', 'Status tracking', 'Activity history'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                      <span className="text-emerald-500">✓</span> {item}
                    </div>
                  ))}
                </div>
                <a href="/contact" className="inline-flex bg-white border border-slate-200 hover:border-blue-700 hover:text-blue-700 text-slate-800 font-semibold py-3 px-8 rounded-full transition-all">Explore Task Features</a>
             </div>
          </div>

          {/* Workflow Automation */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Turn Repetitive Processes Into <span className="text-emerald-500">Automated Workflows</span></h2>
                <p className="text-lg text-slate-600 mb-8">Create structured workflows for recurring business processes. Eliminate bottlenecks.</p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-l-blue-600">
                    <h4 className="font-bold text-slate-800 mb-2">Purchase Request Workflow</h4>
                    <p className="text-sm text-slate-500 flex items-center gap-2 flex-wrap">
                      Request &rarr; Manager Approval &rarr; Procurement &rarr; Supplier Order &rarr; Receiving &rarr; <span className="text-emerald-500 font-semibold">Completed</span>
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-l-emerald-500">
                    <h4 className="font-bold text-slate-800 mb-2">Employee Request</h4>
                    <p className="text-sm text-slate-500 flex items-center gap-2 flex-wrap">
                      Request &rarr; Manager &rarr; HR &rarr; Finance &rarr; <span className="text-emerald-500 font-semibold">Approved</span>
                    </p>
                  </div>
                </div>
                <a href="/book" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all inline-block">Automate Your Workflows</a>
             </div>
             <div className="relative">
                 <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[3rem] p-8 lg:p-12 text-white shadow-2xl">
                    <div className="space-y-4">
                      {/* Workflow animation simulation */}
                      {[
                        { step: "Customer Request", status: "Done", color: "bg-emerald-500" },
                        { step: "Assignment", status: "Done", color: "bg-emerald-500" },
                        { step: "Team Action", status: "Active", color: "bg-blue-400 animate-pulse" },
                        { step: "Review", status: "Pending", color: "bg-white/20" },
                        { step: "Resolved", status: "Pending", color: "bg-white/20" }
                      ].map((wf, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                          <div className={`w-4 h-4 rounded-full ${wf.color}`}></div>
                          <span className="font-medium text-lg">{wf.step}</span>
                        </div>
                      ))}
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. APPROVAL MANAGEMENT */}
      <section className="py-24 bg-blue-700 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Move Requests Through the <span className="text-emerald-400">Right People</span></h2>
            <p className="text-lg text-blue-100 mb-8">
              Centralize approvals instead of relying on email, messages, or verbal confirmations. Manage approvals for purchases, expenses, discounts, refunds, and more seamlessly.
            </p>
            <div className="grid grid-cols-2 gap-4 text-blue-100 mb-10">
              <span>• Purchase requests</span>
              <span>• Leave requests</span>
              <span>• Expenses & Refunds</span>
              <span>• Inventory adjustments</span>
            </div>
            <a href="/book" className="bg-white text-blue-700 hover:bg-slate-100 font-semibold py-3 px-8 rounded-full transition-all">Setup Approvals Now</a>
          </div>
          
          <div className="bg-white text-slate-800 rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto w-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-100 px-3 py-1 rounded-full mb-2 inline-block">Pending Approval</span>
                <h3 className="text-xl font-bold mt-2">Purchase Request</h3>
                <p className="text-slate-500 text-sm">#PR-1048</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-extrabold text-blue-700">PKR 245,000</p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl mb-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Requested by</span>
                <span className="font-semibold text-slate-900">Operations Team</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Approver</span>
                <span className="font-semibold text-slate-900">Finance Manager</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-colors">Approve</button>
              <button className="flex-1 bg-white border-2 border-slate-200 hover:border-red-500 hover:text-red-500 text-slate-600 font-semibold py-3 rounded-xl transition-colors">Reject</button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TEAM & WORKFORCE & 8. INTERNAL OPERATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Keep Teams Aligned & Centralize Requests</h2>
            <p className="text-slate-600 text-lg">
              Monitor team workloads and give employees a single place to submit operational requests—no more lost email threads.
            </p>
            <div className="mt-8">
               <a href="/contact" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all inline-block">Manage Your Team</a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Team Dashboard Mockup */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Team Workload Tracker</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-slate-500 text-sm border-b border-slate-200">
                      <th className="pb-3 font-semibold">Department</th>
                      <th className="pb-3 font-semibold">Active</th>
                      <th className="pb-3 font-semibold">Done</th>
                      <th className="pb-3 font-semibold">Overdue</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { team: 'Operations', act: 24, done: 86, over: 3 },
                      { team: 'Sales', act: 12, done: 42, over: 1 },
                      { team: 'Warehouse', act: 18, done: 71, over: 5 },
                      { team: 'Support', act: 14, done: 55, over: 2 }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-white transition-colors group">
                        <td className="py-4 font-semibold text-slate-800">{row.team}</td>
                        <td className="py-4 text-blue-600 font-medium">{row.act}</td>
                        <td className="py-4 text-emerald-600 font-medium">{row.done}</td>
                        <td className="py-4 text-red-500 font-medium group-hover:animate-pulse">{row.over}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Request Types */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Purchase Request', icon: '💰' },
                { name: 'Equipment Request', icon: '💻' },
                { name: 'Maintenance', icon: '🔧' },
                { name: 'Inventory Request', icon: '📦' },
                { name: 'Expense Request', icon: '🧾' },
                { name: 'IT Support', icon: '🖥️' },
                { name: 'HR Request', icon: '👥' },
                { name: 'Facility Request', icon: '🏢' },
              ].map((req, idx) => (
                <div key={idx} className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex items-center gap-3">
                  <span className="text-2xl bg-slate-50 p-2 rounded-xl">{req.icon}</span>
                  <span className="font-semibold text-slate-700 text-sm">{req.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROCESS MANAGEMENT & 10. BRANCH LOCATIONS (GEO SEO) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Make Every Process <span className="text-emerald-400">Repeatable</span></h2>
            <p className="text-lg text-slate-300 mb-8">
              Standardize how work gets done. Build processes once and give every team a consistent way to execute them across all branches and locations.
            </p>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Process templates & step-by-step workflows</li>
              <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Automatic assignments & SLA tracking</li>
              <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Cross-location coordination</li>
            </ul>
            <a href="/book" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition-all inline-block">Standardize Operations</a>
          </div>
          
          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Multi-Branch Operations
            </h3>
            {/* Geo SEO integration */}
            <p className="text-sm text-slate-400 mb-6">Perfect for businesses operating globally and across the MENA region, ensuring centralized control.</p>
            
            <div className="space-y-4">
              {[
                { loc: 'Dubai, UAE', tasks: 86, color: 'bg-emerald-500' },
                { loc: 'Abu Dhabi, UAE', tasks: 52, color: 'bg-blue-500' },
                { loc: 'Sharjah, UAE', tasks: 41, color: 'bg-indigo-500' },
                { loc: 'Ajman, UAE', tasks: 28, color: 'bg-purple-500' }
              ].map((branch, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-700/50 p-4 rounded-xl hover:bg-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${branch.color}`}></div>
                    <span className="font-semibold">{branch.loc}</span>
                  </div>
                  <span className="text-sm bg-slate-800 px-3 py-1 rounded-full text-slate-300">{branch.tasks} Tasks</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. INVENTORY & 12. CALENDAR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img src="[https://images.unsplash.com/photo-1586528116311-ad8ed7c508b0?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1586528116311-ad8ed7c508b0?auto=format&fit=crop&w=800&q=80)" alt="Warehouse and Inventory" className="rounded-3xl shadow-xl"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-2xl text-center border border-slate-100 whitespace-nowrap">
               <p className="font-bold text-slate-800 text-lg">Stock Request Flow</p>
               <div className="text-sm text-slate-600 mt-2 space-y-1">
                 <p>Manager Approval</p>
                 <p className="text-blue-500">↓</p>
                 <p>Stock Allocation</p>
                 <p className="text-blue-500">↓</p>
                 <p className="font-semibold text-emerald-600">Dispatch Completed</p>
               </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Connect Operations With <span className="text-blue-700">Inventory</span></h2>
            <p className="text-lg text-slate-600 mb-8">
              Operations shouldn't be separated from stock. Connect workflows seamlessly with inventory, purchasing, warehouses, stock transfers, and dispatch.
            </p>
            
            <div className="mb-10 bg-blue-50 p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Operational Calendar
              </h3>
              <p className="text-slate-600 text-sm mb-4">Centralized day, week, and month views for scheduled tasks, deliveries, maintenance, and deadlines.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-semibold rounded-md shadow-sm">Day</span>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-md shadow-sm">Week</span>
                <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-semibold rounded-md shadow-sm">Month</span>
              </div>
            </div>

            <a href="/book" className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-all">Explore Inventory Sync</a>
          </div>
        </div>
      </section>

      {/* 13. ALERTS & 14. ANALYTICS & 15. AUDIT TRAIL */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Intelligence, Alerts, and Accountability</h2>
            <p className="text-slate-600 text-lg">
              Never miss an event with automatic alerts, turn daily activity into actionable business intelligence, and maintain a complete operational history.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Alerts */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Smart Alerts</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">Automatic alerts for overdue tasks, pending approvals, low inventory, missed deadlines, and workflow exceptions.</p>
              <div className="bg-red-50 border border-red-100 p-4 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                <p className="text-red-800 font-bold text-sm flex items-center gap-2">
                  <span className="animate-pulse">⚠</span> Approval Required
                </p>
                <p className="text-xs text-red-600 mt-1">Purchase request #PR-2084 has been waiting for 6 hours.</p>
                <button className="text-xs font-bold text-red-700 mt-3 group-hover:underline">Review now &rarr;</button>
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-blue-700 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-1 transition-transform flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-white">Operational Analytics</h3>
              <p className="text-blue-200 text-sm mb-6 flex-grow">Track performance, bottlenecks, and success rates across your entire operation.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-800/50 p-3 rounded-xl border border-blue-600">
                  <p className="text-blue-300 text-xs font-semibold mb-1">Completion</p>
                  <p className="text-2xl font-bold text-emerald-400">94%</p>
                </div>
                <div className="bg-blue-800/50 p-3 rounded-xl border border-blue-600">
                  <p className="text-blue-300 text-xs font-semibold mb-1">On-Time</p>
                  <p className="text-2xl font-bold text-emerald-400">87%</p>
                </div>
                <div className="bg-blue-800/50 p-3 rounded-xl border border-blue-600 col-span-2">
                  <p className="text-blue-300 text-xs font-semibold mb-1">Avg Resolution Time</p>
                  <p className="text-2xl font-bold">4.8 hrs</p>
                </div>
              </div>
            </div>

            {/* Audit Trail */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Activity Audit Trail</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">Know exactly who did what and when. Maintain a complete operational history for compliance.</p>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-emerald-500 bg-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-[10px] text-slate-400 font-semibold mb-1">10:42 AM</p>
                    <p className="text-xs text-slate-700">Ahmed changed Task #1048 to Completed</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-blue-500 bg-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-[10px] text-slate-400 font-semibold mb-1">10:38 AM</p>
                    <p className="text-xs text-slate-700">Sara approved Purchase #PR-204</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="mt-12 text-center">
             <a href="/contact" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all inline-block">See Analytics in Action</a>
          </div>
        </div>
      </section>

      {/* 16. CONNECTED ECOSYSTEM */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Operations That Connect Your <span className="text-blue-700">Entire Business</span></h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
            Operations Management sits at the heart of the Hivenox ERP ecosystem, seamlessly connecting with every other module.
          </p>

          <div className="relative max-w-4xl mx-auto">
             {/* Lines connecting everything */}
             <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-1/2 z-0"></div>
             <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-100 -translate-x-1/2 z-0"></div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
                  <h4 className="font-bold text-slate-800 mb-2">CRM</h4>
                  <p className="text-sm text-slate-500">Customer workflows</p>
                </div>
                <div className="bg-blue-700 p-6 rounded-2xl shadow-xl text-white transform scale-110">
                  <h4 className="font-extrabold text-lg mb-2">Operations</h4>
                  <p className="text-xs text-blue-200">The Central Hub</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
                  <h4 className="font-bold text-slate-800 mb-2">Inventory</h4>
                  <p className="text-sm text-slate-500">Stock operations</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
                  <h4 className="font-bold text-slate-800 mb-2">HRMS</h4>
                  <p className="text-sm text-slate-500">People & workforce</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
                  <h4 className="font-bold text-slate-800 mb-2">Accounting</h4>
                  <p className="text-sm text-slate-500">Financial approvals</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
                  <h4 className="font-bold text-slate-800 mb-2">SalesFlow / Desk</h4>
                  <p className="text-sm text-slate-500">Sales & Support</p>
                </div>
             </div>
          </div>
          
          <div className="mt-16 text-center">
             <a href="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition-all hover:shadow-lg inline-block">Explore Hivenox Ecosystem</a>
          </div>
        </div>
      </section>

      {/* 17. WHO IT'S FOR & 18. BENEFITS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Benefits */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Move Work Forward. <span className="text-emerald-500">Without the Chaos.</span></h2>
              <div className="space-y-6 mt-10">
                {[
                  { title: "Improve Visibility", desc: "See what's happening across teams and locations." },
                  { title: "Reduce Manual Work", desc: "Automate repetitive operational workflows." },
                  { title: "Speed Up Approvals", desc: "Send requests directly to the right decision-makers." },
                  { title: "Improve Accountability", desc: "Know who owns every task and process." },
                  { title: "Scale Operations", desc: "Build systems that grow with your business." }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">{idx + 1}</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                      <p className="text-slate-600 text-sm mt-1">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <a href="/book" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all inline-block">See All Benefits</a>
              </div>
            </div>

            {/* Who it's for */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Built for Businesses That Need Operational Control</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Retail & E-commerce", "Manufacturing", "Restaurants & Cafés",
                  "Healthcare", "Professional Services", "Agencies", "Education",
                  "Logistics & Distribution", "Multi-branch businesses"
                ].map((industry, i) => (
                  <span key={i} className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:border-blue-500 hover:text-blue-700 transition-colors cursor-default">
                    {industry}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 19. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Can I assign tasks to employees?", a: "Yes. Tasks can be assigned to individuals or teams with priorities, deadlines, and statuses." },
              { q: "Can I create custom workflows?", a: "Yes. Businesses can structure workflows around their own operational processes." },
              { q: "Can I create approval processes?", a: "Yes. Approval steps can be used for purchases, expenses, inventory actions, refunds, and other business requests." },
              { q: "Can I manage multiple branches?", a: "Yes. Operations can be organized by branches, locations, teams, and departments." },
              { q: "Does Operations connect with Inventory?", a: "Yes. Inventory, purchasing, warehouse, and operational workflows can work together within Hivenox ERP." },
              { q: "Can managers monitor team performance?", a: "Yes. Managers can monitor tasks, completion rates, overdue work, workloads, and operational activity." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-2xl border border-slate-100 open:bg-white open:border-blue-200 open:shadow-md transition-all duration-300">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-slate-800 marker:content-none">
                  {faq.q}
                  <span className="transition group-open:rotate-180 text-blue-600">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 20. FINAL CTA */}
      <section className="py-24 bg-blue-700 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">Make Your Operations <span className="text-emerald-400">Work Smarter.</span></h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Bring tasks, workflows, approvals, teams, and daily business operations into one connected Hivenox workspace.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/book" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-1 text-lg">
              Book a Demo
            </a>
            <a href="/contact" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}