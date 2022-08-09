import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import invert from "../../helpers/invertTheme";
import convertColor from "../../helpers/convertColor";
import Header from "../../components/Header";
import { Icon } from "@iconify/react";
import logo from "././images/logo.png";
import Certificates from "../../components/Certificates";
import SkillsList from "../../components/SkillsList/SkillsList";
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
              {language === "pt"
                ? "Nasci em 2001 em Santa Inês, MA, Brasil. Estudei e me formei na Trybe, uma escola maravilhosa, em Desenvolvimento Web. Depois de alguns meses estudando algo totalmente novo para mim, hoje posso dizer com certeza que é algo que eu realmente amo fazer. Isso me desperta o desejo de ir cada vez mais longe. Então, sim, eu amo ser um desenvolvedor e vou ficar cada vez melhor!"
                : "I was born in 2001 in Santa Inês, MA, Brazil. I have studied and graduated from Trybe, a wonderful school, in Web Development. After a few months studying something totally new for me, today, I can say with certainty that it is something I really love to do.and arouse the desire to go further and further. So, yes, I love being a developer and I will get better and better!"}
            </p>
          </section>
          <img src={logo} alt="biewwl" className={`bg${color}`} />
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
