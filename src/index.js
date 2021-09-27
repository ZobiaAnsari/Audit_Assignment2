

function details(){
	var fn = document.getElementById("fn").value;
	var lname = document.getElementById("lname").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var pwd = document.getElementById("pwd").value;
	var city = document.getElementById("city").value;
	if(document.getElementById("python").checked){
		var lan=document.getElementById("python").value;
	}else if(document.getElementById("js").checked){
		var lan=document.getElementById("js").value;
		
	}else{
		var lan=document.getElementById("C#").value;

	}
	if(document.getElementById("subs").checked){
		var subs="Subcribed to Newsletter"
	}else{
		var subs="Didn't Subcribed to Newsletter"

	}


	alert("Name: "+ fn + " " + lname +
		"\nPhone Number: " + phone +
		"\nE-mail: " + email+
		"\nCity: "+city+
		"\nLanguage: "+lan+
		"\n"+subs);

}