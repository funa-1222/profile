import styles from "@/src/components/Header/Header.module.css"

import Images from "../Images"
import github from "@/public/imgs/github-mark.png"

import React from 'react'

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