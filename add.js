let newLi = document.createElement("li");


newLi.style.cssText = "color: blue;";
newLi.textContent = "Helps improve blood circulation";

const placer = document.querySelector(".benefits-list");
let lebron = placer.childNodes[7];
lebron.parentNode.insertBefore(newLi, lebron);