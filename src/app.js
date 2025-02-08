import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excusaRandom(array) {
  let arrayRandom = Math.floor(Math.random() * array.length)
  return array[arrayRandom]
}


window.onload = function() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying']
  
  let whoRandom = excusaRandom(who)
  console.log(whoRandom)
  let actionRandom = excusaRandom(action)
  console.log(actionRandom)
  let whatRandom = excusaRandom(what)
  console.log(whatRandom)
  let whenRandom = excusaRandom(when)
  console.log(whenRandom)
  let excuse = whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom;
  document.getElementById("excuse").innerText = excuse;

  console.log("Hello Rigo from the console!");
};
