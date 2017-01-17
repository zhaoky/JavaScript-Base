window.onload=function(){
	var aa=document.createElement("p");
	var txt=document.createTextNode("这是一个段落");
	aa.appendChild(txt);
	var bb=document.getElementById("aa");
	bb.appendChild(aa);
	}