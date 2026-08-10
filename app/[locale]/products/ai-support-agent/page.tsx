
import React from 'react';
import Link from 'next/link';
import { 
  Bot, 
  Users, 
  Globe2, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Zap, 
  Database,
  Briefcase,
  Layers,
  Headphones,
  ShieldCheck
} from 'lucide-react';

export default function HivenoxAISupportPage() {
  return (
    <main className="w-full overflow-hidden font-sans text-slate-800">
      {/* SEO & Geo Semantic Header (Invisible to user, highly visible to crawlers) */}
      <h1 className="sr-only">
        Hivenox AI Support Agent - 24/7 Automated Customer Service in English and Arabic for MENA and Global Businesses
      </h1>

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-100 opacity-40 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6 border border-blue-100">
                <Bot className="w-4 h-4"/>
                <span>AI WORKFORCE · CUSTOMER SUPPORT</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                Your support team just got a <span className="text-blue-700">tireless</span> new member.
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                Hivenox AI Support Agent resolves routine customer questions 24/7, in Arabic or English, and hands complex issues to your team with the full context intact. Give customers fast answers without asking your team to repeat themselves.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-blue-700 rounded-2xl hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-700/30 hover:-translate-y-1 transition-all duration-300" href="/book">
                  Book a Demo
                </Link>
                <Link className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-blue-700 bg-white border-2 border-blue-700 rounded-2xl hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300" href="/contact">
                  Start Free
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-700">
                {['24/7 support', 'Arabic + English', 'Routine issues automated', 'Human handoff', 'Full customer context'].map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500"/>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-500 rounded-[2.5rem] transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
              <img 
                src="[https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80](https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80)" 
                alt="AI Customer Support Agent Dashboard" 
                className="relative rounded-[2rem] shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2 object-cover aspect-[4/3] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Your customers need answers even when your team is busy.
            </h2>
            <p className="text-lg text-slate-600">
              A customer has a question. Another needs an update. Someone wants to know about an order. Another needs help with an invoice. Your team is already handling conversations, and the queue keeps growing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: "Repetitive Questions", desc: "Your team answers the same types of questions every single day.", icon: MessageSquare },
              { title: "Growing Queue", desc: "More customers means more conversations to manage and track.", icon: Layers },
              { title: "Slow After-Hours", desc: "Customers shouldn't have to wait until the next working day for simple answers.", icon: Clock },
              { title: "Human Time Wasted", desc: "Your best support people spend time on routine issues instead of complex problems.", icon: Users }
            ].map((card, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-700">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-blue-50 rounded-3xl p-8 lg:p-12 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xl font-semibold text-slate-800 text-left">
              Not every support question needs a human. <br className="hidden md:block"/>But every customer deserves an answer.
            </p>
            <Link className="shrink-0 px-8 py-4 bg-blue-700 text-white font-semibold rounded-2xl hover:bg-blue-800 hover:shadow-lg transition-all duration-300" href="/book">
              Solve This Problem
            </Link>
          </div>
        </div>
      </section>

      {/* 3. AI THAT RESOLVES ROUTINE SUPPORT */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="[https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80)" 
                alt="AI resolving customer queries automatically" 
                className="rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-500"
              />
              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600"/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Routine Issue</p>
                    <p className="text-sm text-slate-500">Resolved instantly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                Let AI handle the questions that shouldn't need a human.
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Hivenox AI Support Agent handles routine customer requests automatically, giving your team more time for conversations that genuinely require human judgement.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-700">
                    <Bot className="w-6 h-6"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Understands the request</h4>
                    <p className="text-sm text-slate-500">Order questions, product info, basic assistance</p>
                  </div>
                </div>
                
                <div className="flex gap-4 ml-6 pl-6 border-l-2 border-slate-200 py-2 relative">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-200 border-4 border-white"></div>
                  <div className="flex-1 bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
                    <h4 className="font-semibold text-blue-900">Routine? <span className="text-blue-700">Resolves automatically.</span></h4>
                  </div>
                  <div className="flex-1 bg-slate-100 p-4 rounded-2xl">
                    <h4 className="font-semibold text-slate-700">Complex? <span className="text-slate-900">Hands over to human.</span></h4>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-3xl mb-8 shadow-sm">
                <p className="font-medium text-slate-800 text-center">
                  Routine handled automatically. Complex handled intelligently.
                </p>
              </div>

              <Link className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 group" href="/book">
                See it in action 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HUMAN HANDOFF - IMPACT SECTION */}
      <section className="py-24 bg-blue-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-blue-100 font-medium text-sm mb-6 backdrop-blur-sm">
            <Users className="w-4 h-4"/>
            <span>SEAMLESS TRANSITIONS</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            When humans need to step in, they don't start from zero.
          </h2>
          <p className="text-xl text-blue-100 mb-16 max-w-2xl mx-auto">
            AI shouldn't create another handoff problem. When a conversation needs a human, Hivenox passes the issue forward with the relevant context intact.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
            {[
              "Conversation history preserved",
              "Customer context available",
              "No repeated explanations",
              "Faster human resolution"
            ].map((point, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors duration-300 flex flex-col items-center text-center group">
                <CheckCircle2 className="w-8 h-8 text-purple-300 mb-4 group-hover:scale-110 transition-transform"/>
                <p className="font-semibold">{point}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <p className="text-xl font-medium text-blue-50">
              AI handles the routine. Humans pick up where AI left off.
            </p>
            <Link className="px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300" href="/book">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CONNECTED CONTEXT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              An AI agent that knows the customer context.
            </h2>
            <p className="text-lg text-slate-600">
              Hivenox AI Support Agent operates within the wider Hivenox platform, allowing support interactions to work with relevant business information rather than existing as an isolated chatbot.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-slate-50 rounded-[3rem] p-8 lg:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10">
                {[
                  { title: "CRM", desc: "Customer history", icon: Users },
                  { title: "Inventory", desc: "Orders & products", icon: Briefcase },
                  { title: "Books", desc: "Invoice information", icon: Database },
                  { title: "Desk", desc: "Support conversations", icon: Headphones }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 group text-center">
                    <div className="w-12 h-12 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                ))}
             </div>

             <div className="relative z-10 flex flex-col items-center">
                <div className="w-1 bg-gradient-to-b from-slate-200 to-blue-500 h-16 mb-4 rounded-full"></div>
                <div className="bg-blue-700 text-white p-8 rounded-3xl w-full max-w-2xl text-center shadow-xl shadow-blue-900/20 hover:-translate-y-1 transition-transform duration-300">
                  <Bot className="w-10 h-10 mx-auto text-blue-200 mb-4"/>
                  <h3 className="text-2xl font-bold mb-2">AI Support Agent</h3>
                  <p className="text-blue-100">Uses all available context to intelligently assist the customer. The conversation never exists in isolation.</p>
                </div>
             </div>
          </div>
          
          <div className="mt-12 text-center">
             <Link className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 hover:shadow-lg transition-all duration-300" href="/contact">
               Connect Your Data
             </Link>
          </div>
        </div>
      </section>

      {/* 6. 24/7 CUSTOMER SUPPORT & 7. ARABIC + ENGLISH */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* 24/7 Support Sub-section */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Your support doesn't have to close when the office does.
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Hivenox AI Support Agent continues handling routine customer conversations around the clock. Bilingual, consistent, and always available no matter how busy you get.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: "Always Available", desc: "Help beyond normal hours." },
                    { title: "Consistent", desc: "Routine questions get reliable responses." },
                    { title: "Less Queue Pressure", desc: "Start the day with fewer requests waiting." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-colors border border-transparent hover:border-slate-200">
                      <Zap className="w-6 h-6 text-purple-600 shrink-0"/>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link className="inline-block px-8 py-4 bg-blue-700 text-white font-semibold rounded-2xl hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300 shadow-md" href="/book">
                    Automate Your Nights
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col gap-6">
                <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-blue-900 text-lg flex items-center gap-2"><Globe2 className="w-5 h-5"/> Daytime</span>
                    <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">Human + AI</span>
                  </div>
                  <p className="text-sm text-blue-800 mb-2">✓ Routine requests handled</p>
                  <p className="text-sm text-blue-800">✓ Complex conversations escalated</p>
                </div>
                
                <div className="bg-slate-900 rounded-3xl p-6 shadow-inner text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-lg flex items-center gap-2"><Clock className="w-5 h-5 text-purple-400"/> Nighttime</span>
                    <span className="text-sm font-semibold text-purple-300 bg-purple-900/50 px-3 py-1 rounded-full">AI Only</span>
                  </div>
                  <p className="text-sm text-slate-300 mb-2">✓ Routine requests handled</p>
                  <p className="text-sm text-slate-300">✓ Complex issues queued for the team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arabic + English Sub-section */}
          <div className="bg-blue-700 rounded-[3rem] p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Support customers in the language they prefer.
              </h2>
              <p className="text-xl text-blue-100">
                Designed for bilingual customer interactions. One support system. Two languages. One consistent customer experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 relative z-10 max-w-4xl mx-auto">
              <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                <div className="text-4xl mb-4 text-blue-700 font-bold arabic-font">العربية</div>
                <h3 className="text-xl font-bold mb-2">Arabic</h3>
                <p className="text-slate-600">Handle customer conversations naturally and contextually in Arabic.</p>
              </div>
              
              <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-slate-700 group">
                <div className="text-4xl mb-4 text-purple-400 font-bold">English</div>
                <h3 className="text-xl font-bold mb-2">English</h3>
                <p className="text-slate-400">Support customers in English with the same powerful AI workflow.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. WHY HIVENOX? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-16 max-w-3xl mx-auto">
            Make support calmer for your team — and better for your customers.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16 text-left">
            {[
              { title: "Routine Support, Automated", desc: "Resolve repetitive questions without consuming human support capacity.", icon: Bot },
              { title: "24/7 Availability", desc: "Keep routine support moving beyond normal working hours.", icon: Clock },
              { title: "Humans When It Matters", desc: "Complex issues are handed to your team instead of forcing AI to handle everything.", icon: Users },
              { title: "Context Intact", desc: "Human agents receive the conversation with the relevant context instead of starting over.", icon: ShieldCheck }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-start">
                 <div className="p-4 bg-white rounded-2xl shadow-sm text-blue-700 group-hover:scale-110 transition-transform">
                   <feature.icon className="w-8 h-8" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                   <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                 </div>
              </div>
            ))}
          </div>

          <div className="inline-block px-8 py-4 bg-purple-50 rounded-full border border-purple-100">
            <p className="text-xl font-bold text-purple-900">
              Less repetition. Faster answers. Better support.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-blue-700 rounded-[3rem] p-10 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-purple-900 opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <p className="text-blue-200 font-bold tracking-wider text-sm uppercase mb-6">AI Customer Support</p>
              <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 leading-tight">
                Let AI handle the routine.<br/>Let your team focus on customers.
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                24/7 support in Arabic or English, with intelligent human handoffs when the conversation needs a person.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Link className="px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl text-lg hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" href="/book">
                  Book a Demo
                </Link>
                <Link className="px-8 py-4 bg-transparent border-2 border-blue-200 text-white font-bold rounded-2xl text-lg hover:bg-blue-600/30 hover:border-white hover:-translate-y-1 transition-all duration-300" href="/contact">
                  Start Free
                </Link>
              </div>

              <p className="text-blue-200 font-medium italic">
                Turn every support conversation into an opportunity to build loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}