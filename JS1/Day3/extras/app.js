// precedence

// console.log(1 + 6 * 9 - 10)
// console.log((1 + 6) * 9 - 10)

// i = 65
// console.log(1 + ++i)
// console.log(1 + i++)


// console.log(2 ** 4 / 2 - 7)


// math object


// var i = 121;

// var ans = Math.sqrt(i)
// console.log(i)
// console.log(Math.sqrt(i))
// console.log(ans)

// console.log(Math.pow(3,3))

// var i = 121123123;
// console.log(Math.floor(9.8723654872364))
// console.log(Math.round(9.8723654872364))
// console.log(Math.ceil(Math.log10(i)))

// console.log(Math.random())
// console.log(parseInt(Math.random() * 10))

// console.log(Math.floor(Math.random() * 6) + 1) // dice logic
// console.log(Math.ceil(Math.random() * 6)) // dice logic
// console.log(Math.PI) // give value of PI
// console.log(Math.abs(2))
// console.log(Math.abs(-2)) // removes - sign
// console.log(Math.max(2,5))
// console.log(Math.max(2,5,23,6,2,1,89,-10))
// console.log(Math.min(2,5,23,6,2,1,89,-10))
// console.log(Math.trunc(3.123455)) // returns integer part



// null vs undefined

// var age;
// console.log(age)



// var age2 = null;
// console.log(age2)




// short circuiting


// 10 > 99 && console.log("Hello world")
// 10 < 99 && console.log("Hello world")


// 10 > 99 || console.log("Hello 2")
// 10 < 99 || console.log("Hello 2")


// var age = 6
// age > 18 && console.log("Adult")


// true && console.log("ONE")
// false && console.log("TWO")
// true || console.log("THREE")
// false || console.log("FOUR")






// if(age > 18)console.log("Adult")
// if(age > 18)
//     console.log("Adult")



// ternary operator

var n = 8
n % 2 == 0 ? console.log("Even") : console.log("Odd");


var age = 71
age >= 18 ? console.log("Adult") : console.log("Child")


var marks = 101

marks >= 90 && marks <= 100 ? console.log("A") : 
marks >= 80 && marks <= 89 ? console.log("B") : 
marks >= 70 && marks <= 79 ? console.log("C") : 
marks >= 0 && marks <= 69 ? console.log("Fail") : 
console.log("Invalid Marks")


var n = 0


n == 0 ? console.log("Zero") : 
n < 0 ? (
    n % 2 == 0 ? console.log("-ve, Even") : console.log("-ve, Odd")
) : (
    n % 2 == 0 ? console.log("+ve, Even") : console.log("+ve, Odd")
)