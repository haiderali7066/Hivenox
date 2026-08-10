"use client";

import React from "react";
import { 
  Bot, Clock, Globe2, CheckCircle2, ArrowRight, 
  Users, Database, Zap, Sparkles, 
  ChevronRight, Workflow, UserCheck, MapPin,
  Target, FileSearch, Briefcase, FileText,
  UserPlus
} from "lucide-react";

// Reusable CTA Component to ensure consistent presence across sections
const SectionCTAs = ({ 
  primaryText = "Book a Demo", 
  secondaryText = "Start Free", 
  lightBg = true,
  centered = false
}: { 
  primaryText?: string; 
  secondaryText?: string;
  lightBg?: boolean;
  centered?: boolean;
}) => (
  <div className={`mt-10 flex flex-wrap gap-4 w-full ${centered ? 'justify-center' : 'justify-start'}`}>
    <a 
      href="/book" 
      className={`group flex-1 sm:flex-none inline-flex h-12 md:h-14 items-center justify-center rounded-full px-8 text-base md:text-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        lightBg 
          ? "bg-blue-700 text-white hover:bg-blue-800 hover:shadow-blue-700/20" 
          : "bg-white text-blue-700 hover:bg-slate-50 hover:shadow-white/10"
      }`}
    >
      {primaryText}
      <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
    </a>
    <a 
      href="/contact" 
      className={`group flex-1 sm:flex-none inline-flex h-12 md:h-14 items-center justify-center rounded-full border-2 px-8 text-base md:text-lg font-medium transition-all duration-300 hover:-translate-y-1 ${
        lightBg 
          ? "border-slate-200 bg-white text-slate-700 hover:border-blue-700 hover:text-blue-700 hover:bg-slate-50" 
          : "border-blue-400 bg-transparent text-white hover:bg-blue-600 hover:border-blue-600"
      }`}
    >
      {secondaryText}
    </a>
  </div>
);

export default function HivenoxAIRecruiterPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Decorative Gradients (Purple used sparingly as a touch) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="mx-auto max-w-[90rem] px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-bold uppercase tracking-widest text-blue-700 shadow-sm transition-transform hover:scale-105">
                <Sparkles className="size-4 text-blue-700" />
                AI WORKFORCE · RECRUITMENT
              </div>
              
              <h1 className="mb-6 text-5xl font-light tracking-tight text-slate-900 lg:text-7xl leading-[1.1]">
                Your recruiting team just got a <br />
                <span className="font-semibold text-blue-700">tireless new member.</span>
              </h1>
              
              <p className="mb-6 max-w-2xl text-xl font-light leading-relaxed text-slate-600">
                Hivenox AI Recruiter sources, screens and assesses candidates <span className="font-medium text-slate-800">24/7</span> — then moves successful hires directly into Hivenox HRMS for onboarding. Spend less time sorting CVs and more time meeting the people who can move your business forward.
              </p>

              {/* SEO / Geo Optimization Banner */}
              <div className="flex items-start gap-3 mb-10 text-sm font-medium text-slate-500 bg-white/80 py-3 px-5 rounded-2xl border border-slate-200/60 shadow-sm w-full max-w-2xl transition-all hover:border-blue-300">
                 <MapPin className="size-5 text-blue-700 shrink-0 mt-0.5" />
                 <p>Powering enterprise talent acquisition globally — from the <strong>UAE and Saudi Arabia</strong> to <strong>Australia</strong>, supported by our technology hub in <strong>Lahore, Pakistan</strong>.</p>
              </div>

              {/* CTAs */}
              <SectionCTAs lightBg={true} centered={false} />

              {/* Trust Points */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                {[
                  "24/7 recruitment", 
                  "Candidate sourcing", 
                  "AI screening", 
                  "Candidate assessment",
                  "Direct HRMS onboarding"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 transition-colors hover:text-blue-700 cursor-default">
                    <CheckCircle2 className="size-4 text-blue-700" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative w-full h-[35rem] rounded-[3rem] overflow-hidden shadow-2xl group border-[8px] border-white">
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2850&auto=format&fit=crop" 
                alt="Modern AI Recruitment Team" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. THE PROBLEM (Blue-700 Background)
            ========================================================================= */}
        <section className="bg-blue-700 py-24 relative overflow-hidden rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-2xl shadow-blue-900/20">
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-blue-600 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
          {/* Subtle Purple Touch */}
          <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="mx-auto max-w-[85rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                Your recruiters shouldn't spend their best hours <br/>
                <span className="font-semibold text-blue-200">sorting applications.</span>
              </h2>
              <p className="text-xl font-light text-blue-100 mb-8">
                A role opens. Applications start arriving. CVs need reviewing. Candidates need screening. Assessments need coordinating. And the hiring team still needs to make the final decision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { title: "Too Many Applications", desc: "Recruiters can spend hours reviewing candidates who aren't a fit.", icon: Users },
                { title: "Manual Screening", desc: "Initial candidate evaluation consumes valuable recruitment time.", icon: FileSearch },
                { title: "Slow First Response", desc: "Good candidates can move on while teams are still processing applications.", icon: Clock },
                { title: "Disconnected Hiring", desc: "Once selected, info often has to be entered again into HR systems.", icon: Database }
              ].map((pain, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-blue-800/60 border border-blue-500/50 backdrop-blur-md transition-all duration-300 hover:bg-blue-600/50 hover:-translate-y-2 hover:shadow-xl">
                  <div className="size-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6">
                    <pain.icon className="size-6 text-purple-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{pain.title}</h3>
                  <p className="text-base font-light text-blue-100">{pain.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-2xl font-medium text-white text-center">
                Recruiters should spend more time deciding who to hire — not sorting through everything before that decision.
              </p>
              <SectionCTAs lightBg={false} centered={true} primaryText="Automate Screening" secondaryText="Talk to Sales" />
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. THE FLOW (White Background)
            ========================================================================= */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                From sourcing to shortlist — <br/>
                <span className="font-semibold text-blue-700">without the repetitive work.</span>
              </h2>
              <p className="text-xl font-light text-slate-600 mb-8">
                Hivenox AI Recruiter handles the early stages of recruitment so your team can focus on the candidates who deserve their attention.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-6 py-2 text-base font-bold text-blue-700">
                <Zap className="size-5" /> AI handles the first pass. Your team makes the hiring decision.
              </div>
            </div>

            {/* Visual Flow Container */}
            <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
              {[
                { step: "Role Opens", icon: Briefcase },
                { step: "AI Source", icon: Globe2 },
                { step: "Screen", icon: FileSearch },
                { step: "Assess", icon: Target },
                { step: "Shortlist", icon: UserCheck },
                { step: "Human Interview", icon: Users }
              ].map((item, i, arr) => (
                <React.Fragment key={i}>
                  <div className="group flex flex-col items-center z-10 w-full md:w-auto">
                    <div className="size-16 md:size-20 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:border-blue-700 group-hover:bg-blue-700 group-hover:scale-110 group-hover:shadow-lg">
                      <item.icon className="size-7 md:size-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="mt-4 text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors text-center w-24">
                      {item.step}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden md:block h-0.5 flex-1 bg-slate-200 -mt-8">
                      <div className="h-full bg-blue-700 w-0 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  )}
                  {i < arr.length - 1 && (
                    <ChevronRight className="md:hidden size-8 text-slate-300 my-2" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Feature Cards below Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                {[
                  { title: "Source", desc: "Find relevant candidates for open roles." },
                  { title: "Screen", desc: "Evaluate candidates against the role requirements." },
                  { title: "Assess", desc: "Help identify candidates worth moving forward." },
                  { title: "Shortlist", desc: "Surface stronger candidates for your recruitment team." }
                ].map((feat, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-blue-700 mb-2">{feat.title}</h4>
                    <p className="text-sm text-slate-600">{feat.desc}</p>
                  </div>
                ))}
            </div>

            <SectionCTAs lightBg={true} centered={true} />
          </div>
        </section>

        {/* =========================================================================
            4. AI SCREENING AT SCALE (Slate Background + UI Mockup)
            ========================================================================= */}
        <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Review more candidates without <br />
                  <span className="font-semibold text-blue-700">reviewing every CV manually.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8 leading-relaxed">
                  As applications grow, manual screening becomes one of the biggest bottlenecks in recruitment. Hivenox AI Recruiter handles the repetitive first-stage screening work, helping your team identify candidates who better match the role requirements.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    { t: "Faster Shortlisting", d: "Reduce the time spent getting from applications to a focused candidate list." },
                    { t: "Consistent First-Stage Review", d: "Apply the same role requirements fairly across all candidates." },
                    { t: "More Recruiter Capacity", d: "Spend more time on interviews and candidate relationships." }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
                      <CheckCircle2 className="size-6 text-blue-700 shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900">{benefit.t}</h4>
                        <p className="text-sm text-slate-600">{benefit.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-lg font-bold text-slate-800 border-l-4 border-blue-700 pl-4 mb-8">
                  Let AI handle volume. Let recruiters handle judgement.
                </p>
                
                <SectionCTAs lightBg={true} centered={false} primaryText="See Screening in Action" />
              </div>

              {/* UI Mockup Graphic */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-700/5 rounded-[3rem] transform -rotate-3 scale-105"></div>
                <div className="relative bg-white border border-slate-200 p-8 rounded-[3rem] shadow-2xl flex flex-col gap-6">
                  
                  {/* Mass Applications Box */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                    <Users className="size-10 text-slate-400 mx-auto mb-2" />
                    <h4 className="font-bold text-slate-900 text-xl">100+ Applications</h4>
                    <p className="text-sm text-slate-500">Raw Candidate Pool</p>
                  </div>

                  <div className="flex justify-center -my-2 relative z-10">
                    <div className="bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center gap-3 animate-pulse">
                      <Bot className="size-6" />
                      <span className="font-bold">AI Screening</span>
                    </div>
                  </div>

                  {/* Filtered Candidates Box */}
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
                    <UserCheck className="size-10 text-blue-700 mx-auto mb-2 relative z-10" />
                    <h4 className="font-bold text-blue-900 text-xl relative z-10">10 Relevant Candidates</h4>
                    <p className="text-sm text-blue-700 relative z-10">Ready for Recruiter Review & Interview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. ASSESSMENT BEFORE INTERVIEW (Image & Text Split)
            ========================================================================= */}
        <section className="py-24 bg-white relative">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
              
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-purple-700/5 rounded-[3rem] transform rotate-2 scale-105 transition-transform duration-500 group-hover:rotate-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2850&auto=format&fit=crop" 
                  alt="Candidate Assessment and Interview" 
                  className="relative z-10 w-full h-[35rem] object-cover rounded-[3rem] shadow-xl border-4 border-white transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-slate-600">
                  <Target className="size-4 text-purple-600" />
                  PRE-INTERVIEW ASSESSMENT
                </div>
                <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-tight">
                  Know more before the <br />
                  <span className="font-semibold text-blue-700">first conversation.</span>
                </h2>
                <p className="text-xl font-light text-slate-600 mb-8 leading-relaxed">
                  Hivenox AI Recruiter can assess candidates before they reach the interview stage, helping your team make the early recruitment process more focused and data-driven.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Identify stronger candidates earlier",
                    "Reduce unnecessary interviews",
                    "Give recruiters more useful candidate context",
                    "Keep the process moving"
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                      <CheckCircle2 className="size-5 text-blue-700 shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-3 text-lg font-bold text-slate-800 mb-10 border-l-4 border-blue-700 pl-4">
                  Better first-stage information leads to better hiring conversations.
                </div>

                <SectionCTAs lightBg={true} centered={false} />
              </div>
              
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. HRMS INTEGRATION (Connected Context)
            ========================================================================= */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-bold uppercase tracking-widest text-blue-700 shadow-sm transition-transform hover:scale-105">
                <Workflow className="size-4 text-blue-700" />
                CONNECTED TO HIVENOX HRMS
              </div>
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                When you find the right person, <br/>
                <span className="font-semibold text-blue-700">don't start the process again.</span>
              </h2>
              <p className="text-xl font-light text-slate-600 mb-8">
                One of the biggest advantages of Hivenox AI Recruiter is what happens after the hiring decision. A successful candidate flows directly into Hivenox HRMS onboarding.
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-200 relative overflow-hidden group mb-12">
               {/* Decor */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply blur-3xl opacity-50 group-hover:bg-purple-50 transition-colors duration-700"></div>

               <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                 
                 {/* AI Recruiter Side */}
                 <div className="flex-1 w-full text-center p-8 bg-slate-50 rounded-3xl border border-slate-200">
                   <Bot className="size-12 text-blue-700 mx-auto mb-4" />
                   <h3 className="text-xl font-bold text-slate-900 mb-2">AI Recruiter</h3>
                   <p className="text-sm text-slate-500 mb-4">Source → Screen → Assess</p>
                   <div className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full text-sm">
                     Successful Candidate
                   </div>
                 </div>

                 {/* Arrow */}
                 <div className="flex-shrink-0 flex flex-col items-center justify-center">
                    <div className="h-12 w-0.5 md:w-16 md:h-0.5 bg-blue-300 relative">
                       <ArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-700 rotate-90 md:rotate-0 size-8 bg-white rounded-full" />
                    </div>
                 </div>

                 {/* HRMS Side */}
                 <div className="flex-1 w-full text-center p-8 bg-blue-700 rounded-3xl text-white shadow-lg">
                   <UserPlus className="size-12 text-blue-200 mx-auto mb-4" />
                   <h3 className="text-xl font-bold mb-2">Hivenox HRMS</h3>
                   <p className="text-sm text-blue-100 mb-4">Onboarding → Employee Record</p>
                   <div className="inline-block bg-white/20 font-semibold px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/30">
                     Payroll + Ops + Analytics
                   </div>
                 </div>

               </div>
               
               <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                 <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                    No retyping. No lost information. No second data-entry process.
                 </p>
               </div>
            </div>

            <SectionCTAs lightBg={true} centered={true} />
          </div>
        </section>

        {/* =========================================================================
            7. AI WORKS. HUMANS HIRE.
            ========================================================================= */}
        <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 my-10 overflow-hidden relative shadow-2xl">
          <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-blue-800 rounded-full blur-[120px] opacity-40"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-purple-600 rounded-full blur-[150px] opacity-20"></div>

          <div className="mx-auto max-w-[85rem] px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                Let AI handle recruitment work. <br />
                <span className="font-semibold text-blue-400">Keep hiring decisions human.</span>
              </h2>
              <p className="text-xl font-light text-slate-300">
                Hivenox AI Recruiter isn't designed to remove recruiters from the process. It's designed to remove the repetitive work around them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
              
              {/* AI Handles */}
              <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-md rounded-[2.5rem] p-10 transition-transform duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700">
                  <div className="size-14 bg-blue-600 rounded-full flex items-center justify-center">
                    <Bot className="size-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold">AI Handles</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    { t: "Sourcing", d: "Finding relevant candidates." },
                    { t: "Screening", d: "Working through initial candidate evaluation." },
                    { t: "Assessment", d: "Gathering useful early-stage signals." },
                    { t: "Candidate Flow", d: "Moving suitable candidates forward." }
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="block font-bold text-blue-300 text-lg mb-1">{item.t}</span>
                      <span className="text-slate-400">{item.d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Humans Handle */}
              <div className="bg-blue-700 border border-blue-500 rounded-[2.5rem] p-10 shadow-2xl shadow-blue-900/50 transition-transform duration-300 hover:-translate-y-2 md:translate-y-6">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-blue-500">
                  <div className="size-14 bg-white rounded-full flex items-center justify-center">
                    <Users className="size-7 text-blue-700" />
                  </div>
                  <h3 className="text-3xl font-semibold">Humans Handle</h3>
                </div>
                <ul className="space-y-8 text-lg font-light text-blue-50">
                  <li>
                    <span className="block font-bold text-white text-xl mb-1">Interviews</span>
                    <span className="text-blue-100">Understand the person behind the application.</span>
                  </li>
                  <li>
                    <span className="block font-bold text-white text-xl mb-1">Culture & Team Fit</span>
                    <span className="text-blue-100">Make the human judgement.</span>
                  </li>
                  <li>
                    <span className="block font-bold text-white text-xl mb-1">Final Decision</span>
                    <span className="text-blue-100">Choose who joins the company.</span>
                  </li>
                </ul>
                <div className="mt-10 bg-blue-800/50 p-6 rounded-2xl border border-blue-600">
                  <p className="text-lg font-semibold text-white text-center">AI handles the volume. Your people make the call.</p>
                </div>
              </div>

            </div>

            <SectionCTAs lightBg={false} centered={true} primaryText="Empower Your Recruiters" />
          </div>
        </section>

        {/* =========================================================================
            8. WHY HIVENOX (Grid)
            ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="mb-6 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
                Recruiting that scales <br/>
                <span className="font-semibold text-blue-700">without scaling the admin.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {[
                { title: "Recruitment That Never Stops", desc: "AI can work continuously rather than being limited to recruiter working hours.", icon: Clock },
                { title: "Screening at Scale", desc: "Process candidate volume without manually reviewing every application first.", icon: FileSearch },
                { title: "Candidate Assessment", desc: "Bring more useful information into the early hiring process.", icon: Target },
                { title: "Direct HRMS Handoff", desc: "Successful candidates move straight into onboarding without re-entering their information.", icon: Workflow }
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-blue-200 group">
                  <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-700 transition-colors">
                    <feature.icon className="size-6 text-blue-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-block px-8 py-4 bg-white rounded-full shadow-md border border-blue-100 text-xl font-bold text-gray-800 mb-8">
                Less screening. <span className="text-blue-700">More hiring.</span>
              </div>
              <SectionCTAs lightBg={true} centered={true} />
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. FINAL CTA (Full Width Blue)
            ========================================================================= */}
        <section className="py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-[90rem]">
            <div className="relative overflow-hidden rounded-[4rem] bg-blue-700 px-8 py-24 sm:px-16 sm:py-32 text-center shadow-2xl group">
              
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[40rem] w-[40rem] rounded-full bg-blue-600 blur-[100px] opacity-60 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[40rem] w-[40rem] rounded-full bg-blue-800 blur-[120px] opacity-60 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
              
              {/* Purple touch for CTA background aesthetic only */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

              <div className="relative z-10 mx-auto max-w-4xl">
                <span className="mb-6 inline-block text-sm font-bold uppercase tracking-widest text-blue-100 bg-blue-900/50 px-6 py-2 rounded-full border border-blue-500/30">
                  AI-POWERED RECRUITMENT
                </span>
                
                <h2 className="mb-8 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                  Find the right people without the endless screening.
                </h2>
                
                <p className="mb-12 text-2xl font-light leading-relaxed text-blue-100 max-w-3xl mx-auto">
                  Source, screen and assess candidates with AI — then move successful hires directly into Hivenox HRMS.
                </p>
                
                <div className="flex justify-center mb-12">
                  <SectionCTAs lightBg={false} centered={true} />
                </div>
                
                <p className="text-lg font-medium text-blue-200 border-t border-blue-500/30 pt-8 mt-8">
                  Let your recruiters spend less time sorting candidates and more time meeting the people who matter.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}