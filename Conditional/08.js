const myNums = [1, 2, 3]

//------------------- Reduce method-------------------

const mytotal=myNums.reduce(function (acc , currVal) {
    return acc + currVal
} , 0) // 0 accumulator ki value hoti hai


const total=myNums.reduce((acc , currvl)=> acc+currvl , 0)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const ans= shoppingCart.reduce((acc , item)=>acc + item.price ,0)
console.log(ans)
