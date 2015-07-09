/* Global config */

appConfig = {
	debug: true,
	taskStatus: {
		new: {
			backgroundColor: "#2196F3"
		},
		success: {
			backgroundColor: "#4CAF50"
		},
		fail: {
			backgroundColor: "#F44336"
		},
		own: {
			backgroundColor: "#795548"
		}
	},
	apiVersion: "/api/v1/"
};

function log(){
	var messsage = "";
	for(var i = 0, l = arguments.length; i < l; i++){
		var arg = arguments[i];
		if(typeof arg === "object") messsage += JSON.stringify(arg);
		else messsage += arg;
		messsage += "\n";
	}
	if(appConfig.debug) console.log(messsage + "\n");
}