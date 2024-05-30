import Images from "./Images"
import nano_block from "@/public/imgs/hobby2.jpeg"

const MyHobbys = () => {
    return (
        <>
            <h1>サッカー</h1>
            <h2>始めた時期</h2>
            <p>中学1年生</p>
            <h2>ポジション</h2>
            <p>左サイドハーフ, 左ウイング, 左サイドディフェンス</p>
            <h2>好きなプレー</h2>
            <p>フェイント</p>

            <h1>ナノブロック</h1>
            <div>
                <Images src={nano_block} alt="my photo" width={500} height={500} />
            </div>
        </>
    )
}

export default MyHobbys