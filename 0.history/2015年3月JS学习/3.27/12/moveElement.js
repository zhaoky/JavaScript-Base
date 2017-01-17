function moveElement(ID,x,y,time){
	if (!document.getElementById) return false;
	if (!document.getElementById(ID)) return false;
	var a = document.getElementById(ID);
	var xx = parseInt(a.style.left);
	var yy = parseInt(a.style.top);
	if(a.c) clearTimeout(a.c);
	if (xx == x && yy == y) {return true;}
	if (xx < x) {xx++;}
	if (xx > x) {xx--;}
	if (yy < y) {yy++;}
	if (yy > y) {yy--;}
	a.style.left = xx + "px";
	a.style.top = yy + "px";
	a.c=setTimeout("moveElement('"+ID+"',"+x+","+y+","+time+")",time);
	}