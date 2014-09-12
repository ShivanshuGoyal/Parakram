	var currentUpdate = 1;
	var no_of_updates = 8;
	var wrapper=0 ;
	var login_box=0;
	var normal=1;
	var rotAngle=0;
	var fixed=1;
	var cur_fix=null;
	var cur_clicked="0";
	$(document).ready(function(){

		$('.links').mouseover(function(){
			if(fixed==1){
				$(".leaf_img").css("visibility","visible");
				$(".leaf_img").css("visibility","visible");
				$('#ball').removeClass("rotateAClock"+rotAngle);
				$('.hex,#b_center').removeClass("rotateClock"+rotAngle);	
			}
			$(".flip"+rotAngle).removeClass("flip"+rotAngle);
			rotAngle = $(this).attr('id');
			$(".leaf_img."+rotAngle).css("visibility","hidden");
			$('#ball').addClass("rotateAClock"+rotAngle);
			$('.hex,#b_center').addClass("rotateClock"+rotAngle);
		});
		
		$('.links').mouseout(function(){
			if(fixed==1){
				$("#"+cur_clicked).mouseover();
				return;
			}
			$(".leaf_img").css("visibility","visible");
			$('#ball').removeClass("rotateAClock"+rotAngle);
			$('.hex,#b_center').removeClass("rotateClock"+rotAngle);	
		});
		
		$('.links').click(function(){
			if(fixed==1&&cur_clicked==$(this).attr('id')){
				cur_clicked ="0";
				return;
			}
			fixed=1;
			cur_clicked = $(this).attr('id');
		});
		
		$('.hex').hover(function(){
			if(!($(this).hasClass("flip"+rotAngle))){
				$(".flip"+rotAngle).removeClass("flip"+rotAngle);
				$(this).addClass("flip"+rotAngle);
			}
		});
		$("#b_center").mouseover(function(){
			$(".hex").addClass("flip"+rotAngle);
		});
		$("#b_center").mouseout(function(){
			$(".hex").removeClass("flip"+rotAngle);
			$(".hex.").addClass("flip"+rotAngle);
		});
		
	});
	$(document).ready(function(){
		var scrn_pos=0;
		top = $(window).scrollTop();
		$(window).scroll(function(){
			if(top>$(window).scrollTop()){
				if($(window).scrollTop()<656) $(window).scrollTop("0"); alert("UP");
			}
			else if(top<$(window).scrollTop()){
				if($(window).scrollTop()>10) $(window).scrollTop("666"); alert("DOWN");
			}
			
			top = $(window).scrollTop();
		});
	});	

$(window).load(function(){
	var object ;
	$("#updateBar>span").each(function(){ object = this;});
	if(!object.innerHTML) return;
	$(object).css("display","block");
	var curTime = 0;
	updateInfo = new Array(
	"Ms. Deepika Kumari and Mr Saurabh Tiwary will be enlightening the event with their presence.",
	"ISM was the major venue for National Games held this year",
	"Sports Minister of Jharkhand will be the Guest.",
	"Jharkhand Sports, DC Dhanbad and IG Bokaro along with other members of will be the Guest.",
	"All major sports Day and Night tournament spanning over 4 days.",
	"10,000 free tickets to be distributed all over Dhanbad to witness March Past of 15 local Schools.",
	"Parakram will be associated with Jharkhand sports. All certification will be done by Jharkhand sports Organization.",
	"In Association with Transparency Organizations for transparency of the event."

	);
	object.innerHTML = "";
	str=updateInfo[0];
	str=[].slice.call(str);
	t=0;
	for(x in str){
		setTimeout(function(){				
			object.innerHTML += str[t];
			t++;
		},50*x);
	}                                                        
	
	var t = 0;
	setInterval(function(){
		object.innerHTML = "";
		currentUpdate = currentUpdate % 8;
		str=updateInfo[currentUpdate];
		str=[].slice.call(str);
		t=0;
		for(x in str){
			setTimeout(function(){				
				object.innerHTML += str[t];
				t++;
			},50*x);
		}
		
	currentUpdate++;
	},15000);
});