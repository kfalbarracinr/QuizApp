var grade = 0;
var correct;
$(function(){

$('.answer').on('click', function(){

	$(this).removeClass('fontWhite');
	$(this).addClass('choose');
	$(this).siblings().addClass('fontWhite');
	correct = $(this);
});


$('.right').on('click',function	(){
	var currentQuestion = $('.show');
	if (currentQuestion.next().length > 0){
		currentQuestion.removeClass('show');
		currentQuestion.addClass('hide');
		currentQuestion.next().removeClass('hide');
		currentQuestion.next().addClass('show');
		if (correct.hasClass('correct')){
			grade = grade +1;
		}
	} else{
		if (correct.hasClass('correct')){
			grade = grade +1;
		}
		alert("Your grade is " + grade +" of 5");
	}
});

});