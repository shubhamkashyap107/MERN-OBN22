// let obj = {
//     naam : "SK",
//     age : 32,
//     isPresent : true,
//     colors : ["Blue", "White"],
//     address : {
//         city : "Delhi",
//         country : "India",
//     },
//     sayHello : () => {
//         console.log("Hello")
//     }
// }

// access values from an object

// dot operator
// console.log(obj.age)
// console.log(obj.colors[1])
// console.log(obj.address.country)
// console.log(obj.sayHello())
// console.log(obj.kuchbhi)



// bracket notation
// console.log(obj["naam"])


// let keyName = "age"
// console.log(obj[keyName])

// console.log(obj["colors"][1])
// console.log(obj["address"].city)
// console.log(obj["address"]["city"])
// obj["sayHello"]()


// destructuring -> objects, arrays

// let{ naam, age, isPresent, ok } = obj
// console.log(naam)
// console.log(age)
// console.log(isPresent)
// console.log(ok)


// let arr = [1,2,3,4,5]

// const[a,b,c,d,e,f] = arr


// console.log(a,b,c,d,e,f)




// let obj = {}
// // how to add properties in an object

// obj.sample = 22
// obj["demo"] = false
// obj.ok = undefined
// console.log(obj)



// // how to delete
// delete obj.sample
// delete obj["ok"]
// console.log(obj)



let obj = {
    naam : "SK",
    age : 32,
    isPresent : true,
    colors : ["Blue", "White"],
    address : {
        city : "Delhi",
        country : "India",
    },
    sayHello : () => {
        console.log("Hello")
    }
}

for(let item in obj)
{
    // console.log(obj.item)
    // console.log(obj["item"])
    console.log(obj[item])
    // console.log("key :", item, "value :", obj[item])
}