// stack (primitive) -> jab bhi stack memory use hoti hai tb humne jo bhi variable define kiya hai uski copy milti hai
 
const userid=123
newid=userid
newid=456

console.log(userid)
console.log(newid);

// head memory (non premitive data type me use hoti hai)-->get the reference of original value

const myobj={
    "gmail":"komal234@gmail.com",
    "id":123
}

let user2=myobj.id
user2.id=456

console.log(myobj.id)
console.log(user2)



