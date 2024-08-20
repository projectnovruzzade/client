import React from "react";
import { Link, NavLink } from "react-router-dom";

const IsUser = () => {
  return (
    <header className="bg-slate-500 px-10 py-4 text-white flex justify-between">
      <div className="logo text-xl tracking-wide font-semibold">XACAPURI</div>
      <nav className="nav">
        <ul className="flex space-x-5">
          <li>
            <NavLink to={"/profile"} className="font-semibold hover:text-red-300 transition-colors">Profile</NavLink>
          </li>
          <li>
          <Link
              to={"/login"}
              className="font-semibold hover:text-red-300 transition-colors px-2 py-1 bg-blue-500 rounded-md"
            >
              Login
            </Link>
          </li>
          <li>
          <Link
              to={"/register"}
              className="font-semibold hover:text-red-300 transition-colors px-2 py-1 bg-blue-500 rounded-md"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default IsUser;
