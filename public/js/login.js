var form = document.getElementsByTagName("form")[0];
var button = document.getElementsByTagName("button")[0];
form.addEventListener("submit", formSubmitted);

function formSubmitted(e){
	e.preventDefault();

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status < 400){
				var response = JSON.parse(xhr.response);
				localStorage.setItem("expires", Date.now() + (response.expires_in * 1000));
				localStorage.setItem("access_token", response.access_token);
				localStorage.setItem("refresh_token", response.refresh_token);
				form.removeEventListener("submit", formSubmitted);
				button.click();
				window.location.href = "index.html";
			}
			else{
				alert("Hibás felhasználónév vagy jelszó!");
			}
		}
	};
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var href = window.location.href;
	href = href.substr(0, href.length - 10);
	xhr.open("POST", href  + "api/v1/oauth2/tokens");
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("grant_type=password&username=" + username + "&password=" + password);
}