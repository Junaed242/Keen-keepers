import { NavLink } from "react-router";
import { Home, Clock, BarChart2 } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b border-base-200 sticky top-0 z-50 px-4">
      <div className="navbar-start">
        <img src={logo} alt="KeenKeeper" className="h-8" />
      </div>
      <div className="navbar-end gap-1">
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