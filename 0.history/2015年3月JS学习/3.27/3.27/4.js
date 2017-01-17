window.onload=function(){
	var a=document.createElement("p");
	var b=document.createElement("em");
	var txt1=document.createTextNode("这是");
	var txt2=document.createTextNode("我的");
	var txt3=document.createTextNode("元素");
	var c=document.getElementById("aa");
	b.appendChild(txt2);
	a.appendChild(txt1);
	a.appendChild(b);
	a.appendChild(txt3);
	c.appendChild(a);
	}