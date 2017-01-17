function a(){
	if(!document.getElementById) return false;
	if(!document.getElementById("aa")) return false;
	if(!document.getElementById("bb")) return false;
	var a=document.getElementById("aa");
	var b=document.getElementById("bb");
	a.style.position="absolute";
	b.style.position="absolute";
	a.style.top="200px";
	b.style.top="100px";
	a.style.left="50px";
	b.style.left="50px";
	setTimeout("b()",1000);			
	}
function b(){
	if(!document.getElementById) return false;
	if(!document.getElementById("aa")) return false;
	if(!document.getElementById("bb")) return false;
	var a=document.getElementById("aa");
	var b=document.getElementById("bb");
	var a_x=parseInt(a.style.left);
	var a_y=parseInt(a.style.top);
	var b_x=parseInt(b.style.left);
	var b_y=parseInt(b.style.top);
	if(a_x==150&&a_y==150&&b_x==150&&b_y==150){
		return true;
		}
	if(a_x<150) a_x++;
	if(a_y>150) a_y--;
	if(b_x<150) b_x++;
	if(b_y<150) b_y++;
	a.style.top=a_y+"px";
	a.style.left=a_x+"px";
	b.style.top=b_y+"px";
	b.style.left=b_x+"px";
	setTimeout("b()",10);
	}
addLoadEvent(a);