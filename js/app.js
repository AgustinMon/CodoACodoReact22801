// document es parte del DOM
const myDoc = document;

const articulos = [
    {
        titulo : "The Good, the Bad, and the Ugly",
        contenido: "The Good, the Bad, and the Ugly Official Trailer #1 - Clint Eastwood Movie (1966) HD",
        url : `<iframe width="315" height="315" src="https://www.youtube.com/embed/Q-mXj9RtKjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        titulo : "DANZA CHINA y DANZA RUSA",
        contenido: "DANZA CHINA y DANZA RUSA. Cascanueces. P. I. Tchaikovsky",
        url : `<iframe width="315" height="315" src="https://www.youtube.com/embed/dEsj1on6QbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        titulo : "Pequeña Serenata Nocturna",
        contenido: "Amadeus MOZART - Pequeña Serenata Nocturna",
        url : `<iframe width="315" height="315" src="https://www.youtube.com/embed/YofUPSyCrwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        titulo : "Have In Mind (1989)",
        contenido: "Cetu Javu - Have In Mind (1989)",
        url : `<iframe width="315" height="315" src="https://www.youtube.com/embed/bxnrfXA1KX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        titulo : "Stop!",
        contenido: "Erasure - Stop! (Extended 12' remix)",
        url : `<iframe width="315" height="315" src="https://www.youtube.com/embed/v3iGEMWc9qc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
];
// contador para agregar articulos
const cant_elements = articulos.length;

// holder de articulos
const myArticlesHolder = myDoc.getElementById("articles_holder");

let mySelector = myDoc.getElementById("input");
let contenido = "";

// agregar listener el input
mySelector.addEventListener("change", (event)=>{
    contenido = "";
    q = cant_elements < mySelector.value? cant_elements : mySelector.value;
    for (let index = 0; index < q; index++){
        //agregar articulos
        contenido += "<article>"+ 
            articulos[index].titulo + 
            articulos[index].url +
            "</article>";
    }

    // finaliza con la carga de los articulos en la web
    myArticlesHolder.innerHTML = contenido;
})

