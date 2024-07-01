
//while (x = 5){
   // console.log(x++);
   // x--;

//}
for(var x = 5; x>0;x--){
    console.log(x);
}
var x = 10;
while (x>0){
    console.log(x);
    x--;
}
var x =0;
do{
    console.log(x);
    x++;
}while(x<10)
    //
console.log("for loop");
var x = {
    a: 10,
    b:20,
    c:30

}
for(xx in x){
    console.log(x[xx]+' :' +xx);
}
console.log("for of loop");
var x =["asd","asdfs","fefef"]
for(xx of x){
    console.log(xx);
}
var a = 10;
var b = 20;
var c = 30;
if (a>b){
    console.log("a is a greater");
}
else if (c>b){
    console.log("c is a greater");
}
else if (b>c){
    console.log("b is a greater");
}
else{
    console.log('b is a greater');
}