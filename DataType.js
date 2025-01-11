"use Strict" // treat all js code as newer version

// number => 2 to power 53
// bigint =>
// string =>""
// boolean
// null => stand alone value , it is a object also
//symbol =>unique
//undefined =>

//object

console.log(typeof null) // object


// primitive datatypes

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//reference (Non - Primitive) --> Arrays , object , funtion

const heros=["cat" , "dog"]

let obj={
    1 : "komal",
    2 :"kajal"
}

const myfn=function(){
    console.log("fun")
}

console.log(typeof heros)


