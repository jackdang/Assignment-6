//execute when the document is ready
$(document).ready(function(){
    // store all city in an array
    var cities = ["NYC", "SF", "LA", "AUSTIN", "SYDNEY"];
    // for each city in the array, add in an option value for the drop down
    $(cities).each(function() {
        $("#city-type").append("<option value='" + this +"'>" + this + "</option>");
    });
    //apply new background using the change function
    $("#city-type").change(function(e) {
        e.preventDefault();
    //save the dropdown value into a variable 
        var city = $("#city-type").val();
    //sanitise the city value and changes to lowercase
        city = city.toLowerCase();
    //update the CSS with the city value. Because it has the same value, if statement isn't neccesary.
        $("body").attr("class", city);
    });
});
