// Declarando arreglo en js
// []
// Array

// Declarando de objeto
// {}

const peliculas = [
    {
        nombre: 'Titanic',
        genero: 'Accion',
        duracion: 90,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-666-titanic.png?alt=media&token=47f7ab89-c8fe-4f19-80c3-1ca82f60e7d0',
        sinopsis: 'Titanic 666 es una película de horror y suspenso producida por The Asylum y estrenada el 15 de abril de 2022 en los Estados Unidos en el Tubi, en el 110 aniversario del hundimiento del Titanic.',
        clasificacion: 'General',
        idioma: 'En',
        director: 'Nick Lyon',
        actores: ['AnnaLynne McCord', 'Keesha Sharp', 'Kendall Chappell']
    },
    {
        nombre: 'Avatar',
        genero: 'Ficción',
        duracion: 180,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-avatar.png?alt=media&token=fd177da2-b867-4754-ac19-d3f80a34dcdb',
        sinopsis: 'En un exuberante planeta llamado Pandora viven los Navi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados.',
        clasificacion: 'General',
        idioma: 'En',
        director: 'James Cameron',
        actores: ['Zoe Saldaña', 'Sam Wor', 'Sigourney Weaver']
    },
    {
        nombre: 'La bestia',
        genero: 'Suspenso',
        duracion: 153,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-bestia.jpg?alt=media&token=47506b8b-30f8-43f9-ad72-29016689da12',
        sinopsis: 'Beast es una película de suspenso y supervivencia estadounidense de 2022 dirigida por Baltasar Kormákur a partir de un guión de Ryan Engle, basado en una historia de Jaime Primak Sullivan.',
        clasificacion: '+18',
        idioma: 'En',
        director: 'Baltasar Kormákur',
        actores: ['Idris Elba', 'Sharlto Copley', 'Leah Jeffries']
    },
    {
        nombre: 'Dragon Ball Super: Super Hero',
        genero: 'Ficcion',
        duracion: 140,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-dragon-ball.jpg?alt=media&token=af9de181-42a8-4900-bdc2-8bb3df3070bc',
        sinopsis: 'La malvada organización Red Ribbon Army se reforma con nuevos y más poderosos androides, Gamma 1 y Gamma 2 para buscar venganza.',
        clasificacion: 'General',
        idioma: 'En',
        director: 'Tetsuro Kodama',
        actores: ['Goku', 'Vegeta', 'Goham']
    },
    {
        nombre: 'El demonio en el espejo',
        genero: 'Suspenso',
        duracion: 83,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-el-demonio-en-el-espejo.jpg?alt=media&token=0d89520c-4730-409a-bb90-89f11d03c4c5',
        sinopsis: 'Sin saber lo que está haciendo, una niña libera a un demonio que atormentó a su madre y su tía en el pasado.',
        clasificacion: '+12',
        idioma: 'En',
        director: 'Andrew Mecham',
        actores: ['Jan Broberg', 'Addy Miller', 'Caroline Labrum']
    },
    {
        nombre: 'Emergencia en el aire',
        genero: 'Accion',
        duracion: 119,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-emergencia-en-el-aire.png?alt=media&token=c94272f2-2694-48ab-922d-c9762007cde3',
        sinopsis: 'Emergency Declaration es una película de acción estrenada en 2021. Fue dirigida por Han Jae-rim y protagonizada por Song Kang-ho, Jeon Do-yeon, Lee Byung-hun y Kim Nam-gil',
        clasificacion: 'General',
        idioma: 'En',
        director: 'Han Jae-Rim',
        actores: ['Im Si-wan', 'Seol in-ah', 'Lee Byung']
    },
    {
        nombre: 'Gemelos siniestro',
        genero: 'Suspenso',
        duracion: 209,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-gemelo-siniestro.png?alt=media&token=68de5f54-a04f-4588-8e71-bf81c4c3d5b3',
        sinopsis: 'Tras la muerte de uno de sus hijos gemelos, Rachel y Anthony se instalan en el campo escandinavo para sanar las heridas anímicas. Allí, sin embargo, ella descubre que una fuerza sobrenatural y maligna quiere llevarse al pequeño que le queda.',
        clasificacion: '+18',
        idioma: 'En',
        director: 'Taneli Mustonen',
        actores: ['Teresa Palmer', 'Tristan Ruggeri', 'Steven Cree']
    },
    {
        nombre: 'Top Gun',
        genero: 'Accion',
        duracion: 110,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-ton-gun.jpg?alt=media&token=be14ed40-a72c-4cef-b828-2ec0802259ec',
        sinopsis: 'Top Gun (conocida como Top Gun: Pasión y gloria en Hispanoamérica, Top Gun: Reto a la gloria en Chile y Top Gun: Ídolos del aire en España) es una película estadounidense de acción, drama y romance de 1986, dirigida por Tony Scott y protagonizada por Tom Cruise y Kelly McGillis.',
        clasificacion: 'General',
        idioma: 'En',
        director: 'Tony Scott',
        actores: ['Tom Cruise', 'Val Kilmer', 'Kelly McGillis']
    },
    {
        nombre: 'Thor',
        genero: 'Ciencia ficción',
        duracion: 115,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-thor.png?alt=media&token=5994e20b-f2c2-40bb-b2c4-f728b03bb9c8',
        sinopsis: 'Thor está buscando la paz interior, pero la irrupción de Gorr, el asesino de dioses, le obliga a volver al combate. Thor recluta a la Reina Valkiria, Korg y su exnovia, Jane Foster, para que lo ayuden a evitar la extinción de los dioses.',
        clasificacion: 'General',
        idioma: 'En',
        director: '',
        actores: []
    },
    {
        nombre: 'Vértigo',
        genero: 'Thriller. Drama',
        duracion: 107,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-vertigo.png?alt=media&token=93adb46f-eadb-4eea-9c2a-ab89ca13cfa1',
        sinopsis: 'Para Becky y Hunter, la vida trata de superar tus miedos y empujar tus límites. Sin embargo, después de subir hasta la cima de una torre de comunicaciones abandonada, se encuentran atrapadas y sin forma de bajar. A 600 metros del suelo y totalmente alejadas de la civilización, las chicas pondrán a prueba sus habilidades de escaladoras expertas y lucharán desesperadamente por sobrevivir aunque lo tengan todo en contra. ¿Lo lograrán?',
        clasificacion: 'General',
        idioma: 'En',
        director: 'Kenneth Branagh',
        actores: ['Chris Hemserth', 'Natalie Prtman', 'Tom Hiddleston']
    }
];


const peliculasProxima = [
    {
        nombre: 'Tim Nagle',
        genero: 'Suspenso, Accion',
        duracion: 90,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-apocalipsis.png?alt=media&token=672205f4-9adc-4049-a25b-154442f93f15',
        sinopsis: 'Mientras el apocalipsis zombi sigue apoderándose de la Tierra, el soldado Rhys dedica su vida a capturar a supervivientes sanos y a muertos vivientes para que el Cirujano encuentre una cura para el mal que está acabando con la humanidad.',
        clasificacion: 'General',
        idioma: 'En',
        director: 'Chee Keong Cheung',
        actores: ['Oris Erhuero', 'Carlos Gallardo', 'Mark Strange']
    },
    {
        nombre: 'Chica salvaje',
        genero: 'Ficción',
        duracion: 180,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-la-chica-salvaje.png?alt=media&token=38d2d47d-0d99-48bc-9b68-9fcfcb8b5495',
        sinopsis: 'Una mujer solitaria que vive en los inhóspitos pantanos de Carolina del Norte se convierte en la principal sospechosa del asesinato de un hombre cuyo cadáver apareció en la zona. Sin embargo, la investigación revela que nada es lo que aparenta ser.',
        clasificacion: 'General',
        idioma: 'En',
        director: 'Olivia Newman',
        actores: ['Daisy Edgar-Jones', 'Taylor John Smith', 'Harris Dickinson']
    },
    {
        nombre: 'La que arde',
        genero: 'Suspenso',
        duracion: 75,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-la-que-arde.jpg?alt=media&token=66943cc3-7a4b-455c-a5be-e19cc9bd6203',
        sinopsis: 'Amador es un conocido pirómano gallego que, tras haber salido de la prisión y haber vuelto a la casa de su madre, en las montañas, ha sido acusado de causar un nuevo incendio.',
        clasificacion: 'General',
        idioma: 'En',
        director: 'Oliver Laxe',
        actores: ['Amador ARIAS', 'Sharlto Copley', 'Elena Mar Fernández']
    },
    {
        nombre: 'Dragon Ball Super: Super Hero',
        genero: 'FICCIÓN / ROAD MOVIE',
        duracion: 90,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-el-arbol-rojo.jpg?alt=media&token=6b249e27-7bf1-44ee-a1d6-ebcf3e8041e2',
        sinopsis: 'Ante la muerte de su padre, Eliécer se ve a cargo de una media hermana desconocida llamada Esperanza.',
        clasificacion: 'General',
        idioma: 'En',
        director: 'JOAN GÓMEZ',
        actores: ['Carlos Vergara', 'VegetShaday Velásquez', 'Jhoyner Salgado']
    },
    {
        nombre: '30 Noches Con Mi Ex',
        genero: 'Comedia, Romance',
        duracion: 83,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-30-noches-con-mi-ex.jpg?alt=media&token=db8fa09b-7271-477c-b000-a0d55a8bf6d0',
        sinopsis: 'El Turbo (50) y La Loba (41) están separados y no se ven hace tres años. A pedido de Ema (19), la hija de ambos, El Turbo acepta recibir en su casa a su ex mujer para que pase los 30 días de transición entre una larga internación psiquiátrica y su reinserción en la sociedad.',
        clasificacion: '+12',
        idioma: 'Argentina',
        director: 'Adrián Suar',
        actores: ['Adrián Suar', 'Pilar Gamboa', 'Rocío Hernández']
    }
];

const fila = document.querySelector('#fila');
const filaExtreno = document.querySelector('#filaExtreno');


peliculasProxima.map( peliculaExt =>  {

    const columna = document.createElement('div');
    columna.classList.add('col');

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card', 'h-100');

    const poster = document.createElement('img');
    poster.src = peliculaExt.poster;
    poster.classList.add('card-img-top');

    const tarjetaBody = document.createElement('div');
    tarjeta.classList.add('card-body');

    const nombre = document.createElement('h2');
    nombre.classList.add('card-title', 'text-center', 'pt-4', 'tituloh1');
    nombre.textContent = peliculaExt.nombre;

    const genero = document.createElement('p');
    genero.classList.add('text-start', 'fw-bold');
    genero.textContent = 'Genero: ' + peliculaExt.genero;
    
    const duracion = document.createElement('p');
    duracion.classList.add('text-start', 'fw-bold');
    duracion.textContent = 'Duracción: ' + peliculaExt.duracion;
    
    const clasificacion = document.createElement('p');
    clasificacion.classList.add('text-start', 'fw-bold');
    clasificacion.textContent = 'Clasificacion: ' + peliculaExt.clasificacion;

    const idioma = document.createElement('p');
    idioma.classList.add('text-start', 'fw-bold');
    idioma.textContent = 'Idioma: ' + peliculaExt.idioma;
    
    const director = document.createElement('p');
    director.classList.add('text-start', 'fw-bold');
    director.textContent = 'Director: ' + peliculaExt.director;

    const actores = document.createElement('p');
    actores.classList.add('text-start', 'fw-bold');
    actores.textContent = 'Actor: ' + peliculaExt.actores[0] + ', ' + peliculaExt.actores[1] + ', ' + peliculaExt.actores[2];
    
    const hr = document.createElement('hr');
    
    const sinopsis = document.createElement('p');
    sinopsis.classList.add('text-start', 'fw-bold', 'd-block');
    sinopsis.textContent = 'Sinopsis: ' + peliculaExt.sinopsis;

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
    filaExtreno.appendChild(columna);
    tarjeta.appendChild(tarjetaBody)

});

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

fila.addEventListener('click', () => {
    location.href = './src/views/ampliarInfoPelicula.html';
});