function aa(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	//取得所有缩略词
	var abbr=document.getElementsByTagName("abbr");  
	if(abbr.length<1) return false;
	var a=new Array();
	//遍历所有缩略词
	for(var i=0;i<abbr.length;i++){
			//如果当前元素没有子节点，就立刻开始下一次循环
			if(abbr[i].childNodes.length<1) continue; 
			var b=abbr[i].getAttribute("title");
			var c=abbr[i].firstChild.nodeValue;
			a[c]=b;
		}
	//创建定义列表
	var dl=document.createElement("dl");
	//遍历定义
	for(c in a){
		var b=a[c];
		//创建定义标题
		var dt=document.createElement("dt");
		var dt_z=document.createTextNode(c);
		dt.appendChild(dt_z);
		//创建定义描述
		var dd=document.createElement("dd");
		var dd_z=document.createTextNode(b);
		dd.appendChild(dd_z);
		//把他们添加到定义列表
		dl.appendChild(dt);
		dl.appendChild(dd);
		}
	//如果dl没有子节点，则立刻退出
	if(dl.childNodes.length<1) return false;
	//创建标题
	var h=document.createElement("h2");
	var h_z=document.createTextNode("哈哈");
	h.appendChild(h_z);
	//把标题添加到页面主体
	document.body.appendChild(h);
	//把定义列表添加到页面主体
	document.body.appendChild(dl);
}
addLoadEvent(aa);