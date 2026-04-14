
import AuthBackgroundShape from "@/assets/svg/auth-background-shape";
import Logo from "@/components/Logo";
import LoginForm from "@/components/shadcn-studio/blocks/login-page-01/login-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Iniciar Sesión"
}

export default function LoginPage() {
    return (
        <div>
            <div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/bg2.png')] bg-cover bg-center">
                    {/* <video src=""></video> */}
                    {/* <AuthBackgroundShape /> */}
                </div>

                <Card className='z-1 w-full border-none shadow-md sm:max-w-lg bg-white/5 backdrop-blur-3xl'>
                    <CardHeader className='gap-6'>
                        <Logo className="invert" />
                        <div>
                            <CardTitle className='mb-1.5 text-2xl text-white font-bold'>Sign in to Meeti</CardTitle>
                            <CardDescription className='text-base text-white'>Ship Faster and Focus on Growth.</CardDescription>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <p className='text-white mb-6'>
                            Login with{' '}
                            <a href='#' className='text-white hover:underline'>
                                Magic Link
                            </a>
                        </p>

                        {/* Quick Login Buttons */}
                        <div className='mb-6 flex flex-wrap gap-4 sm:gap-6'>
                            <Button variant='outline' className='grow'>
                                Login as User
                            </Button>
                            <Button variant='outline' className='grow'>
                                Login as Admin
                            </Button>
                        </div>

                        {/* Login Form */}
                        <div className='space-y-4'>
                            <LoginForm />

                            <p className='text-white text-center'>
                                New on our platform?{' '}
                                <Link href='/register' className='text-amber-400 hover:underline'>
                                    Create an account
                                </Link>
                            </p>

                            <div className='flex items-center gap-4'>
                                <Separator className='flex-1' />
                                <p className="text-amber-300">or</p>
                                <Separator className='flex-1' />
                            </div>

                            <Button variant='ghost' className='w-full' asChild>
                                <a className="text-amber-300" href='#'>Sign in with google</a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}