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
class Conecta4 {
  constructor(
    ButtonPlay,
    ButtonPlayVSComp,
    CirclesColumnOne,
    CirclesColumnTwo,
    CirclenColumnThree,
    CirclesColumnFour,
    CirclesColumnFive,
    CirclesColumnSix,
    CirclesColumnSeven,
    receivedColumnOne,
    receivedColumnTwo,
    receivedColumnThree,
    receivedColumnFour,
    receivedColumnFive,
    receivedColumnSix,
    receivedColumnSeven,
    h1Title
  ) {
    this.ButtonPlay = ButtonPlay;
    this.ButtonPlayVSComp = ButtonPlayVSComp;
    this.CirclesColumnOne = CirclesColumnOne;
    this.CirclesColumnTwo = CirclesColumnTwo;
    this.CirclesColumnThree = CirclenColumnThree;
    this.CirclesColumnFour = CirclesColumnFour;
    this.CirclesColumnFive = CirclesColumnFive;
    this.CirclesColumnSix = CirclesColumnSix;
    this.CirclesColumnSeven = CirclesColumnSeven;
    this.receivedColumnOne = receivedColumnOne;
    this.receivedColumnTwo = receivedColumnTwo;
    this.receivedColumnThree = receivedColumnThree;
    this.receivedColumnFour = receivedColumnFour;
    this.receivedColumnFive = receivedColumnFive;
    this.receivedColumnSix = receivedColumnSix;
    this.receivedColumnSeven = receivedColumnSeven;
    this.PositionColumnOne = 5;
    this.PositionColumnTwo = 5;
    this.PositionColumnThree = 5;
    this.PositionColumnFour = 5;
    this.PositionColumnFive = 5;
    this.PositionColumnSix = 5;
    this.PositionColumnSeven = 5;
    this.PlayerTurn = 1;
    this.h1Title = h1Title;
    this.GameCheck = [
      // empty Arrays to avoid a Type Error in ArrayGameChecker.
      [],
      [],
      [],
      ["1", "2", "3", "4", "5", "6"],
      ["7", "8", "9", "10", "11", "12"],
      ["13", "14", "15", "16", "17", "18"],
      ["19", "20", "21", "22", "23", "24"],
      ["25", "26", "27", "28", "29", "30"],
      ["31", "32", "33", "34", "35", "36"],
      ["37", "38", "39", "40", "41", "42"],
      [],
      [],
      [],
    ];
  }

  GameCheckerColumsRows = (A) => {
    if (A[0] === A[1] && A[1] === A[2] && A[2] === A[3]) {
      return this.GameFinished();
    }
    if (A[1] === A[2] && A[2] === A[3] && A[3] === A[4]) {
      return this.GameFinished();
    }
    if (A[2] === A[3] && A[3] === A[4] && A[4] === A[5]) {
      return this.GameFinished();
    }
    if (A[3] === A[4] && A[4] === A[5] && A[5] === A[6]) {
      return this.GameFinished();
    }
    if (A[4] === A[5] && A[5] === A[6] && A[6] === A[7]) {
      return this.GameFinished();
    }
    return "No one won wet";
  };

  GameCheckerDiagonals = (A) => {
    if (A[0] === A[1] && A[1] === A[2] && A[2] === A[3]) {
      this.GameFinished();
    } else if (A[1] === A[2] && A[2] === A[3] && A[3] === A[4]) {
      this.GameFinished();
    } else if (A[2] === A[3] && A[3] === A[4] && A[4] === A[5]) {
      this.GameFinished();
    } else if (A[3] === A[4] && A[4] === A[5] && A[5] === A[6]) {
      this.GameFinished();
    }
  };

  GameFinished = () => {
    h1title.textContent = `Player ${this.PlayerTurn} WOOON!`;
    this.receivedColumnOne.removeEventListener("click", this.ActionColumnOne);
    this.receivedColumnTwo.removeEventListener("click", this.ActionColumnTwo);
    this.receivedColumnThree.removeEventListener(
      "click",
      this.ActionColumnThree
    );
    this.receivedColumnFour.removeEventListener("click", this.ActionColumnFour);
    this.receivedColumnFive.removeEventListener("click", this.ActionColumnFive);
    this.receivedColumnSix.removeEventListener("click", this.ActionColumnSix);
    this.receivedColumnSeven.removeEventListener(
      "click",
      this.ActionColumnSeven
    );
  };

  ArrayGameChecker = (num, Positioncolumn) => {
    const column = [
      this.GameCheck[num][0],
      this.GameCheck[num][1],
      this.GameCheck[num][2],
      this.GameCheck[num][3],
      this.GameCheck[num][4],
      this.GameCheck[num][5],
    ];
    const row = [
      this.GameCheck[3][Positioncolumn],
      this.GameCheck[4][Positioncolumn],
      this.GameCheck[5][Positioncolumn],
      this.GameCheck[6][Positioncolumn],
      this.GameCheck[7][Positioncolumn],
      this.GameCheck[8][Positioncolumn],
      this.GameCheck[9][Positioncolumn],
    ];
    const leftDownToRightUp = [
      this.GameCheck[num - 3][Positioncolumn + 3],
      this.GameCheck[num - 2][Positioncolumn + 2],
      this.GameCheck[num - 1][Positioncolumn + 1],
      this.GameCheck[num][Positioncolumn],
      this.GameCheck[num + 1][Positioncolumn - 1],
      this.GameCheck[num + 2][Positioncolumn - 2],
      this.GameCheck[num + 3][Positioncolumn - 3],
    ];
    const leftUpToRightdown = [
      this.GameCheck[num - 3][Positioncolumn - 3],
      this.GameCheck[num - 2][Positioncolumn - 2],
      this.GameCheck[num - 1][Positioncolumn - 1],
      this.GameCheck[num][Positioncolumn],
      this.GameCheck[num + 1][Positioncolumn + 1],
      this.GameCheck[num + 2][Positioncolumn + 2],
      this.GameCheck[num + 3][Positioncolumn + 3],
    ];
    this.GameCheckerColumsRows(column);
    this.GameCheckerColumsRows(row);
    this.GameCheckerDiagonals(leftDownToRightUp);
    this.GameCheckerDiagonals(leftUpToRightdown);
  };

  ActionColums = (Positioncolumn, circlesColums, num) => {
    if (this.PlayerTurn === 1 && Positioncolumn >= 0) {
      const circleColor = circlesColums[Positioncolumn];
      circleColor.style.background =
        "linear-gradient(rgb(3, 58, 3), 30%, rgb(19, 117, 25))";
      this.GameCheck[num][Positioncolumn] = "green";
      this.ArrayGameChecker(num, Positioncolumn);
      this.PlayerTurn = 2;
    } else if (this.PlayerTurn === 2 && Positioncolumn >= 0) {
      const circleColor = circlesColums[Positioncolumn];
      circleColor.style.background =
        "linear-gradient(rgb(58, 6, 3), 30%, rgb(152, 22, 20)";
      this.GameCheck[num][Positioncolumn] = "red";
      this.ArrayGameChecker(num, Positioncolumn);
      this.PlayerTurn = 1;
    }
  };

  ColumsClick = () => {
    this.receivedColumnOne.addEventListener("click", this.ActionColumnOne);
    this.receivedColumnTwo.addEventListener("click", this.ActionColumnTwo);
    this.receivedColumnThree.addEventListener("click", this.ActionColumnThree);
    this.receivedColumnFour.addEventListener("click", this.ActionColumnFour);
    this.receivedColumnFive.addEventListener("click", this.ActionColumnFive);
    this.receivedColumnSix.addEventListener("click", this.ActionColumnSix);
    this.receivedColumnSeven.addEventListener("click", this.ActionColumnSeven);
  };

  ActionColumnOne = () => {
    this.ActionColums(this.PositionColumnOne, this.CirclesColumnOne, 3);
    this.PositionColumnOne -= 1;
  };

  ActionColumnTwo = () => {
    this.ActionColums(this.PositionColumnTwo, this.CirclesColumnTwo, 4);
    this.PositionColumnTwo -= 1;
  };

  ActionColumnThree = () => {
    this.ActionColums(this.PositionColumnThree, this.CirclesColumnThree, 5);
    this.PositionColumnThree -= 1;
  };

  ActionColumnFour = () => {
    this.ActionColums(this.PositionColumnFour, this.CirclesColumnFour, 6);
    this.PositionColumnFour -= 1;
  };

  ActionColumnFive = () => {
    this.ActionColums(this.PositionColumnFive, this.CirclesColumnFive, 7);
    this.PositionColumnFive -= 1;
  };

  ActionColumnSix = () => {
    this.ActionColums(this.PositionColumnSix, this.CirclesColumnSix, 8);
    this.PositionColumnSix -= 1;
  };

  ActionColumnSeven = () => {
    this.ActionColums(this.PositionColumnSeven, this.CirclesColumnSeven, 9);
    this.PositionColumnSeven -= 1;
  };

  VariablesForNewGame = () => {
    this.PositionColumnOne = 5;
    this.PositionColumnTwo = 5;
    this.PositionColumnThree = 5;
    this.PositionColumnFour = 5;
    this.PositionColumnFive = 5;
    this.PositionColumnSix = 5;
    this.PositionColumnSeven = 5;
    this.PlayerTurn = 1;
    this.h1Title = h1title;
    this.GameCheck = [
      // empty Arrays to avoid a Type Error in ArrayGameChecker.
      [],
      [],
      [],
      ["1", "2", "3", "4", "5", "6"],
      ["7", "8", "9", "10", "11", "12"],
      ["13", "14", "15", "16", "17", "18"],
      ["19", "20", "21", "22", "23", "24"],
      ["25", "26", "27", "28", "29", "30"],
      ["31", "32", "33", "34", "35", "36"],
      ["37", "38", "39", "40", "41", "42"],
      [],
      [],
      [],
    ];
  };

  Play = () => {
    this.ButtonPlay.addEventListener("click", () => {
      this.ColumsClick();
      this.VariablesForNewGame();
      this.CirclesColumnOne.forEach((element) => {
        const colorChangedElement = element;
        colorChangedElement.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      this.CirclesColumnTwo.forEach((element) => {
        const colorChangedElement = element;
        colorChangedElement.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      this.CirclesColumnThree.forEach((element) => {
        const colorChangedElement = element;
        colorChangedElement.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      this.CirclesColumnFour.forEach((element) => {
        const colorChangedElement = element;
        colorChangedElement.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      this.CirclesColumnFive.forEach((element) => {
        const colorChangedElement = element;
        colorChangedElement.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      this.CirclesColumnSix.forEach((element) => {
        const colorChangedElement = element;
        colorChangedElement.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      this.CirclesColumnSeven.forEach((element) => {
        const colorChangedElement = element;
        colorChangedElement.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      h1title.textContent = "Conecta 4. Started Game!";
    });
  };

  PlayDifMode = () => {
    this.ButtonPlayVSComp.addEventListener("click", () => {
      this.receivedColumnOne.removeEventListener("click", this.ActionColumnOne);
      this.receivedColumnTwo.removeEventListener("click", this.ActionColumnTwo);
      this.receivedColumnThree.removeEventListener(
        "click",
        this.ActionColumnThree
      );
      this.receivedColumnFour.removeEventListener(
        "click",
        this.ActionColumnFour
      );
      this.receivedColumnFive.removeEventListener(
        "click",
        this.ActionColumnFive
      );
      this.receivedColumnSix.removeEventListener("click", this.ActionColumnSix);
      this.receivedColumnSeven.removeEventListener(
        "click",
        this.ActionColumnSeven
      );
    });
  };
}

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
