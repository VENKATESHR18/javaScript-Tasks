import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="bg-blue-200 flex font-bold p-4 justify-center items-center gap-20">
        <Link to={"/"}>Student-Profile</Link>
        <Link to={"/employeeDetails"}>Employee-Details</Link>
        <Link to={"/productDetails"}>Product-Details</Link>
        <Link to={"/studentNames"}>Student-Names</Link>
        <Link to={"/courseDetails"}>Course-Details</Link>
    </div>
    </>
  )
}

export default Navbar