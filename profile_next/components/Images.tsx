import Image, { StaticImageData } from 'next/image'

type ImagesProps = {
    src: StaticImageData
    alt: string
    width: number
    height: number
}

const Images = ({ src, alt, width, height }: ImagesProps) => {
    return <Image src={src} alt={alt} width={width} height={height} />
}

export default Images