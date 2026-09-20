// function kite(n)
// {
//     let spaces = n - 1
//     let stars = 1

//     for(let row = 1; row <= 2 * n - 1; row++)
//     {
//         let str = ""

//         for(let sp = 1; sp <= spaces; sp++)
//         {
//             str += "  "
//         }

//         for(let st = 1; st <= stars; st++)
//         {
//             str += "* "
//         }

//         console.log(str)
//         if(row < n)
//         {
//             spaces--
//             stars+=2
//         }
//         else
//         {
//             spaces++
//             stars-=2
//         }
//     }
// }


// function kite2(n)
// {
//     let spaces = n - 1
//     let stars = 1
//     let count = 1

//     for(let row = 1; row <= 2 * n - 1; row++)
//     {
//         let str = ""

//         for(let sp = 1; sp <= spaces; sp++)
//         {
//             str += "  "
//         }
//         for(let st = 1; st <= stars; st++)
//         {
//             str += count + " "
//         }
//         console.log(str)
//         if(row < n)
//         {
//             spaces--
//             stars+=2
//             count++
//         }
//         else
//         {
//             spaces++
//             stars-=2
//             count--
//         }
//     }
// }



// function kite3(n)
// {
//     let spaces = n - 1
//     let stars = 1
    
//     for(let row = 1; row <= 2 * n - 1; row++)
//     {
//         let count = 1
//         let str = ""
//         for(let sp = 1; sp <= spaces; sp++)
//         {
//             str += "  "
//         }
//         for(let st = 1; st <= stars; st++)
//         {
//             str += count + " "

//             if(st <= Math.floor(stars / 2))
//             {
//                 count++
//             }
//             else
//             {
//                 count--
//             }
//         }
//         console.log(str)
//         if(row < n)
//         {
//             spaces--
//             stars+=2
//         }
//         else
//         {
//             spaces++
//             stars-=2
//         }
//     }
// }

// kite(4)
// kite2(4)
// kite3(4)


let n = 7

  for(let i = 1; i <= n; i++)
  {
    let str = ""

    for(let sp = 1; sp <= n - i; sp++)
    {
      str += " "
    }

    for(let st = 1; st <= i; st++)
    {
      str += "* "
    }

    console.log(str)
  }
