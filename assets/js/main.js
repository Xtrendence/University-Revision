document.addEventListener("DOMContentLoaded", function(e) {
	var cache = false;
	if(!cache) {
		var link_elements = document.getElementsByTagName("link");
		for(i = 0; i < link_elements.length; i++) {
			if(link_elements[i].getAttribute("rel") == "stylesheet") {
				link_elements[i].href = link_elements[i].href + "?14";
			}
		}
		document.getElementsByClassName("js-file")[0].src = document.getElementsByClassName("js-file")[0].src + "?" + epoch();
	}
	if(document.getElementsByClassName("card").length == 0 && document.getElementsByClassName("cards-wrapper").length > 0) {
		document.getElementsByClassName("card-divider")[0].textContent = "No Notes Found";
	}
	if(document.getElementsByClassName("notes-description").length > 0) {
		document.getElementsByClassName("edit-icon")[0].addEventListener("click", function() {
			if(this.classList.contains("active")) {
				this.classList.remove("active");
				for(i = 0; i < document.getElementsByClassName("notes-description").length; i++) {
					document.getElementsByClassName("notes-description")[i].style.background = "none";
				}
			}
			else {
				this.classList.add("active");
				for(i = 0; i < document.getElementsByClassName("notes-description").length; i++) {
					document.getElementsByClassName("notes-description")[i].style.background = "rgb(75,75,75)";
				}
			}
		});
	}
	// Get the current UNIX timestamp.
	function epoch() {
		var date = new Date();
		var time = Math.round(date.getTime() / 1000);
		return time;
	}
});