import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import convertColor from "../../helpers/convertColor";
import invert from "../../helpers/invertTheme";
import biewwl from "./images/biewwl.png";
import "./styles/Home.css";
import "./styles/Home-mobile.css";

function Home({ color, theme, language }) {
  return (
    <>
      <Helmet title={language === "pt" ? "Sobre" : "About"}>
        <meta name="theme-color" content={convertColor(color)} />
      </Helmet>
      <Header selectedPage="home" />
      <main className={`home bgC${theme}`}>
        <div className="slogan">
          <h2 className={`i-am c${invert(theme)}`}>
            {language === "en" && "I am"}
            {language === "pt" && "Eu sou"}
          </h2>
          <h1 className={`c${color}`}>Gabriel Dias</h1>
          <h2 className={`dev c${invert(theme)}`}>
            {language === "en" && "Full Stack WEB Developer"}
            {language === "pt" && "Desenvolvedor WEB Full Stack"}
          </h2>
          <Link to="/projects" className={`explore-button bb${color} c${color}`}>
            {language === "en" && "Projects"}
            {language === "pt" && "Projetos"}
          </Link>
        </div>
        <img src={biewwl} alt="" className={`home-image bgC${color}`} />
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
  language: state.language.language,
});

export default connect(mapStateToProps)(Home);
