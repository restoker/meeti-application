import AuthBackgroundShape from "@/assets/svg/auth-background-shape";
import Logo from "@/components/Logo";
import RegisterForm from "@/components/shadcn-studio/blocks/register-01/register-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Crear Cuenta"
}

export default function RegisterPage() {
    return (
        <>
            <div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/bg1.png')] bg-cover bg-center">
                    {/* <AuthBackgroundShape /> */}
                </div>

                <Card className='z-1 w-full border-none shadow-md sm:max-w-lg bg-white/5 backdrop-blur-3xl'>
                    <CardHeader className='gap-6'>
                        <Logo className="invert" />
                        <div>
                            <CardTitle className='mb-1.5 text-2xl text-white font-bold'>Sign Up to Meeti</CardTitle>
                            <CardDescription className='text-base text-white'>Create your account to get started.</CardDescription>
                        </div>
                    </CardHeader>

                    <CardContent>
                        {/* Register Form */}
                        <div className='space-y-4'>
                            <RegisterForm />

                            <p className='text-center text-white'>
                                Already have an account?{' '}
                                <Link href='/login' className='text-amber-400 hover:underline'>
                                    Sign in instead
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
        </>
    );
}