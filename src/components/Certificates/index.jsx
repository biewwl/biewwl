import data from "../../helpers/dataCertificates";
import "./styles/Certificates.css";
import { connect } from "react-redux";
import { Icon } from "@iconify/react";
import invert from "../../helpers/invertTheme";

function Certificates({ color, theme, visible }) {
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
            <h4 className={`c${invert(theme)}`}>{certificate.title}</h4>
            <a
              href={certificate.link}
              className={`bgC${color} c${theme}`}
              target="_blank"
              rel="noreferrer"
            >
              View <Icon icon="bx:link-external" />
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
});

export default connect(mapStateToProps)(Certificates);
