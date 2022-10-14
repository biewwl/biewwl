import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ColorsMenu from "../ColorsMenu";
import SocialMenu from '../SocialMenu';
import { Icon } from "@iconify/react";
import "./styles/Header.css";
import "./styles/Header-mobile.css";
import { invert } from "../../helpers/theme";

function Header({ color, theme, selectedPage, language }) {
  const [socialMenu, setSocialMenu] = useState(false);
  const [colorsMenu, setColorsMenu] = useState(false);

  const getColorSelect = (page) =>
    selectedPage === page ? `c${color}` : `c${invert(theme)}`;

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
          <Link to="/" className={`nav-icon ${getColorSelect("home")}`}>
            <Icon icon="line-md:home-simple" />
            <span>{language === "pt" ? "Início" : "Home"}</span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`nav-icon ${getColorSelect("about")}`}
          >
            <Icon icon="line-md:account" />
            <span>{language === "pt" ? "Sobre" : "About"}</span>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`nav-icon ${getColorSelect("projects")}`}
          >
            <Icon icon="line-md:document-code" />
            <span>{language === "pt" ? "Projetos" : "Projects"}</span>
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
  language: state.language.language,
});

export default connect(mapStateToProps)(Header);
