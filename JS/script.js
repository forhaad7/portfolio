
//Mutli typing effect start -----------------------------------------

	const text = document.querySelector(".sec-text");

	const textLoad = () => {
		setTimeout(() => {
			text.textContent = "Web Design";
		}, 0);
		setTimeout(() => {
			text.textContent = "Graphics Design";
		}, 4000);
		setTimeout(() => {
			text.textContent = "Data Entry";
		}, 8000); //1s = 1000 milliseconds
	}
	textLoad();
	setInterval(textLoad, 12000);
//Mutli typing effect end




//Up Button start---------------------------------------------------------------

	// Get the button:
		let mybutton = document.getElementById("myBtn");

		// When the user scrolls down 20px from the top of the document, show the button
		window.onscroll = function () { scrollFunction() };

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.style.display = "block";
			} else {
				mybutton.style.display = "none";
			}
		}

		// When the user clicks on the button, scroll to the top of the document
		function topFunction() {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}

//Up Button end