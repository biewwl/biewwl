import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ColorsMenu from "./ColorsMenu";
import SocialMenu from "./SocialMenu";
import { changeColor, changeTheme } from "../redux/actions/themeAction";
import invert from "../helpers/invertTheme";
import "./Navegation.css";

class Navegation extends Component {
  constructor() {
    super();
    this.state = {
      socialMenu: false,
      colorsMenu: false,
    };
  }

  checkClick = ({ target }) => {
    this.setState({ [target.name]: target.checked });
  };

  changeInvertTheme = () => {
    const { theme, color, dispatch } = this.props;
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

  selected = (button, color) => {
    const { selectedPage } = this.props;
    if (button === selectedPage) return `selected${color}`;
    return "";
  };

  render() {
    const { color, theme } = this.props;
    const { socialMenu, colorsMenu } = this.state;
    const { checkClick, changeInvertTheme, selected } = this;
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
                onChange={checkClick}
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
              className={`nav-icon-mobile c${invert(theme)} ${selected(
                "home",
                color
              )}`}
            >
              <i className="ri-home-2-line" />
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
              className={`nav-icon-mobile c${invert(theme)} ${selected(
                "about",
                color
              )}`}
            >
              <i className="ri-user-line" />
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
              className={`nav-icon-mobile c${invert(theme)} ${selected(
                "projects",
                color
              )}`}
            >
              <i className="ri-code-s-slash-line" />
            </Link>
          </li>
          {theme === "" && (
            <li
              className={`ri-moon-fill c${invert(theme)}`}
              onClick={changeInvertTheme}
            />
          )}
          {theme === "-dark" && (
            <li
              className={`ri-sun-fill c${invert(theme)}`}
              onClick={changeInvertTheme}
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
                onChange={checkClick}
              />
              <ColorsMenu />
            </label>
          </li>
        </ul>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
});

export default connect(mapStateToProps)(Navegation);
