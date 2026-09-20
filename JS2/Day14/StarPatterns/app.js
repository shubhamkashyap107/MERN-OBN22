// let n = 11
// let spaces = 0
// let stars = n

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let sp = 1; sp <= spaces; sp++)
//     {
//         str += "  "
//     }
//     for(let st = 1; st <= stars; st++)
//     {
//         if(i == 1 || i == n || st == 1 || st == stars)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }
    
//     console.log(str)

//     if(i <= Math.floor(n / 2))
//     {
//         spaces++
//         stars-=2
//     }
//     else
//     {
//         spaces--
//         stars+=2
//     }
// }



// let n = 5

// let spaces = n - 1
// let stars = 1

// for(let row = 1; row <= n; row++)
// {
//     let str = ""

//     for(let sp = 1; sp <= spaces; sp++)
//     {
//         str += "  "
//     }

//     for(let st = 1; st <= stars; st++)
//     {
//         str += "* "
//     }

//     console.log(str)

//     stars+=2
//     spaces--
// }

// let n = 4

// for(let row = 1; row <= n; row++)
// {
//     let str = ""


//     if(row % 2 == 0)
//     {
//         for(let col = 1; col <= n; col++)
//         {
//             if(col % 2 == 0)
//             {
//                 str += "B "
//             }
//             else
//             {
//                 str += "W "
//             }
//         }

//     }
//     else
//     {
//         for(let col = 1; col <= n; col++)
//         {
//             if(col % 2 == 0)
//             {
//                 str += "W "
//             }
//             else
//             {
//                 str += "B "
//             }
//         }
//     }

   
//     console.log(str)
// }





let n = 5
// let stars = 1
// let spaces = n - 1
// for(let i = 1; i <= n; i++)
// {
//     let str = ""
//     let count = 1
//     for(let sp = 1; sp <= spaces; sp++)
//     {
//         str += "  "
//     }
//     for(let st = 1; st <= stars; st++)
//     {
//         // str += "* "
//         str += count + " "
//         if(st <= Math.floor(stars / 2))
//         {
//             count++
//         }
//         else
//         {
//             count--
//         }
//         // count++
//     }
//     stars += 2
//     spaces--
//     console.log(str)
// }





for(let row = 1; row <= n; row++)
{
    let str = ""
    let count = 1


    for(let sps = 1; sps <= n - row; sps++)
    {
        str += "  "
    }

    for(let st = 1; st <= 2 * row - 1; st++)
    {
        // str += "* "

        if(st <= Math.floor((2 * row - 1) / 2))
        {
            str += count + " "
            count++
        }
        else
        {
            str += count + " "
            count--
        }
    }

    console.log(str)

}












