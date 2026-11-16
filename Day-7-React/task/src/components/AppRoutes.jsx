import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Counter from '../pages/Counter'
import ProductList from '../pages/ProductList'
import ProductDetails from '../pages/ProductDetails'

const AppRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Counter/>} />
            <Route path='/productList' element={<ProductList />}/>
            <Route path='/products/:id' element={<ProductDetails/>} />
        </Routes>
    </div>
  )
}

export default AppRoutes