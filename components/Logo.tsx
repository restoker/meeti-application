import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <>
            <Link href="/">
                <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/img/logo.svg"
                    alt="Logo"
                    className="h-12 w-auto"
                />
            </Link>
        </>
    )
}

export default Logo