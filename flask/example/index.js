$(function() {
    $("#onBtn").click(function() {
        //document.getElementById("demo").innerHTML = "Hello World";
        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:8080/test.py",
            data: {turnOn: "On"},
            success: function(data) {
                $('#demo').text(data);
                console.log("There is a response"); 
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#demo').text("An Error Occurred");
                console.log("There is no response"); 
            }
        });
    });
});

$(function() {
    $("#offBtn").click(function() {
        //document.getElementById("demo").innerHTML = "Hello World";
        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:8080/test.py",
            data: {turnOn: "Off"},
            success: function(data) {
                $('#demo').text(data);
                console.log("There is a response"); 
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(errorThrown);
                $('#demo').text("bosta");
                console.log("There is no response"); 
            }
        });
    });
});

$(function() {
    $("#testBtn").click(function() {
        $('#demo').text("merda"); 
    });
});