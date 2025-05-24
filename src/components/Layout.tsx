import { Outlet } from "react-router-dom";
import Navbar from "./ui/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="sm:max-w-[800px] xl:max-w-[1000px] m-auto p-2 md:py-4 flex flex-col md:flex-row gap-4">
        <div className="w-full px-2 pt-4 mt-[80px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
