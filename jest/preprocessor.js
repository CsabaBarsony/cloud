var ReactTools = require("react-tools");
React = require("react");

module.exports = {
	process: function(src) {
		return ReactTools.transform(src);
	}
};