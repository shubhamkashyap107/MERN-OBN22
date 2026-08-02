function sayHello(name, age = 0, city = "Noida") // function declaration : DRY (Don't repeat yourself)
{
    console.log("Hello", name)
    console.log("age", age)
    console.log("city", city)
}


// function sayHello()
// {
//     console.log("OK")
// }


// sayHello("Shubham", 10, "Delhi")
// sayHello("Hritik", 11)
// sayHello("Aman", "Gurgaon")


function sum(a = 0, b = 0)
{
    // console.log(a + b)

    // var c = a + b
    // return c
    // break -> illegal
    return a + b

    console.log("Kuch Kaam")
}


// console.log(sum())
// console.log(sum(23,5))
// console.log(sum(231,5))
// console.log(sum(19, 87))
// console.log(console.log(console.log()))
// console.log(Math.pow(2,3)) 



// functional expressions


var myFunction = function (name)
{
    return "Hello my name is" + name
}

// console.log(introduce("Shubham"))
// // introduce("Aman")
// console.log(myFunction("Aman"))

// let str = myFunction("Swati")
// console.log(str)






// arrow functions

// var sayHi = (name) => {
//     // console.log("Hi", name)
//     return "HI, " + name
// }

// var str = sayHi("Gabbar")
// console.log(str)

// console.log(sayHi("Gabbar"))




// var sum = (a = 0, b = 0) => {
//     // console.log(a + b)
//     return a + b
// }

// console.log(sum(5,6))


var sayHello = naam =>  "Hello" + naam


// sayHello("SK")
console.log(sayHello("Shubham"))



console.log("Hello \n world") // escaping character
console.log("Hello\tworld")

a = 1
b = 2
c = 3


console.log(`${a + b + c}\n${a * b - c}`)