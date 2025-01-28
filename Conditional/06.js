const coding=["java" , "js" , "cpp", "ruby"]


const values=coding.forEach((item)=>{
    // console.log(coding[item])  undefined
    return item;
})

// console.log(values) // undefined


//--------------first method ----------------------


const num=[1,2,3,4,5,6,7,8,9,10]

const newnum=num.filter((no)=> no>4)  //ye values return kr raha hai

// console.log(newnum) //[ 5, 6, 7, 8, 9, 10 ]

const newn=num.filter( (no) =>{
    return no<6
})

// console.log(newn) //[ 1, 2, 3, 4, 5 ]


//---------------------------------------sec method--------------------------------------

const arr=[]

num.forEach((no) => {
    if(no>4){
       arr.push(no)
    }
})

// console.log(arr)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userbooks=books.filter((bk)=>bk.genre ==='History')
// const userbooks=books.filter((bk)=> {return bk.genre ==='History'})


// console.log(userbooks)

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
