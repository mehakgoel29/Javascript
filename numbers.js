// .....................................NUMBER............................................
const score = 200 
console.log(score);
const balance = new Number(100.23)
console.log(balance);

let bal=balance.toString().length  // toString convert to string
console.log(bal);
console.log(balance.toFixed(5));   // 5 represent upto how much decimal you want precision

const otherno= 23.67
console.log(otherno.toPrecision(2));

const hundreds= 1000000
console.log(hundreds.toLocaleString('en-IN')); // convert a date and time to a string using the locale settings.

console.log(Number.MAX_SAFE_INTEGER) // can store maximum this value 
console.log(Number.MAX_VALUE)   // max value of number in js 
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE) // min value of number in js
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.EPSILON)


//.......................................MATHS.................................................

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2)) // takes higher no 
console.log(Math.floor(4.2)) // takes lower no. 
console.log(Math.min(1,2,34,5)) // gives min no. 
console.log(Math.max(1,2,34,5))  // gives highest value
console.log(Math.random())  // gen no. between 0 and 1 
console.log(Math.random()*10)
console.log(Math.random()*10+1) //gen no. from 1  
console.log(Math.floor(Math.random()))

const min =10 
const max= 20 

console.log(Math.floor(Math.random()*(max-min+1)) + min)


