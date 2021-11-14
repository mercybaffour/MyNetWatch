function openPage() {
    chrome.tabs.create({ url: 'index.html' });
}

chrome.action.onClicked.addListener(openPage);

var TimeWatch = function () {
    
    var startTime = new Date().getTime();
    var last = startTime;
    var now = startTime;
    
    this.start = function () {
       return  startTime = new Date().getTime();
    };
    
    this.check = function () {
        now = (new Date().getTime());
        console.log( 'START:', now - startTime, 'LAST:', now - last);
        var display = `'START:', ${now - startTime}, 'LAST:', ${now - last})`
        last = now;

        return display;
    };
}

function showElapsedTime() {
    var time = new TimeWatch ();
    var timeButton = document.getElementById("time-display");  

    timeButton.addEventListener("click", () => {
        
    var timeDisplay = document.getElementById("shown-display")

    if (timeDisplay.style.display === "none") {
        timeDisplay.style.display = "block";
        timeDisplay.innerText = "test";
        } else {
        timeDisplay.style.display = "none";
        }
    })
}
function showCurrentTime() {
    var currentTime = new TimeWatch ();
    var refreshButton = document.getElementById("refresh-display");  

    refreshButton.addEventListener("click", () => {
        
    var refreshedDisplay = document.getElementById("refreshed-display")

    if (refreshedDisplay.style.display === "none") {
        refreshedDisplay.style.display = "block";
        refreshedDisplay.innerText = "test";
        } else {
        refreshedDisplay.style.display = "none";
        }
    })
}
  
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: [showElapsedTime, showCurrentTime]
    });
});




