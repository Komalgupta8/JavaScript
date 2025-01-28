const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map method

const newnums =myNumers.map((num) => num+10)
console.log(newnums)

const number= myNumers
    .map((no) => no*10)
    .map((no) => no+1)
    .filter((no) => no>50)
console.log(number)


