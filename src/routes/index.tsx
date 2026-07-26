import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SERVICES } from "@/lib/services";
import { getPosts } from "@/lib/wordpress.functions";
import { BackgroundPattern } from "@/components/BackgroundPattern";

const postsQuery = queryOptions({
  queryKey: ["posts", "home"],
  queryFn: () => getPosts({ perPage: 3 }),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NB Associates — Advocates & Legal Consultants" },
      { name: "description", content: "Trusted legal counsel for businesses and individuals across India. 26+ years of experience." },
      { property: "og:title", content: "NB Associates — Advocates & Legal Consultants" },
      { property: "og:description", content: "Trusted legal counsel for businesses and individuals across India." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  loader: ({ context }) => { context.queryClient.prefetchQuery(postsQuery); },
  component: HomePage,
});

const SMOOTH = "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

function HomePage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      <main>
        <Hero />
        <TrustStats />
        <ServicesSection />
        <Clients />
        <WhyUs />
        <ConsultSection />
        <Insights />
      </main>
    </div>
  );
}

/* ── HERO — Network Graph pattern ── */
function Hero() {
  return (
    <section className="bg-dark-gradient" style={{ padding: "140px 0 110px", position: "relative", overflow: "hidden" }}>
      <BackgroundPattern type="network-graph" variant="dark" />
      {/* Floating decorative elements */}
      <div style={{ position: "absolute", top: "15%", right: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "5%", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "800px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3b82f6" }}>Est. 2001 · New Delhi</span>
            <span style={{ height: "1px", width: "32px", background: "linear-gradient(to right, #3b82f6, transparent)" }} />
          </div>
          <h1 style={{ fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.08", letterSpacing: "-0.02em", color: "#ffffff", margin: "0 0 24px 0" }}>
            Trusted legal counsel for{" "}
            <span style={{ background: "linear-gradient(135deg, #3b82f6, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>businesses and individuals</span>{" "}
            across India
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.75", color: "rgba(255,255,255,0.65)", maxWidth: "640px", margin: "0 0 48px 0" }}>
            NB Associates is a full-service law firm and legal consultancy advising clients in
            various legal fields with discretion, rigour, and{" "}
            <Link to="/about" style={{ color: "#3b82f6", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600, transition: SMOOTH }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#60a5fa"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#3b82f6"; }}
            >26+ years of practice</Link>.
          </p>
          <div style={{ height: "1px", background: "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.02))", marginBottom: "28px" }} />
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
              Corporate · Litigation · Arbitration
            </span>
            <Link to="/contact"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "48px", padding: "0 32px", background: "linear-gradient(135deg, #1d4ed8, #2563eb)", color: "#ffffff", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.04em", textDecoration: "none", border: "none", cursor: "pointer", transition: SMOOTH }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 12px 32px rgba(29,78,216,0.4), 0 0 40px rgba(29,78,216,0.15)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
            >Schedule a Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TRUST STATS — Topographic contour circles ── */
const STATS = [
  { value: "26+", label: "Years of Experience" },
  { value: "15+", label: "Legal Professionals" },
  { value: "2,500+", label: "Matters Handled" },
];

function TrustStats() {
  return (
    <section className="bg-dark-gradient" style={{ position: "relative", overflow: "hidden", animation: "fadeUp 0.6s ease-out 0.1s both" }}>
      <BackgroundPattern type="sound-wave" variant="dark" />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {STATS.map((s, i) => (
            <div key={s.label}
              style={{ padding: "40px 32px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden", transition: SMOOTH }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(59,130,246,0.3)"; el.style.background = "rgba(255,255,255,0.06)"; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.background = "rgba(255,255,255,0.03)"; el.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontWeight: 700, fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.03em", background: "linear-gradient(135deg, #3b82f6, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {s.value}
              </div>
              <div style={{ marginTop: "16px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "48px", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
          <span style={{ height: "1px", width: "48px", background: "linear-gradient(to right, transparent, #3b82f6)" }} />
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", background: "linear-gradient(135deg, #3b82f6, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Trusted by businesses &amp; individuals across India
          </span>
          <span style={{ height: "1px", width: "48px", background: "linear-gradient(to right, #3b82f6, transparent)" }} />
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES — Floating geometric shapes ── */
function ServicesSection() {
  return (
    <section id="services" style={{ position: "relative", overflow: "hidden", animation: "fadeUp 0.6s ease-out 0.2s both" }}>
      <BackgroundPattern type="floating-shapes" variant="light" />
      {/* Decorative floating shapes */}
      <div style={{ position: "absolute", top: "8%", right: "5%", width: "80px", height: "80px", border: "1px solid rgba(29,78,216,0.08)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", left: "3%", width: "120px", height: "120px", border: "1px solid rgba(29,78,216,0.06)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", right: "15%", width: "40px", height: "40px", background: "rgba(29,78,216,0.04)", transform: "rotate(45deg)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#1d4ed8" }}>02 — Practice</span>
          <span style={{ height: "1px", width: "32px", background: "linear-gradient(to right, #1d4ed8, transparent)" }} />
        </div>
        <h2 style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em", color: "#0F172A", margin: "0 0 16px 0" }}>
          Our Services
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#64748b", maxWidth: "500px", margin: "0 0 56px 0" }}>
          Comprehensive legal solutions tailored to diverse legal and business needs.
        </p>
        <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
          {SERVICES.map((s, i) => (
            <a key={s.slug} href={s.wpUrl}
              style={{ display: "flex", flexDirection: "column", padding: "32px", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", textDecoration: "none", position: "relative", overflow: "hidden", boxShadow: "0 1px 3px rgba(15,23,42,0.06)", transition: SMOOTH }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "#1d4ed8"; el.style.boxShadow = "0 20px 60px rgba(15,23,42,0.1), 0 0 30px rgba(29,78,216,0.12)"; el.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "#e2e8f0"; el.style.boxShadow = "0 1px 3px rgba(15,23,42,0.06)"; el.style.transform = "translateY(0)"; }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, #1d4ed8, #3b82f6)", transform: "scaleX(0)", transformOrigin: "left", transition: SMOOTH }} className="hover-scale-x" />
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", color: "#1d4ed8" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ height: "1px", flex: 1, background: "linear-gradient(to right, #e2e8f0, transparent)" }} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, lineHeight: "1.3", letterSpacing: "-0.01em", color: "#0F172A", margin: "0 0 12px 0" }}>{s.title}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: "1.6", color: "#64748b", flex: 1, margin: "0 0 24px 0" }}>{s.short}</p>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1d4ed8", display: "inline-flex", alignItems: "center", gap: "8px", transition: SMOOTH }}>
                Learn more
                <svg style={{ width: "12px", height: "12px", transition: SMOOTH }} viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CLIENTS — Hexagonal honeycomb ── */
const CLIENT_LOGOS = [
  { name: "Kotak Mahindra Bank", file: "kotak_mahindra_bank.png" },
  { name: "Yes Bank",            file: "yes-bank.png"            },
  { name: "Thomson Digital",     file: "thomson-digital.png"     },
  { name: "Metro Tyres",         file: "metro-tyres.png"         },
  { name: "Metro Ortem",         file: "metro-ortem.png"         },
  { name: "Zenith Leisure",      file: "zenith-leisure.png"      },
  { name: "CH Component",        file: "ch-component.png"        },
  { name: "La Prestine",         file: "la-prestine.png"         },
  { name: "Micro Network",       file: "micro-network.png"       },
  { name: "Star Express",        file: "star-express.png"        },
];

function Clients() {
  const loop = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section style={{ position: "relative", overflow: "hidden", animation: "fadeUp 0.6s ease-out 0.3s both" }}>
      <BackgroundPattern type="barcode" variant="light" />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 24px 48px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#1d4ed8" }}>03 — Clients</span>
              <span style={{ height: "1px", width: "32px", background: "linear-gradient(to right, #1d4ed8, transparent)" }} />
            </div>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: "1.1", letterSpacing: "-0.02em", color: "#0F172A", margin: 0 }}>Our Clients</h2>
          </div>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1d4ed8" }}>Engagements across sectors</span>
        </div>
      </div>
      <div style={{ position: "relative", overflow: "hidden", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", backgroundColor: "rgba(255,255,255,0.8)", padding: "40px 0" }}>
        <div style={{ position: "absolute", inset: 0, right: "auto", width: "96px", zIndex: 10, pointerEvents: "none", background: "linear-gradient(to right, #ffffff, transparent)" }} />
        <div style={{ position: "absolute", inset: 0, left: "auto", width: "96px", zIndex: 10, pointerEvents: "none", background: "linear-gradient(to left, #ffffff, transparent)" }} />
        <div style={{ display: "flex", width: "max-content", alignItems: "center", gap: "80px", padding: "0 40px" }} className="marquee-track">
          {loop.map((client, i) => (
            <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", height: "60px", minWidth: "120px", opacity: 0.8, transition: SMOOTH }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.8"; }}
            >
              <img src={`/logos/${client.file}`} alt={client.name} style={{ maxHeight: "60px", width: "auto", objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHY US — Diagonal crosshatch ── */
const DIFFERENTIATORS = [
  { t: "26+ Years of Experience", d: "Continuous practice since 1998, with deep institutional knowledge across courts and tribunals." },
  { t: "Experienced Legal Team", d: "Advocates, consultants, and paralegals working as one cohesive practice." },
  { t: "Client-Focused Approach", d: "Counsel tailored to each engagement — never templated, always considered." },
  { t: "Comprehensive Legal Services", d: "A full-service practice spanning commercial, civil, and corporate matters." },
  { t: "Professional Representation", d: "Measured, prepared advocacy before trial courts, High Courts, and tribunals." },
  { t: "Practical Legal Solutions", d: "Commercially aware advice that protects clients and resolves matters efficiently." },
];

function WhyUs() {
  return (
    <section style={{ position: "relative", overflow: "hidden", animation: "fadeUp 0.6s ease-out 0.4s both" }}>
      <BackgroundPattern type="concentric-rings" variant="light" />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#1d4ed8" }}>04 — The Firm</span>
          <span style={{ height: "1px", width: "32px", background: "linear-gradient(to right, #1d4ed8, transparent)" }} />
        </div>
        <h2 style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em", color: "#0F172A", margin: "0 0 16px 0" }}>Why NB Associates</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#64748b", maxWidth: "500px", margin: "0 0 56px 0" }}>Six commitments that shape how we represent our clients.</p>
        <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
          {DIFFERENTIATORS.map((d) => (
            <div key={d.t}
              style={{ padding: "32px", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", position: "relative", overflow: "hidden", boxShadow: "0 1px 3px rgba(15,23,42,0.06)", transition: SMOOTH }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "#1d4ed8"; el.style.boxShadow = "0 20px 60px rgba(15,23,42,0.1), 0 0 20px rgba(29,78,216,0.15)"; el.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "#e2e8f0"; el.style.boxShadow = "0 1px 3px rgba(15,23,42,0.06)"; el.style.transform = "translateY(0)"; }}
            >
              <div style={{ position: "absolute", left: 0, top: 0, width: "3px", height: "100%", background: "linear-gradient(to bottom, #1d4ed8, #3b82f6)", transform: "scaleY(0)", transformOrigin: "top", transition: SMOOTH }} className="hover-scale-y" />
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, lineHeight: "1.3", letterSpacing: "-0.01em", color: "#0F172A", margin: "0 0 12px 0" }}>{d.t}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: "1.6", color: "#64748b", margin: 0 }}>{d.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CONSULT — Connection dots pattern ── */
const NEW_DELHI_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.2142873!3d28.6279027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3396400001%3A0x8bec8e0f5abf5d85!2sPRAKASH%20DEEP%2C%20607%2C%20Tolstoy%20Rd%2C%20Barakhamba%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000";
const CORPORATE_MAP_EMBED = "https://www.google.com/maps/embed?pb=!4v1782633064747!6m8!1m7!1sJnn7bG-2gNMwp5Oulq22Wg!2m2!1d28.64246607765575!2d77.33512435061388!3f43.35121248935134!4f11.833760599795141!5f0.7820865974627469";

function ConsultSection() {
  const [activeOffice, setActiveOffice] = React.useState<"newdelhi" | "corporate">("newdelhi");
  const mapSrc = activeOffice === "newdelhi" ? NEW_DELHI_MAP_URL : CORPORATE_MAP_EMBED;
  const mapTitle = activeOffice === "newdelhi" ? "New Delhi Office location" : "Corporate Office location";

  return (
    <section className="bg-dark-gradient" style={{ position: "relative", overflow: "hidden", animation: "fadeUp 0.6s ease-out 0.5s both" }}>
      <BackgroundPattern type="circuit-board" variant="dark" />
      {/* Decorative connection lines */}
      <div style={{ position: "absolute", top: "20%", left: "10%", width: "1px", height: "200px", background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.1), transparent)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "30%", right: "15%", width: "1px", height: "150px", background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.08), transparent)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", width: "4px", height: "4px", borderRadius: "50%", background: "rgba(59,130,246,0.15)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 24px", display: "grid", gap: "56px", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", position: "relative", zIndex: 1 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>05 — Consult Us</span>
            <span style={{ height: "1px", width: "32px", background: "linear-gradient(to right, #3b82f6, transparent)" }} />
          </div>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em", color: "#ffffff", margin: "0 0 20px 0" }}>Speak with our counsel.</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "rgba(255,255,255,0.6)", maxWidth: "480px", margin: "0 0 40px 0" }}>
            Reach out for a confidential consultation. Our team will respond within one business day.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "6px" }}>Phone</div>
              <a href="tel:+919811899279" style={{ fontSize: "1.15rem", fontWeight: 600, color: "#3b82f6", textDecoration: "none", transition: SMOOTH }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#60a5fa"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#3b82f6"; }}
              >+91 98118 99279</a>
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "6px" }}>Email</div>
              <a href="mailto:mail@nbassociates.net" style={{ fontSize: "1.15rem", fontWeight: 600, color: "#3b82f6", textDecoration: "none", transition: SMOOTH }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#60a5fa"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#3b82f6"; }}
              >mail@nbassociates.net</a>
            </div>
          </div>
          <Link to="/contact"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "48px", padding: "0 32px", background: "linear-gradient(135deg, #1d4ed8, #2563eb)", color: "#ffffff", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.04em", textDecoration: "none", border: "none", cursor: "pointer", transition: SMOOTH }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 12px 32px rgba(29,78,216,0.4), 0 0 40px rgba(29,78,216,0.15)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
          >Schedule a Consultation</Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {([{ id: "newdelhi", label: "New Delhi Office" }, { id: "corporate", label: "Corporate Office" }] as const).map(({ id, label }) => {
              const isActive = activeOffice === id;
              return (
                <button key={id} onClick={() => setActiveOffice(id)}
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "44px", padding: "0 24px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", background: isActive ? "linear-gradient(135deg, #1d4ed8, #2563eb)" : "transparent", color: isActive ? "#ffffff" : "rgba(255,255,255,0.7)", border: isActive ? "1px solid #1d4ed8" : "1px solid rgba(255,255,255,0.2)", cursor: "pointer", transition: SMOOTH }}
                  onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.color = "#3b82f6"; } }}
                  onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; } }}
                >{label}</button>
              );
            })}
          </div>
          <div style={{ width: "100%", height: "380px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
            <iframe key={mapSrc} title={mapTitle} src={mapSrc} style={{ width: "100%", height: "100%", filter: "grayscale(0.3) contrast(1.05)" }} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── INSIGHTS — Dotted grid pattern ── */
function Insights() {
  const { data: posts } = useSuspenseQuery(postsQuery);
  const handleViewAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.getElementById("blogs");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="blogs" style={{ position: "relative", overflow: "hidden", animation: "fadeUp 0.6s ease-out 0.6s both" }}>
      <BackgroundPattern type="dot-matrix" variant="light" />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "96px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#1d4ed8" }}>06 — Journal</span>
              <span style={{ height: "1px", width: "32px", background: "linear-gradient(to right, #1d4ed8, transparent)" }} />
            </div>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em", color: "#0F172A", margin: "0 0 8px 0" }}>Legal Insights</h2>
            <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#64748b", maxWidth: "400px", margin: 0 }}>Explore our most-read legal articles and resources.</p>
          </div>
          <button onClick={handleViewAll}
            style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1d4ed8", background: "none", border: "none", cursor: "pointer", padding: 0, transition: SMOOTH }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#2563eb"; e.currentTarget.style.transform = "translateX(4px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#1d4ed8"; e.currentTarget.style.transform = "translateX(0)"; }}
          >View All Articles →</button>
        </div>
        <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", marginTop: "48px" }}>
          {posts.slice(0, 3).map((p) => (
            <a key={p.id} href={p.link}
              style={{ display: "flex", flexDirection: "column", padding: "32px", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", textDecoration: "none", boxShadow: "0 1px 3px rgba(15,23,42,0.06)", transition: SMOOTH }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "#1d4ed8"; el.style.boxShadow = "0 20px 60px rgba(15,23,42,0.1), 0 0 30px rgba(29,78,216,0.12)"; el.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "#e2e8f0"; el.style.boxShadow = "0 1px 3px rgba(15,23,42,0.06)"; el.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", background: "linear-gradient(135deg, #1d4ed8, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "12px" }}>
                {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, lineHeight: "1.3", letterSpacing: "-0.01em", color: "#0F172A", margin: "0 0 12px 0", transition: SMOOTH }}
                dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
              <div style={{ fontSize: "0.875rem", lineHeight: "1.6", color: "#64748b", flex: 1, margin: "0 0 24px 0", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
                dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1d4ed8", display: "inline-flex", alignItems: "center", gap: "8px", transition: SMOOTH }}>
                Read more
                <svg style={{ width: "12px", height: "12px", transition: SMOOTH }} viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}