// -- the difference var let const
// -- the window obect

// 1. es5 - var (old)
// 2. var function scoped hota hai => var apne parent function mein kahi bhi use ho sakta hai 
// 3. var adds itself to the window object



// function abcd(){
//     for(var i=1; i<12;i++){
//         console.log(i)
//     }
//     console.log(i)
// }
// abcd(); // this function will print from 1 to 12

// function abcd(){
//     for(let i =1; i<12;i++){
//         console.log(i)
//     }
//     console.log(i)
// }

// abcd();

var a= 12; // when we write window in console of browser, var adds itself to the window, and we see a and its value there
const b = 123; // let const doesn't adds itself to the window

// alert, prompt , console.log is not a part of JS

// 1. es6- let const (new)
//2. let const braces scoped hota hai
// 3. let const doesn't adds 

// JS mein kai sare features hai jo hum use karte hai aur kuch features hum use karte hai jo js mein nhi hai vo hum use kar pate hai kyuki, vo features js language window se le leti hai, window ek box of features hai which is given by browser to use with js