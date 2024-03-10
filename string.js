// string declaration 
const str= new String("Mehak Goel")
console.log(str)

//string interpolation or concatenation 
const firtsName= "Mehak"
const lastName="Goel"
console.log(`My name is ${firtsName} ${lastName} `)

// methods 
console.log(firtsName.length);
console.log(firtsName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(firtsName.charAt(2)); // checks what is present on given index
console.log(firtsName.indexOf("a")); // checks index


// slicing
console.log(firtsName.substring(-4,3));  // includes 0 but not 3 ...goes upto 2 only 
const str1= firtsName.slice(-4,4); // can include negative value/indexing 
console.log(str1);

const str2= "   hello    ";
console.log(str2);
console.log(str2.trim()); // removes whitespace and line terminators
const url = "https://hello.com/world%20!!";
console.log(url.replace('%20','-')); // replaces text
console.log(url.includes("hlo"));


// string to Array 
const string="hello my name is mehak goel";
const string2 ="hell0-my-name-is-mehak-goel";
console.log(string.split(" "));
console.log(string2.split("-"));


