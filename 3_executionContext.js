// execution Context
// iska matalb jab bhi hum function chalanyenge function apna ek khudka ek imaginary container bana lega jisme uski 3 chize hongi\
// 1. variables
// 2. functions inside the parent function
// 3. lexical environment of that function

//yeh jo container hai, jo ki imaginary hai, ise hi hum execution container kahte hai 


//lexical envrionment hota hai ek chart jisme likha  hota hai ki appka particular function kin chizzon ko access kar sakta hai, aur kin ko nhi(scope and scope chain)

function abcd(){
    var a =12;
    console.log(b) // value of b can't be accessed by abcd() because value of b can only be accessed in def()
    function def(){
        var b =10;
        console.log(a) // value of a can be accessed by def() because value of a is defined in whole abcd()
    }
}


// parent ki chize access kar sakte hai, children ki nhi( lexical envrionment)