let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

const welcomeUserNAme = () => {
    let name = prompt('User name');
  if(name === null || name === '' || isNaN(name) === false){
      do{
        alert('Username no válido')
        name = prompt('User name');
      }while(name === null || name === '' || isNaN(name) === false)
  }
  alert(`Benvenido ${name}`)
}
welcomeUserNAme();


const PrintFlights = (flights) =>{
    flights.forEach(flight => {
        flight.scale === false ? console.log('El vuelo con origen: ' + flight.from + ' y destino: ' + flight.to + ' tiene un coste de '+ flight.cost + ' y no realiza ninguna escala.') 
        : console.log('El vuelo con origen: ' + flight.from + ' y destino: ' + flight.to + ' tiene un coste de '+ flight.cost + ' y realiza escala.')
    });
} 

PrintFlights(flights) 

const PrintMediumCost = flights.reduce((total, flight) => {
return (total + flight.cost);
 }, 0 )

console.log('El coste medio de los vuelo es de ' + (PrintMediumCost/flights.length).toFixed(2));


const printFlightsWithScale = (flights) => {
    let = FlightsWithScale = flights.filter ((flights) => flights.scale === true)    
    return FlightsWithScale.length
}
console.log('Salen ' + printFlightsWithScale(flights) + ' vuelos que hacen escala'); 

const UltimosCincoVuelos = (flights) => {
    let numeroDeVuelosMenosCinco = flights.length - 5
    let ultimosCincoVuelos = flights.filter((flights) => flights.id >= numeroDeVuelosMenosCinco)
    return ultimosCincoVuelos
}
const mostrarDestinoUltimosCincoVuelos = (flights) => {
    flights.forEach(flight => {
        console.log('El destino del vuelo es ' + flight.to)
    });
}

let ultimosCincoVuelos = UltimosCincoVuelos(flights);
console.log('Los ultimos vuelos se dirigen a:')
mostrarDestinoUltimosCincoVuelos(ultimosCincoVuelos);


