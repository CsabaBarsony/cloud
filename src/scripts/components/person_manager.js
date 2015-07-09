/** @jsx React.DOM */

var PersonStore = require("../stores/person_store");

var PersonManager = React.createClass({
	getInitialState: function(){
		return { persons: PersonStore.getPersons() };
	},
	componentDidMount: function(){
		PersonStore.addChangeListener(this.onPersonStoreChange);
	},
	componentWillUnmount: function(){
		PersonStore.removeChangeListener(this.onPersonStoreChange);
	},
	onPersonStoreChange: function(){
		this.setState({ persons: PersonStore.getPersons() });
	},
	render: function(){
		return (
			<ul>
				{_.map(this.state.persons, function(person){
					return <li key={person.name + person.age}>{person.name}</li>;
				})}
			</ul>
		);
	}
});

module.exports = PersonManager;
