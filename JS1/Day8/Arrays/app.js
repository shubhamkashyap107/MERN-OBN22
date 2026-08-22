// swapping





// extra variable

// let a = 10
// let b = 20

// console.log(a, b)

// let temp = a
// a = b
// b = temp

// console.log(a, b)












// without extra variable

// let a = 11
// let b = 12

// console.log(a,b)

// a = a + b
// b = a - b
// a = a - b

// console.log(a,b)












// reversing an array



// making an extra array
// let arr = [1,2,3] // 2gb
// let ans = [] 

// for(let i = arr.length - 1; i >= 0; i--)
// {
//     ans.push(arr[i])
// }

// console.log(ans)












// wihtout extra space(two pointer)


// let arr = [1,2,3,4,5,6,7,8]

// let s = 0
// let e = arr.length - 1

// while(s < e)
// {
//     let temp = arr[s]
//     arr[s] = arr[e]
//     arr[e] = temp
//     s++
//     e--
// }


// console.log(arr)




// slice method


// let arr = [1,2,3,4,5,6]



// const val1 = arr.splice(3) // start, end ❌ -> start, deleteCount ✅
// const val2 = arr.splice(2, 2) 
// const val3 = arr.splice(1, 3, -11,-12,-13,-14)
// const val4 = arr.splice(2,0, 100,101,102)

// console.log(val4)
// console.log(arr)
















// console.log(arr.indexOf(66))
// console.log(arr.slice(2)) // start
// console.log(arr.slice(2, 5)) // start, end(not included)
// console.log(arr.slice(-3))
// console.log(arr.slice(-3,-1))
// console.log(arr.slice(5,1))
// console.log(arr.slice(-3,-6))
// console.log(arr.slice(-6, 5))


// console.log(arr.pop())
// console.log(arr.shift())

// console.log(arr.unshift(0))
// console.log(arr.push(7))



// console.log(arr[100]) // java -> index out of bounds error
// console.log(arr[-1]) // java -> index out of bounds error






// flat method


// let arr = [1,2,3,"ok", true, function(){}, null ,undefined, [], []]

// 2d arrays / matrix

let arr = [[1,2,3, [4,5,6, [7,8,9, [10]]]], [11,12,13], [21,22,23]]


const nArr = arr.flat(Infinity)

console.log(arr)
console.log(nArr)










// console.log(arr[0][0])
// console.log(arr[0][1])
// console.log(arr[0][2])

// console.log(arr[1][0])
// console.log(arr[1][1])
// console.log(arr[1][2])


// console.log(arr[2][0])
// console.log(arr[2][1])
// console.log(arr[2][2])


// let firstArray = arr[0]
// console.log(firstArray[0])
// console.log(firstArray[1])
// console.log(firstArray[2])