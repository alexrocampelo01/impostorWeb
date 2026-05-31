//estructura del fomulario para añadir jugadores
/* <div class="form">
    <label>Jugador</label>
    <input type="text" placeholder="nombre jugador">
    <button class="btn agregar">Añadir</button>
  </div> 
*/
let butAgregar = document.querySelector('.agregar');
butAgregar.addEventListener('click', agregarJugador);
function agregarJugador(){
  console.log("agrego");
  let nombre = document.querySelector('.nombreAgregar').value;
  sumarJugador(nombre);
  cargarListaJugadores();
}

//estructura HTML de la Lista
/*
 <div class="listaJugadores">
    <div class="filaJugador">
      <div class="texto">eqg</div>
      <div class="acciones">
        <button class="btn borrar">Borrar</button>
        <button class="btn editar">Editar</button>
      </div>
    </div>
</div> 
*/
let listaJugadores = document.querySelector(".listaJugadores");

cargarListaJugadores();
function cargarListaJugadores(){
  listaJugadores.innerHTML= "";
  listaJugadores.classList.add('listaJugadores');
    console.log("numero de jugadores "+ jugadores.length)
    
    jugadores.forEach((juagdor, index) => {
      //creamos los nodos y les asignamos clases
      // console.log(jugadores);
      // console.log(`jugador` + juagdor.nombre);
      // console.log("nuemro de vuletas ="+ index);
      let filaJugador = document.createElement('div');
      filaJugador.classList.add('filasJugadores');
      filaJugador.setAttribute("data-idJugador",index);
      filaJugador.addEventListener('click', realizarAcciones);
      
      let nombre = document.createElement('div');
      nombre.classList.add('nombre');
      nombre.innerHTML = `${juagdor.nombre}`;
  
      let acciones = document.createElement('div');
      acciones.classList.add('acciones');
      
      let borrar = document.createElement('button');
      borrar.classList.add('btn', 'borrar');
      // borrar.addEventListener('click', eliminarFila);
      borrar.innerHTML= "Borrar";
      
      let editar = document.createElement('button');
      editar.classList.add('btn',  'editar');
      editar.innerHTML= "Editar";
  
      //ahora creamos la estructura
      acciones.appendChild(borrar);
      acciones.appendChild(editar);
      filaJugador.appendChild(nombre);
      filaJugador.appendChild(acciones);
      listaJugadores.appendChild(filaJugador);
    });

}

function realizarAcciones(e){
console.log("realidar");
let boton = e.target
let fila = boton.closest('.filasJugadores')
let idjugador = fila.dataset.idjugador;
if(boton.classList.contains('borrar')){
  eliminarFila(idjugador);
  fila.remove();
}
if(boton.classList.contains('editar')){
  editarNombre(idjugador);
}
}
function editarNombre(idjugador){
 console.log("edito el jugador " + idjugador);
}
function eliminarFila(idjugador){
  // console.log("elimino el jugador " + idjugador);
  jugadores.splice(idjugador, 1);
}


