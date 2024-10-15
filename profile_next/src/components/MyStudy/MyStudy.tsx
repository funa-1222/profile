import styles from "./MyStudy.module.css"
import Images from "../Images"
import posterB4 from "@/public/imgs/B4Graduattion.jpg"
import posterM1A from "@/public/imgs/M1Interim.jpg"
import StudyTerm from "../StudyTerm/StudyTerm"

const MyStudy = () => {
    return (
        <>
            <StudyTerm title="学部4年" subTitle="現実の物体と仮想物体の挙動の違いは？">
                <div className={styles.poster}>
                    <Images src={posterB4} alt="my poster" />
                </div>
            </StudyTerm>

            <StudyTerm title="修士1年前期" subTitle="現実空間にモノレールを走らせてみた！">
                <div className={styles.video}>
                    <iframe width="407" height="724" src="https://www.youtube.com/embed/s99GN42lYiI" title="monorail" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                <div className={styles.poster}>
                    <Images src={posterM1A} alt="my poster" />
                </div>
            </StudyTerm>

            <div>
                <h1>今後の予定</h1>
                <ul>
                    <li>現実空間の空間認識を行うことで仮想物体が現実空間の物体をすり抜けることがないようにする。</li>
                    <li>引き続き仮想物体の制御方法を検討する。</li>
                </ul>
            </div>
        </>
    )
}

export default MyStudy