// const validator = require("validator");
import isEmail from "validator/lib/isEmail";
import tripleMe from "./math.js";

console.log(tripleMe(30));
console.log(tripleMe(0));

console.log(isEmail("pain@gmail.com"));
console.log(isEmail("paingmail.com"));
console.log(isEmail("ufrie!WD@hmail.com"));

const body = document.querySelector("body");
body.innerHTML += ` <p>Hello </p> 
    <p>kill me heal me</p>`;
console.log(5 + 16);

//Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
