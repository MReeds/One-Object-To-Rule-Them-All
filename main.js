const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// You want passing students' names to be green, and non-passing students to be orange.
const createStudentComponent = (student) => {
    if (student.score < 60) {
        return `
        <div class="student failing">
            <h1>${student.name}</h1>
            <section>${student.subject}</section>
            <aside>${student.info}</aside>
            <aside>${student.score}</aside>
        </div>
        `
    } else {
        return `
            <div class= "student passing">
            <h1>${student.name}</h1>
            <section>${student.subject}</section>
            <aside>${student.info}</aside>
            <aside>${student.score}</aside>
            </div>
        `
    }
}

const studentContainer = document.querySelector("#container")


for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(
        student
    )
}
// studentContainer.innerHTML = createStudentComponent()

// for (const student of students) {
//     let studentComponent = "name", "subject", "info", "score"
//     if (student.score >= 60) {
//         studentComponent = () 
//     } else {
//         studentComponent = 
//     }
// }