// let l = 3
// let b = 4

// * * * *
// * * * *
// * * * *


// 1 1 1 1 
// 2 2 2 2
// 3 3 3 3


// 1 2 3 4
// 1 2 3 4
// 1 2 3 4


// 1 2 3 4
// 5 6 7 8
// 9 10 11 12

// let l = 3
// let b = 4

// let count = 1
// for(let row = 1; row <= l; row++)
// {
//     let str = ""

//     for(let col = 1; col <= b; col++)
//     {
//         // str += "* "
//         // str += row + " "
//         // str += col + " "
//         str += count + " "
//         count++
//     }

//     console.log(str)
// }




// let n = 9

// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let col = 1; col <= n; col++)
//     {
//         if(row == 1 || col == 1 || row == n || col == n || row == col || col == n - row + 1)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }

//     }

//     console.log(str)
// }


// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *



// let l = 4
// let b = 7

// for(let i = 1; i <= l; i++)
// {
//     let str = ""

//     for(let j = 1; j <= b; j++)
//     {
//         if(i == 1 || i == l || j == 1 || j == b )
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     console.log(str)
// }


// right angled triangle


// let n = 5

// *
// * *
// * * * 
// * * * *

// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let col = 1; col <= row; col++)
//     {
//         str += "* "
//     }

//     console.log(str)
// }

// 1
// 2 2
// 3 3 3 

// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let col = 1; col <= row; col++)
//     {
//         // str += "* "
//         str += row + " "
//     }

//     console.log(str)
// }

// 1
// 1 2
// 1 2 3
// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let col = 1; col <= row; col++)
//     {
//         // str += "* "
//         str += col + " "
//     }

//     console.log(str)
// }

// // 1
// // 2 3
// // 4 5 6
// let count = 1
// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let col = 1; col <= row; col++)
//     {
//         // str += "* "
//         str += count + " "
//         count++
//     }

//     console.log(str)
// }



// let n = 8

// *
// * *
// * * * 
// * * * *

// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let col = 1; col <= row; col++)
//     {
//         if(row == n || col == 1 || row == col)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     console.log(str)
// }


// let n = 5
// let stars = n


// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let col = 1; col <= stars; col++)
//     {
//         if(row == 1 || col == 1 || col == stars)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     stars--
//     console.log(str)
// }

// * * * * *
// * * * * 
// * * * 
// * *
// * 


// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let col = 1; col <= n - row + 1; col++)
//     {
//         str += "* "
//     }

//     console.log(str)
// }



let n = 5

for(let row = 1; row <= n; row++)
{
    let str = ""

    for(let sp = 1; sp <= n - row; sp++)
    {
        str += "  "
    }

    for(let col = 1; col <= row; col++)
    {
        if(row == n || col == row || col == 1)
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

// *
// * *
// * * * 
// * * * *
// * * * * *