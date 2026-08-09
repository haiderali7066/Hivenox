"use client";

import React from "react";
import { 
  ArrowRight, Box, BarChart3, MapPin, Package, ArrowRightLeft, 
  ShoppingCart, AlertTriangle, ShieldCheck, Search, Activity, 
  TrendingUp, Truck, ScanLine, FileText, Layers, Network, 
  ChevronRight, CheckCircle2, Clock, DollarSign, RefreshCcw
} from "lucide-react";

export default function HivenoxInventoryPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-hidden">
      
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative bg-blue-700 pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem]">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[30rem] lg:w-[50rem] h-[30rem] lg:h-[50rem] rounded-full bg-blue-600/50 blur-[100px] lg:blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[20rem] lg:w-[40rem] h-[20rem] lg:h-[40rem] rounded-full bg-emerald-500/20 blur-[80px] lg:blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-800/40 px-4 py-2 text-xs lg:text-sm font-semibold uppercase tracking-widest text-blue-100 backdrop-blur-md">
                <Box className="size-4 text-emerald-400" />
                Hivenox ERP • Inventory Management
              </div>
              
              <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Know What You Have. <br />
                Know Where It Is. <br />
                <span className="text-emerald-400">Know When to Reorder.</span>
              </h1>
              
              <p className="mb-8 max-w-2xl text-lg lg:text-xl font-light leading-relaxed text-blue-100">
                Manage inventory across warehouses, locations, products, and channels with real-time stock visibility and intelligent inventory controls.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-blue-50 font-medium text-sm lg:text-base">
                {[
                  "Real-time stock visibility",
                  "Multi-location inventory",
                  "Purchase & supplier management",
                  "Automated stock alerts"
                ].map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-emerald-400 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
                <a href="/book" className="group inline-flex h-14 items-center justify-center rounded-full bg-emerald-500 px-8 text-base lg:text-lg font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1">
                  Book a Demo
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/contact" className="group inline-flex h-14 items-center justify-center rounded-full border-2 border-blue-400 bg-transparent px-8 text-base lg:text-lg font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-1">
                  Explore Hivenox ERP
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[24rem] sm:h-[30rem] lg:h-[36rem] rounded-[2rem] overflow-hidden shadow-2xl group border border-blue-500/30">
              <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2940&auto=format&fit=crop" 
                alt="Modern Warehouse Inventory Management" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Floating UI Element */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <TrendingUp className="size-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Live Inventory Value</p>
                    <p className="text-xs text-slate-500">Updated just now</p>
                  </div>
                </div>
                <p className="text-xl font-black text-blue-700">$ 48.6M</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INVENTORY MANAGEMENT OVERVIEW
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl group border border-slate-100 h-[28rem] lg:h-[36rem]">
               <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2940&auto=format&fit=crop" 
                alt="Inventory Control Software" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div>
              <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Your Inventory, <span className="text-blue-700">Under Control</span>
              </h2>
              <p className="mb-8 text-lg font-light text-slate-600 leading-relaxed">
                Hivenox eliminates spreadsheets and disconnected inventory systems by bringing products, stock movements, purchasing, warehouses, and sales into one completely connected system.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                {[
                  "Track stock quantities in real time",
                  "Know exactly where products are stored",
                  "Monitor incoming and outgoing inventory",
                  "Track stock adjustments and movements",
                  "Reduce overstock and stockouts",
                  "Connect inventory with sales and purchasing"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="/book" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800 transition-colors group">
                Stop using spreadsheets today <ChevronRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. REAL-TIME STOCK DASHBOARD
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              One View of Your <span className="text-blue-700">Entire Inventory</span>
            </h2>
            <p className="text-lg text-slate-600 font-light">
              Get a live view of inventory health across every warehouse and location without waiting for manual reports.
            </p>
          </div>

          {/* Dashboard Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              { label: "Total Products", value: "12,840", icon: Package, color: "text-blue-600", bg: "bg-blue-100" },
              { label: "In Stock", value: "9,420", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-100" },
              { label: "Low Stock", value: "284", icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-100" },
              { label: "Out of Stock", value: "76", icon: Search, color: "text-rose-600", bg: "bg-rose-100" },
              { label: "Inventory Value", value: "48.6M", icon: DollarSign, color: "text-indigo-600", bg: "bg-indigo-100", prefix: "$ " },
              { label: "Pending Purchases", value: "142", icon: ShoppingCart, color: "text-purple-600", bg: "bg-purple-100" }
            ].map((metric, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow hover:border-blue-300">
                <div className={`size-10 rounded-xl ${metric.bg} flex items-center justify-center mb-4`}>
                  <metric.icon className={`size-5 ${metric.color}`} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-slate-900">
                  <span className="text-sm font-medium text-slate-400">{metric.prefix}</span>
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
             <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg group">
                See the Live Dashboard <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. MULTI-WAREHOUSE MANAGEMENT (SEO Geo inclusion)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-blue-50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[40rem] h-[40rem] bg-blue-200/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Every Warehouse. <br />
                <span className="text-blue-700">One Inventory System.</span>
              </h2>
              <p className="mb-8 text-lg font-light text-slate-600 leading-relaxed">
                Whether you are managing inventory in a central hub in Lahore, a branch in Karachi, or a retail outlet in Islamabad, SEO optimized routing and complete geographic visibility is standard.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  "Multiple warehouses & branches",
                  "Location-level stock",
                  "Warehouse transfers",
                  "Stock receiving & dispatch",
                  "Internal movements",
                  "Warehouse performance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-blue-100 shadow-sm">
                    <MapPin className="size-4 text-blue-600 shrink-0" />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <a href="/book" className="group inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800 transition-colors">
                Map your physical locations <ChevronRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Warehouse Map Visualizer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Main Warehouse", location: "Lahore", units: "12,450", status: "Optimal" },
                { name: "Karachi Warehouse", location: "Karachi", units: "5,820", status: "Optimal" },
                { name: "Lahore Branch", location: "Lahore", units: "3,240", status: "Low Stock" },
                { name: "Islamabad Branch", location: "Islamabad", units: "1,840", status: "Optimal" }
              ].map((wh, i) => (
                <div key={i} className="bg-white p-6 rounded-[2rem] border border-blue-100 shadow-xl shadow-blue-900/5 hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <Box className="size-5 text-blue-600" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${wh.status === 'Optimal' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {wh.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{wh.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-slate-500 mb-4">
                    <MapPin className="size-3" /> {wh.location}
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-2xl font-black text-blue-700">{wh.units} <span className="text-sm font-medium text-slate-400">Units</span></p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PRODUCT & SKU MANAGEMENT
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Build a Clean, Reliable <span className="text-blue-700">Product Catalogue</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Layers className="size-5 text-blue-600" /> Manage Everything
              </h3>
              <ul className="space-y-4">
                {[
                  "Product names & SKUs",
                  "Categories & Variants",
                  "Units of measurement",
                  "Product images & specs",
                  "Purchase & Selling prices",
                  "Tax & Supplier information",
                  "Reorder levels"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="size-3.5 text-blue-700" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
               <div className="mb-8">
                 <h3 className="text-xl font-bold text-slate-900 mb-4">Sell Exactly How You Want</h3>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   Add support for products sold by whatever metric makes sense for your business model. Hivenox adapts to your measurements seamlessly.
                 </p>
                 <div className="flex flex-wrap gap-3">
                   {["Unit", "Box", "Pack", "Kg", "Gram", "Liter", "Meter"].map((unit, i) => (
                     <span key={i} className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-xl text-sm font-bold text-slate-700 hover:border-blue-500 hover:text-blue-700 transition-colors cursor-default">
                       {unit}
                     </span>
                   ))}
                 </div>
               </div>
               
               <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-700 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-lg group">
                Organize your catalog <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. STOCK MOVEMENT TRACKING
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Every Stock Movement <br/> <span className="text-blue-400">Has a Story</span>
            </h2>
            <p className="text-lg font-light text-slate-300">
              Track the complete inventory history. Create a flawless inventory audit trail that ensures nothing gets lost in the dark.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1 space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Supported Movements</p>
              {[
                { type: "Purchase", icon: ShoppingCart },
                { type: "Sale", icon: TrendingUp },
                { type: "Return", icon: RefreshCcw },
                { type: "Transfer", icon: ArrowRightLeft },
                { type: "Adjustment", icon: Activity },
                { type: "Damage", icon: AlertTriangle },
                { type: "Opening stock", icon: Box },
                { type: "Stock correction", icon: CheckCircle2 }
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                  <m.icon className="size-4 text-blue-400" />
                  <span className="font-medium text-slate-200 text-sm">{m.type}</span>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2">
              <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                <div className="bg-slate-900/50 p-4 border-b border-slate-700 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-300">Live Audit Trail</span>
                  <span className="flex items-center gap-2 text-xs font-medium text-emerald-400"><div className="size-2 rounded-full bg-emerald-400 animate-pulse"></div> Recording</span>
                </div>
                <div className="p-0 overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-300 whitespace-nowrap">
                    <thead className="bg-slate-800/50 text-xs uppercase text-slate-500">
                      <tr>
                        <th className="px-6 py-4 font-semibold">Product</th>
                        <th className="px-6 py-4 font-semibold">Type</th>
                        <th className="px-6 py-4 font-semibold">Qty</th>
                        <th className="px-6 py-4 font-semibold">New Stock</th>
                        <th className="px-6 py-4 font-semibold">User</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                      <tr className="hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">Wireless Mouse (WM-01)</td>
                        <td className="px-6 py-4"><span className="text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Sale</span></td>
                        <td className="px-6 py-4 text-rose-300">-2</td>
                        <td className="px-6 py-4 font-bold">124</td>
                        <td className="px-6 py-4 text-slate-400">Ali R.</td>
                      </tr>
                      <tr className="hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">Office Chair (OC-99)</td>
                        <td className="px-6 py-4"><span className="text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Purchase</span></td>
                        <td className="px-6 py-4 text-emerald-400">+50</td>
                        <td className="px-6 py-4 font-bold">62</td>
                        <td className="px-6 py-4 text-slate-400">System</td>
                      </tr>
                      <tr className="hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">Desk Lamp (DL-02)</td>
                        <td className="px-6 py-4"><span className="text-amber-400 bg-amber-400/10 px-2 py-1 rounded">Transfer</span></td>
                        <td className="px-6 py-4 text-slate-300">-10</td>
                        <td className="px-6 py-4 font-bold">45</td>
                        <td className="px-6 py-4 text-slate-400">Sara K.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 text-right">
                <a href="/book" className="inline-flex items-center gap-2 font-medium text-blue-400 hover:text-white transition-colors group">
                  Discover audit capabilities <ChevronRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PURCHASE & SUPPLIER MANAGEMENT
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Connect Inventory With <span className="text-blue-700">Purchasing</span>
              </h2>
              <p className="mb-6 text-lg font-light text-slate-600 leading-relaxed">
                Don't wait until products run out. Hivenox organically connects inventory levels with purchasing workflows to ensure continuous operation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  "Supplier management", "Purchase orders", 
                  "Goods receiving", "Supplier pricing", 
                  "Purchase history", "Pending purchases",
                  "Purchase returns", "Supplier performance"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="size-4 text-emerald-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-700 px-8 py-4 text-base font-bold text-white transition-all hover:bg-blue-800 hover:-translate-y-1 hover:shadow-xl group">
                Manage Your Purchasing <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="order-1 lg:order-2 relative h-[24rem] lg:h-[32rem] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2940&auto=format&fit=crop" 
                alt="Supplier Delivery and Purchasing" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="size-6 text-emerald-400" />
                  <span className="font-bold tracking-wider uppercase text-sm">Goods Receiving</span>
                </div>
                <p className="text-xl font-light opacity-90">Seamless inbound stock handling</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          8. LOW STOCK & REORDER ALERTS
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Reorder Before You <span className="text-rose-600">Run Out</span>
            </h2>
            <p className="text-lg text-slate-600 font-light mb-8">
              Set minimum stock levels for products and receive intelligent alerts when inventory reaches the reorder threshold.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 lg:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-rose-500"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                  <AlertTriangle className="size-8 text-rose-600" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-rose-600 mb-1">Low Stock Alert</p>
                  <h3 className="text-2xl font-bold text-slate-900">Wireless Keyboard</h3>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-slate-500">Current: <span className="font-bold text-rose-600">18 units</span></span>
                    <span className="text-slate-500">Reorder Level: <span className="font-bold text-slate-900">25 units</span></span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full md:w-auto text-center md:text-left">
                <p className="text-xs font-bold uppercase text-slate-500 mb-2">Recommended Action</p>
                <p className="text-xl font-bold text-blue-700 mb-4">Order 50 units</p>
                <button className="w-full inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800">
                  Create Purchase Order
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-100">
              {[
                { label: "Prevent Stockouts", icon: ShieldCheck },
                { label: "Avoid Lost Sales", icon: TrendingUp },
                { label: "Stop Emergency Buying", icon: Clock },
                { label: "Curb Overstocking", icon: Box }
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <benefit.icon className="size-5 text-emerald-500 mb-2" />
                  <span className="text-sm font-medium text-slate-600">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
             <a href="/book" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800 transition-colors group">
                Setup your smart alerts <ChevronRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. INVENTORY VALUATION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-blue-700 text-white rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 my-10 shadow-2xl relative overflow-hidden">
        <div className="absolute right-[-10%] top-[-20%] w-[30rem] h-[30rem] bg-blue-600 rounded-full blur-[80px]"></div>
        <div className="mx-auto max-w-[80rem] px-5 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Know What Your <br />
                <span className="text-emerald-400">Inventory Is Worth</span>
              </h2>
              <p className="mb-8 text-lg font-light text-blue-100 leading-relaxed">
                Give your business absolute financial visibility into its stock. For more advanced operations, Hivenox supports FIFO inventory valuation — crucial for businesses where purchase costs fluctuate over time.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                 {["Inventory cost", "Purchase cost", "Stock value", "Product margins", "Warehouse value", "Inventory turnover", "Cost changes"].map((tag, i) => (
                    <span key={i} className="bg-blue-800/50 border border-blue-500/30 px-4 py-2 rounded-lg text-sm font-medium text-blue-50">
                      {tag}
                    </span>
                 ))}
              </div>
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-blue-700 transition-all hover:bg-slate-100 hover:-translate-y-0.5 shadow-lg group">
                Gain Financial Visibility <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-[2rem] border border-blue-500/30 backdrop-blur-sm">
               <div className="flex justify-between items-end border-b border-blue-500/30 pb-6 mb-6">
                 <div>
                   <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-1">Total Valuation (FIFO)</p>
                   <p className="text-4xl font-black text-white">$ 14,890,200</p>
                 </div>
                 <div className="flex items-center gap-1 text-emerald-400 text-sm font-bold bg-emerald-400/10 px-3 py-1.5 rounded-lg">
                   <TrendingUp className="size-4" /> +4.2%
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="flex justify-between text-sm">
                   <span className="text-blue-200">Main Warehouse Value</span>
                   <span className="font-bold text-white">$ 9,2400</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-blue-200">Average Profit Margin</span>
                   <span className="font-bold text-white">32.4%</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-blue-200">Inventory Turnover Ratio</span>
                   <span className="font-bold text-white">6.8</span>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          10. BARCODE & STOCK OPERATIONS
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative h-[28rem] lg:h-[36rem] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2940&auto=format&fit=crop" 
                alt="Barcode Scanning in Warehouse" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-2xl animate-pulse">
                <ScanLine className="size-10 text-white" />
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Make Stock Operations <span className="text-blue-700">Faster</span>
              </h2>
              <p className="mb-8 text-lg font-light text-slate-600 leading-relaxed">
                Empower your warehouse team with tools designed for speed. Hivenox supports seamless operational workflows built around barcode scanning.
              </p>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10">
                {[
                  "Barcode scanning", "Product lookup", 
                  "Stock receiving", "Order picking", 
                  "Packing processes", "Fast dispatch",
                  "Stock counting", "Warehouse transfers"
                ].map((op, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-blue-500"></div>
                    <span className="text-slate-700 font-medium">{op}</span>
                  </div>
                ))}
              </div>

              <a href="/book" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-bold text-white transition-all hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl group">
                Accelerate Operations <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          11. INVENTORY REPORTS
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Reports That Help You <span className="text-blue-700">Make Better Decisions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Stock Valuation", desc: "Understand total inventory value financially.", icon: DollarSign },
              { title: "Stock Movement", desc: "See exactly where inventory is going.", icon: Activity },
              { title: "Low Stock Report", desc: "Identify products requiring immediate attention.", icon: AlertTriangle },
              { title: "Inventory Aging", desc: "Find slow-moving and aging stock.", icon: Clock },
              { title: "Purchase Report", desc: "Understand all purchasing activity.", icon: ShoppingCart },
              { title: "Product Performance", desc: "Identify fast- and slow-moving products.", icon: BarChart3 }
            ].map((report, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 group">
                <div className="size-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <report.icon className="size-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{report.title}</h3>
                <p className="text-slate-600">{report.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800 transition-colors group">
              View sample reports <ChevronRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. CONNECTED HIVENOX ECOSYSTEM
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Inventory <span className="text-blue-700">Doesn't Work Alone</span>
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto mb-16">
            See how Inventory Management connects deeply with the rest of the Hivenox ecosystem.
          </p>

          <div className="relative max-w-4xl mx-auto flex flex-col items-center">
             {/* Central Hub */}
             <div className="relative z-10 bg-blue-700 text-white px-8 py-4 rounded-2xl shadow-xl shadow-blue-900/20 font-bold text-xl mb-12 border-4 border-white">
                Hivenox ERP
             </div>

             {/* Connecting Lines */}
             <div className="absolute top-[3rem] bottom-0 w-1 bg-blue-100 -z-10"></div>
             
             {/* Grid of Apps */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full mt-4">
                {[
                  { title: "Hivenox CRM", desc: "Customers & deals" },
                  { title: "Hivenox SalesFlow", desc: "Sales pipeline" },
                  { title: "Hivenox Books", desc: "Accounting & finance" },
                  { title: "Hivenox Ops", desc: "Operations" }
                ].map((app, i) => (
                  <div key={i} className="relative z-10 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all text-left flex items-start gap-4">
                     <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                       <Network className="size-5 text-blue-700" />
                     </div>
                     <div>
                       <h3 className="font-bold text-slate-900 mb-1">{app.title}</h3>
                       <p className="text-sm text-slate-500">{app.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
             
             <div className="relative z-10 mt-12 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-xl font-bold text-lg border-4 border-white flex items-center gap-3">
                <Box className="size-5 text-emerald-400" /> Connected Business Core
             </div>
          </div>
          
          <div className="mt-16">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-medium text-slate-700 transition-all hover:border-blue-700 hover:text-blue-700 group">
              Explore the Ecosystem
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          13. WHO IT'S FOR
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-blue-50 border-b border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Built for Businesses That <span className="text-blue-700">Move Products</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              "Retail", "E-commerce", "Wholesale & Distribution", "Manufacturing",
              "Restaurants", "Pharmacies", "Multi-branch businesses", "Import & Export"
            ].map((industry, i) => (
              <div key={i} className="bg-white px-4 py-6 rounded-2xl border border-blue-100 text-center shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                <span className="font-bold text-slate-700 text-sm">{industry}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/book" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800 transition-colors group">
              See how we fit your industry <ChevronRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          14. BENEFITS SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Less Guesswork. <br />
              <span className="text-emerald-500">Better Inventory Decisions.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Reduce Stockouts", desc: "Know what needs replenishing before it becomes a problem." },
              { title: "Reduce Overstock", desc: "Identify slow-moving products and excess inventory quickly." },
              { title: "Improve Accuracy", desc: "Keep stock data synchronized across all physical locations." },
              { title: "Save Time", desc: "Automate repetitive inventory workflows and data entry." },
              { title: "Increase Visibility", desc: "See inventory performance from one comprehensive dashboard." },
              { title: "Protect Margins", desc: "Understand product costs and accurate inventory value." }
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-emerald-200 transition-colors group">
                <div className="size-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 group">
              Start Making Better Decisions <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          15. FAQ
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              { q: "Can I manage multiple warehouses?", a: "Yes. Hivenox Inventory Management can be structured around multiple warehouses, branches, and locations perfectly." },
              { q: "Can I track stock movements?", a: "Yes. Track purchases, sales, transfers, returns, adjustments, and other precise inventory movements." },
              { q: "Can I set low-stock alerts?", a: "Yes. Products can have completely configurable reorder and minimum-stock levels." },
              { q: "Can inventory connect with accounting?", a: "Yes. Inventory can work seamlessly alongside Hivenox Books and the wider Hivenox ERP ecosystem." },
              { q: "Can I manage products with different units?", a: "Yes. Products can be managed using units appropriate to the business, such as pieces, boxes, kilograms, liters, and more." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-white border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-400">
              Have more questions? Contact us
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          16. FINAL CTA
          ========================================================================= */}
      <section className="py-20 lg:py-28 px-5 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-[90rem]">
          <div className="relative overflow-hidden rounded-[3rem] lg:rounded-[4rem] bg-blue-700 px-6 py-20 lg:py-32 text-center shadow-2xl group border border-blue-600">
            
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[30rem] lg:h-[40rem] w-[30rem] lg:w-[40rem] rounded-full bg-blue-600 blur-[80px] lg:blur-[100px] opacity-50 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[30rem] lg:h-[40rem] w-[30rem] lg:w-[40rem] rounded-full bg-emerald-500/20 blur-[100px] lg:blur-[120px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
            
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="mb-8 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Take Control of Your Inventory
              </h2>
              <p className="mb-12 text-lg lg:text-xl font-light leading-relaxed text-blue-100 max-w-2xl mx-auto">
                Replace spreadsheets and disconnected stock systems with one intelligent inventory platform built to scale with your business.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:gap-6 w-full">
                <a href="/book" className="group w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-full bg-emerald-500 px-10 text-lg lg:text-xl font-bold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-2xl hover:-translate-y-1">
                  Book a Hivenox Demo
                  <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/contact" className="group w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-full border-2 border-blue-300 bg-transparent px-10 text-lg lg:text-xl font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-1">
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}