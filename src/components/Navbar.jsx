import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/altinfo.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive
              ? "text-orange-500 rounded-none border-4 border-t-0 border-x-0 border-b-orange-500"
              : "";
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive
              ? "text-orange-500 rounded-none border-4 border-t-0 border-x-0 border-b-orange-500"
              : "";
          }}
        >
          Queries
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive
              ? "text-orange-500 rounded-none border-4 border-t-0 border-x-0 border-b-orange-500"
              : "";
          }}
        >
          Recommendations For Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive
              ? "text-orange-500 rounded-none border-4 border-t-0 border-x-0 border-b-orange-500"
              : "";
          }}
        >
          My Queries
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive
              ? "text-orange-500 rounded-none border-4 border-t-0 border-x-0 border-b-orange-500"
              : "";
          }}
        >
          My recommendations
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-200 ">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" className="w-12 rounded-xl" />
          </a>
          <h1 className="text-3xl  font-bold text-[#A91D3A]">ALTINFOHUB</h1>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className=" navbar-end">
          <div className="">
            {user ? (
              <button className="btn " onClick={()=>logOut()}>Logout</button>
            ) : (
              <Link to={"/login"}>
                <button className="btn bg-[#A91D3A] text-white hover:bg-[#a7354c]">
                 
                  Log-in
                </button>
              </Link>
            )}
          </div>
          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
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
