const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const arrayDeIDs = (flights) => {
  const ID = [];
  flights.forEach((flight) => {
    ID.push(flight.id);
  });
  return ID;
};

const IDS = arrayDeIDs(flights);

const welcomeUserNAme = () => {
  let name = prompt("User name");
  if (name === null || name === "" || Number.isNaN(name) === false) {
    do {
      alert("Username no válido");
      name = prompt("User name");
    } while (name === null || name === "" || Number.isNaN(name) === false);
  }
  alert(`Benvenido ${name}`);
};
welcomeUserNAme();

const PrintFlights = (flights) => {
  flights.forEach((flight) => {
    if (flight.scale === false) {
      console.log(
        `ID: ${flight.id} El vuelo con origen: ${flight.from} y destino: ${flight.to} tiene un coste de ${flight.cost} y no realiza ninguna escala.`
      );
    } else {
      console.log(
        `ID: ${flight.id} El vuelo con origen: ${flight.from} y destino: ${flight.to} tiene un coste de ${flight.cost} y realiza escala.`
      );
    }
  });
};

PrintFlights(flights);

const PrintMediumCost = flights.reduce(
  (total, flight) => total + flight.cost,
  0
);

console.log(
  `El coste medio de los vuelo es de ${(
    PrintMediumCost / flights.length
  ).toFixed(2)}`
);

const printFlightsWithScale = (flights) => {
  const FlightsWithScale = flights.filter((flights) => flights.scale === true);
  return FlightsWithScale.length;
};
console.log(`Salen ${printFlightsWithScale(flights)} vuelos que hacen escala`);

const UltimosCincoVuelos = (flights) => {
  const numeroDeVuelosMenosCinco = flights.length - 5;
  const ultimosCincoVuelos = flights.filter(
    (flights) => flights.id >= numeroDeVuelosMenosCinco
  );
  return ultimosCincoVuelos;
};
const mostrarDestinoUltimosCincoVuelos = (flights) => {
  flights.forEach((flight) => {
    console.log(`El destino del vuelo es ${flight.to}`);
  });
};

const ultimosCincoVuelos = UltimosCincoVuelos(flights);
console.log("Los ultimos vuelos se dirigen a:");
mostrarDestinoUltimosCincoVuelos(ultimosCincoVuelos);

const askForRole = () => {
  const role = prompt("Are you an user or an admin");
  if (role === null) {
    askForRole();
  } else if (role.toLowerCase() !== "user" && role.toLowerCase() !== "admin") {
    askForRole();
  } else {
    return role;
  }
};

const askForAdminAction = () => {
  let action = prompt("What do you want to do?");
  if (action === null) {
    console.log("Bye");
  } else if (
    action.toLowerCase() !== "create" &&
    action.toLowerCase() !== "delete" &&
    action.toLowerCase() !== "stop"
  ) {
    do {
      action = prompt("Invalid Option");
    } while (
      action.toLowerCase() !== "create" &&
      action.toLowerCase() !== "delete" &&
      action.toLowerCase() !== "stop"
    );
  }
  return action;
};

const adminActions = () => {
  const action = askForAdminAction();
  if (action === null) {
    console.log("bye");
  } else if (action.toLowerCase() === "stop") {
    console.log("bye");
  } else if (action.toLowerCase() === "delete") {
    actionDeleteAdmin();
  } else if (action.toLowerCase() === "create") {
    actionCreateAdmin();
  }
};

let actionCreateAdmin = () => {
  const newFlight = {};
  newFlight.id = flights.length;
  newFlight.to = prompt("to");
  newFlight.from = prompt("from");
  newFlight.cost = prompt("cost");
  newFlight.scale = prompt("scale");

  flights.push(newFlight);
  PrintFlights(flights);
  if (flights.length > 15) {
    alert("15 flights");
    flights.pop();
    adminActions();
  }
  adminActions();
};

let actionDeleteAdmin = () => {
  PrintFlights(flights);
  let ID;
  const IDlist = [];
  do {
    ID = prompt("ID to delete");
    if (
      ID === "" ||
      +ID < 0 ||
      +ID > flights.length ||
      !IDS.includes(+ID) ||
      IDlist.includes(ID)
    ) {
      do {
        ID = prompt("invalid ID. Write again");
      } while (
        ID === "" ||
        ID < 0 ||
        ID > flights.length ||
        !IDS.includes(+ID) ||
        IDlist.includes(ID)
      );
      IDlist.push(ID);
    } else {
      IDlist.push(ID);
    }
  } while (ID != null);
  IDlist.pop();
  console.log(IDlist);

  const FlghtsAfterDelete = () => {
    flights.forEach((flight) => {
      IDlist.forEach((ID) => {
        if (flight.id == +ID) {
          flights.splice(flights.indexOf(flight), 1);
        }
      });
    });
  };
  FlghtsAfterDelete();
  PrintFlights(flights);
};

const usersActions = () => {
  let precio;
  do {
    precio = prompt(
      "Write a price in numbers to see the flights with that price or chepers"
    );
  } while (precio === null || precio === "" || +precio === NaN);
  console.log(+precio);
  const flightsPriceUsers = flights.filter((flight) => flight.cost < +precio);
  PrintFlights(flightsPriceUsers);
  prompt("Wich flight do you want to buy?");
  alert("Thank you for your purchase. See you soon.");
};

const ExecuteFunctionAdminYUser = () => {
  const role = askForRole();
  console.log(role.toLowerCase());
  if (role.toLowerCase() === "admin") {
    adminActions();
  } else {
    usersActions();
  }
};

ExecuteFunctionAdminYUser();
