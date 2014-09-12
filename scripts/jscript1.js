$(document).ready(function(){
	$(document.body).css("overflow-x","hidden");
		var scrn_pos=0;
	$(window).resize(function(){
		$(document.body).width($(window).width());
		if($(window).width()<1300)
			$(document.body).css("overflow-x","scroll");
		else
			$(document.body).css("overflow-x","hidden");
		
	});
});
$(document).ready(function(){
		var scrn_pos=0;
		var current="";
		$(window).scroll(function(){
			scrn_pos = $(window).scrollTop();
			$("#scrl_pos").html(scrn_pos);			
			//add here if-else loops for other parts
			if(scrn_pos<612){
				if(current=="about") return;
				$(".navigation>li.li_select").removeClass("li_select");
				$(".navigation>li.nav-about").addClass("li_select");
				current="about";
			}
			else if(scrn_pos<1000){
				if(current=="hosp") return;
				$(".navigation>li.li_select").removeClass("li_select");
				$(".navigation>li.nav-hosp").addClass("li_select");
				current="hosp";
			}
			else if(scrn_pos<1050){
				if(current=="sched") return;
				$(".navigation>li.li_select").removeClass("li_select");
				$(".navigation>li.nav-sched").addClass("li_select");
				current="sched";
			}
			else if(scrn_pos<1972){
				if(current=="contacts") return;
				$(".navigation>li.li_select").removeClass("li_select");
				$(".navigation>li.nav-contacts").addClass("li_select");
				current="contacts";
			}
			/*
			else if(scrn_pos<4838){
				if(current=="faq") return;
				$(".navigation>li.nav").removeClass("li_select");
				$(".navigation>li.nav-faq").addClass("li_select");
				current="faq";
			}*/
		});
		$("#cheak>li").click(function(){
			current = $(this).attr('class');
			switch(current)
			{
				case "nav-about" :	$(window).scrollTop("0");
									$(".navigation>li.li_select").removeClass("li_select");
									$(".navigation>li.nav-about").addClass("li_select");
								break;
				case "nav-events" : $(window).scrollTop("0");
									$(".navigation>li.li_select").removeClass("li_select");
									$(".navigation>li.nav-events").addClass("li_select");
								break;
				case "nav-hosp" : $(window).scrollTop("612");
									$(".navigation>li.li_select").removeClass("li_select");
									$(".navigation>li.nav-hosp").addClass("li_select");
								break;
				case "nav-sched" : $(window).scrollTop("1000");
									$(".navigation>li.li_select").removeClass("li_select");
									$(".navigation>li.nav-sched").addClass("li_select");
								break;
				
				case "nav-contacts" : $(window).scrollTop("1050");
									$(".navigation>li.li_select").removeClass("li_select");
									$(".navigation>li.nav-contacts").addClass("li_select");
								break;
				/*case "nav-faq" : $(window).scrollTop("2333");
									$(".navigation>li.li_select").removeClass("li_select");
									$(".navigation>li.nav-faq").addClass("li_select");
								break;
*/
	    }
		});
	});