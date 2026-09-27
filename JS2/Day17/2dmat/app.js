// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]


function spiralTraversalClockwise(mat)
{
    for(let i = 0; i < mat[0].length; i++)
    {
        console.log(mat[0][i])
    }

    for(let i = 1; i < mat.length; i++)
    {
        console.log(mat[i][mat[0].length - 1])
    }

    for(let i = mat[0].length - 2; i >= 0; i--)
    {
        console.log(mat[mat.length - 1][i])
    }

    for(let i = mat.length - 2; i >= 1; i--)
    {
        console.log(mat[i][0])
    }
}



function spiralTraversalAntiClockwise(mat)
{
    for(let i = 0; i < mat.length; i++)
    {
        console.log(mat[i][0])
    }

    for(let i = 1; i < mat[0].length; i++)
    {
        console.log(mat[mat.length - 1][i])
    }

    for(let i = mat.length - 2; i >= 0; i--)
    {
        console.log(mat[i][mat[0].length - 1])
    }

    for(let i = mat.length - 2; i >= 1; i--)
    {
        console.log(mat[0][i])
    }
}


// spiralTraversalClockwise(arr)
// spiralTraversalAntiClockwise(arr)

let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

//  1 2 3 4 8 12 11 10 9 5 6 7



function spiralTraversalFullMatrix(mat)
{
   let left = 0
   let top = 0
   let right = mat[0].length - 1
   let bottom = mat.length - 1

   while(left <= right && top <= bottom)
   {
        for(let i = left; i <= right; i++)
        {
            console.log(mat[top][i])
        }
        top++

        if(top <= bottom && left <= right)
        {
            for(let i = top; i <= bottom; i++)
            {
                console.log(mat[i][right])
            }
            right--
        }

        if(top <= bottom && left <= right)
        {
            for(let i = right; i >= left; i--)
            {
                console.log(mat[bottom][i])
            }
            bottom--
        }

        if(top <= bottom && left <= right)
        {
            for(let i = bottom; i >= top; i--)
            {
                console.log(mat[i][left])
            }
            left++
        }

       
   }
}

spiralTraversalFullMatrix(arr)