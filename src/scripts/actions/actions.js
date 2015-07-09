var AppDispatcher = require("../dispatcher/app_dispatcher");
var Api = require("../utils/api");
var Constants = require("../utils/constants");

var Actions = {
	app: {
		start: function(){
			Api.persons.get();
			AppDispatcher.dispatch({
				actionType: Constants.events.APP_START
			});
		}
	},
	api: {
		personsResponse: function(persons){
			AppDispatcher.dispatch({
				actionType: Constants.events.PERSON_RESPONSE,
				persons: persons
			})
		}
	},
	person: {
		create: function(person){
			Api.person.create(person);
			AppDispatcher.dispatch({
				actionType: Constants.events.PERSON_CREATE
			})
		}
	}
	/*create: function(user){
		Api.users.create(user);
		AppDispatcher.dispatch({
			actionType: Constants.events.USER_SAVE
		});
	}*/
};

module.exports = Actions;