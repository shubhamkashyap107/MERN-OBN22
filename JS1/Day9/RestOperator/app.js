// let arr = [1,2,3,4,5,6,7,8,9]
// let arr2 = [4,5,6]
// const arr3 = arr.concat(arr2)
// console.log(arr3)
// const val = [-1,...arr,0, ...arr2,100] // spread
// console.log(val)

// const[a,b, ...val] = arr // rest
// console.log(a,b)
// console.log(val)

function sum(...data) // rest
{
    let sum = 0

    for(let item of data)
    {
        sum += item
    }

    return sum
}

// console.log(sum(1,10))


// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log(arr2);

// Create a new array containing all elements of arr plus 40 and 50 using the spread operator.
// const arr = [10, 20, 30];
// const val = [...arr,40,45]
// console.log(val)

// const arr = [1, 2, 3];

// console.log(...arr);
// console.log(1,2,3)


// const a = [1, 2, 3];
// const b = [0, ...a, 4];

// console.log(b);


// const user = {
//     name: "Shubham",
//     age: 25
// };

// const newUser = {
//     ...user
// };

// console.log(newUser);


// const user = {
//     name: "Shubham",
//     age: 25
// };

// const updatedUser = {
//     ...user,
//     age: 26
// };

// console.log(updatedUser);


// const user = {
//     name: "Shubham",
//     age: 25
// };

// const updatedUser = {
//     age: 30,
//     ...user
// };

// console.log(updatedUser);

// Create a new object containing properties from both:
// const user = {
//     name: "Rahul"
// };

// const details = {
//     age: 25,
//     city: "Delhi"
// };

// let ans = {
//     ...user, ...details
// }

// console.log(ans)


// const obj1 = { a: 10, b: 20 };
// const obj2 = { b: 50, c: 30 };

// const result = {
//     ...obj1,
//     ...obj2
// };

// console.log(result);


// let a = {
//     a : 1,
//     a : 2
// }

// console.log(a)

// function add(a, b, c) {
//     return a + b + c;
// }

// const nums = [10, 20, 30];

// console.log(add(...nums));





// Write a function call using the spread operator:
// function multiply(a, b, c, d) {
//     return a * b * c * d;
// }

// const nums = [2, 3, 4, 5];

// console.log(multiply(...nums))


// function test(a, b, c) {
//     console.log(a, b, c);
// }

// const arr = [10, 20];

// test(...arr);


// const arr = [1, 2, 3, 4, 5];

// console.log(Math.max(...arr));



// const nums = [10, 20, 30];

// // console.log(Math.max(nums[0], nums[1], nums[2]));
// console.log(Math.max(...nums))


// const a = [1, 2, 3];
// const b = a;

// b.push(4);

// console.log(a);


// const a = [1, 2, 3, [5,6,7]];
// const b = [...a]


// a[3].push(4)


// console.log(a)
// console.log(b)


// const user = {
//     name: "A",
//     address: {
//         city: "Delhi"
//     }
// };

// const copy = {
//     ...user
// };

// copy.address.city = "Mumbai";

// console.log(user);
// console.log(copy);


// const arr = [[1, 2], [3, 4]];

// const copy = [...arr];

// copy[0].push(100);

// console.log(arr);


// const a = [1, 2];
// const b = [...a, 3, 4];

// a.push(5);

// console.log(a); // [1,2,5]
// console.log(b); // [1,2,3,4]


// const user = {
//     name: "A",
//     age: 20
// };

// const updated = {
//     ...user,
//     name: "B",
//     city: "Delhi"
// };

// console.log(updated);


// const a = {
//     x: 1,
//     y: 2
// };

// const b = {
//     y: 10,
//     z: 20
// };

// const c = {
//     ...a,
//     ...b,
//     y: 100
// };

// console.log(c);


// const arr = [1, 2, 3];

// function test(...args) { // [1,2,3]
//     console.log(args);
// }

// test(...arr); // test(1,2,3)


// const obj = {
//     name: "Shubham",
//     age: 25
// };

// const { name, ...rest } = obj;

// console.log(name);
// console.log(rest);


// const [first, ...rest] = [10, 20, 30, 40];

// console.log(first);
// console.log(rest);



// can the spread operator be used directly like this? Why/why not?
// const obj = [...{ a: 1, b: 2 }];

// let arr = {...[1,2,3]}

// console.log(arr)


// console.log([..."hello"]);


const original = {
    name: "John",
    skills: ["JS", "React"]
};

const copy = {
    ...original,
    skills: [...original.skills]
};

copy.skills.push("Node");

console.log(original.skills);
console.log(copy.skills);