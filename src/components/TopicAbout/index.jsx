import { connect } from "react-redux";
import { invert } from "../../helpers/theme";
import "./styles/TopicAbout.css";

function TopicAbout({ color, theme, title, content }) {
  return (
    <article className="topic-about">
      <h3 className={`c${color}`}>{title}</h3>
      <p className={`c${invert(theme)}`}>{content}</p>
    </article>
  );
}
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
  language: state.language.language,
});

export default connect(mapStateToProps)(TopicAbout);
