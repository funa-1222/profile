import Image, { StaticImageData } from 'next/image'

type ImagesProps = {
    src: StaticImageData
    alt: string
    // width: number
    // height: number
}

const Images = ({ src, alt }: ImagesProps) => {
    return <Image src={src} alt={alt} />
}

export default Images