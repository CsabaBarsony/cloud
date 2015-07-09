/** @jsx React.DOM */

var Creator = React.createClass({
	render: function(){
		return (
			<div>
				<input type="text" placeholder="Name" /><br />
				<input type="number" placeholder="Age" /><br />
				<button>Create!</button>
			</div>
		);
	}
});

module.exports = Creator;

