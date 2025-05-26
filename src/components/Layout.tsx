import { Outlet } from "react-router-dom";
import Navbar from "./ui/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="sm:max-w-[800px] xl:max-w-[1000px] m-auto md:py-4 flex flex-col md:flex-row gap-4">
        <div className="w-full px-6 md:px-4 pt-4 mt-[70px] md:mt-[80px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
