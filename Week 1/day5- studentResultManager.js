//Day 5 mini project. A student result manager

const Students = [
    {name : "Yemi", course : "EEE", scores : [72, 91, 44] },
    {name : "Crystal", course : "CPE", scores : [42, 81, 33] },
    {name : "James", course : "MEE", scores : [12, 77, 21] },
    {name : "Sophia", course : "MCH", scores : [92, 91, 52] }
]

const withAverage = Students.map(Student => {const{scores, ...rest} = Student
    const Average = scores.reduce((sum, score) => sum + score, 0)/scores.length
    return{...rest, Average}
})

//console.log(withAverage)

//passed
const passed = withAverage.filter(({Average}) => Average >= 50);
console.log(`Passed students: ${passed}`)

passed.forEach(({name, course, Average}, index) => {
    console.log(`${index +1}. ${name} (${course} - ${Average})`)
})

//Adding new student

const newStudent = {name : "David", course: "TCH", scores: [71, 56, 89]}
const updateStudents = {...Students, newStudent}

console.log(updateStudents)