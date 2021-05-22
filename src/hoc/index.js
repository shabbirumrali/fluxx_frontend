import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "./content";

const Layout = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Header toggle={toggle} className="signin" modal={modal} />
      <Content />
      <Footer />
    </>
  );
};

export default Layout;
