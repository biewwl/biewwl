import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import data from "../../data/Projects";
import { goSearch } from "../../redux/actions/searchAction";
import Header from "../../components/Header";
import CardProject from "../../components/CardProject";
import "./styles/Projects.css";
import "./styles/Projects-mobile.css";
import { convertColor, invert } from "../../helpers/theme";

function Projects({ theme, color, query, language, dispatch }) {
  const [querySearch, setQuerySearch] = useState(query);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterProjects = () =>
    data.filter((project) => {
      const name = language === "pt" ? project.namePt : project.name;
      return (
        name.toLowerCase().includes(query.toLowerCase()) ||
        project.skills.some((skill) =>
          skill.toLowerCase().includes(query.toLowerCase())
        ) ||
        project.tools.some((tool) =>
          tool.name.toLowerCase().includes(query.toLowerCase())
        ) ||
        project.type.toLowerCase().includes(query.toLowerCase())
      );
    });

  const handleQueryChange = ({ target }) => {
    setQuerySearch(target.value);
    dispatch(goSearch(target.value));
  };

  return (
    <>
      <Helmet title={language === "pt" ? "Projetos" : "Projects"}>
        <meta name="theme-color" content={convertColor(color)} />
      </Helmet>
      <Header selectedPage="projects" />
      <main className={`projects${theme} bgC${theme}`}>
        <section className="projects-search">
          <span className={`c${invert(theme)}`}>
            {querySearch !== ""
              ? `"${querySearch}"`
              : `${
                  language === "pt"
                    ? "Pesquisar nos projetos"
                    : "Search in projects"
                }`}
          </span>
          <input
            type="text"
            className="input-search"
            value={querySearch}
            onChange={handleQueryChange}
            placeholder={
              language === "pt" ? "Nome, biblioteca..." : "Name, library..."
            }
          />
        </section>
        <article className="container-projects">
          {filterProjects().map((e, i) => (
            <CardProject key={i} projectDetails={e} />
          ))}
        </article>
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
  query: state.search.query,
  language: state.language.language,
});

export default connect(mapStateToProps)(Projects);
