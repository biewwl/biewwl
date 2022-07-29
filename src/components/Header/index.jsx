import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ColorsMenu from "./components/ColorsMenu";
import SocialMenu from "./components/SocialMenu";
import invert from "../../helpers/invertTheme";
import "./styles/Header.css";
import "./styles/Header-mobile.css";
import { Icon } from "@iconify/react";

function Header({ color, theme, selectedPage, dispatch }) {
  const [socialMenu, setSocialMenu] = useState(false);
  const [colorsMenu, setColorsMenu] = useState(false);

  const selected = (button, color) => {
    if (button === selectedPage) return `selected${color}`;
    return "";
  };

  return (
    <header className={`nav-bar bgC${theme} bbT${color}`}>
      <span className={`logo c${color}`}>✦ biewwl</span>
      <ul>
        <li>
          <label
            htmlFor="social"
            className={`social-label bgC${color} c${theme} bb${theme}`}
          >
            {socialMenu && <Icon icon="line-md:close" />}
            {!socialMenu && <Icon icon="line-md:external-link" />}
            <input
              type="checkbox"
              name="socialMenu"
              id="social"
              className="social"
              checked={socialMenu}
              onChange={() => setSocialMenu(!socialMenu)}
            />
            <SocialMenu />
          </label>
        </li>
        <li>
          <Link
            to="/"
            className={`nav-icon c${invert(theme)} ${selected("home", color)}`}
          >
            Home
          </Link>
          <Link to="/" className="nav-icon-mobile">
            <Icon icon="line-md:home-simple" className={`c${invert(theme)}`} />
            <span className={`c${invert(theme)}`}>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`nav-icon c${invert(theme)} ${selected("about", color)}`}
          >
            About
          </Link>
          <Link to="/about" className="nav-icon-mobile">
            {selectedPage === "about" ? (
              <>
                <Icon icon="line-md:account" className={`c${color}`} />
                <span className={`c${color}`}>About</span>
              </>
            ) : (
              <>
                <Icon icon="line-md:account" className={`c${invert(theme)}`} />
                <span className={`c${invert(theme)}`}>About</span>
              </>
            )}
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`nav-icon c${invert(theme)} ${selected(
              "projects",
              color
            )}`}
          >
            Projects
          </Link>
          <Link to="/projects" className="nav-icon-mobile">
            {selectedPage === "projects" ? (
              <>
                <Icon icon="line-md:document-code" className={`c${color}`} />
                <span className={`c${color}`}>Projects</span>
              </>
            ) : (
              <>
                <Icon
                  icon="line-md:document-code"
                  className={`c${invert(theme)}`}
                />
                <span className={`c${invert(theme)}`}>Projects</span>
              </>
            )}
          </Link>
        </li>
        <li>
          <label
            htmlFor="colors"
            className={`colors-label bgC${color} c${theme}`}
          >
            {colorsMenu && <Icon icon="line-md:close" />}
            {!colorsMenu && (
              <Icon icon="line-md:paint-drop-half-filled-twotone" />
            )}
            <input
              type="checkbox"
              name="colorsMenu"
              id="colors"
              className="colors"
              checked={colorsMenu}
              onChange={() => setColorsMenu(!colorsMenu)}
            />
            <ColorsMenu />
          </label>
        </li>
      </ul>
    </header>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
});

export default connect(mapStateToProps)(Header);
