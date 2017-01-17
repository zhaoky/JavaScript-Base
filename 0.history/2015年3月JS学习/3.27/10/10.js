function a(){
	if(!document.getElementById) return false;
	if(!document.getElementById("aa")) return false;
	var a=document.getElementById("aa");
	var x=parseInt(a.style.left);
	var y=parseInt(a.style.top);
	if(x==200&&y==100){
		return true;
		}
	if(x<200){
		x++;
		}
	if(x>200){
		x--;
		}	
	if(y<100){
		y++;
		}
	if(y>100){
		y--;
		}
	a.style.left=x+"px";
	a.style.top=y+"px";
	c=setTimeout("a()",10);
	}
function b(){
	if(!document.getElementById) return false;
	if(!document.getElementById("aa")) return false;
	var a=document.getElementById("aa");
	a.style.position="absolute";
	a.style.left="50px";
	a.style.top="100px";
	c=setTimeout("a()",1000);
	}
addLoadEvent(b);