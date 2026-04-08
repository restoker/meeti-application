import Image from "next/image"

const Logo = () => {
    return (
        <>
            <Image src="/img/logo.svg" alt="Logo" width={0} height={0} sizes="100vw" className="w-full h-auto" />
        </>
    )
}

export default Logo