const myObj={
    js:'javascript',
    rb:'ruby',
    cpp:'c++'
}

// forin loop object ke liye hota hai 

for (const key in myObj) {
    // console.log(key) // for key
    // console.log(myObj[key]); // for VALUES

}
const programming=["js" , "cpp" , "java"]

for (const key in programming) {
    // console.log(key) // index
    // console.log(programming[key]) // values
}

// for in loop direct array me keys print krta which is indexing


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(map[key])
}  // map itetrable ni hota hai isliye is par forin loop work ni krte hai but ye error bhi ni deta hai


