class Conecta4vsMachine {
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
    this.columnsForRandom = [
      CirclesColumnOne,
      CirclesColumnTwo,
      CirclenColumnThree,
      CirclesColumnFour,
      CirclesColumnFive,
      CirclesColumnSix,
      CirclesColumnSeven,
    ];
    this.PositionColumn = [5, 5, 5, 5, 5, 5, 5];
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
    } else {
      return false;
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
    } else {
      return false;
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

  ArrayGameChecker = (num, Positioncolumn, nc, npc) => {
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
    if (
      this.GameCheckerColumsRows(column) == false &&
      this.GameCheckerColumsRows(row) == false &&
      this.GameCheckerDiagonals(leftDownToRightUp) == false &&
      this.GameCheckerDiagonals(leftUpToRightdown) == false &&
      this.PlayerTurn == 2
    ) {
      this.ComputerPlayer(npc, nc, num);
    }
  };

  ComputerPlayer = (npc, nc, num) => {
    this.RemoveListeners();
    let RandomColumn = Math.floor(Math.random() * (7 - 1) + 1);
    do {
      RandomColumn = Math.floor(Math.random() * (7 - 1) + 1);
    } while (
      this.PositionColumn[RandomColumn] < 0 &&
      this.PositionColumn.every((e) => e == 0) == false
    );

    const Interval = setInterval(() => {
      this.columnsForRandom[RandomColumn][
        this.PositionColumn[RandomColumn]
      ].style.background =
        "linear-gradient(rgb(58, 6, 3), 30%, rgb(152, 22, 20)";
      this.ColumsClick();
      this.GameCheck[RandomColumn + 3][this.PositionColumn[RandomColumn]] =
        "red";
      this.PlayerTurn = 1;
      this.ArrayGameChecker(
        RandomColumn + 3,
        this.PositionColumn[RandomColumn]
      );
      this.PositionColumn[RandomColumn] -= 1;
      clearInterval(Interval);
    }, 1000);
  };

  ActionColums = (Positioncolumn, circlesColums, num, nc) => {
    circlesColums[Positioncolumn].style.background =
      "linear-gradient(rgb(3, 58, 3), 30%, rgb(19, 117, 25))";
    this.GameCheck[num][Positioncolumn] = "green";
    this.PlayerTurn = 2;
    this.PositionColumn[nc] -= 1;
    this.ArrayGameChecker(num, Positioncolumn, nc);
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
    this.ActionColums(this.PositionColumn[0], this.columnsForRandom[0], 3, 0);
  };

  ActionColumnTwo = () => {
    this.ActionColums(this.PositionColumn[1], this.columnsForRandom[1], 4, 1);
  };

  ActionColumnThree = () => {
    this.ActionColums(this.PositionColumn[2], this.columnsForRandom[2], 5, 2);
  };

  ActionColumnFour = () => {
    this.ActionColums(this.PositionColumn[3], this.columnsForRandom[3], 6, 3);
  };

  ActionColumnFive = () => {
    this.ActionColums(this.PositionColumn[4], this.columnsForRandom[4], 7, 4);
  };

  ActionColumnSix = () => {
    this.ActionColums(this.PositionColumn[5], this.columnsForRandom[5], 8, 5);
  };

  ActionColumnSeven = () => {
    this.ActionColums(this.PositionColumn[6], this.columnsForRandom[6], 9, 6);
  };

  VariablesForNewGame = () => {
    this.PositionColumn.forEach((e, i) => {
      this.PositionColumn[i] = 5;
    });
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
    this.ButtonPlayVSComp.addEventListener("click", () => {
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

  RemoveListeners = () => {
    this.columnOne.removeEventListener("click", this.ActionColumnOne);
    this.columnTwo.removeEventListener("click", this.ActionColumnTwo);
    this.columnThree.removeEventListener("click", this.ActionColumnThree);
    this.columnFour.removeEventListener("click", this.ActionColumnFour);
    this.columnFive.removeEventListener("click", this.ActionColumnFive);
    this.columnSix.removeEventListener("click", this.ActionColumnSix);
    this.columnSeven.removeEventListener("click", this.ActionColumnSeven);
  };

  PlayDifMode = () => {
    this.ButtonPlay.addEventListener("click", () => {
      this.RemoveListeners();
    });
  };
}

export default Conecta4vsMachine;
