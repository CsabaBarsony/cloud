jest.dontMock("../src/scripts/components/checkbox_with_label");
jest.dontMock("../src/scripts/stores/user_store");
jest.dontMock('object-assign');

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

/*describe("c w l", function(){
	it("blabla", function(){

		var CWL = require("../src/scripts/components/checkbox_with_label");
		var chb = TestUtils.renderIntoDocument(
			React.createElement(CWL, { labelOn: "On", labelOff: "Off" })
		);

		var label = TestUtils.findRenderedDOMComponentWithTag(chb, "label");
		expect(label.getDOMNode().textContent).toEqual("Off");

		var input = TestUtils.findRenderedDOMComponentWithTag(chb, "input");
		TestUtils.Simulate.change(input);
		expect(label.getDOMNode().textContent).toEqual("On");
	});
});*/

describe("UserStore", function(){
	var Constants = require("../src/scripts/utils/constants");
	var AppDispatcher;
	var UserStore;
	var callback;

	var remove = {
		actionType: Constants.USER_REMOVE
	};

	beforeEach(function(){
		AppDispatcher = require("../src/scripts/dispatcher/app_dispatcher");
		UserStore = require("../src/scripts/stores/user_store");
		callback = AppDispatcher.register.mock.calls[0][0];
	});

	it("valami...", function(){
		expect(AppDispatcher.register.mock.calls.length).toBe(1);
	});
});