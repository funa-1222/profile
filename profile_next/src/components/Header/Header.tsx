import styles from "@/src/components/Header/Header.module.css"

import Images from "../Images"
import github from "@/public/imgs/github-mark.png"

import React from 'react'
import Link from "next/link"

type titleProps = {
    title: string
}

// 

const Header: React.FC<titleProps> = (props) => {

    // fetch(WEATHER_FORECAST)
    //     .then(res => res.json())
    //     .then(data => data.weather[0].icon)
    //     .then(id => console.log(id))
    //     .catch((error) => console.error('Error:', error))
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{props.title}</h1>
            <div className={styles.items}>
                <div className={styles.links}>
                    <Link className={styles.link} href="/">TOP</Link>
                    <Link className={styles.link} href="/study">研究紹介</Link>
                    <Link className={styles.link} href="/hobby">趣味紹介</Link>
                </div>
                {/* ここに東京の天気を表示させたい！　*/}
                <a className={styles.github} href="https://github.com/funa-1222/profile">
                    <Images src={github} alt='my-github' />
                </a>
            </div>
        </header>
    )
}

export default Header