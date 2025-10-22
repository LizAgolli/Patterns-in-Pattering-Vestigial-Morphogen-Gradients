import React from "react";

export default function ThirdView({ map, data, ToolTip }) {
  return (
    <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "40rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>Third View (Placeholder)</h2>
        <p style={{ margin: 0 }}>
          This is the <strong>Third View</strong>
        </p>
      </div>
    </div>
  );
}