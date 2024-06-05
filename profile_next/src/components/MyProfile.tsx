import styles from "@/src/components/Myprofile.module.css"
import Link from "next/link"

const MyProfile = () => {
    return (
        <div className={styles.profile}>
            <h2>誕生日</h2>
            <p>2001/12/22</p>
            <h2>出身</h2>
            <p>神奈川県</p>
            <h2>大学、専攻</h2>
            <p>東京都立大学大学院</p>
            <p>システムデザイン研究科電子情報システム工学域専攻</p>

            <h2>言語, ライブラリ, フレームワーク</h2>
            <ul>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>javascript, typescript
                    <p>React勉強中！</p>
                </li>
                <li>C</li>
            </ul>

            <h2>研究内容</h2>
            <p>現実空間の様々なセンシングデータを収集し, 仮想空 間で情報を分析することにより, 実世界へのフィードバ ックを行う, CPSという概念が存在する. しかし, これでは リアルタイムに得たい情報を得ることができない. そこで,
                既存の技術を用いてVR空間と現実空間を繋ぐソリュ ーションを創造し, VR空間で生成した仮想物体を現実空間で同時に再現することで現在見ることができていない問題を見えるようにする, 新たな見える化を実現することを考えている.
                学部4年の時にはPICO4とUnityを利用してVR空間と現実空間の物体の移動の違いを調べた. 現在はMagic Leap2とUnityを利用して現実空間からVR空間の物体を操作するツールの開発を目指している. </p>

            <h2>趣味</h2>
            <p>サッカー、ナノブロック、ペーパーナノ</p>
            {/* <a>趣味紹介ページ</a> */}
            <Link href="/hobby">趣味紹介ページ</Link>

            <h2>将来の夢</h2>
            <p>自分だけの趣味部屋を作ること</p>
            <p>そこでナノブロックなどを作り、作ったもの飾る！！</p>
        </div>
    )
}

export default MyProfile