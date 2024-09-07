var pte=document.getElementById("con");
function drl(event){
    event.target.parentElement.remove();
    
}

var pote=document.getElementById("pot");
var cb=document.getElementById("c");
cb.addEventListener("click",function(){
pote.style.display="none";
})
function fun()
{
    var dude=document.getElementById("pot");
    dude.style.display="block";
}




function add()
{
    var divi=document.getElementById("container");
    var in1=document.querySelector(".five");
    var in2=document.querySelector(".six");
    var in3=document.querySelector(".seven");
    var icv=document.createElement("div");
    icv.setAttribute("id","con");
    icv.innerHTML=`<h1 style="color:tomato">${in1.value}</h1>
    <h5>${in2.value}</h5>
    <p>${in3.value}</p>
    <button onclick="drl(event)">DELETE</button>
    
    
    `;
   
    divi.append(icv);
    var pote=document.getElementById("pot");
    pote.style.display="none";
}