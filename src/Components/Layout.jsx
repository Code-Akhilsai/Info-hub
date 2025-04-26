import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Menu />
      <br />
      <br />
      <Outlet />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Layout;
