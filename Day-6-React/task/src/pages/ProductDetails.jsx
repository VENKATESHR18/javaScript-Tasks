

const ProductDetails = () => {
  
  const product = {id: "P101",
    name: "Iphone 17 pro",
    brand: "Apple",
    categorey: "Electronics",
    price: "135000"
   }
  
  return (  
    <>
    <div className="flex justify-center items-center">
      <div className="bg-lime-200 mt-10 h-110 w-100 rounded-4xl text-center">
        <h1 className="mt-8 font-bold text-xl">Buy Iphone 17 pro</h1>
        <p className="mt-8">{product.name}</p>
        <p className="mt-8"><span className="font-bold">Brand: </span>{product.brand}</p>
        <p className="mt-8"><span className="font-bold">Categorey: </span>{product.categorey}</p>
        <p className="mt-8"><span className="font-bold">Id: </span>{product.id}</p>
        <p className="mt-8 text-red-600 font-bold">{product.price * 0.9}</p>
        <p className="mt-8"><span className="font-bold">Original price: </span>{product.price}</p>
      </div>
    </div>
    </>
  )
}

export default ProductDetails