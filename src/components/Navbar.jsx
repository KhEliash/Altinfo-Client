import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/altinfo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive
              ? "text-[#C73659] rounded-none border-4 border-t-0 border-x-0 border-b-[#C73659]"
              : "";
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/queries"}
          className={({ isActive }) => {
            return isActive
              ? "text-[#C73659] rounded-none border-4 border-t-0 border-x-0 border-b-[#C73659]"
              : "";
          }}
        >
          Queries
        </NavLink>
      </li>
      <li>
        <NavLink
        to={'/allUsers'}
        className={({ isActive }) => {
          return isActive
            ? "text-[#C73659] rounded-none border-4 border-t-0 border-x-0 border-b-[#C73659]"
            : "";
        }}
        >
        All Users
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <NavLink
              to={"/recommendation"}
              className={({ isActive }) => {
                return isActive
                  ? "text-[#C73659] rounded-none border-4 border-t-0 border-x-0 border-b-[#C73659]"
                  : "";
              }}
            >
              Recommendations For Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/myqueries"}
              className={({ isActive }) => {
                return isActive
                  ? "text-[#C73659] rounded-none border-4 border-t-0 border-x-0 border-b-[#C73659]"
                  : "";
              }}
            >
              My Queries
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/myrecommendation"}
              className={({ isActive }) => {
                return isActive
                  ? "text-[#C73659] rounded-none border-4 border-t-0 border-x-0 border-b-[#C73659]"
                  : "";
              }}
            >
              My recommendations
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-200 ">
        <div className="navbar-start">
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img src={logo} alt="" className="w-12 rounded-xl" />
          </Link>
          <h1 className="lg:text-3xl  font-bold text-[#A91D3A]">ALTINFOHUB</h1>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className=" navbar-end">
          {/* toggle */}
          <div className="mr-2">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={handleToggle}
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-8 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <div className="">
            {user ? (
              <button
                className="btn bg-[#A91D3A] text-white"
                onClick={() => logOut()}
              >
                Logout
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="btn bg-[#A91D3A] text-white hover:bg-[#a7354c]">
                  Log-in
                </button>
              </Link>
            )}
          </div>
          <div className="dropdown dropdown-end lg:hidden z-30">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              {/* <div className="w-10 rounded-full"> */}
                <FaBars/>
              {/* </div> */}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
