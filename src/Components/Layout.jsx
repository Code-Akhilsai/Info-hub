import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  const hideFooterRoutes = ["/login", "/signup"];

  return (
    <>
      <Menu />
      <Outlet />

      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;
