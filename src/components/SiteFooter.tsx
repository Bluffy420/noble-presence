import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";

const styles = {
  link: {
    fontSize: "14px",
    color: "#94a3b8",
    textDecoration: "none",
    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    position: "relative" as const,
    display: "inline-block",
  } as React.CSSProperties,
  heading: {
    marginBottom: "20px",
    fontSize: "11px",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    color: "#64748b",
  } as React.CSSProperties,
};

export function SiteFooter() {
  return (
    <footer style={{ fontFamily: '"Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif' }}>
      {/* ── Inline styles for keyframes ── */}
      <style>{`
        @keyframes fadeUpFooter {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInFooter {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .footer-section {
          animation: fadeUpFooter 0.6s ease-out both;
        }
        .footer-section:nth-child(1) { animation-delay: 0.05s; }
        .footer-section:nth-child(2) { animation-delay: 0.12s; }
        .footer-section:nth-child(3) { animation-delay: 0.19s; }
        .footer-section:nth-child(4) { animation-delay: 0.26s; }
        .footer-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #1d4ed8;
          transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .footer-link:hover::after {
          width: 100%;
        }
        .footer-glow:hover {
          box-shadow: 0 0 20px rgba(29,78,216,0.15);
        }
      `}</style>

      {/* ── Main footer — dark slate with gradient mesh + dot pattern ── */}
      <div
        className="footer-section"
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1a2744 50%, #0F172A 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "72px 24px 64px", position: "relative", zIndex: 1 }}>
          {/* Top row: brand + links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
            {/* Brand column */}
            <div style={{ minWidth: "280px", flex: "1 1 300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <img
                  src="/logo.png"
                  alt="NB Associates"
                  style={{ width: "52px", height: "52px", display: "block", borderRadius: "50%" }}
                />
                <div>
                  <div style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "0.06em", color: "#ffffff" }}>NB ASSOCIATES</div>
                  <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#64748b", marginTop: "2px" }}>Advocates &amp; Legal Consultants</div>
                </div>
              </div>
              <p style={{ marginTop: "20px", maxWidth: "400px", fontSize: "14px", lineHeight: "1.7", color: "#94a3b8" }}>
                A full-service law firm and legal consultancy serving businesses and individuals
                across India for over 26 years.
              </p>
              {/* Contact strip */}
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href="tel:+919811899279"
                  style={{
                    fontSize: "14px",
                    color: "#94a3b8",
                    textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#1d4ed8";
                    el.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#94a3b8";
                    el.style.transform = "translateX(0)";
                  }}
                >
                  +91 98118 99279
                </a>
                <a
                  href="mailto:mail@nbassociates.net"
                  style={{
                    fontSize: "14px",
                    color: "#94a3b8",
                    textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#1d4ed8";
                    el.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#94a3b8";
                    el.style.transform = "translateX(0)";
                  }}
                >
                  mail@nbassociates.net
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ minWidth: "140px" }}>
              <div style={styles.heading}>Quick Links</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { to: "/",        label: "Home" },
                  { to: "/services",label: "Services" },
                  { to: "/about",   label: "About Us" },
                  { to: "/team",    label: "Team" },
                  { to: "/blogs",   label: "Insights" },
                  { to: "/contact", label: "Contact" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="footer-link"
                      style={styles.link}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = "#1d4ed8";
                        el.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = "#94a3b8";
                        el.style.transform = "translateX(0)";
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Areas */}
            <div style={{ minWidth: "200px", flex: "1 1 220px" }}>
              <div style={styles.heading}>Practice Areas</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
                {SERVICES.map((s) => (
                  <a
                    key={s.slug}
                    href={s.wpUrl}
                    className="footer-link"
                    style={styles.link}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "#1d4ed8";
                      el.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "#94a3b8";
                      el.style.transform = "translateX(0)";
                    }}
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Offices */}
            <div style={{ minWidth: "220px" }}>
              <div style={{ ...styles.heading, color: "#64748b" }}>Offices</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", fontSize: "14px", lineHeight: "1.7", color: "#94a3b8" }}>
                <div>
                  <div style={{ marginBottom: "6px", fontSize: "12px", fontWeight: 600, color: "#ffffff" }}>
                    New Delhi Office
                  </div>
                  <address style={{ fontStyle: "normal" }}>
                    Prakash Deep Building 706, 7th Floor,<br />
                    Tolstoy Road<br />
                    New Delhi – 110001
                  </address>
                </div>
                <div>
                  <div style={{ marginBottom: "6px", fontSize: "12px", fontWeight: 600, color: "#ffffff" }}>
                    Corporate Office
                  </div>
                  <address style={{ fontStyle: "normal" }}>
                    Plot no. 12B, First Floor<br />
                    Vaishali Sector 3A<br />
                    Main Gautam Palvi Road<br />
                    District Ghaziabad, Uttar Pradesh – 201010
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Gradient divider ── */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, #1d4ed8, #3b82f6, #1d4ed8, transparent)",
          opacity: 0.3,
        }}
      />

      {/* ── Bottom bar — dark slate ── */}
      <div
        className="footer-section"
        style={{
          background: "linear-gradient(135deg, #0B1324 0%, #141e33 50%, #0B1324 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              padding: "20px 0",
              fontSize: "13px",
              color: "#64748b",
            }}
          >
            <span>&copy; {new Date().getFullYear()} NB Associates. All Rights Reserved.</span>
            <span>Advocates &amp; Legal Consultants</span>
          </div>
        </div>
      </div>
    </footer>
  );
}