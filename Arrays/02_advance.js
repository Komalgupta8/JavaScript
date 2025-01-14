const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// marvel_heros.push("komal")
// console.log(marvel_heros)


// const newArr=marvel_heros.concat(dc_heros)  //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(marvel_heros)
// console.log(newArr)

const all_heros=[...marvel_heros , ...dc_heros] //... called spread operator it is very useful and easy to use
// console.log(all_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]






