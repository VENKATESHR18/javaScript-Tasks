import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-30 p-3 bg-amber-200 font-bold'>
        <Link to={"/"}>Counter</Link>
        <Link to={"/productList"}>ProductList</Link>
        <Link to={"/productDetails"}>ProductDetails</Link>
    </div>
  )
}

export default Navbar