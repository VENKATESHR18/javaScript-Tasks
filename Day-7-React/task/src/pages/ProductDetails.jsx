import { useParams } from "react-router-dom";

const ProductDetails = () => {

  const { id } = useParams();

  const products = [
    { id: 1, name: "Laptop", price: 60000, category: "Electronics" },
    { id: 2, name: "Mobile", price: 25000, category: "Electronics" },
    { id: 3, name: "Headphones", price: 2000, category: "Accessories" }
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="p-5">

      <h1 className="text-2xl font-bold">Product Details</h1>

      <p>Name: {product.name}</p>
      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>

    </div>
  );
};

export default ProductDetails;