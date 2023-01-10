import styles from "../styles/Home.module.css";
import React, { FC } from "react";

const Footer: FC=() => {
  return (
    <footer className={styles.footer}>
      <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
        Made with ❤️ by your frens at 🌈
      </a>
    </footer>
  );
}

export default Footer;
