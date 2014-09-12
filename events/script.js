var currentUpdate = 1;
var no_of_updates = 9;
var bold = false;
var date = new Date();
	$("#clock>.mhand").css("transform","rotate("+(-90 + date.getMinutes()*6)+"deg)");
	$("#clock>.mhand").css("-moz-transform","rotate("+(-90 + date.getMinutes()*6)+"deg)");
	$("#clock>.mhand").css("-webkit-transform","rotate("+(-90 + date.getMinutes()*6)+"deg)");
	$("#clock>.hhand").css("transform","rotate("+(-90 + date.getHours()*30 + date.getMinutes()*0.5 )+"deg)");
	$("#clock>.hhand").css("-moz-transform","rotate("+(-90 + date.getHours()*30 + date.getMinutes()*0.5 )+"deg)");
	$("#clock>.hhand").css("-webkit-transform","rotate("+(-90 + date.getHours()*30 + date.getMinutes()*0.5 )+"deg)");
$(window).load(function(){
	setInterval(function(){
								var date = new Date();
										$("#clock>.mhand").css("transform","rotate("+(-90 + date.getMinutes()*6)+"deg)");
										$("#clock>.mhand").css("-webkit-transform","rotate("+(-90 + date.getMinutes()*6)+"deg)");
										$("#clock>.hhand").css("transform","rotate("+(-90 + date.getHours()*30 + date.getMinutes()*0.5 )+"deg)");
										$("#clock>.hhand").css("-webkit-transform","rotate("+(-90 + date.getHours()*30 + date.getMinutes()*0.5 )+"deg)");
								},60000);
});
var trace=0;
var page=0;
var x=0;
var cur_event=0;
var max=0;
var mouseover;
function createhtml(str){
    var newstr="<ul><li>";
    var t='';
    for( x in str ){
        if( t=='\n' )
            if(str[x]=='\n'){
                val += "</li><li>";
                t='';
                continue;
            }
            else {
                newstr += "<br/>" +str[x];
                t='';
                continue;
            }
        if( str[x]=='\n' )
            t='\n';
        else{
            newstr += str[x];
            t='';
        }
    }
    newstr += t + "</li></ul>";
    return newstr;
}

function closeWindow(){
		$("#content").html("");
		$("#circles>ul").html("");
		$('#popupWindowContainer').fadeOut(500);
}
function loadXMLDoc(dname) 
{
	if (window.XMLHttpRequest)
	{
		xhttp=new XMLHttpRequest();
	}
	else
	{
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET",dname,false);
	xhttp.send();
	return xhttp.responseXML;
}
$("img.pre").click(function(){
	if(page<=1) return;
	$("#circle-"+page).removeClass("circleHighlighted").addClass("circleunHighlighted");
	page--;
	var angle = document.getElementById('winRot');
	angle.value = Number(angle.value)+360;
	$("#shortDes").css("transform","rotateY("+angle.value+"deg)");
	$("#shortDes").css("-moz-transform","rotateY("+angle.value+"deg)");
	$("#shortDes").css("-webkit-transform","rotateY("+angle.value+"deg)");
	$("#shortDes").css("-o-transform","rotateY("+angle.value+"deg)");
	$("#content").html("");
	$.ajax({url:"text/"+cur_event+page+".txt",success:function(result){
							trace = result;
							if(!(result.search("asdfvcxz")!=-1))
								result=createhtml(result);
							else {
									
									result = result.replace("asdfvcxz"," ");
								}
                            $("#content").html(result);
                            }
						});
	$("#circle-"+page).removeClass("circleunHighlighted").addClass("circleHighlighted");
							
});

$("img.next").click(function(){
	if(page>=max) return;
	$("#circle-"+page).removeClass("circleHighlighted").addClass("circleunHighlighted");
	page++;
	trace=cur_event;
	var angle = document.getElementById('winRot');
	angle.value = Number(angle.value)-360;
	$("#shortDes").css("transform","rotateY("+angle.value+"deg)");
	$("#shortDes").css("-moz-transform","rotateY("+angle.value+"deg)");
	$("#shortDes").css("-webkit-transform","rotateY("+angle.value+"deg)");
	$("#shortDes").css("-o-transform","rotateY("+angle.value+"deg)");
	$("#content").html("");
	$.ajax({url:"text/"+cur_event+page+".txt",success:function(result){
								//trace = result;
								if(!(result.search("asdfvcxz")!=-1))
									result=createhtml(result);
								else {
									
									result = result.replace("asdfvcxz"," ");
								}
                            $("#content").html(result);
                            }
						});
	$("#circle-"+page).removeClass("circleunHighlighted").addClass("circleHighlighted");
});
$(".items").click(function(){
				page=1;
				cur_event = $(this).attr('id');
				$("#displayImage").attr("src","items/Loading.png" );
				trace = this;
				$("#displayImage").attr("src","items/" + cur_event + "g.png" );
				$.ajax({url:"text/"+cur_event+page+".txt",success:function(result){
								//alert("ajax");
							if(!(result.search("asdfvcxz")!=-1))
								result=createhtml(result);
							else{
									
									result = result.replace("asdfvcxz"," ");
								}
                            $("#content").html(result);
                            }
						,cache:false});
				xmlDoc=loadXMLDoc("details.xml");
				x=xmlDoc.getElementsByTagName(cur_event);	
				max = Number(x[0].childNodes[1].childNodes[0].nodeValue);
				for( i=1; i<=max; i++ ){
					$("#circles>ul").append("<li id=\"circle-"+i+"\" class=\"circleunHighlighted\" ></li>");
				}
				$("#circle-"+page).removeClass("circleunHighlighted").addClass("circleHighlighted");
				$("#popupWindowContainer").fadeIn(1000);
				
			});
$(window).keydown(function(event){
							if($("#popupWindowContainer").css("display")=="none")
								return;
							switch(event.which||event.button)
							{
								case 27: 
										$("#shotrDes").html("<div class=\"background\"></div>");
										closeWindow();
										break;
								case 37:
										$("img.pre").click();
										$("img.pre").removeClass("opacity15").addClass("opacity9");
										setTimeout(function(){$("img.pre").removeClass("opacity9").addClass("opacity15");},1000);
										break;
								case 39:
										$("img.next").click();
										$("img.next").removeClass("opacity15").addClass("opacity9");
										setTimeout(function(){$("img.next").removeClass("opacity9").addClass("opacity15");},1000);
								        break;
							}
});
$("#popupWindowContainer").mousedown(function(event) {
								if(mouseover==true) return ;
							switch (event.which) {
								case 1: 
										$("img.pre").click();
										$("img.pre").removeClass("opacity15").addClass("opacity9");
										//setTimeout(function(){$("img.pre").removeClass("opacity9").addClass("opacity15");},1000);
										break;
								case 3: 
										$("img.next").click();
										$("img.next").removeClass("opacity15").addClass("opacity9");
										//setTimeout(function(){$("img.next").removeClass("opacity9").addClass("opacity15");},1000);
										break;
								}
});
$("#popupWindowContainer").mouseup(function(){ $("img.turnButton").removeClass("opacity9").addClass("opacity15");});
$("#popupWindowContainer").contextmenu(function(event){return false;});
$(".over").mouseover(function(){mouseover=true;});
$(".over").mouseout(function(){mouseover=false;});
$(document).ready(function(){
	src = document.location.href;
	src = src.split("#");
	if(src[1])
        $(".items#"+src[1]).click();
});
$(window).load(function(){
	var object ;
	$("#updateBar>span").each(function(){ object = this;});
	$(object).css("display","block");
	var curTime = 0;
	updateInfo = new Array(
	"Parakram 2013 is from 14th to 16th February, 2013 ",
	"Ms. Deepika Kumari and Mr Saurabh Tiwary will be enlightening the event with their presence.",
	"ISM was the major venue for recent National Games",
	"Sports Minister of Jharkhand will be the Guest.",
	"Jharkhand Sports, DC Dhanbad and IG Bokaro along with other members of will be the Guest.",
	"All major sports Day and Night tournament spanning over 3 days.",
	"10,000 free tickets to be distributed all over Dhanbad to witness March Past of 15 local Schools.",
	"Parakram will be associated with Jharkhand sports. All certification will be done by Jharkhand sports Organization.",
	"In Association with Transparency Organizations for transparency of the event."
	);
	object.innerHTML = "";
	currentUpdate = currentUpdate % 9;
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