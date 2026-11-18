
import { useState } from "react"

const EmployeeSalary = () => {

    const [employees, setEmployees] = useState([
        { id: 1, name: "Arun", salary: 25000 },
        { id: 2, name: "Bala", salary: 45000 },
        { id: 3, name: "Kumar", salary: 60000 },
        { id: 4, name: "Vijay", salary: 35000 },
        { id: 5, name: "Priya", salary: 55000 }
    ])

    const [showFiltered, setShowFiltered] = useState(false)

    const filteredEmployees = employees.filter(
        (employee) => employee.salary > 40000
    )

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="mt-5">Employee Salary Details</h2>

            <button className="bg-blue-400 p-2 rounded-md text-white" onClick={() => setShowFiltered(false)}>
                Show All Employees
            </button>

            <button className="bg-green-400 p-2 rounded-md text-white" onClick={() => setShowFiltered(true)}>
                Filter Salary Above 40000
            </button>
            <div className="bg-amber-200 p-5 flex flex-col gap-5 w-70 rounded-md justify-center items-center">
            {showFiltered ? (
                filteredEmployees.map((employee) => (
                    <p key={employee.id}>
                        {employee.name} - ₹{employee.salary}
                    </p>
                ))
            ) : (
                employees.map((employee) => (
                    <p key={employee.id}>
                        {employee.name} - ₹{employee.salary}
                    </p>
                ))
            )}
            </div>

        </div>
    )
}

export default EmployeeSalary
