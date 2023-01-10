import React, { FC } from 'react';
import {NextPage} from "next";
import LinksTable from "../components/linksTable";
import Navbar from "../components/navbar";
import Footer from "../components/footer"

const Links: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <LinksTable/>
      <Footer/>
    </div>
  );
}

export default Links;
