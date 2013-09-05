// JavaScript Document

var countDownCount;
var timeOutCounter;

function timerStart()
	{
		countDownToTimeoutStop();
		timeOutCounter=setTimeout(timerEnd, 3000);
		$('.output').append('timerStart<br>');
		
	}

function timerStop()
	{
		clearTimeout(timeOutCounter);
		countDownToTimeoutStop();
		$('.output').append('timerStop<br>');
		$('#timeoutBox').css("background-color","red");
	}
	
function timerReset()
	{
		$('#timeoutBox').css("background-color","red");
		countDownToTimeoutStop();
		clearTimeout(timeOutCounter);
		timeOutCounter=setTimeout(timerEnd, 3000);
		$('.output').append('timerReset<br>');
		
	}
	
function timerEnd()	
	{
		$('.output').append('<strong>Count Down has Ended</strong><br>');		
		
		window.countDownCount=20;
		$('.countDownTimer').html(window.countDownCount);
		countDownToTimeoutStop();
		window.countDownTimer=setInterval(function(){countDownToTimeout()},1000);
		$('#timeoutBox').fadeIn();		
		
		
	}

function countDownToTimeoutStop() 
	{	
		window.clearInterval(window.countDownTimer);
		$('#timeoutBox').fadeOut();	
		$('#timeoutBox').css("background-color","red");
	}
	
function countDownToTimeout()
	{
		window.countDownCount = window.countDownCount-1;
		$('.countDownTimer').html(window.countDownCount);
		
		if (window.countDownCount<0) {
			$('.countDownTimer').html('Time Out Complete');
			$('#timeoutBox').css("background-color","green");			
		}
	}