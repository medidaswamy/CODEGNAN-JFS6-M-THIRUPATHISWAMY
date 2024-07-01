function hello(){
    console.log("hello world");
}hello();
console.log("function expression");
var hello1 = function(){
    console.log("swamy");
}
hello1();
console.log("arrow");
var hello2 = ()=>{
    console.log("ntr");
}
hello2();
console.log("IIFE");
(function(){
    console.log("thirupathi");
})();
console.log("named");
var hello3 = function hello(){
    console.log("medida");
}
hello3();



//types of user functions
console.log("wp","wr");
function fun1(a,b){
    return (a*b);
}
var x = fun1(10,3);
console.log(x);
console.log("wp","wor");
function fun2(users,slices){
    var totalslices = users*slices;
    if ((totalslices%4)==0){
        console.log(totalslices/4);
    }
    else{
        console.log(parseInt(totalslices/4)+1);
    }
}
fun2(4,3);
fun2(5,4);
console.log("wop","wr");
function fun3(){
    return 10;
}
console.log(fun3());
console.log("wop","wor");
function fun4(){
    console.log("Last type of function");
}
fun4();