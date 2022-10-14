import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import coverNotImage from "../../images/inDev.png";
import { connect } from "react-redux";
import { invert } from "../../helpers/theme";
import "./styles/CardProject.css";
import "./styles/CardProject-mobile.css";

function CardProject({ projectDetails, language, theme, color }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(
      `http://biewwl.github.io/biewwl#/projects/${path}`
    );
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const { images, name, namePt, descriptionPt, description, path, type, done } =
    projectDetails;

  return (
    <>
      {copied && (
        <div className="copied">
          <span className={`bgC${theme} bb${color} c${color}`}>
            {language === "pt" ? "Link Copiado!" : "Link Copied!"}
          </span>
        </div>
      )}
      <section
        className={`${
          type === "Library"
            ? `card-project bb${color} library`
            : "card-project"
        }${!done ? " inDev" : ""}`}
      >
        <img
          className={`card-image${!done ? " inDev" : ""}`}
          src={images.length === 0 ? coverNotImage : images[0]}
          alt=""
        />
        <section className="card-infos">
          <div className="card-title">
            <h3 className={`c${invert(theme)}`}>
              {language === "pt" ? namePt : name}
              {!done && (
                <span>
                  {language === "pt"
                    ? " (Em Desenvolvimento)"
                    : " (In Development)"}
                </span>
              )}
            </h3>
          </div>
          <p className={`c2${invert(theme)}`}>
            {language === "pt" ? descriptionPt : description}
          </p>
          <div className="buttons-container">
            <Link
              rel="noreferrer"
              to={`/projects/${path}`}
              className={`card-button bb${color} c${color}`}
            >
              <span>{language === "pt" ? "Ver Projeto" : "See Project"}</span>
              <Icon icon="bi:arrow-right" />
            </Link>
            <button className={`c${color} share`} onClick={copy}>
              {copied && <Icon icon="line-md:confirm" />}
              {!copied && <Icon icon="line-md:external-link" />}
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  color: state.theme.color,
  language: state.language.language,
});

export default connect(mapStateToProps)(CardProject);
