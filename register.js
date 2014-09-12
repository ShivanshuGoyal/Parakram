
$(document).ready(function() {
	setTimeout(function(){
		$("div.btn-sign").css("margin-right","110px");
		setTimeout(function(){
			$("div.btn-sign>a>img.wheels").hide();;
		},6000);
	},3000);
	
	$('a.login-window').click(function(){

		// Getting the variable's value from a link 
		var loginBox = $(this).attr('href');

		//Fade in the Popup and add close button
		$(loginBox).fadeIn(300);
		document.form.reset();
		$(".none").attr("checked",false);
		$(".none").attr("disabled",false);
		$("form.response").html("");
		$(".errmsg").html("");
		$("form.signins").fadeIn();
		
		//Set the center alignment padding + border
		var popMargTop = ($(loginBox).height() + 24) / 2; 
		var popMargLeft = ($(loginBox).width() + 24) / 2; 
		
		$(loginBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask1"></div>');
		$('#mask1').fadeIn(300);
		
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$(window).keydown(function (e){
							key = e.which;
							if(key==27)
								$('#mask1 , .login-popup').fadeOut(300 , function() {
									$('#mask1').remove(); 
									$("form.response").fadeOut();
								});
	});
	$('a.close, #mask1').live('click', function() { 
		$('#mask1 , .login-popup').fadeOut(300 , function() {
			$('#mask1').remove(); 
			$("form.response").fadeOut();
			//document.location.href="parakram.php";
			}); 
			return false;
	});
});

function login()
{
document.ss.submit();
}


		$(window).keydown(function (e){
							key = e.which;
							if(e.ctrlKey)
								if(key==61||key==173)
									return false;
		});
		document.onmousewheel = function(){ stopWheel(); } /* IE7, IE8 */
		if(document.addEventListener){ /* Chrome, Safari, Firefox */
			
			
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
		function registration_check(){
			$(".shivanshu input").attr("disabled",true);
			var Username = document.getElementById("username").value;
			var Email = document.getElementById("email").value;
			data = {"username":Username,"email":Email,"check":"1"}
				data.football = "1";
				data.basketball = "1";
				data.volleyball = "1";
				data.cricket = "1";
				data.gym = "1";
				data.gaming = "1";
				data.others = "1";
				data.athletics = "1";
				data.badminton = "1";
				data.squash = "1";
				data.tennis = "1";
				data.tabletennis = "1";
			$.post("register.php",data,function(result){
					$(".shivanshu input").attr("disabled",false);
				n = result.split(" ");
				
				var sum=0;
				for(x in n){
					n[x]=Number(n[x]);
					sum+=n[x];
				}
				if(sum){
					$("#mesg").html("You're already registered for the locked events.");
					if(sum==12){
						document.getElementById("user").innerHTML="<span >Change data.</span>";
					}
				}
				if(n[0]==1){
					document.getElementById("football").checked=false;
					document.getElementById("football").disabled=true;
				}
				if(n[1]==1){

					document.getElementById("basketball").checked=false;
					document.getElementById("basketball").disabled=true;
				}
				if(n[2]==1){

					document.getElementById("volleyball").checked=false;
					document.getElementById("volleyball").disabled=true;
				}
				if(n[3]==1){

					document.getElementById("badminton").checked=false;
					document.getElementById("badminton").disabled=true;
				}
				if(n[4]==1){

					document.getElementById("cricket").checked=false;
					document.getElementById("cricket").disabled=true;
				}
				if(n[5]==1){

					document.getElementById("squash").checked=false;
					document.getElementById("squash").disabled=true;
				}
				if(n[6]==1){

					document.getElementById("gaming").checked=false;
					document.getElementById("gaming").disabled=true;
				}
				if(n[7]==1){
					document.getElementById("gym").checked=false;
					document.getElementById("gym").disabled=true;

				}
				if(n[8]==1){
					document.getElementById("others").checked=false;
					document.getElementById("others").disabled=true;

				}
				if(n[9]==1){
					document.getElementById("tennis").checked=false;
					document.getElementById("tennis").disabled=true;

				}
				if(n[10]==1){
					document.getElementById("tabletennis").checked=false;
					document.getElementById("tabletennis").disabled=true;

				}
				if(n[11]==1){
					document.getElementById("athletics").checked=false;
					document.getElementById("athletics").disabled=true;

				}
				if(sum==12){
					$("#user>span").each(function(){
						$(this).css("cursor","pointer");
						this.style.color = "#67c";
						this.onmouseover=function(){	this.style.color = "#fff";}
						this.onmouseout=function(){	this.style.color = "#999";}
					});
					$("#user>span").click(function(){
						$("input.none").attr("disabled",false);
						document.getElementById("user").innerHTML="";
						document.getElementById("username").value="";
						document.getElementById("email").value="";
						$("#mesg").html("");
					});
				}
			});
		}
		var m=0;
		var m1=0;
		var m2=0;
		var m3=0;
		var m4=0;
		var m5=0;
		function fun1(){
			var username = document.getElementById("username").value;
			if(username ==""){
				document.getElementById("user").innerHTML = "*Required";
				m1++;
			}
			else if (/[^a-z _A-Z]/.test(username)){
				document.getElementById("user").innerHTML = " Invalid" ;
				m1++;
			}
			else if(document.getElementById("email").value!=""){
				registration_check();
			}
				
		}
		function fun2(){
			var college = document.getElementById("college").value;
			if(college ==""){
				document.getElementById("coll").innerHTML = "*Required";
				m2++;
			}
			else if (/[^a-z _A-Z]/.test(college)){
					document.getElementById("coll").innerHTML = "Invalid" ;
					m2++;
				}
		}
	
		function fun3(){
			var	email = document.getElementById("email").value;
			var AtPos = email.indexOf("@");
			var StopPos = email.lastIndexOf(".");
			if (email == "") {
				document.getElementById("em").innerHTML= "*Required" ;
				m3++;
			}
			else {
				if (AtPos == -1 || StopPos == -1){
					document.getElementById("em").innerHTML= "Invalid";
					m3++;
				}
				if (StopPos < AtPos){
					document.getElementById("em").innerHTML= "Invalid";
					m3++;
				}
				if (StopPos - AtPos == 1){
					document.getElementById("em").innerHTML= "Invalid";
					m3++;
				}
			else if(document.getElementById("username").value!=""){
				registration_check();
			}
			}
		}
		function fun4(){
			var contact = $("input#contact").val();
			var contactlen=contact.length;
			if(contact ==""){
				document.getElementById("con").innerHTML = "*Required";
				m4++;
			}
			else {
				if (/[^0-9]/.test(contact)){
					document.getElementById("con").innerHTML = "Invalid" ;
					m4++;
				}
				if(contactlen != 10){
					document.getElementById("con").innerHTML = "Invalid" ;
					m4++;
				}
			}	
		}								
		function fun5(){
			var football=document.getElementById("football").checked;
			var cricket=document.getElementById("cricket").checked;
			var volleyball=document.getElementById("volleyball").checked;
			var tennis=document.getElementById("tennis").checked;
			var tabletennis=document.getElementById("tabletennis").checked;
			var basketball=document.getElementById("basketball").checked;
			var squash=document.getElementById("squash").checked;
			var gaming=document.getElementById("gaming").checked;
			var others=document.getElementById("others").checked;
			var athletics=document.getElementById("athletics").checked;
			var gym=document.getElementById("gym").checked;
			var badminton=document.getElementById("badminton").checked;
			var username = document.getElementById("username").value;
			if(username ==""){
				document.getElementById("user").innerHTML = "*Required";
				m1++;
			}
			else if (/[^a-z _A-Z]/.test(username)){
					document.getElementById("user").innerHTML = "Invalid" ;
					m1++;
				}
		
			var college = document.getElementById("college").value;
			if(college ==""){
				document.getElementById("coll").innerHTML = "*Required";
				m2++;
			}
			else if (/[^a-z _A-Z]/.test(college)){
					document.getElementById("coll").innerHTML = "Invalid" ;
					m2++;
				}
			var email = document.getElementById("email").value;
			var AtPos = email.indexOf("@");
			var StopPos = email.lastIndexOf(".");
			if (email == "") {
				document.getElementById("em").innerHTML= "*Required" ;
				m3++;
			}
			else {
				if (AtPos == -1 || StopPos == -1) {
					document.getElementById("em").innerHTML= "Invalid";
					m3++;
				}
				if (StopPos < AtPos) {
					document.getElementById("em").innerHTML= "Invalid";
					m3++;
				}
				if (StopPos - AtPos == 1) {
					document.getElementById("em").innerHTML= "Invalid";
					m3++;
				}
			}
			var contact = $("input#contact").val();
			var contactlen=contact.length;
			if(contact ==""){
				document.getElementById("con").innerHTML = "*Required";
				m4++;
			}
			else {
				if (/[^0-9]/.test(contact)){
					document.getElementById("con").innerHTML = "Invalid" ;
					m4++;
				}
				if(contactlen != 10){
					document.getElementById("con").innerHTML = "Invalid" ;
					m4++;
				}
			}
			if(football =="" && cricket =="" && volleyball =="" && tennis =="" && tabletennis =="" && basketball =="" && squash == "" && gaming =="" && others =="" && athletics =="" && gym =="" && badminton ==""){
				document.getElementById("sport").innerHTML = "At least one sport must be selected" ;
				m5++;
			}
			
			fun();
		}
		function fun6(){
			if(m1!=0){
				document.getElementById("user").innerHTML = "";
				m1=0;
			}
		}
		function fun7(){
			if(m2!=0){						
				document.getElementById("coll").innerHTML = "";
				m2=0;
			}
		}
		function fun8(){
			if(m3!=0){						
				document.getElementById("em").innerHTML = "";
				m3=0;
			}
		}
		function fun9(){
			if(m4!=0){						
				document.getElementById("con").innerHTML = "";
				m4=0;
			}
		}
		function fun10(){
			if(m5!=0){						
				document.getElementById("sport").innerHTML = "";
				m5=0;
			}
		}

	
	
		function fun(){
			if((m1 != 0) || (m2 != 0) || (m3 != 0) || (m4 != 0) || (m5 != 0) )
				m=1;
			if (m == 0){
				submit();
			}
		}	
		function submit(){
			$(".none").each(function(){
					if(this.checked==false) 
						this.value = null;		
			});
			data = {
				"username":$("#username").val(),
				"college":$("#college").val(),
				"email":$("#email").val(),
				"contact":$("input#contact").val()
			}
			
			if(document.getElementById("football").checked==true)
				data.football = $("#football").val();
			if(document.getElementById("basketball").checked==true)
				data.basketball = $("#basketball").val();
			if(document.getElementById("volleyball").checked==true)
				data.volleyball = $("#volleyball").val();
			if(document.getElementById("cricket").checked==true)
				data.cricket = $("#cricket").val();
			if(document.getElementById("gym").checked==true)
				data.gym = $("#gym").val();
			if(document.getElementById("gaming").checked==true)
				data.gaming = $("#gaming").val();
			if(document.getElementById("others").checked==true)
				data.others = $("#others").val();
			if(document.getElementById("athletics").checked==true)
				data.athletics = $("#athletics").val();
			if(document.getElementById("badminton").checked==true)
				data.badminton = $("#badminton").val();
			if(document.getElementById("squash").checked==true)
				data.squash = $("#squash").val();
			if(document.getElementById("tennis").checked==true)
				data.tennis = $("#tennis").val();
			if(document.getElementById("tabletennis").checked==true)
				data.tabletennis = $("#tabletennis").val();				
			$.post("register.php",data
				,function(result){
					$("form.response").html(result);
					$("form.signins").css("display","none");
					document.form.reset();
					$("form.response").fadeIn(100);
					var popMargTop = $("#login-box").height() / 2; 
					var popMargLeft = $("#login-box").width() / 2; 
		
					$("#login-box").css({ 
					'margin-top' : -popMargTop,
					'margin-left' : -popMargLeft
					});
				}
			);
		}