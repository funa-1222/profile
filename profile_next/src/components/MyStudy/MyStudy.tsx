// import styles from "../../../public/imgs/"
import styles from "./MyStudy.module.css"
import Images from "../Images"
import posterB4 from "@/public/imgs/B4Graduattion.jpg"
import posterM1A from "@/public/imgs/M1Interim.jpg"

const MyStudy = () => {
    return (
        <>
            <div>
                <h1>学4年</h1>
                <h2>現実の物体と仮想物体の挙動の違いは？</h2>
                <div className={styles.items}>
                    <div className={styles.poster}>
                        <Images src={posterB4} alt="my poster" />
                    </div>
                </div>
            </div>
            <div>
                <h1>修士1年前期</h1>
                <h2>現実空間にモノレールを走らせてみた！</h2>
                <div className={styles.items}>
                    <div className={styles.video}>
                        <video controls>
                            <source src="/imgs/monorail.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className={styles.poster}>
                        <Images src={posterM1A} alt="my poster" />
                    </div>
                </div>
            </div>
            <div>
                <h1>今後の予定</h1>
                <ul>
                    <li>現実空間の空間認識を行うことで仮想物体が現実空間の物体をすり抜けることがないようにする。</li>
                    <li>引き続き仮想物体の制御方法を検討する。</li>
                </ul>
                {/* <p>現実空間の空間認識を行うことで仮想物体が現実空間の物体をすり抜けることがないようにする。</p> */}
            </div>
        </>
    )
}

export default MyStudy