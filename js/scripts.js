// back preventDefault
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
        $('#img1').show();
        $('#img2, #img3').hide();
        else if (output <= 10){
          $('#img2').show();
          $('#img3, #img1').hide();
        else {
          $('#img3').show();
          $('#img2, #img1').hide();
        }
        event.preventDefault();

      });
    });
