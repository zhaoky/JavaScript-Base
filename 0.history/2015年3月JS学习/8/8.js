window.onload=function(){
document.createElement("p");
var a=document.createElement("p");
var b=document.getElementById("aa");
b.appendChild(a);
var txt=document.createTextNode("hello javascript!");
a.appendChild(txt);
}
/*
window.onload=function(){
	var a=document.createElement("p");
	var b="nodeName:";
	b+=a.nodeName;
	b+=" nodeType:";
	b+=a.nodeType;
	alert(b);
}
*/