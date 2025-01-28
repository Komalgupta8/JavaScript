const programming=["js" , "cpp" , "java"]

//normal we pass the fun
programming.forEach(function (val) {
    // console.log(val)
})

//pass the arrow fun
programming.forEach( (item) =>{
    // console.log(item)
})

//funtion banakr alag se the  usme pass kr skte hai 
function printMe(item){
    console.log(item)
}

// programming.forEach((printMe))

programming.forEach( (item  , index , arr) =>{
    // console.log(index)
})



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach((item)=>{
    console.log(item.languageName)
})