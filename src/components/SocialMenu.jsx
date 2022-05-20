import React, { Component } from "react";
import { connect } from "react-redux";

class SocialMenu extends Component {
  render() {
    const { color, theme } = this.props;
    return (
      <ul className={`bg${theme} social-menu bb${color}`}>
        <li>
          <a href="https://github.com/biewwl" target="_blank" rel="noreferrer">
            <i className="ri-github-line" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/biewwl/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-linkedin-line" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/21biewwl"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-twitter-line" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/biewwl/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-instagram-line" />
          </a>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  color: state.theme.color,
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(SocialMenu);
