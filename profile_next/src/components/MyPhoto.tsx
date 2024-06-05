import me from "@/public/imgs/profile.png"
import styles from "@/src/components/MyPhoto.module.css"
import Image from "next/image"
import Images from "./Images"

const MyPhoto = () => {
    return (
        <div className={styles.img_name}>
            <Images src={me} alt="my photo" />
            <h2>ふなっしー</h2>
            <p>こんにちは、プログラミング勉強中の動くことが大好き大学院生です！！</p>
        </div>
    )
}

export default MyPhoto