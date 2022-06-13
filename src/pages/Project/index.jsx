import data from "../../helpers/dataProjects";
import Gallery from "./components/Gallery";
import { connect } from "react-redux";
import Header from "../../components/Header";
import invert from "../../helpers/invertTheme";
import "./styles/Project.css";
import "./styles/Project-mobile.css";

function Project({ match, theme, color }) {
  const {
    params: { project },
  } = match;

  const dataProject = data.find((e) => e.path === project);

  return (
    <>
      <Header selectedPage="projects" />
      <main className={`project bg${theme}`}>
        {dataProject ? (
          <>
            <section className="project-name">
              <h1 className={`c${invert(theme)}`}>{dataProject.name}</h1>
              <span className={`c${color}`}>{dataProject.development}</span>
            </section>
            <section className={`project-detail bg${color}`}>
              <Gallery images={dataProject.images} />
              <section className={`project-description c${theme}`}>
                <h2>Description</h2>
                <p>{dataProject.description}</p>
                <section className="project-links">
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
            <section className="project-infos">
              <section>
                <h3 className={`c${color}`}>Skills Used</h3>
                <p>
                  {dataProject.skills.map((e) => (
                    <span className={`skill c${invert(theme)}`} key={e}>
                      {e}
                    </span>
                  ))}
                </p>
              </section>
              <section>
                <h3 className={`c${color}`}>Libraries Used</h3>
                <p>
                  {dataProject.tools.map((e) => (
                    <span className={`tool c${invert(theme)}`} key={e}>
                      {e}
                    </span>
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
