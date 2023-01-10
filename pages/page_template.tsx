import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import NavbarComp from '../components/navbar';
import Footer from "../components/footer";

const Name: NextPage = () => {
  return (
    <div>
      <NavbarComp/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This page is under construction
        </h1>
      </main>

      <Footer/>
    </div>
  );
};

export default Name;
