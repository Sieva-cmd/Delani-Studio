$(document).ready(function () {
    $("#designImage").click(function() {
        $("#designP").toggle();
        $("#designImage").hide();
        
    });
 
    $("#designP").click(function() {
     $("#designImage").toggle();
     $("#designP").hide();
    });

    $("#devImage").click(function() {
        $("#devP").toggle();
        $("#devImage").hide();
    });
    $("#devP").click(function() {
        $("#devImage").toggle();
        $("#devP").hide();
    });
 
 });
 