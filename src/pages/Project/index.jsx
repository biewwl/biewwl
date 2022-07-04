import data from "../../helpers/dataProjects";
import Gallery from "./components/Gallery";
import { connect } from "react-redux";
import Header from "../../components/Header";
import invert from "../../helpers/invertTheme";
import "./styles/Project.css";
import "./styles/Project-mobile.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Project({ match, theme, color }) {
  const {
    params: { project },
  } = match;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const dataProject = data.find((e) => e.path === project);

  return (
    <>
      <Header selectedPage="projects" />
      <main className={`site bg${theme}`}>
        {dataProject ? (
          <>
            <section className="site-name">
              <div>
                <Link to="/projects" className={`c${color}`}>Projects /</Link>
                {/* <Link to="/sites" className={`c${color}`}>Sites /</Link>clear */}
                <h1 className={`c${invert(theme)}`}>{dataProject.name}</h1>
              </div>
              <span className={`c${color}`}>{dataProject.development}</span>
            </section>
            <section className={`site-detail bg${color}`}>
              <Gallery images={dataProject.images} />
              <section className={`site-description c${theme}`}>
                <h2>Description</h2>
                <p>{dataProject.description}</p>
                <section className="site-links">
                  <a
                    href={dataProject.links.repository}
                    target="_blank"
                    rel="noreferrer"
                    className={`c${theme} bb${theme}`}
                  >
                    <span>Repository</span>
                  </a>
                  <a
                    href={dataProject.links.project}
                    target="_blank"
                    rel="noreferrer"
                    className={`bg${theme} c${color} bb${theme}`}
                  >
                    <span>Project</span>
                  </a>
                </section>
              </section>
            </section>
            <section className="site-infos">
              <section>
                <h3 className={`c${color}`}>Skills Used</h3>
                <p>
                  {dataProject.skills.map((e, i) => (
                    <span className={`skill c${invert(theme)}`} key={i}>
                      {e}
                    </span>
                  ))}
                </p>
              </section>
              <section>
                <h3 className={`c${color}`}>Libraries Used</h3>
                <p>
                  {dataProject.tools.map((e, i) => (
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
});

export default connect(mapStateToProps)(Project);
