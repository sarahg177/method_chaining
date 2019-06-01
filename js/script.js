$(document).ready(function() {
 //
 // add your jQuery code here
  $("#button1").mouseenter(function() {
  $("#button1").removeClass("makeRed").addClass("makeBorder");
 });
   $("#button1").mouseleave(function() {
    $("#button1").removeClass("makeBorder").addClass("makeRed");
   });
   $("#button1").click(function() {
    $("p").slideToggle(1000);
   });
   $(".bottom_button").click(function() {
    $(".card_para").fadeOut("slow");
   });
   $(".bottom_button").click(function() {
    $(".card_para").fadeIn("medium");
   });
});
