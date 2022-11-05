import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Header from "../../components/Header";
import { Icon } from "@iconify/react";
import biewwl from "././images/biewwl.jpg";
import Certificates from "../../components/Certificates";
import SkillsList from "../../components/SkillsList/SkillsList";
import { convertColor, invert } from "../../helpers/theme";
import { introduce } from '../../data/Introduce';
import "./styles/About.css";
import "./styles/About-mobile.css";

function About({ color, theme, language }) {
  const [showCertificates, setShowCertificates] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCertificates = () => {
    setShowCertificates(!showCertificates);
  };

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
          <img src={biewwl} alt="biewwl" className={`bg${color}`} />
        </article>
        <article>
          <h3
            className={`bgC${color} c${theme} certificates-h3${
              showCertificates ? " show" : ""
            }`}
            onClick={toggleCertificates}
          >
            <div>
              <span>{language === "pt" ? "Certificados" : "Certificates"}</span>
              <Icon icon="teenyicons:certificate-outline" />
            </div>
            <Icon icon={`fe:arrow-${showCertificates ? "up" : "down"}`} />
          </h3>
          <Certificates visible={showCertificates} />
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
