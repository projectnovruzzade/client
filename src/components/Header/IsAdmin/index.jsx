import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <header className="bg-slate-500 px-10 py-4 text-white flex justify-between">
    <div className="logo text-xl tracking-wide font-semibold">XACAPURI</div>
    <nav className="nav">
      <ul className="flex space-x-5">
        <li>
          <NavLink
            to={"/profile"}
            className="font-semibold hover:text-red-300 transition-colors"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard"}
            className="font-semibold hover:text-red-300 transition-colors"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/"}
            className="font-semibold hover:text-red-00 transition-colors"
          >
            Posts
          </NavLink>
        </li>
        <li>
          <button
            className="font-semibold hover:text-red-300 transition-colors px-2 py-1 bg-orange-500 rounded-md"
          >
            Log out
          </button>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default AdminHeader