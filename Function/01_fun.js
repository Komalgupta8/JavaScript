function calcprice(...num1){ //rest operator
    return num1
}
function calcprice1(val1 , val2 ,...num1){ // val1 and val2 ko seprate kr deta hai
    return num1
}

// console.log(calcprice(2,3,4,5)) // 

// console.log(calcprice1(1,2,3,4))


const user={
    name :"komal",
    age:20
}

function handleobject(anyObject){
    console.log(`user name is ${anyObject.name} and age is ${anyObject.age}`)
}

// 1st method
handleobject(user)

//2nd method
handleobject({
    name:"kajal",
    age:23
})


// arrays 

function arrayhandle(arry){
    console.log(arry[1])
}

arrayhandle([2,3,4,5,5])



