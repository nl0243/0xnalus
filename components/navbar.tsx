
import React, { FC } from 'react';
import styles from '../styles/Navigation.module.css';
import {ConnectButton} from "@rainbow-me/rainbowkit";

const NavbarComp: FC = () => {
  return (
  <div>
    <div className={styles.navigationBox}>
      <div className={styles.containerLeft}>
        <a href={"/"}> <img src={'nalusLogo.svg'} width={150}/> </a>
      </div>
      <div>
        <ul>
          <a href={"/about"}>About me</a>
          <a href={"/links"}>Usefull links</a>
          <a href={"/audits"}>Audits</a>
          <a href={"/projects"}>Projects</a>
          <a href={"/blog"}>Blog</a>
        </ul>
      </div>
      <div className={styles.containerRight}><ConnectButton /></div>
    </div>
  </div>
  );
}

export default NavbarComp;
