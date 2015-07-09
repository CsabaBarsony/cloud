var AppDispatcher = require("../dispatcher/app_dispatcher");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Constants = require("../utils/constants");

var CHANGE_EVENT = "change";
var persons = [];

var PersonStore = assign({}, EventEmitter.prototype, {
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},
	getPersons: function(){
		return persons;
	}
});

PersonStore.dispatchToken = AppDispatcher.register(function(action){
	switch (action.actionType){
		case Constants.events.APP_START:

			break;
	}
});

module.exports = PersonStore;
