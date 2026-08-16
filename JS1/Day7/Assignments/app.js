// let arr = [1,13,5,6,88]

// let isIncreasing = true

// for(let i = 0; i < arr.length - 1; i++)
// {
//     if(arr[i] > arr[i + 1])
//     {
//         isIncreasing = false
//         break
//     }
// }

// if(isIncreasing == true)
// {
//     console.log("YES")
// }
// else
// {
//     console.log("NO")
// }




// let arr = [11,2,3,1,2,11]
// let key = 11

// let idx = -1

// for(let i = arr.length - 1; i >= 0; i--)
// {
//     console.log("OK")
//     if(arr[i] == key)
//     {
//         idx = i
//         break
//     }
// }

// for(let i = 0; i < arr.length; i++)
// {
//     console.log("OK")
//     if(arr[i] == key)
//     {
//         idx = i
//         // break
//     }
// }


// console.log(idx)


// let ans = [1,2,3,4]


// console.log(ans.join(" "))




// second max

let arr = [3,2,1,5,6,4]

let max = -Infinity
let sMax = -Infinity

for(let item of arr)
{
    if(item > max)
    {
        sMax = max
        max = item
    }
    else if(item < max && item > sMax)
    {
        sMax = item
    }
}

console.log(sMax)