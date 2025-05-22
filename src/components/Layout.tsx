import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="max-w-[1200px] m-auto p-2 md:py-4 flex flex-col md:flex-row gap-4">
        <nav className="w-[200px] pt-6">
          <ul>
            <li>
              <Link to="/home" viewTransition>Home</Link>
            </li>

            <li>
              <Link to="/profile" viewTransition>Profile</Link>
            </li>
            
            <li>
              <Link to="/projects" viewTransition>Projects</Link>
            </li>
          </ul>
        </nav>

        <div className="w-full pt-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
