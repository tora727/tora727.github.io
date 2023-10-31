var timerCount = 1;
var chiisai = "";
function startBrowseTimer(){
	setInterval(browseTimer, 1000);
}

function browseTimer(){
	if (timerCount >= 10){
		chiisai = "\nYou've been here for too long!\nTyron has woken from his sleep and he'll slowly devour the website.";
	}
	document.getElementById("browse_timer").innerHTML = ("You have been browsing for: " + timerCount + " seconds." + chiisai);
	timerCount++;
}