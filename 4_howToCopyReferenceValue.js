// to copy refernce values use spread operator

// var a = [1,2,3,4,5,6,7,8]
// var b = a;

// b.pop();

var a = [1,2,3,4,5,6,7,8]
var b =[...a]; //using spread operator to copy values of a

b.pop();

// we can copy objects in the same way

var obj = {name:"Vaibhav"}
var copyobj = {...obj}