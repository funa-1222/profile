import styles from "./MyHobbys.module.css"
import Link from "next/link"
import Images from "@/src/components/Images"
import soccer from "@/public/imgs/hobby1.jpeg"
import nano_block from "@/public/imgs/hobby2.jpeg"
import paoper_nano from "@/public/imgs/papernano.jpeg"

const MyHobbys = () => {
    return (
        <>
            <div>
                <h1>サッカー</h1>
                <div className={styles.soccer}>
                    <div>
                        <h3>始めた時期</h3>
                        <p>中学1年生</p>
                        <h3>ポジション</h3>
                        <p>左サイドハーフ, 左ウイング, 左サイドディフェンス</p>
                        <h3>好きなプレー</h3>
                        <p>フェイント</p>
                    </div>
                    <div>
                        <div className={styles.size}>
                            <Images src={soccer} alt="soccer" />
                        </div>
                    </div>
                </div>
            </div>
            <hr className={styles.line} />
            <div>
                <h1>ナノブロック</h1>
                <div className={styles.size}>
                    <Images src={nano_block} alt="block" />
                </div>
            </div>
            <hr className={styles.line} />
            <div>
                <h1>ペーパーナノ</h1>
                <div className={styles.size}>
                    <Images src={paoper_nano} alt="paper" />
                </div>
            </div>
        </>
    )
}

export default MyHobbys