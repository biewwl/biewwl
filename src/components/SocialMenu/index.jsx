import { connect } from "react-redux";
import './styles/SocialMenu.css';
import './styles/SocialMenu-mobile.css';

function SocialMenu({ color, theme }) {
  return (
    <ul className={`bgC${theme} social-menu bb${color}`}>
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
          href="https://twitter.com/biewwl"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-twitter-line" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/biewwl.js/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-instagram-line" />
        </a>
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => ({
  color: state.theme.color,
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(SocialMenu);
