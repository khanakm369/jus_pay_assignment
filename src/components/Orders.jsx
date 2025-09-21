import React from "react";

const Orders = () => {
  const orders = [
    { id: 1, customer: "John Doe", date: "2025-09-20", amount: 250, status: "Shipped" },
    { id: 2, customer: "Jane Smith", date: "2025-09-19", amount: 120, status: "Pending" },
    { id: 3, customer: "Michael Brown", date: "2025-09-18", amount: 540, status: "Delivered" },
    { id: 4, customer: "Emily Davis", date: "2025-09-17", amount: 330, status: "Cancelled" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "15px", textAlign: "center" }}>Orders</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#1279c3", color: "white" }}>
            <th style={styles.th}>Order ID</th>
            <th style={styles.th}>Customer</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Amount ($)</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} style={{ textAlign: "center" }}>
              <td style={styles.td}>{order.id}</td>
              <td style={styles.td}>{order.customer}</td>
              <td style={styles.td}>{order.date}</td>
              <td style={styles.td}>{order.amount}</td>
              <td style={{ ...styles.td, color: getStatusColor(order.status) }}>
                {order.status}
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

// Status color helper
const getStatusColor = (status) => {
  switch (status) {
    case "Shipped":
      return "blue";
    case "Delivered":
      return "green";
    case "Pending":
      return "orange";
    case "Cancelled":
      return "red";
    default:
      return "black";
  }
};

export default Orders;
