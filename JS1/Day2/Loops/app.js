// var a = 0


// while(a < 10000)
// {
//     console.log("Shubham Kashyap")
//     a++
// }

n = 104729
let isPrime = true
let count = 2

// while(count < n)
// while(count  < n / 2)
while(count * count < n)
{
    console.log("Loop Chala")
    if(n % count == 0)
    {
        isPrime = false
        break
    }
    count++
}
if(isPrime == true)
{
    console.log("Is a prime number")
}
else
{
    console.log("Not a prime number")
}






