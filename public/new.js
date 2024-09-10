//// create a new element

let newp = document.createElement("p");

//// configure new style

newp.style.cssText = "color: blue;";

//// configure the content

newp.textContent = "Hi This is new P!";

////grab the section element on page

let sectionElement = document.querySelector("section");

//// attach the new p element before the section element 

sectionElement.parentNode.insertBefore(newp, sectionElement);