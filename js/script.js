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
    $("#productImage").click(function() {
        $("#productP").toggle();
        $("#productImage").hide();
    });
    $("#productP").click(function() {
        $("#productImage").toggle();
        $("#productP").hide();
    });
    $("#work4").hover(function() {
      $(".name1").toggle(); 
        
    });
    $("#work3").hover(function() { 
        $(".name2").toggle();  
      });
      $("#work2").hover(function() { 
        $(".name3").toggle();  
      });
      $("#work1").hover(function() { 
        $(".name4").toggle();  
      });
      $("#work5").hover(function() { 
        $(".name5").toggle();  
      });
      $("#work6").hover(function() { 
        $(".name6").toggle();  
      });
      $("#work7").hover(function() { 
        $(".name7").toggle();  
      });
      $("#work8").hover(function() { 
        $(".name8").toggle();  
      });

 });
