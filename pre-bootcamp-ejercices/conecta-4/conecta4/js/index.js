import Conecta4 from "./.conecta4-Players";
import Conecta4vsMachine from "./conecta4-vs-computer";

const ButtonTwoPlayers = document.getElementById("ButtonPlayer");
const ButtonVsMachine = document.getElementById("ButtonVsMachine");
const h1title = document.getElementById("title");
const CirclesOne = Array.from(document.querySelectorAll(".circlesOne"));
const CirclesTwo = Array.from(document.querySelectorAll(".circlesTwo"));
const Circlesthree = Array.from(document.querySelectorAll(".circlesThree"));
const CirclesFour = Array.from(document.querySelectorAll(".circlesFour"));
const CirclesFive = Array.from(document.querySelectorAll(".circlesFive"));
const CirclesSix = Array.from(document.querySelectorAll(".circlesSix"));
const CirclesSeven = Array.from(document.querySelectorAll(".circlesSeven"));
const columnOne = document.getElementById("columnOne");
const columnTwo = document.getElementById("columnTwo");
const columnThree = document.getElementById("columnThree");
const columnFour = document.getElementById("columnFour");
const columnFive = document.getElementById("columnFive");
const columnSix = document.getElementById("columnSix");
const columnSeven = document.getElementById("columnSeven");

const GameVSComputer = new Conecta4vsMachine(
  ButtonTwoPlayers,
  ButtonVsMachine,
  CirclesOne,
  CirclesTwo,
  Circlesthree,
  CirclesFour,
  CirclesFive,
  CirclesSix,
  CirclesSeven,
  columnOne,
  columnTwo,
  columnThree,
  columnFour,
  columnFive,
  columnSix,
  columnSeven,
  h1title
);
const Game = new Conecta4(
  ButtonTwoPlayers,
  ButtonVsMachine,
  CirclesOne,
  CirclesTwo,
  Circlesthree,
  CirclesFour,
  CirclesFive,
  CirclesSix,
  CirclesSeven,
  columnOne,
  columnTwo,
  columnThree,
  columnFour,
  columnFive,
  columnSix,
  columnSeven,
  h1title
);

Game.Play();
Game.PlayDifMode();
GameVSComputer.Play();
GameVSComputer.PlayDifMode();
