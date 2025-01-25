const user={
    username: "komal",
    
    welcomeMsg: function(){
        console.log(`${this.username} , welcome to website`)
    }
}

// user.welcomeMsg()

// user.username="kajal"
// user.welcomeMsg()


// console.log(this)  // refer a empty object because

// ----- browser ke andar jab kuch run krta hai to global object window object hai

const chai =function(){
    let nm="komal"
    console.log(this.nm) //-------undefined // fun me this keyword kaam ni krta 
}
// one()



//------------Arrow fuh---------------


// basic arrow fun
const chai1=()=>{
    let nm="komal"
    console.log(this.nm) 
}


const addtwo=(num1 , num2)=>{
    return num1+num2
}

//implicit return

const add2=(num1 , num2)=> num1+num2

const add21=(num1 , num2)=> (num1+num2)

// object return krne ke liye

const addobj=(num1 , num2)=> ({name :"komal"})




