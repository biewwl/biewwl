import Home from "./images/Home.png";
import Attr from "./images/Attributes.png";
import Product from "./images/Product.png";
import Cart from "./images/Cart.png";

const OnlineStore = {
  path: "online-store",
  name: "Online Store",
  type: "Site",
  description:
    "This project is a simulation of an online store, built on the basis of the Mercado Livre api. Search for what you want and add it to your cart!",
  links: {
    repository: "https://github.com/biewwl/project-online-store",
    project: "https://biewwl.github.io/project-online-store/",
  },
  images: [Home, Product, Attr, Cart],
  skills: ["HTML", "CSS", "Javascript", "React", "Redux", "API"],
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
      name: "react-redux",
      link: "https://www.npmjs.com/package/react-redux",
    },
    {
      name: "redux",
      link: "https://www.npmjs.com/package/redux",
    },
    {
      name: "redux-devtools-extension",
      link: "https://www.npmjs.com/package/@redux-devtools/extension",
    },
    {
      name: "redux-thunk",
      link: "https://www.npmjs.com/package/redux-thunk",
    },
    {
      name: "manager-local-storage",
      link: "https://www.npmjs.com/package/manager-local-storage",
    },
  ],
  development: "individual",
};

export default OnlineStore;
