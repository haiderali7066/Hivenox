import { Metadata } from "next";
import { 
  ArrowRight, Calendar, Clock, Search, Mail, 
  Cpu, Layers, TrendingUp, ShieldCheck, Zap, Bot,
  BookOpen, ChevronRight, Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Blog | HIVENOX Intelligent Business Platform",
  description: "Read the latest insights on AI workers, enterprise automation, unified ERP systems, and the future of intelligent business.",
  keywords: [
    "HIVENOX blog", "AI business automation", "ERP insights", "enterprise software trends",
    "AI workers", "business intelligence", "SaaS insights"
  ]
};

// --- DATA STRUCTURES ---

const CATEGORIES = [
  { name: "All Posts", active: true },
  { name: "AI & Automation", active: false },
  { name: "ERP & Strategy", active: false },
  { name: "Engineering", active: false },
  { name: "Company News", active: false }
];

const FEATURED_POST = {
  id: "featured-1",
  title: "The Death of Traditional RPA: How Autonomous AI Workers Are Rewriting Business Logic",
  excerpt: "Robotic Process Automation (RPA) was built for a rigid world. Discover how natively integrated AI Workers are shifting the paradigm from 'following rules' to 'achieving outcomes' across the enterprise.",
  category: "AI & Automation",
  categoryColor: "text-purple-700 bg-purple-100",
  date: "October 12, 2026",
  readTime: "8 min read",
  author: "Sarah Chen",
  role: "VP of AI Research",
  gradient: "from-blue-600 via-indigo-600 to-purple-600",
  icon: Bot
};

const POSTS = [
  {
    id: "post-1",
    title: "The Blueprint for a Unified ERP: Why Disconnected Systems Are Costing You Millions",
    excerpt: "Integrating five different software vendors creates data silos and latency. Here is why the shared-database architecture is the only way forward for growing enterprises.",
    category: "ERP & Strategy",
    categoryColor: "text-blue-700 bg-blue-100",
    date: "October 5, 2026",
    readTime: "6 min read",
    gradient: "from-blue-500 to-cyan-500",
    icon: Layers
  },
  {
    id: "post-2",
    title: "Scaling Customer Support with Native Bilingual AI",
    excerpt: "How HIVENOX Desk leverages real-time translation and native Arabic/English LLMs to deliver culturally aware, instantaneous customer support across all channels.",
    category: "AI & Automation",
    categoryColor: "text-purple-700 bg-purple-100",
    date: "September 28, 2026",
    readTime: "5 min read",
    gradient: "from-fuchsia-500 to-purple-600",
    icon: Sparkles
  },
  {
    id: "post-3",
    title: "Understanding the Real ROI of Intelligent Business Automation",
    excerpt: "Beyond time saved: A deep dive into how automating your revenue operations and procurement can directly increase your gross margins.",
    category: "Engineering",
    categoryColor: "text-emerald-700 bg-emerald-100",
    date: "September 21, 2026",
    readTime: "7 min read",
    gradient: "from-emerald-400 to-teal-500",
    icon: Zap
  },
  {
    id: "post-4",
    title: "Data Security in the Age of Autonomous Agents",
    excerpt: "When AI has access to your live database, security isn't optional. Inside HIVENOX's role-based execution framework and cryptographic audit logs.",
    category: "Engineering",
    categoryColor: "text-emerald-700 bg-emerald-100",
    date: "September 15, 2026",
    readTime: "9 min read",
    gradient: "from-slate-700 to-slate-900",
    icon: ShieldCheck
  },
  {
    id: "post-5",
    title: "Case Study: From 8 Tools to 1 Platform—A SaaS Transformation",
    excerpt: "How a mid-market tech company eliminated 14 integrations, reduced software spend by 40%, and accelerated closing cycles by adopting the complete HIVENOX stack.",
    category: "ERP & Strategy",
    categoryColor: "text-blue-700 bg-blue-100",
    date: "September 02, 2026",
    readTime: "5 min read",
    gradient: "from-orange-400 to-amber-500",
    icon: TrendingUp
  },
  {
    id: "post-6",
    title: "Announcing HIVENOX V2.5: The Autonomous Update",
    excerpt: "We're thrilled to release our biggest update yet, featuring new Voice AI agents, advanced multi-currency handling in Books, and improved workflow builders.",
    category: "Company News",
    categoryColor: "text-indigo-700 bg-indigo-100",
    date: "August 28, 2026",
    readTime: "4 min read",
    gradient: "from-blue-600 to-blue-800",
    icon: Cpu
  }
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* PURE CSS ANIMATIONS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatGlow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.05); }
        }
        .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}} />

      {/* HERO / FEATURED SECTION */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Blue Ambient Glow */}
        <div className="absolute top-[20%] left-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[140px] -z-10" style={{ animation: 'floatGlow 8s ease-in-out infinite' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_20%,#000_70%,transparent_100%)] -z-20 opacity-50" />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-sm font-bold text-blue-700 tracking-wide uppercase mb-6 shadow-sm">
            <BookOpen className="w-4 h-4" />
            <span>Insights & Resources</span>
          </div>
          <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
            The Frontline of <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Business Intelligence.
            </span>
          </h1>
          <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-600 leading-relaxed">
            Expert perspectives on AI workers, unified ERP systems, business automation, and scaling modern enterprises.
          </p>
        </div>

        {/* Featured Post Card */}
        <div className="animate-fade-up delay-300 relative group rounded-[2rem] bg-white border border-slate-200 shadow-2xl shadow-blue-900/5 overflow-hidden flex flex-col lg:flex-row hover:shadow-blue-900/10 transition-all duration-500">
          
          {/* Featured Image Replacement (Abstract CSS Gradient) */}
          <div className={`lg:w-1/2 min-h-[300px] lg:min-h-full bg-gradient-to-br ${FEATURED_POST.gradient} relative overflow-hidden flex items-center justify-center p-12`}>
             <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
             <FEATURED_POST.icon className="w-32 h-32 text-white/90 drop-shadow-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/80 text-sm font-medium z-10">
                <span className="flex items-center gap-2 backdrop-blur-md bg-white/10 px-3 py-1.5 rounded-full border border-white/20"><Calendar className="w-4 h-4" /> {FEATURED_POST.date}</span>
                <span className="flex items-center gap-2 backdrop-blur-md bg-white/10 px-3 py-1.5 rounded-full border border-white/20"><Clock className="w-4 h-4" /> {FEATURED_POST.readTime}</span>
             </div>
          </div>

          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative z-20">
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${FEATURED_POST.categoryColor}`}>
                {FEATURED_POST.category}
              </span>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Featured
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
              <a href={`/blogs/${FEATURED_POST.id}`} className="focus:outline-none">
                {FEATURED_POST.title}
              </a>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {FEATURED_POST.excerpt}
            </p>

            <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm border border-blue-200">
                  SC
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{FEATURED_POST.author}</p>
                  <p className="text-xs text-slate-500 font-medium">{FEATURED_POST.role}</p>
                </div>
              </div>
              <a href={`/blogs/${FEATURED_POST.id}`} className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-y border-slate-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar scroll-smooth">
            {CATEGORIES.map((cat, idx) => (
              <button 
                key={idx} 
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-colors border ${
                  cat.active 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Placeholder */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 font-medium"
            />
          </div>
        </div>
      </section>

      {/* LATEST POSTS GRID */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              <article key={post.id} className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                
                {/* CSS Graphic Thumbnail */}
                <div className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
                  <post.icon className="w-16 h-16 text-white/90 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${post.categoryColor}`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                    <a href={`/blogs/${post.id}`} className="focus:outline-none">
                      {post.title}
                    </a>
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-blue-600 font-bold text-sm hover:bg-slate-50 hover:border-blue-300 transition-colors shadow-sm">
              Load More Articles <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA - Deep Blue Theme */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        {/* Abstract Background Vectors */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-400/30">
            <Mail className="w-8 h-8 text-blue-400" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            Stay Ahead of the Curve
          </h2>
          
          <p className="text-blue-100/80 text-lg mb-10 max-w-2xl mx-auto">
            Get the latest insights on AI workers, enterprise ERPs, and business automation delivered straight to your inbox once a month. No spam, just pure signal.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              required
              placeholder="Enter your work email" 
              className="flex-1 px-5 py-4 rounded-xl bg-blue-900/50 border border-blue-700/50 text-white placeholder:text-blue-300/50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all font-medium"
            />
            <button 
              type="submit" 
              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-blue-400/60 text-xs mt-4 font-medium">
            Join 10,000+ business leaders building the future. Unsubscribe anytime.
          </p>
        </div>
      </section>

    </div>
  );
}