import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { invert } from "../../helpers/theme";
import "./styles/Readme.css";
import "./styles/Readme-mobile.css";

function Readme({ urlREADME, color, theme }) {
  const [readme, setReadme] = useState("");

  useEffect(() => {
    const getReadme = async () => {
      const response = await fetch(urlREADME);
      const responseTEXT = await response.text();
      setReadme(responseTEXT);
      console.log(responseTEXT);
    };
    getReadme();
  }, [urlREADME]);

  return (
    <section className="_container_readme">
      <div
        className={`_readme c${invert(theme)} bgC2${theme}`}
        dangerouslySetInnerHTML={{ __html: readme }}
      ></div>
      <span className={`_readme_tag c${color}`}>GitHub README</span>
    </section>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
  language: state.language.language,
});

export default connect(mapStateToProps)(Readme);
