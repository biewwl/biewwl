import TriviaCorrect from "../pages/Project/images/trivia/correct.png";
import TriviaLogin from "../pages/Project/images/trivia/login.png";
import TriviaGame from "../pages/Project/images/trivia/game.png";
import TriviaRanking from "../pages/Project/images/trivia/ranking.png";

import FMLogin from '../pages/Project/images/favorite-musics/login.png';
import FMHome from '../pages/Project/images/favorite-musics/home.png';
import FMSearch from '../pages/Project/images/favorite-musics/search.png';
import FMAlbum from '../pages/Project/images/favorite-musics/album.png';
import FMProfile from '../pages/Project/images/favorite-musics/profile.png';
import FMEditProfile from '../pages/Project/images/favorite-musics/edit-profile.png';
import FMFavorites from '../pages/Project/images/favorite-musics/favorites.png';

import OSHome from '../pages/Project/images/online-store/Home.png';
import OSAttr from '../pages/Project/images/online-store/Home.png';
import OSProduct from '../pages/Project/images/online-store/Home.png';
import OSCart from '../pages/Project/images/online-store/Home.png';

const data = [
  {
    path: "trivia",
    name: "Trivia",
    description:
      "This project is a trivia game, built completely in React. Have fun answering easy, medium or hard level questions. Also remember to be fast if you want to be the best!",
    links: {
      repository: "https://github.com/biewwl/project-trivia",
      project: "https://biewwl.github.io/project-trivia/",
    },
    images: [TriviaLogin, TriviaGame, TriviaCorrect, TriviaRanking],
    skills: ["HTML", "CSS", "Javascript", "React", "Hooks", "API"],
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
      }
    ],
    development: "individual",
  },
  {
    path: "favorite-musics",
    name: "Favorite Musics",
    description:
      "This project is a music search application, which uses the iTunes API. Search for your favorite songs and add them to your favorites list.",
    links: {
      repository: "https://github.com/biewwl/project-favorite-musics",
      project: "https://biewwl.github.io/project-favorite-musics/",
    },
    images: [FMLogin, FMHome, FMSearch, FMAlbum, FMFavorites, FMProfile, FMEditProfile],
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
    ],
    development: "individual",
  },
  {
    path: "online-store",
    name: "Online Store",
    description:
      "This project is a simulation of an online store, built on the basis of the Mercado Livre api. Search for what you want and add it to your cart!",
    links: {
      repository: "https://github.com/biewwl/project-online-store",
      project: "https://biewwl.github.io/project-online-store/",
    },
    images: [OSHome, OSProduct, OSAttr, OSCart],
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
    ],
    development: "individual",
  },
];
export default data;
