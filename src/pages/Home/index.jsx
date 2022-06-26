import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import invert from "../../helpers/invertTheme";
import "./styles/Home.css";
import "./styles/Home-mobile.css";
import { changeColor, changeTheme } from "../../redux/actions/themeAction";
import biewwl from "./images/biewwl.jpg";
import { Icon } from "@iconify/react";
import { useState } from "react";

function Home({ color, theme, dispatch }) {
  const [querySearch, setQuerySearch] = useState("");

  const handleQueryChange = ({ target }) => {
    setQuerySearch(target.value);
  }

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
      {/* <Header selectedPage="home" /> */}
      <main className={`bg${theme} home`}>
        <section className={`card-left${theme}`}>
          <h1>biewwl</h1>
          <section className={`home-introduction`}>
            <span>Welcome!</span>
            <h2>
              Follow my projects developed in my trajectory as a WEB developer
            </h2>
            <Link
              to="/projects"
              className={`home-button bg${theme} c${invert(theme)}`}
            >
              Explore projects
            </Link>
          </section>
        </section>
        <section className={`card-right${theme}`}>
          <div className="top-content">
            <section className="header-card-right">
              <span className="star-home">✦</span>
              <img src={biewwl} alt="" />
            </section>
            <section className="search-container">
              <h3 className={`message c${invert(theme)}`}>
                Feel free to explore the projects!
              </h3>
              <div htmlFor="search">
                <input
                  type="text"
                  id="search"
                  placeholder="Name, library..."
                  value={querySearch}
                  onChange={handleQueryChange}
                />
                {querySearch !== '' && <Icon
                  icon="akar-icons:arrow-right"
                  className={`c${invert(theme)}`}
                />}
              </div>
            </section>
          </div>
          <div className="bottom-content">
            <nav>
              <Link to="/about" className={`c${invert(theme)}`}>
                About
              </Link>
              <Link to="/projects" className={`c${invert(theme)}`}>
                Projects
              </Link>
            </nav>
            <p className={`about-home`}>
              Since I was very young I have always been fascinated by virtual
              worlds and at the beginning of 2022 I joined a web development
              school. I learned to love programming and became very good at
              it...
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/biewwl"
                  target="_blank"
                  rel="noreferrer"
                  className={`c${invert(theme)}`}
                >
                  <i className="ri-github-line" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/biewwl/"
                  target="_blank"
                  rel="noreferrer"
                  className={`c${invert(theme)}`}
                >
                  <i className="ri-linkedin-line" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/21biewwl"
                  target="_blank"
                  rel="noreferrer"
                  className={`c${invert(theme)}`}
                >
                  <i className="ri-twitter-line" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/biewwl/"
                  target="_blank"
                  rel="noreferrer"
                  className={`c${invert(theme)}`}
                >
                  <i className="ri-instagram-line" />
                </a>
              </li>
            </ul>
          </div>
        </section>
        {theme === "" && (
          <span className={`ri-moon-fill`} onClick={changeInvertTheme} />
        )}
        {theme === "-dark" && (
          <span className={`ri-sun-fill`} onClick={changeInvertTheme} />
        )}
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  color: state.theme.color,
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Home);
