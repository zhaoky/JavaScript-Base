function bb(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	//遍历所有block
	var block=document.getElementsByTagName("blockquote");
	//遍历引用
	for(var i=0;i<block.length;i++){
		//如果没有cite属性，跳出本次循环，继续下一次循环
		if(!block[i].getAttribute("cite")) continue;
		//保存cite属性
		var url=block[i].getAttribute("cite"); 
		//取得引用中的所有元素节点
		var a=block[i].getElementsByTagName("*");
		//如果没有元素节点，继续循环
		if(a.length<1) continue;
		//取得引用中的最后一个元素节点
		var cite=a[a.length-1];
		//创建标记
		var link=document.createElement("a");
		var link_z=document.createTextNode("more..");
		link.appendChild(link_z);
		link.setAttribute("href",url);
		var sup=document.createElement("sup");
		sup.appendChild(link);
		//把标记添加到引用中的最后一个元素节点
		cite.appendChild(sup);
		}	
	}
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
addLoadEvent(bb);