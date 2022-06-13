import React from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import invert from "../../helpers/invertTheme";
import "./styles/Home.css";
import "./styles/Home-mobile.css";

function Home({ color, theme }) {
  return (
    <>
      <Header selectedPage="home" />
      <main className={`bg${theme} home`}>
        <section className="home-introduction-container">
          <section className={`home-introduction-content c${invert(theme)}`}>
            <span className="i-am">I am</span>
            <h1 className={`name c${color}`}>Gabriel Dias</h1>
            <span className="web-developer">Web Developer</span>
            <Link
              to="/projects"
              className={`projects-button bg${color} c${theme}`}
            >
              Projects
            </Link>
          </section>
        </section>
        <section className="home-image-container">
          <div
            className={`bg${color} home-image`}
            data-testid="homeImage"
          ></div>
        </section>
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  color: state.theme.color,
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Home);
