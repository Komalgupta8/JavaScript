
// objecr literals

const Mysym=Symbol("key1") 


const person={
    name: "komal",
//  Mysym : "key1", ---> isko person.Mysym() the  we get ans but the type of tha will not be treated as a symbol 
                    //then we need to write another type 

    [Mysym] : "key1", // ----> we can access it with this syntex-->person[Mysym]
    "full name" : "komal gupta",
    age: 20,
    id:"234",
    email : "komal223@GMAIL.COM"
}

//we can access two types
// console.log(person.name)
// console.log(person["age"])   

// Q--> Why we know both methods for access

// ANS-->console.log(person.full name) jab key as a string lenge tb hum is method se access ni kar payege isliye.

// then we need ------>

// console.log(person["full name"])


// console.log(person[Mysym])

// how to chnage object values

person.age=30

// if we want that no one can change our object the we use freez

// Object.freeze(person)

// console.log(person) 

// {
//     name: 'komal',
//     'full name': 'komal gupta',
//     age: 30,
//     id: '234',
//     email: 'komal223@GMAIL.COM',
//     [Symbol(key1)]: 'key1' --> when we write ryt syntex
// }


person.greeting=function(){
    console.log("hello user")
}

person.greeting2=function(){
    console.log(`hello user , ${this.name}`)
}
 
// console.log(person.greeting) //undefined with freeze
 
// console.log(person.greeting) //[Function (anonymous)] without freeze
// console.log(person.greeting()) //person.greeting is not a function (After freeze)

// console.log(person.greeting()) // withuot freeze gives undefined


console.log(person.greeting2)
console.log(person.greeting2())









