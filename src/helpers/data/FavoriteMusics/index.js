import Login from "./images/login.png";
import Home from "./images/home.png";
import Search from "./images/search.png";
import Album from "./images/album.png";
import Profile from "./images/profile.png";
import EditProfile from "./images/edit-profile.png";
import Favorites from "./images/favorites.png";

const FavoriteMusics = {
  path: "favorite-musics",
  name: "Favorite Musics",
  type: "Site",
  description:
    "This project is a music search application, which uses the iTunes API. Search for your favorite songs and add them to your favorites list.",
  links: {
    repository: "https://github.com/biewwl/project-favorite-musics",
    project: "https://biewwl.github.io/project-favorite-musics/",
  },
  images: [
    Login,
    Home,
    Search,
    Album,
    Favorites,
    Profile,
    EditProfile,
  ],
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
  done: true,
};

export default FavoriteMusics;
