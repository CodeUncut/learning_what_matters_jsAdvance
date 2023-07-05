// -- how arrays are made behind the scenes
// --how we can make negative indexes in js

arr = [14,12,5653,24]

// typeof array in js is object
// and typeof object in js is object
// arr[-5] = 5

arr = {
    0:14,
    1:12,
    2:5653,
    3:24
}

// Array.isArray([])
// true
// Array.isArray({})
// false