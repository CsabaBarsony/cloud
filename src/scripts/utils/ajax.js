

var Ajax = {
	get: function(path, callback){
		//console.log("get", path);
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200 || xhr.status === 201){
					callback(true, JSON.parse(xhr.response));
				}
				else if(xhr.status === 401){
					window.location.href = "login.html";
				}
				else{
					callback(false, JSON.parse(xhr.response));
				}
			}
		};
		xhr.open("GET", window.location.href + path);
		xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("access_token"));
		xhr.send();
	},
	post: function(path, params, callback, urlEncoded){
		_postPutPatch("POST", path, params, callback, urlEncoded);
	},
	put: function(path, params, callback, urlEncoded){
		_postPutPatch("PUT", path, params, callback, urlEncoded);
	},
	patch: function(path, params, callback, urlEncoded){
		_postPutPatch("PATCH", path, params, callback, urlEncoded);
	},
	remove: function(path, callback){
		//console.log("delete", path);
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200 || xhr.status === 201){
					callback(true, JSON.parse(xhr.response));
				}
				else{
					callback(false, JSON.parse(xhr.response));
					//window.location.href = "login.html";
				}
			}
		};
		xhr.open("DELETE", window.location.href + path);
		xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("access_token"));
		xhr.send();
	}
};

function _postPutPatch(method, path, params, callback, urlEncoded){
	//console.log(method, path, params);
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				callback(true, JSON.parse(xhr.response));
			}
			else{
				callback(false, JSON.parse(xhr.response));
			}
		}
	};
	xhr.open(method, window.location.href + path);
	xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("access_token"));
	xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
	if(urlEncoded) xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(JSON.stringify(params));
}

module.exports = Ajax;