function getACTemperature() {
    var temp = 16; // Later it will be the data from the sensor
    var unit = " \xB0C";
    var temp_str = temp.toString();
    document.getElementById("showAC").innerHTML = temp_str.concat(unit);
}

function getInTemperature() {
    var temp = 18; // Later it will be the data from the sensor
    var unit = " \xB0C";
    var temp_str = temp.toString();
    document.getElementById("showInTemp").innerHTML = temp_str.concat(unit);
}

function getExTemperature() {
    var temp = 20; // Later it will be the data from the sensor
    var unit = " \xB0C";
    var temp_str = temp.toString();
    document.getElementById("showExTemp").innerHTML = temp_str.concat(unit);
}

// Create variables that periodically call the function
var updateACTemp = setInterval(getACTemperature, 1000);
var updateInTemp = setInterval(getInTemperature, 1000);
var updateExTemp = setInterval(getExTemperature, 1000);


function getLampDimmerization() {
    var light = 80; // Later it will be the data from the sensor
    var unit = " %";
    var light_str = light.toString();
    document.getElementById("showLampDimmer").innerHTML = light_str.concat(unit);
}

function getInLighting() {
    var light = 90; // Later it will be the data from the sensor
    var unit = " %";
    var light_str = light.toString();
    document.getElementById("showInLight").innerHTML = light_str.concat(unit);
}

function getExLighting() {
    var light = 100; // Later it will be the data from the sensor
    var unit = " %";
    var light_str = light.toString();
    document.getElementById("showExLight").innerHTML = light_str.concat(unit);
}

// Create variables that periodically call the function
var updateLampDimmerization = setInterval(getLampDimmerization, 1000);
var updateInLighting = setInterval(getInLighting, 1000);
var updateExLighting = setInterval(getExLighting, 1000);

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

// Create variables that periodically call the function
var updateAirHumidity = setInterval(getAirHumidity, 1000);
var updateAirCO2 = setInterval(getAirCO2, 1000);


function getTotalConsumption() {
    var total = 200;
    var unit = " kW/h";
    var total_str = total.toString();
    document.getElementById("totalConsumption").innerHTML = total_str.concat(unit);
}
var updateTotalConsumption = setInterval(getTotalConsumption, 1000);


zingchart.THEME="classic";
var myConfig = 
    {
        "type": "area",
        "stacked": true,
        "background-color": "transparent",
        "legend": {
            "margin":"5% auto auto auto",
            "layout": "float",
            "font-family": "arial",
            "font-size": "10px",
            "background-color": "#1D2629",
            "border-color": "#808080",
            "toggle-action": "remove",
            "align":"center",
            "item": {
                "marker-style": "match",
                "font-color": "#ffffff"
            }
        },
        "plot": {
            "tooltip-text": "%t: %v",
            "active-area":true,
            "animation": {
                "speed": 0.5,
                "effect": 4
            },
            "shadow": false
        },
        "plotarea": {
            "margin": "10% 8% 14% 12%"
        },
        "series": [
            {
                "text": "AC",
                "values": [
                    44,
                    40,
                    44,
                    37,
                    35,
                    46
                ],
                "line-width": "2px",
                "line-color": "#8DD62E",
                "background-color": "#8DD62E",
                "marker": {
                    "type": "circle",
                    "size": "4px",
                    "border-width": "0px",
                    "background-color": "#8DD62E",
                    "border-color": "#8DD62E",
                    "shadow": false
                }
            },
            {
                "text": "Lamp 3",
                "values": [
                    40,
                    32,
                    37,
                    27,
                    27,
                    32
                ],
                "line-width": "2px",
                "line-color": "#FF006F",
                "background-color": "#FF006F",
                "marker": {
                    "type": "circle",
                    "size": "4px",
                    "border-width": "0px",
                    "background-color": "#FF006F",
                    "border-color": "#FF006F",
                    "shadow": false
                }
            },
            {
                "text": "Lamp 2",
                "values": [
                    37,
                    24,
                    26,
                    17,
                    19,
                    17
                ],
                "line-width": "2px",
                "line-color": "#00D3E6",
                "background-color": "#00D3E6",
                "marker": {
                    "type": "circle",
                    "size": "4px",
                    "border-width": "0px",
                    "background-color": "#00D3E6",
                    "border-color": "#00D3E6",
                    "shadow": false
                }
            },
            {
                "text": "Lamp 1",
                "values": [
                    20,
                    13,
                    12,
                    8,
                    15,
                    9
                ],
                "line-width": "2px",
                "line-color": "#FFD540",
                "background-color": "#FFD540",
                "marker": {
                    "type": "circle",
                    "size": "4px",
                    "border-width": "0px",
                    "background-color": "#FFD540",
                    "border-color": "#FFD540",
                    "shadow": false
                }
            }
        ],
        "scale-x": {
            "values": [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"
            ],
            "line-color": "#808080",
            "line-width": "1px",
            "line-style": "solid",
            "guide": {
                "line-color": "#808080",
                "line-style": "solid"
            },
            "tick": {
                "line-width": "1px",
                "line-color": "#808080"
            },
            "item": {
                "font-size": "12px",
                "font-color": "#808080",
                "font-weight": "normal",
                "font-family": "arial",
                "offset-y": "5%"
            }
        },
        "scale-y": {
            "values": "0:150:50",
            "format": "%v gal",
            "line-width": "1px",
            "line-color": "#808080",
            "guide": {
                "line-color": "#808080",
                "alpha": 0.1,
                "line-style": "solid"
            },
            "tick": {
                "line-width": "1px",
                "line-color": "#808080"
            },
            "item": {
                "font-size": "12px",
                "font-color": "#808080",
                "font-weight": "normal",
                "font-family": "arial",
                "offset-x": "-5%"
            }
        },
        "crosshair-x": {
            "line-width": "2px",
            "line-color": "#FFFFFF",
            "offset-y": "10%",
            "marker": {
                "visible": false
            },
            "plot-label": {
                "text": "<strong>%t</strong>: %v gal",
                "font-color": "#000000",
                "font-family": "arial"
            },
            "scale-label": {
                "background-transparent": true,
                "offset-y": "5%"
            }
        },
        "tooltip": {
            "visible": false
        }
    };

zingchart.render({ 
    id : 'myChart', 
    data : myConfig, 
    height: 250, 
    width: "100%" 
});