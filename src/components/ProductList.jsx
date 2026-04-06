import { useState } from "react";
import airpod from "../assets/air.png";
import headphone from "../assets/hab.png";
import laptop from "../assets/lap.png";
import lapcover from "../assets/lsl.png";
import shirt from "../assets/shirt.png";
import shoe from "../assets/shoe.png";

function ProductList() {
  const initialProducts = [
    { id: 1, name: "Airpod", inStock: true, img: airpod },
    { id: 2, name: "Headphone", inStock: false, img: headphone },
    { id: 3, name: "Laptop", inStock: true, img: laptop },
    { id: 4, name: "Laptop Cover", inStock: false, img: lapcover },
    { id: 5, name: "Shirt", inStock: true, img: shirt },
    { id: 6, name: "Shoe", inStock: false, img: shoe },
  ];

  const [filter, setFilter] = useState("ALL");

  const filteredProducts = initialProducts.filter((product) => {
    if (filter === "IN") return product.inStock;
    if (filter === "OUT") return !product.inStock;
    return true;
  });

  return (
    <div className="card">
      <h2>ShopKart Products</h2>

      <div className="btn-group">
        <button onClick={() => setFilter("ALL")}>All</button>
        <button onClick={() => setFilter("IN")}>In Stock</button>
        <button onClick={() => setFilter("OUT")}>Out of Stock</button>
      </div>

      <div className="grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className={product.inStock ? "in" : "out"}>
              {product.inStock ? "Available" : "Out of Stock"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;