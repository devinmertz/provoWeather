app = angular.module("MainApp")
	.filter("temp", function () {

		return function (temperature, scaleObj) {
			if (scaleObj) {
				console.log(scaleObj);
				return scaleObj.fahrRatio(temperature).toFixed(2) + scaleObj.symbol + "°";
			} else {
				return temperature + "F°"
			}
		}

	});