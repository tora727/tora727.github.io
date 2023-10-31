var timerCount = 1;
var chiisai = "";
function startBrowseTimer(){
	setInterval(browseTimer, 1000);
}

function browseTimer(){
	if (timerCount == 100000){
		chiisai = "<br>You've been here for too long! Timer will stop.";
	}
	document.getElementById("browse_timer").innerHTML = ("You have been browsing for: " + timerCount + " seconds." + chiisai);
	timerCount++;
}

function gotoAnother(){
	window.location.href = "another.html";
}

function gotoIndex(){
	window.location.href = "index.html";
}