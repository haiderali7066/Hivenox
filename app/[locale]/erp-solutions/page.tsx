"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Server, Users, Box, Calculator, 
  Briefcase, BarChart3, Globe, Sparkles, MoveRight, MoveDown, 
  ChevronDown, PhoneCall, Calendar
} from 'lucide-react';

const ErpSolutionsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="w-full font-sans text-slate-800 bg-slate-50 selection:bg-blue-200 selection:text-blue-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-blue-700 text-white pt-36 pb-32 px-6 lg:px-8 overflow-hidden rounded-b-[3rem] shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-green-500/20 text-green-300 font-semibold text-sm tracking-widest uppercase mb-6 border border-green-400/30">
            ERP Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
            One shared database. Every module. So your systems finally talk to each other.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mb-10 leading-relaxed">
            CRM, HRMS, Inventory, Accounting & Finance, Operations and Analytics — deploy only what you need, add modules as you grow, and never re-platform. HIVENOX ERP gives your whole business one connected foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="/book" className="px-8 py-4 bg-green-500 hover:bg-green-400 text-blue-950 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2">
              <Calendar size={20} /> Book a Demo
            </a>
            <a href="#modules" className="px-8 py-4 bg-transparent border-2 border-blue-400 hover:border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2">
              Explore ERP <ArrowRight size={20} />
            </a>
          </div>
          
          {/* Trust Strip */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm md:text-base text-blue-200 font-medium">
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400"/> 6 connected ERP modules</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400"/> 1 shared database</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400"/> Arabic + English</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400"/> RTL-native</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400"/> AI-powered</span>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-bold tracking-wider uppercase text-sm mb-2 block">The Fragmented Business</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Your departments shouldn't need to become their own islands.</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sales has one system. HR has another. Inventory lives somewhere else. Finance has its own numbers. The result is predictable: Different systems. Different numbers. Different versions of the truth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            { title: "Disconnected Data", desc: "Customer, people, inventory and financial information live in separate systems." },
            { title: "Manual Handoffs", desc: "Teams repeatedly move information from one department to another." },
            { title: "Conflicting Numbers", desc: "Finance, sales and operations can end up working from different data." },
            { title: "Expensive Complexity", desc: "Adding another system means another integration, login and workflow to maintain." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-blue-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xl font-semibold text-blue-900 mb-4 md:mb-0">ERP should connect the business — not become another silo.</p>
          <a href="/contact" className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-full transition-colors flex items-center gap-2">
            Talk to an Expert <PhoneCall size={18} />
          </a>
        </div>
      </section>

      {/* 3. ONE SHARED DATABASE (Image + Flow) */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">One company. One source of truth.</h2>
            <p className="text-lg text-slate-600 mb-8">
              Every Hivenox ERP module operates on the same shared database. That means when something changes in one part of the business, the relevant information is immediately available where it matters elsewhere.
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-inner">
              <ul className="space-y-4">
                {['CRM: Customer + deal', 'Accounting: Revenue + invoice', 'Operations: Delivery + resources', 'Inventory: Stock + cost', 'Analytics: Business performance'].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <MoveDown size={16} />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xl font-bold text-blue-700 mt-8">Nothing to export. Nothing to reconcile.</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-700 rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
              alt="Data visualization dashboard" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* 4. THE SIX ERP MODULES */}
      <section id="modules" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The modular core that runs the whole company.</h2>
          <p className="text-lg text-slate-600 max-w-2xl mb-8">
            Deploy what you need today. Add the rest as you grow.
          </p>
          <a href="/book" className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-full transition-colors inline-flex items-center gap-2">
            Book a Platform Demo <Calendar size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Module 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full group">
            <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">01 — CRM</h3>
            <p className="text-slate-600 mb-4 flex-grow">A single, living view of every customer. Conversations, deals, invoices and tickets unified into one customer record.</p>
            <a href="/erp-solutions/crm" className="text-blue-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">Explore CRM <MoveRight size={18} /></a>
          </div>

          {/* Module 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full group">
            <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
              <Briefcase size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">02 — HRMS</h3>
            <p className="text-slate-600 mb-4 flex-grow">The entire people lifecycle — hire to retire. Onboarding, attendance, leave, payroll and performance in one connected system.</p>
            <a href="/erp-solutions/hrms" className="text-blue-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">Explore HRMS <MoveRight size={18} /></a>
          </div>

          {/* Module 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full group">
            <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
              <Box size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">03 — Inventory</h3>
            <p className="text-slate-600 mb-4 flex-grow">Stock that counts itself — from purchase order to shelf to sale. Real-time inventory, automatic reordering and connected stock movement.</p>
            <a href="/erp-solutions/inventory-management" className="text-blue-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">Explore Inventory <MoveRight size={18} /></a>
          </div>

          {/* Module 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full group">
            <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
              <Calculator size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">04 — Accounting & Finance</h3>
            <p className="text-slate-600 mb-4 flex-grow">Books that close themselves. Invoicing, expenses, ledgers and statutory reporting, with VAT/GST readiness for UAE, KSA and Australia.</p>
            <a href="/erp-solutions/accounting-finance" className="text-blue-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">Explore Accounting <MoveRight size={18} /></a>
          </div>

          {/* Module 5 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full group">
            <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
              <Server size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">05 — Operations</h3>
            <p className="text-slate-600 mb-4 flex-grow">Where strategy meets reality. Procurement, projects and delivery orchestrated in one connected flow.</p>
            <a href="/erp-solutions/operations-management" className="text-blue-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">Explore Operations <MoveRight size={18} /></a>
          </div>

          {/* Module 6 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full group">
            <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">06 — Analytics</h3>
            <p className="text-slate-600 mb-4 flex-grow">The module that turns a connected platform into a clearly understood one. Live dashboards and scheduled reports.</p>
            <a href="/erp-solutions/analytics-reporting" className="text-blue-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">Explore Analytics <MoveRight size={18} /></a>
          </div>
        </div>
      </section>

      {/* 5 & 6. WORKFLOW & OUTCOMES */}
      <section className="py-24 px-6 lg:px-8 bg-blue-900 text-white rounded-3xl max-w-[96%] mx-auto my-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The value isn't in the modules. It's in the connections between them.</h2>
              <p className="text-blue-200 mb-8 text-lg">Example: A customer places an order.</p>
              
              <div className="space-y-4 border-l-2 border-blue-500 pl-6 ml-3 relative">
                <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                
                <div className="pb-4"><strong className="text-green-400">CRM:</strong> Customer relationship recognised.</div>
                <div className="pb-4"><strong className="text-green-400">Inventory:</strong> Stock decreases automatically.</div>
                <div className="pb-4"><strong className="text-green-400">Accounting:</strong> Revenue and cost information flows into finance.</div>
                <div className="pb-4"><strong className="text-green-400">Operations:</strong> Fulfilment and delivery are updated.</div>
                <div><strong className="text-green-400">Analytics:</strong> Business performance reflects the transaction.</div>
              </div>
              <p className="mt-8 text-xl font-medium bg-blue-800 p-4 rounded-xl border border-blue-700">One event. Multiple departments. No one carrying the data between them.</p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8">Watch the business move from one end to the other.</h3>
              <div className="flex flex-col gap-2">
                {['Lead', 'Deal (CRM)', 'Contract (Sales)', 'Project (Operations)', 'People Assigned (HRMS)', 'Timesheets + Expenses (Ops + Finance)', 'Invoice (Accounting)', 'Profitability (Analytics)'].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center shrink-0 text-sm">{idx + 1}</div>
                    <div className="bg-blue-800/50 px-4 py-2 rounded-lg flex-grow border border-blue-700/50 text-blue-100">{step}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-green-400 font-bold text-lg">A lead becomes a deal becomes an invoice becomes a line on the dashboard — automatically.</p>
              </div>
              <div className="mt-6 text-right">
                 <a href="/contact" className="text-sm px-5 py-2 bg-white text-blue-900 hover:bg-gray-200 rounded-full font-bold transition-colors inline-block">Connect your workflows</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MODULAR, NEVER FRAGMENTED */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Start with one module. Grow into the whole platform.</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
          You don't have to deploy everything on day one. Start with CRM. Add HRMS when your team grows. Add Inventory when stock becomes complex. Add Finance when you need deeper financial control. Add Operations as delivery scales. Add Analytics when leadership needs the complete picture.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 w-full md:w-48 transition hover:-translate-y-1">
            <span className="text-sm font-bold text-slate-400 block mb-2">Start</span>
            <span className="font-bold text-blue-700">CRM</span>
          </div>
          <ArrowRight className="hidden md:block text-slate-300" />
          <MoveDown className="block md:hidden text-slate-300" />
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 w-full md:w-48 transition hover:-translate-y-1">
            <span className="text-sm font-bold text-slate-400 block mb-2">Grow</span>
            <span className="font-bold text-blue-700">CRM + HRMS</span>
          </div>
          <ArrowRight className="hidden md:block text-slate-300" />
          <MoveDown className="block md:hidden text-slate-300" />

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 w-full md:w-48 transition hover:-translate-y-1">
            <span className="text-sm font-bold text-slate-400 block mb-2">Expand</span>
            <span className="font-bold text-blue-700">CRM + HRMS + Inventory</span>
          </div>
          <ArrowRight className="hidden md:block text-slate-300" />
          <MoveDown className="block md:hidden text-slate-300" />

          <div className="bg-blue-700 p-6 rounded-2xl shadow-lg shadow-blue-500/20 w-full md:w-48 transition hover:-translate-y-1 text-white">
            <span className="text-sm font-bold text-blue-200 block mb-2">Scale</span>
            <span className="font-bold">Full ERP</span>
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800 mt-12">Add capability without adding another technology stack.</p>
      </section>

      {/* 8 & 13. AGENTIC ERP + AI WORKFORCE */}
      <section className="py-24 px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm tracking-widest uppercase mb-6 border border-blue-400/30">
              <Sparkles size={16} /> Agentic ERP
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">Your ERP shouldn't just tell you what happened. It should help make the next thing happen.</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Because the HIVENOX AI workforce operates on the same live ERP data, your ERP can move beyond record-keeping. Put an AI workforce on top of your ERP.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center relative overflow-hidden group hover:border-blue-500 transition-colors">
              <div className="text-6xl font-black text-slate-700/30 absolute -bottom-4 -right-4 group-hover:text-blue-900/30 transition-colors">1</div>
              <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">ERP</h3>
              <p className="text-slate-400 relative z-10">Records the business.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center relative overflow-hidden group hover:border-blue-500 transition-colors">
              <div className="text-6xl font-black text-slate-700/30 absolute -bottom-4 -right-4 group-hover:text-blue-900/30 transition-colors">2</div>
              <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">Intelligence</h3>
              <p className="text-slate-400 relative z-10">Understands what the data means.</p>
            </div>
            <div className="bg-blue-700 p-8 rounded-3xl border border-blue-600 text-center relative overflow-hidden shadow-[0_0_30px_rgba(29,78,216,0.5)]">
              <div className="text-6xl font-black text-blue-800 absolute -bottom-4 -right-4">3</div>
              <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">AI Workforce</h3>
              <p className="text-blue-100 relative z-10">Acts on the work.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI Sales Agent", desc: "Works your live sales pipeline following up on CRM data." },
              { title: "AI Support Agent", desc: "Handles routine tickets acting on support data." },
              { title: "AI Recruiter", desc: "Sources and screens candidates via HR module." },
              { title: "Insights AI", desc: "Answers questions about the whole business." }
            ].map((ai, idx) => (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2"><Sparkles size={16}/> {ai.title}</h4>
                <p className="text-sm text-slate-400">{ai.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-bold mb-6">Your ERP becomes an operating system for people and AI.</p>
            <a href="/book" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full transition-all duration-300 hover:bg-slate-200 inline-flex items-center gap-2">
              See AI in Action <MoveRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* 9, 10, 11. FINANCE, OPS, ANALYTICS (Feature Highlights) */}
      <section className="py-24 px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Finance */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-blue-700 rounded-3xl transform -rotate-3 scale-105 opacity-10 group-hover:rotate-0 transition-transform duration-500"></div>
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" alt="Finance Dashboard" className="rounded-3xl shadow-xl relative z-10 w-full object-cover h-[400px]" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Finance connected to reality.</h2>
              <p className="text-lg text-slate-600 mb-8">
                Finance shouldn't have to reconstruct the business after it happens. When finance shares the same database as sales, inventory and operations, financial information reflects what is actually happening.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100"><span className="text-slate-600">Deal closes</span> <ArrowRight size={16} className="text-slate-400"/> <strong className="text-blue-700">Revenue recognised</strong></li>
                <li className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100"><span className="text-slate-600">Stock moves</span> <ArrowRight size={16} className="text-slate-400"/> <strong className="text-blue-700">Costs captured</strong></li>
                <li className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100"><span className="text-slate-600">Cash moves</span> <ArrowRight size={16} className="text-slate-400"/> <strong className="text-blue-700">Cash flow updates</strong></li>
              </ul>
              <p className="text-xl font-bold text-green-600">The data was never apart — so there is nothing to reconcile.</p>
              <div className="mt-6">
                 <a href="/erp-solutions/accounting-finance" className="text-blue-700 font-bold hover:underline">Explore Accounting & Finance →</a>
              </div>
            </div>
          </div>

          {/* Operations */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Procure to deliver, connected.</h2>
              <p className="text-lg text-slate-600 mb-8">
                Operations becomes easier to manage when procurement, projects, resources, inventory and finance are working from the same information.
              </p>
              <div className="grid gap-4 mb-8">
                <div className="p-4 border-l-4 border-blue-700 bg-blue-50/50 rounded-r-xl">
                  <h4 className="font-bold text-slate-900">Procurement</h4>
                  <p className="text-sm text-slate-600">Request → approval → purchase → receipt</p>
                </div>
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50/50 rounded-r-xl">
                  <h4 className="font-bold text-slate-900">Projects</h4>
                  <p className="text-sm text-slate-600">Kickoff → resources → tasks → completion</p>
                </div>
                <div className="p-4 border-l-4 border-blue-300 bg-blue-50/50 rounded-r-xl">
                  <h4 className="font-bold text-slate-900">Delivery</h4>
                  <p className="text-sm text-slate-600">Order → stock → fulfilment → customer</p>
                </div>
              </div>
              <p className="text-slate-700 italic">Real-time costs, stock and resource availability help teams identify bottlenecks before they become crises.</p>
              <div className="mt-6">
                 <a href="/erp-solutions/operations-management" className="text-blue-700 font-bold hover:underline">Explore Operations Management →</a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-700 rounded-3xl transform rotate-3 scale-105 opacity-10 group-hover:rotate-0 transition-transform duration-500"></div>
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Operations" className="rounded-3xl shadow-xl relative z-10 w-full object-cover h-[400px]" />
            </div>
          </div>

          {/* Analytics */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-blue-700 rounded-3xl transform -rotate-3 scale-105 opacity-10 group-hover:rotate-0 transition-transform duration-500"></div>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Analytics Dashboard" className="rounded-3xl shadow-xl relative z-10 w-full object-cover h-[400px]" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Finally, a dashboard everyone can agree on.</h2>
              <p className="text-lg text-slate-600 mb-8">
                Hivenox Analytics & Reporting sits across the entire platform. Because every module uses the same database, leadership doesn't need to reconcile conflicting data sources before trusting the numbers.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Live Dashboards", desc: "See the metrics that matter now." },
                  { title: "Scheduled Reports", desc: "Arrive automatically without manual work." },
                  { title: "Drill-Down", desc: "Move from a top-level KPI to the transaction." },
                  { title: "Shared Truth", desc: "Everyone works from current information." }
                ].map((feature, idx) => (
                  <li key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <strong className="block text-slate-900 mb-1">{feature.title}</strong>
                    <span className="text-sm text-slate-500">{feature.desc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-4">
                 <a href="/erp-solutions/analytics-reporting" className="px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">Explore Analytics</a>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 12. BILINGUAL & REGIONAL */}
      <section className="py-24 px-6 lg:px-8 bg-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <Globe className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Built for the markets you actually operate in.</h2>
          <p className="text-xl text-slate-600 mb-12">HIVENOX ERP is designed for businesses across <strong className="text-blue-700">Australia, UAE, and Saudi Arabia</strong>.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900 mb-2">Arabic + English</h4>
              <p className="text-sm text-slate-600">Native bilingual operation across the whole suite.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900 mb-2">RTL-Native</h4>
              <p className="text-sm text-slate-600">Beautifully designed for Arabic interfaces from day one.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900 mb-2">VAT/GST-Ready</h4>
              <p className="text-sm text-slate-600">Built around the relevant regional financial requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900 mb-2">Regional Payroll</h4>
              <p className="text-sm text-slate-600">HRMS supports local-rule awareness across markets.</p>
            </div>
          </div>
          <p className="mt-12 text-2xl font-bold text-blue-900">One platform. Multiple markets. One operating foundation.</p>
        </div>
      </section>

      {/* 14 & 15. WHY HIVENOX & WHO IS IT FOR */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">The difference between managing a business and merely reacting to it.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-slate-200 rounded-3xl hover:border-blue-700 transition-colors">
              <h4 className="font-bold text-xl mb-3 text-blue-700">The Whole Company, One System</h4>
              <p className="text-slate-600">CRM, HR, inventory, finance, operations and analytics on one shared database.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-3xl hover:border-blue-700 transition-colors">
              <h4 className="font-bold text-xl mb-3 text-blue-700">Modular, Never Fragmented</h4>
              <p className="text-slate-600">Deploy what you need and add more without re-platforming.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-3xl hover:border-blue-700 transition-colors">
              <h4 className="font-bold text-xl mb-3 text-blue-700">ERP That Acts</h4>
              <p className="text-slate-600">AI workers and agents operate on live ERP data.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-3xl hover:border-blue-700 transition-colors">
              <h4 className="font-bold text-xl mb-3 text-blue-700">Calm at Scale</h4>
              <p className="text-slate-600">Bilingual, VAT/GST-ready and designed to grow without unnecessary complexity.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-10 text-center">Built for businesses ready to stop stitching systems together.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl">
              <strong className="block text-green-400 mb-2">Growing Businesses</strong>
              <span className="text-slate-300 text-sm">Start with the modules you need and expand as the business grows.</span>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl">
              <strong className="block text-green-400 mb-2">Multi-Department</strong>
              <span className="text-slate-300 text-sm">Connect sales, HR, finance, inventory and operations seamlessly.</span>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl">
              <strong className="block text-green-400 mb-2">Regional Operations</strong>
              <span className="text-slate-300 text-sm">Operate across Australia, UAE and KSA from a bilingual platform.</span>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-colors inline-block">
              Speak with a Solutions Expert
            </a>
          </div>
        </div>
      </section>

      {/* 16. COMPARE THE OLD WAY VS HIVENOX */}
      <section className="py-24 px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center">From disconnected tools to one operating system.</h2>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-2 bg-slate-100 border-b border-slate-200">
              <div className="p-6 font-bold text-slate-500 text-lg">The Old Way</div>
              <div className="p-6 font-bold text-blue-700 text-lg bg-blue-100/50">Hivenox ERP</div>
            </div>
            
            {[
              ['Multiple systems', 'One connected platform'],
              ['Different databases', 'One shared database'],
              ['Manual handoffs', 'Connected workflows'],
              ['Conflicting reports', 'One source of truth'],
              ['Spreadsheet reconciliation', 'Live information'],
              ['Separate logins', 'Connected platform'],
              ['Add another tool', 'Add another module'],
              ['ERP records work', 'ERP + AI can act']
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="p-4 md:p-6 text-slate-600 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div> {row[0]}
                </div>
                <div className="p-4 md:p-6 text-blue-900 font-semibold bg-blue-50/30 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div> {row[1]}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xl md:text-2xl font-bold text-slate-800 mt-12">
            Nothing to integrate. Nothing to reconcile. <span className="text-blue-700">No re-platforming, ever.</span>
          </p>
        </div>
      </section>

      {/* 17. FAQ */}
      <section className="py-24 px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "What modules are included in Hivenox ERP?", a: "The ERP Apps suite contains six modules: CRM, HRMS, Inventory Management, Accounting & Finance, Operations Management, and Analytics & Reporting." },
            { q: "Do I need to implement every module at once?", a: "No. Hivenox is designed to be modular. You can deploy what you need and add modules as your business grows." },
            { q: "Do all modules share the same database?", a: "Yes. The core ERP positioning is built around all modules operating on one shared database, ensuring one source of truth." },
            { q: "Can the ERP work with AI?", a: "Yes. The HIVENOX AI workforce operates on the same platform and live ERP data, moving your ERP from just record-keeping to acting on work." },
            { q: "Does Hivenox support Arabic?", a: "Yes. The platform is bilingual and RTL-native by design." },
            { q: "Is Hivenox ERP suitable for UAE, KSA and Australia?", a: "Yes, it is explicitly positioned for these markets and includes VAT/GST-ready financial capabilities and regional payroll awareness." },
            { q: "Can I start with CRM and add the rest later?", a: "Yes. The modular model lets you start with the exact capabilities you need today and add more without ever re-platforming." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => toggleFaq(idx)} 
                className="w-full p-6 text-left flex items-center justify-between font-bold text-slate-800 hover:text-blue-700 focus:outline-none"
              >
                {faq.q}
                <ChevronDown className={`transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 18. FINAL CTA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-blue-700 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="inline-block py-1 px-4 rounded-full bg-blue-800 text-blue-200 font-bold text-sm tracking-widest uppercase mb-6">
              Run the Whole Company
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">One system for the whole business.</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              One shared database. One source of truth. Six connected ERP modules. Add what you need as you grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="/book" className="px-8 py-4 w-full sm:w-auto bg-green-500 hover:bg-green-400 text-blue-950 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 text-lg">
                <Calendar size={22} /> Book a Demo
              </a>
              <a href="/contact" className="px-8 py-4 w-full sm:w-auto bg-transparent border-2 border-blue-400 hover:border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2 text-lg">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ErpSolutionsPage;