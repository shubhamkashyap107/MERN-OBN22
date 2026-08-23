// let arr = [1,2,3,4,5]
// let arr2 = arr

// console.log(arr)
// console.log(arr2)

// arr2.push(39)

// console.log(arr)
// console.log(arr2)



// let obj = {
//     name : "Shubham",
//     age : 16
// }

// let obj2 = obj

// console.log(obj)
// console.log(obj2)

// obj.name = "D"


// console.log(obj)
// console.log(obj2)




// let arr = [1,2,3,4,5]
// let obj = {
//     na : "s",
//     ag : "12"
// }

// //... -> spread operator / rest operator


// // let arr2 = arr
// let arr2 = [...arr]

// // let obj2 = obj
// let obj2 = {...obj}


// arr2.push(6)
// obj2.na = "D"



// console.log(arr)
// console.log(arr2)
// console.log(obj)
// console.log(obj2)




// let person1 = {
//     naam : "Alex",
//     age : 22,
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     cars : ["BMW", "Alto"]
// }


// let person2 = {...person1}
// let person2 = structuredClone(person1)
// let str = JSON.stringify(person1)
// let person2 = JSON.parse(str)


// person2.naam = "Dustin"
// person2.cars.push("Ferrari")
// person2.address.city  = "Pune"


// console.log(person1)
// console.log(person2)


// let arr = [1,2,3,4]

// let obj = {
//     name : "S",
//     age : 22
// }


// const jsonArr = JSON.stringify(arr)
// const jsonObj = JSON.stringify(obj)


// const val = JSON.parse(jsonArr)
// console.log(val)
// console.log(val[3])


// const val2 = JSON.parse(jsonObj)
// console.log(obj)
// console.log(obj.name)


// console.log(arr)
// console.log(typeof jsonArr)

// console.log(obj)
// console.log(typeof jsonObj)




let person1 = {
    naam : "Alex",
    age : 22,
    address : {
        city : "Delhi",
        country : "India"
    },
    cars : ["BMW", "Alto"],
    sayHi : () => {
        console.log("Hello")
    }
}


// let person2 = structuredClone(person1) // error
let str = JSON.stringify(person1) // no error, but function wont be copied
let person2 = JSON.parse(str)

console.log(person1)
console.log(person2)