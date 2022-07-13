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
    columnOne,
    columnTwo,
    columnThree,
    columnFour,
    columnFive,
    columnSix,
    columnSeven,
    h1title
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
    this.columnOne = columnOne;
    this.columnTwo = columnTwo;
    this.columnThree = columnThree;
    this.columnFour = columnFour;
    this.columnFive = columnFive;
    this.columnSix = columnSix;
    this.columnSeven = columnSeven;
    this.PositionColumnOne = 5;
    this.PositionColumnTwo = 5;
    this.PositionColumnThree = 5;
    this.PositionColumnFour = 5;
    this.PositionColumnFive = 5;
    this.PositionColumnSix = 5;
    this.PositionColumnSeven = 5;
    this.PlayerTurn = 1;
    this.h1title = h1title;
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
      this.GameFinished();
    } else if (A[1] === A[2] && A[2] === A[3] && A[3] === A[4]) {
      this.GameFinished();
    } else if (A[2] === A[3] && A[3] === A[4] && A[4] === A[5]) {
      this.GameFinished();
    } else if (A[3] === A[4] && A[4] === A[5] && A[5] === A[6]) {
      this.GameFinished();
    } else if (A[4] === A[5] && A[5] === A[6] && A[6] === A[7]) {
      this.GameFinished();
    }
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
    this.columnOne.removeEventListener("click", this.ActionColumnOne);
    this.columnTwo.removeEventListener("click", this.ActionColumnTwo);
    this.columnThree.removeEventListener("click", this.ActionColumnThree);
    this.columnFour.removeEventListener("click", this.ActionColumnFour);
    this.columnFive.removeEventListener("click", this.ActionColumnFive);
    this.columnSix.removeEventListener("click", this.ActionColumnSix);
    this.columnSeven.removeEventListener("click", this.ActionColumnSeven);
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
      circlesColums[Positioncolumn].style.background =
        "linear-gradient(rgb(3, 58, 3), 30%, rgb(19, 117, 25))";
      this.GameCheck[num][Positioncolumn] = "green";
      this.ArrayGameChecker(num, Positioncolumn);
      this.PlayerTurn = 2;
    } else if (this.PlayerTurn === 2 && Positioncolumn >= 0) {
      circlesColums[Positioncolumn].style.background =
        "linear-gradient(rgb(58, 6, 3), 30%, rgb(152, 22, 20)";
      this.GameCheck[num][Positioncolumn] = "red";
      this.ArrayGameChecker(num, Positioncolumn);
      this.PlayerTurn = 1;
    }
  };

  ColumsClick = () => {
    this.columnOne.addEventListener("click", this.ActionColumnOne);
    this.columnTwo.addEventListener("click", this.ActionColumnTwo);
    this.columnThree.addEventListener("click", this.ActionColumnThree);
    this.columnFour.addEventListener("click", this.ActionColumnFour);
    this.columnFive.addEventListener("click", this.ActionColumnFive);
    this.columnSix.addEventListener("click", this.ActionColumnSix);
    this.columnSeven.addEventListener("click", this.ActionColumnSeven);
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
    this.h1title = h1title;
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
        element.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      this.CirclesColumnTwo.forEach((element) => {
        element.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      this.CirclesColumnThree.forEach((element) => {
        element.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      this.CirclesColumnFour.forEach((element) => {
        element.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      this.CirclesColumnFive.forEach((element) => {
        element.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      this.CirclesColumnSix.forEach((element) => {
        element.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      this.CirclesColumnSeven.forEach((element) => {
        element.style.background =
          "linear-gradient(rgb(69, 69, 186), 30%, white)";
      });
      h1title.textContent = "Conecta 4. Started Game!";
    });
  };

  PlayDifMode = () => {
    this.ButtonPlayVSComp.addEventListener("click", () => {
      this.columnOne.removeEventListener("click", this.ActionColumnOne);
      this.columnTwo.removeEventListener("click", this.ActionColumnTwo);
      this.columnThree.removeEventListener("click", this.ActionColumnThree);
      this.columnFour.removeEventListener("click", this.ActionColumnFour);
      this.columnFive.removeEventListener("click", this.ActionColumnFive);
      this.columnSix.removeEventListener("click", this.ActionColumnSix);
      this.columnSeven.removeEventListener("click", this.ActionColumnSeven);
    });
  };
}

export default Conecta4;
