import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  // Define routes where the Footer should not be displayed
  const hideFooterRoutes = ["/login", "/signup"];

  return (
    <>
      {/* Always render the Menu */}
      <Menu />
      <Outlet />
      {/* Conditionally render the Footer */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;
