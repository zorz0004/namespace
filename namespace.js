/********************************
Filename: namespace.js
Author: Marcos Zorzi Rosa
Description: Change the behavior of the respective box of the id zorz0004 at https://maddprof1.github.io/namespace-assignment/index.html
Date: October 19, 2018
*********************************/

var zorz0004 = null;

/*---- Create variables with var  ----*/
document.addEventListener("DOMContentLoaded", init);


zorz0004 = function init() {

    zorz0004 = document.createElement("div");
    zorz0004.className = "box";
    zorz0004.textContent = "zorz0004's Prety square.";
    document.getElementById("boxes").appendChild(zorz0004);

    zorz0004.addEventListener("click", function () {
        this.style.borderColor = "red";
    });
    zorz0004.addEventListener("mouseover", function () {
        this.style.backgroundColor = "blue";
    });
    zorz0004.addEventListener("mouseout", function () {
        this.removeAttribute("style");
    });
}
