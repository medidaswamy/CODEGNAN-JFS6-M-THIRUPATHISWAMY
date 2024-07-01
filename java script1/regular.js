//This is a pattren  to know the values are present /s.*/img
var x = /T.*y/gmi;
console.log(x.global);
console.log(x.test("Thirupathi swamy"));
console.log(x.exec("Thirupathi swamy"));


var y = "Swamy";
console.log(y.search(/s.*y/i));//in this value starting index value will show 
console.log(y.search(/s.*y/igm));
var z = "abx Abx abx";
console.log(z.match(/abx/ig));// In this shows the matching variables

console.log(z.replace(/abx/gi,"ntr"));//In this we can change the variable names