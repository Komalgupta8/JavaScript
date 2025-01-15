// destructuring

const course={
    courseName : "JS",
    price : 999 ,
    courseTeacher : "Hitesh Sir"
}


// course.courseTeacher

const {courseTeacher}=course // agar hume cousreteacher bada naam lag raha hai to hum apne hiab se bhi naam de skte hai

const {courseTeacher : teacher}=course

// console.log(courseTeacher) //Hitesh Sir
// console.log(teacher) //Hitesh Sir


// json format

// {
//     "cousename": "js",
//     "name": "Hitesh Sir",
//     "price" : "free"
// }


