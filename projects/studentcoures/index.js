var second_language;
var second_language_price = 0;
var course_name;
var course_price = 0;
var name;
var mail;
var mobile_number;
function getvalues(){
    var x = document.forms['abc']['fullname'];
    name = x.value;
    var y = document.forms['abc']['email'];
    mail = y.value;
    var z = document.forms['abc']['mobile'];
    mobile_number = z.value;
    console.log(name,mail,mobile_number);
}
function storevalue(x,y){
    second_language = x;
    second_language_price = y;
}
function coursevalue(course,price){
    course_name = course;
    course_price = price;
}
function addvalues(){
    var element = document.getElementById("container");
    element.style.display = "grid";
    var newElement = document.createElement("div");
    newElement.textContent = "NAME";
    document.getElementById("container").appendChild(newElement);
    var newElement = document.createElement("div");
    newElement.textContent = name;
    document.getElementById("container").appendChild(newElement);
    var newElement = document.createElement("div");
    newElement.textContent = "EMAIL ID";
    document.getElementById("container").appendChild(newElement);
    var newElement = document.createElement("div");
    newElement.textContent = mail;
    document.getElementById("container").appendChild(newElement);
    var newElement = document.createElement("div");
    newElement.textContent = "MOBILE NUMBER";
    document.getElementById("container").appendChild(newElement);
    var newElement = document.createElement("div");
    newElement.textContent = mobile_number;
    document.getElementById("container").appendChild(newElement);
    var newElement = document.createElement("div");
    newElement.textContent = "OPTED COURSE";
    document.getElementById("container").appendChild(newElement);
    var newElement = document.createElement("div");
    newElement.textContent = course_name;
    document.getElementById("container").appendChild(newElement);
    if(second_language){
        var newElement = document.createElement("div");
        newElement.textContent = "SECOND LANGUAGE";
        document.getElementById("container").appendChild(newElement);
        var newElement = document.createElement("div");
        newElement.textContent = second_language;
        document.getElementById("container").appendChild(newElement);
    }
    else{
        var newElement = document.createElement("div");
        newElement.textContent = "SECOND LANGUAGE";
        document.getElementById("container").appendChild(newElement);
        var newElement = document.createElement("div");
        newElement.textContent = "NOT OPTED";
        document.getElementById("container").appendChild(newElement);
    }
    var newElement = document.createElement("div");
    newElement.textContent = "TOTAL FEES";
    document.getElementById("container").appendChild(newElement);
    var newElement = document.createElement("div");
    newElement.textContent = course_price + second_language_price;
    document.getElementById("container").appendChild(newElement);
}