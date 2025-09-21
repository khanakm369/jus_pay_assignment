import React from "react";

const Profiles = () => {
  const users = [
    { id: 1, name: "Alice Johnson", role: "Admin", email: "alice@example.com", status: "Active" },
    { id: 2, name: "Bob Smith", role: "Manager", email: "bob@example.com", status: "Inactive" },
    { id: 3, name: "Charlie Brown", role: "Developer", email: "charlie@example.com", status: "Active" },
    { id: 4, name: "Diana Prince", role: "Designer", email: "diana@example.com", status: "Active" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "15px", textAlign: "center" }}>Profiles</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 5px 0" }}>{user.name}</h3>
              <p style={{ margin: 0, color: "#555" }}>
                {user.role} • {user.email}
              </p>
            </div>
            <span
              style={{
                padding: "6px 12px",
                borderRadius: "20px",
                backgroundColor: user.status === "Active" ? "#4CAF50" : "#f44336",
                color: "white",
                fontSize: "0.9rem",
              }}
            >
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
