import Logo from "@/components/Logo";
import Link from "next/link";

export default function AuthLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* <div className="flex justify-center pt-10">
                <Link href='/' className="w-48">
                    <Logo />
                </Link>
            </div> */}
            <div className="relative">
                {/* <video src="https://cdn.cosmos.so/bdf71ccf-67f9-4fe1-b96f-829dc5226636.mp4" autoPlay loop muted className="w-full h-full object-cover absolute top-0 left-0 z-0"></video> */}
                <main className="">
                    {children}
                </main>
            </div>
        </>
    );
}