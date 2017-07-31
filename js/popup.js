// document.addEventListener("DOMContentLoaded", function() {
// 	var bugButton = document.getElementById("bugButton");

// 	bugButton.addEventListener("click", function() {
// 		chrome.tabs.executeScript(null, {file: "js/content_script.js"});
// 	}, false);
// }, false);

document.addEventListener("DOMContentLoaded", function() {
	var bugButton = document.getElementById("bugButton");
	
	bugButton.addEventListener("click", function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {gretting: "hello"}, function(response) {
				console.log(response.farewell);
			});
		});
	}, false);
}, false);