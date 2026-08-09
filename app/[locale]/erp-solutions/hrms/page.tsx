"use client";

import React from "react";
import { 
  CheckCircle2, ArrowRight, Users, Briefcase, Calendar, 
  Calculator, TrendingUp, Network, Zap, Globe, Sparkles, 
  FileText, Clock, Building2, LineChart, MessageSquare, 
  ChevronRight, ShieldCheck, PieChart, Star,
  Layers
} from "lucide-react";

export default function HivenoxHRMS() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 overflow-hidden">
      
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative bg-blue-700 py-24 sm:py-32 lg:py-40 overflow-hidden rounded-b-[3rem] shadow-2xl">
        {/* Background Accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[80px] opacity-50" />
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-emerald-500 rounded-full blur-[100px] opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-800/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-300 shadow-sm backdrop-blur-md">
                <Sparkles className="size-4 text-emerald-400" />
                ERP APPS · HRMS
              </div>
              
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl leading-tight">
                The entire people lifecycle — hire to retire — in one calm, connected place.
              </h1>
              
              <p className="mb-6 text-xl font-light leading-relaxed text-blue-100">
                From onboarding and attendance to leave, payroll and performance, Hivenox HRMS gives your people one well-run home — while connecting every people decision to the rest of your business.
              </p>

              <p className="mb-10 text-base font-medium text-blue-50 bg-blue-800/40 py-4 px-6 rounded-2xl border border-blue-600/50 backdrop-blur-sm">
                Payroll that just works. Leadership clarity. Less paperwork, less chasing and a complete view of your most important asset: your people.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a href="/book" className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-semibold text-blue-700 transition-all hover:bg-slate-50 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1">
                  Book a Demo
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-blue-400/30 bg-blue-800/20 px-8 text-lg font-medium text-white transition-colors hover:border-white hover:bg-white/10">
                  Explore HRMS
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-blue-200">
                {[
                  "Hire-to-retire",
                  "Payroll + attendance + leave",
                  "Performance management",
                  "Connected to finance & analytics",
                  "Arabic + English"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-emerald-400" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:ml-auto w-full max-w-xl group perspective">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-blue-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern HR Dashboard and Team" 
                className="relative rounded-3xl shadow-2xl border border-blue-600/30 object-cover h-[500px] w-full transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE PROBLEM
          ========================================================================= */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-24">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                People Operations
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Your people shouldn't have to navigate your internal chaos.
              </h2>
              <div className="space-y-4 text-lg text-slate-600 mb-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                <p>A new employee joins. Someone sends forms. HR enters information. Payroll enters it again. Operations needs the details. Finance needs the cost. Leadership needs the numbers.</p>
                <p className="font-medium text-slate-800">And every month, someone is still chasing attendance, leave or approvals.</p>
              </div>
              
              <p className="text-xl font-semibold text-blue-700 border-l-4 border-emerald-500 pl-4 mb-8">
                Your people deserve better than an HR system that creates more admin.
              </p>

              {/* Quick CTA */}
              <div className="flex gap-4">
                <a href="/book" className="text-sm font-semibold text-white bg-blue-700 px-6 py-3 rounded-full hover:bg-blue-800 transition-colors shadow-lg hover:shadow-blue-700/25">Solve HR Chaos</a>
                <a href="/contact" className="text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors">Contact Sales</a>
              </div>
            </div>

            {/* Problem Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Too Much Paperwork", desc: "Onboarding becomes a collection of forms, emails and manual updates.", icon: FileText },
                { title: "Payroll Anxiety", desc: "Small errors and late processing create unnecessary stress for HR and employees.", icon: Calculator },
                { title: "Attendance & Leave Chasing", desc: "Managers and HR waste time tracking information that should already be visible.", icon: Clock },
                { title: "Performance Only Once a Year", desc: "Important conversations become an annual exercise instead of a continuous process.", icon: TrendingUp },
                { title: "HR Disconnected From the Business", desc: "People information doesn't automatically flow into capacity planning, finance and analytics.", icon: Network, span: true }
              ].map((pain, i) => (
                <div key={i} className={`group p-8 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 ${pain.span ? "sm:col-span-2" : ""}`}>
                  <div className="size-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <pain.icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{pain.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{pain.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ONE CONNECTED PEOPLE SYSTEM
          ========================================================================= */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 text-center">
          
          <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Everything from hire to retire.<br/>
            <span className="text-blue-700">One connected lifecycle.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-16">
            Hivenox HRMS brings the entire people lifecycle into one connected system, so information doesn't have to be repeatedly entered or manually carried between departments.
          </p>

          {/* Visual Journey */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 max-w-5xl mx-auto mb-12">
            {["Recruit", "Onboard", "Attend", "Take Leave", "Get Paid", "Perform", "Develop", "Grow"].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className="bg-slate-50 border border-slate-200 px-4 md:px-6 py-3 rounded-full text-sm md:text-base font-semibold text-slate-800 shadow-sm hover:border-blue-500 hover:text-blue-700 transition-colors cursor-default">
                  {step}
                </div>
                {i < arr.length - 1 && <ChevronRight className="size-5 text-emerald-500 hidden sm:block" />}
              </React.Fragment>
            ))}
          </div>

          <div className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold px-8 py-4 rounded-2xl shadow-sm mb-8">
            <span className="flex items-center gap-2 justify-center text-lg">
              <Sparkles className="size-5" /> One employee record. One connected lifecycle.
            </span>
          </div>

          <div className="flex justify-center gap-4">
            <a href="/book" className="text-sm font-semibold text-white bg-blue-700 px-6 py-3 rounded-full hover:bg-blue-800 transition-colors">See It In Action</a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. ONBOARDING
          ========================================================================= */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative group">
               <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500" />
               <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Onboarding Team" 
                className="relative rounded-[2.5rem] shadow-xl border border-slate-200 object-cover h-[450px] w-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Turn the first day into a smooth <span className="text-blue-700">guided flow.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                A new hire shouldn't trigger a scramble of paperwork. Hivenox HRMS turns onboarding into a structured, guided process that gets the employee into the business faster and gives every relevant team the information they need.
              </p>

              {/* Flow Visualization */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-slate-800 font-medium bg-slate-50 p-3 rounded-xl"><Users className="text-blue-600 size-5"/> New Hire</div>
                  <div className="w-0.5 h-4 bg-slate-200 ml-6"></div>
                  <div className="flex items-center gap-3 text-slate-800 font-medium bg-slate-50 p-3 rounded-xl"><FileText className="text-blue-600 size-5"/> Employee Info & Docs</div>
                  <div className="w-0.5 h-4 bg-slate-200 ml-6"></div>
                  <div className="flex flex-wrap gap-2 pl-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1.5 rounded-lg font-semibold">HRMS</span>
                    <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1.5 rounded-lg font-semibold">Payroll</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1.5 rounded-lg font-semibold">Operations</span>
                    <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1.5 rounded-lg font-semibold">Analytics</span>
                  </div>
                </div>
              </div>

              <p className="font-bold text-slate-800 border-l-4 border-blue-700 pl-4 mb-8">
                Enter the information once. Let the business use it everywhere.
              </p>

              <div className="flex gap-4">
                <a href="/book" className="text-sm font-semibold text-white bg-blue-700 px-6 py-3 rounded-full hover:bg-blue-800 transition-colors">Book a Demo</a>
                <a href="/contact" className="text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors">Contact Us</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ATTENDANCE & LEAVE
          ========================================================================= */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Attendance and leave that <span className="text-emerald-600">track themselves.</span>
            </h2>
            <p className="text-lg text-slate-600">
              Give employees and managers a clear, transparent way to manage attendance and leave without turning HR into a chasing operation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Attendance", desc: "Keep workforce attendance visible and organised.", icon: Clock },
              { title: "Leave Requests", desc: "Employees submit requests through the system.", icon: Calendar },
              { title: "Manager Approvals", desc: "Managers can review and approve without endless messages.", icon: CheckCircle2 },
              { title: "HR Visibility", desc: "HR sees the complete picture without manually collecting information.", icon: LineChart }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group">
                <div className="size-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors text-emerald-600 shadow-sm">
                  <feature.icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-slate-800 mb-8 inline-block bg-emerald-50 px-8 py-3 rounded-full border border-emerald-200 shadow-sm">
              Less chasing. More clarity.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/book" className="text-sm font-semibold text-white bg-blue-700 px-6 py-3 rounded-full hover:bg-blue-800 transition-colors">Improve Tracking</a>
              <a href="/contact" className="text-sm font-semibold text-blue-700 bg-white border border-blue-200 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">Talk to Sales</a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. PAYROLL THAT JUST WORKS
          ========================================================================= */}
      <section className="py-24 bg-blue-700 rounded-[3rem] my-12 mx-5 sm:mx-8 lg:mx-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
        
        <div className="relative z-10 mx-auto max-w-[80rem] px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-emerald-300 bg-blue-900/50 border border-blue-500/30 px-3 py-1 rounded-full backdrop-blur-sm">
                PAYROLL
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Accurate. On time. Aware of your local rules.
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Payroll shouldn't be the part of HR everyone dreads. Hivenox HRMS connects employee information, attendance and leave with payroll so the process is accurate, timely and connected to the rest of the business.
              </p>
              
              <p className="text-xl font-semibold text-white border-l-4 border-emerald-400 pl-4 mb-10 bg-blue-800/40 p-4 rounded-r-2xl backdrop-blur-sm">
                Pay people accurately without rebuilding the same information every month.
              </p>

              <div className="flex gap-4">
                <a href="/book" className="text-sm font-semibold text-blue-900 bg-white px-6 py-3 rounded-full hover:bg-slate-100 transition-colors shadow-lg">Simplify Payroll</a>
                <a href="/contact" className="text-sm font-semibold text-white bg-blue-800 border border-blue-500 px-6 py-3 rounded-full hover:bg-blue-900 transition-colors">Contact Expert</a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="text-emerald-400 size-6" /> Payroll Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  "Employee information already available",
                  "Attendance connected",
                  "Leave connected",
                  "Payroll processed accurately",
                  "Local-market awareness (UAE, KSA, AUS)",
                  "Finance visibility"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-50 font-medium bg-blue-900/30 p-3 rounded-xl border border-white/5">
                    <CheckCircle2 className="size-5 text-emerald-400 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PERFORMANCE & 8. HR CONNECTED TO BUSINESS
          ========================================================================= */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 space-y-32">
          
          {/* Performance */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Performance shouldn't happen once a year.
              </h2>
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Make development a visible thread, not an annual scramble.</h3>
              <p className="text-lg text-slate-600 mb-8">
                Performance reviews become more useful when they are part of an ongoing conversation. Hivenox HRMS gives managers and employees a continuous view of goals, performance and development rather than reducing everything to one annual review cycle.
              </p>
              <div className="inline-block bg-blue-100 text-blue-800 font-bold px-6 py-3 rounded-full mb-8">
                Continuous, not annual.
              </div>
              <div className="flex gap-4">
                <a href="/book" className="text-sm font-semibold text-white bg-blue-700 px-6 py-3 rounded-full hover:bg-blue-800 transition-colors">Book a Demo</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-200">
               <div className="flex flex-col gap-3">
                 {["Goals", "Progress", "Feedback", "Review", "Development", "Growth"].map((step, i) => (
                   <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-blue-300 transition-colors group cursor-default">
                     <div className="size-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shadow-inner group-hover:bg-blue-700 group-hover:text-white transition-colors">{i+1}</div>
                     <span className="text-lg font-semibold text-slate-800">{step}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* HR Connected to Business */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              HR doesn't operate in isolation. <br/>
              <span className="text-emerald-600">Neither should your HRMS.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-16">
              Because Hivenox HRMS lives on the wider HIVENOX platform, people information can flow automatically into the parts of the business that depend on it.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-left hover:shadow-lg transition-shadow">
                <div className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-2">HRMS → Operations</div>
                <p className="text-slate-600">New hires update operations capacity planning automatically.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-left hover:shadow-lg transition-shadow">
                <div className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-2">HRMS → Finance</div>
                <p className="text-slate-600">People costs become visible through connected financial information.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-left hover:shadow-lg transition-shadow">
                <div className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-2">HRMS → Analytics</div>
                <p className="text-slate-600">Leadership gets an organisation-wide view of workforce information.</p>
              </div>
            </div>

            <p className="text-2xl font-bold text-slate-800 bg-white py-4 px-8 rounded-full border border-slate-200 inline-block shadow-sm">
              Hire once. Connect everywhere.
            </p>
            <div className="mt-8 flex justify-center gap-4">
               <a href="/contact" className="text-sm font-semibold text-blue-700 bg-white border border-blue-200 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">Discuss Integrations</a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. AI RECRUITER & 10. ONE RECORD
          ========================================================================= */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* AI Recruiter */}
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="relative z-10">
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-900/50 border border-blue-500/30 px-3 py-1 rounded-full">
                  AI-Powered Recruitment
                </span>
                <h3 className="text-3xl font-bold mb-4">From candidate to employee without retyping a thing.</h3>
                <p className="text-slate-300 mb-8">
                  Hivenox AI Recruiter can source, screen and assess candidates before passing a successful hire directly into Hivenox HRMS.
                </p>

                <div className="space-y-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                  <div className="flex items-center gap-3"><Users className="text-blue-400"/> Candidate</div>
                  <div className="pl-4 border-l-2 border-slate-600 ml-2 text-sm text-slate-400 py-2">Sources + screens + assesses</div>
                  <div className="flex items-center gap-3"><Sparkles className="text-emerald-400"/> AI Recruiter</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500"/> Successful Hire</div>
                  <div className="pl-4 border-l-2 border-slate-600 ml-2 text-sm text-slate-400 py-2">Onboarding begins</div>
                  <div className="flex items-center gap-3"><Building2 className="text-blue-400"/> Hivenox HRMS</div>
                </div>

                <p className="mt-6 text-lg font-semibold text-emerald-400">No forms re-typed. No details lost.</p>
                <div className="mt-8">
                  <a href="/book" className="text-sm font-semibold text-slate-900 bg-white px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">See AI Recruiter</a>
                </div>
              </div>
            </div>

            {/* One Employee Record */}
            <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-200">
               <h3 className="text-3xl font-bold text-slate-900 mb-4">One piece of people data can power the whole business.</h3>
               <p className="text-slate-600 mb-8">
                 When a new employee is added to HRMS, the record triggers automatic updates across your enterprise.
               </p>

               <div className="space-y-3">
                 <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                   <span className="font-bold text-blue-700">HRMS</span>
                   <span className="text-sm text-slate-500">Employee record created</span>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                   <span className="font-bold text-emerald-700">Payroll</span>
                   <span className="text-sm text-slate-500">Compensation available</span>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                   <span className="font-bold text-amber-700">Operations</span>
                   <span className="text-sm text-slate-500">Capacity planning updates</span>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                   <span className="font-bold text-purple-700">Finance</span>
                   <span className="text-sm text-slate-500">People costs become visible</span>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                   <span className="font-bold text-indigo-700">Analytics</span>
                   <span className="text-sm text-slate-500">Leadership dashboards update</span>
                 </div>
               </div>

               <p className="mt-8 font-semibold text-slate-800 border-l-4 border-blue-600 pl-4">
                 HR data should move with the employee — not wait for someone to move it.
               </p>
               <div className="mt-8 flex gap-4">
                  <a href="/contact" className="text-sm font-semibold text-blue-700 bg-white border border-blue-200 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">Contact Expert</a>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          11. HRMS FEATURES
          ========================================================================= */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Everything your people team needs.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "Employee Records", desc: "Keep employee info organised in one connected system." },
              { title: "Onboarding", desc: "Guide new hires through a structured onboarding process." },
              { title: "Attendance", desc: "Track workforce attendance without manual chasing." },
              { title: "Leave Management", desc: "Manage requests, approvals and visibility." },
              { title: "Payroll", desc: "Run accurate, timely payroll connected to employee data." },
              { title: "Performance", desc: "Turn reviews and development into a continuous process." },
              { title: "People Lifecycle", desc: "Manage the complete journey from hire to retire." },
              { title: "Capacity Planning", desc: "Let new hires automatically inform operational capacity." },
              { title: "Finance Connection", desc: "Connect workforce information with financial visibility." },
              { title: "Analytics", desc: "Give leadership a connected view of the organisation." },
              { title: "AI Recruiter Integration", desc: "Move successful candidates directly into onboarding." },
              { title: "Bilingual", desc: "Support Arabic and English across the platform." }
            ].map((feat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all group">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <a href="/book" className="text-sm font-semibold text-white bg-blue-700 px-8 py-4 rounded-full hover:bg-blue-800 transition-colors shadow-lg">Explore All Features in a Demo</a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12 & 13. MANAGERS & EMPLOYEES
          ========================================================================= */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          
          {/* Managers */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
               <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
                 Managers stop chasing forms and start supporting their teams.
               </h2>
               <p className="text-lg text-slate-600 mb-8">
                 HRMS should remove administrative friction from managers' days.
               </p>
               <div className="space-y-4 mb-8">
                 {[
                   { q: "Who's joining?", a: "See upcoming hires." },
                   { q: "Who's available?", a: "Understand attendance and leave." },
                   { q: "Who's performing?", a: "Track performance and development." },
                   { q: "What needs approval?", a: "Handle requests without chasing email threads." },
                   { q: "What's changing?", a: "See relevant workforce info connected to the business." }
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                     <span className="font-bold text-slate-900 sm:w-1/3">{item.q}</span>
                     <span className="text-slate-600">{item.a}</span>
                   </div>
                 ))}
               </div>
               <p className="text-xl font-bold text-blue-700">Less administration. Better management.</p>
               <div className="mt-6 flex gap-4">
                  <a href="/book" className="text-sm font-semibold text-white bg-blue-700 px-6 py-3 rounded-full hover:bg-blue-800 transition-colors">Book a Demo</a>
               </div>
            </div>
            <div className="relative">
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Managers collaborating" className="rounded-[2.5rem] shadow-xl border border-slate-200 w-full object-cover h-[500px]" />
            </div>
          </div>

          {/* Employees */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute inset-0 bg-emerald-500 rounded-[2.5rem] -rotate-3 opacity-10"></div>
               <div className="bg-slate-900 p-10 rounded-[2.5rem] shadow-xl relative z-10 text-white h-full flex flex-col justify-center">
                 <h3 className="text-2xl font-bold mb-8 text-emerald-400">Employee Experience</h3>
                 <ul className="space-y-6">
                   <li className="flex gap-4"><CheckCircle2 className="text-blue-400 shrink-0"/> <div><strong className="block text-lg">Onboarding</strong> <span className="text-slate-400">Know what happens next.</span></div></li>
                   <li className="flex gap-4"><CheckCircle2 className="text-blue-400 shrink-0"/> <div><strong className="block text-lg">Attendance</strong> <span className="text-slate-400">Simple, visible records.</span></div></li>
                   <li className="flex gap-4"><CheckCircle2 className="text-blue-400 shrink-0"/> <div><strong className="block text-lg">Leave</strong> <span className="text-slate-400">Request and track leave clearly.</span></div></li>
                   <li className="flex gap-4"><CheckCircle2 className="text-blue-400 shrink-0"/> <div><strong className="block text-lg">Payroll</strong> <span className="text-slate-400">Access reliable payslip information.</span></div></li>
                   <li className="flex gap-4"><CheckCircle2 className="text-blue-400 shrink-0"/> <div><strong className="block text-lg">Performance</strong> <span className="text-slate-400">Understand goals and development.</span></div></li>
                 </ul>
               </div>
            </div>
            <div className="order-1 lg:order-2">
               <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
                 The basics just work — so your people feel looked after.
               </h2>
               <p className="text-lg text-slate-600 mb-8">
                 Employees shouldn't need to understand your internal HR processes to get simple things done.
               </p>
               <p className="text-2xl font-bold text-emerald-600 border-l-4 border-emerald-500 pl-4 mb-8">
                 A calmer HR experience for everyone.
               </p>
               <div className="flex gap-4">
                  <a href="/contact" className="text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors">Talk to Us</a>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          14 & 15. BILINGUAL / WHY HIVENOX
          ========================================================================= */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          
          {/* Bilingual / SEO Geo */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-[3rem] p-10 md:p-16 text-white mb-24 shadow-2xl relative overflow-hidden">
            <Globe className="absolute -right-20 -bottom-20 w-96 h-96 text-white opacity-5" />
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">People operations in the language your teams use.</h2>
              <p className="text-lg text-blue-100 mb-10">
                Hivenox is built for organisations operating across <strong>Australia, UAE, and Saudi Arabia</strong>, with Arabic + English as part of the platform's foundation natively built in.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2.5 rounded-full font-semibold">Arabic + English</span>
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2.5 rounded-full font-semibold">RTL-ready</span>
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2.5 rounded-full font-semibold">Regional payroll awareness</span>
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2.5 rounded-full font-semibold">Bilingual people operations</span>
              </div>
            </div>
          </div>

          {/* Why Hivenox */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Turn HR from firefighting into culture-building.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Hire-to-Retire in One Place", desc: "Onboarding, attendance, leave, payroll and performance are unified.", icon: Layers },
              { title: "Payroll That Just Works", desc: "Accurate, timely and aware of local requirements.", icon: Calculator },
              { title: "Continuous, Not Annual", desc: "Performance and development remain visible throughout the year.", icon: TrendingUp },
              { title: "Connected to the Business", desc: "People information flows into capacity planning, finance and analytics.", icon: Network }
            ].map((diff, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 text-center hover:shadow-lg transition-all group">
                <div className="mx-auto size-16 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <diff.icon className="size-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{diff.title}</h3>
                <p className="text-slate-600">{diff.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a href="/book" className="text-sm font-semibold text-white bg-blue-700 px-8 py-4 rounded-full hover:bg-blue-800 transition-colors shadow-lg">Experience Hivenox HRMS</a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          16. WHO IS IT FOR & 17. HRMS + ERP
          ========================================================================= */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          
          {/* Who is it for */}
          <div className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-12 text-center">
              Built for businesses that take their people seriously.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                { title: "Growing Businesses", desc: "Build professional people operations without unnecessary complexity." },
                { title: "Established Companies", desc: "Connect HR with finance, operations and leadership reporting." },
                { title: "Multi-Location", desc: "Manage people consistently across locations and teams." },
                { title: "Regional Businesses", desc: "Operate with Arabic + English and local-market awareness." },
                { title: "Growing Teams", desc: "Create a people experience that scales with the company." }
              ].map((card, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-400 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center flex justify-center gap-4">
               <a href="/contact" className="text-sm font-semibold text-blue-700 bg-white border border-blue-200 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">Speak to Sales</a>
            </div>
          </div>

          {/* HRMS + ERP */}
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white shadow-xl max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Your people are part of the business. Your HRMS should be too.</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12">
              Hivenox HRMS isn't a separate HR island. It is one connected module inside the wider Hivenox business platform.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-12">
              <div className="bg-blue-900/50 border border-blue-500/50 px-6 py-4 rounded-2xl flex flex-col items-center min-w-[140px]">
                <Users className="size-6 text-blue-400 mb-2" />
                <span className="font-bold">HRMS</span>
                <span className="text-xs text-slate-400">People</span>
              </div>
              <ChevronRight className="text-slate-600 hidden md:block" />
              <div className="bg-emerald-900/50 border border-emerald-500/50 px-6 py-4 rounded-2xl flex flex-col items-center min-w-[140px]">
                <Zap className="size-6 text-emerald-400 mb-2" />
                <span className="font-bold">Operations</span>
                <span className="text-xs text-slate-400">Capacity</span>
              </div>
              <ChevronRight className="text-slate-600 hidden md:block" />
              <div className="bg-amber-900/50 border border-amber-500/50 px-6 py-4 rounded-2xl flex flex-col items-center min-w-[140px]">
                <Calculator className="size-6 text-amber-400 mb-2" />
                <span className="font-bold">Finance</span>
                <span className="text-xs text-slate-400">Costs</span>
              </div>
              <ChevronRight className="text-slate-600 hidden md:block" />
              <div className="bg-purple-900/50 border border-purple-500/50 px-6 py-4 rounded-2xl flex flex-col items-center min-w-[140px]">
                <PieChart className="size-6 text-purple-400 mb-2" />
                <span className="font-bold">Analytics</span>
                <span className="text-xs text-slate-400">Visibility</span>
              </div>
            </div>

            <p className="text-2xl font-bold text-emerald-400">
              One company. One people system. One shared truth.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          18. FAQ
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "What does Hivenox HRMS cover?", a: "The HRMS covers the people lifecycle from onboarding through attendance, leave, payroll and performance." },
              { q: "Does HRMS connect with payroll?", a: "Yes. Payroll is a core part of the HRMS and is connected to employee information and the wider business platform." },
              { q: "Can HRMS connect with finance?", a: "Yes. Employee costs become visible in finance through the connected platform automatically." },
              { q: "Does HRMS connect with operations?", a: "Yes. New hires can flow automatically into operations capacity planning." },
              { q: "Can HRMS connect with AI Recruiter?", a: "Yes. A successful candidate can flow directly from AI Recruiter into HRMS onboarding without retyping information." },
              { q: "Does Hivenox HRMS support Arabic?", a: "Yes. HIVENOX is positioned as a bilingual Arabic + English platform natively." },
              { q: "Is payroll compliant with every country's laws?", a: "Payroll is aware of local rules across our core markets (Australia, UAE, Saudi Arabia). For specific statutory compliance per country, consult with our regional experts." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-start gap-3">
                  <MessageSquare className="size-5 text-blue-600 shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-slate-600 pl-8">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center flex justify-center gap-4">
             <a href="/contact" className="text-sm font-semibold text-blue-700 bg-white border border-blue-200 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">Ask another question</a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          19. FINAL CTA
          ========================================================================= */}
      <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-[90rem]">
          <div className="relative overflow-hidden rounded-[3rem] bg-blue-700 px-6 py-20 sm:px-12 sm:py-24 text-center shadow-2xl group">
            
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-700/80"></div>
            
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-emerald-300 bg-blue-900/50 px-4 py-1.5 rounded-full border border-blue-500/30">
                PEOPLE OPERATIONS, DONE RIGHT
              </span>
              <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Give your people the well-run home they deserve.
              </h2>
              <p className="mb-10 text-xl text-blue-100 max-w-2xl mx-auto">
                One transparent, connected system for onboarding, attendance, leave, payroll and performance.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/book" className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-bold text-blue-800 transition-all hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1">
                  Book a Demo
                  <ArrowRight className="ml-2 size-5" />
                </a>
                <a href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-blue-400/30 bg-transparent px-8 text-lg font-semibold text-white transition-colors hover:border-white hover:bg-white/10">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}