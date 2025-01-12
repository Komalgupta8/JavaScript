// Arrays 

const arr=[2,3,4,6]
const names=["komal" , "kajal"]

const newArr=new Array(2,3,4)

console.log(newArr[0])


// Array methods

arr.push(1) // add at the end of the array

arr.pop() // remove last value

arr.unshift(3) // add start in the array and remove last ele
  
arr.shift() //  remove first ele and shift right to left

console.log(arr)

arr.includes(3) // give true or false acc to element presency

arr.indexOf(2) // tell the index if element is present if not return -1

console.log(arr.join()) // join change the type of array it change into string


// slice , splice


console.log("A" , arr)

console.log(arr.slice(1,3)) //it include start inde but not last index ----> slice(strt , end)
console.log("B" , arr)

console.log(arr.splice(1,3)) // affect the original array [ 3, 4, 6 ] it incudes strt index and end index 
console.log("C" ,arr) //[ 2 ]




