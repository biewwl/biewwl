import Login from "./images/Login.png";
import Foods from "./images/Foods.png";
import Details from "./images/Details.png";
import Progress from "./images/Progress.png";
import Done from "./images/Done.png";
import Favorite from "./images/Favorite.png";
import Explore from "./images/Explore.png";
import Cards from "./images/Cards.png";
import FoodsExplore from "./images/FoodsExplore.png";

const RecipesApp = {
  path: "recipes-app",
  name: "Recipes App",
  type: "Site",
  description:
    "This project is a recipe site. Search by recipes, favorites and more!",
  links: {
    repository: "https://github.com/biewwl/project-recipes-app",
    project: "https://biewwl.github.io/project-recipes-app/",
  },
  images: [
    Login,
    Foods,
    Details,
    Progress,
    Done,
    Favorite,
    Cards,
    Explore,
    FoodsExplore,
  ],
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
    {
      name: "clipboard-copy",
      link: "https://www.npmjs.com/package/clipboard-copy",
    },
  ],
  development: "squad",
};

export default RecipesApp;
