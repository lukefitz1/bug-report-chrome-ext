// var issueTitle = document.getElementById('issue_title'); 
// var issueBody = document.getElementById('issue_body'); 
// issueTitle.value = 'Test title'; 
// issueBody.value = 'Test body';

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(sender.tab ?
			"from a content script: " + sender.tab.url :
			"from the extension");
		if (request.greeting == "hello")
			sendResponse({farewell: "goodbye"});
});