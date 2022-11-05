import Login from "./images/Login.png";
import Home from "./images/Home.png";
import Post from "./images/Post.png";
import Notify from "./images/Notify.png";
import UserProfile from "./images/UserProfile.png";
import Profile from "./images/Profile.png";


const Yourgram = {
  path: "yourgram",
  name: "Yourgram",
  namePt: "Yourgram",
  type: "Site",
  description:
    "This project is the Front End part of a social site! Easy integration with a Back End.",
  descriptionPt:
    "Este projeto é a parte Front End de um site social! Integração fácil com um Back End.",
  links: {
    repository: "https://github.com/biewwl/yourgram",
    project: "https://biewwl.github.io/yourgram/",
  },
  images: [Login, Home, Post, Notify, UserProfile, Profile],
  skills: ["HTML", "CSS", "Javascript", "React", "Hooks", "Redux"],
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
      name: "manager-local-storage",
      link: "https://www.npmjs.com/package/manager-local-storage",
    },
  ],
  development: "duo",
  done: false,
  emphasis: 1,
};

export default Yourgram;
