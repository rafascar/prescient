var URL = "http://prescient:8080/";
var update_period = 5000;
var json_updated = false;
//var URL = "http://localhost:8080/"

var current_data;

function refresh_all() {
    $.ajax({
        type: "GET",
        url: URL + "query_data",
        data: {},
        success: function(data) {
            current_data = $.parseJSON(data);
            getACTemperature();
            getInTemperature();
            getExTemperature();
            getLampDimmerization();
            getInLuminosity();
            getExLuminosity();
            console.log(current_data); 
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#demo').text("An Error Occurred");
            console.log("There is no response"); 
        }
    });
}
var update_refresh_all = setInterval(refresh_all, update_period);


$("#A0").click(function() {
    $.ajax({
        type: "GET",
        url: URL + "lamps",
        data: {turnOn: $("#flipa0").val()},
        success: function(data) {
            $('#demo').text(data);
            console.log("There is a response"); 
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#demo').text("An Error Occurred");
            console.log("There is no response"); 
        }
    });
})

function dimmLamps(value)
{
    dimm = ("0" + value).slice(-2);
    $.ajax({
        type: "GET",
        url: URL + "dimmer",
        data: {dimmer: dimm.toString()},
        success: function(data) {
            $('#demo').text(data);
            console.log("There is a response");
            getLampDimmerization();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#demo').text("An Error Occurred");
            console.log("There is no response"); 
        }
    });
}

function changeTemp(value)
{
    var tempk;
}

function notify()
{
    var teste = $("#desired_temp").val()
    alert(teste.toString())
}

function getACTemperature() {
    var temp = $("#desired_temp").val();
    var unit = " \xB0C";
    var temp_str = temp.toString();
    document.getElementById("showAC").innerHTML = temp_str.concat(unit);
}

function getInTemperature() {
    var temp = current_data["internal_temp"];
    var unit = " \xB0C";
    var temp_str = temp.toString();
    document.getElementById("showInTemp").innerHTML = temp_str.concat(unit);
}

function getExTemperature() {
    var temp = current_data["external_temp"];
    var unit = " \xB0C";
    var temp_str = temp.toString();
    document.getElementById("showExTemp").innerHTML = temp_str.concat(unit);
}

function getLampDimmerization() {
    value = $("#desired_lum").val();
    var dimm = dimm = ("0" + value).slice(-2);
    var unit = " %";
    var light_str = dimm.toString();
    document.getElementById("showLampDimmer").innerHTML = light_str.concat(unit);
}

function getInLuminosity() {
    var light = current_data["internal_lum"]; // Later it will be the data from the sensor
    var unit = " %";
    var light_str = light.toString();
    document.getElementById("showInLum").innerHTML = light_str.concat(unit);
}

function getExLuminosity() {
    var light = current_data["external_lum"]; // Later it will be the data from the sensor
    var unit = " %";
    var light_str = light.toString();
    document.getElementById("showExLum").innerHTML = light_str.concat(unit);
}

function getAirHumidity() {
    var hum = 70; // Later it will be the data from the sensor
    var unit = " %";
    var hum_str = hum.toString();
    document.getElementById("showAirHum").innerHTML = hum_str.concat(unit);
}

function getAirCO2() {
    var co2 = 40; // Later it will be the data from the sensor
    var unit = " %";
    var co2_str = co2.toString();
    document.getElementById("showAirCO2").innerHTML = co2_str.concat(unit);
}

function getTotalConsumption() {
    var total = 200;
    var unit = " kW/h";
    var total_str = total.toString();
    document.getElementById("totalConsumption").innerHTML = total_str.concat(unit);
}