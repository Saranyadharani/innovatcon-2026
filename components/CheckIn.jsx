import { useState } from "react";

const tickets = [
  { id: "IC2026-001", name: "Rahul Sharma", email: "rahul@example.com", type: "VIP" },
  { id: "IC2026-002", name: "Priya Nair", email: "priya@example.com", type: "General" },
  { id: "IC2026-003", name: "Demo User", email: "demo@example.com", type: "Workshop" },
];

export default function CheckIn() {
  const [form, setForm] = useState({ name: "", email: "", ticket: "", role: "Developer", days: "All 3 Days" });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [lookup, setLookup] = useState("");
  const [lookupResult, setLookupResult] = useState(null);
  const [lookupError, setLookupError] = useState("");
  const [tab, setTab] = useState("register");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    const id = "IC2026-" + Math.floor(1000 + Math.random() * 9000);
    setTicketId(id);
    setSubmitted(true);
  };

  const handleLookup = (e) => {
    e.preventDefault();
    const found = tickets.find(t => t.id.toLowerCase() === lookup.toLowerCase() || t.email.toLowerCase() === lookup.toLowerCase());
    if (found) { setLookupResult(found); setLookupError(""); }
    else { setLookupResult(null); setLookupError("No ticket found. Try IC2026-001, IC2026-002, or IC2026-003"); }
  };

  return (
    <div>
      <h2 className="section-title">Event Check-In</h2>
      <p className="section-sub">Register for InnovateCon 2026 or look up your ticket</p>

      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 0, marginBottom: 32, background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 4 }}>
          {["register", "lookup"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: "10px", borderRadius: 9, border: "none",
              background: tab === t ? "#4f46e5" : "transparent",
              color: tab === t ? "white" : "#94a3b8",
              cursor: "pointer", fontWeight: 600, fontSize: "0.9rem", transition: "all 0.2s",
              textTransform: "capitalize"
            }}>
              {t === "register" ? "New Registration" : "Ticket Lookup"}
            </button>
          ))}
        </div>

        {tab === "register" && !submitted && (
          <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: 6, display: "block" }}>Full Name *</label>
              <input placeholder="Enter your full name" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })} required aria-label="Full Name" />
            </div>
            <div>
              <label style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: 6, display: "block" }}>Email Address *</label>
              <input type="email" placeholder="you@example.com" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })} required aria-label="Email Address" />
            </div>
            <div>
              <label style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: 6, display: "block" }}>Your Role</label>
              <select value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} aria-label="Role">
                {["Developer", "Designer", "Product Manager", "Student", "Entrepreneur", "Other"].map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: 6, display: "block" }}>Attendance</label>
              <select value={form.days} onChange={e => setForm({ ...form, days: e.target.value })} aria-label="Days attending">
                {["All 3 Days", "Day 1 Only", "Day 2 Only", "Day 3 Only"].map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn-primary" style={{ marginTop: 8, padding: "14px" }}>
              Complete Registration →
            </button>
          </form>
        )}

        {tab === "register" && submitted && (
          <div className="card" style={{ textAlign: "center", padding: 40, borderColor: "rgba(79,70,229,0.4)" }}>
            <div style={{ fontSize: "3rem", marginBottom: 16 }}>🎉</div>
            <div style={{ fontWeight: 800, fontSize: "1.4rem", marginBottom: 8, color: "#818cf8" }}>
              You're Registered!
            </div>
            <p style={{ color: "#94a3b8", marginBottom: 24 }}>Welcome to InnovateCon 2026, {form.name}!</p>
            <div style={{ background: "rgba(79,70,229,0.1)", borderRadius: 10, padding: "16px 24px", marginBottom: 24 }}>
              <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: 4 }}>Your Ticket ID</div>
              <div style={{ fontWeight: 800, fontSize: "1.5rem", letterSpacing: "0.05em", color: "#818cf8" }}>{ticketId}</div>
            </div>
            <div style={{ fontSize: "0.85rem", color: "#64748b" }}>Confirmation sent to {form.email}</div>
            <button className="btn-outline" style={{ marginTop: 20 }} onClick={() => { setSubmitted(false); setForm({ name: "", email: "", ticket: "", role: "Developer", days: "All 3 Days" }); }}>
              Register Another
            </button>
          </div>
        )}

        {tab === "lookup" && (
          <div>
            <form onSubmit={handleLookup} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: 6, display: "block" }}>Ticket ID or Email</label>
                <input placeholder="e.g. IC2026-001 or email@example.com" value={lookup}
                  onChange={e => { setLookup(e.target.value); setLookupResult(null); setLookupError(""); }}
                  aria-label="Ticket ID or Email" />
              </div>
              <button type="submit" className="btn-primary" style={{ padding: "13px" }}>Look Up Ticket</button>
            </form>

            {lookupError && (
              <div style={{ marginTop: 20, padding: "14px 18px", borderRadius: 10, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#f87171", fontSize: "0.9rem" }}>
                {lookupError}
              </div>
            )}

            {lookupResult && (
              <div className="card" style={{ marginTop: 20, borderColor: "rgba(79,70,229,0.4)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(79,70,229,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#818cf8", fontSize: "1.1rem" }}>
                    {lookupResult.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{lookupResult.name}</div>
                    <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>{lookupResult.email}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <span className="badge badge-primary">{lookupResult.id}</span>
                  <span className="badge badge-accent">{lookupResult.type} Pass</span>
                  <span className="badge badge-success">Confirmed</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}