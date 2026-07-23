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
  Rocket,
} from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function ContactPage() {
  const t = await getTranslations('Contact')

  // FAQ Data
  const faqs = [
    {
      question: t('faq.items.singleWorker.question'),
      answer: t('faq.items.singleWorker.answer'),
    },
    {
      question: t('faq.items.bilingual.question'),
      answer: t('faq.items.bilingual.answer'),
    },
    {
      question: t('faq.items.raas.question'),
      answer: t('faq.items.raas.answer'),
    },
    {
      question: t('faq.items.compliance.question'),
      answer: t('faq.items.compliance.answer'),
    },
  ]

  // Global Hubs Data
  const hubs = [
    {
      id: 'sydney',
      city: 'Sydney',
      title: t('hubs.locations.sydney.title'),
      address: '33 East Street, Granville, Sydney, NSW 2142',
      phone: '+61 466 558 862',
    },
    {
      id: 'dubai',
      city: 'Dubai',
      title: t('hubs.locations.dubai.title'),
      address: 'Dubai Technology Center, Dubai, UAE',
      phone: '+61 466 558 862',
    },
    {
      id: 'riyadh',
      city: 'Riyadh',
      title: t('hubs.locations.riyadh.title'),
      address: 'Riyadh Digital City, Riyadh, KSA',
      phone: '+61 466 558 862',
    },
  ]

  // Onboarding Steps
  const onboardingSteps = [
    {
      step: '01',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      title: t('onboarding.steps.discovery.title'),
      desc: t('onboarding.steps.discovery.description'),
    },
    {
      step: '02',
      icon: Layers,
      color: 'from-violet-500 to-fuchsia-500',
      title: t('onboarding.steps.design.title'),
      desc: t('onboarding.steps.design.description'),
    },
    {
      step: '03',
      icon: Rocket,
      color: 'from-emerald-500 to-teal-500',
      title: t('onboarding.steps.deployment.title'),
      desc: t('onboarding.steps.deployment.description'),
    },
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* PURE CSS ANIMATIONS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes pulseGlow {
              0%, 100% {
                opacity: 0.4;
                transform: scale(1);
              }
              50% {
                opacity: 0.6;
                transform: scale(1.05);
              }
            }

            .animate-fade-up {
              animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              opacity: 0;
            }

            .delay-100 {
              animation-delay: 100ms;
            }

            .delay-200 {
              animation-delay: 200ms;
            }

            .delay-300 {
              animation-delay: 300ms;
            }

            .delay-400 {
              animation-delay: 400ms;
            }

            .animate-glow {
              animation: pulseGlow 4s ease-in-out infinite;
            }
          `,
        }}
      />

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center lg:px-8">
        {/* Background Effects */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl space-y-8">
          {/* Locations */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-bold text-blue-700 shadow-sm shadow-blue-500/10">
            <Globe className="h-4 w-4 text-blue-600" />
            <span>{t('hero.locations')}</span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up delay-100 text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-8xl">
            {t('hero.titleLine1')}
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 bg-clip-text text-transparent">
              {t('hero.titleLine2')}
            </span>
          </h1>

          {/* Description */}
          <p className="animate-fade-up delay-200 mx-auto max-w-2xl text-xl font-medium leading-relaxed text-slate-600">
            {t('hero.description')}
          </p>

          {/* Buttons */}
          <div className="animate-fade-up delay-300 flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#form"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              {t('hero.bookDemo')}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" />
            </a>

            <a
              href="#hubs"
              className="rounded-xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-900 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
            >
              {t('hero.viewOffices')}
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          TRUST BANNER
      ========================= */}
      <section className="overflow-hidden border-y border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 lg:px-8 md:flex-row">
          <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
            {t('trust.title')}
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 font-bold text-xl text-slate-300 md:gap-16">
            <span className="flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              {t('trust.enterprise')}
            </span>

            <span className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6" />
              {t('trust.security')}
            </span>

            <span className="flex items-center gap-2">
              <Globe className="h-6 w-6" />
              {t('trust.bilingual')}
            </span>
          </div>
        </div>
      </section>

      {/* =========================
          ADVANTAGES + FORM
      ========================= */}
      <section
        id="form"
        className="mx-auto grid max-w-7xl scroll-mt-20 grid-cols-1 items-start gap-8 px-6 py-24 lg:grid-cols-12 lg:gap-12 lg:px-8"
      >
        {/* LEFT SIDE */}
        <div className="animate-fade-up delay-100 flex flex-col gap-6 lg:col-span-5">
          {/* Promise Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 to-slate-900 p-10 text-white shadow-2xl transition-all duration-500 hover:shadow-blue-900/20">
            <div className="absolute right-0 top-0 p-8 opacity-10 transition-all duration-700 group-hover:rotate-12 group-hover:opacity-20">
              <Zap className="h-32 w-32 text-blue-400" />
            </div>

            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                {t('promise.label')}
              </span>

              <h3 className="mb-8 mt-2 text-3xl font-extrabold tracking-tight text-white">
                {t('promise.title')}
              </h3>

              <div className="space-y-8">
                {/* Zero Silos */}
                <div className="group/item flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300 transition-colors duration-300 group-hover/item:bg-blue-500 group-hover/item:text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {t('promise.zeroSilos.title')}
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {t('promise.zeroSilos.description')}
                    </p>
                  </div>
                </div>

                {/* AI Workers */}
                <div className="group/item flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300 transition-colors duration-300 group-hover/item:bg-blue-500 group-hover/item:text-white">
                    <Sparkles className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {t('promise.workers.title')}
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {t('promise.workers.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              href="mailto:info@hivenox.com"
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >
              <Mail className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" />

              <div className="mt-8">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t('contact.emailLabel')}
                </span>

                <span className="text-base font-bold text-slate-900">
                  info@hivenox.com
                </span>
              </div>
            </a>

            <a
              href="tel:+61466558862"
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >
              <Phone className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" />

              <div className="mt-8">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t('contact.phoneLabel')}
                </span>

                <span className="text-base font-bold text-slate-900">
                  +61 466 558 862
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="animate-fade-up delay-200 lg:col-span-7">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 md:p-12">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                {t('form.title')}
              </h2>

              <p className="mt-3 text-lg text-slate-600">
                {t('form.description')}
              </p>
            </div>

            <form className="space-y-6">
              {/* First + Last Name */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-bold text-slate-700"
                  >
                    {t('form.firstName')}
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-bold text-slate-700"
                  >
                    {t('form.lastName')}
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    required
                  />
                </div>
              </div>

              {/* Email + Company */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-slate-700"
                  >
                    {t('form.email')}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-bold text-slate-700"
                  >
                    {t('form.company')}
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    required
                  />
                </div>
              </div>

              {/* Interest */}
              <div className="space-y-2">
                <label
                  htmlFor="interest"
                  className="text-sm font-bold text-slate-700"
                >
                  {t('form.interest')}
                </label>

                <div className="relative">
                  <select
                    id="interest"
                    name="interest"
                    className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 transition-all focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  >
                    <option value="">
                      {t('form.selectOption')}
                    </option>

                    <option value="workers">
                      {t('form.workers')}
                    </option>

                    <option value="erp">
                      {t('form.erp')}
                    </option>

                    <option value="custom">
                      {t('form.custom')}
                    </option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 rtl:left-5 rtl:right-auto" />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-slate-700"
                >
                  {t('form.challenges')}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.98]"
              >
                {t('form.submit')}

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =========================
          GLOBAL HUBS
      ========================= */}
      <section
        id="hubs"
        className="relative scroll-mt-10 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 md:py-32"
      >
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-40" />

          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

          <div className="absolute bottom-0 -right-20 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
              {t('hubs.label')}
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-6xl">
              {t('hubs.titleLine1')}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                {t('hubs.titleLine2')}
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              {t('hubs.description')}
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {hubs.map((hub) => (
              <div
                key={hub.id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-300 hover:shadow-2xl"
              >
                {/* City */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                    {hub.city}
                  </span>

                  <Globe className="h-6 w-6 text-slate-400 transition group-hover:text-blue-600" />
                </div>

                <h3 className="text-3xl font-bold text-slate-900">
                  {hub.title}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
                  {t('hubs.regionalOffice')}
                </p>

                <div className="my-8 h-px bg-slate-200" />

                {/* Address */}
                <div className="mb-7 flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      {t('hubs.address')}
                    </p>

                    <p className="mt-1 leading-7 text-slate-700">
                      {hub.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      {t('hubs.contact')}
                    </p>

                    <a
                      href={`tel:${hub.phone}`}
                      className="mt-1 block font-semibold text-slate-900 transition hover:text-blue-600"
                    >
                      {hub.phone}
                    </a>
                  </div>
                </div>

                {/* Accent */}
                <div className="mx-auto mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          ONBOARDING PROCESS
      ========================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black py-24 text-white md:py-32">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />

          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              {t('onboarding.label')}
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-6xl">
              {t('onboarding.titleLine1')}{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                {t('onboarding.titleLine2')}
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              {t('onboarding.description')}
            </p>
          </div>

          <div className="relative grid gap-10 md:grid-cols-3">
            {/* Connection Line */}
            <div className="absolute left-0 right-0 top-14 hidden h-1 md:block">
              <div className="mx-auto h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 opacity-40" />
            </div>

            {onboardingSteps.map((item) => (
              <div key={item.step} className="group relative">
                {/* Step Circle */}
                <div
                  className={`mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r ${item.color} shadow-2xl transition duration-500 group-hover:scale-110`}
                >
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

                  {/* Progress */}
                  <div
                    className={`mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          FAQ
      ========================= */}
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="animate-fade-up mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">
            {t('faq.title')}
          </h2>

          <p className="text-lg text-slate-600">
            {t('faq.description')}
          </p>
        </div>

        <div className="animate-fade-up delay-100 space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 open:border-blue-300 open:ring-2 open:ring-blue-600/20"
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 p-6 text-left text-lg font-bold text-slate-900 transition-colors hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <HelpCircle className="h-4 w-4" />
                  </span>

                  {faq.question}
                </span>

                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div className="ml-12 border-t border-slate-50 px-6 pb-6 pt-2 text-base leading-relaxed text-slate-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}