var timerCount = 1;
var chiisai = "";

function init() {
    window.addEventListener('scroll', () => {
        const {
            scrollTop,
            clientHeight,
            scrollHeight
        } = document.documentElement;
        if ((scrollTop + clientHeight) >= scrollHeight) {
            getContent((current_page + 1));
        }
    });
	
	startBrowseTimer();
}

function startBrowseTimer() {
        setInterval(browseTimer, 1000);
    }

function browseTimer() {
    if (timerCount == 100000) {
        chiisai = "<br>You've been here for too long! Timer will stop.";
    }
    document.getElementById("browse_timer").innerHTML = ("You have been browsing for: " + timerCount + " seconds." + chiisai);
    timerCount++;
}
function gotoAnother() {
    window.location.href = "another.html";
}
function gotoIndex() {
    window.location.href = "index.html";
}
function gotoSearchHistory() {
    var historyItem = [];
    for (var i = 0; i <= 10; ++i) {
        historyItem[i] = entireSearchHistory[(Math.floor(Math.random() * entireSearchHistory.length))];
    }
    alert("W-what is this!? It's really bad!\nI think this is your... search history!:\n\n" + (historyItem.join("\n")));
}

function gotoCredits() {
	alert("This website is an idea from Rel and Tyron.\nI love you all!\n\nCreated by yours truly,\nXian Artajo");
}
