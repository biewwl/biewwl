import React, { Component } from "react";
import Navegation from "../components/Navegation";
import { connect } from "react-redux";
import Gallery from "../components/Gallery";
import { HashLink as Link } from "react-router-hash-link";
import invert from '../helpers/invertTheme'
import { Icon } from "@iconify/react";
import "./About.css";
import "./About-mobile.css";

class About extends Component {
  render() {
    const { color, theme } = this.props;
    return (
      <>
        <Navegation selectedPage="about" />
        <main className={`bg${theme} about`}>
            <Gallery />
          <Link to="/about#about-me" className="link-about-me">
            <i className={`ri-arrow-down-s-line c${color}`}></i>
          </Link>
        </main>
        <article
          className={`bg${color} container-about-me`}
          id="about-me"
        >
          <section className={`about-me c${theme}`}>
            <h3>A little about me...</h3>
            <p>
            I was born in 2001 in Santa Inês, MA, Brazil. I have studied and graduated from Trybe, a wonderful school, in Web Development. After a few months studying something totally new for me, today, I can say with certainty that it is something I really love to do. Every code, every function, every array... bring me a challenge and arouse the desire to go further and further. So, yes, I love being a developer and I will get better and better!
            </p>
          </section>
        </article>
        <article className={`bg${theme} skills-container`}>
            <ul className={`c${invert(theme)} skills`}>
              <li>
                <Icon icon="ant-design:html5-outlined" />
                Html
              </li>
              <li>
                <Icon icon="la:css3" />
                Css
              </li>
              <li>
                <Icon icon="bxl:javascript" />
                Javascript
              </li>
              <li>
                <Icon icon="fe:github-alt" />
                Git & Github
              </li>
              <li>
                <Icon icon="bxl:react" />
                React.js
              </li>
              <li>
                <Icon icon="bxl:redux" />
                Redux
              </li>
              <li>
                <Icon icon="akar-icons:node-fill" />
                Node.js
              </li>
            </ul>
        </article>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
});

export default connect(mapStateToProps)(About);
