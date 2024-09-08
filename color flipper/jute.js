
const arr=["green","red","blue","pink","tomato","yellow"];

function sb(){
const ran=rand();
document.body.style.backgroundColor=arr[ran];
document.getElementById("ips").textContent=arr[ran];
}
function rand(){
return Math.floor(Math.random() * arr.length);
}