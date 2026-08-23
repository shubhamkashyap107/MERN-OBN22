let obj = {
    name : "S",
    age : 22,
    city : "Delhi"
}

// Object.freeze(obj)

// obj.name = "D"
// delete obj.age
// obj.country = "India"


// Object.seal(obj)

// obj.age = 32
// delete obj.name
// obj.country = "India"


Object.preventExtensions(obj)

obj.name = "D"
delete obj.age
obj.country = "India"


console.log(obj)
