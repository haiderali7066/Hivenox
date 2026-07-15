import { 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight, 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  ChevronDown,
  Building2,
  CheckCircle2,
  Search,
  Layers,
  Rocket
} from "lucide-react";

// FAQ Data
const faqs = [
  {
    question: "Can we start with a single AI worker?",
    answer: "Yes. You can deploy a single AI worker—like the Social Worker or Growth Worker—and add more as you scale. Every module runs on the same shared database, meaning you never have to re-platform."
  },
  {
    question: "Is HIVENOX truly bilingual?",
    answer: "Yes. The platform is written and rendered natively in both Arabic and English. It is RTL-aware, understands Gulf dialects, and operates on both Gregorian and Hijri calendars."
  },
  {
    question: "What is Results-as-a-Service (RaaS)?",
    answer: "With RaaS, we operate the platform for you. Your investment is tied to concrete outcomes—leads generated, tickets resolved, or hours returned—rather than software seats."
  },
  {
    question: "Is the platform compliant in my region?",
    answer: "HIVENOX is VAT/GST-ready and built to handle compliance, tax, and local business regulations across Australia, the United Arab Emirates, and Saudi Arabia."
  }
];

// Global Hubs Data
const hubs = [
  {
    id: "sydney",
    city: "Sydney",
    title: "Global HQ (Australia)",
    address: "33 East Street, Granville, Sydney, NSW 2142",
    phone: "+61 466 558 862",
    email: "info@hivenox.com",
    bgGradient: "from-blue-900/20 to-transparent"
  },
  {
    id: "dubai",
    city: "Dubai",
    title: "MENA Hub (UAE)",
    address: "Dubai Technology Center, Dubai, UAE",
    phone: "+61 466 558 862",
    email: "info@hivenox.com",
    bgGradient: "from-sky-900/20 to-transparent"
  },
  {
    id: "riyadh",
    city: "Riyadh",
    title: "Enterprise Hub (KSA)",
    address: "Riyadh Digital City, Riyadh, KSA",
    phone: "+61 466 558 862",
    email: "info@hivenox.com",
    bgGradient: "from-indigo-900/20 to-transparent"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans overflow-hidden">
      
      {/* 
        PURE CSS ANIMATIONS (SERVER-SIDE)
        We define custom keyframes here to use throughout the page without client-side JS.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-fade-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .animate-glow { animation: pulseGlow 4s ease-in-out infinite; }
      `}} />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[70vh]">
        
        {/* Background CSS Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-glow" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20 opacity-60" />

        <div className="space-y-8 max-w-4xl mx-auto relative z-10">
          <div className="animate-fade-up inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-500/10 text-sm font-bold text-blue-700">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Sydney · Dubai · Riyadh</span>
          </div>
          
          <h1 className="animate-fade-up delay-100 text-6xl md:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            Hire the workforce. <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 bg-clip-text text-transparent">
              Run the platform.
            </span>
          </h1>
          
          <p className="animate-fade-up delay-200 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Remove the silent tax of growth. Whether you need a single AI worker or a complete enterprise foundation, our engineering team is ready to deploy.
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap justify-center gap-4 pt-4">
            <a href="#form" className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#hubs" className="px-8 py-4 rounded-xl bg-white text-slate-900 border border-slate-200 font-bold hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
              View Global Offices
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="border-y border-slate-200 bg-white py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">Engineered for Scale</span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center font-bold text-xl text-slate-300">
            <span className="flex items-center gap-2"><Building2 className="w-6 h-6" /> Enterprise Ready</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-6 h-6" /> SOC2 Compliant</span>
            <span className="flex items-center gap-2"><Globe className="w-6 h-6" /> Native Bilingual</span>
          </div>
        </div>
      </section>

      {/* SECTION: BENTO ADVANTAGES & FORM */}
      <section id="form" className="px-6 lg:px-8 py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start scroll-mt-20">
        
        {/* Left Side: Server-Side CSS Bento Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 animate-fade-up delay-100">
          <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group hover:shadow-blue-900/20 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-700">
              <Zap className="w-32 h-32 text-blue-400" />
            </div>
            
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">The Promise</span>
              <h3 className="text-3xl font-extrabold tracking-tight mt-2 text-white mb-8">One platform instead of ten tabs.</h3>
              
              <div className="space-y-8">
                <div className="flex gap-5 group/item">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-300 shrink-0 group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Zero Silos</h4>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">Your CRM, HR, finance, and inventory share a single database. No syncing required.</p>
                  </div>
                </div>

                <div className="flex gap-5 group/item">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-300 shrink-0 group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors duration-300">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Workers That Execute</h4>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">Dedicated AI agents that prospect, write, schedule, and resolve tickets 24/7.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="mailto:info@hivenox.com" className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <Mail className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="mt-8">
                <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider mb-1">Direct Email</span>
                <span className="text-base font-bold text-slate-900">info@hivenox.com</span>
              </div>
            </a>

            <a href="tel:+61466558862" className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <Phone className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="mt-8">
                <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider mb-1">Global Phone</span>
                <span className="text-base font-bold text-slate-900">+61 466 558 862</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="lg:col-span-7 animate-fade-up delay-200">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Book a Demo</h2>
              <p className="text-slate-600 mt-3 text-lg">
                See exactly what the platform and its workforce will do for your operations. Demos take 30 minutes.
              </p>
            </div>

            {/* Standard HTML Form (Server Side Action Ready) */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold text-slate-700">First Name</label>
                  <input id="firstName" name="firstName" type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold text-slate-700">Last Name</label>
                  <input id="lastName" name="lastName" type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">Work Email</label>
                  <input id="email" name="email" type="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-slate-700">Company Name</label>
                  <input id="company" name="company" type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-bold text-slate-700">What do you want to deploy?</label>
                <div className="relative">
                  <select id="interest" name="interest" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-slate-700 appearance-none cursor-pointer">
                    <option value="">Select an option...</option>
                    <option value="workers">AI Workers (Social, Sales, Support)</option>
                    <option value="erp">HIVENOX ERP Modules</option>
                    <option value="custom">Custom Software Development</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">Current challenges (Optional)</label>
                <textarea id="message" name="message" rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 px-6 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group">
                Request Tailored Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

     {/* SECTION: GLOBAL HUBS */}
{/* SECTION: GLOBAL HUBS - LIGHT */}
<section
  id="hubs"
  className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 md:py-32 scroll-mt-10"
>
  {/* Background Decorations */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-40" />
    <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div className="max-w-3xl mx-auto text-center mb-20">

      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
        Global Presence
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
        Our Operational
        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
          {" "}Hubs
        </span>
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        Engineering, enterprise support, and customer success teams
        strategically located across Australia, UAE, and Saudi Arabia.
      </p>

    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {hubs.map((hub) => (

        <div
          key={hub.id}
          className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-300 hover:shadow-2xl"
        >

          {/* City Badge */}
          <div className="flex items-center justify-between mb-8">

            <span className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
              {hub.city}
            </span>

            <Globe className="h-6 w-6 text-slate-400 group-hover:text-blue-600 transition" />

          </div>

          <h3 className="text-3xl font-bold text-slate-900">
            {hub.title}
          </h3>

          <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
            Regional Office
          </p>

          <div className="my-8 h-px bg-slate-200" />

          {/* Address */}
          <div className="flex gap-4 mb-7">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Office Address
              </p>

              <p className="mt-1 text-slate-700 leading-7">
                {hub.address}
              </p>
            </div>

          </div>

          {/* Phone */}
          <div className="flex gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
              <Phone className="h-6 w-6 text-emerald-600" />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Contact
              </p>

              <a
                href={`tel:${hub.phone}`}
                className="mt-1 block font-semibold text-slate-900 hover:text-blue-600 transition"
              >
                {hub.phone}
              </a>
            </div>

          </div>

          {/* Bottom Accent */}
          <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />

        </div>

      ))}

    </div>

  </div>
</section>



{/* SECTION: ONBOARDING PROCESS */}
<section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black py-24 md:py-32 text-white">

  {/* Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />

    <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
    <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

    {/* Heading */}

    <div className="mx-auto mb-20 max-w-3xl text-center">

      <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        Fast Onboarding
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-black">
        From
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
          {" "}Idea to Go-Live
        </span>
      </h2>

      <p className="mt-6 text-lg text-slate-400">
        Our streamlined onboarding process gets your business operational in
        days—not months.
      </p>

    </div>

    <div className="relative grid gap-10 md:grid-cols-3">

      {/* Connection Line */}
      <div className="absolute left-0 right-0 top-14 hidden h-1 md:block">
        <div className="mx-auto h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 opacity-40" />
      </div>

      {[
        {
          step: "01",
          icon: Search,
          color: "from-blue-500 to-cyan-500",
          title: "Discovery",
          desc: "We evaluate your current workflows, identify bottlenecks, and uncover automation opportunities."
        },
        {
          step: "02",
          icon: Layers,
          color: "from-violet-500 to-fuchsia-500",
          title: "Solution Design + Dev",
          desc: "Our team architects the perfect combination of AI agents and enterprise modules."
        },
        {
          step: "03",
          icon: Rocket,
          color: "from-emerald-500 to-teal-500",
          title: "Deployment",
          desc: "After approval, we configure, train, and launch your intelligent workspace with ongoing support."
        }
      ].map((item, index) => (

        <div
          key={index}
          className="group relative"
        >

          {/* Step Circle */}

          <div className={`mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r ${item.color} shadow-2xl transition duration-500 group-hover:scale-110`}>

            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-slate-900">

              <item.icon className="mb-1 h-7 w-7 text-white" />

              <span className="text-xs font-bold tracking-widest text-slate-400">
                {item.step}
              </span>

            </div>

          </div>

          {/* Card */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-500/40 group-hover:shadow-[0_30px_60px_rgba(59,130,246,0.15)]">

            <h3 className="mb-4 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="leading-8 text-slate-400">
              {item.desc}
            </p>

            {/* Progress Line */}

            <div className={`mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:w-full`} />

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* SECTION: SERVER-SIDE NATIVE ACCORDION FAQ */}
      <section className="py-24 px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-lg">Clear answers for enterprise operations.</p>
        </div>

        <div className="space-y-4 animate-fade-up delay-100">
          {faqs.map((faq, idx) => (
            /* 
              Using native HTML5 <details> and <summary> 
              No React state or client-side JS needed for this accordion!
            */
            <details 
              key={idx} 
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden open:ring-2 open:ring-blue-600/20 open:border-blue-300 transition-all duration-300 shadow-sm"
            >
              <summary className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-lg hover:bg-slate-50 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 shrink-0">
                    <HelpCircle className="w-4 h-4" />
                  </span>
                  {faq.question}
                </span>
                {/* Chevron rotates based on the parent <details> 'open' attribute natively */}
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
              </summary>
              
              {/* Answer Content */}
              <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed ml-12 text-base border-t border-slate-50 mt-2">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
      
    </div>
  );
}