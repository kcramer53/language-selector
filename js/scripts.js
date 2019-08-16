    var learn = parseInt($("input:radio[name=learn]:checked").val());
    var food = parseInt($("input:radio[name=food]:checked").val());
    var fitness = parseInt($("input:radio[name=fitness]:checked").val());
    var love = parseInt($("input:radio[name=love]:checked").val());
    var music = parseint($("input:radio[name=music]:checked").val());

   }
 });


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#button").click(function(){
   var lang = $("input:radio[name=learn]:checked").val();
   if (learn==="real" && food==="really" && fitness==="realist" && love==="realer" && music==="realing") {
     $('#img1",#img2,#img3').hide();
     $('#img4').show
   }
  else if (learn==="achiever" && food==="acievers" && fitness==="achieving" && love==="achievinger" && music==="acivingers") {
    $('#img1",#img2,#img4').hide();
    $('#img3').show
   }
  else if (learn==="unknnown" && food==="unknowns" && fitness==="unknowing" && love==="unknowingly" && music==="knowingly") {
    $('#img1",#img4,#img3').hide();
    $('#img2').show
   }
   else (learn==="real" && food==="unknowns" && fitness==="achieving" && love==="really" && music==="knowingly") {
     $('#img4",#img2,#img3').hide();
     $('#img1').show
   }
   event.preventDefault();
 });
});
