// let n = 3




// for(let row = 1; row <= n; row++)
// {

//     let str = ""
    
//     for(let i = 1; i <= n; i++)
//     {
//         // console.log("*")
//         str += "* "
//     }

//     console.log(str)



// }

// let n = 7



// for(let i = 1; i <= n; i++)
// {

//     let str = ""
    
//     for(let j = 1; j <= n; j++)
//     {
//         // console.log("*")
//         // str += "* "
//         // str += i + " " // row wise
//         str += j + " " // column wise
//     }

//     console.log(str)



// }





// let n = 3


// let count = 1
// for(let i = 1; i <= n; i++)
// {

//     let str = ""
    
//     for(let j = 1; j <= n; j++)
//     {
//         // str += "* "
//         // str += i + " "
//         // str += j + " "
//         str += count + " "

//         count++
//     }

//     console.log(str)



// }


//ascii
// let str = "abcdefghijklmnopqrstuvwxyz"
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// str.charCodeAt(0)

// for(let item of str) // a -> b -> c
// {
//     console.log(item.charCodeAt())// GET ASCII FROM GIVEN CHARACTER
// }



// let ascii = 122
// console.log(String.fromCharCode(ascii))



// for(let i = 1; i <= 127; i++)
// {
//     console.log(i, String.fromCharCode(i))
// }



// let n = 6
// let count = 1
// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= n; j++)
//     {
//         // str += "* "
//         // str += String.fromCharCode(64 + i) + " "
//         // str += String.fromCharCode(64 + j) + " "
//         str += String.fromCharCode(count + 64) + " "
//         count++
//     }

//     console.log(str)
// }


let n = 4


for(let row = 1; row <= n; row++)
{
    let str = ""

    for(let col = 1; col <= n; col++)
    {
        if(row == 1 || row == n || col == 1 || col == n)
        {
            str += "* "
        }
        else
        {
            str += "  "
        }
    }

    console.log(str)
}