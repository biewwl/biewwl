import { Icon } from "@iconify/react";
import { connect } from "react-redux";
import dataSkills from "../../data/Skills";
import "./styles/SkillsList.css";
import "./styles/SkillsList-mobile.css";
import { invert } from "../../helpers/theme";

function SkillsList({ color, theme }) {
  return (
    <article className="skills-container">
      <ul className={`skills c${invert(theme)}`}>
        {dataSkills.map((skill, i) => {
          const { icon, name } = skill;
          return (
            <li
              key={i}
              className={`c${color}`}
            >
              <Icon icon={icon} />
              {name}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
});

export default connect(mapStateToProps)(SkillsList);
