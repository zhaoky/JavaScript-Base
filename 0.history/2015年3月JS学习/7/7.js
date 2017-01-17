function a(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("aa")) return false;
	var aa=document.getElementById("aa");
	var links=aa.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return b(this) ? false:true;
			}
	}
}
function b(abc){
	if(!document.getElementById("tu")) return false;
	var href=abc.getAttribute("href");
	var tu=document.getElementById("tu");
	if(tu.nodeName!="IMG") return false;
	tu.setAttribute("src",href);
	if(document.getElementById("wen")){
		var text=abc.getAttribute("title")?abc.getAttribute("title"):"";
		var wen=document.getElementById("wen");
		if(wen.childNodes[0].nodeType==1){
			wen.childNodes[1].nodeValue=text;
			}
		}
		return true;
}
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
		}
		else{
		window.onload=function(){
			oldonload();
			func();
			}	
		}
}
addLoadEvent(a);
addLoadEvent(b);