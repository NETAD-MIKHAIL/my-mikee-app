import { useState } from "react";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">MIKEE v.0.0.1 ADMIN</div>

        <button onClick={() => setActive("dashboard")}>📊 Dashboard</button>
        <button onClick={() => setActive("users")}>👤 Users</button>
        <button onClick={() => setActive("inventory")}>📦 Inventory</button>
        <button onClick={() => setActive("settings")}>⚙️ Settings</button>
      </aside>

      {/* MAIN */}
      <div className="main">
        {/* TOPBAR */}
        <header className="topbar">
          <h2>{active.toUpperCase()}</h2>
          <div className="user">Admin</div>
        </header>

        {/* CONTENT */}
        <div className="content">
          {active === "dashboard" && (
            <div className="cards">
              <div className="card">
                <h4>Total Users</h4>
                <p>1,245</p>
              </div>

              <div className="card">
                <h4>Sales</h4>
                <p>$8,420</p>
              </div>

              <div className="card">
                <h4>Orders</h4>
                <p>320</p>
              </div>

              <div className="card">
                <h4>Pending</h4>
                <p>18</p>
              </div>
            </div>
          )}

          {active === "users" && (
            <div className="panel">
              <h3>User Management</h3>
              <p>Manage system users here.</p>
            </div>
          )}

          {active === "inventory" && (
            <div className="panel">
              <h3>Inventory</h3>
              <p>Manage products and stock.</p>
            </div>
          )}

          {active === "settings" && (
            <div className="panel">
              <h3>Settings</h3>
              <p>System configuration panel.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}