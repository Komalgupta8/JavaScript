// {} scope
const b=5 // bahar jo bhi value likhte hai use kahete hai global scope ----> ise block ke bahar anadar kahi bhi use kr slte hai
let a=200
if(true){ // block ke andar value hoti hai use kahete hai block scope jo bas block ke andar he use kr skte hai
    let a=10
    const b=2
    var c=3
}

// console.log(a) //200
// console.log(b) //5


// console.log(c) // var scope ke bahar bhi kaam krta hai fr ye problem deta hai jab ek project pr multiple log kaam krte hai


function one(){
    const username="komal"

    function two(){
        const website="youtube"

        console.log(username)
    }
    // console.log(website)
    two()
}
one()