
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


function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

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
 //index.html
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
	preview.setAttribute("src","images/slideshow.gif");
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
		if (destination.indexOf("about.html") != -1) {
			moveElement("preview",-150,0,5);
			}
		if (destination.indexOf("photos.html") != -1) {
			moveElement("preview",-300,0,5);
			}
		if (destination.indexOf("live.html") != -1) {
			moveElement("preview",-450,0,5);
			}
		if (destination.indexOf("contact.html") != -1) {
			moveElement("preview",-600,0,5);
			}
		}
	}
}
 //About.html
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
// photos.html
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
//live.html
function stripeTables(){
	if(!document.getElementsByTagName) return false;
	var tables=document.getElementsByTagName("table");
	for(var i=0;i<tables.length;i++){
		var odd=false;
		var rows=tables[i].getElementsByTagName("tr"); //错误一 table
		for(var j=0;j<rows.length;j++){
			if(odd==true){
				addClass(rows[j],"odd");
				odd=false;	
			}else{
				odd=true;	
			}
		}
	}
}
function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var rows=document.getElementsByTagName("tr");
	for(var i=0; i<rows.length;i++){
		rows[i].oldClassName=rows[i].className;
		rows[i].onmouseover=function(){
			addClass(this,"highlight");	
		}
		rows[i].onmouseout=function(){
			this.className=this.oldClassName;	
		}
	}	
}
function e(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	var abbr=document.getElementsByTagName("abbr");
	if(abbr.length<1) return false;
	var a=new Array();
	for(var i=0;i<abbr.length;i++){
		if(abbr[i].childNodes.length<1)  continue;	 //错误：是abbr[i] 不是abbr
		var b=abbr[i].getAttribute("title");
		var c=abbr[i].lastChild.nodeValue;
		a[c]=b;
	}
	var dl=document.createElement("dl");
	for(c in a){
		var b=a[c];
		var dt=document.createElement("dt");
		var dt_t=document.createTextNode(c);
		dt.appendChild(dt_t);
		var dd=document.createElement("dd");
		var dd_t=document.createTextNode(b);
		dd.appendChild(dd_t);
		dl.appendChild(dt);
		dl.appendChild(dd);	
	}
	if(dl.childNodes.length<1) return false;
	var header=document.createElement("h3");
	var header_t=document.createTextNode("Abbreviations");
	header.appendChild(header_t);
	var articles = document.getElementsByTagName("article");
	if (articles.length == 0) return false;
	articles[0].appendChild(header);
	articles[0].appendChild(dl);
}
//contact.html

function f(){
	if(!document.getElementsByTagName) return false;
	var labels=document.getElementsByTagName("label");
	for(var i=0;i<labels.length;i++){
		if(!labels[i].getAttribute("for")) continue;
		labels[i].onclick=function(){
			var id=this.getAttribute("for");
			if(!document.getElementById(id)) return false;
			var a=document.getElementById(id);
			a.focus();	
		}	
	}
} 

/*
function resetFields(whichform) {
  if (Modernizr.input.placeholder) return;
  for (var i=0; i<whichform.elements.length; i++) {
    var element = whichform.elements[i];
    if (element.type == "submit") continue;
    if (!element.getAttribute('placeholder')) continue;
    element.onfocus = function() {
    if (this.value == this.getAttribute('placeholder')) {
      this.value = "";
     }
    }
    element.onblur = function() {
      if (this.value == "") {
        this.value = this.getAttribute('placeholder');
      }
    }
    element.onblur();
  }
}

function validateForm(whichform) {
  for (var i=0; i<whichform.elements.length; i++) {
    var element = whichform.elements[i];
    if (element.getAttribute("required") == 'required') {
      if (!isFilled(element)) {
        alert("Please fill in the "+element.name+" field.");
        return false;
      }
    }
    if (element.getAttribute("type") == 'email') {
      if (!isEmail(element)) {
        alert("The "+element.name+" field must be a valid email address.");
        return false;
      }
    }
  }
  return true;
}

function isFilled(field) {
  return (field.value.length > 1 && field.value != field.placeholder);
}

function isEmail(field) {
  return (field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}

function prepareForms() {
  for (var i=0; i<document.forms.length; i++) {
    var thisform = document.forms[i];
    resetFields(thisform);
    thisform.onsubmit = function() {
      if (!validateForm(this)) return false;
      var article = document.getElementsByTagName('article')[0];
      if (submitFormWithAjax(this, article)) return false;
      return true;
    }
  }
}


// Ajax

function getHTTPObject() {
  if (typeof XMLHttpRequest == "undefined")
    XMLHttpRequest = function () {
      try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e) {}
      return false;
  }
  return new XMLHttpRequest();
}

function displayAjaxLoading(element) {
    // Remove the existing content.
  while (element.hasChildNodes()) {
      element.removeChild(element.lastChild);
  }
  //  Create a loading image.
  var content = document.createElement("img");
  content.setAttribute("src","images/loading.gif");
  content.setAttribute("alt","Loading...");
  // Append the loading element.
  element.appendChild(content);
}

function submitFormWithAjax( whichform, thetarget ) {
  
  var request = getHTTPObject();
  if (!request) { return false; }

  // Display a loading message.
  displayAjaxLoading(thetarget);

  // Collect the data.
  var dataParts = [];
  var element;
  for (var i=0; i<whichform.elements.length; i++) {
    element = whichform.elements[i];
    dataParts[i] = element.name + '=' + encodeURIComponent(element.value);
  }
  var data = dataParts.join('&');

  request.open('POST', whichform.getAttribute("action"), true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.onreadystatechange = function () {
    if (request.readyState == 4) {
        if (request.status == 200 || request.status == 0) {
          var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
          if (matches.length > 0) {
            thetarget.innerHTML = matches[1];
          } else {
            thetarget.innerHTML = '<p>Oops, there was an error. Sorry.</p>';
          }
        } else {
          thetarget.innerHTML = '<p>' + request.statusText + '</p>';
        }
    }
  };

  request.send(data);
   
  return true;
};
*/
addLoadEvent(highlightPage);
addLoadEvent(a);
addLoadEvent(b);
addLoadEvent(c);
addLoadEvent(d);
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(e);