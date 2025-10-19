//Day 5 mini project. A student result manager

const Students = [
    {name : "Yemi", course : "EEE", scores : [72, 91, 44] },
    {name : "Crystal", course : "CPE", scores : [42, 81, 33] },
    {name : "James", course : "MEE", scores : [12, 77, 21] },
    {name : "Sophia", course : "MCH", scores : [92, 91, 52] }
]

//destructuring the array of objects and using the spread opeartor
const withAverage = Students.map(Student => {const{scores, ...rest} = Student
    const Average = scores.reduce((sum, score) => sum + score, 0)/scores.length
    return{...rest, Average}
})

//console.log(withAverage)

//passed [Filters the objects of students who scored 50 and above into a new array]
const passed = withAverage.filter(({Average}) => Average >= 50);
console.log(`Passed students: ${passed}`)

//displays each student individually with their values and numbers them accordingly
passed.forEach(({name, course, Average}, index) => {
    console.log(`${index +1}. ${name} (${course} - ${Average})`)
})

//Adding new student to the initial student array

const newStudent = {name : "David", course: "TCH", scores: [71, 56, 89]}
const updateStudents = {...Students, newStudent}

console.log(updateStudents)