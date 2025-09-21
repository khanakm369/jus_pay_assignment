import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000, expense: 2400 },
  { month: "Feb", revenue: 3000, expense: 1398 },
  { month: "Mar", revenue: 5000, expense: 2000 },
  { month: "Apr", revenue: 2780, expense: 1800 },
  { month: "May", revenue: 4890, expense: 2400 },
  { month: "Jun", revenue: 6390, expense: 3200 },
  { month: "Jul", revenue: 7490, expense: 4000 },
];

const FinanceAnalysis = () => {
  return (
    <div style={{ width: "100%", height: "400px", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Finance Analysis
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
          <Line type="monotone" dataKey="expense" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceAnalysis;
