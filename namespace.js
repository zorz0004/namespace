/********************************
Filename: namespace.js
Author: Marcos Zorzi Rosa
Description: Change the behavior of the respective box of the id zorz0004 at https://maddprof1.github.io/namespace-assignment/index.html
Date: October 19, 2018
*********************************/

var ZORZ0004 = {
    init: function () {

        var e = document.createElement("div");
        e.className = "box";
        e.textContent = "zorz0004 \n SUCCESS";
        
        /******* Decoration *******/
        e.style.padding = "1rem";
        e.style.border = "0.5rem outset gray";
        e.style.backgroundColor = "white";
        e.style.margin = "0 1rem 1rem";
        e.style.width = "120px";
        e.style.height = "120px";
        e.style.float = "left";
        e.style.boxSizing = "border-box";
        /**********************/

        document.getElementById("boxes").appendChild(e);

        e.addEventListener("click", function () {
            e.style.backgroundColor = "red";
            e.style.border = "0.5rem outset cornflowerblue";
           // e.textContent = "\n OUCH! ";
            e.style.fontWeight = "bolder";
        });

        e.addEventListener("mouseover", function () {
            e.target.classList.toggle("highlight");
           /* e.style.backgroundColor = "cornflowerblue";
            e.style.border = "0.5rem outset red";*/
        });


        e.addEventListener("mouseout", function () {
            e.removeAttribute("style");
            e.target.classList.toggle("highlight");
            /***** Restore decoration *********/
            e.style.padding = "1rem";
            e.style.border = "0.5rem outset gray";
            e.style.backgroundColor = "white";
            e.style.margin = "0 1rem 1rem";
            e.style.width = "120px";
            e.style.height = "120px";
            e.style.float = "left";
            e.style.boxSizing = "border-box";
            e.textContent = "zorz0004 \n SUCCESS";
            /**********************/
        });
    }
}
