	var wrapper=0 ;
	var login_box=0;
	var normal=1;
	var rotAngle=0;
	var fixed=0;
	var cur_fix=null;
	$(document).ready(function(){
		$(window).keydown(function (e){
							key = e.which;
							//alert(key);
							if(e.ctrlKey)
								if(key==61||key==173)
									return false;
		});
		document.onmousewheel = function(){ stopWheel(); } /* IE7, IE8 */
		if(document.addEventListener){ /* Chrome, Safari, Firefox */
			document.addEventListener('DOMMouseScroll', stopWheel, false);
		}
 
		function stopWheel(e){
			if(!e){ e = window.event; } /* IE7, IE8, Chrome, Safari */
			if(e.preventDefault) { 
				if(e.ctrlKey)
					e.preventDefault(); 
			} /* Chrome, Safari, Firefox */
			if(e.ctrlKey)
				e.returnValue = false; /* IE7, IE8 */
		}
	
		$('.links').mouseover(function(){
			trans=1;	normal=0;	
			if(fixed==1){
				cur_fix.css("visibility","visible");
				fixed=0;
			}
			$(".hex_rotate").removeClass("hex_rotate");
			rotAngle = $(this).attr('id');
			$('#ball').css({"transform":"rotate(-"+rotAngle+"deg)"});
			$('.cell_back').css({"transform":"rotate("+rotAngle+"deg)"});
			$('.cell_cover').css({"transform":"rotate("+rotAngle+"deg)"});
			$('#ball').css({"-webkit-transform":"rotate(-"+rotAngle+"deg)"});
			$('.cell_back').css({"-webkit-transform":"rotate("+rotAngle+"deg)"});
			$('.cell_cover').css({"-webkit-transform":"rotate("+rotAngle+"deg)"});
			$('.cell_back.'+rotAngle).css({"visibility":"hidden"});
		});
		$('.links').mouseout(function(){
			if(fixed==1) return;
			$('#ball').css({"transform":"rotate(0deg)"});
			$('.cell_back').css({"transform":"rotate(0deg)"});
			$('.cell_cover').css({"transform":"rotate(0deg)"});
			$('#ball').css({"-webkit-transform":"rotate(0deg)"});
			$('.cell_back').css({"-webkit-transform":"rotate(0deg)"});
			$('.cell_cover').css({"-webkit-transform":"rotate(0deg)"});
			$('.cell_back.'+rotAngle).css({"visibility":"visible"});
			normal=1;
		});
		$('.links').click(function(){
			fixed=1;
			rotAngle = $(this).attr('id');
			$('#ball').css({"transform":"rotate(-"+rotAngle+"deg)"});
			$('.cell_back').css({"transform":"rotate("+rotAngle+"deg)"});
			$('.cell_cover').css({"transform":"rotate("+rotAngle+"deg)"});
			$('#ball').css({"-webkit-transform":"rotate(-"+rotAngle+"deg)"});
			$('.cell_back').css({"-webkit-transform":"rotate("+rotAngle+"deg)"});
			$('.cell_cover').css({"-webkit-transform":"rotate("+rotAngle+"deg)"});
			$('.cell_back.'+rotAngle).css({"visibility":"hidden"});
			cur_fix = $('.cell_back.'+rotAngle);
		});
		$('.hex').hover(function(){
			if(!($(this).hasClass("hex_rotate"))){
				$(".hex_rotate").removeClass("hex_rotate");
				$(this).addClass("hex_rotate");
			}
		});
		
	});
$(document).ready(function(){
		var scrn_pos=0;
		var current="";
		$("#header-wrapper").each(function(){ wrapper = this; });
		$(".btn-sign").each(function(){ login_box = this; });
		$(window).scroll(function(){
						scrn_pos = $(window).scrollTop();
						$("#scrl_pos").html(scrn_pos);
						$("#scrl_pos").css("top",scrn_pos);
						
						if(scrn_pos>646){
							wrapper.style.top=scrn_pos+"px";
							login_box.style.top=(scrn_pos)+"px";
							login_box.style.height="62px";
						}	
						else {
							wrapper.style.top="646px";
							login_box.style.top=scrn_pos+"px";
							login_box.style.height="30px";
						}
						//add here if-else loops for other parts
						if(scrn_pos<1420){
							if(current=="about") return;
							$(".navigation>li.nav-"+current).removeClass("li_select")
							$(".navigation>li.nav-about").addClass("li_select");
							current="about";
						}
						else if(scrn_pos<1553){
							if(current=="events") return;
							$(".navigation>li.nav-"+current).removeClass("li_select")
							$(".navigation>li.nav-events").addClass("li_select");
							current="events";
						}
						else if(scrn_pos<1710){
							if(current=="hosp") return;
							$(".navigation>li.nav-"+current).removeClass("li_select")
							$(".navigation>li.nav-hosp").addClass("li_select");
							current="hosp";
						}
						else if(scrn_pos<1877){
							if(current=="sched") return;
							$(".navigation>li.nav-"+current).removeClass("li_select")
							$(".navigation>li.nav-sched").addClass("li_select");
							current="sched";
						}
						else if(scrn_pos<2042){
							if(current=="results") return;
							$(".navigation>li.nav-"+current).removeClass("li_select")
							$(".navigation>li.nav-results").addClass("li_select");
							current="results";
						}
						else if(scrn_pos<2210){
							if(current=="contacts") return;
							$(".navigation>li.nav-"+current).removeClass("li_select")
							$(".navigation>li.nav-contacts").addClass("li_select");
							current="contacts";
						}
						else{
							if(current=="about") return;
							$(".navigation>li.nav-"+current).removeClass("li_select")
							$(".navigation>li.nav-about").addClass("li_select");
							current="about";
						}
		});
	});