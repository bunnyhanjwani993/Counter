import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([]);

  const addCounter = () => {
    const newNum = num + 1;
    setNum(newNum);
    setHistory([
      ...history,
      { id: history.length + 1, action: "Increment", value: newNum }
    ]);
  };

  const lessCounter = () => {
    if (num < 1) {
      alert("Cannot decrement below 0");
      return;
    }
    const newNum = num - 1;
    setNum(newNum);
    setHistory([
      ...history,
      { id: history.length + 1, action: "Decrement", value: newNum }
    ]);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#4f46e5", fontSize: "40px" }}>🔢 Counter App</h1>
      <h2 style={{ fontSize: "60px", margin: "20px 0" }}>{num}</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button
          onClick={lessCounter}
          style={{
            fontSize: "30px",
            padding: "10px 20px",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ➖ Decrement
        </button>
        <button
          onClick={addCounter}
          style={{
            fontSize: "30px",
            padding: "10px 20px",
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ➕ Increment
        </button>
      </div>

      <h3 style={{ marginTop: "40px", color: "#111827" }}>📜 History Log</h3>
      <ul
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          textAlign: "left",
          padding: "0",
          listStyle: "none",
        }}
      >
        {history.length > 0 ? (
          history.map((item) => (
            <li
              key={item.id}
              style={{
                backgroundColor: "#f9fafb",
                margin: "5px 0",
                padding: "10px",
                borderRadius: "6px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <strong>#{item.id}</strong> – {item.action} → <strong>{item.value}</strong>
            </li>
          ))
        ) : (
          <p style={{ color: "#9ca3af" }}>No actions yet</p>
        )}
      </ul>
    </div>
  );
}

export default App;
