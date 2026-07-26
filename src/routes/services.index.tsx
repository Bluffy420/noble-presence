import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";
import { SocialShare } from "@/components/SocialShare";
import { BackgroundPattern } from "@/components/BackgroundPattern";

const styles = {
  section: {
    padding: "100px 24px 60px",
    background: "#ffffff",
  } as const,
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  } as const,
  narrow: {
    maxWidth: "800px",
    margin: "0 auto",
  } as const,
  eyebrow: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#1d4ed8",
    marginBottom: "16px",
  } as const,
  h1: {
    fontFamily: "'Inter', 'Inter Variable', ui-sans-serif, system-ui, sans-serif",
    fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
    color: "#0F172A",
    margin: "0 0 20px 0",
    maxWidth: "720px",
  } as const,
  bodyText: {
    fontFamily: "'Inter', 'Inter Variable', ui-sans-serif, system-ui, sans-serif",
    fontSize: "1.05rem",
    lineHeight: 1.7,
    color: "#64748b",
    maxWidth: "600px",
    margin: "0 0 36px 0",
  } as const,
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 32px",
    background: "#1d4ed8",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "14px",
    letterSpacing: "0.02em",
    textDecoration: "none",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background 0.2s",
  } as const,
  outlineButton: {
    display: "inline-flex",
    alignItems: "center",
    padding: "14px 32px",
    background: "transparent",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "14px",
    letterSpacing: "0.02em",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "border-color 0.2s, color 0.2s",
  } as const,
  card: {
    display: "flex",
    flexDirection: "column" as const,
    padding: "40px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "4px",
    textDecoration: "none",
    color: "#0f172a",
    transition: "border-color 0.2s, box-shadow 0.2s",
  } as const,
  cardH2: {
    fontFamily: "'Inter', 'Inter Variable', ui-sans-serif, system-ui, sans-serif",
    fontSize: "1.35rem",
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
    color: "#0F172A",
    margin: "16px 0 0 0",
  } as const,
  cardP: {
    fontFamily: "'Inter', 'Inter Variable', ui-sans-serif, system-ui, sans-serif",
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: "#64748b",
    margin: "12px 0 0 0",
    flex: 1,
  } as const,
  cardLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "0.04em",
    color: "#1d4ed8",
    marginTop: "28px",
  } as const,
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — NB Associates" },
      {
        name: "description",
        content:
          "Comprehensive legal services: pre-litigation recovery, MSME proceedings, commercial debt recovery, arbitration, corporate recovery, and N.I. Act matters.",
      },
      { property: "og:title", content: "Services — NB Associates" },
      {
        property: "og:description",
        content:
          "Comprehensive legal services across commercial recovery, arbitration, and corporate matters.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main style={{ background: "#ffffff" }}>
      {/* ── HERO ── */}
      <section style={styles.section}>
        <BackgroundPattern type="floating-shapes" variant="light" />
        <div style={styles.narrow}>
          <div style={styles.eyebrow}>Practice Areas</div>

          <h1 style={styles.h1}>
            Comprehensive Legal{" "}
            <span style={{ color: "#1d4ed8" }}>Services</span>
            <br />
            Tailored to Your Business
          </h1>

          <p style={styles.bodyText}>
            Comprehensive legal solutions tailored to diverse legal and business
            needs — from pre-litigation strategy through to final execution
            across courts and tribunals in India.{" "}
            <a
              href="/contact"
              style={{
                color: "#1d4ed8",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Speak with our team
            </a>{" "}
            to discuss your matter.
          </p>

          {/* Meta + CTA row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              borderTop: "1px solid #e2e8f0",
              paddingTop: "24px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "#64748b",
                textTransform: "uppercase",
              }}
            >
              Corporate · Litigation · Arbitration · Recovery
            </span>

            <a
              href="/contact"
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1e40af";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1d4ed8";
              }}
            >
              Schedule a Consultation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <SocialShare />

      {/* ── SERVICES GRID ── */}
      <section style={{ background: "#f8fafc" }}>
        <BackgroundPattern type="concentric-rings" variant="light" />
        <div
          style={{
            ...styles.container,
            padding: "80px 24px",
          }}
        >
          {/* Section intro */}
          <div
            style={{
              maxWidth: "640px",
              margin: "0 auto 64px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                ...styles.eyebrow,
                marginBottom: "12px",
              }}
            >
              Our Practice Areas
            </span>
            <p
              style={{
                fontFamily:
                  "'Inter', 'Inter Variable', ui-sans-serif, system-ui, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "#64748b",
              }}
            >
              We advise and represent clients across a broad spectrum of legal
              disciplines — from commercial litigation and debt recovery to
              corporate advisory and constitutional law.
            </p>
          </div>

          {/* Service cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={s.wpUrl}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#1d4ed8";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(29,78,216,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "4px",
                      background: "#f1f5f9",
                      color: "#1d4ed8",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    {s.slug.charAt(0).toUpperCase()}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      height: "1px",
                      background: "#e2e8f0",
                    }}
                  />
                </div>
                <h2 style={styles.cardH2}>{s.title}</h2>
                <p style={styles.cardP}>{s.description}</p>
                <span style={styles.cardLink}>
                  Read more
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1 6h10M7 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER: dark slate full-bleed ── */}
      <section className="bg-dark-gradient" style={{ background: "#0F172A" }}>
        <BackgroundPattern type="network-graph" variant="dark" />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "100px 24px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1d4ed8",
            }}
          >
            Need Legal Counsel?
          </span>
          <h2
            style={{
              fontFamily: "'Inter', 'Inter Variable', ui-sans-serif, system-ui, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              margin: "24px auto 0",
              maxWidth: "600px",
            }}
          >
            Let's discuss how we can help with your matter
            <span style={{ color: "#1d4ed8" }}>.</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', 'Inter Variable', ui-sans-serif, system-ui, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.65)",
              margin: "24px auto 0",
              maxWidth: "480px",
            }}
          >
            Every engagement begins with a confidential conversation. Reach out
            and we'll respond within one business day.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginTop: "40px",
            }}
          >
            <a
              href="/contact"
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1e40af";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1d4ed8";
              }}
            >
              Schedule a Consultation
            </a>
            <a
              href="tel:+919811899279"
              style={styles.outlineButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#1d4ed8";
                e.currentTarget.style.color = "#1d4ed8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              +91 98118 99279
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}