//........................................................DATE........................................................
//january 1, 1970 

let date = new Date()
console.log(date.toString());  // date + time
console.log(date.toDateString());  // date only 
console.log(date.toTimeString());  // time only 
console.log(date.toISOString()); // time in yy-mm-dd format 
console.log(date.toJSON()); // time in yy-mm-dd format
console.log(date.toLocaleDateString()); //in dd/mm/yy format 
console.log(date.toLocaleTimeString())  // time in 12 hour format 
console.log(typeof date);   // object 
let newDate= new Date(2023,0,24);  // months start from 0 
// let date2= new Date(2023,3,4,5,6);
let date2= new Date("2024-01-8"); // months start from 1
console.log(newDate.toDateString());
console.log(date2.toLocaleString());
