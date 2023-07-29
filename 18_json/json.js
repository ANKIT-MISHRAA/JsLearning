/// distructuring constrains



const course = {
    courseName : "java in hindi",
    price      : 600 ,
    courseInstructer : "ankit mishra"

}
 

// console.log(course.courseInstructer);


const {courseInstructer} = course
console.log(courseInstructer);

const { courseInstructer : instructer } = course
console.log(instructer);