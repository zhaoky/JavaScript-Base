function show(pic){
	var a=pic.getAttribute("href");
	var b=document.getElementById("aaa");
	var tit=pic.getAttribute("title");
	var wen=document.getElementById("wen");
	b.setAttribute("src",a);
	wen.firstChild.nodeValue=tit;
}