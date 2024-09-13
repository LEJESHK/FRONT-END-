let p=document.getElementById("inp");
function fun(event)
{


let a=event.target.textContent;
let ans='';
if(p.value=='0')
{
    ans=ans+(a);

}

else{
    ans=ans+(p.value+a);
}
p.value=ans;
}
function funt()
{
let s=p.value;
let y=String(eval(s));

p.value=y;
}
function ac()
{
    let a=p.value;
    a=0;
    p.value=a;
}
function del()
{
    p.value=p.value.slice(0,p.value.length-1);
}
function pm()
{
    p.value=String(-eval(p.value));
}