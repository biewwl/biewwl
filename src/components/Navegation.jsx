import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ColorsMenu from "./ColorsMenu";
import SocialMenu from "./SocialMenu";
import { changeColor, changeTheme } from "../redux/actions/themeAction";
import invert from "../helpers/invertTheme";
import "./Navegation.css";
import "./Navegation-mobile.css";

class Navegation extends Component {
  constructor() {
    super();
    this.state = {
      sociais: false,
      colors: false,
    };
  }

  checkClick = ({ target }) => {
    this.setState({ sociais: target.checked });
  };

  checkColor = ({ target }) => {
    this.setState({ colors: target.checked });
  };

  changeInvertTheme = () => {
    const { theme, color, dispatch } = this.props;
    if (theme === "" && color === "-dark") {
      console.log("theme white, color dark");
      dispatch(changeTheme("-dark"));
      dispatch(changeColor(""));
    } else if (theme === "-dark" && color === "") {
      console.log("theme dark, color white");
      dispatch(changeTheme(""));
      dispatch(changeColor("-dark"));
    } else if (theme === "") {
      dispatch(changeTheme("-dark"));
    } else {
      dispatch(changeTheme(""));
    }
  };

  selected = (button) => {
    const { selectedPage } = this.props;
    if (button === selectedPage) return "selected";
    return "";
  };

  render() {
    const { color, theme } = this.props;
    const { sociais, colors } = this.state;
    return (
      <header className={`top-bar bg${theme} bbT${color}`}>
        <span className={`logo c${color}`}>biewwl</span>
        <label
          htmlFor="sociais"
          className={`round-button bg${color} c${theme} sociais-label bb${theme}`}
        >
          {sociais ? (
            <i className="ri-close-line" />
          ) : (
            <i className="ri-link" />
          )}
          <input
            type="checkbox"
            name="sociais"
            id="sociais"
            className="sociais"
            checked={sociais}
            onChange={this.checkClick}
          />
          <SocialMenu />
        </label>
        <ul className={`top-bar-right`}>
          <nav>
            <ul className={`top-bar-right`}>
              <li>
                <Link
                  to="/"
                  className={`nav-icon c${invert(theme)} ${`${this.selected(
                    "home"
                  )}${color}`}`}
                >
                  Home
                </Link>
                <Link
                  to="/"
                  className={`nav-icon-mobile c${invert(
                    theme
                  )} ${`${this.selected("home")}${color}`}`}
                >
                  <i className="ri-home-2-line"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`nav-icon c${invert(theme)} ${`${this.selected(
                    "about"
                  )}${color}`}`}
                >
                  About
                </Link>
                <Link
                  to="/about"
                  className={`nav-icon-mobile c${invert(theme)} ${`${this.selected(
                    "about"
                  )}${color}`}`}
                >
                  <i className="ri-user-line"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`nav-icon c${invert(theme)}  ${`${this.selected(
                    "projects"
                  )}${color}`}`}
                >
                  Projects
                </Link>
                <Link
                  to="/projects"
                  className={`nav-icon-mobile c${invert(theme)}  ${`${this.selected(
                    "projects"
                  )}${color}`}`}
                >
                  <i className="ri-code-s-slash-line"></i>
                </Link>
              </li>
            </ul>
          </nav>
          {theme === "" && (
            <i
              className={`ri-moon-fill c${invert(theme)}`}
              onClick={() => this.changeInvertTheme()}
            />
          )}
          {theme === "-dark" && (
            <i
              className={`ri-sun-fill c${invert(theme)}`}
              onClick={() => this.changeInvertTheme()}
            />
          )}
          <label
            htmlFor="colors"
            className={`round-button bg${color} c${theme}`}
          >
            {colors ? (
              <i className="ri-close-line" />
            ) : (
              <i className="ri-palette-line" />
            )}
            <input
              type="checkbox"
              name="colors"
              id="colors"
              className="colors"
              checked={colors}
              onChange={this.checkColor}
            />
            <ColorsMenu />
          </label>
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
