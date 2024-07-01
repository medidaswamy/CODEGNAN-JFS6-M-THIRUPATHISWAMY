var obj = {
    a : 12,
    b : 20,
    c : 30
}
var obj1 = new Object();
    obj1.x = 100;
    obj1.y = 200;
    obj1.z = 300;



    console.log(obj);
    console.log(obj1);
    //accessing
    console.log(obj.a);
    console.log(obj1["y"]);

    //adding
    obj.d = 40;
    console.log(obj);
    obj1["z1"] = 500;
    console.log(obj1);

    //modification
    obj.d = 70;
    console.log(obj);
    obj1["z1"] = 550;
    console.log(obj1);

    //delete

    delete obj.d;
    console.log(obj);
    delete obj1.z1;
    console.log(obj1);

    //methods

    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    console.log(Object.entries(obj));


