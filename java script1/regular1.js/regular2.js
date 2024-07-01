var pattren = /\d/g;// It shows the only integers
var x = "the price is 25 rupees";
var y = x.match(pattren);
console.log(y);

var pattren = /\D/g;//It shows the only alphabetics
var x = "the price is 25 rupees";
var y = x.match(pattren);
console.log(y);

var pattren = /\s/g;//It shows the only spaces
var x = "the price is 25 rupees";
var y = x.match(pattren);
console.log(y);

var pattren = /\S/g;//In this it will shows the all the numaric and alphabetic but dont show the spaces
var x = "the price is 25 rupees";
var y = x.match(pattren);
console.log(y);

var pattren = /\w/g;//In this it will shows the _ values also
var x = "the price is 25_rupees";
var y = x.match(pattren);
console.log(y);

var pattren = /\W/g;//In this it will shows the _ and symbols
var x = "the price is 25_rupees$#%";
var y = x.match(pattren);
console.log(y);

var pattren = /\bcat/g;//In this it will show the how many times one word is repeat it there in variable
var x = "the cat weat hpt hat cat hat";
var y = x.match(pattren);
console.log(y);

var pattren = /h.t/g;
var x = "the cat wear hot hat";
var y = x.match(pattren);
console.log(y);

var pattren = /h.*t/g;
var x = "the cat wear hot hat";
var y = x.match(pattren);
console.log(y);

var pattren = /^the/g;//statr with
var x = "the cat wear hot hat";
var y = x.match(pattren);
console.log(y);

var pattren = /hat$/g;//ends with
var x = "the cat wear hot hat";
var y = x.match(pattren);
console.log(y);

var pattren = /ha+t/g;
var x = "the cat wear hot haat";
var y = x.match(pattren);
console.log(y);

var pattren = /ha*t/g;
var x = "the cat wear hot hat";
var y = x.match(pattren);
console.log(y);

var pattren = /hat?/g;
var x = "the cat wear hot hat";
var y = x.match(pattren);
console.log(y);

var pattren = /\d{2}:\d{2}/g;//In this we can set the limit values in integers
var x = "the cat wear hot hat at 10:25";
var y = x.match(pattren);
console.log(y);

var pattren = /[cw]at/g;
var x = "the cat weat hot hat";
var y = x.match(pattren);
console.log(y);

var pattren = /cat|hot|hat/g;
var x = "the cat weat hot hat";
var y = x.match(pattren);
console.log(y);