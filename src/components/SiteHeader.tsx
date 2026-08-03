import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/about",   label: "About Us" },
  { to: "/team",    label: "Team" },
  { to: "/services",label: "Services" },
  { to: "/blogs",   label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Inject keyframes into the document */}
      <style>{`
        @keyframes headerFadeUp {
          0% { opacity: 0; transform: translateY(-16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobileNavFadeIn {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          width: "100%",
          background: scrolled
            ? "rgba(255,255,255,0.85)"
            : "#ffffff",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
          boxShadow: scrolled
            ? "0 1px 3px rgba(15, 23, 42, 0.06)"
            : "none",
          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
          animation: "headerFadeUp 0.6s ease-out both",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            height: 72,
            maxWidth: 1280,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
          }}
        >
          {/* Logo badge + text — on mobile (< 768px) only the logo icon shows */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            <img
              src="/logo.png"
              alt="NB Associates"
              style={{
                height: 48,
                width: 48,
                display: "block",
                borderRadius: "50%",
              }}
            />
            <div
              className="nba-logo-text-desktop"
              style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}
            >
              <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.06em", color: "#0F172A" }}>NB ASSOCIATES</span>
              <span style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#64748b" }}>Advocates &amp; Legal Consultants</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
            className="max-lg:hidden lg:flex"
          >
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                style={{ color: "#64748b", textDecoration: "none" }}
                activeProps={{ style: { color: "#1d4ed8" } }}
                activeOptions={{ exact: false }}
              >
                {({ isActive }) => (
                  <span
                    style={{
                      display: "inline-block",
                      padding: "8px 16px",
                      fontSize: 13,
                      fontWeight: isActive ? 600 : 500,
                      letterSpacing: "0.02em",
                      color: isActive ? "#1d4ed8" : "#64748b",
                      borderBottom: isActive ? "2px solid #1d4ed8" : "2px solid transparent",
                      transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      ...(isActive
                        ? { boxShadow: "0 0 20px rgba(29,78,216,0.15)" }
                        : {}),
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#0F172A";
                        e.currentTarget.style.borderBottomColor = "#1d4ed8";
                        e.currentTarget.style.borderBottomWidth = "2px";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#64748b";
                        e.currentTarget.style.borderBottomColor = "transparent";
                      }
                    }}
                  >
                    {n.label}
                  </span>
                )}
              </Link>
            ))}

            <div style={{ marginLeft: 20, paddingLeft: 20, borderLeft: "1px solid #e2e8f0" }}>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 38,
                  padding: "0 24px",
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #0F172A, #1a2744)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1d4ed8";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(29,78,216,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #0F172A, #1a2744)";
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Consult Us
              </Link>
            </div>
          </nav>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            style={{
              display: "inline-flex",
              height: 40,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              borderRadius: 6,
              transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
            className="lg:hidden"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f8fafc";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "none";
            }}
          >
            <span className="sr-only">Menu</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <span
                style={{
                  display: "block",
                  height: 2,
                  width: 20,
                  background: "#0F172A",
                  borderRadius: 1,
                  transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: open ? "translateY(7px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  height: 2,
                  width: 20,
                  background: "#0F172A",
                  borderRadius: 1,
                  transition: "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  height: 2,
                  width: 20,
                  background: "#0F172A",
                  borderRadius: 1,
                  transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div
            style={{
              background: "#ffffff",
              borderTop: "1px solid #e2e8f0",
              boxShadow: "0 20px 60px rgba(15,23,42,0.1)",
              animation: "mobileNavFadeIn 0.25s ease-out both",
            }}
            className="lg:hidden"
          >
            <nav
              style={{
                margin: "0 auto",
                maxWidth: 1280,
                display: "flex",
                flexDirection: "column",
                padding: "8px 24px 24px",
              }}
            >
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  style={{ textDecoration: "none" }}
                  activeProps={{ style: { color: "#1d4ed8" } }}
                >
                  {({ isActive }) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        borderBottom: "1px solid #e2e8f0",
                        padding: "14px 0",
                        fontSize: 14,
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? "#1d4ed8" : "#64748b",
                        transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        ...(isActive
                          ? { boxShadow: "0 0 20px rgba(29,78,216,0.15)" }
                          : {}),
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = "#0F172A";
                          e.currentTarget.style.paddingLeft = "8px";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = "#64748b";
                          e.currentTarget.style.paddingLeft = "0";
                        }
                      }}
                    >
                      <span
                        style={{
                          height: 1,
                          width: isActive ? 24 : 0,
                          background: "#1d4ed8",
                          transition: "width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        }}
                      />
                      {n.label}
                    </div>
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 46,
                  marginTop: 16,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #0F172A, #1a2744)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1d4ed8";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(29,78,216,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #0F172A, #1a2744)";
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Consult Us
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}