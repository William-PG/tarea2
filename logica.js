//----------------------------------------------

var caja=document.getElementById('puntotres');

caja.innerHTML+="<div class='nuevo' ><ol type='A'><li id='nombre'></li><li></li><li id='borrarTres'></li><li></li><li id='modificar'></li></ol> </div>"

var nombre=document.getElementById('nombre');
nombre.innerHTML=`William Peña`;

//---------------------------------------

document.getElementById('parr').setAttribute("id","parrafos");
var parrafos=document.getElementsByTagName('p');


var borrarTres=document.getElementById('borrarTres');
let texto= 'AÑOS';
const boto=document.createElement('button');
boto.innerHTML =`${texto}`;

boto.addEventListener('click',function(){

    const n = ()=>{
        for(let x=0;x<parrafos.length;x++){
            parrafos[x].innerHTML=``;
        }
    }
    n();
}
 
);

borrarTres.appendChild(boto)

//--------------------------------------------------
var modificar=document.getElementById('modificar');
modificar.innerHTML=`Ventanas`;

const bot=document.createElement('button');
bot.innerHTML =`Modificar quinto elemento`;

bot.addEventListener('click',function(){

    const n = ()=>{
        let texto=prompt('Ingrese texto: ')
        modificar.innerHTML=texto;
    }
    n();
}
 
);

puntotres.appendChild(bot);
