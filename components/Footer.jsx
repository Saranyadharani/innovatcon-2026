export default function Footer() {
    return (
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "40px 24px",
        textAlign: "center",
        color: "#64748b",
        fontSize: "0.875rem"
      }}>
        <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: 8 }}>
          <span style={{ color: "#818cf8" }}>Innovate</span>Con 2026
        </div>
        <div style={{ marginBottom: 16, color: "#94a3b8" }}>May 22–24, 2026 · Bengaluru, India</div>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
          {["About", "Schedule", "Speakers", "Sponsors", "Contact", "Privacy Policy"].map(l => (
            <a key={l} href="#" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.85rem" }}
              onMouseOver={e => e.target.style.color = "#818cf8"}
              onMouseOut={e => e.target.style.color = "#64748b"}>
              {l}
            </a>
          ))}
        </div>
        <div>© 2026 InnovateCon. Built with Google Antigravity + React.</div>
      </footer>
    );
  }