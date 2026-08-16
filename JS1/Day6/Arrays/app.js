// let arr = [1,0,2,9,3,8]


// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])


// console.log(arr.length)

// methods

// let arr = [1,2,3,4, "tom", true, () => {}, [], null, undefined]
// let arr = [1,2,3,4]

// let lstVal = arr.pop() // destructive
// console.log(lstVal)

// let newLenght = arr.push(99,100,101,102) 
// console.log(arr, newLenght)

// let val = arr.shift()
// console.log(arr)
// console.log(val)

// let newLen = arr.unshift(-1,-2,-3)
// console.log(arr, newLen)


// let arr = [1,2,3,4,5,6,7,8,9]

// arr.reverse()
// arr.slice() // returns whole array
// arr.slice(6) // returns everything from start point
// arr.slice(6,8) // returns everything from start to end - 1

// console.log(arr.splice(3))
// console.log(arr.splice(3, 2))
// console.log(arr)


// console.log(arr.includes(99))
// console.log(arr.concat([11,12,13,15]))
// console.log(arr.join("->"))

// let arr = [1,2,3,4,5] // length -> 5 , start => 0, end => 4

// for(let i = 1; i <= arr.length; i++)
// {
//     console.log(arr[i])
// }







let arr = [1,2,3,4,5,6]

// for(let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i])
// }

// for(let item of arr)
// {
//     console.log(item)
// }

// let i = 0
// while(i < arr.length)
// {
//     console.log(arr[i])
//     i++
// }


// let sum = 0
let evenSum = 0
let oddSum = 0

for(let i = 0; i < arr.length; i++)
{
    // sum += arr[i]
    if(arr[i] % 2 == 0)
    {
        evenSum += arr[i]
    }
    else{
        oddSum += arr[i]
    }
}

// console.log(sum)
console.log(evenSum)
console.log(oddSum)




let arr2 = [1,2,3,4,5,6]

for(let i = arr2.length - 1; i >= 0; i--)
{
    console.log(arr2[i])
}

for(let i = 0; i < arr2.length; i++)
{
    console.log(arr2[arr.length - i - 1])
}


let arr3 = [-10,-10,-32,-3,-32]