import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Network,
  Database,
  BrainCircuit,
  Workflow,
  BarChart3,
  ShieldCheck,
  Globe,
  Users,
  CheckCircle2,
  ChevronRight,
  Terminal,
  Layers,
  Activity,
  Target,
  Zap,
  LineChart,
  MessageSquare,
  Lock,
  Plus,
  ArrowDown,
  Check
} from 'lucide-react';

export default function EnterpriseGrowthOSPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <p className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-6">
            Hivenox Enterprise Growth OS
          </p>
          <h1 className="text-5xl md:text-7xl  tracking-tight mb-8 ">
            One intelligent operating system for your entire <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">growth engine.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
            Connect your business systems, AI Workers, data, automation, and teams in one intelligent growth ecosystem.
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-3xl mx-auto">
            HIVENOX Enterprise Growth OS brings your entire AI workforce together. Connect your ERP, CRM, HRMS, analytics, marketing, sales, operations, and business data with specialized AI Workers that work together toward measurable business outcomes. Instead of managing disconnected tools, build a connected AI operating layer that understands your business, automates work, identifies opportunities, and helps your teams move faster.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              Talk to an Enterprise Specialist
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/book"
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-semibold transition-all flex items-center justify-center"
            >
              Book a Demo
            </Link>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Built for growing businesses and enterprise teams
          </p>
        </div>
      </section>

      {/* 2. HERO PRODUCT VISUAL (Command Center) */}
      <section className="px-6 lg:px-8 max-w-6xl mx-auto mb-32">
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Terminal className="text-blue-500" /> Enterprise Growth OS
            </h3>
            <div className="hidden md:flex text-sm text-slate-500 items-center gap-2 font-mono">
              Data <ArrowRight className="w-4 h-4"/> Intelligence <ArrowRight className="w-4 h-4"/> AI Workers <ArrowRight className="w-4 h-4"/> Automation <ArrowRight className="w-4 h-4"/> Growth
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Business Health", value: "92 / 100", color: "text-emerald-500" },
              { label: "Growth Opportunity", value: "14", color: "text-blue-500" },
              { label: "Active Automations", value: "38", color: "text-purple-500" },
              { label: "AI Insights", value: "124", color: "text-cyan-500" }
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-500 font-medium mb-2">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg text-blue-600 dark:text-blue-300">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-1">AI Executive Insight</p>
                <h4 className="text-xl font-bold mb-3">Growth Opportunity Identified</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Customer acquisition in the UAE segment has increased 24% over the last 90 days. Similar patterns suggest an opportunity to expand the current campaign into two additional customer segments.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold w-full sm:w-auto">
                    Launch targeted campaign
                  </button>
                  <button className="px-6 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold w-full sm:w-auto">
                    Review Opportunity
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ENTERPRISE PROBLEM */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">The Modern Business Challenge</p>
            <h2 className="text-4xl font-bold mb-6">Your business is connected. Your systems aren't.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Your teams use dozens of tools. Your data lives in different systems. Your departments operate on different workflows. Your AI tools work in isolation. And your leadership still needs one clear view of the business. HIVENOX Enterprise Growth OS brings these moving parts together into one connected intelligence layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Data Silos", desc: "Important business data is scattered across multiple platforms.", icon: Database },
              { title: "Disconnected Teams", desc: "Marketing, sales, finance, HR, and operations often work in separate systems.", icon: Users },
              { title: "Too Many Tools", desc: "AI tools solve individual problems but don't work together.", icon: Layers },
              { title: "Manual Workflows", desc: "Teams spend time moving information between systems.", icon: Workflow },
              { title: "Slow Decisions", desc: "Leaders wait for reports instead of receiving insights in real time.", icon: Activity },
              { title: "Growth Without Visibility", desc: "Businesses grow, but don't always know what's driving that growth.", icon: LineChart }
            ].map((problem, i) => (
              <div key={i} className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors">
                <problem.icon className="w-8 h-8 text-rose-500 mb-6" />
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{problem.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl font-medium text-slate-700 dark:text-slate-300">
              Your business doesn't need more disconnected software. It needs an intelligent system that connects everything.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MEET ENTERPRISE GROWTH OS */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Your AI Operating Layer</p>
          <h2 className="text-4xl font-bold mb-6">One system that connects your entire AI workforce.</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
            Enterprise Growth OS acts as the intelligence and orchestration layer between your business systems, data, teams, automation, and AI Workers. It helps your organization move from isolated AI tools to a coordinated AI workforce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {[
            { title: "Connect", desc: "Bring your business systems and data together." },
            { title: "Understand", desc: "Create a unified view of your business." },
            { title: "Orchestrate", desc: "Coordinate AI Workers and workflows." },
            { title: "Automate", desc: "Reduce repetitive manual processes." },
            { title: "Predict", desc: "Identify future trends, risks, and opportunities." },
            { title: "Optimize", desc: "Continuously improve business performance." }
          ].map((cap, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE ENTERPRISE GROWTH ARCHITECTURE */}
      <section className="py-24 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Everything connected. Everything working together.</h2>
          
          {/* Visual Architecture Box */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 max-w-5xl mx-auto font-mono text-sm md:text-base relative overflow-x-auto">
             <div className="min-w-[700px]">
                <div className="text-blue-400 font-bold text-xl mb-8">ENTERPRISE GROWTH OS</div>
                <div className="w-px h-8 bg-slate-700 mx-auto mb-8"></div>
                <div className="h-px w-2/3 bg-slate-700 mx-auto relative mb-8">
                  <div className="absolute top-0 left-0 w-px h-8 bg-slate-700"></div>
                  <div className="absolute top-0 left-1/2 w-px h-8 bg-slate-700"></div>
                  <div className="absolute top-0 right-0 w-px h-8 bg-slate-700"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-8 text-center mb-8">
                  <div>
                    <div className="text-cyan-400 font-bold mb-4">DATA</div>
                    <ul className="text-slate-400 space-y-2">
                      <li>ERP / CRM</li>
                      <li>HRMS / Finance</li>
                      <li>Operations</li>
                      <li>Marketing</li>
                      <li>Sales</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold mb-4">AI WORKERS</div>
                    <ul className="text-slate-400 space-y-2">
                      <li>Social Worker</li>
                      <li>Content Worker</li>
                      <li>Growth Worker</li>
                      <li>Video Worker</li>
                      <li>SEO Worker</li>
                      <li>Analytics Worker</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-emerald-400 font-bold mb-4">AUTOMATION</div>
                    <ul className="text-slate-400 space-y-2">
                      <li>Workflows</li>
                      <li>Approvals</li>
                      <li>Triggers</li>
                      <li>Actions</li>
                      <li>Integrations</li>
                    </ul>
                  </div>
                </div>

                <div className="h-px w-2/3 bg-slate-700 mx-auto relative mt-8 mb-8">
                  <div className="absolute bottom-0 left-0 w-px h-8 bg-slate-700"></div>
                  <div className="absolute bottom-0 left-1/2 w-px h-8 bg-slate-700"></div>
                  <div className="absolute bottom-0 right-0 w-px h-8 bg-slate-700"></div>
                </div>
                
                <div className="w-px h-8 bg-slate-700 mx-auto mb-8"></div>
                <div className="text-rose-400 font-bold text-xl mb-8">AI INTELLIGENCE</div>
                <div className="w-px h-8 bg-slate-700 mx-auto mb-8"></div>
                
                <div className="h-px w-1/2 bg-slate-700 mx-auto relative mb-8">
                  <div className="absolute top-0 left-0 w-px h-8 bg-slate-700"></div>
                  <div className="absolute top-0 left-1/2 w-px h-8 bg-slate-700"></div>
                  <div className="absolute top-0 right-0 w-px h-8 bg-slate-700"></div>
                </div>

                <div className="grid grid-cols-3 gap-8 text-center max-w-2xl mx-auto mb-8">
                  <div className="text-slate-300">INSIGHTS</div>
                  <div className="text-slate-300">PREDICTIONS</div>
                  <div className="text-slate-300">ACTIONS</div>
                </div>
                
                <div className="h-px w-1/2 bg-slate-700 mx-auto relative mt-8 mb-8">
                  <div className="absolute bottom-0 left-0 w-px h-8 bg-slate-700"></div>
                  <div className="absolute bottom-0 left-1/2 w-px h-8 bg-slate-700"></div>
                  <div className="absolute bottom-0 right-0 w-px h-8 bg-slate-700"></div>
                </div>

                <div className="w-px h-8 bg-slate-700 mx-auto mb-8"></div>
                <div className="text-white font-bold text-2xl">BUSINESS GROWTH</div>
             </div>
          </div>
          <p className="text-xl text-slate-400 mt-12 font-medium">
            Connect the systems. Orchestrate the intelligence. Accelerate the outcome.
          </p>
        </div>
      </section>

      {/* 6. CONNECTED BUSINESS DATA */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">One Source of Truth</p>
            <h2 className="text-4xl font-bold mb-6">Bring your business data together.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Your most valuable insights are often hidden between systems. Enterprise Growth OS connects data across your organization to create a more complete view of what's happening inside your business.
            </p>
            <div className="flex flex-wrap gap-3">
              {['ERP', 'CRM', 'HRMS', 'Accounting', 'Finance', 'Inventory', 'Sales', 'Marketing', 'E-commerce', 'Operations', 'Customer Support', 'External APIs', 'Databases', 'Spreadsheets'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center font-mono">
            <div className="p-4 bg-white dark:bg-slate-950 rounded-lg shadow-sm mb-4 border border-slate-200 dark:border-slate-800">Business Systems</div>
            <ArrowDown className="w-6 h-6 mx-auto text-slate-400 mb-4" />
            <div className="p-4 bg-white dark:bg-slate-950 rounded-lg shadow-sm mb-4 border border-slate-200 dark:border-slate-800">Unified Data Layer</div>
            <ArrowDown className="w-6 h-6 mx-auto text-slate-400 mb-4" />
            <div className="p-4 bg-blue-600 text-white rounded-lg shadow-sm mb-4">Enterprise Growth OS</div>
            <ArrowDown className="w-6 h-6 mx-auto text-slate-400 mb-4" />
            <div className="p-4 bg-white dark:bg-slate-950 rounded-lg shadow-sm mb-4 border border-slate-200 dark:border-slate-800">AI Intelligence</div>
            <ArrowDown className="w-6 h-6 mx-auto text-slate-400 mb-4" />
            <div className="p-4 bg-emerald-500 text-white rounded-lg shadow-sm">Business Actions</div>
          </div>
        </div>
      </section>

      {/* 7 & 8. AI WORKFORCE ORCHESTRATION & AUTOMATION */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Orchestration */}
            <div>
              <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">AI Workforce</p>
              <h2 className="text-3xl font-bold mb-6">Your AI Workers don't have to work alone.</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Enterprise Growth OS connects specialized AI Workers into a coordinated workforce. Each Worker focuses on what it does best. The OS connects the work.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex gap-4 items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <Network className="text-blue-500 flex-shrink-0" />
                  <p className="text-sm"><span className="font-bold">Analytics Worker:</span> Detects declining engagement.</p>
                </div>
                <ArrowDown className="w-5 h-5 mx-auto text-slate-400" />
                <div className="flex gap-4 items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <Target className="text-blue-500 flex-shrink-0" />
                  <p className="text-sm"><span className="font-bold">Growth Worker:</span> Identifies retention opportunity.</p>
                </div>
                <ArrowDown className="w-5 h-5 mx-auto text-slate-400" />
                <div className="flex gap-4 items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <MessageSquare className="text-blue-500 flex-shrink-0" />
                  <p className="text-sm"><span className="font-bold">Content & Video Workers:</span> Create retention assets.</p>
                </div>
              </div>
              <p className="font-medium text-slate-800 dark:text-slate-200 italic border-l-4 border-blue-500 pl-4">
                One signal can trigger an entire AI-powered growth workflow.
              </p>
            </div>

            {/* Automation */}
            <div>
              <h2 className="text-3xl font-bold mb-6 mt-8 lg:mt-0">Turn business processes into intelligent workflows.</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Automate repetitive processes across departments. Instead of moving information manually, create workflows that respond to business events.
              </p>
              
              <div className="grid gap-4">
                {[
                  { title: "Sales", flow: "New lead → qualification → scoring → follow-up." },
                  { title: "Marketing", flow: "New campaign → content → social → analytics." },
                  { title: "Customer Support", flow: "Issue → AI classification → response → escalation." },
                  { title: "HR", flow: "New candidate → screening → scoring → interview." },
                  { title: "Finance", flow: "Transaction → anomaly detection → review → approval." }
                ].map((wf, i) => (
                  <div key={i} className="bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{wf.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">{wf.flow}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 & 10. DECISION ENGINE & BI */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">AI Decision Intelligence</p>
          <h2 className="text-4xl font-bold mb-6">Move from dashboards to decisions.</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Enterprise Growth OS doesn't just collect information. It helps your teams understand what is happening, why it matters, and what action should come next. Give leadership and teams a unified view of business performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Executive Dashboard */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><BarChart3 className="text-blue-400"/> Executive Dashboard</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-400 mb-1">Revenue</p>
                <p className="text-2xl font-bold">$2.8M <span className="text-sm text-emerald-400 ml-2">↑ 18%</span></p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-400 mb-1">Sales Pipeline</p>
                <p className="text-2xl font-bold">$4.2M <span className="text-sm text-emerald-400 ml-2">↑ 12%</span></p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-400 mb-1">Customer Health</p>
                <p className="text-2xl font-bold">89 / 100</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg">
                <p className="text-sm text-slate-400 mb-1">Operational Efficiency</p>
                <p className="text-2xl font-bold">94 / 100</p>
              </div>
            </div>
            <p className="text-center text-slate-400 font-medium">One business. One connected view.</p>
          </div>

          {/* Decision Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800/50">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Zap className="text-blue-600 dark:text-blue-400"/> Intelligence in Action</h3>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase text-slate-500">Data</span>
                <p className="font-medium text-slate-900 dark:text-white">Sales declined 8%.</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-slate-500">Insight</span>
                <p className="font-medium text-slate-900 dark:text-white">Decline is concentrated in one customer segment due to 3 delayed deals.</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <span className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400">Recommendation</span>
                <p className="font-medium text-slate-900 dark:text-white mt-1">Prioritize delayed opportunities and launch targeted account engagement.</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-emerald-600">Action Taken</span>
                <p className="font-medium text-slate-900 dark:text-white">Sales team receives prioritized action list automatically.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 & 12. PREDICTIVE & GROWTH INTELLIGENCE */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Predict the Future</p>
            <h2 className="text-3xl font-bold mb-6">Don't just measure growth. Predict it.</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Use AI-powered analytics to understand where your business is heading and identify opportunities before they become obvious.
            </p>
            <ul className="space-y-3 mb-8">
              {['Revenue & Sales forecasting', 'Customer churn prediction', 'Demand & Inventory forecasting', 'Growth opportunity detection', 'Risk prediction & Market trend analysis'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" /> {item}
                </li>
              ))}
            </ul>
            <div className="p-5 bg-white dark:bg-slate-950 border-l-4 border-blue-500 rounded-r-lg shadow-sm">
              <p className="text-sm font-bold text-slate-900 dark:text-white mb-2">AI Prediction</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">Enterprise segment projected to grow 22% over next 90 days based on pipeline velocity.</p>
              <p className="text-sm font-bold text-blue-600 dark:text-blue-400">Recommended Action: Increase enterprise campaign investment by 15%.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 lg:mt-10">Know what's driving your growth.</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Growth is more than revenue. Enterprise Growth OS connects the signals across your organization to understand what's really driving performance.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Customer Acquisition', val: '+24%' },
                { label: 'Conversion Rate', val: '+12%' },
                { label: 'Customer Retention', val: '+8%' },
                { label: 'Revenue', val: '+18%' },
                { label: 'Marketing ROI', val: '+31%' },
                { label: 'Customer LTV', val: '+16%' }
              ].map((metric, i) => (
                <div key={i} className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">{metric.label}</span>
                  <span className="font-bold text-emerald-500">{metric.val}</span>
                </div>
              ))}
            </div>
            <p className="italic text-slate-700 dark:text-slate-300">
              "Your strongest growth driver is repeat purchases from customers acquired through organic search. <span className="font-bold text-blue-600 dark:text-blue-400">Recommend increasing SEO investment.</span>"
            </p>
          </div>
        </div>
      </section>

      {/* 15 & 16. ENTERPRISE AUTOMATION & CUSTOM WORKFLOWS */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Automate at Scale</p>
          <h2 className="text-4xl font-bold mb-6">Build workflows that work across departments.</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Your business is unique. Your AI system should be too. Configure Enterprise Growth OS around the workflows, data, and processes that make your business different.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 md:p-12">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-slate-500 mb-12">
            Marketing <ChevronRight className="w-4 h-4"/> Sales <ChevronRight className="w-4 h-4"/> Customer Success <ChevronRight className="w-4 h-4"/> Finance <ChevronRight className="w-4 h-4"/> Operations <ChevronRight className="w-4 h-4"/> HR
          </div>

          <h3 className="text-xl font-bold mb-6 text-center">Custom Workflow Example: High-Value Customer Risk</h3>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center font-mono text-sm text-center">
              <div className="w-full md:w-1/5 p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg">Customer Data</div>
              <ArrowRight className="hidden md:block w-5 h-5 text-slate-400 flex-shrink-0" />
              <ArrowDown className="md:hidden w-5 h-5 text-slate-400 flex-shrink-0" />
              <div className="w-full md:w-1/5 p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 rounded-lg font-bold">AI Detects Risk</div>
              <ArrowRight className="hidden md:block w-5 h-5 text-slate-400 flex-shrink-0" />
              <ArrowDown className="md:hidden w-5 h-5 text-slate-400 flex-shrink-0" />
              <div className="w-full md:w-1/5 p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg">CRM Updated</div>
              <ArrowRight className="hidden md:block w-5 h-5 text-slate-400 flex-shrink-0" />
              <ArrowDown className="md:hidden w-5 h-5 text-slate-400 flex-shrink-0" />
              <div className="w-full md:w-1/5 p-4 bg-blue-600 text-white rounded-lg">Campaign Triggered</div>
            </div>
          </div>
          <p className="text-center mt-12 text-slate-600 dark:text-slate-400 font-medium">
            Your AI workforce should adapt to your business — not the other way around.
          </p>
        </div>
      </section>

      {/* 17, 18, 19. INTEGRATIONS, SECURITY, HUMAN+AI */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
              <Globe className="w-8 h-8 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Connected Ecosystem</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Connect the tools your business already uses. Don't replace everything. Connect what matters.
              </p>
              <ul className="text-sm space-y-2 text-slate-500 dark:text-slate-400 font-mono">
                <li>• ERP · CRM · HRMS</li>
                <li>• Databases · Data Warehouses</li>
                <li>• Microsoft 365 · Workspace</li>
                <li>• Slack · Teams · WhatsApp</li>
                <li>• Accounting · Payments</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-8 h-8 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Enterprise Ready</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Intelligence with control. Give your teams the power of AI while keeping your organization in control.
              </p>
              <ul className="text-sm space-y-2 text-slate-500 dark:text-slate-400 font-mono">
                <li>• Role-based access</li>
                <li>• Permission management</li>
                <li>• Data access controls</li>
                <li>• Workflow approvals</li>
                <li>• Audit & Activity tracking</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
              <Users className="w-8 h-8 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Human + AI Workforce</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                AI doesn't replace your teams. It amplifies them. Let AI handle the repetitive work. Let people focus on what matters.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg text-sm text-slate-600 dark:text-slate-400">
                <span className="font-bold text-slate-900 dark:text-white">AI:</span> Analyzes. Predicts. Automates. Recommends.
                <div className="my-2 border-t border-slate-200 dark:border-slate-700"></div>
                <span className="font-bold text-slate-900 dark:text-white">Human:</span> Reviews. Decides. Approves. Leads.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 21. ARABIC + ENGLISH ENTERPRISE INTELLIGENCE */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Built for Global & Regional Business</p>
            <h2 className="text-4xl font-bold mb-6">One AI operating layer for multilingual teams.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Enterprise Growth OS is designed for businesses operating across Australia, the UAE, Saudi Arabia, and international markets. Support teams and business workflows across English and Arabic environments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Bilingual AI', desc: 'Interact with AI in English and Arabic.' },
                { title: 'RTL Support', desc: 'Support right-to-left experiences.' },
                { title: 'Hijri Context', desc: 'Support processes around Hijri dates.' },
                { title: 'Ramadan Ready', desc: 'Support seasonal planning & campaigns.' }
              ].map((feature, i) => (
                <div key={i}>
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500"/> {feature.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 md:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <Globe className="w-12 h-12 mb-6 text-white/80" />
            <h3 className="text-3xl font-bold mb-4" dir="rtl">نظام تشغيل ذكي واحد</h3>
            <h3 className="text-2xl font-semibold mb-6 text-white/90">One intelligent operating system</h3>
            <p className="text-blue-100 font-medium">
              One connected enterprise. Multiple markets. One intelligent operating layer.
            </p>
          </div>
        </div>
      </section>

      {/* 23. COMPARISON TABLE */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Stop adding AI tools. Start building an AI workforce.</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-slate-200 dark:bg-slate-800 font-bold text-slate-600 dark:text-slate-300 rounded-tl-xl border-b border-slate-300 dark:border-slate-700 w-1/2">Standalone AI Tools</th>
                  <th className="py-4 px-6 bg-blue-600 text-white font-bold rounded-tr-xl border-b border-blue-700 w-1/2">Enterprise Growth OS</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-950">
                {[
                  ['Separate AI tools', 'Connected AI Workers'],
                  ['Isolated workflows', 'Cross-department workflows'],
                  ['Data silos', 'Connected business data'],
                  ['Manual handoffs', 'Intelligent automation'],
                  ['Individual insights', 'Unified intelligence'],
                  ['Reactive reporting', 'Predictive intelligence'],
                  ['Tool-by-tool management', 'Centralized orchestration'],
                  ['Limited context', 'Business-wide context'],
                  ['AI as an assistant', 'AI as a workforce'],
                  ['Disconnected growth', 'Connected growth engine']
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{row[0]}</td>
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white bg-blue-50/30 dark:bg-blue-900/10 flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-500"/> {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-8 text-lg font-medium text-slate-700 dark:text-slate-300">
            The future isn't one AI tool. It's an AI workforce that works together.
          </p>
        </div>
      </section>

      {/* 25. ENTERPRISE PRICING / CTA */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <p className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">Enterprise AI Operating System</p>
              <h2 className="text-4xl font-bold mb-6">Build your AI workforce around your business.</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Every organization has different systems, data, workflows, and growth goals. Let's design an Enterprise Growth OS that fits yours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-center transition-colors">
                  Talk to an Enterprise Specialist
                </Link>
                <Link href="/book" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold text-center border border-slate-700 transition-colors">
                  Book a Demo
                </Link>
              </div>
              <p className="text-sm text-slate-400 flex items-center gap-2">
                <Lock className="w-4 h-4" /> Custom implementation · Enterprise integrations · Scalable architecture
              </p>
            </div>

            <div className="bg-slate-950/50 rounded-2xl p-8 border border-slate-800">
              <h3 className="font-bold text-xl mb-6 border-b border-slate-800 pb-4">Enterprise Includes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm text-slate-300">
                {[
                  'Connected AI Workforce', 'AI Worker orchestration', 'Enterprise data intelligence', 
                  'Advanced analytics', 'Predictive insights', 'Cross-department automation', 
                  'Custom workflows', 'Custom AI Workers', 'Enterprise integrations', 
                  'Custom dashboards', 'Role-based access', 'Governance controls', 
                  'Workflow approvals', 'Executive intelligence', 'Arabic + English', 
                  'RTL support', 'Hijri & Ramadan support', 'Dedicated enterprise support'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 29. ENTERPRISE FAQ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What is HIVENOX Enterprise Growth OS?", a: "Enterprise Growth OS is an AI-powered orchestration and intelligence layer that connects business systems, data, AI Workers, automation, and teams into one connected growth ecosystem." },
              { q: "How is it different from the individual AI Workers?", a: "Individual Workers specialize in specific functions (SEO, content, social, video). Enterprise Growth OS connects these Workers and coordinates them across broader business workflows." },
              { q: "Is Enterprise Growth OS an ERP?", a: "No. It is designed to work alongside business systems such as ERP, CRM, HRMS, finance, and operations platforms, connecting them with AI intelligence and automation." },
              { q: "Can we create custom AI Workers?", a: "Yes. Enterprise organizations can explore custom AI Workers and workflows designed around their specific business processes and requirements." },
              { q: "Does it support Arabic?", a: "Yes. Enterprise Growth OS supports English and Arabic experiences, RTL workflows, Hijri context, and Ramadan-ready capabilities." },
              { q: "How much does Enterprise Growth OS cost?", a: "Pricing is customized based on your organization's systems, integrations, number of AI Workers, workflows, data requirements, and implementation scope." }
            ].map((faq, i) => (
              <div key={i} className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-blue-500 flex-shrink-0" /> {faq.q}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30. FINAL CTA */}
      <section className="py-32 px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <p className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-4">
          The future of your business is connected
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Build an AI workforce that works as one.</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Your business already has the data. Your teams already have the expertise. Your systems already run the operation. HIVENOX Enterprise Growth OS brings everything together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
          >
            Talk to an Enterprise Specialist
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/book"
            className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-semibold transition-all flex items-center justify-center"
          >
            Book a Demo
          </Link>
        </div>
      </section>

    </div>
  );
}