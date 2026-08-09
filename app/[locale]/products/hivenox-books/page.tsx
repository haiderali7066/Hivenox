"use client";

import React from "react";
import { 
  FileText, Receipt, CreditCard, BarChart3, TrendingUp, TrendingDown, 
  ArrowRight, CheckCircle2, Shield, Layers, Workflow, RefreshCw, 
  HelpCircle, Sparkles, PieChart, DollarSign, ArrowUpRight, ArrowDownRight, Building2, ChevronRight
} from "lucide-react";

export default function HivenoxBooksPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-base font-bold uppercase tracking-widest text-blue-700 shadow-sm">
                <Sparkles className="size-5 text-blue-700" />
                Hivenox Books
              </div>
              
              <h1 className="mb-6 text-5xl font-light tracking-tight text-slate-900 lg:text-7xl leading-tight">
                Accounting That Keeps <br />
                <span className="font-semibold text-blue-700">
                  Your Business Moving.
                </span>
              </h1>
              
              <p className="mb-8 max-w-2xl text-xl font-light leading-relaxed text-slate-700">
                Manage invoices, expenses, payments, cash flow, and financial reporting from one connected accounting workspace.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-xl">
                {[
                  "Smart invoicing",
                  "Expense tracking",
                  "Cash flow visibility",
                  "Financial reporting"
                ].map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                    <CheckCircle2 className="size-5 text-blue-700 shrink-0" />
                    <span className="text-base font-medium text-slate-800">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 w-full">
                <a href="/book" className="group flex-1 sm:flex-none inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-1">
                  Book a Demo
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/contact" className="group flex-1 sm:flex-none inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50 hover:-translate-y-1">
                  Explore Hivenox Products
                </a>
              </div>
            </div>
            
            {/* Main Visual / Dashboard Mockup */}
            <div className="relative w-full rounded-[2.5p] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 bg-white p-6 group">
              <div className="absolute top-0 right-0 px-6 py-3 bg-blue-50 border-b border-l border-blue-100 rounded-bl-3xl text-sm font-semibold text-blue-700 flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Live Connected Ledger
              </div>
              
              <div className="pt-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <p className="text-sm font-medium text-slate-500 mb-1">Total Revenue</p>
                    <p className="text-2xl font-bold text-slate-900">$ 8,420,000</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 mt-2 bg-emerald-50 px-2 py-1 rounded-md">
                      <ArrowUpRight className="size-3" /> +18.4% vs last month
                    </span>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <p className="text-sm font-medium text-slate-500 mb-1">Net Profit</p>
                    <p className="text-2xl font-bold text-blue-700">$ 3,240,000</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 mt-2 bg-emerald-50 px-2 py-1 rounded-md">
                      <ArrowUpRight className="size-3" /> +12.7% margin
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-blue-200">Cash Flow Balance</span>
                    <span className="text-xs px-3 py-1 bg-blue-600 rounded-full font-medium">Real-Time</span>
                  </div>
                  <div className="text-3xl font-light mb-4">$ 4,820,000</div>
                  <div className="flex gap-4 text-sm text-blue-100">
                    <div>Receivables: <span className="font-semibold text-white">$ 2.14M</span></div>
                    <div>Payables: <span className="font-semibold text-white">$ 1.08M</span></div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2850&auto=format&fit=crop" 
                    alt="Financial Dashboard Analytics" 
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. OVERVIEW SECTION
            ========================================================================= */}
        <section className="py-24 bg-white border-y border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Your Finances. <span className="font-semibold text-blue-700">Clear, Connected, Under Control.</span>
              </h2>
              <p className="text-xl font-light text-slate-600 mb-8">
                Hivenox Books brings everyday accounting tasks into one simple workspace, helping businesses stay organized and understand their financial position.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-800 shadow-md">
                  Book a Demo
                </a>
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700">
                  Contact Sales
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: FileText, title: "Invoicing", desc: "Create, send, and track professional invoices." },
                { icon: Receipt, title: "Expenses", desc: "Record and categorize business expenses." },
                { icon: CreditCard, title: "Payments", desc: "Track incoming and outgoing payments." },
                { icon: BarChart3, title: "Reports", desc: "Understand profitability, cash flow, and financial performance." }
              ].map((card, i) => (
                <div key={i} className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-blue-700 hover:-translate-y-2">
                  <div className="size-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                    <card.icon className="size-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-base font-light text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. FINANCIAL DASHBOARD SECTION
            ========================================================================= */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-900/50 px-4 py-2 rounded-full border border-blue-700">
                  Real-Time Visibility
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                  See Your Financial Health <br />
                  <span className="font-semibold text-blue-400">At a Glance</span>
                </h2>
                <p className="text-xl font-light text-slate-300 mb-8">
                  Get the numbers you need without waiting for spreadsheets or month-end reporting.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg">
                    Book a Demo
                  </a>
                  <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800 px-8 text-lg font-medium text-slate-200 transition-all duration-300 hover:bg-slate-700">
                    Contact Sales
                  </a>
                </div>
              </div>

              {/* Financial Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-[2rem] backdrop-blur-md">
                  <p className="text-sm text-slate-400 font-medium mb-1">Revenue</p>
                  <p className="text-3xl font-bold text-white mb-2">$ 8.42M</p>
                  <div className="flex items-center text-emerald-400 text-sm font-semibold">
                    <TrendingUp className="size-4 mr-1" /> 18.4%
                  </div>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-[2rem] backdrop-blur-md">
                  <p className="text-sm text-slate-400 font-medium mb-1">Expenses</p>
                  <p className="text-3xl font-bold text-white mb-2">$ 5.18M</p>
                  <div className="flex items-center text-rose-400 text-sm font-semibold">
                    <TrendingDown className="size-4 mr-1" /> 4.2%
                  </div>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-[2rem] backdrop-blur-md sm:col-span-2">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm text-slate-400 font-medium">Net Profit</p>
                    <div className="flex items-center text-emerald-400 text-sm font-semibold bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-800">
                      <TrendingUp className="size-4 mr-1" /> 12.7%
                    </div>
                  </div>
                  <p className="text-4xl font-light text-blue-400 mb-6">$ 3.24M</p>
                  
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-700 text-center">
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Receivables</p>
                      <p className="text-base font-bold text-white">$ 2.14M</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Payables</p>
                      <p className="text-base font-bold text-white">$ 1.08M</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Cash Balance</p>
                      <p className="text-base font-bold text-blue-400">$ 4.82M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. INVOICING SECTION
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                  Smart Lifecycle Invoicing
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Create Invoices. <br />
                  <span className="font-semibold text-blue-700">Get Paid Faster.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8">
                  Manage the complete invoice lifecycle with built-in customer details, automated taxes, discounts, and payment tracking.
                </p>

                {/* Status Flow Visualization */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Invoice Status Flow</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                    {["Draft", "Sent", "Viewed", "Partially Paid", "Paid"].map((status, idx, arr) => (
                      <React.Fragment key={idx}>
                        <span className={`px-3.5 py-2 rounded-xl border ${idx === arr.length - 1 ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-slate-700 border-slate-200 shadow-sm'}`}>
                          {status}
                        </span>
                        {idx < arr.length - 1 && <ChevronRight className="size-4 text-slate-400" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 shadow-md">
                    Book a Demo
                  </a>
                  <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700">
                    Contact Sales
                  </a>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Create invoices", desc: "Build branded, professional invoices instantly." },
                  { title: "Customer details", desc: "Maintain structured contact and billing ledgers." },
                  { title: "Products & services", desc: "Pre-load inventory items and service rates." },
                  { title: "Discounts & Taxes", desc: "Automate regional tax calculations and price adjustments." },
                  { title: "Payment terms", desc: "Set net-30, net-60, or immediate payment conditions." },
                  { title: "Invoice tracking", desc: "Know the exact second your client views an invoice." }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-700">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-base font-light text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. EXPENSES & BILLS SECTION
            ========================================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Expense Breakdown UI */}
              <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-xl">
                <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                  <h3 className="text-2xl font-semibold text-slate-900">Monthly Expenses</h3>
                  <span className="text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">Audited Ledger</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { cat: "Payroll", amt: "$ 920,000", pct: "60%" },
                    { cat: "Operations", amt: "$ 240,000", pct: "16%" },
                    { cat: "Marketing", amt: "$ 185,000", pct: "12%" },
                    { cat: "Utilities", amt: "$ 92,000", pct: "6%" },
                    { cat: "Software", amt: "$ 75,000", pct: "5%" }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div>
                        <p className="font-semibold text-slate-900">{row.cat}</p>
                        <p className="text-xs text-slate-500">Recurring bill approval</p>
                      </div>
                      <span className="font-bold text-slate-800">{row.amt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                  Spend Control
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Know Where Every Rupee Goes.
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8">
                  Track business spending from one unified place, managing supplier bills, recurring costs, receipts, and approval workflows.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {["Business expenses", "Supplier bills", "Recurring expenses", "Employee expenses", "Expense categories", "Receipts & Approvals"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle2 className="size-5 text-blue-700 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 shadow-md">
                    Book a Demo
                  </a>
                  <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700">
                    Contact Sales
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            6. CASH FLOW & PAYMENTS SECTION (Blue-700 Background)
            ========================================================================= */}
        <section className="py-24 bg-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-100 bg-blue-800/80 px-4 py-2 rounded-full border border-blue-500">
                Liquidity Management
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">
                Know What's Coming In <span className="font-semibold text-blue-200">and Going Out.</span>
              </h2>
              <p className="text-xl font-light text-blue-100 mb-8">
                Track your business cash position in real time with advanced bank account reconciliation and ledger balances.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-blue-700 transition-all duration-300 hover:bg-slate-100 shadow-md">
                  Book a Demo
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              <div className="bg-blue-800/60 border border-blue-500/50 p-8 rounded-[2rem] backdrop-blur-md">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-white">
                  <ArrowDownRight className="size-6 text-emerald-300" /> Money In
                </h3>
                <ul className="space-y-4 text-blue-100 font-light text-lg">
                  {["Customer payments", "Direct sales", "Other secondary income", "Outstanding balances collection"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="size-2 rounded-full bg-emerald-400"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-800/60 border border-blue-500/50 p-8 rounded-[2rem] backdrop-blur-md">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-white">
                  <ArrowUpRight className="size-6 text-rose-300" /> Money Out
                </h3>
                <ul className="space-y-4 text-blue-100 font-light text-lg">
                  {["Supplier payments & bills", "Operational expenses", "Payroll processing", "Tax compliance remittances"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="size-2 rounded-full bg-rose-400"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            7. FINANCIAL REPORTING SECTION
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                  Advanced Analytics
                </span>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Turn Transactions Into <br />
                  <span className="font-semibold text-blue-700">Financial Clarity.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8">
                  Generate institutional-grade financial reporting automatically, giving stakeholders complete visibility into assets, liabilities, and profitability.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Profit & Loss statement",
                    "Balance Sheet",
                    "Cash Flow analysis",
                    "Trial Balance",
                    "Accounts Receivable",
                    "Accounts Payable",
                    "Detailed Expense Reports"
                  ].map((report, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle2 className="size-5 text-blue-700 shrink-0" />
                      <span>{report}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-blue-700 px-8 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-800 shadow-md">
                    Book a Demo
                  </a>
                  <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 text-lg font-medium text-slate-700 transition-all duration-300 hover:border-blue-700 hover:text-blue-700">
                    Contact Sales
                  </a>
                </div>
              </div>

              {/* Report UI Preview */}
              <div className="bg-slate-900 text-white p-8 rounded-[3rem] shadow-2xl border border-slate-800">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
                  <span className="text-lg font-bold">Executive Financial Summary</span>
                  <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">Certified Report</span>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-slate-800/80 rounded-2xl flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Gross Profit Margin</p>
                      <p className="text-xs text-slate-400">Q3 Consolidated Performance</p>
                    </div>
                    <span className="text-emerald-400 font-bold text-lg">78.4%</span>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-2xl flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Operating Cash Flow</p>
                      <p className="text-xs text-slate-400">Verified bank reconciled</p>
                    </div>
                    <span className="text-blue-400 font-bold text-lg">$ 4.82M</span>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-2xl flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Working Capital Ratio</p>
                      <p className="text-xs text-slate-400">Assets vs Liabilities</p>
                    </div>
                    <span className="text-emerald-400 font-bold text-lg">2.41x</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            8. AUTOMATION & SMART WORKFLOWS
            ========================================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                Autonomous Bookkeeping
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Spend Less Time on <span className="font-semibold text-blue-700">Bookkeeping.</span>
              </h2>
              <p className="text-xl font-light text-slate-600 mb-8">
                Automate repetitive financial tasks, recurring billing, reminders, and transaction categorizations with intelligent workflows.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-800 shadow-md">
                  Book a Demo
                </a>
              </div>
            </div>

            {/* Workflow Chain Visual */}
            <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-[3rem] border border-slate-200 shadow-xl">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest text-center mb-8">Automated Payment Cycle Example</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {[
                  { step: "Invoice Due", desc: "System checks due date automatically" },
                  { step: "Reminder Sent", desc: "Automated client email dispatched" },
                  { step: "Payment Received", desc: "Gateway updates status instantly" },
                  { step: "Transaction Recorded", desc: "Ledger and balance updated" }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center relative">
                    <div className="size-10 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center mx-auto mb-4">
                      0{i + 1}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.step}</h3>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            9. CONNECTED HIVENOX ECOSYSTEM
            ========================================================================= */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/20"></div>
          
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-900/50 px-4 py-2 rounded-full border border-blue-700">
                Unified Ecosystem
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white">
                Your Accounting <span className="font-semibold text-blue-400">Doesn't Work Alone.</span>
              </h2>
              <p className="text-xl font-light text-slate-300 mb-8">
                Keep financial information connected to the business activities that create it across CRM, SalesFlow, Inventory, HRMS, and Operations.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-blue-500 shadow-md">
                  Book a Demo
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                { name: "CRM", desc: "Customer & deal information" },
                { name: "SalesFlow", desc: "Sales revenue records" },
                { name: "Inventory", desc: "Product & stock transactions" },
                { name: "HRMS", desc: "Payroll information" },
                { name: "Operations", desc: "Business expenses & approvals" }
              ].map((sys, i) => (
                <div key={i} className="bg-slate-800/80 border border-slate-700 p-6 rounded-[2rem] backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">
                  <div>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Hivenox Module</span>
                    <h3 className="text-xl font-semibold text-white mt-1 mb-2">{sys.name}</h3>
                    <p className="text-sm font-light text-slate-300">{sys.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700 text-xs font-medium text-blue-300 flex items-center justify-between">
                    <span>Syncs with Books</span>
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            10. BENEFITS SECTION
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                Enterprise Value
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Simple Accounting. <span className="font-semibold text-blue-700">Better Business Decisions.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Stay Organized", desc: "Keep invoices, expenses, payments, and financial records together in one secure workspace." },
                { title: "Improve Cash Flow", desc: "Know precisely what you owe and what you're owed with instant liquidity tracking." },
                { title: "Reduce Manual Work", desc: "Automate repetitive accounting workflows and eliminate manual data entry errors." },
                { title: "Understand Profitability", desc: "See exactly where your revenue and expenses are originating across every business unit." }
              ].map((benefit, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-700">
                  <div className="size-12 rounded-xl bg-blue-700 text-white font-bold flex items-center justify-center mb-6">
                    {i + 1}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-base font-light text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            11. FAQ + FINAL CTA SECTION
            ========================================================================= */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                Got Questions?
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 mb-24">
              {[
                { q: "Can I create invoices?", a: "Yes. Create, send, track, and manage invoices seamlessly from one integrated workspace." },
                { q: "Can I track business expenses?", a: "Yes. Record, categorize, and monitor all business expenses and supplier bills in real time." },
                { q: "Can I manage receivables and payables?", a: "Yes. Track outstanding customer invoices and supplier obligations with precise maturity schedules." },
                { q: "Can Books connect with Hivenox ERP?", a: "Yes. Books connects natively with SalesFlow, CRM, Inventory, HRMS, and Operations." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 flex items-center gap-3">
                    <HelpCircle className="size-5 text-blue-700 shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-base font-light text-slate-600 pl-8">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Final CTA Card */}
            <div className="relative overflow-hidden rounded-[3rem] bg-blue-700 px-8 py-20 sm:px-16 text-center shadow-2xl">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[30rem] w-[30rem] rounded-full bg-blue-600 blur-[100px] opacity-50 pointer-events-none" />
              
              <div className="relative z-10 mx-auto max-w-3xl">
                <h2 className="mb-6 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                  Put Your Business Finances in Order.
                </h2>
                <p className="mb-10 text-xl font-light leading-relaxed text-blue-100">
                  Manage your accounting with a connected financial workspace built specifically for modern businesses.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/book" className="inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-xl font-bold text-blue-700 transition-all duration-300 hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1">
                    Book a Demo Card
                    <ArrowRight className="ml-3 size-6" />
                  </a>
                  <a href="/contact" className="inline-flex h-16 items-center justify-center rounded-full border-2 border-blue-300 bg-transparent px-10 text-xl font-medium text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                    Contact Sales
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