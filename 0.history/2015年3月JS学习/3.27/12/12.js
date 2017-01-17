function a(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("aa")) return false;
	if (!document.getElementById("bb")) return false;
	var b=document.getElementById("bb");
	b.style.position = "absolute";
	b.style.left = "0px";
	b.style.top = "0px";
	var a=document.getElementById("aa");
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