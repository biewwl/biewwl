import Home from "./images/Home.png";
import AllCards from './images/AllCards.png';
import Collection from './images/Collection.png';
import EditCollection from './images/EditCollection.png';
import Presets from './images/Presets.png';

const FifaCards = {
  path: "project-fifa-cards",
  name: "FIFA Cards",
  namePt: "Cards da FIFA",
  cover: Home,
  urlREADME: "",
  type: "Site",
  description:
    "This project is a website for creating custom FIFA card collections.",
  descriptionPt:
    "Este projeto é um site para criar coleções customizadas de cards da FIFA.",
  links: {
    repository: "https://github.com/biewwl/project-fifa-cards",
    project: "https://biewwl.github.io/project-fifa-cards/",
  },
  images: [Home, Presets, AllCards, Collection, EditCollection],
  skills: ["HTML", "CSS", "Javascript", "React", "Hooks", "Context API"],
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
      name: "manager-local-storage",
      link: "https://www.npmjs.com/package/manager-local-storage",
    },
  ],
  development: "solo",
  done: true,
  emphasis: 1,
};

export default FifaCards;
