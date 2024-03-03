// Type Inference
let str = "String"; // string
let num = 5; // number
let array = []; // any[]
let obj = {}; // {}
let toggle = true; // boolean
let anyThing; // any

// Typing
let randomNumber: number;
const conversion = (celsius: number) => {
  return (celsius * (9 / 5)) + 32;
};
console.log(conversion(10));
