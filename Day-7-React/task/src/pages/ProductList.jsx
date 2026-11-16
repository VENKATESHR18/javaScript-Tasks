import { useNavigate } from "react-router-dom";

const ProductList = () => {

  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Laptop", price: 60000, category: "Electronics" },
    { id: 2, name: "Mobile", price: 25000, category: "Electronics" },
    { id: 3, name: "Headphones", price: 2000, category: "Accessories" }
  ];

  return (
    <div className="p-5">

      <h1 className="text-2xl font-bold mb-5">
        Product List
      </h1>

      {products.map((product) => (
        <div key={product.id} className="border p-4 mb-3 rounded-lg">

          <h2>{product.name}</h2>
          <p>Price: ₹{product.price}</p>

          <button
            onClick={() => navigate(`/products/${product.id}`)}
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
          >
            View Details
          </button>

        </div>
      ))}

    </div>
  );
};

export default ProductList;