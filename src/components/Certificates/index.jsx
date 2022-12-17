import { connect } from "react-redux";
import data from "../../data/Certificates";
import { Icon } from "@iconify/react";
import { invert } from "../../helpers/theme";
import "./styles/Certificates.css";

function Certificates({ color, theme, language }) {
  return (
    <>
      <section
        className={`certificates-container`}
      >
        {data.map((certificate, index) => (
          <div key={index} className={`certificate-card c${invert(theme)} bb${color}`}>
            <img src={certificate.image} alt={certificate.title} />
            <div className={`certificate-content ${theme}`}>
              <h4 className={`c${invert(theme)}`}>
                {language === "pt" ? certificate.titlePt : certificate.title}
              </h4>
              <a
                href={certificate.link}
                className={`bgC${color} c`}
                target="_blank"
                rel="noreferrer"
              >
                {language === "pt" && "Ver"}
                {language === "en" && "View"}
                <Icon icon="bx:link-external" />
              </a>
            </div>
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
