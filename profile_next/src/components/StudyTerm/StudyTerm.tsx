import React, { ReactNode } from "react";
import styles from "./StudyTerm.module.css"

type titlesProps = {
    title: string;
    subTitle: string;
    children: ReactNode;
}

const StudyTerm: React.FC<titlesProps> = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <div className={styles.items}>
                {props.children}
            </div>
        </>
    )
}

export default StudyTerm