var star = document.getElementById("homelogo");
star.style.opacity = 0;
star.style.transition = "opacity 1s";

function foo1() {
	"use strict";
    star.style.opacity = 1;
}
foo1();