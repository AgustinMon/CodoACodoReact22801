//a partir de EM6
let myLet = 0;
var myVar = 1;

// document es parte del DOM
const myDoc = document;
console.log(myDoc);

//Clase03
let myH3 = myDoc.getElementById("mySuperH3");
let mySelector = myDoc.getElementById("input");
const cant_elements = 10;

mySelector.addEventListener("change", (q)=>{
    for (let index = 0; index < q; index++){
        myH3.innerHTML = myButtonStr;
    }
})
myH3.innerText = "Modificando el H3";


const myButtonStr = "<button>Esto es un boton</button>";
for (let index = 0; index < cant_elements; index++){
    myH3.innerHTML = myButtonStr;
}

