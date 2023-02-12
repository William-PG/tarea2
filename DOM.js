//1.----------------------------------------------------------------
var links= document.getElementsByTagName('a');
//--------
let total=links.length;

console.log(`el total de links es ${total}` )
//--------------
console.log(`Contenido de Links`)
for(let x=0;x<links.length;x++){
    console.log(`
        ${links[x]} 
    `)
}
//-------------------
console.log(`Penultimo link: ${links[total-2]}`);
//-------------------------------
let iguales=0;
for(let x=0;x<links.length;x++){
    if(links[x]=="http://prueba/"){
        iguales++;
    }
}

console.log(`El numero de enlaces iguales a http://prueba/ son : ${iguales}`);

//-------------------------------------

var linkter=document.getElementsByClassName("tercer-parrafo");
let tercer=linkter.length;

console.log(`El total de enlaces en el tercer parrafo es: ${tercer}`)

//2.-----------------------------------------------------------------------------------
const lista=document.querySelector('ul');
let nuevo;

const boton=document.createElement('button');
boton.innerHTML =`Agregar Item`;

boton.addEventListener('click',function(){

    const n = ()=>{
        let texto=prompt('Ingrese el Nombre de una Tienda Online: ');
        const item= document.createElement('li');
        item.innerHTML=texto;
        lista.appendChild(item);
    }
    n();
}
 
);

botn.appendChild(boton);













