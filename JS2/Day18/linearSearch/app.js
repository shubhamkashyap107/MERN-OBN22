function linearSearchBoolean(arr, target) // includes
{
    for(let item of arr)
    {
        // console.log("Loop chala")
        if(item == target)
        {
            return true     
        }
    }
    return false
}

// console.log(linearSearchBoolean([8,1,6,2,3,-10], 6))







function linearSearchFirstIndex(arr, target)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == target)
        {
            return i
        }
    }

    return -1

}

// console.log(linearSearchFirstIndex([2,2,3,4,5,1,2,3], 2))



function linearSearchLastIndex(arr, target)
{
   for(let i = arr.length - 1; i >= 0; i--)
   {
    console.log("Loop")
    if(arr[i] == target)
    {
        return i
    }
   }

   return -1
}
// console.log(linearSearchLastIndex([11,1,2,3,4,1,2,3,1,2,1], 11))


let arr = [
    {
        name : "A",
        age : 23
    },
    {
        name : "B",
        age : 12
    },
    {
        name : "C",
        age : 21
    },
    {
        name : "D",
        age : 22
    },
]

for(let item of arr)
{
    if(item.age == 21)
    {
        console.log(item.name)
    }
}