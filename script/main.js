function get_cookie ( cookie_name ){
	var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
	if ( results )
		return ( unescape ( results[2] ) );
	else
		return null;
}

$(document).ready(function(){
	var x = get_cookie ( "sendForm" );
	if(x != 1){
		$(".add1, .add2").bind("click", function(){
			var name = $("input[type='text']").val();
			var email = $("input[type='email']").val();
			if(!name == "" && !email == ""){
				$.post("script/server.php", {n:name,e:email}, function(data){
					if(data == 1){
						$("form").hide(500);
						$(".green").show(1000);
						document.cookie = "sendForm=1";
					}
				});
			}
			else{
				if(name == ""){
					$("input[type='text']").attr("placeholder", "You must enter a name!").addClass("red");
				}
				if(email == ""){
					$("input[type='email']").attr("placeholder", "You must enter a E-mail!").addClass("red");
				}
			}
		});
	}
	else{
		$("form").hide(500);
		$(".subscribe").html("<p class='already'>You are already registered!</p>");
	}
});