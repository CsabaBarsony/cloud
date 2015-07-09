

var Helpers = {
	List: {
		addElement: function(array, element){
			var result = array.slice(0);
			result.push(element);
			return result;
		},
		removeElement: function(array, index){
			var result = array.slice(0);
			result.splice(index, 1);
			return result;
		},
		swapElements: function(array, index1, index2){
			var result = array.slice(0);	// Returns the copy of parameter array
			var tmp = result[index1];
			result[index1] = result[index2];
			result[index2] = tmp;
			return result;
		}
	},
	Convert: {
		tsNanoToFormatted: function(ts){
			var d = getDateValues(Math.floor(ts / 1000000));
			var t = getDateValues(Math.floor(Date.now()));
			var ed = _.map(d, function(value){
				return extendTo2Digits(value);
			});
			if(d[0] < t[0] || d[1] < t[1] || d[2] < t[2]){
				return ed[0] + "." + ed[1] + "." + ed[2] + ".";
			}
			else{
				return ed[3] + ":" + ed[4];
			}
		}
	}
};

function getDateValues(ts){
	var date = new Date(Math.floor(ts));
	return [
		date.getFullYear(),
		date.getMonth()+1,
		date.getDate(),
		date.getHours(),
		date.getMinutes(),
		date.getSeconds()
	];
}

function extendTo2Digits(number){
	if(number < 10) return "0" + number;
	else return "" + number;
}

module.exports = Helpers;