var urls = "";
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "getCount":{
				
				
					chrome.storage.sync.get("generated", function(item){
						if(!item.generated.includes(window.location.href)){
							urls = "";
						}else{
							urls  = item.generated;
							console.log(item.generated);
							console.log("Generated Retrieved!");
						}
					});
					
					var count = {
						x: document.getElementsByClassName('en-weight xo-story-container-title')[0].children[0].textContent,
						y: document.getElementsByClassName('xo-story-container-image')[0].children[0].getAttribute('src'),
						url: urls,
					};
					chrome.storage.sync.set({"value": window.location.href}, function(){
						console.log(window.location.href);
						console.log("Value Saved!")});
					sendResponse(count);
			}
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
);				