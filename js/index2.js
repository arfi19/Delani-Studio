$(document).ready(function(){
  //This function is to show the hidden text
  $("#design-image").click(function(){
    $("#design-image").fadeOut();
    $("#design").fadeIn();
  });
  $("#design").click(function(){
     $("#design").fadeOut();
     $("#design-image").fadeIn();
  });
});
// $("#design").click(function(){
     // $("#design").hide();
     // $("#design-image").show();
   // });