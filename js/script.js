$(document).ready(function () {
    $("#designImage").click(function() {
        $("#designP").toggle();
        $("#designImage").hide();
        
    });
 
    $("#designP").click(function() {
     $("#designImage").toggle();
     $("#designP").hide();
    })
 
 });
 