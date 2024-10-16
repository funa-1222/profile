import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import MyStudy from "../components/MyStudy/MyStudy";
import Main from "../components/Main/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Study() {
    return (
        <>
            <Head>
                <title>Study</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header title="Study" />
            <Main>
                <MyStudy />
            </Main>
            <Footer />
        </>
    );
}
