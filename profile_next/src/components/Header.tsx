import styles from "@/src/components/Header.module.css"

import Images from "./Images"
import github from "@/public/imgs/github-mark.png"

type titleProps = {
    title: string
}
const Header: React.FC<titleProps> = (props) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{props.title}</h1>
            <div id="mark">
                {/* ここに東京の天気を表示させたい！　*/}
                <a href="https://github.com/funa-1222">
                    <Images src={github} alt='my-github' />
                </a>
            </div>
        </header>
    )
}

export default Header