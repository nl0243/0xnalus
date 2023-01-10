import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavbarComp from "../components/navbar";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavbarComp/>
      <Head>
        <title>Nals page</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to my
          <a href="https://nextjs.org"> Web3</a>Page
        </h1>

        <ConnectButton />
      </main>
      <Footer/>
    </div>
  );
};

export default Home;