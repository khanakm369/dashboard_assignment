import React, { useEffect, useState } from "react";
import "./Products.css"; // <-- Import CSS

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  return (
    <div className="products-container">
      <h2 className="products-title">Products List</h2>
      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Preview</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Price ($)</th>
            <th>Category</th>
            <th>Rating ⭐</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>
                <img src={p.thumbnail} alt={p.title} />
              </td>
              <td>{p.title}</td>
              <td>{p.brand}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
              <td>{p.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
