import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ColorsMenu from "../ColorsMenu";
import SocialMenu from "../SocialMenu";
import { Icon } from "@iconify/react";
import "./styles/Header.css";
import "./styles/Header-mobile.css";

function Header({ color, theme, selectedPage, language }) {
  const [socialMenu, setSocialMenu] = useState(false);
  const [colorsMenu, setColorsMenu] = useState(false);

  const isSelectedPage = (page) => selectedPage === page;

  const getColorSelect = (page) =>
    isSelectedPage(page)
      ? `c${color} bgC${theme} bb${color}`
      : `c${theme} bgC${color}`;

  return (
    <header className={`header bgC${color} --theme${theme} bbT${color}`}>
      <ul>
        <li
          className={`_li_nav_icon_${
            isSelectedPage("home") ? ` selected ${theme}` : ""
          }`}
        >
          <Link to="/" className={`nav-icon ${getColorSelect("home")}`}>
            {isSelectedPage("home") && (
              <div className={`_detail_selected_top bgC${color}`}></div>
            )}
            <Icon icon="line-md:home-simple" />
            <span className={getColorSelect("home")}>
              {language === "pt" ? "Início" : "Home"}
            </span>
            {isSelectedPage("home") && (
              <div className={`_detail_selected_bottom bgC${color}`}></div>
            )}
          </Link>
        </li>
        <li
          className={`_li_nav_icon_${
            isSelectedPage("about") ? ` selected ${theme}` : ""
          }`}
        >
          <Link to="/about" className={`nav-icon ${getColorSelect("about")}`}>
            {isSelectedPage("about") && (
              <div className={`_detail_selected_top bgC${color}`}></div>
            )}
            <Icon icon="line-md:account" />
            <span className={getColorSelect("about")}>
              {language === "pt" ? "Sobre" : "About"}
            </span>
            {isSelectedPage("about") && (
              <div className={`_detail_selected_bottom bgC${color}`}></div>
            )}
          </Link>
        </li>
        <li
          className={`_li_nav_icon_${
            isSelectedPage("projects") ? ` selected ${theme}` : ""
          }`}
        >
          <Link
            to="/projects"
            className={`nav-icon ${getColorSelect("projects")}`}
          >
            {isSelectedPage("projects") && (
              <div className={`_detail_selected_top bgC${color}`}></div>
            )}
            <Icon icon="line-md:document-code" />
            <span className={getColorSelect("projects")}>
              {language === "pt" ? "Projetos" : "Projects"}
            </span>
            {isSelectedPage("projects") && (
              <div className={`_detail_selected_bottom bgC${color}`}></div>
            )}
          </Link>
        </li>
      </ul>
      <section className="options_header">
      <label
          htmlFor="colors"
          className={`colors-label bgC${theme} c${color} bb${color}`}
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
        <label
          htmlFor="social"
          className={`social-label bgC${theme} c${color} bb${color}`}
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
      </section>
    </header>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
  language: state.language.language,
});

export default connect(mapStateToProps)(Header);
