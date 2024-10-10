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
            <p>システムデザイン研究科 電子情報システム工学域専攻 情報ネットワーク領域</p>

            <h2>言語, ライブラリ, フレームワーク</h2>
            <ul>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>javascript, typescript</li>
                <li>React</li>
                <li>C, C++</li>
                <li>C#, Unity</li>
            </ul>

            <h2>研究内容</h2>
            <p>学部4年次から現在にかけて「現実空間における仮想物体の制御方法」を研究しています。
                あるアイデアについて再現、検証する場合を考えます。現実空間と仮想空間の融合、一体化により新たな「見える化」の実現を目指しています。
                学部4年次はUnityの学習と、VR空間内における仮想物体の挙動の調査を行いました。
                修士1年次からは、現実空間に現実空間における仮想物体の制御方法の検討を行っています。現在までに現実空間に仮想モノレールを走らせることに成功しました。しかし、仮想物体が現実空間の物体をすり抜ける、仮想物体の制御方法が不自然といった問題があります。よって、現在は現実空間における空間認識の利用の検討、条件追加などによる仮想物体の制御方法の再検討を行っています。
            </p>

            <h2>趣味</h2>
            <p>サッカー、ナノブロック、ペーパーナノ</p>
            {/* <a>趣味紹介ページ</a> */}
            <Link className={styles.link} href="/hobby">趣味紹介ページへ</Link>

            <h2>将来の夢</h2>
            <p>自分だけの趣味部屋を作ること</p>
            <p>そこでナノブロックなどを作り、作ったもの飾る！！</p>
        </div>
    )
}

export default MyProfile