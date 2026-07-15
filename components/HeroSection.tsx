"use client";

import { useRef, useEffect, useState } from "react";
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
  Boxes,
  Bot,
  Layers,
  Globe2,
  ArrowRight,
  PlayCircle,
  type LucideIcon,
} from "lucide-react";

type Tile = {
  label: string;
  icon: LucideIcon;
  top: string;
  left: string;
  size: number;
  depth: number;
  rotate: number;
  duration: number;
  highlight?: boolean;
  delay: number;
};

// Scattered tiles with staggered entrance delays
const tiles: Tile[] = [
  { label: "CRM", icon: Users, top: "8%", left: "8%", size: 64, depth: 0.5, rotate: -7, duration: 5.4, delay: 0.1 },
  { label: "HR", icon: UserCog, top: "32%", left: "4%", size: 56, depth: 0.75, rotate: 6, duration: 6.6, delay: 0.3 },
  { label: "Inventory", icon: Package, top: "58%", left: "9%", size: 60, depth: 0.4, rotate: -5, duration: 5.9, delay: 0.5 },
  { label: "ERP", icon: Boxes, top: "82%", left: "5%", size: 52, depth: 0.85, rotate: 8, duration: 4.9, delay: 0.7 },

  { label: "Finance", icon: Wallet, top: "12%", left: "90%", size: 62, depth: 0.6, rotate: 5, duration: 6.1, delay: 0.2 },
  { label: "Support", icon: Headset, top: "36%", left: "95%", size: 54, depth: 0.9, rotate: -8, duration: 5.1, delay: 0.4 },
  { label: "Analytics", icon: BarChart3, top: "62%", left: "89%", size: 68, depth: 0.35, rotate: 7, duration: 7.2, delay: 0.6 },
  {
    label: "AI Workers",
    icon: Bot,
    top: "85%",
    left: "92%",
    size: 84,
    depth: 0.55,
    rotate: -4,
    duration: 6,
    highlight: true,
    delay: 0.8,
  },
];

const stats = [
  { icon: Layers, label: "6 modules, 1 platform" },
  { icon: Bot, label: "AI Workers run 24/7" },
  { icon: Globe2, label: "Arabic & English ready" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 15, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 15, mass: 0.8 });

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
      className="relative isolate overflow-hidden bg-[#F4F7FB] px-6 py-28 sm:px-8 lg:px-12 lg:py-40 flex items-center justify-center min-h-[95vh]"
    >
      {/* 1. Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[10%] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]" />
        <div className="absolute bottom-0 right-[15%] h-[500px] w-[500px] rounded-full bg-indigo-500/[0.06] blur-[100px]" />
      </div>

      {/* 2. Neural Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_40%,transparent_100%)]">
        <svg className="absolute inset-0 h-full w-full opacity-60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-net" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Primary Grid Lines */}
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(37, 99, 235, 0.12)" strokeWidth="1" />
              {/* Diagonal Neural Connections */}
              <path d="M 0 0 L 100 100 M 100 0 L 0 100" fill="none" stroke="rgba(37, 99, 235, 0.08)" strokeWidth="0.5" />
              {/* Data Nodes */}
              <circle cx="100" cy="100" r="2.5" fill="rgba(37, 99, 235, 0.3)" />
              <circle cx="50" cy="50" r="3" fill="rgba(37, 99, 235, 0.4)" />
              <circle cx="0" cy="100" r="2.5" fill="rgba(37, 99, 235, 0.3)" />
              <circle cx="100" cy="0" r="2.5" fill="rgba(37, 99, 235, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-net)" />
        </svg>
      </div>

      {/* 3. Scattered, Cursor-Reactive Floating Tiles */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        {isMounted && tiles.map((tile) => (
          <FloatingTile
            key={tile.label}
            tile={tile}
            mouseX={springX}
            mouseY={springY}
            disabled={!!shouldReduceMotion}
          />
        ))}
      </div>

      {/* 4. Main Foreground Content */}
      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/60 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-700 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          One platform · Every department
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[3.5rem] font-extrabold leading-[1.05] tracking-tight text-[#0B1220] sm:text-7xl lg:text-[6rem]"
        >
          Run your entire business
          <br className="hidden sm:block" />{" "}
          <span className="animate-gradient bg-gradient-to-r from-blue-700 via-indigo-500 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent">
            on one intelligent platform.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-2xl text-[1.15rem] leading-relaxed text-slate-600 sm:text-[1.25rem]"
        >
          Replace disconnected software with a connected ecosystem of ERP,
          CRM, Finance, HR, and Analytics — plus autonomous AI Workers that
          actually do the work.
        </motion.p>

        {/* Feature Chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {stats.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-blue-900/[0.08] bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-white"
            >
              <Icon className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button className="group relative inline-flex items-center gap-2 rounded-full bg-blue-600 px-9 py-4 text-base font-bold text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.8)] transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_60px_-15px_rgba(37,99,235,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            Start free today
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md px-9 py-4 text-base font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            <PlayCircle className="h-5 w-5 text-blue-600" />
            Book a demo
          </button>
        </motion.div>

        {/* Footer / Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4 border-t border-blue-900/5 pt-8"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
            Trusted across
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              🇦🇺 Australia
            </span>
            <span className="h-1 w-1 rounded-full bg-blue-300" />
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              🇦🇪 United Arab Emirates
            </span>
            <span className="h-1 w-1 rounded-full bg-blue-300" />
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              🇸🇦 Saudi Arabia
            </span>
          </div>
        </motion.div>
      </div>

      {/* Global styles for the text gradient animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}} />
    </section>
  );
}

function FloatingTile({
  tile,
  mouseX,
  mouseY,
  disabled,
}: {
  tile: Tile;
  mouseX: ReturnType<typeof useSpring>;
  mouseY: ReturnType<typeof useSpring>;
  disabled: boolean;
}) {
  const range = 40 * tile.depth;
  const x = useTransform(mouseX, [-0.5, 0.5], [-range, range]);
  const y = useTransform(mouseY, [-0.5, 0.5], [-range, range]);
  const Icon = tile.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: tile.delay, 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }}
      style={{
        top: tile.top,
        left: tile.left,
        x: disabled ? 0 : x,
        y: disabled ? 0 : y,
      }}
      className="absolute pointer-events-auto"
    >
      <motion.div
        whileHover={{ scale: 1.1, zIndex: 50 }}
        animate={
          disabled
            ? undefined
            : {
                y: [0, -12, 0],
                rotate: [tile.rotate - 2, tile.rotate + 2, tile.rotate - 2],
              }
        }
        transition={{
          y: { duration: tile.duration, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: tile.duration * 1.2, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ width: tile.size, height: tile.size }}
        className={`relative flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-2xl border backdrop-blur-xl ${
          tile.highlight
            ? "border-blue-400/60 bg-gradient-to-br from-white/90 to-blue-50/90 shadow-[0_12px_40px_-10px_rgba(37,99,235,0.4)]"
            : "border-white/60 bg-white/70 shadow-[0_8px_30px_-8px_rgba(11,18,32,0.08)]"
        }`}
      >
        {/* Glow behind the icon for highlight tile */}
        {tile.highlight && (
          <div className="absolute inset-0 z-0 rounded-2xl bg-blue-500/10 blur-md" />
        )}

        {/* Live Indicator on Highlight */}
        {tile.highlight && (
          <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 z-20">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-blue-600 border-2 border-white" />
          </span>
        )}

        <Icon
          className={`relative z-10 h-6 w-6 ${
            tile.highlight ? "text-blue-700 drop-shadow-md" : "text-slate-600"
          }`}
          strokeWidth={1.75}
        />
        
        {tile.highlight && (
          <span className="relative z-10 text-[9px] font-black uppercase tracking-widest text-blue-800">
            {tile.label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}