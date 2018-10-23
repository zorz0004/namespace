/********************************
Filename: namespace.js
Author: Marcos Zorzi Rosa
Description: Change the behavior of the respective box of the id zorz0004 at https://maddprof1.github.io/namespace-assignment/index.html
Date: October 19, 2018
*********************************/


//---- Create variables with var  ----//
//document.addEventListener("DOMContentLoaded", init);


var ZORZ0004 = {
    init: function () {

        var e = document.createElement("div");
        e.className = "box";
        e.textContent = "zorz0004 \n SUCCESS";
        
        /**********************/
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
            e.textContent = "\n OUCH! ";
            e.style.fontWeight = "bolder";
        });

        e.addEventListener("mouseover", function () {
            e.style.backgroundColor = "cornflowerblue";
        });


        e.addEventListener("mouseout", function () {
            e.removeAttribute("style");
            /**********************/
            e.style.padding = "1rem";
            e.style.border = "0.5rem outset gray";
            e.style.backgroundColor = "white";
            e.style.margin = "0 1rem 1rem";
            e.style.width = "120px";
            e.style.height = "120px";
            e.style.float = "left";
            e.style.boxSizing = "border-box";
            /**********************/
        });
    }
}
