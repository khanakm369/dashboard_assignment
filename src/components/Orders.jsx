import React from "react";
import { motion } from "framer-motion";
import "./Orders.css";

// Mock orders data
const orders = [
  { id: 101, customer: "Alice Johnson", product: "MacBook Pro 16”", amount: "$2,499", date: "2025-09-15", status: "Delivered" },
  { id: 102, customer: "Bob Smith", product: "iPhone 15 Pro", amount: "$1,099", date: "2025-09-14", status: "Pending" },
  { id: 103, customer: "Charlie Brown", product: "AirPods Max", amount: "$549", date: "2025-09-13", status: "Cancelled" },
  { id: 104, customer: "Diana Prince", product: "Sony WH-1000XM5", amount: "$399", date: "2025-09-12", status: "Shipped" },
  { id: 105, customer: "Ethan Hunt", product: "Samsung Galaxy S24 Ultra", amount: "$1,299", date: "2025-09-11", status: "Processing" },
  { id: 106, customer: "Fiona Carter", product: "Dell XPS 13", amount: "$1,199", date: "2025-09-10", status: "Delivered" },
  { id: 107, customer: "George Miller", product: "iPad Pro 12.9”", amount: "$1,099", date: "2025-09-09", status: "Pending" },
  { id: 108, customer: "Hannah Lee", product: "Apple Watch Ultra 2", amount: "$799", date: "2025-09-08", status: "Delivered" },
];

// Row animation
const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const Orders = () => {
  const getStatusClass = (status) => {
    switch(status){
      case "Delivered": return "status-badge status-delivered";
      case "Cancelled": return "status-badge status-cancelled";
      case "Shipped": return "status-badge status-shipped";
      case "Processing": return "status-badge status-processing";
      default: return "status-badge status-default";
    }
  }

  return (
    <div className="orders-container">
      <motion.h1
        className="orders-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        Orders Dashboard
      </motion.h1>

      <div className="orders-table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <motion.tr
                key={order.id}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <td>#{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.amount}</td>
                <td>{order.date}</td>
                <td>
                  <span className={getStatusClass(order.status)}>
                    {order.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
