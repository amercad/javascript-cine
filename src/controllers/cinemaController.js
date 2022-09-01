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
        idioma: 'En'
    },
    {
        nombre: 'Avatar',
        genero: 'Ficción',
        duracion: 180,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-avatar.png?alt=media&token=fd177da2-b867-4754-ac19-d3f80a34dcdb',
        sinopsis: 'En un exuberante planeta llamado Pandora viven los Navi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados.',
        clasificacion: 'General',
        idioma: 'En'
    },
    {
        nombre: 'La bestia',
        genero: 'Suspenso',
        duracion: 153,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-bestia.jpg?alt=media&token=47506b8b-30f8-43f9-ad72-29016689da12',
        sinopsis: 'Beast es una película de suspenso y supervivencia estadounidense de 2022 dirigida por Baltasar Kormákur a partir de un guión de Ryan Engle, basado en una historia de Jaime Primak Sullivan.',
        clasificacion: '+18',
        idioma: 'En'
    },
    {
        nombre: 'Dragon Ball Super: Super Hero',
        genero: 'Ficcion',
        duracion: 140,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-dragon-ball.jpg?alt=media&token=af9de181-42a8-4900-bdc2-8bb3df3070bc',
        sinopsis: 'La malvada organización Red Ribbon Army se reforma con nuevos y más poderosos androides, Gamma 1 y Gamma 2 para buscar venganza.',
        clasificacion: 'General',
        idioma: 'En'
    },
    {
        nombre: 'El demonio en el espejo',
        genero: 'Suspenso',
        duracion: 83,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-el-demonio-en-el-espejo.jpg?alt=media&token=0d89520c-4730-409a-bb90-89f11d03c4c5',
        sinopsis: 'Sin saber lo que está haciendo, una niña libera a un demonio que atormentó a su madre y su tía en el pasado.',
        clasificacion: '+12',
        idioma: 'En'
    },
    {
        nombre: 'Emergencia en el aire',
        genero: 'Accion',
        duracion: 119,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-emergencia-en-el-aire.png?alt=media&token=c94272f2-2694-48ab-922d-c9762007cde3',
        sinopsis: 'Emergency Declaration es una película de acción estrenada en 2021. Fue dirigida por Han Jae-rim y protagonizada por Song Kang-ho, Jeon Do-yeon, Lee Byung-hun y Kim Nam-gil',
        clasificacion: 'General',
        idioma: 'En'
    },
    {
        nombre: 'Gemelos siniestro',
        genero: 'Suspenso',
        duracion: 209,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-gemelo-siniestro.png?alt=media&token=68de5f54-a04f-4588-8e71-bf81c4c3d5b3',
        sinopsis: 'Tras la muerte de uno de sus hijos gemelos, Rachel y Anthony se instalan en el campo escandinavo para sanar las heridas anímicas. Allí, sin embargo, ella descubre que una fuerza sobrenatural y maligna quiere llevarse al pequeño que le queda.',
        clasificacion: '+18',
        idioma: 'En'
    },
    {
        nombre: 'Top Gun',
        genero: 'Accion',
        duracion: 110,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-ton-gun.jpg?alt=media&token=be14ed40-a72c-4cef-b828-2ec0802259ec',
        sinopsis: 'Top Gun (conocida como Top Gun: Pasión y gloria en Hispanoamérica, Top Gun: Reto a la gloria en Chile y Top Gun: Ídolos del aire en España) es una película estadounidense de acción, drama y romance de 1986, dirigida por Tony Scott y protagonizada por Tom Cruise y Kelly McGillis.',
        clasificacion: 'General',
        idioma: 'En'
    },
    {
        nombre: 'Thor',
        genero: 'Ciencia ficción',
        duracion: 115,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-thor.png?alt=media&token=5994e20b-f2c2-40bb-b2c4-f728b03bb9c8',
        sinopsis: 'Thor está buscando la paz interior, pero la irrupción de Gorr, el asesino de dioses, le obliga a volver al combate. Thor recluta a la Reina Valkiria, Korg y su exnovia, Jane Foster, para que lo ayuden a evitar la extinción de los dioses.',
        clasificacion: 'General',
        idioma: 'En'
    },
    {
        nombre: 'Vértigo',
        genero: 'Thriller. Drama',
        duracion: 107,
        poster: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/pelicula-vertigo.png?alt=media&token=93adb46f-eadb-4eea-9c2a-ab89ca13cfa1',
        clasificacion: 'Para Becky y Hunter, la vida trata de superar tus miedos y empujar tus límites. Sin embargo, después de subir hasta la cima de una torre de comunicaciones abandonada, se encuentran atrapadas y sin forma de bajar. A 600 metros del suelo y totalmente alejadas de la civilización, las chicas pondrán a prueba sus habilidades de escaladoras expertas y lucharán desesperadamente por sobrevivir aunque lo tengan todo en contra. ¿Lo lograrán?',
        idioma: 'En'
    }
];

const fila = document.querySelector('#fila');
let card = '';

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
    nombre.classList.add('card-title', 'text-center', 'pt-4');
    nombre.textContent = pelicula.nombre;

    const genera = document.createElement('p');
    genera.classList.add('text-start', 'fw-bold');
    genera.textContent = 'Genero: ' + pelicula.genero;
    

    const idioma = document.createElement('p');
    idioma.classList.add('text-start', 'fw-bold');
    idioma.textContent = 'Idioma: ' + pelicula.idioma;

    const sinopsis = document.createElement('p');
    sinopsis.classList.add('text-start', 'fw-bold', 'd-none');
    sinopsis.textContent = 'Sinopsis: ' + pelicula.sinopsis;

    tarjeta.appendChild(poster); 
    tarjeta.appendChild(nombre); 
    tarjeta.appendChild(genera); 
    tarjeta.appendChild(idioma);
    tarjeta.appendChild(sinopsis);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
    tarjeta.appendChild(tarjetaBody)
    
});

fila.addEventListener('click', () => {
    console.log('Esta seleccionando una pelicula');
});