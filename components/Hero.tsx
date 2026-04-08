'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
                            <div className="p-2 bg-white rounded-4xl shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] ring-1 ring-zinc-100">
                                <div className="relative overflow-hidden rounded-3xl bg-zinc-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                                    <Image
                                        width={600}
                                        height={450}
                                        src="/img/hero.jpg"
                                        alt="Comunidad compartiendo momentos"
                                        className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-zinc-900/10 via-transparent to-transparent" />
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