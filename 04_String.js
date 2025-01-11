const name="komal"
const count=20

//old syntex
console.log(count + name)
console.log(name + count +"gupta")

//new one(modern)
console.log(`Hello my namee is ${name}`)

const game= new String("smas-h-card")
console.log(game[2])

console.log(name[2])


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(game.charAt(2));
console.log(game.indexOf('t')); //position


const newString = game.substring(0, 4)
console.log(newString);

const anotherString = game.slice(-8, 4)
console.log(anotherString);


const str="   komal   "
console.log(str.trim())


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //false
console.log(url.includes('com')) //true

console.log(game.split('-'));