import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Helmet from "react-helmet";
import invert from "../../helpers/invertTheme";
import convertColor from "../../helpers/convertColor";
import { changeColor, changeTheme } from "../../redux/actions/themeAction";
import { goSearch } from "../../redux/actions/searchAction";
import logo from "./images/logo.png";
import { Icon } from "@iconify/react";
import dataIntroduce from "../../helpers/dataIntroduce";
import "./styles/Home.css";
import "./styles/Home-mobile.css";

function Home({ color, theme, query, dispatch }) {
  const history = useHistory();

  useEffect(() => {
    randomIntro();
    window.scrollTo(0, 0);
  }, []);

  const [querySearch, setQuerySearch] = useState(query);
  const [intro, setIntro] = useState("");

  const handleQueryChange = ({ target }) => {
    setQuerySearch(target.value);
  };

  const handleSearch = () => {
    dispatch(goSearch(querySearch));
    history.push("/projects");
  };

  const handleSearchEnter = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      e.preventDefault();
      handleSearch();
    }
  };

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

  const randomIntro = () => {
    const random = Math.floor(Math.random() * dataIntroduce.length);
    setIntro(dataIntroduce[random]);
  };

  return (
    <>
      <Helmet title="biewwl">
        <meta name="theme-color" content={convertColor(theme, true)} />
      </Helmet>
      <main className={`bgC${theme} home`}>
        <section className={`card-left${theme}`}>
          <section className="home-logo-theme">
            <h1>biewwl</h1>
            {theme === "" && (
              <Icon
                icon="line-md:moon-filled"
                onClick={changeInvertTheme}
                className="c theme-icon"
              />
            )}
            {theme === "-dark" && (
              <Icon
                icon="line-md:sun-rising-filled-loop"
                onClick={changeInvertTheme}
                className="c-yellow theme-icon"
              />
            )}
          </section>
          <section className={`home-introduction`}>
            <span>Welcome!</span>
            <h2>{intro}</h2>
            <Link to="/projects" className="home-button">
              Explore projects
            </Link>
          </section>
        </section>
        <section className={`card-right${theme}`}>
          <div className="top-content">
            <section className="header-card-right">
              <span className={`star-home c${color}`}>✦</span>
              <img src={logo} className={`bgC${color}`} alt="logo" />
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
                  onKeyDown={handleSearchEnter}
                />
                <Icon
                  icon="akar-icons:arrow-right"
                  className={`c${color}${
                    querySearch !== ""
                      ? " arrow-search-visible"
                      : " arrow-search"
                  }`}
                  onClick={handleSearch}
                />
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
              Hi! My name is Gabriel Dias. Since I was very young I have always
              been fascinated by virtual worlds and at the beginning of 2022 I
              joined a web development school. I learned to love programming and
              became very good at it...
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/biewwl"
                  target="_blank"
                  rel="noreferrer"
                  className={`c${color}`}
                >
                  <i className="ri-github-line" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/biewwl/"
                  target="_blank"
                  rel="noreferrer"
                  className={`c${color}`}
                >
                  <i className="ri-linkedin-line" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/21biewwl"
                  target="_blank"
                  rel="noreferrer"
                  className={`c${color}`}
                >
                  <i className="ri-twitter-line" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/biewwl/"
                  target="_blank"
                  rel="noreferrer"
                  className={`c${color}`}
                >
                  <i className="ri-instagram-line" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  color: state.theme.color,
  theme: state.theme.theme,
  query: state.search.query,
});

export default connect(mapStateToProps)(Home);
