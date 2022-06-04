import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ColorsMenu from "./ColorsMenu";
import SocialMenu from "./SocialMenu";
import { changeColor, changeTheme } from "../redux/actions/themeAction";
import invert from "../helpers/invertTheme";
import "./Header.css";

function Header({ color, theme, selectedPage, dispatch }) {
  const [socialMenu, setSocialMenu] = useState(false);
  const [colorsMenu, setColorsMenu] = useState(false);

  const changeInvertTheme = () => {
    if (theme === "" && color === "-dark") {
      dispatch(changeTheme("-dark"));
      dispatch(changeColor(""));
    } else if (theme === "-dark" && color === "") {
      dispatch(changeTheme(""));
      dispatch(changeColor("-dark"));
    } else if (theme === "") {
      dispatch(changeTheme("-dark"));
    } else {
      dispatch(changeTheme(""));
    }
  };

  const selected = (button, color) => {
    if (button === selectedPage) return `selected${color}`;
    return "";
  };

  return (
    <header className={`nav-bar bg${theme} bbT${color}`}>
      <span className={`logo c${color}`}>biewwl</span>
      <ul>
        <li>
          <label
            htmlFor="social"
            className={`social-label bg${color} c${theme} bb${theme}`}
          >
            {socialMenu ? (
              <i className="ri-close-line" />
            ) : (
              <i className="ri-link" />
            )}
            <input
              type="checkbox"
              name="socialMenu"
              id="social"
              className="social"
              checked={socialMenu}
              onChange={() => setSocialMenu(!socialMenu)}
              data-testid="socialMenu"
            />
            <SocialMenu />
          </label>
        </li>
        <li>
          <Link
            to="/"
            className={`nav-icon c${invert(theme)} ${selected(
              "home",
              color
            )}`}
          >
            Home
          </Link>
          <Link
            to="/"
            className="nav-icon-mobile"
          >
            { selectedPage === 'home' ? (
            <i className={`ri-home-2-fill c${color}`} />
            ) : (
            <i className={`ri-home-2-line c${invert(theme)}`} />
            ) }
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`nav-icon c${invert(theme)} ${selected(
              "about",
              color
            )}`}
          >
            About
          </Link>
          <Link
            to="/about"
            className="nav-icon-mobile"
          >
            { selectedPage === 'about' ? (
            <i className={`ri-user-fill c${color}`} />
            ) : (
            <i className={`ri-user-line c${invert(theme)}`} />
            ) }
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
          <Link
            to="/projects"
            className="nav-icon-mobile"
          >
            { selectedPage === 'projects' ? (
            <i className={`ri-file-code-fill c${color}`} />
            ) : (
            <i className={`ri-file-code-line c${invert(theme)}`} />
            ) }
          </Link>
        </li>
        {theme === "" && (
          <li
            className={`ri-moon-fill c${invert(theme)}`}
            onClick={changeInvertTheme}
            data-testid="dark-theme"
          />
        )}
        {theme === "-dark" && (
          <li
            className={`ri-sun-fill c${invert(theme)}`}
            onClick={changeInvertTheme}
            data-testid="light-theme"
          />
        )}
        <li>
          <label
            htmlFor="colors"
            className={`colors-label bg${color} c${theme}`}
          >
            {colorsMenu ? (
              <i className="ri-close-line" />
            ) : (
              <i className="ri-palette-line" />
            )}
            <input
              type="checkbox"
              name="colorsMenu"
              id="colors"
              className="colors"
              checked={colorsMenu}
              onChange={() => setColorsMenu(!colorsMenu)}
              data-testid="colorsMenu"
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
