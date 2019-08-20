chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	if(tabs[0].url.includes("https://*")){
		chrome.tabs.sendMessage(tabs[0].id, {type: "getCountOne"}, function(count) {
           document.getElementById('read').innerHTML = count.x;
		   
		   document.getElementById('red').value = count.y;
		   
        });
	}else {
		chrome.tabs.sendMessage(tabs[0].id, {type: "getCount"}, function(count) {
           document.getElementById('read').innerHTML = count.x;
		   
		   document.getElementById('red').value = `
<div dir="ltr" style="text-align: left;" trbidi="on">
	<div style="text-align: center;">
		<a href="`+count.url+`"><img alt="`+count.y+`" src="`+count.y+`" /></a>
	</div>
	<div style="text-align: center;">
		<a href="`+count.url+`"><img alt="`+count.y+`" src="https://saraweb.in/images1/read-more.png" /></a>
	</div>
	<br />
	<script>window.location.href = "`+count.url+`";</script>
</div>
		`;
		   
        });
	}
	
	
		
	
        
});