
const EmployeeDetails = () => {
  const employeeId = 101;
  const employeeName = "Rahul";
  const designation = "Software Developer";
  const salary = 50000;
  const company = "Apple"

  return (
    <>
    <div className= "flex justify-center items-center">
      <div className="bg-red-200 w-100 h-100 text-center rounded-4xl mt-10">
      <h1 className="mt-8 font-bold text-xl">Employee Details</h1>
      <p className="mt-8"><span className="font-bold">Employee Id:</span> {employeeId}</p>
      <p className="mt-8"><span className="font-bold">Employee Name:</span> {employeeName}</p>
      <p className="mt-8"><span className="font-bold">Designation:</span> {designation}</p>
      <p className="mt-8"><span className="font-bold">Salary:</span> {salary}</p>
      <p className="mt-8"><span className="font-bold">Company:</span> {company}</p>
      </div>
    </div>
    </>
  )
}

export default EmployeeDetails