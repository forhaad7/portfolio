
//babul effect start -----------------------------------------

var bubbleLifeTime = 20;
var noOfBubbles = 120;

var wrapper = document.querySelector('.wrapper');
var bubbles = [];

init();

function init() {
	var bubble;
	for (var i = 0; i < noOfBubbles; i++) {
		bubble = createBubble();
		wrapper.appendChild(bubble);
	}
}

function createBubble() {
	var circleContainer = document.createElement('div');
	circleContainer.classList.add('circle_container');
	circleContainer.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";

	var circle = createCircle();
	circleContainer.appendChild(circle);

	return circleContainer;
}

function createCircle() {
	var circle = document.createElement('div');
	circle.classList.add('circle');
	circle.style.animationDelay = (Math.random() * bubbleLifeTime) + 's';

	var side = (5 + Math.floor(Math.random() * 5)) + 'px';
	circle.style.width = side;
	circle.style.height = side;

	return circle;
}
//babul effect end--------------------------------------------------




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




var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });