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

const PrintFlights = (flightsParameter) => {
  flightsParameter.forEach((flight) => {
    if (flight.scale === false) {
      console.log(
        `El vuelo con origen: ${flight.from} y destino: ${flight.to} tiene un coste de ${flight.cost} y no realiza ninguna escala.`
      );
    } else {
      console.log(
        `El vuelo con origen: ${flight.from} y destino: ${flight.to} tiene un coste de ${flight.cost} y realiza escala.`
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

const printFlightsWithScale = (flightsParameter) => {
  const FlightsWithScale = flightsParameter.filter(
    (flight) => flight.scale === true
  );
  return FlightsWithScale.length;
};
console.log(`Salen ${printFlightsWithScale(flights)} vuelos que hacen escala`);

const UltimosCincoVuelos = (flightsParameter) => {
  const numeroDeVuelosMenosCinco = flightsParameter.length - 5;
  const ultimosCincoVuelos = flightsParameter.filter(
    (flight) => flight.id >= numeroDeVuelosMenosCinco
  );
  return ultimosCincoVuelos;
};
const mostrarDestinoUltimosCincoVuelos = (flightsParameter) => {
  flightsParameter.forEach((flight) => {
    console.log(`El destino del vuelo es ${flight.to}`);
  });
};

const ultimosCincoVuelos = UltimosCincoVuelos(flights);
console.log("Los ultimos vuelos se dirigen a:");
mostrarDestinoUltimosCincoVuelos(ultimosCincoVuelos);
