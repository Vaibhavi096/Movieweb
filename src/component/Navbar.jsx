import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Film } from "lucide-react";
import "../component/Navbar.css"; 

const Navbar = () => 
  {
  const navItems = [
  { name: "Now Playing", path: "/now-playing" },
  { name: "Popular", path: "/popular" },
  { name: "Upcoming", path: "/upcoming" },
  { name: "Top Rated", path: "/top-rated" },
];


  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="logo">
          <Film className="logo-icon" />
          <span className="logo-text">MovieWeb</span>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
