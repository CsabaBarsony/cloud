var Ajax = require("./ajax");
var Actions = require("../actions/actions");
var Constants = require("../utils/constants");

var Api = {
	persons: {
		get: function(){
			setTimeout(function(){
				Actions.api.personsResponse(persons);
			}, Constants.apiDelay);
		},
		create: function(person){
			person.id = ++maxId;
			persons.push(person);
		}
	}
};

module.exports = Api;

var maxId = 2;
var persons = [
	{
		id: 1,
		name: "Béla bácsi",
		age: 80
	},
	{
		id: 2,
		name: "Gizi néni",
		age: 75
	}
];