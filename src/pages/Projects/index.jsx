import React from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import "./styles/Projects.css";
import data from "../../helpers/dataProjects";
import './styles/Projects-mobile.css';
import invert from "../../helpers/invertTheme";
import { Link } from "react-router-dom";

function Projects({ theme }) {
  return (
    <>
      <Header selectedPage="projects" />
      <main className={`bg${theme} projects`}>
        {data.map((e) => (
          <section className="project-card" key={e.name}>
            <Link
              rel="noreferrer"
              to={`/projects/${e.path}`}
              className="project-link"
            >
              <img src={e.cover} alt={e.name}/>
            </Link>
            <h4 className={`c${invert(theme)}`}>{e.name}</h4>
          </section>
        ))}
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Projects);
