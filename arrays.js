const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["indigo","blue","violet","green","yellow","red","orange","megenta"];
body.style.backgroundColor="black";
document.addEventListener("click",function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
})