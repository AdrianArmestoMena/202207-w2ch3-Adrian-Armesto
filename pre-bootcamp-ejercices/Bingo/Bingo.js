const Ranking = [
  {
    UserName: "Antonio",
    Puntuación: Math.floor(Math.random() * (50 - 15)) + 15,
  },
  {
    UserName: "Angeles",
    Puntuación: Math.floor(Math.random() * (50 - 15)) + 15,
  },
  { UserName: "David", Puntuación: Math.floor(Math.random() * (50 - 15)) + 15 },
  { UserName: "Dylan", Puntuación: Math.floor(Math.random() * (50 - 15)) + 15 },
  { UserName: "Alba", Puntuación: Math.floor(Math.random() * (50 - 15)) + 15 },
  { UserName: "Tom", Puntuación: Math.floor(Math.random() * (50 - 15)) + 15 },
  { UserName: "Omar", Puntuación: Math.floor(Math.random() * (50 - 15)) + 15 },
  {
    UserName: "Adrian",
    Puntuación: Math.floor(Math.random() * (50 - 15)) + 15,
  },
  { UserName: "Sara", Puntuación: Math.floor(Math.random() * (50 - 15)) + 15 },
];
let AskPlay;
const MAIN = () => {
  const CantadorLinea = [];
  const CantadorBingo = [];
  const Vueltasparapuntos = [];
  let UserName;
  const GeneradorCarton = () => {
    const carton = [];
    const NumerosRandom = [];
    do {
      let randomNumber = Math.floor(Math.random() * 50) + 1;
      if (NumerosRandom.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 50) + 1;
      } else {
        NumerosRandom.push(randomNumber);
      }
    } while (NumerosRandom.length < 15);

    const generadorlinea1 = () => {
      const linea1 = {
        Numero1: NumerosRandom[0],
        Numero2: NumerosRandom[1],
        Numero3: NumerosRandom[2],
        Numero4: NumerosRandom[3],
        Numero5: NumerosRandom[4],
      };

      return linea1;
    };

    const generadorlinea2 = () => {
      const linea2 = {
        Numero1: NumerosRandom[5],
        Numero2: NumerosRandom[6],
        Numero3: NumerosRandom[7],
        Numero4: NumerosRandom[8],
        Numero5: NumerosRandom[9],
      };
      return linea2;
    };

    const generadorlinea3 = () => {
      const linea3 = {
        Numero1: NumerosRandom[10],
        Numero2: NumerosRandom[11],
        Numero3: NumerosRandom[12],
        Numero4: NumerosRandom[13],
        Numero5: NumerosRandom[14],
      };

      return linea3;
    };
    carton.push(generadorlinea1());
    carton.push(generadorlinea2());
    carton.push(generadorlinea3());
    return carton;
  };
  let carton;
  const NumeroRandomBombo = () => {
    const NumerosRandom = [];
    do {
      let randomNumber = Math.floor(Math.random() * 50) + 1;
      if (NumerosRandom.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 50) + 1;
      } else {
        NumerosRandom.push(randomNumber);
      }
    } while (NumerosRandom.length < 50);
    return NumerosRandom;
  };
  const NumerosRandomBombo = NumeroRandomBombo();

  const ComprobarIgual = () => {
    UserName = prompt("Write your name");
    Ranking.sort((a, b) => a.Puntuación - b.Puntuación);
    console.table(Ranking);
    for (let i = 0; i < NumerosRandomBombo.length; i++) {
      CantarBingo();
      if (CantadorBingo.length < 1) {
        Vueltasparapuntos.push("x");
        const siguienteTurno = confirm(`${NumerosRandomBombo[i]} Keep Going?`);
        if (siguienteTurno === true) {
          carton.forEach((linea) => {
            Object.entries(linea).forEach((par) => {
              if (par[1] === NumerosRandomBombo[i]) {
                carton[carton.indexOf(linea)][par[0]] = "x";
              }
            });
          });
          console.table(carton);
          Cantarlinea();
        } else {
          alert("See u");
          break;
        }
      } else {
        alert("BINGO!!");
        MostrarRanking();
        break;
      }
      CantarBingo();
    }
    AskPlay = confirm("Play Again?");
  };

  let Cantarlinea = () => {
    const CantarLinea = [];
    const linea0 = [];
    const linea1 = [];
    const linea2 = [];
    carton.forEach((linea) => {
      if (linea == carton[0]) {
        Object.entries(linea).forEach((par) => {
          linea0.push(par[1]);
        });
      } else if (linea == carton[1]) {
        Object.entries(linea).forEach((par) => {
          linea1.push(par[1]);
        });
      } else if (linea == carton[2]) {
        Object.entries(linea).forEach((par) => {
          linea2.push(par[1]);
        });
      }
    });
    if (CantadorLinea.length < 1) {
      if (linea0.every((numero) => numero === "x")) {
        alert("Linea1!!!");
        CantadorLinea.push("x");
      }
      if (linea1.every((numero) => numero === "x")) {
        alert("Linea2!!!");
        CantadorLinea.push("x");
      }
      if (linea2.every((numero) => numero === "x")) {
        alert("Line3a!!!");
        CantadorLinea.push("x");
      }
    }
  };
  let CantarBingo = () => {
    const Bingo = [];
    carton.forEach((linea) => {
      Object.entries(linea).forEach((par) => {
        Bingo.push(par[1]);
      });
    });

    if (Bingo.every((numero) => numero === "x")) {
      CantadorBingo.push("x");
    }
  };
  let MostrarRanking = () => {
    Ranking.push({ UserName, Puntuación: Vueltasparapuntos.length });
    Ranking.sort((a, b) => a.Puntuación - b.Puntuación);
    console.table(Ranking);
  };
  const OtroCarton = () => {
    carton = GeneradorCarton();
    console.table(carton);
    const PreguntaOtroCarton = prompt(
      "Write yes if you want to keep those numbers"
    );
    if (PreguntaOtroCarton === null) {
      OtroCarton();
    } else if (PreguntaOtroCarton.toLowerCase() === "yes") {
      ComprobarIgual();
      return carton;
    } else {
      OtroCarton();
    }
  };

  OtroCarton();
};
const PlayAgain = () => {
  do {
    MAIN();
  } while (AskPlay === true);
};
PlayAgain();
