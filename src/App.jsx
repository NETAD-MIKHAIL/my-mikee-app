import { useState } from "react";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">MIKEE ADMIN</h2>

        <nav>
          <button onClick={() => setActive("dashboard")}>Dashboard</button>
          <button onClick={() => setActive("users")}>Users</button>
          <button onClick={() => setActive("reports")}>Reports</button>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="main">
        {/* TOPBAR */}
        <header className="topbar">
          <h3>{active.toUpperCase()}</h3>
          <div className="profile">Admin</div>
        </header>

        {/* CONTENT */}
        <section className="content">
          {active === "dashboard" && (
            <div className="grid">
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
              <h2>User Management</h2>
              <p>Manage system users here.</p>
            </div>
          )}

          {active === "reports" && (
            <div className="panel">
              <h2>Reports</h2>
              <p>Analytics and system reports.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}