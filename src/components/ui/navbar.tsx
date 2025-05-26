import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { cn } from "../../libs/style";

const navItems = [
  { path: "/home", label: "Home" },
  { path: "/profile", label: "Profile" },
  { path: "/blog", label: "Blogs" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsSticky(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "bg-white",
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isSticky && "shadow-lg"
      )}
    >
      <div className="sm:max-w-[800px] xl:max-w-[1000px] mx-auto px-4 py-5 md:py-7 flex items-center justify-between">
        <Link to="/" className="font-semibold">
          Anggi Fergian
        </Link>

        <ul className="flex gap-2">
          {navItems.map((item) => (
            <li key={item.path} className="px-2 py-1.5">
              <NavLink
                to={item.path}
                viewTransition
                className={({ isActive }) =>
                  cn(
                    "font-medium hover:text-blue-500 hover:underline underline-offset-8",
                    isActive && "text-blue-500 underline"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden">
          <div>Dark/Light mode</div>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hidden p-2 rounded focus:outline-none"
        >
          {menuOpen ? <p>Hide menu</p> : <p>Show menu</p>}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="hidden bg-white border-t border-b border-gray-200 px-4 pt-4 pb-8">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.path} className="px-2 py-2">
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  to={item.path}
                  viewTransition
                  className={({ isActive }) =>
                    cn(
                      "font-medium hover:text-blue-500 hover:underline underline-offset-8",
                      isActive && "text-blue-500 underline"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
