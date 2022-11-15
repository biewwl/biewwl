import { useEffect } from "react";
import data from "../../data/Projects";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Header from "../../components/Header";
import Gallery from "../../components/GalleryProject";
import { Link } from "react-router-dom";
import coverInDev from "../../images/inDev.png";
import "./styles/Project.css";
import "./styles/Project-mobile.css";
import { convertColor, invert } from "../../helpers/theme";
import Readme from "../../components/Readme";

function Project({ match, theme, color, language }) {
  const {
    params: { project },
  } = match;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dataProject = data.find((e) => e.path === project);

  const {
    name,
    namePt,
    urlREADME,
    description,
    descriptionPt,
    skills,
    tools,
    images,
    done,
    development,
    links: { repository, project: linkProject },
  } = dataProject;

  return (
    <>
      <Header selectedPage="projects" />
      <main className={`project bgC${theme}`}>
        {dataProject ? (
          <>
            <Helmet title={language === "pt" ? namePt : name}>
              <meta name="theme-color" content={convertColor(color)} />
            </Helmet>
            <section className="project-name">
              <div>
                <Link to="/projects" className={`c${color}`}>
                  {language === "pt" ? "Projetos /" : "Projects /"}
                </Link>
                <h1 className={`_h1_project c${invert(theme)}`}>
                  {language === "pt" ? namePt : name}
                  {!done && (
                    <span>
                      {language === "pt"
                        ? " (em desenvolvimento)"
                        : " (in development)"}
                    </span>
                  )}
                </h1>
              </div>
              <span className={`c${color}`}>{development}</span>
            </section>
            <section
              className={`project-detail bg${color}${!done ? " inDev" : ""}`}
            >
              <Gallery images={images.length === 0 ? [coverInDev] : images} />
              <section className={`project-description c${theme}`}>
                <h2>{language === "pt" ? "Descrição" : "Description"}</h2>
                <p>{language === "pt" ? descriptionPt : description}</p>
                <section className="project-links">
                  <a
                    href={repository}
                    target="_blank"
                    rel="noreferrer"
                    className={`c${theme} bb${theme}`}
                  >
                    <span>
                      {language === "pt" ? "Repositório" : "Repository"}
                    </span>
                  </a>
                  <a
                    href={linkProject}
                    target="_blank"
                    rel="noreferrer"
                    className={`bgC${theme} c${color} bb${theme}$`}
                  >
                    <span>{language === "pt" ? "Projeto" : "Project"}</span>
                  </a>
                </section>
              </section>
            </section>
            {urlREADME && <Readme urlREADME={urlREADME} />}
            <section className="project-infos">
              <section>
                <h3 className={`c${color}`}>
                  {language === "pt" ? "Habilidades Usadas" : "Skills Used"}
                </h3>
                <p>
                  {skills.map((e, i) => (
                    <span className={`skill c${invert(theme)}`} key={i}>
                      {e}
                    </span>
                  ))}
                </p>
              </section>
              <section>
                {tools.length > 0 && (
                  <>
                    <h3 className={`c${color}`}>
                      {language === "pt" ? "Ferramentas Usadas" : "Tools Used"}
                    </h3>
                    <p>
                      {tools.map((e, i) => (
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={e.link}
                          className={`tool c${invert(theme)}`}
                          key={i}
                        >
                          {e.name}
                        </a>
                      ))}
                    </p>
                  </>
                )}
              </section>
            </section>
          </>
        ) : (
          "not found"
        )}
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  color: state.theme.color,
  theme: state.theme.theme,
  language: state.language.language,
});

export default connect(mapStateToProps)(Project);
