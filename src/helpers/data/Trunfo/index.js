import Home from "./images/Home.png";
import Home2 from "./images/Home2.png";
import Cards from "./images/Cards.png";

const Trunfo = {
  path: "trunfo",
  name: "Trunfo",
  type: "Site",
  description:
    "This project is a Trunfo card generator, have fun creating your own deck!",
  links: {
    repository: "https://github.com/biewwl/project-trunfo",
    project: "https://biewwl.github.io/project-trunfo/",
  },
  images: [Home, Home2, Cards],
  skills: ["HTML", "CSS", "Javascript", "React", "Hooks", "Context API"],
  tools: [
    {
      name: "gh-pages",
      link: "https://www.npmjs.com/package/gh-pages",
    },
    {
      name: "manager-local-storage",
      link: "https://www.npmjs.com/package/manager-local-storage",
    },
  ],
  development: "individual",
  done: true,
};

export default Trunfo;
