import Trivia from "./Trivia";
import FavoriteMusics from "../Projects/FavoriteMusics";
import OnlineStore from "./OnlineStore";
import Trunfo from "./Trunfo";
import RecipesApp from "./RecipesApp";
import ManagerLocalStorage from "./ManagerLocalStorage";
import GoogleGenerator from "./GoogleGenerator";
import LandingPages from "./LandingPages";
import Yourgram from "./Yourgram";
import FifaCards from "./FIFA cards";

const data = [
  Trivia,
  FavoriteMusics,
  OnlineStore,
  Trunfo,
  RecipesApp,
  GoogleGenerator,
  ManagerLocalStorage,
  Yourgram,
  LandingPages,
  FifaCards
].sort((a, b) => {
  if (a.emphasis < b.emphasis) return -1;
  if (a.development && !b.development) return -1;
  return 1
});

export default data;
