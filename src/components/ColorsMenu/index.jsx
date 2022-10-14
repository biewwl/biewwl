import { connect } from "react-redux";
import { changeColor, changeTheme } from "../../redux/actions/themeAction";
import languageAction from "../../redux/actions/languageAction";
import { Icon } from "@iconify/react";
import "./styles/ColorsMenu.css";
import "./styles/ColorsMenu-mobile.css";

function ColorsMenu({ dispatch, color, theme, language }) {
  const changeInvertTheme = () => {
    if (theme === "" && color === "-dark") {
      dispatch(changeTheme("dark"));
      dispatch(changeColor(""));
    } else if (theme === "-dark" && color === "") {
      dispatch(changeTheme(""));
      dispatch(changeColor("dark"));
    } else if (theme === "") {
      dispatch(changeTheme("dark"));
    } else {
      dispatch(changeTheme(""));
    }
  };

  const changeLanguage = () => {
    if (language === "pt") dispatch(languageAction("en"));
    if (language === "en") dispatch(languageAction("pt"));
  };

  const setColor = (color) => {
    dispatch(changeColor(color));
  };

  return (
    <>
      <ul className={`bgC${color} colors-menu bb${theme}`}>
        <li
          className={`ex-color bg-blue bb${theme}`}
          onClick={() => setColor("blue")}
        ></li>
        <li
          className={`ex-color bg-green bb${theme}`}
          onClick={() => setColor("green")}
        ></li>
        <li
          className={`ex-color bg-yellow bb${theme}`}
          name="-yellow"
          onClick={() => setColor("yellow")}
        ></li>
        <li
          className={`ex-color bg-red bb${theme}`}
          name="-red"
          onClick={() => setColor("red")}
        ></li>
        <li
          className={`ex-color bg-purple bb${theme}`}
          name="-purple"
          onClick={() => setColor("purple")}
        ></li>
        <li
          className={`ex-color bg-pink bb${theme}`}
          name="-pink"
          onClick={() => setColor("pink")}
        ></li>
        <li
          className={`ex-color bg-orange bb${theme}`}
          name="-orange"
          onClick={() => setColor("orange")}
        ></li>
        <li
          className={`ex-color bg-coffee bb${theme}`}
          name="-coffee"
          onClick={() => setColor("coffee")}
        ></li>
        <li
          className={`ex-color bg-luxe bb${theme}`}
          name="-luxe"
          onClick={() => setColor("luxe")}
        ></li>
        {theme === "-dark" && (
          <li
            className={`ex-color bg bb${theme}`}
            name=""
            onClick={() => setColor("")}
          ></li>
        )}
        {theme === "" && (
          <li
            className={`ex-color bg-dark bb${theme}`}
            name="-dark"
            onClick={() => setColor("dark")}
          ></li>
        )}
        <li className={`theme-li bgC${color} bb${theme}`}>
          {theme === "" && (
            <Icon
              icon="line-md:moon-twotone"
              onClick={changeInvertTheme}
              className={`theme-icon`}
            />
          )}
          {theme === "-dark" && (
            <Icon
              icon="line-md:sunny-outline-twotone-loop"
              onClick={changeInvertTheme}
              className="theme-icon"
            />
          )}
        </li>
        <li className={`language-li bgC${color} bb${theme}`}>
          <Icon
            icon={`emojione:flag-for-${
              language === "pt" ? "united-states" : "brazil"
            }`}
            onClick={changeLanguage}
          />
        </li>
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  color: state.theme.color,
  theme: state.theme.theme,
  language: state.language.language,
});

export default connect(mapStateToProps)(ColorsMenu);
