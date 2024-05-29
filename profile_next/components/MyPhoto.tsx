import me from "@/public/imgs/profile.png"
import Image from "next/image"
import Images from "./Images"

const MyPhoto = () => {
    return (
        <>
            <Images src={me} alt="my photo" width={500} height={500} />
            <h2>ふなっしー</h2>
            <p>こんにちは、プログラミング勉強中の動くことが大好き大学院生です！！</p>
        </>
    )
}

export default MyPhoto