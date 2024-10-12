import React, { ReactNode } from "react";
import styles from "./Main.module.css";

interface MainProps {
    children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (<main className={styles.main}>{children}</main>);
}

export default Main