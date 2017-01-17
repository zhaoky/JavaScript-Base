//insertAfter函数
function insertAfter(newElement,old){
	var c=old.parentNode;
	if(c.lastChild==old){
		c.appendChild(newElement);
		}
		else{
		c.insertBefore(newElement,old.nextSibling);	
			}
	}