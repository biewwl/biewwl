import { useEffect } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Header from "../../components/Header";
import { Icon } from "@iconify/react";
import pictureAbout from "././images/picture_about.jpg";
import Certificates from "../../components/Certificates";
import SkillsList from "../../components/SkillsList/SkillsList";
import { convertColor, invert } from "../../helpers/theme";
import { introduce } from '../../data/Introduce';
import "./styles/About.css";
import "./styles/About-mobile.css";

function About({ color, theme, language }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet title={language === "pt" ? "Sobre" : "About"}>
        <meta name="theme-color" content={convertColor(color)} />
      </Helmet>
      <Header selectedPage="about" />
      <main className={`about bgC${theme}`}>
        <article className={`container-about-me c${invert(theme)}`}>
          <section className={`about-me`}>
            <h3 className={`c${color}`}>
              {language === "pt"
                ? "Um pouco sobre mim"
                : "A little about me..."}
            </h3>
            <p>
              {introduce[language]}
            </p>
          </section>
          <img src={pictureAbout} alt="biewwl" className={`bg${color}`} />
        </article>
        <article className={`certificates-area bgC${color}`}>
          <h3
            className={`c${theme} certificates-h3`}
          >
            <span>
              <span>{language === "pt" ? "Certificados" : "Certificates"}</span>
              <Icon icon="teenyicons:certificate-outline" />
            </span>
          </h3>
          <Certificates />
        </article>
        <SkillsList />
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
  language: state.language.language,
});

export default connect(mapStateToProps)(About);
