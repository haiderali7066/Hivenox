import React from 'react';

// SEO Metadata (Next.js App Router compatible)
export const metadata = {
  title: "Hivenox ERP | Accounting & Finance",
  description: "Bring accounting, invoicing, expenses, payments, and financial reporting into one connected platform. Know your numbers, control your business.",
  keywords: "ERP, Accounting, Finance, Invoicing, General Ledger, Cash Flow, Payroll, Hivenox",
};

// Reusable CTA Button Component
const SectionCTA = ({ text = "Book a Demo", href = "/book" }) => (
  <div className="mt-8 flex flex-wrap gap-4 items-center">
    <a href={href} className="px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {text}
    </a>
    <a href="/contact" className="px-6 py-3 bg-white text-blue-700 font-medium rounded-full border border-blue-200 hover:bg-blue-50 hover:border-blue-700 transition-all duration-300">
      Contact Sales
    </a>
  </div>
);

export default function AccountingAndFinancePage() {
  return (
    <main className="w-full bg-slate-50 font-sans text-slate-800 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative bg-blue-700 text-white pt-24 pb-32 px-6 lg:px-12 rounded-b-[3rem] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="inline-block py-1 px-3 bg-blue-600/50 text-blue-100 rounded-full text-sm font-semibold tracking-wide border border-blue-400/30">
              Hivenox ERP • Accounting & Finance
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Know Your Numbers. <br /> Control Your Business.
            </h1>
            <p className="text-xl text-blue-100 max-w-lg">
              Bring accounting, invoicing, expenses, payments, and financial reporting into one connected platform built to give your business a clear financial picture.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/book" className="px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-1 transition-all duration-300">
                Book a Demo
              </a>
              <a href="#explore" className="px-8 py-4 bg-blue-800 text-white font-bold rounded-full hover:bg-blue-900 border border-blue-600 transition-all duration-300">
                Explore Hivenox ERP
              </a>
            </div>
            <div className="flex flex-wrap gap-6 pt-8 text-sm font-medium text-blue-200">
              <span className="flex items-center gap-2">✓ Automated accounting</span>
              <span className="flex items-center gap-2">✓ Invoicing & payments</span>
              <span className="flex items-center gap-2">✓ Expense management</span>
              <span className="flex items-center gap-2">✓ Real-time reports</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" 
              alt="Financial Dashboard" 
              className="relative rounded-[2rem] shadow-2xl object-cover h-[500px] w-full transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 2. Accounting Overview */}
      <section id="explore" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Your Finances, Connected to Your Business</h2>
            <p className="text-lg text-slate-600">
              Instead of managing accounting separately from sales, purchasing, inventory, and operations, Hivenox connects financial activity across the entire business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "General Ledger", desc: "Keep your accounts organized and up to date." },
              { title: "Accounts Receivable", desc: "Track invoices, outstanding balances, and customer payments." },
              { title: "Accounts Payable", desc: "Manage supplier bills and upcoming payments." },
              { title: "Expenses", desc: "Capture and categorize business expenses." },
              { title: "Cash Flow", desc: "Understand money coming in and going out." },
              { title: "Financial Reports", desc: "Turn financial activity into actionable insights." }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  <span className="text-2xl">✦</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12"><SectionCTA /></div>
        </div>
      </section>

      {/* 3. Financial Dashboard & 10. Bank Reconciliation (Combined Visuals) */}
      <section className="py-24 px-6 lg:px-12 bg-slate-100 rounded-[3rem] mx-4 lg:mx-12 my-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">See the Financial Health of Your Business</h2>
            <p className="text-lg text-slate-600 mb-8">
              Get an up-to-date view of revenue, expenses, profitability, receivables, payables, and cash flow without waiting for month-end reports.
            </p>
            
            {/* Visual Dashboard Mockup */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                  <p className="text-sm text-green-700 font-medium mb-1">Revenue</p>
                  <p className="text-2xl font-bold text-slate-900">$ 8.42M</p>
                </div>
                <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                  <p className="text-sm text-red-700 font-medium mb-1">Expenses</p>
                  <p className="text-2xl font-bold text-slate-900">$ 5.18M</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-sm text-blue-700 font-medium mb-1">Net Profit</p>
                  <p className="text-2xl font-bold text-slate-900">$ 3.24M</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <p className="text-sm text-orange-700 font-medium mb-1">Outstanding</p>
                  <p className="text-2xl font-bold text-slate-900">$ 1.26M</p>
                </div>
              </div>
            </div>
            <SectionCTA />
          </div>
          
          {/* Bank Match Visual */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
             <h3 className="text-2xl font-bold text-slate-900 mb-6">Keep Your Books in Sync</h3>
             <p className="text-slate-600 mb-6">Make it easier to reconcile financial transactions with AI matching.</p>
             <div className="border border-slate-200 rounded-2xl p-4 flex flex-col gap-4 bg-slate-50">
               <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                 <div>
                   <p className="text-xs text-slate-500 uppercase tracking-wide">Bank Transaction</p>
                   <p className="text-lg font-bold text-slate-900">$ 125,000</p>
                 </div>
                 <div className="text-green-500 text-2xl animate-pulse">⟷</div>
                 <div className="text-right">
                   <p className="text-xs text-slate-500 uppercase tracking-wide">Matched With</p>
                   <p className="text-lg font-bold text-slate-900">INV-10482</p>
                 </div>
               </div>
               <div className="flex justify-between items-center pt-2">
                 <span className="text-sm font-medium text-slate-700">ABC Trading</span>
                 <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                   ✓ Reconciled
                 </span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. General Ledger & Chart of Accounts */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-slate-900 p-8 rounded-[2rem] shadow-2xl text-slate-300 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="text-blue-400 mb-4 font-bold tracking-widest text-xs uppercase">Chart of Accounts Tree</div>
            <pre className="text-green-400 hover:text-green-300 transition-colors cursor-default">
{`Assets
├── Cash
├── Bank
├── Accounts Receivable
└── Inventory

Liabilities
├── Accounts Payable
└── Tax Payable

Equity
├── Capital
└── Retained Earnings

Income
└── Sales Revenue

Expenses
├── Salaries
├── Rent
└── Operations`}
            </pre>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Build a Financial Foundation You Can Trust</h2>
            <p className="text-lg text-slate-600 mb-8">Manage your accounting structure from one place.</p>
            <ul className="grid grid-cols-2 gap-4 text-slate-700 font-medium">
              {['Chart of accounts', 'General ledger', 'Journal entries', 'Debit & credit tracking', 'Account balances', 'Transaction history', 'Accounting periods', 'Audit trail'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                  {item}
                </li>
              ))}
            </ul>
            <SectionCTA />
          </div>
        </div>
      </section>

      {/* 5. Invoicing & 6. AR & 7. AP (Combined Pipeline Flow) */}
      <section className="py-24 px-6 lg:px-12 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Create Professional Invoices & Get Paid</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Track everything customers owe your business, and stay ahead of supplier bills before they become problems.</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Invoice Status Pipeline */}
          <div className="bg-blue-800/50 border border-blue-600 rounded-3xl p-8 mb-12 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-blue-200 mb-6 text-center uppercase tracking-widest">Invoice Lifecycle</h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {['Draft', 'Sent', 'Viewed', 'Partially Paid', 'Paid'].map((status, index, arr) => (
                <React.Fragment key={status}>
                  <div className="px-6 py-3 bg-white text-blue-900 font-bold rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    {status}
                  </div>
                  {index !== arr.length - 1 && <span className="text-blue-400 rotate-90 md:rotate-0">➔</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Accounts Receivable Example */}
            <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="p-2 bg-green-100 text-green-600 rounded-lg">↓</span> Accounts Receivable
              </h3>
              <div className="space-y-4">
                {[
                  { name: "ABC Trading", amount: "$ 420,000", due: "12 Aug", alert: true },
                  { name: "Global Retail", amount: "$ 185,000", due: "15 Aug", alert: false },
                  { name: "Nova Solutions", amount: "$ 92,000", due: "21 Aug", alert: false },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-xl transition-colors border-b border-slate-100 last:border-0">
                    <span className="font-semibold">{row.name}</span>
                    <div className="text-right">
                      <p className="font-bold">{row.amount}</p>
                      <p className={`text-xs ${row.alert ? 'text-red-500 font-bold' : 'text-slate-500'}`}>Due: {row.due}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features List for Invoicing & AP */}
            <div className="bg-blue-800 p-8 rounded-3xl shadow-xl">
               <h3 className="text-2xl font-bold text-white mb-6">Accounts Payable & Invoicing</h3>
               <ul className="space-y-3 text-blue-100">
                 <li className="flex items-center gap-3">✓ Automatic invoice numbering</li>
                 <li className="flex items-center gap-3">✓ Supplier bill management</li>
                 <li className="flex items-center gap-3">✓ Tax & Discount calculation</li>
                 <li className="flex items-center gap-3">✓ Payables aging reports</li>
                 <li className="flex items-center gap-3">✓ PDF generation in seconds</li>
               </ul>
               <div className="mt-8">
                 <a href="/book" className="px-6 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-colors inline-block w-full text-center">
                   Create Your First Invoice
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Expense & 9. Cash Flow & 11. Taxes & 13. Profitability (Grid section) */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Master Your Cash & Expenses</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Track spending, manage taxes seamlessly across regions, and understand exactly where your profit comes from.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Expense Management */}
            <div className="p-8 border border-slate-200 rounded-3xl hover:border-blue-700 transition-colors group">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Every Expense Accounted For</h3>
              <p className="text-slate-600 mb-6">Track and categorize business spending easily.</p>
              <div className="flex flex-wrap gap-2">
                {['Salaries', 'Rent', 'Utilities', 'Marketing', 'Travel', 'Software', 'Operations'].map((cat, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Profitability Example */}
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Know Where Your Profit Comes From</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-200">
                  <span>Category</span><span>Revenue</span><span>Profit</span>
                </div>
                {[
                  { cat: "Electronics", rev: "$ 2.4M", prof: "$ 680K" },
                  { cat: "Accessories", rev: "$ 1.1M", prof: "$ 340K" },
                  { cat: "Services", rev: "$ 920K", prof: "$ 410K" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm font-semibold">
                    <span className="w-1/3 text-slate-900">{item.cat}</span>
                    <span className="w-1/3 text-center text-slate-600">{item.rev}</span>
                    <span className="w-1/3 text-right text-green-600">{item.prof}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cash Flow */}
            <div className="p-8 border border-slate-200 rounded-3xl hover:border-green-500 transition-colors group">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Understand Where Money Goes</h3>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-bold text-green-600 mb-2 flex items-center gap-2">↑ Money In</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Customer payments</li><li>Sales</li><li>Other income</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-500 mb-2 flex items-center gap-2">↓ Money Out</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Supplier payments</li><li>Payroll</li><li>Operating expenses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Taxes */}
            <div className="p-8 bg-blue-700 text-white rounded-3xl hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Organized Tax Management</h3>
              <p className="text-blue-100 mb-6">Configurable for different countries and structures. Support for tax-inclusive/exclusive pricing.</p>
              <ul className="space-y-2 text-sm font-medium text-blue-50">
                <li>• Tax on invoices & purchases</li>
                <li>• Transaction-level tax tracking</li>
                <li>• Automated tax summaries</li>
              </ul>
              <div className="mt-6">
                <a href="/contact" className="text-sm font-bold underline hover:text-green-400 transition-colors">Ask about localized tax support →</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12"><SectionCTA /></div>
        </div>
      </section>

      {/* 12. Financial Reporting */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Reports That Tell You What Matters</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Profit & Loss", desc: "Understand revenue, expenses, and profitability." },
                { name: "Balance Sheet", desc: "See your assets, liabilities, and equity." },
                { name: "Cash Flow Statement", desc: "Understand cash movement in real-time." },
                { name: "AR / AP Aging", desc: "Track upcoming and overdue payments easily." },
              ].map((report, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-700 border border-transparent transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-700 font-bold">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{report.name}</h4>
                  <p className="text-sm text-slate-600">{report.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 14 & 15. Connected Ecosystem & Multi-Branch */}
      <section className="py-24 px-6 lg:px-12 bg-slate-900 text-white rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Finance That Connects Everything</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From multi-branch financial control to a completely connected ERP ecosystem, Hivenox unifies your data.
            </p>
          </div>

          <div className="flex flex-col items-center mb-16">
            {/* Visual Tree */}
            <div className="px-8 py-4 bg-blue-700 text-white font-bold rounded-2xl text-xl shadow-lg shadow-blue-700/50 relative z-10">
              Hivenox ERP
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="w-full max-w-4xl border-t border-slate-600 flex justify-between relative pt-8">
              {[
                { name: "CRM", desc: "Customer & deals", color: "bg-purple-500" },
                { name: "Inventory", desc: "Stock valuation", color: "bg-green-500" },
                { name: "SalesFlow", desc: "Sales revenue", color: "bg-orange-500" },
                { name: "HRMS", desc: "Payroll costs", color: "bg-pink-500" },
                { name: "Books", desc: "Accounting", color: "bg-blue-500" }
              ].map((module, i) => (
                <div key={i} className="flex flex-col items-center relative -top-8 w-1/5 group cursor-pointer">
                  <div className="w-px h-8 bg-slate-600 mb-4"></div>
                  <div className={`w-3 h-3 rounded-full ${module.color} mb-3 group-hover:scale-150 transition-transform`}></div>
                  <h4 className="font-bold text-slate-200">{module.name}</h4>
                  <p className="text-xs text-slate-400 text-center mt-2 px-2 hidden md:block">{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center"><SectionCTA /></div>
        </div>
      </section>

      {/* 16. Who It's For & 17. Benefits */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Built for Businesses That Need Clarity</h2>
            <div className="flex flex-wrap gap-3">
              {['Retail & E-commerce', 'Wholesale & Distribution', 'Professional Services', 'Agencies', 'Restaurants & Cafés', 'Healthcare', 'Manufacturing', 'Multi-branch businesses'].map((industry, i) => (
                <span key={i} className="px-4 py-2 border border-slate-200 rounded-full text-slate-700 font-medium hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 transition-all cursor-default">
                  {industry}
                </span>
              ))}
            </div>
            <div className="mt-12">
               <img 
                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                 alt="Business Growth" 
                 className="rounded-3xl shadow-xl w-full h-64 object-cover"
               />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Better Books. Better Decisions.</h2>
            <div className="space-y-6">
              {[
                { title: "Automate Accounting", desc: "Reduce repetitive financial administration." },
                { title: "Improve Cash Flow Visibility", desc: "Know exactly what's coming in and going out." },
                { title: "Reduce Errors", desc: "Keep financial data connected across business operations." },
                { title: "Get Paid Faster", desc: "Track outstanding invoices and overdue payments automatically." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8"><SectionCTA text="Get Started Today" /></div>
          </div>
        </div>
      </section>

      {/* 18. FAQ */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Can I create and manage invoices?", a: "Yes. Hivenox Accounting & Finance can handle invoice creation, tracking, payment status, and customer balances." },
              { q: "Can I track expenses?", a: "Yes. Expenses can be categorized and monitored across your business." },
              { q: "Can I manage accounts payable and receivable?", a: "Yes. Track what customers owe you and what you owe suppliers." },
              { q: "Does accounting connect with inventory?", a: "Yes. Financial workflows connect directly with inventory, purchasing, sales, and other Hivenox modules." },
              { q: "Can I generate financial reports?", a: "Yes. The platform provides Profit & Loss, Balance Sheet, Cash Flow, Trial Balance, and aging reports." },
              { q: "Can I manage multiple branches?", a: "Yes. Hivenox can be structured to provide branch-level and consolidated financial visibility." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-slate-900">
                  <h3 className="text-lg">{faq.q}</h3>
                  <span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-slate-900 sm:p-3 group-open:bg-blue-700 group-open:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 19. Final CTA */}
      <section className="py-32 px-6 lg:px-12 bg-blue-700 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl font-extrabold text-white mb-6">Put Your Business Finances on Autopilot</h2>
          <p className="text-xl text-blue-100 mb-10">
            Bring accounting, invoicing, expenses, payments, and reporting together with Hivenox today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/book" className="px-10 py-5 bg-green-500 text-white text-lg font-bold rounded-full hover:bg-green-600 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-2 transition-all duration-300">
              Book a Hivenox Demo
            </a>
            <a href="/contact" className="px-10 py-5 bg-transparent border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white hover:text-blue-700 hover:shadow-2xl transition-all duration-300">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}