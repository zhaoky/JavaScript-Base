//页面加载时运行多个函数
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
//插入一个新元素在指定元素后
function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}
//添加一个类
function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
}
//只要a的href和改页面名称一致，则添加类here，并给该页面的body添加id。
function highlightPage(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	var headers=document.getElementsByTagName("header");
	if(headers.length==0) return false;
	var navs=headers[0].getElementsByTagName("nav");
	if(navs.length==0) return false;
	var links=navs[0].getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		var url=links[i].getAttribute("href");
		if(window.location.href.indexOf(url)!=-1){
			links[i].className="here";
			document.body.setAttribute("id",links[i].lastChild.nodeValue.toLowerCase());
			}
	}
}
//移动元素
function moveElement(elementID,final_x,final_y,interval) {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.left) {
    elem.style.left = "0px";
  }
  if (!elem.style.top) {
    elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
  if (xpos < final_x) {
    var dist = Math.ceil((final_x - xpos)/10);
    xpos = xpos + dist;
  }
  if (xpos > final_x) {
    var dist = Math.ceil((xpos - final_x)/10);
    xpos = xpos - dist;
  }
  if (ypos < final_y) {
    var dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if (ypos > final_y) {
    var dist = Math.ceil((ypos - final_y)/10);
    ypos = ypos - dist;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}
//创建了一个图片div，并随着a动
function a(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("intro")) return false;
	var intro=document.getElementById("intro");
	var div=document.createElement("div");
	div.setAttribute("id","slideshow");
	var frame=document.createElement("img");
	frame.setAttribute("id","frame");
	frame.setAttribute("src","images/frame.gif");
	frame.setAttribute("alt","边框");
	div.appendChild(frame);
	var preview=document.createElement("img");
	preview.setAttribute("id","preview");
	preview.setAttribute("src","images/ms.jpg");
	preview.setAttribute("alt","幻灯片");
	div.appendChild(preview);
	insertAfter(div,intro);
	var links=document.getElementsByTagName("a");
	var links = document.getElementsByTagName("a");
	for (var i=0; i<links.length; i++) {
		links[i].onmouseover = function() {
		var destination = this.getAttribute("href");
		if (destination.indexOf("index.html") != -1) {
			moveElement("preview",0,0,5);
			}
		if (destination.indexOf("jiqiao.html") != -1) {
			moveElement("preview",-150,0,5);
			}
		if (destination.indexOf("jineng.html") != -1) {
			moveElement("preview",-300,0,5);
			}
		if (destination.indexOf("paihang.html") != -1) {
			moveElement("preview",-450,0,5);
			}
		if (destination.indexOf("lianxi.html") != -1) {
			moveElement("preview",-600,0,5);
			}
		}
	}
}
//如果section中的a的id与形参一致，则显示
function showSection(id){
	var a=document.getElementsByTagName("section");
	for(var i=0;i<a.length;i++){
		if(a[i].getAttribute("id")!=id){
		a[i].style.display="none";
		}
		else{
			a[i].style.display="block";
			}
	}
}
//点击a 就把article的nav的a的href传递过去
function b(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	var articles=document.getElementsByTagName("article");
	if(articles.length==0) return false;
	var navs=articles[0].getElementsByTagName("nav");
	if(navs.length==0) return false;
	var links=navs[0].getElementsByTagName("a"); //出现的错误nav--navs
	for(var i=0; i<links.length;i++){
		var id=links[i].getAttribute("href").split("#")[1];  //出现的错误getArrtibute
		if(!document.getElementById(id)) continue;
		document.getElementById(id).style.display="none";
		links[i].a=id;
		links[i].onclick=function(){
			showSection(this.a);
			return false;	 
		}	 	 
	}
}
//将形参的href赋给placeholder的src，形参的title赋给description的子节点值
function show(pic){
	if(!document.getElementById("placeholder")) return false;
	var source=pic.getAttribute("href");
	var a=document.getElementById("placeholder");
	a.setAttribute("src",source);
	if(!document.getElementById("description")) return false;
	if(pic.getAttribute("title")){
		var text=pic.getAttribute("title");		
		}else{
		var text="";	
		}
	var wen=document.getElementById("description");
	if(wen.firstChild.nodeType==3){
		wen.firstChild.nodeValue=text;
		}
		return false;
}
//创建了一个图片和段落
function c(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var img=document.createElement("img");
	img.setAttribute("id","placeholder");
	img.setAttribute("src","images/placeholder.gif");
	img.setAttribute("alt","图片");
	var wen=document.createElement("p");
	wen.setAttribute("id","description");
	var text=document.createTextNode("Choose an image");
	wen.appendChild(text);
	var a=document.getElementById("imagegallery");
	insertAfter(wen,a);
	insertAfter(img,wen);
}

//点击id为imagegallery中的a触发函数
function d(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var a=document.getElementById("imagegallery");
	var links=a.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return show(this);
			}		
		}
	}
//每隔一排添加class=odd
function e() {
  if (!document.getElementsByTagName) return false;
  var tables = document.getElementsByTagName("table");
  for (var i=0; i<tables.length; i++) {
    var odd = false;
    var rows = tables[i].getElementsByTagName("tr");
    for (var j=0; j<rows.length; j++) {
      if (odd == true) {
        addClass(rows[j],"odd");
        odd = false;
      } else {
        odd = true;
      }
    }
  }
}
//鼠标悬停则添加class=highlight，离开恢复
function f() {
  if(!document.getElementsByTagName) return false;
  var rows = document.getElementsByTagName("tr");
  for (var i=0; i<rows.length; i++) {
    rows[i].oldClassName = rows[i].className
    rows[i].onmouseover = function() {
      addClass(this,"highlight");
    }
    rows[i].onmouseout = function() {
      this.className = this.oldClassName
    }
  }
}
//显示缩略词列表
function g() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  var abbreviations = document.getElementsByTagName("abbr");
  if (abbreviations.length < 1) return false;
  var defs = new Array();
  for (var i=0; i<abbreviations.length; i++) {
    var current_abbr = abbreviations[i];
    if (current_abbr.childNodes.length < 1) continue;
    var definition = current_abbr.getAttribute("title");
    var key = current_abbr.lastChild.nodeValue;
    defs[key] = definition;
  }
  var dlist = document.createElement("dl");
  for (key in defs) {
    var definition = defs[key];
    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);
    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }
  if (dlist.childNodes.length < 1) return false;
  var header = document.createElement("h3");
  var header_text = document.createTextNode("Abbreviations");
  header.appendChild(header_text);
  var articles = document.getElementsByTagName("article");
  if (articles.length == 0) return false;
  articles[0].appendChild(header);
  articles[0].appendChild(dlist);
}

addLoadEvent(highlightPage);
addLoadEvent(a);
addLoadEvent(b);
addLoadEvent(c);
addLoadEvent(d);
addLoadEvent(e);
addLoadEvent(f);
addLoadEvent(g);