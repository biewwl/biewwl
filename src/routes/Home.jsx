import React, { Component } from "react";
import Navegation from "../components/Navegation";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import invert from '../helpers/invertTheme'
import "./Home.css";
import "./Home-mobile.css";

class Home extends Component {
  render() {
    const { color, theme } = this.props;
    return (
      <>
        <Navegation selectedPage="home" />
        <main className={`bg${theme} home`}>
          <section className="home-main">
            <section className="home-left-content">
              <section className={`home-container-left c${invert(theme)}`}>
                <span className="i-am">I am</span>
                <h1 className={`name c${color}`}>Gabriel Dias</h1>
                <span className="web-developer">Web Developer</span>
                <Link to="/projects" className={`projects-button bg${color} c${theme}`}>Projects</Link>
              </section>
            </section>
            <section className="home-right-content">
              <div className={`bg${color} div-image`}></div>
            </section>
          </section>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  color: state.theme.color,
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Home);
