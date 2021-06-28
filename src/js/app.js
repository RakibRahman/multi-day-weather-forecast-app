// const validator = require("validator");
import isEmail from "validator/lib/isEmail";
import Calculator from "./math.js";
import AddImg from "./add-img.js";
import Person from "./class";
import Render from "./modules/render.js";
import "./../css/style.css";
console.log(Calculator.add(5, 6));
console.log(Calculator.sub(105, 6));
console.log(Calculator.multiply(5, 6));
console.log(Calculator.divide(15, 5));

console.log("---");

console.log(isEmail("pain@gmail.com"));
console.log(isEmail("paingmail.com"));
console.log(isEmail("ufrie!WD@hmail.com"));

const body = document.querySelector("body");
body.innerHTML += ` <p>Hello learner</p> 
    <h1>kill me heal me</h1>`;
console.log("add", 11.5 + 16.5);

body.style.background = "green";
body.style.color = "white";

//img
AddImg();

//class

const rakib = new Person("Rakib", 25);
const rakin = new Person("Rakin", 2);
console.log(rakib.init());
console.log(rakin.init());

//Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

console.log(Render());
var a = ["html", "dog", "dog"];
a[100] = "fox";
console.log(a.length);

const [n] = a;
console.log(n);

// check webpack mode
if (process.env.NODE_ENV === "production") {
  console.log("Production Mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development Mode");
} else {
  console.log("None");
}
