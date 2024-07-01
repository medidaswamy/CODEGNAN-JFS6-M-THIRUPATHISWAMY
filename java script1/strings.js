var a = "Thirupathi Swamy ";
var b = "  medida  ";
console.log(a[4]);

//strings methods

console.log(a.charAt(5));//it's shows the index value
console.log(a.charCodeAt(9));//ascs values shows 
console.log(a.concat(b));//combine the two values
//console.log(a.length());
console.log(a.startsWith("T"));//it's show the boolean values
console.log(a.endsWith(" "));
console.log(a.includes("S"));//it's show the boolean value
console.log(a.search("i"));//it's show the how many numbers of variables is present in the list of charecters
console.log(a.toLowerCase());
console.log(a.toUpperCase());
console.log(a.indexOf("Swamy"));
console.log(a.lastIndexOf("y"));
console.log(a.match("Swamy")[0]);//it's show the exact value it is match ends with [0]
console.log(a.replace("Thirupathi","medida"));


