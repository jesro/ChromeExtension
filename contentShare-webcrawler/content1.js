chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "getCountOne":
				//angular.element('.tabHeaderItem').trigger('click');
				
				
				var count = {
					x: "Plixxo",
					y : document.getElementsByClassName('generatedLinksDiv ng-scope')[0].querySelector('.linkTitle').children[0].href
				};
				
					
				
					chrome.storage.sync.get("value", function(items){
						document.getElementsByClassName('generateLinkInput ng-pristine ng-valid')[0].value  = items.value;
						document.getElementsByClassName('generateLinkInput ng-valid')[0].dispatchEvent(new Event('change'));
						console.log(items.value);
						console.log("Generated Retrieved!");
					});
					
						chrome.storage.sync.set({"generated": document.getElementsByClassName('generatedLinksDiv ng-scope')[0].querySelector('.linkTitle').children[0].href}, 
							function(){
							console.log(document.getElementsByClassName('generatedLinksDiv ng-scope')[0].querySelector('.linkTitle').children[0].href);
							console.log("Generated Value Saved!")});
					
					
				
                sendResponse(count);
				
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
);

				//angular.element('.tabHeaderItem').trigger('click');
				

//window.load = function () {
//console.log('suu');
    
 // angular.module('agencyDashboard', []).element(document.getElementByClassName('tabHeaderItem')).trigger('click');
//}

//angular.element('.generateLinkButton').trigger('click');