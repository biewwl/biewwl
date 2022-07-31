import { Icon } from "@iconify/react";
import { connect } from "react-redux";
import dataSkills from "../../helpers/dataSkills";
import invert from "../../helpers/invertTheme";
import './styles/SkillsList.css';
import './styles/SkillsList-mobile.css'

function SkillsList({ color, theme }) {
  return (
    <article className="skills-container">
      <ul className={`skills c${invert(theme)}`}>
        {dataSkills.map((skill, i) => (
          <li key={i} className={`c${color}`}>
            <Icon icon={skill.icon} />
            {skill.name}
          </li>
        ))}
      </ul>
    </article>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color
});

export default connect(mapStateToProps)(SkillsList);
