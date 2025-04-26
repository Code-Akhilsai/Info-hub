import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  // Define routes where the Menu and Footer should not be displayed
  const hideMenuAndFooterRoutes = ["/login", "/signup"];

  return (
    <>
      {/* Conditionally render the Menu */}
      {!hideMenuAndFooterRoutes.includes(location.pathname) && <Menu />}
      <Outlet />
      {/* Conditionally render the Footer */}
      {!hideMenuAndFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;
