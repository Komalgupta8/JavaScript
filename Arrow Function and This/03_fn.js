// immediately invoked function expressions (IIFE)

// ()()---> first paren use for function definition and sec is for execution

(function chai(){
    // named IIFE
    console.log("kk")
}) ();  // output kk



// fun ko  () iske andar  is liye rakhte hai taki function global scope se polute na ho jaye ------------imp

( () => {

    // unnamed IIFE
    
    console.log('connected')
})()  // isme error ayegi kyunki upr ek jo fun hai iime use start to kr diya lekin use pata ni hai ki rokna kaha hai is liye IIME  FUN ME ---> semicolon----> lagana pdhta hai end krne ke liye








