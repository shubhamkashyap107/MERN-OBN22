var a = 10
let b = 20
const c = 30



/*

 CODE

*/



console.log(a)
console.log(b)
console.log(c)

{
    console.log(a)
    console.log(b)
    console.log(c)
}

if(true)
{
    console.log(a)
    console.log(b)
    console.log(c)
}

function kuchbhi()
{
    console.log(a)
    console.log(b)
    console.log(c)
}

kuchbhi()



// functional scope

function testing()
{
    var a1 = 10
    let b1 = 20
    const c1 = 30

    console.log(a1, b1, c1)
}



testing()
// console.log(a1)
// console.log(b1)
// console.log(c1)



// block scope

{
    var a2 = 1
    let b2 = 2
    const c2 = 3

    console.log(a2)
    console.log(b2)
    console.log(c2)
}


if(true)
{
    var a3 = 1
    let b3 = 2
    const c3 = 3

    console.log(a3, b3, c3)
}
console.log(a3)
console.log(b3)
console.log(c3)


// console.log(a2)
// console.log(b2)
// console.log(c2)