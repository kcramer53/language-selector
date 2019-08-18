// back end
var quizScore = function(input1, input2, input3, input4, input5){
  var score = input1 + input2 + input3 + input4 + input5;
  return score;
};

  // front end
  $(document).ready(function(){
    $("form").submit(function(event){
      var inputQuestionOne = parseInt($("input:radio[name=learn]:checked").val());
      var inputQuestionTwo = parseInt($("input:radio[name=food]:checked").val());
      var inputQuestionThree = parseInt($("input:radio[name=fitness]:checked").val());
      var inputQuestionFour = parseInt($("input:radio[name=love]:checked").val());
      var inputQuestionFive = parseInt($("input:radio[name=music]:checked").val());

      var output = quizScore(inputQuestionOne, inputQuestionTwo, inputQuestionThree, inputQuestionFour, inputQuestionFive);
      console.log(output);

      if (output <=5){
        $('#ruby').show();
        $('#python, #react').hide();
      }else if (output <= 10){
          $('#python').show();
          $('#react, #ruby').hide();
      }else {
          $('#react').show();
          $('#python, #ruby').hide();
        }
        event.preventDefault();

      });
    });
