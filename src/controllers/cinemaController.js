import {peliculas, peliculasProxima} from '../helpers/baseDatos.js';
import { pintarPeliculas } from '../helpers/pintarPeliculas.js';

const fila = document.querySelector('#fila');
const filaExtreno = document.querySelector('#filaExtreno');

pintarPeliculas( peliculas, fila );
pintarPeliculas( peliculasProxima, filaExtreno );

const peliculaSeleccionada = {};

fila.addEventListener('click', (event) => {
    peliculaSeleccionada.poster = (event.target.parentElement.querySelector('img').src);
    peliculaSeleccionada.nombre = (event.target.parentElement.querySelector('h2').textContent);
    peliculaSeleccionada.genero=(event.target.parentElement.querySelectorAll('p')[0].textContent);
    peliculaSeleccionada.duracion=(event.target.parentElement.querySelectorAll('p')[1].textContent);
    peliculaSeleccionada.clacificacion=(event.target.parentElement.querySelectorAll('p')[2].textContent);
    peliculaSeleccionada.idioma=(event.target.parentElement.querySelectorAll('p')[3].textContent);
    peliculaSeleccionada.director=(event.target.parentElement.querySelectorAll('p')[4].textContent);
    peliculaSeleccionada.actores=(event.target.parentElement.querySelectorAll('p')[5].textContent);
    peliculaSeleccionada.sinopsis=(event.target.parentElement.querySelectorAll('p')[6].textContent);
    
    localStorage.setItem('peliculas-seleccionada', JSON.stringify(peliculaSeleccionada));
    // localStorage.clear();
    
    location.href = './src/views/ampliarInfoController.html';
});