function moveElement(dd,x,y,time){
	if(!document.getElementById) return false;
	if(!document.getElementById(dd)) return false;
	var id=document.getElementById(dd);
	if(id.a) clearTimeout(id.a);
	if(!id.style.left){id.style.left="0px";}
	if(!id.style.top){id.style.top="0px";}
	var xx=parseInt(id.style.left);
	var yy=parseInt(id.style.top);
	if(xx==x&yy==y){return true;}
	if(xx<x){
		var b=Math.ceil((x-xx)/10);
		xx+=b;
		}
	if(xx>x){
		var b=Math.ceil((xx-x)/10);
		xx-=b;
		}
	if(yy<y){
		var b=Math.ceil((y-yy)/10);
		yy+=b;
		}
	if(yy>y){
		var b=Math.ceil((yy-y)/10);
		yy-=b;
		}
	id.style.left=xx+"px";
	id.style.top=yy+"px";
	id.a=setTimeout("moveElement('"+dd+"',"+x+","+y+","+time+")",time);
	}