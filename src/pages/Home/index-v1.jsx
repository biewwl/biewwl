import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Helmet from "react-helmet";
import invert from "../../helpers/invertTheme";
import convertColor from "../../helpers/convertColor";
import { changeColor, changeTheme } from "../../redux/actions/themeAction";
import { goSearch } from "../../redux/actions/searchAction";
import changeLanguage from "../../redux/actions/languageAction";
import logo from "./images/logo.png";
import { Icon } from "@iconify/react";
import {dataIntroduce, dataIntroducePT} from "../../helpers/dataIntroduce";
import "./styles/Home.css";
import "./styles/Home-mobile.css";

function Home({ color, theme, query, language, dispatch }) {
  const history = useHistory();

  const [querySearch, setQuerySearch] = useState(query);
  const [introduce, setIntroduce] = useState([]);
  const [introNumber, setIntroNumber] = useState(0);

  useEffect(() => {
    if (language === "pt") {
      setIntroduce(dataIntroducePT);
      randomNumber(dataIntroducePT.length);
    } else {
      setIntroduce(dataIntroduce);
      randomNumber(dataIntroduce.length);
    }
    window.scrollTo(0, 0);
  }, [language]);

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

  const randomNumber = (max) => {
    setIntroNumber(Math.floor(Math.random() * max));
  };

  const handleLanguage = () => {
    if (language === "en") {
      dispatch(changeLanguage("pt"));
    } else {
      dispatch(changeLanguage("en"));
    }
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
            <span>
              {language === "en" && "Welcome!"}
              {language === "pt" && "Bem-vindo(a)!"}
            </span>
            <h2>{introduce[introNumber]}</h2>
            <span
              className="home-button"
            >
              <Link to="/projects" className={`c${invert(theme)}`}>
                {language === "en" && "Explore my Projects"}
                {language === "pt" && "Explore meus Projetos"}
              </Link>
            </span>
          </section>
        </section>
        <section className={`card-right${theme}`}>
          <div className="top-content">
            <section className="header-card-right">
              <span onClick={handleLanguage}>
                {language === "pt" && <Icon icon="twemoji:flag-brazil" />}
                {language === "en" && (
                  <Icon icon="emojione-v1:flag-for-united-states" />
                )}
              </span>
              <img src={logo} className={`bgC${color}`} alt="logo" />
            </section>
            <section className="search-container">
              <h3 className={`message c${invert(theme)}`}>
                {language === "pt" &&
                  "Sinta-se à vontade para explorar meus projetos!"}
                {language === "en" && "Feel free to explore the projects!"}
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
                {language === "pt" && "Sobre"}
                {language === "en" && "About"}
              </Link>
              <Link to="/projects" className={`c${invert(theme)}`}>
                {language === "pt" && "Projetos"}
                {language === "en" && "Projects"}
              </Link>
            </nav>
            <p className={`about-home`}>
              {language === "en" &&
                "Hi! My name is Gabriel Dias. Since I was very young I have always been fascinated by virtual worlds and at the beginning of 2022 I joined a WEB development school. I learned to love programming and became very good at it..."}
              {language === "pt" &&
                "Olá! Meu nome é Gabriel Dias. Desde muito novo, sempre me fui fascinado por mundos virtuais e em 2022 me juntei a uma escola de desenvolvimento WEB. Eu aprendi a amar programação e me tornei muito bom no que faço..."}
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/biewwl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-github-line" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/biewwl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-linkedin-line" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/21biewwl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-twitter-line" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/biewwl/"
                  target="_blank"
                  rel="noreferrer"
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
  language: state.language.language,
});

export default connect(mapStateToProps)(Home);
