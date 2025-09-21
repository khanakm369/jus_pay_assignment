import React from "react";

const Products = () => {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 899, stock: "In Stock" },
    { id: 2, name: "Headphones", category: "Electronics", price: 120, stock: "Out of Stock" },
    { id: 3, name: "Coffee Mug", category: "Home & Kitchen", price: 15, stock: "In Stock" },
    { id: 4, name: "Running Shoes", category: "Fashion", price: 70, stock: "Low Stock" },
    { id: 5, name: "Smartphone", category: "Electronics", price: 699, stock: "In Stock" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "15px", textAlign: "center" }}>Products</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#1279c3", color: "white" }}>
            <th style={styles.th}>Product ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Price ($)</th>
            <th style={styles.th}>Stock Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} style={{ textAlign: "center" }}>
              <td style={styles.td}>{product.id}</td>
              <td style={styles.td}>{product.name}</td>
              <td style={styles.td}>{product.category}</td>
              <td style={styles.td}>{product.price}</td>
              <td style={{ ...styles.td, color: getStockColor(product.stock) }}>
                {product.stock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Inline CSS styles
const styles = {
  th: {
    padding: "10px",
    border: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
  },
};

// Stock color helper
const getStockColor = (stock) => {
  switch (stock) {
    case "In Stock":
      return "green";
    case "Out of Stock":
      return "red";
    case "Low Stock":
      return "orange";
    default:
      return "black";
  }
};

export default Products;
