// let arr = [1,2,3,4]
// let arr2 = ["a", "b", "c"]
// let arr3 = [true, false]
// let arr4 = [{},{}]



// let arr5 = [[],[],[]] // array of arrays, nested arrays, 2d arrays, 2d matrix



// let arr = [ [1,2,3],    [4,5,6],    [7,8,9]]
// let brr = [1,2,3,4,5,6]


// console.log(brr[4])

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])


// let nestedArr = arr[0]
// console.log(nestedArr[0])
// console.log(nestedArr[1])
// console.log(nestedArr[2])


// console.log(arr[0][0])
// console.log(arr[0][1])
// console.log(arr[0][2])



// console.log(arr[1][0])
// console.log(arr[1][1])
// console.log(arr[1][2])


// console.log(arr[2][0])
// console.log(arr[2][1])
// console.log(arr[2][2])




// let arr = [
//    [1,2,3],
//    [5,6,7,8],
//    [9,10,11,12,13],
// ]


// for(let row = 0; row < arr.length; row++)
// {
//     for(let col = 0; col < arr[row].length; col++)
//     {
//         console.log(arr[row][col])
//     }
// }


// for(let item of arr)
// {
//     for(let val of item)
//     {
//         console.log(val)
//     }
// }





// let arr = [99,11,0,23,45,1000,-1000]

// const val = Math.max(...arr)
// console.log(val)


// let arr = [
//    [100,2,3],
//    [5,6,7,8],
//    [9,10,11,12,13],
  
// ]

// console.log(Math.max(...arr.flat(Infinity)))



let arr = [

    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]

]


for(let col = 0; col < arr[0].length; col++)
{
    for(let row = 0; row < arr.length; row++)
    {
        console.log(arr[row][col])
    }
}