document.addEventListener("DOMContentLoaded", function(e) {
	var cache = false;
	if(!cache) {
		var link_elements = document.getElementsByTagName("link");
		for(i = 0; i < link_elements.length; i++) {
			if(link_elements[i].getAttribute("rel") == "stylesheet") {
				link_elements[i].href = link_elements[i].href + "?15";
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

		document.getElementsByClassName("notes-search")[0].addEventListener("keydown", function() {
			filter(document.getElementsByClassName("notes-search")[0].value);
		});
		document.getElementsByClassName("notes-search")[0].addEventListener("keyup", function() {
			filter(document.getElementsByClassName("notes-search")[0].value);
		});

		function filter(text) {
			var noteContainers = document.getElementsByClassName("notes-container");
			var noteTitles = document.getElementsByClassName("notes-title");
			var noteDescriptions = document.getElementsByClassName("notes-description");

			for(var i = 0; i < noteContainers.length; i++) {
				noteContainers[i].classList.remove("match");
			}

			var text = text.trim().toLowerCase();

			if(text === "") {
				for(var i = 0; i < noteContainers.length; i++) {
					noteContainers[i].classList.remove("hidden");
					noteContainers[i].classList.remove("match");
				}
			}
			else {
				for(var i = 0; i < noteTitles.length; i++) {
					if(noteTitles[i].textContent.toLowerCase().includes(text)) {
						noteTitles[i].parentElement.classList.add("match");
					}
				}
				for(var i = 0; i < noteDescriptions.length; i++) {
					if(noteDescriptions[i].textContent.toLowerCase().includes(text)) {
						noteDescriptions[i].parentElement.classList.add("match");
					}
				}
				for(var i = 0; i < noteContainers.length; i++) {
					if(!noteContainers[i].classList.contains("match")) {
						noteContainers[i].classList.add("hidden");
					}
				}
			}
		}
	}
	// Get the current UNIX timestamp.
	function epoch() {
		var date = new Date();
		var time = Math.round(date.getTime() / 1000);
		return time;
	}
});