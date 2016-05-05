function showInTemperature() {
    var temp = 15; // Later it will be the data from the sensor
    var unit = " \xB0C"
    var temp_str = temp.toString();
    document.getElementById("showInTemp").innerHTML = temp_str.concat(unit);
}

function showExTemperature() {
    var temp = 20; // Later it will be the data from the sensor
    var unit = " \xB0C"
    var temp_str = temp.toString();
    document.getElementById("showExTemp").innerHTML = temp_str.concat(unit);
}

var updateInTemp = setInterval(showInTemperature, 1000);
var updateExTemp = setInterval(showExTemperature, 1000);