import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import NavbarComp from '../components/navbar';

const Blog: NextPage = () => {
  return (
    <div>
      <NavbarComp/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This page is under construction
        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Blog;
