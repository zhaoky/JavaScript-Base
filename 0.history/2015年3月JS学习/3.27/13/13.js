function a(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("aa")) return false;
	var div=document.createElement("div");
	var a=document.getElementById("aa");
	div.setAttribute("id","div");
	var b=document.createElement("img");
	b.setAttribute("id","bb");
	b.setAttribute("src","13.gif");
	b.setAttribute("alt","喝喝哒");
	div.appendChild(b);
	insertAfter(div,a);
	var links=a.getElementsByTagName("a");
	links[0].onmouseover=function(){
			moveElement("bb",-100,0,10);
		}
	links[1].onmouseover=function(){
			moveElement("bb",-200,0,10);
		}
	links[2].onmouseover=function(){
			moveElement("bb",-300,0,10);
		}
	}
addLoadEvent(a);