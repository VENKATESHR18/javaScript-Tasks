

const StudentNames = () => {
  const Students = ["Virat", "Rohit", "Rahul", "Shreyas", "Ruturaj"]
  return (
    <>
    <div className="flex justify-center items-center">
    <div className="bg-indigo-300 text-center w-100 h-80 mt-10 rounded-4xl">
      <h1 className="mt-8 text-2xl font-bold">Students List</h1>
      <ol className="mt-5 space-y-5"> 
          {Students.map ((student, index)=> (
          <li key= {index}> {student} </li> ))}
      </ol>
    </div>
    </div>
    </>
  )
}

export default StudentNames
