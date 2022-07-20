import React from "react";
import { connect } from "react-redux";
import {
  changeColor,
  changeTheme,
} from "../../../../redux/actions/themeAction";
import "./styles/ColorsMenu.css";
import "./styles/ColorsMenu-mobile.css";
import { Icon } from "@iconify/react";

function ColorsMenu({ dispatch, color, theme }) {
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

  return (
    <>
      <ul className={`bg${color} colors-menu bb${theme}`}>
        <li
          className={`ex-color bg-blue bb${theme}`}
          onClick={() => dispatch(changeColor("-blue"))}
        ></li>
        <li
          className={`ex-color bg-green bb${theme}`}
          onClick={() => dispatch(changeColor("-green"))}
        ></li>
        <li
          className={`ex-color bg-yellow bb${theme}`}
          name="-yellow"
          onClick={() => dispatch(changeColor("-yellow"))}
        ></li>
        <li
          className={`ex-color bg-red bb${theme}`}
          name="-red"
          onClick={() => dispatch(changeColor("-red"))}
        ></li>
        <li
          className={`ex-color bg-purple bb${theme}`}
          name="-purple"
          onClick={() => dispatch(changeColor("-purple"))}
        ></li>
        <li
          className={`ex-color bg-pink bb${theme}`}
          name="-pink"
          onClick={() => dispatch(changeColor("-pink"))}
        ></li>
        <li
          className={`ex-color bg-orange bb${theme}`}
          name="-orange"
          onClick={() => dispatch(changeColor("-orange"))}
        ></li>
        {theme === "-dark" && (
          <li
            className={`ex-color bg bb${theme}`}
            name=""
            onClick={() => dispatch(changeColor(""))}
          ></li>
        )}
        {theme === "" && (
          <li
            className={`ex-color bg-dark bb${theme}`}
            name="-dark"
            onClick={() => dispatch(changeColor("-dark"))}
          ></li>
        )}
        <li className={`theme-li bg${color} bb${theme}`}>
          {theme === "" && (
            <Icon
              icon="line-md:moon-filled"
              onClick={changeInvertTheme}
              className={`theme-icon`}
            />
          )}
          {theme === "-dark" && (
            <Icon
              icon="line-md:sun-rising-filled-loop"
              onClick={changeInvertTheme}
              className={`theme-icon`}
            />
          )}
        </li>
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  color: state.theme.color,
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(ColorsMenu);
