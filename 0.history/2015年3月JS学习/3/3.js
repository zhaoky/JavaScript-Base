function ch(){
	var a=document.getElementsByTagName("body")[0];
	var b=a.childNodes;
	for(var i=0; i<b.length;i++)
	{
	alert(b[i].nodeType);
	}
}
    window.onload=ch;