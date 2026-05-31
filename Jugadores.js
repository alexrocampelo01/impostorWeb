let jugadores = []
let jugador = {
    nombre: "jugador 1",
    impostor: true
}
sumarJugador("Alex");
sumarJugador("Juan");
sumarJugador("Diego");

function sumarJugador(nombre){
    jugador= {}
    jugador.nombre = nombre;
    jugador.impostor = false;
    jugadores.push(jugador);

}

function cambiarNombre (index, nombreNuevo){
    jugadores[index].nombre = nombreNuevo;

}

function restarJugador(index){
    jugadores.splice(index,1);
}

function seleccionarImpostor(){
    console.log("escoger importor");
    let numeroJugadores = jugadores.length;
    let indexImpostor = Math.floor(Math.random() * numeroJugadores);
    console.log(`numero de jugadores ${numeroJugadores} y posicionImpostor ${indexImpostor}`);
    jugadores[indexImpostor].impostor = true;
    console.log(jugadores);
}