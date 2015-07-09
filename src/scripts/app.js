/** @jsx React.DOM */

var PersonManager = require("./components/person_manager");
var Creator = require("./components/creator");
var Actions = require("./actions/actions");

var App = React.createClass({
	componentDidMount: function(){
		Actions.app.start();
	},
	render: function(){
		return (
			<div>
				<PersonManager />
				<Creator />
			</div>
		);
	}
});

React.render(<App/>, document.body);