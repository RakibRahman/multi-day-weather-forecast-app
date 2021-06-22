// const validator = require("validator");
import isEmail from "validator/lib/isEmail";
import Calculator from "./math.js";
import AddImg from "./add-img.js";
import Person from "./class";
import './../css/style.css';
console.log(Calculator.add(5,6));
console.log(Calculator.sub(105,6));
console.log(Calculator.multiply(5,6));
console.log(Calculator.divide(15,5));

console.log('---');

console.log(isEmail("pain@gmail.com"));
console.log(isEmail("paingmail.com"));
console.log(isEmail("ufrie!WD@hmail.com"));

const body = document.querySelector("body");
body.innerHTML += ` <p>Hello </p> 
    <p>kill me heal me</p>`;
console.log('add',1.5 + 16);


body.style.background="green";
body.style.color="white";

//img
AddImg();

//class

const rakib = new Person('Rakib',20);
console.log(rakib.init());


//Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
