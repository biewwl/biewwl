import { connect } from "react-redux";
import { invert } from "../../helpers/theme";
import "./styles/TopicAbout.css";

function TopicAbout({ color, theme }) {
  return (
    <article className="topic-about">
      <h3 className={`c${color}`}>About React</h3>
      <p className={`c${invert(theme)}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ipsum
        accusantium odio ratione, quis blanditiis maiores id error est,
        distinctio, itaque non! Temporibus, nisi suscipit? Praesentium autem
        esse sed repellendus?
      </p>
    </article>
  );
}
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
  language: state.language.language,
});

export default connect(mapStateToProps)(TopicAbout);