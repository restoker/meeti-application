import Logo from "@/components/Logo";
import ForgotPasswordForm from "@/components/shadcn-studio/blocks/forgot-password-01/forgot-password-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generatePageTitle } from "@/lib/metadata";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: generatePageTitle("Forgot Password")
}

export default function ForgotPage() {
    return (
        <div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/bg1.png')] bg-cover bg-center">
                {/* <AuthBackgroundShape /> */}
            </div>

            <Card className='z-1 w-full border-none shadow-md sm:max-w-md bg-white/5 backdrop-blur-3xl'>
                <CardHeader className='gap-6'>
                    <Logo className='gap-3 invert' />

                    <div>
                        <CardTitle className='mb-1.5 text-2xl font-bold text-white'>Forgot Password?</CardTitle>
                        <CardDescription className='text-base text-zinc-100'>
                            Enter your email and we&apos;ll send you instructions to reset your password
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className='space-y-4'>
                    {/* ForgotPassword Form */}
                    <ForgotPasswordForm />

                    <Link href='/login' className='group mx-auto flex w-fit items-center gap-2'>
                        <ChevronLeftIcon className='size-5 transition-transform duration-200 group-hover:-translate-x-0.5 text-amber-400' />
                        <span className='text-sm text-amber-400'>Back to login</span>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}