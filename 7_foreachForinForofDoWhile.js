// foreach forin do-while

// foreach loop sirf array per lagta hai, matlab jab bhi array ki baat hogi usme foreach use karsakte hai

var arr = [1,2,3,545,4,5,6,7,8,9]
arr.forEach(function(val){
    console.log(val-5)
})

// forEach kabhi bhi array ki  original value me change nhi karta, vo array ki jo value copy hui hai val mein usme change karta hai


//** object per loop karne ke liye forin loop use hota hai */

var obj ={
    name:"Vaibhav",
    age: 245,
    city: "Shajapur"
}

for(var key in obj){
    console.log(key, obj[key])
}

///** do-while loop */

var a = 102;
do{
    console.log(a);
    a++;
    
}while(a<15)