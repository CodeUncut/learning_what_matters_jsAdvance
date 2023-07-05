//callback functions - jab complete ho jaye

//jab koi code baad me chalta hai aur js ko pata nhi ki vo complete hua ki nhi, us code ko baad me chalane ke liye jab vo complete ho jaya hai, yeh js ko batane ke liye ki vo complete ho gaya hai, hum callback function use karte hai

//for example getting name/photo from the facebook(3rd party)

setTimeout(function(){
    console.log("Vaibhav Saxena")
}, 10000)
// 10000 is in mili second
//ise hum asynronous js bhi kahate hai


// aisa code jo baad me chalta hai use hum ek function dete hai ke bhaiya jab tum complete ho jao yeh function chala dena, aur jo function dete hai vo ek normal function hi hota hai use hum kahate hai callback function 