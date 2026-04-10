'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, SplitText)

const Hero = () => {

    const bgCyanRef = useRef<HTMLDivElement>(null)
    const bgAmberRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subTitleRef = useRef<HTMLParagraphElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    useGSAP(() => {

        // gsap.set(bgAmberRef.current, { width: "0%" })
        // gsap.set(bgCyanRef.current, { width: "0%" })
        const tl = gsap.timeline();

        const splitTitle = new SplitText(titleRef.current, {
            type: "lines",
            mask: 'lines',
            autoSplit: true,
            linesClass: 'lines'
        })
        const splitSubTitle = new SplitText(subTitleRef.current, {
            type: "chars",
            mask: 'chars',
            autoSplit: true,
            linesClass: 'chars'
        })

        tl.from(bgCyanRef.current, {
            // backgroundSize: "0% 0%",
            backgroundColor: "#a2f4fd",
            transformOrigin: "left",
            opacity: 0.5,
            scaleX: 0,
            x: -100,
            duration: 1,
        })
            .from(bgAmberRef.current, {
                duration: 1,
                transformOrigin: "right",
                backgroundColor: "white",
                scaleX: 0,
            }, '<')
            .from(splitTitle.lines, {
                y: 100,
                opacity: 0,
                stagger: 0.1,
            })
            .fromTo(videoRef.current, {
                yPercent: 180,
            }, {
                duration: 1,
                yPercent: 0,
                ease: "back.out(4)",
            }, '<')
            .to(videoRef.current, {
                duration: 1.5,
                yPercent: 0,
                clipPath: 'circle(100%)',
                delay: 0.8,
            }, '<')
            .from(splitSubTitle.chars, {
                opacity: 0,
                stagger: {
                    from: 'random',
                    each: 0.01
                },
            }, '<')
        // .from(splitSubTitle.lines, {
        //     y: 100,
        //     opacity: 0,
        //     stagger: 0.1,
        // })
        SplitText.create(titleRef.current, {
            type: "lines, words",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
                return gsap.from(self.words, {
                    duration: 1,
                    delay: 0.5,
                    y: 100,
                    autoAlpha: 0,
                    stagger: 0.05
                });
            }
        });

    }, [])

    return (
        <div ref={bgAmberRef} className="bg-linear-to-b from-amber-100 to-amber-50 dark:bg-gray-900">
            <div className="relative isolate overflow-hidden bg-linear-to-b from-amber-100/20 dark:from-amber-950/10" >
                <div
                    ref={bgCyanRef}
                    aria-hidden="true"
                    className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-cyan-200 shadow-xl ring-1 shadow-amber-600/10 ring-amber-50 sm:-mr-80 lg:-mr-96 dark:bg-gray-800/30 dark:shadow-amber-400/10 dark:ring-white/5"
                />
                <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8 overflow-hidden">
                        <h1 ref={titleRef} className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto dark:text-white">
                            Encuentra un Meeti o crea una comunidad para compartir lo que más te gusta
                        </h1>
                        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <p ref={subTitleRef} className="text-lg font-medium text-pretty text-gray-700 sm:text-xl/8 dark:text-gray-400">
                                Conecta con personas que comparten tus pasiones. Desde hiking hasta tecnología, hay un Meeti esperándote.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <Link
                                    href="/register"
                                    className="rounded-md bg-amber-400 px-3.5 py-2.5 text-sm font-bold text-zinc-950 shadow-xs hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 dark:bg-amber-400 dark:hover:bg-amber-300 dark:focus-visible:outline-amber-400"
                                >
                                    Crear cuenta
                                </Link>
                                <Link href="/login" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                                    Iniciar sesión <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                        {/* <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            src="https://www.cosmos.so/e/1185814312"
                            className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 dark:outline-white/10 p-2"
                        /> */}
                        <video ref={videoRef} autoPlay loop muted src="https://cdn.cosmos.so/a58329ab-bf40-4b68-941a-649ab1a00def.mp4" className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 dark:outline-white/10 p-2 [clip-path:circle(3.5%)]"></video>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32 dark:from-gray-900" />
            </div>
        </div >
    )
}

export default Hero