import Image from "next/image"
import Link from "next/link"

const Logo = ({ className }: { className?: string }) => {
    return (
        <>
            <Link href="/">
                <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/img/logo.svg"
                    alt="Logo"
                    className={`h-12 w-auto ${className}`}
                />
            </Link>
        </>
    )
}

export default Logo