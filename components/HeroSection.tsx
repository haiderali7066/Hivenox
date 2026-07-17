"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Users,
  Package,
  Wallet,
  BarChart3,
  Headset,
  UserCog,
  Bot,
  ArrowRight,
  PlayCircle,
  BookOpen,
  TrendingUp,
  Check,
  Boxes,
  Shield,
  Cloud,
  MessageSquare,
  CheckSquare,
  PieChart,
  Store,
  Hexagon,
  Triangle,
  CircleDashed,
  Command,
  Aperture,
  Box,
  Layers,
  type LucideIcon,
} from "lucide-react";

// --- Data Config ---

type NodeTile = {
  label: string;
  icon: LucideIcon;
  highlight?: boolean;
};

// 1st Orbit (Inner) - Clockwise
const innerRing: NodeTile[] = [
  { label: "CRM", icon: Users, highlight: true },
  { label: "Finance", icon: Wallet },
  { label: "Insights", icon: BarChart3, highlight: true },
  { label: "AI", icon: Bot, highlight: true },
  { label: "Comms", icon: MessageSquare },
  { label: "Security", icon: Shield },
];

// 2nd Orbit (Outer) - Anti-Clockwise
const outerRing: NodeTile[] = [
  { label: "HRMS", icon: UserCog },
  { label: "Books", icon: BookOpen },
  { label: "Desk", icon: Headset },
  { label: "Inventory", icon: Package },
  { label: "Sales", icon: TrendingUp, highlight: true },
  { label: "ERP", icon: Boxes },
  { label: "Cloud", icon: Cloud },
  { label: "Tasks", icon: CheckSquare },
  { label: "Analytics", icon: PieChart },
  { label: "Store", icon: Store },
];

// Marquee Company Logos
const companies = [
  { name: "Vertex Corp", icon: Hexagon },
  { name: "Prism Digital", icon: Triangle },
  { name: "Nexus Global", icon: CircleDashed },
  { name: "Aura Systems", icon: Aperture },
  { name: "Quantum", icon: Box },
  { name: "Elevate UI", icon: Layers },
  { name: "Command", icon: Command },
];

// --- Main Component ---

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Smooth Parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 15, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 15, mass: 0.8 });

  const parallaxX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    if (shouldReduceMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(relX);
    mouseY.set(relY);
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate overflow-hidden bg-[#F8FAFC] flex flex-col justify-between min-h-[100dvh] w-full pt-36 pb-12 px-4 sm:px-6 lg:px-8"
    >
      {/* 1. Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-0 top-[30%] h-[600px] w-[800px] -translate-y-1/2 translate-x-1/4 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-[100px]" />
      </div>

      {/* 2. Neural Grid Background */}
      <div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{ maskImage: "radial-gradient(ellipse at center, transparent 0%, black 100%)", WebkitMaskImage: "radial-gradient(ellipse at center, transparent 0%, black 100%)" }}
      >
        <svg className="absolute inset-0 h-full w-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-net" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-blue-600" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="1" className="fill-blue-600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-net)" />
        </svg>
      </div>

      {/* --- TOP SECTION: 2 Column Layout --- */}
      <div className="relative z-20 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 flex-grow items-center">
        
        {/* LEFT COLUMN: Text and CTA */}
        <div className="flex flex-col items-start text-left xl:pr-12">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-white/60 backdrop-blur-md px-4 py-1.5 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-widest text-blue-700 uppercase">
              Hivenox · Enterprise OS
            </span>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
          >
            One platform to run your{" "}
            <span className="relative whitespace-nowrap block mt-2">
              <span className="absolute -inset-1 block -skew-y-2 bg-blue-600 rounded-lg"></span>
              <span className="relative bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                Entire Business.
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600 sm:text-xl font-normal"
          >
            Hivenox unites your ERP, CRM, HR, finance, and AI workers in a single, bilingual system built for scale in Australia, the UAE, and Saudi Arabia.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link 
              href="/contact"
              className="group w-full sm:w-auto relative flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/contact#form"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              <PlayCircle className="h-4 w-4 text-blue-600 transition-transform group-hover:scale-110" />
              Book a demo
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-slate-500"
          >
            {["No credit card required", "Arabic & English support", "Cancel anytime"].map((text, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 shrink-0">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: 2-Ring Orbital System */}
        {isMounted && !shouldReduceMotion && (
          <div className="relative hidden lg:flex h-[550px] w-full items-center justify-center">
            <motion.div
              style={{ x: parallaxX, y: parallaxY }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* RING 1: Inner Orbit (Clockwise) */}
                <OrbitRing radius={170} duration={35} items={innerRing} reverse={false} />
                
                {/* RING 2: Outer Orbit (Anti-Clockwise) */}
                <OrbitRing radius={290} duration={50} items={outerRing} reverse={true} />
              </div>

              {/* Central Core Element */}
              <div className="absolute z-20 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-blue-200 bg-white/50 backdrop-blur-xl shadow-[0_0_60px_-15px_rgba(37,99,235,0.3)] ring-4 ring-white/40">
                 <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-blue-700 to-sky-400 text-white shadow-inner">
                    <Layers className="h-8 w-8" strokeWidth={1.5} />
                    {/* Glowing pulse behind the core */}
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* --- BOTTOM SECTION: Infinite Scrolling Centered Marquee --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-20 mt-24 xl:mt-32 flex w-full flex-col items-center justify-center"
      >
        <p className="mb-6 text-[13px] font-semibold text-slate-400 uppercase tracking-[0.2em]">
          Trusted by industry leaders
        </p>
        
        {/* Marquee Wrapper with transparent fade edges */}
        <div className="flex w-full max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          {/* Group 1 */}
          <div className="flex shrink-0 animate-marquee items-center justify-around min-w-full gap-12 pr-12">
            {companies.map((company, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                <company.icon className="h-6 w-6" strokeWidth={1.5} />
                <span className="text-xl font-bold tracking-tight font-sans">{company.name}</span>
              </div>
            ))}
          </div>
          {/* Group 2 (Duplicate for seamless loop) */}
          <div aria-hidden="true" className="flex shrink-0 animate-marquee items-center justify-around min-w-full gap-12 pr-12">
            {companies.map((company, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                <company.icon className="h-6 w-6" strokeWidth={1.5} />
                <span className="text-xl font-bold tracking-tight font-sans">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Global CSS for purely CSS-based Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes tile-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}} />
    </section>
  );
}

// ----------------------------------------------------------------------
// ORBITAL ANIMATION COMPONENTS
// ----------------------------------------------------------------------

function OrbitRing({
  radius,
  duration,
  items,
  reverse,
}: {
  radius: number;
  duration: number;
  items: NodeTile[];
  reverse: boolean;
}) {
  const animationName = reverse ? 'orbit-spin-reverse' : 'orbit-spin';
  const counterAnimationName = reverse ? 'orbit-spin' : 'orbit-spin-reverse';

  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-blue-900/20"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
        animation: `${animationName} ${duration}s linear infinite`,
      }}
    >
      {items.map((item, i) => {
        const angle = (i / items.length) * 360;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius + radius;
        const y = Math.sin(rad) * radius + radius;

        return (
          <div
            key={item.label}
            className="absolute"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Counter-rotate to keep tiles upright always */}
            <div style={{ animation: `${counterAnimationName} ${duration}s linear infinite` }}>
              <OrbitalTile item={item} index={i} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function OrbitalTile({ item, index }: { item: NodeTile; index: number }) {
  const Icon = item.icon;
  const floatDuration = 3 + (index % 3);
  const floatDelay = index * 0.5;

  return (
    <div 
      className="group pointer-events-auto relative flex h-[3.25rem] w-[3.25rem] cursor-pointer flex-col items-center justify-center gap-0.5 rounded-2xl border bg-white/80 backdrop-blur-md shadow-sm transition-all hover:scale-110 hover:z-50"
      style={{
        borderColor: item.highlight ? 'rgba(59, 130, 246, 0.4)' : 'rgba(226, 232, 240, 0.8)',
        boxShadow: item.highlight ? '0 8px 24px -6px rgba(59, 130, 246, 0.25)' : '0 4px 12px -4px rgba(0, 0, 0, 0.05)',
        animation: `tile-float ${floatDuration}s ease-in-out ${floatDelay}s infinite`,
      }}
    >
      {item.highlight && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-50/50 to-transparent" />
      )}

      {item.highlight && (
        <span className="absolute -right-1 -top-1 flex h-[10px] w-[10px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex h-[10px] w-[10px] rounded-full border-[1.5px] border-white bg-blue-600" />
        </span>
      )}

      <Icon
        className={`relative z-10 h-4 w-4 transition-colors group-hover:text-blue-600 ${
          item.highlight ? "text-blue-600" : "text-slate-500"
        }`}
        strokeWidth={item.highlight ? 2 : 1.5}
      />
      
      <span
        className={`relative z-10 text-[8px] font-bold uppercase tracking-wider transition-colors group-hover:text-blue-700 ${
          item.highlight ? "text-blue-800" : "text-slate-500"
        }`}
      >
        {item.label}
      </span>
    </div>
  );
}