/********************************
Filename: namespace.js
Author: Marcos Zorzi Rosa
Description: Change the behavior of the respective box of the id zorz0004 at https://maddprof1.github.io/namespace-assignment/index.html
Date: October 19, 2018
*********************************/



/*---- Create variables with var  ----*/
document.addEventListener("DOMContentLoaded", init);


var zorz0004 = function init() {
    
    zorz0004 = document.createElement("div");
    zorz0004.className = "box";
    zorz0004.textContent = "zorz0004's Prety square.";
    document.getElementById("boxes").appendChild(zorz0004);
    
    zorz0004.addEventListener("click", function(){
                                this.style.borderColor = "red";
                              });
    zorz0004.addEventListener("mouseover", function(){
        this.style.backgroundColor = "blue";
    });
    zorz0004.addEventListener("mouseout", function(){
        this.target.removeAttribute("style");
    });
}
  
    
    
    
    
/*
    document.addEventListener("DOMContentLoaded", init);

function init() {

    let newCircleSection = document.createElement("section");
    newCircleSection.className = "circle";
    newCircleSection.textContent = "A Circle";
    // append the new element to the parent element with the id "circles"
    let circles = document.getElementById("circles");
    circles.appendChild(newCircleSection);
   
    // add some event listeners:

    newCircleSection.addEventListener("click", circleClick);
    newCircleSection.addEventListener("mouseover", mouseOver);
    newCircleSection.addEventListener("mouseout", mouseOut);
}


function circleClick() {
    this.style.borderColor = "blue";
    this.style.backgroundColor = "aqua";
    console.log(this);
}

function mouseOver(e) {
    e.target.classList.toggle("focus");
    console.log(e);
    console.log(e.target);
}

function mouseOut(e) {
    e.target.classList.toggle("focus");
    e.target.removeAttribute('style'); // remove any style added by the click event
    console.log(e);
    console.log(e.target);
}

