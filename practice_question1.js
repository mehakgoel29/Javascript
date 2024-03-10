// type conversion 
let str= "123"
let num = Number(str);
console.log(typeof num);

let num1=5;
let str1= String(num1);
console.log(typeof str1);

let bool= true;
let num2= Number(bool);
console.log(typeof num2);

// string manipulation 
let a= "Hello ";
let b= "World";
// let c= a+b;
// console.log(c);
console.log(`${a} ${b}`);


let str2= "javascript"
console.log(str2.length);

let str3="hello world"
console.log(str3.slice(6));

// datatype 
let x=10 
console.log(typeof x)

let y = "Hello";
console.log(typeof y); 

// type checking 
let u= typeof "123"
if (u=="string"){
    console.log("it is a string");
}

let v = typeof 10 
if (v=="number"){
    console.log("it is a number")
}

let d= typeof true
if (d=="boolean"){
    console.log("it is a boolean")
}

// type conversion 
let ex="5"+2
console.log(ex)   // 52

let ex2 = "10"==10  // == checks value only 
console.log(ex2)

let ex3 = "10"===10 // === checks datatype also 
console.log(ex3)

