export const pintarPeliculas = ( peliculas, fila ) => {
    
    
    
    peliculas.map( pelicula => {

        // const poster = document.createElement('img');
        // const nombre = document.createElement('h2');
    
        // poster.src = pelicula.poster;
        // nombre.innerText = pelicula.nombre;
    
        // fila.appendChild(poster);
        // fila.appendChild(nombre);
        const columna = document.createElement('div');
        columna.classList.add('col');
    
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card', 'h-100');
    
        const poster = document.createElement('img');
        poster.src = pelicula.poster;
        poster.classList.add('card-img-top');
    
        const tarjetaBody = document.createElement('div');
        tarjeta.classList.add('card-body');
    
        const nombre = document.createElement('h2');
        nombre.classList.add('card-title', 'text-center', 'pt-4', 'tituloh1');
        nombre.textContent = pelicula.nombre;
    
        const genero = document.createElement('p');
        genero.classList.add('text-start', 'fw-bold');
        genero.textContent = 'Genero: ' + pelicula.genero;
        
        const duracion = document.createElement('p');
        duracion.classList.add('text-start', 'fw-bold');
        duracion.textContent = 'Duracción: ' + pelicula.duracion;
        
        const clasificacion = document.createElement('p');
        clasificacion.classList.add('text-start', 'fw-bold');
        clasificacion.textContent = 'Clasificacion: ' + pelicula.clasificacion;
    
        const idioma = document.createElement('p');
        idioma.classList.add('text-start', 'fw-bold');
        idioma.textContent = 'Idioma: ' + pelicula.idioma;
        
        const director = document.createElement('p');
        director.classList.add('text-start', 'fw-bold');
        director.textContent = 'Director: ' + pelicula.director;
    
        const actores = document.createElement('p');
        actores.classList.add('text-start', 'fw-bold');
        actores.textContent = 'Actores: ' + pelicula.actores[0] + ', ' + pelicula.actores[1] + ', ' + pelicula.actores[2];
        
        const hr = document.createElement('hr');
        
        const sinopsis = document.createElement('p');
        sinopsis.classList.add('text-start', 'fw-bold', 'd-block');
        sinopsis.textContent = 'Sinopsis: ' + pelicula.sinopsis;
    
        tarjeta.appendChild(poster); 
        tarjeta.appendChild(nombre); 
        tarjeta.appendChild(genero); 
        tarjeta.appendChild(duracion); 
        tarjeta.appendChild(clasificacion); 
        tarjeta.appendChild(idioma);
        tarjeta.appendChild(director);
        tarjeta.appendChild(actores);
        tarjeta.appendChild(hr);
        tarjeta.appendChild(sinopsis);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
        tarjeta.appendChild(tarjetaBody)
        
    });

}