let obj = [10,20,30,40,50,60,70,80,];
let obj1 = ["a","b","c","d"];
console.log(obj);
console.log(obj1);
//accessing
console.log(obj[5]);
//modificaion
obj[5] = 55;
console.log(obj);
//array functions
//push
obj.push("swamy");
console.log(obj);
//pop
obj.pop();
console.log(obj);
//unshift
obj.unshift("ntr");
console.log(obj);
//shift
obj.shift();
console.log(obj);
//slice to define start and end values
console.log(obj.slice(2,5));
//concat
let x = obj.concat(obj1);
let y = obj1.concat(obj);
console.log(x);
console.log(y);
//join it give the space b/t variables
console.log(obj1.join(" # "));
//indexOf to identify the index number
console.log(obj.indexOf(80));
//foreach to show the parallel values to vertical 
obj.forEach(function(a){
    console.log(a);
})
//map to add the value for each variables in the array //to take the new array
let z = obj.map(function(b){
    return b+11;
});
console.log(z);
//filter to find the even or odd numders 
let x1 = obj.filter(function(a){
    return a%3==0;
});
console.log(x1);
//reduce
let b1 = obj.reduce(function(accumulator,cv){
    return accumulator+cv;
},0);
console.log(b1);


