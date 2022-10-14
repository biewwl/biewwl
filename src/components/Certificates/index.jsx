import { connect } from "react-redux";
import data from "../../data/Certificates";
import { Icon } from "@iconify/react";
import { invert } from "../../helpers/theme";
import "./styles/Certificates.css";

function Certificates({ color, theme, visible, language }) {
  return (
    <>
      <section
        className={`certificates-container bgC${color} ${
          visible ? " show" : ""
        }`}
      >
        {data.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <img src={certificate.image} alt={certificate.title} />
            <h4 className={`c${invert(theme)}`}>{
              language === "pt" ? certificate.titlePt : certificate.title
            }</h4>
            <a
              href={certificate.link}
              className={`bgC${color} c${theme}`}
              target="_blank"
              rel="noreferrer"
            >
              {language === 'pt' && "Ver"}
              {language === 'en' && "View"}
              <Icon icon="bx:link-external" />
            </a>
          </div>
        ))}
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  color: state.theme.color,
  theme: state.theme.theme,
  language: state.language.language,
});

export default connect(mapStateToProps)(Certificates);
