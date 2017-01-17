window.onload=function(){
	var aa=document.getElementById("aa");
	var a=document.createElement("p");
	var b=document.createElement("em");
	var txt1=document.createTextNode("这是");
	var txt2=document.createTextNode(" 我的 ");
	var txt3=document.createTextNode("Javascript!");
	a.appendChild(txt1);
	a.appendChild(b);
	a.appendChild(txt3);
	b.appendChild(txt2);
	aa.appendChild(a);
	}