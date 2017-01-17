//搜索文本框效果
$(function(){
	$("#search").focus(function(){
		$(this).addClass("aa");
		if($(this).val()==this.defaultValue){
			$(this).val("");
			}
	}).blur(function(){
		$(this).removeClass("aa");
		if($(this).val()==""){
				$(this).val(this.defaultValue);
			}			
	}).keyup(function(e){
		if(e.which==13){
			alert("谢谢你按了回车提交！");
			}	
		if(e.which==27){
			alert("按了ESC可以离开网页？智商呢");
			}
	})
})
//换肤
$(function(){
	var $li=$("#skin li");	
	$li.click(function(){
		switchSkin(this.id);	
	});
});
function switchSkin(a){
	$("#"+a).addClass("selected").siblings().removeClass("selected");
	$("#cssfile").attr("href","css/"+a+".css");
}
//导航
$(function(){
	$("nav li").mouseover(function(){
		$(this).find(".a").show();		
	}).mouseout(function(){
		$(this).find(".a").hide();	
	});
})
//大屏广告
function show(index){
	var $a=$("#ad a");
	var href=$a.eq(index).attr("href");
	$("#adimg").attr("href",href).find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$a.removeClass("list").eq(index).addClass("list");
}
$(function(){
	var $a=$("#ad a");
	var len=$a.length;
	var index=0;
	var timer=null;
	$a.mouseover(function(){
		index=$a.index(this);
		show(index);	
	}).eq(0).mouseover();
	$("#section_1").hover(function(){
		if(timer){clearInterval(timer);}
		},function(){
			timer=setInterval(function(){show(index);index++;if(index==len){index=0;}},5000);
		}).trigger("mouseleave");
}) 
//文字提示
$(function(){
	var x=10;
	var y=20;
	$(".tip").mouseover(function(e){
		this.myTitle=this.title;
		this.title="";
		var tip="<div id='tip'>"+this.myTitle+"</div>"
		$("body").append(tip);
		$("#tip").css({"left":(e.pageX+x)+"px","top":(e.pageY+y)+"px"}).show("fast");
	}).mouseout(function(){
		this.title=this.myTitle;
		$("#tip").remove();	
	}).mousemove(function(e){
		$("#tip").css({"top":(e.pageY+y)+"px","left":(e.pageX+x)+"px"});	
	})
})
//点击滑动
$(function(){
	$("#section_4_top a").click(function(){
		$(this).parent().addClass("sec").siblings().removeClass("sec");
		var index=$("#section_4_top a").index(this);
		showlist(index);
		return false;
	}).eq(0).click();
})
function showlist(index){
	var $a=$("#section_4_pro ul");
	var b=$("#section_4_pro li").outerWidth();
	b=b*4;
	$a.stop(true,false).animate({left:-b*index},1000);
}
//放大镜效果

$(function(){
	$("#section_4_pro li").each(function(index){
		$("<div class='big'></div>").appendTo(this);
	})
	$(".big").mouseover(function(){
		$(this).addClass("bigger")	
	}).mouseleave(function(){
		$(this).removeClass("bigger")	
	});
	/*
	$("#section_4_pro li").find(".big").live("hover",function(){
		$(this).toggleClass("bigger");	
	})
	*/
})
/*使用jqzoom*/
$(function(){
	$('.jqzoom').jqzoom({
		zoomWidth: 340,
		zoomHeight: 340,
		xOffset:10,
		yOffset:0,
		position:'right'
    });
});
/*产品放大图对应*/
$(function(){
	$("#imgList li a").bind("click",function(){
		var imgSrc=$(this).find("img").attr("src");
		var i=imgSrc.lastIndexOf(".");
		var a=imgSrc.substring(i);
		var b=imgSrc.substring(0,i);
		var imgSrc_big=b+"_big"+a;
		$("#look a").attr("href",imgSrc_big);
	})
})
/*选项卡*/
$(function(){
	var $a=$("#tab_menu li");
	$a.click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		var index=$a.index(this);
		$("#tab_box>div").eq(index).show().siblings().hide();
	}).hover(function(){
		$(this).addClass("hover");	
	},function(){
		$(this).removeClass("hover");	
	})
})
/*颜色切换*/
$(function(){
	$("#detail_2_color img").click(function(){
		$(this).addClass("hover").parent().siblings().find("img").removeClass("hover");
		var imgSrc=$(this).attr("src");
		var i=imgSrc.lastIndexOf(".");
		var a=imgSrc.substring(i);
		var b=imgSrc.substring(0,i);
		var imgSrc_small=b+"_one_small"+a;
		var imgSrc_big=b+"_one_big"+a;
		$("#smallimg").attr("src",imgSrc_small);
		$(".thickbox").attr("href",imgSrc_big);
		var newImgSrc=b.replace("images/pro_img/","");
		$("#imgList li").hide();
		$("#imgList").find(".imgList_"+newImgSrc).show();
		var alt=$(this).attr("alt");
		$("#detail_2_color strong").text(alt);
		$("#imgList").find(".imgList_"+newImgSrc).eq(0).find("a").click();
	})
})
/*尺寸切换*/
$(function(){
	$("#cicun li").click(function(){
			$(this).addClass("ci").siblings().removeClass("ci");
			$(this).parent("ul").siblings("strong").text($(this).text());
	})
})
/*价格变换*/
$(function(){
	var price=$("#zongji strong").text();
	$("#num").change(function(){
		var num=$(this).val();
		var a=num*price;
		$("#zongji strong").text(a);	
	}).change();
})
/*评分*/
$(function(){
	$(".star li a").click(function(){
		var title=$(this).attr("title");	
		alert("您给这件商品的评分是："+title);
		var a=$(this).parent().attr("class");
		$(this).parent().parent().removeClass().addClass("star "+a+"star");
		return false;
	})
})
/*弹出框*/
$(function(){
	$("#gou a").click(function(){
	var name=$("#detail_2").find("h4").text();
	var size=$("#detail_2").find("#cicun strong").text();
	var color=$("#detail_2").find("#detail_2_color strong").text();
	var num=$("#detail_2").find("select").val();
	var price=$("#detail_2").find("#zongji strong").text();
	var a="感谢您的购买！<div style='font-size:12px;font-weight:400;margin-top:5px;'>您购买的产品是："+name+"; 尺寸是："+size+"; 颜色是："+color+"; 数量是："+num+"个; 总价是："+price+"元。</div>";
	$("#jnDialogContent").html(a);
	$('#basic-dialog-ok').modal();
	return false;
	})
});