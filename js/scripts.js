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
          var learn = $("input:radio[name=learn]:checked").val();
          if (learn==="real") {
