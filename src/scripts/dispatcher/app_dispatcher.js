var FluxDispatcher = require("flux").Dispatcher;

var AppDispatcher = new FluxDispatcher();

/*var AppDispatcher = {
	register: function(callback){
		//console.log("A store registered a callback in AppDispatcher");
		Dispatcher.register(callback);
	},
	dispatch: function(payload){
		//console.log("dispatch", payload);
		Dispatcher.dispatch(payload);
	},
	waitFor: function(tokens){
		Dispatcher.waitFor(tokens);
	}
};*/

module.exports = AppDispatcher;