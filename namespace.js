/********************************
Filename: namespace.js
Author: Marcos Zorzi Rosa
Description: Change the behavior of the respective box of the id zorz0004 at https://maddprof1.github.io/namespace-assignment/index.html
Date: October 19, 2018
*********************************/


//---- Create variables with var  ----//
//document.addEventListener("DOMContentLoaded", init);


var ZORZ0004 = { init: function() {

    var e = document.createElement("div");
    e.className = "box";
    e.textContent = "zorz0004";
    
//    e.style.padding = "1rem";
//    e.style.border =  "0.5rem solid #d4d4d4";
//    e.style.backgroundColor =  "#e9e9e9";
//    e.style.margin = "0 1rem 1rem";
//    e.style.width = "120px";
//    e.style.height = "120px";
//    e.style.float = "left";
//    e.style.boxSizing = "border-box";
    
    
    e.getElementById("boxes").appendChild(e);

    
    
    e.addEventListener("click", function () {
        this.style.borderColor = "red";
    });
    e.addEventListener("mouseover", function () {
        this.style.backgroundColor = "blue";
    });
    e.addEventListener("mouseout", function () {
        this.removeAttribute("style");
    });
}};


