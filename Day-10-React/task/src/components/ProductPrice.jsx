
import { useState } from "react"

const ProductPrice = () => {

    const [products] = useState([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mouse", price: 500 },
        { id: 3, name: "Keyboard", price: 1500 },
        { id: 4, name: "Monitor", price: 12000 },
        { id: 5, name: "Headphone", price: 2000 }
    ])

    const totalPrice = products.reduce(
        (total, product) => total + product.price, 0
    )

    const filteredProducts = products.filter(
        (product) => product.price > 2000
    )

    return (
        <div>
            <h2>Product Details</h2>

            <h3>All Products</h3>

            {products.map((product) => (
                <p key={product.id}>
                    {product.name} - ₹{product.price}
                </p>
            ))}

            <h3>Total Price: ₹{totalPrice}</h3>

            <h3>Number of Products: {products.length}</h3>

            <h3>Products Above ₹2,000</h3>

            {filteredProducts.map((product) => (
                <p key={product.id}>
                    {product.name} - ₹{product.price}
                </p>
            ))}

        </div>
    )
}

export default ProductPrice
