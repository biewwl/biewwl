import Correct from "./images/correct.png";
import Login from "./images/login.png";
import Game from "./images/game.png";
import Ranking from "./images/ranking.png";
import Settings from "./images/settings.png";

const Trivia = {
  path: "trivia",
  name: "Trivia",
  type: "Site",
  description:
    "This project is a trivia game, built completely in React. Have fun answering questions. Also remember to be fast if you want to be the best!",
  links: {
    repository: "https://github.com/biewwl/project-trivia",
    project: "https://biewwl.github.io/project-trivia/",
  },
  images: [
    Login,
    Settings,
    Game,
    Correct,
    Ranking,
  ],
  skills: ["HTML", "CSS", "Javascript", "React", "Hooks", "API", "Context API"],
  tools: [
    {
      name: "react-router-dom",
      link: "https://www.npmjs.com/package/react-router-dom",
    },
    {
      name: "gh-pages",
      link: "https://www.npmjs.com/package/gh-pages",
    },
    {
      name: "crypto-js",
      link: "https://www.npmjs.com/package/crypto-js",
    },
    {
      name: "howler",
      link: "https://www.npmjs.com/package/howler",
    },
    {
      name: "manager-local-storage",
      link: "https://www.npmjs.com/package/manager-local-storage",
    },
  ],
  development: "individual",
  done: true,
};

export default Trivia;
