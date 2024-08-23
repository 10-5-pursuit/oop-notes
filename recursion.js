// Recursion

// A function that calls itself is called recursive.

// A recursive function calls itself to reduce a larger problem into a smaller one until it can be solved.

// A recursive function must have TWO properties:

// A simple base case (or cases) - which is a terminating scenario that does not use recursion to produce an answer
// The inductive step - A set of rules that reduce all other cases toward the base case

const iterativeAddition = (n) => {
    // accumulator
    let acc = 0

    for(let i = 1; i <= n; i++){
        acc += i
    }

    // return accumulator
    return acc
}

// console.log(iterativeAddition(5)) // 1 + 2 + 3 + 4 + 5

// console.log(iterativeAddition(2)) // 1 + 2


const recursiveAddition = (n) => {
    // base case
    if(n === 0 || n === 1){
        return n
    }
    // inductive step: steps to get us closer to the base case
    return 2 + recursiveAddition(n - 1)
}


// console.log( recursiveAddition(0) ) // returns 0
// console.log( recursiveAddition(1) ) // returns 1


// We can use a function invocation in an expression
const sum = 10 + recursiveAddition(1)
// console.log(sum)

// console.log(recursiveAddition(2)) // returns 3

// console.log(recursiveAddition(3)) // returns 3 + recursiveAddition(3 - 1)

// console.log(recursiveAddition(1000))


// Call Stack: a stack is another data structure that follows LIFO: last in first out


// Using an array and returning the sum of all the numbers within it
const recursiveArrayReducer = (arr, sum=0) => {
    // base case: if array is empty return sum
    if(arr.length === 0){
        return sum
    }
    // inductive step: get us closer to the base case
    sum += arr.shift()
    return recursiveArrayReducer(arr, sum)
}

const arrOfNums = [1,2,3,4,5]

console.log(recursiveArrayReducer(arrOfNums))
// arr: [1,2,3,4,5] sum: 0
// arr: [2,3,4,5] sum: 1
// arr: [3,4,5] sum: 3
// arr: [4,5] sum: 6
// arr: [5] sum: 10
// arr: [] sum: 15



