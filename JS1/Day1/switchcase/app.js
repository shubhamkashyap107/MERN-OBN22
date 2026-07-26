// var n = 192



// switch(n % 2 == 0)
// {
//     case true:
//         console.log("Even")
//         break

//     case false:
//         console.log("Odd")
//         break
// }


// var month = -5

// switch(month)
// {
//     case 1 :
//         console.log(31)
//         break

//     case 2 :
//         console.log(28)
//         break

//     case 3 :
//         console.log(31)
//         break

//     case 4 :
//         console.log(30)
//         break

//     case 5 :
//         console.log(31)
//         break

//     case  6:
//         console.log(30)
//         break

//     case 7 :
//         console.log(31)
//         break

//     case 8 :
//         console.log(31)
//         break

//     case 9 :
//         console.log(30)
//         break

//     case 10 :
//         console.log(31)
//         break

//     case 11 :
//         console.log(30)
//         break

//     case 12 :
//         console.log(31)
//         break

//     default:
//         console.log("Invalid Input")
// }


// var month = 1


// switch(month)
// {
//     case 1 :
//     case 3 :
//     case 7 :
//     case 5 :
//     case 10 :
//     case 12 :
//     case 8 :
//         console.log(31)
//         break

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(30)
//         break

//     case 2:
//         console.log(28)
//         break


//     default:
//         console.log("Invalid Input")
// }



let n = 0


switch(true)
{
    case n == 0:
        console.log("Zero")
        break

    case n < 0:
        switch(n % 2 == 0)
        {
            case true:
                console.log("-ve, Even")
                break

            case false:
                console.log("-ve, Odd")
                break;

        }
        break

    case n > 0:
        switch(n % 2 == 0)
        {
            case true:
                console.log("+ve, Even")
                break

            case false:
                console.log("+ve, Odd")
                break;

        }
        break


}


// switch(n < 0)
// {
    
//     case true:
        
//         switch(n % 2 == 0)
//         {
//             case true:
//                 console.log("-ve, Even")
//                 break

//             case false:
//                 console.log("-ve, Odd")
//                 break
//         }

//     case false:
//         switch(n % 2 == 0){
//             case true:
//                 console.log("+ve, Even")
//                 break

//             case false:
//                 console.log("+ve, Odd")
//                 break
//         }
    
// }