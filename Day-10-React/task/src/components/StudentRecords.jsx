
import { useState } from "react"

const StudentRecords = () => {

    const [students, setStudents] = useState([
        { id: 1, name: "Arun", marks: 75 },
        { id: 2, name: "Bala", marks: 85 },
        { id: 3, name: "Kumar", marks: 65 }
    ])

    // Add Student
    const addStudent = () => {

        const newStudent = {
            id: 4,
            name: "Priya",
            marks: 90
        }

        setStudents((prevStudents) => {

            const isDuplicate = prevStudents.some(
                (student) => student.id === newStudent.id
            )

            if (isDuplicate) {
                return prevStudents
            }

            return [...prevStudents, newStudent]
        })
    }

    // Update Student
    const updateStudent = () => {

        setStudents((prevStudents) =>
            prevStudents.map((student) =>
                student.id === 2
                    ? { ...student, marks: 95 }
                    : student
            )
        )
    }

    // Delete Student
    const deleteStudent = () => {

        setStudents((prevStudents) =>
            prevStudents.filter(
                (student) => student.id !== 3
            )
        )
    }

    return (
        <div>
            <h2>Student Records</h2>

            <button onClick={addStudent}>
                Add Student
            </button>

            <button onClick={updateStudent}>
                Update 
            </button>

            <button onClick={deleteStudent}>
                Delete 
            </button>


            <h3>Student List</h3>

            {students.map((student) => (
                <p key={student.id}>
                    ID: {student.id} |
                    Name: {student.name} |
                    Marks: {student.marks}
                    
                </p>

            
            ))}


        </div>
    )
}

export default StudentRecords
