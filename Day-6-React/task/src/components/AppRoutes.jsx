import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import StudentProfile from "../pages/StudentProfile"
import EmployeeDetails from "../pages/EmployeeDetails"
import ProductDetails from "../pages/ProductDetails"
import StudentNames from "../pages/StudentNames"
import CourseDetails from "../pages/CourseDetails"


const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
            <Route path="/" element={<StudentProfile/>}/>
            <Route path="/employeeDetails" element={<EmployeeDetails/>}/>
            <Route path="/productDetails" element={<ProductDetails/>}/>
            <Route path="/studentNames" element={<StudentNames/>}/>
            <Route path="/courseDetails" element={<CourseDetails/>}/>
        </Routes>
      </div>
    </>
  )

}

export default AppRoutes