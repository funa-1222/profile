import styles from "./MyHobbys.module.css"
import Link from "next/link"
import Images from "@/src/components/Images"
import nano_block from "@/public/imgs/hobby2.jpeg"

const MyHobbys = () => {
    return (
        <>
            <Link href="/">プロフィールページへ</Link>
            <h1>サッカー</h1>
            <h2>始めた時期</h2>
            <p>中学1年生</p>
            <h2>ポジション</h2>
            <p>左サイドハーフ, 左ウイング, 左サイドディフェンス</p>
            <h2>好きなプレー</h2>
            <p>フェイント</p>

            <h1>ナノブロック</h1>
            <div className={styles.size}>
                <Images src={nano_block} alt="my photo" />
            </div>
        </>
    )
}

export default MyHobbys