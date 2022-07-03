import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./styles/Projects.css";
import "./styles/Projects-mobile.css";
import data from "../../helpers/dataProjects";
import invert from "../../helpers/invertTheme";
import { Link } from "react-router-dom";
import { goSearch } from "../../redux/actions/searchAction";
import Header from "../../components/Header";

function Projects({ theme, color, query, dispatch }) {
  const [querySearch, setQuerySearch] = useState(query);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const filterProjects = () =>
    data.filter(
      (project) =>
        project.name.toLowerCase().includes(query.toLowerCase()) ||
        project.skills.some((skill) =>
          skill.toLowerCase().includes(query.toLowerCase())
        ) ||
        project.tools.some((tool) =>
          tool.name.toLowerCase().includes(query.toLowerCase())
        )
    );

  const handleQueryChange = ({ target }) => {
    setQuerySearch(target.value);
    dispatch(goSearch(target.value));
  };

  return (
    <>
      <Header selectedPage="projects" />
      <main className={`projects${theme} bg${theme}`}>
        <section className="projects-search">
          <span className={`c${invert(theme)}`}>{querySearch !== '' ? `"${querySearch}"` : 'Start a new search'}</span>
          <input
            type="text"
            className="input-search"
            value={querySearch}
            onChange={handleQueryChange}
            placeholder="Name, library..."
            />
        </section>
        <article className="container-projects">
          {filterProjects().map((e) => (
            <section key={e.name} className="card-project">
              <Link rel="noreferrer" to={`/projects/sites/${e.path}`}>
                <img className="card-image" src={ e.images[0] } alt="" />
                <section className="card-infos">
                  <div className="card-title">
                    <span className={`c${color}`}>{e.type}</span>
                    <h3 className={`c${invert(theme)}`}>{e.name}</h3>
                  </div>
                  <p className={`c2${invert(theme)}`}>{e.description}</p>
                </section>
                <section className={`card-difficulty bg${color}`}>
                  <span className={`card-star c${theme}`}>{e.difficulty}</span>
                </section>
              </Link>
            </section>
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
});

export default connect(mapStateToProps)(Projects);
