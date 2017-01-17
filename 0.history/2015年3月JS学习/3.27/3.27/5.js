function aa(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("aa")) return false;
	var img=document.createElement("img");
	img.setAttribute("id","xiazi");
	img.setAttribute("src","0.jpg");
	img.setAttribute("alt","盲僧");
	var txt=document.createElement("p");
	txt.setAttribute("id","wen");
	var wen=document.createTextNode("选择技能图片吧！");
	txt.appendChild(wen);
	var aa=document.getElementById("aa");
	insertAfter(img,aa);
	insertAfter(txt,img);
}
function bb(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("aa")) return false;		
	var aa=document.getElementById("aa");
	var links=aa.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return show(this);
			}
		links[i].onkeypress=links[i].onclick;
		}
}
function show(a){
	if(!document.getElementById("xiazi")) return true;
	var href=a.getAttribute("href");
	var img = document.getElementById("xiazi");
	img.setAttribute("src",href);
	if (!document.getElementById("wen")) return false;
	if (a.getAttribute("title")) {
		var text = a.getAttribute("title");
	} else {
		var text = "";
	}
	var txt = document.getElementById("wen");
	if (txt.firstChild.nodeType == 3) {
		txt.firstChild.nodeValue = text;
	}
	return false;
}
addLoadEvent(aa);
addLoadEvent(bb);