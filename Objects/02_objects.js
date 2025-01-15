// <------two types of object creation------>

const instauser=new Object() //Singleton object
//const instauser={} // non-singleton object  -------------> both works same


instauser.id=123
instauser.name="komal"
instauser.age=20

//console.log(instauser)  //  { id: 123, name: 'komal', age: 20 }

const regularuser={
    email:"233komal@gmail.com",
    fullname : {
        userfullname :{
            name : "komal",
            lastname : "gupta"
        }
    }
}


const obj1={1:"k" , 2:"d"}
const obj2={3:"k" , 4:"d"}

const obj3=Object.assign(obj1 , obj2)  // make one object 

const obj4=Object.assign({} ,obj1 , obj2) // upar bale method me sari values obj1 me ja ri thi to jab hum naya obj banahe rahe hai to isko ek empty object he de ddtet hai

// console.log(obj3)

const obj5={...obj1 ,...obj2 }

// console.log(obj5)


console.log(Object.keys(instauser))// for keys
console.log(Object.values(instauser)) //for values
console.log(Object.entries(instauser))

console.log(instauser.hasOwnProperty('age')) // check this is in object avail or not














