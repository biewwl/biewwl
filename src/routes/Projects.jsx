import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import "./Projects.css";
import data from "../helpers/dataProjects";
import './Projects-mobile.css';
import invert from "../helpers/invertTheme";

function Projects({ theme }) {
  return (
    <>
      <Header selectedPage="projects" />
      <main className={`bg${theme} projects`}>
        {data.map((e) => (
          <section className="project-card" key={e.name}>
            <a
              rel="noreferrer"
              target="_blank"
              href={e.url}
              className="project-link"
            >
              <img src={e.image} alt={e.name}/>
            </a>
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
