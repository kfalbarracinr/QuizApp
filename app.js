var grade = 0;
var correct;
$(function(){
	var modal = document.getElementById('myModal');

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	var p = document.getElementsByClassName('ans-gio')


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
		$("html, body").animate({ scrollTop: 0 }, "slow");
	} else{
		if (correct.hasClass('correct')){
			grade = grade +1;
		}
		var txt = "Your grade is " + grade +" of 5";
		$('.ans-gio').text(txt);
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

});

});