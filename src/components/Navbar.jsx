import { NavLink } from "react-router";
import { Home, Clock, BarChart2 } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 ${isActive ? "font-bold" : ""}`;

  return (
    <div className="lg:px-20 navbar bg-base-100 border-b border-base-200 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink to="/" end className={linkClass}>
                <Home size={15} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/timeline" className={linkClass}>
                <Clock size={15} /> Timeline
              </NavLink>
            </li>
            <li>
              <NavLink to="/stats" className={linkClass}>
                <BarChart2 size={15} /> Stats
              </NavLink>
            </li>
          </ul>
        </div>
        <img src={logo} alt="KeenKeeper" className="h-8" />
      </div>

      {/* Desktop links */}
      <div className="navbar-end hidden lg:flex gap-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `btn btn-sm gap-1.5 ${isActive ? "btn-neutral" : "btn-ghost"}`
          }
        >
          <Home size={15} /> Home
        </NavLink>
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `btn btn-sm gap-1.5 ${isActive ? "btn-neutral" : "btn-ghost"}`
          }
        >
          <Clock size={15} /> Timeline
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `btn btn-sm gap-1.5 ${isActive ? "btn-neutral" : "btn-ghost"}`
          }
        >
          <BarChart2 size={15} /> Stats
        </NavLink>
      </div>
    </div>
  );
}