'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 sm:px-6">
            <nav className="max-w-[1400px] mx-auto">
                <div className="relative flex items-center justify-between px-4 sm:px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)] ring-1 ring-zinc-200/60">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="w-28 transition-opacity duration-300 hover:opacity-80">
                            <Logo />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        <Link
                            href="/"
                            className="px-4 py-2 text-[14px] font-medium text-zinc-600 rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-zinc-900 hover:bg-zinc-100/80"
                        >
                            Explorar
                        </Link>
                        <Link
                            href="/login"
                            className="px-4 py-2 text-[14px] font-medium text-zinc-600 rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-zinc-900 hover:bg-zinc-100/80"
                        >
                            Iniciar Sesión
                        </Link>

                        {/* CTA Premium - Button-in-Button Pattern */}
                        <Link
                            href="/register"
                            className="group ml-2 inline-flex items-center gap-2.5 rounded-full bg-zinc-900 pl-5 pr-1.5 py-1.5 text-[13px] font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-800 active:scale-[0.98]"
                        >
                            <span>Registrarse</span>
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-white/20">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Hamburger Morph */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100/80 transition-colors duration-300 hover:bg-zinc-200/60"
                        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        <div className="relative w-5 h-5">
                            <span
                                className={`absolute left-0 w-5 h-[1.5px] bg-zinc-700 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1'
                                    }`}
                            />
                            <span
                                className={`absolute left-0 w-5 h-[1.5px] bg-zinc-700 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? 'opacity-0 translate-x-2' : 'top-1/2 -translate-y-1/2'
                                    }`}
                            />
                            <span
                                className={`absolute left-0 w-5 h-[1.5px] bg-zinc-700 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-1'
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay - Staggered Mask Reveal */}
                <div
                    className={`md:hidden absolute top-full left-4 right-4 mt-3 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                        }`}
                >
                    <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] ring-1 ring-zinc-200/60 p-6">
                        <div className="flex flex-col gap-2">
                            <Link
                                href="/"
                                onClick={() => setIsMenuOpen(false)}
                                className={`px-4 py-3 text-[15px] font-medium text-zinc-700 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-100/80 hover:text-zinc-900 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}
                                style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}
                            >
                                Explorar
                            </Link>
                            <Link
                                href="/login"
                                onClick={() => setIsMenuOpen(false)}
                                className={`px-4 py-3 text-[15px] font-medium text-zinc-700 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-100/80 hover:text-zinc-900 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}
                                style={{ transitionDelay: isMenuOpen ? '150ms' : '0ms' }}
                            >
                                Iniciar Sesión
                            </Link>
                            <div
                                className={`pt-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}
                                style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
                            >
                                <Link
                                    href="/register"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="group flex items-center justify-center gap-2 w-full rounded-2xl bg-zinc-900 py-3.5 text-[14px] font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-800 active:scale-[0.98]"
                                >
                                    <span>Registrarse</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-300 group-hover:translate-x-0.5">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header