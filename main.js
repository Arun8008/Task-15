let color=["red","black","gray","yellow","blue","green"];
let btn1=document.querySelector("#btn");
let body=document.querySelector("body");


btn1.addEventListener("click",function(){
	a=Math.floor(Math.random()*color.length);
	body.style.backgroundColor=color[a];
});	


let date=new Date();
document.write(date.toLocaleString());