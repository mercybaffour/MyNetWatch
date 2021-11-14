// This  is fired when the user's profile with this extension installed first starts up \.

chrome.runtime.onStartup.addListener( () => {
var TimeWatch = function () {
    
    var startTime = new Date().getTime();
    var last = startTime;
    var now = startTime;
    
    this.start = function () {
        startTime = new Date().getTime();
    };
    
    this.check = function (message) {
        now = (new Date().getTime());
        console.log(message, 'START:', now - startTime, 'LAST:', now - last);
        last = now;
    };
}});

chrome.runtime.onStartup.addListener( () => {
    //Example: Will keep checking, updating "last" to previous now date.gettime() value
    var time = new TimeWatch ();
    //begin tracking time
    time.start();
    //...do stuff
    time.check('say something here')//look at your console for output
    //..do more stuff
    time.check('say something else')//look at your console for output
    //..do more stuff
    time.check('say something else one more time')//look at your console for output
});
  
chrome.action.onClicked.addListener(openPage);

function openPage() {
  chrome.tabs.create({ url: 'index.html' });
}
  
 
    
 