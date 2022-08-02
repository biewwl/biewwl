import { useState } from "react";
import { Link } from "react-router-dom";
import invert from "../../helpers/invertTheme";
import { Icon } from "@iconify/react";
import coverInDev from "../../images/inDev.png";
import "./styles/CardProject.css";
import "./styles/CardProject-mobile.css";

function CardProject({
  projectDetails: { images, name, description, path, type, done },
  theme,
  color,
}) {
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

  return (
    <section
      className={`${
        type === "Library" ? `card-project bb${color} library` : "card-project"
      }${!done ? " inDev" : ""}`}
    >
      {copied && (
        <div className="copied">
          <span className={`bg${theme} bb${color} c${color}`}>
            Link Copied!
          </span>
        </div>
      )}
      <img
        className={`card-image${!done ? " inDev" : ""}`}
        src={!done ? coverInDev : images[0]}
        alt=""
      />
      <section className="card-infos">
        <div className="card-title">
          <h3 className={`c${invert(theme)}`}>{name}{!done && <span>{" (in development)"}</span>}</h3>
        </div>
        <p className={`c2${invert(theme)}`}>{description}</p>
        <div className="buttons-container">
          <Link
            rel="noreferrer"
            to={`/projects/${path}`}
            className={`card-button bb${color} c${color}`}
          >
            <span>More details</span>
            <Icon icon="bi:arrow-right" />
          </Link>
          <button className={`c${color} share`} onClick={copy}>
            {copied && <Icon icon="line-md:confirm" />}
            {!copied && <Icon icon="line-md:external-link" />}
          </button>
        </div>
      </section>
    </section>
  );
}

export default CardProject;
