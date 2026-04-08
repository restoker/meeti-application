'use client'

import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="min-h-dvh flex items-center relative overflow-hidden bg-[#FAFAFA] py-10">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="space-y-10 order-2 lg:order-1">
                        <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-500 bg-zinc-100/80 border border-zinc-200/60 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                            Comunidades que conectan
                        </span>

                        <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] leading-[0.95] tracking-[-0.03em] text-zinc-900 font-semibold animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 ease-[cubic-bezier(0.32,0.72,0,1)]">
                            Encuentra un Meeti o crea una comunidad para compartir lo que más te gusta
                        </h1>

                        <p className="text-lg lg:text-xl text-zinc-500 max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 ease-[cubic-bezier(0.32,0.72,0,1)]">
                            Conecta con personas que comparten tus pasiones. Desde hiking hasta tecnología, hay un Meeti esperándote.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
                            <Link
                                href="/register"
                                className="group inline-flex items-center gap-3 rounded-full bg-zinc-900 px-7 py-4 text-[15px] font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-800 active:scale-[0.98]"
                            >
                                <span>Crear cuenta gratis</span>
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white/20">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </span>
                            </Link>

                            <Link
                                href="/"
                                className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-medium text-zinc-700 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-zinc-900 hover:bg-zinc-100/80"
                            >
                                <span>Explorar Meetis</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 ease-[cubic-bezier(0.32,0.72,0,1)]">
                        <div className="relative lg:pl-8">
                            {/* Ambient glow orbs - Soft Structuralism */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-zinc-200/40 rounded-full blur-3xl" />
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-100/50 rounded-full blur-3xl" />

                            {/* Double-Bezel: Outer Shell */}
                            <div className="p-2 bg-white rounded-lg shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                                {/* Double-Bezel: Inner Core */}
                                <div
                                    className="relative overflow-hidden bg-zinc-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                                    style={{ borderRadius: 'calc(2rem - 0.5rem)' }}
                                >
                                    {/* <svg width="0" height="0" className="absolute">
                                        <defs>
                                            <clipPath id="heroRoundedShape" clipPathUnits="objectBoundingBox">
                                                <path d="M0.03,0 H0.73 Q0.75,0 0.75,0.03 L0.78,0.05 Q0.80,0.06 0.82,0.06 H0.97 Q1,0.06 1,0.09 V0.83 Q1,0.86 0.97,0.88 L0.93,0.97 Q0.91,1 0.88,1 H0.15 Q0.12,1 0.10,0.97 L0.08,0.95 Q0.06,0.94 0.06,0.94 H0.03 Q0,0.94 0,0.91 V0.03 Q0,0 0.03,0 Z" />
                                            </clipPath>
                                        </defs>
                                    </svg> */}
                                    <div style={{ clipPath: 'url(#heroRoundedShape)' }}>
                                        <Image
                                            width={600}
                                            height={450}
                                            src="/img/hero.jpg"
                                            alt="Comunidad compartiendo momentos"
                                            className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover"
                                            priority
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-t from-zinc-900/10 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 lg:-left-8 p-3 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] ring-1 ring-zinc-100/50 animate-in fade-in zoom-in-95 duration-700 delay-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                                <div className="flex items-center gap-3 px-4 py-3">
                                    <div className="flex -space-x-2">
                                        <div className="h-9 w-9 rounded-full bg-linear-to-br from-amber-300 to-orange-400 ring-2 ring-white" />
                                        <div className="h-9 w-9 rounded-full bg-linear-to-br from-emerald-300 to-teal-400 ring-2 ring-white" />
                                        <div className="h-9 w-9 rounded-full bg-linear-to-br from-violet-300 to-purple-400 ring-2 ring-white" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-semibold text-zinc-900">+12k miembros</p>
                                        <p className="text-zinc-500 text-xs">se unieron este mes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero