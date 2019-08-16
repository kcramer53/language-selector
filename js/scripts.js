$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var langage = $("#language").val();
    var learn = $("input:radio[name=learn]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var fitness = $("input:radio[name=fitness]:checked").val();
    var love = $("input:radio[name=love]:checked").val();
    var music = $("input:radio[name=music]:checked").val();

   }
 });



 $("#button").click(function(){
   var lang = $("input:radio[name=learn]:checked").val();
   if (learn==="real" && food==="really" && fitness==="realist" && love==="realer" && music==="realing") {
     $("#img1").hide();
     $("#img2").hide();
     $("#img3").hide();
     $("#img4").show();
   }
  else if (learn==="achiever" && food==="acievers" && fitness==="achieving" && love==="achievinger" && music==="acivingers") {
     $("#img1").hide();
     $("#imj2").hide();
     $("#img4").hide();
     $("#img3").show();
   }
  else if (learn==="unknnown" && food==="unknowns" && fitness==="unknowing" && love==="unknowingly" && music==="knowingly") {
      $("#img1").hide();
      $("#imj3").hide();
      $("#img4").hide();
      $("#img2").show();
   }
   else (learn==="real" && food==="unknowns" && fitness==="achieving" && love==="really" && music==="knowingly") {
     $("#img3").hide();
     $("#imj2").hide();
     $("#img4").hide();
     $("#img1").show();
   }
   event.preventDefault();
 });
});
