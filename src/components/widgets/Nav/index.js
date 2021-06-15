import React, { useContext } from "react";
import "./styles.css";
import { ThemeContext } from "../../../Context/themeContext";
import { CloseNavToggle } from "../../buttons";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  AOS.init();
  const { showNav, closeNav } = useContext(ThemeContext);

  return (
    <>
      {showNav ? (
        <header>
          <nav
            className="navbar animate__animated animate__fadeInDown "
            id="header"
          >
            <ul className="navbar-list">
              <li className="navbar-list-item" onClick={closeNav}>
                <Link to="/">Home</Link>
              </li>
              <li className="navbar-list-item" onClick={closeNav}>
                <Link to="/skills">Services</Link>
              </li>
              <li className="navbar-list-item" onClick={closeNav}>
                <Link to="/projects">Projects</Link>
              </li>
              <li className="navbar-list-item" onClick={closeNav}>
                <Link to="/playground">Playground</Link>
              </li>
              <li className="navbar-list-item" onClick={closeNav}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <CloseNavToggle />
          </nav>
        </header>
      ) : null}
    </>
  );
};

export { Navbar };
