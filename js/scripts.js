$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var age = parseFloat($("input#age").val());
   console.log(age);
   var desire = $("input:checkbox[name=desire]:checked").val();
   console.log(desire);
   if (age >= 18 && desire==="Y") {
     $("#pass-age").show();
   } else if (age<18) {$(".screen").show("Sorry you need to be 18 to adopt a furry friend. Come back when you are older!");
     }
     else if (desire==="N"){$("#no-desire").show();
     } else {
       alert('Please enter your age.');
   }
 });



 $("#button").click(function(){
   var lang = $("input:radio[name=learn]:checked").val();
   if (lang==="real") {
     $("#img1").hide();
     $("#img2").hide();
     $("#img3").hide();
     $("#img4").show();
   }
  else if (food==="really") {
     $("#img1").hide();
     $("#imj2").hide();
     $("#img4").hide();
     $("#img3").show();
   }
  else if (fitness==="realist") {
      $("#img1").hide();
      $("#imj3").hide();
      $("#img4").hide();
      $("#img2").show();
   }
   else (music==="realing") {
     $("#img3").hide();
     $("#imj2").hide();
     $("#img4").hide();
     $("#img1").show();
   }
