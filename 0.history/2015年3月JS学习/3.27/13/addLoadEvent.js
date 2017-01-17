//addLoadEvent函数
function addLoadEvent(func){
	var oldload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
		}
		else{
		window.onload=function(){
			oldload();
			func();
			}	
		}
	}