// Calculator module

//Add-function
function add(num1, num2) {
    return num1 + num2;
}
//Sub-function
function sub(num1, num2) {
    return num1 - num2;
}
//Mul-function
function mul(num1, num2) {
    return num1 * num2;
}
//Div-function
function div(num1, num2) {
    return num1 / num2;
}
//Sq-function
function sq(num){
    return num * num;
}

// CommonJS Module
module.exports = {
    add, sub, mul, div, sq
};

//Import / Export  module using ES Modules.
//1. Package.json
//2. use the .mjs extension on module
// export function
// import {func} from "./Calculator.js";