document.addEventListener("DOMContentLoaded", function(e) {
	var cache = false;
	if(!cache) {
		var link_elements = document.getElementsByTagName("link");
		for(i = 0; i < link_elements.length; i++) {
			if(link_elements[i].getAttribute("rel") == "stylesheet") {
				link_elements[i].href = link_elements[i].href + "?7";
			}
		}
		document.getElementsByClassName("js-file")[0].src = document.getElementsByClassName("js-file")[0].src + "?" + epoch();
	}
	if(document.getElementsByClassName("card").length == 0) {
		document.getElementsByClassName("card-divider")[0].textContent = "No Notes Found";
	}
	// Get the current UNIX timestamp.
	function epoch() {
		var date = new Date();
		var time = Math.round(date.getTime() / 1000);
		return time;
	}
});