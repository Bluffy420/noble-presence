import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getPageBySlug } from "@/lib/wordpress.functions";
import { SocialShare } from "@/components/SocialShare";
import { BackgroundPattern } from "@/components/BackgroundPattern";

const aboutQuery = queryOptions({
  queryKey: ["wp-page", "about-us"],
  queryFn: () => getPageBySlug("about-us"),
});

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — NB Associates" },
      {
        name: "description",
        content:
          "NB Associates is a full-service law firm and legal consultancy with over 26 years of practice across India.",
      },
      { property: "og:title", content: "About Us — NB Associates" },
      {
        property: "og:description",
        content: "A full-service law firm and legal consultancy with 26+ years of practice.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  loader: ({ context }) => context.queryClient.prefetchQuery(aboutQuery),
  component: AboutPage,
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Couldn't load this page</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function AboutPage() {
  const { data: page } = useSuspenseQuery(aboutQuery);
  return (
    <main>
      {/* ── Hero Section ── */}
      <section style={{ background: "#ffffff" }}>
        <BackgroundPattern type="floating-shapes" variant="light" />
        <div
          className="mx-auto max-w-5xl px-6 py-24 lg:py-36"
          style={{ fontFamily: '"Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif' }}
        >
          <h1
            style={{
              fontFamily: '"Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#0F172A",
              margin: 0,
            }}
          >
            About{" "}
            <span style={{ color: "#1d4ed8" }}>NB Associates</span>
          </h1>

          <p
            style={{
              fontFamily: '"Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif',
              fontWeight: 400,
              fontSize: "1.125rem",
              lineHeight: 1.6,
              color: "#64748b",
              marginTop: "1.75rem",
              maxWidth: "36rem",
            }}
          >
            A practice built on{" "}
            <span style={{ color: "#1d4ed8", fontWeight: 600 }}>integrity</span>, 
            guided by expertise, and measured by results.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#64748b",
              marginTop: "1.5rem",
              maxWidth: "36rem",
            }}
          >
            A full-service law firm and legal consultancy advising businesses and individuals
            across India for over 26 years.{" "}
            <a
              href="/contact"
              style={{
                color: "#1d4ed8",
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                textDecorationThickness: "1px",
              }}
            >
              Speak to our team
            </a>
            .
          </p>

          <div
            style={{
              marginTop: "2.5rem",
              borderTop: "1px solid #e2e8f0",
              paddingTop: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#64748b",
              }}
            >
              Corporate · Litigation · Arbitration
            </span>
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                padding: "0 32px",
                background: "#1d4ed8",
                color: "#ffffff",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      <SocialShare />

      {/* ── Content Section ── */}
      <section style={{ background: "#ffffff" }}>
        <BackgroundPattern type="concentric-rings" variant="light" />
        <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
          <div
            style={{
              fontFamily: '"Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif',
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "#0f172a",
            }}
          >
            <div style={{ maxWidth: "42rem" }}>
              <p
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 500,
                  lineHeight: 1.8,
                  color: "#0F172A",
                  marginBottom: "2rem",
                }}
              >
                NB Associates – Advocates &amp; Legal Consultants is a distinguished full-service
                law firm in India, committed to delivering comprehensive, strategic, and
                result-oriented legal solutions to individuals, businesses, corporations,
                startups, MSMEs, financial institutions, and multinational entities.
              </p>

              <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>
                The firm has been established with the vision of providing exceptional legal
                representation, practical legal advice, and effective dispute resolution services
                across a broad spectrum of legal disciplines.
              </p>

              <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>
                The foundation of the firm has been built upon the principles of professional
                excellence, integrity, transparency, confidentiality, and client-centric legal
                services.
              </p>

              <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>
                Over the years, a strong reputation has been developed by NB Associates through
                consistent legal performance, extensive industry knowledge, and a deep
                understanding of the Indian legal system.
              </p>

              {/* Recognised for — practice areas */}
              <div
                style={{
                  marginTop: "2.5rem",
                  marginBottom: "2.5rem",
                  padding: "2rem 0",
                  borderTop: "1px solid #e2e8f0",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#0F172A",
                    marginBottom: "1.5rem",
                  }}
                >
                  The firm has been recognized for its ability to handle complex legal matters
                  involving:
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "0.625rem",
                  }}
                >
                  {[
                    "Arbitration",
                    "MSME Disputes",
                    "Commercial Litigation",
                    "Corporate Laws",
                    "Real Estate Disputes",
                    "Infrastructure Disputes",
                    "Criminal Litigation",
                    "Banking Disputes",
                    "Insolvency Matters",
                    "Consumer Disputes",
                    "RERA Matters",
                    "Foreign Exchange Laws",
                    "Constitutional Litigation",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "#0f172a",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#1d4ed8",
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>
                The legal services of the firm are provided throughout India, with a strong
                presence in Delhi, NCR, and various major cities.
              </p>

              {/* Courts & Tribunals */}
              <div
                style={{
                  marginTop: "2.5rem",
                  marginBottom: "2.5rem",
                  padding: "2rem 0",
                  borderTop: "1px solid #e2e8f0",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#0F172A",
                    marginBottom: "1.5rem",
                  }}
                >
                  The legal team regularly appears before:
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "0.625rem",
                  }}
                >
                  {[
                    "Supreme Court of India",
                    "High Courts",
                    "District Courts",
                    "Commercial Courts",
                    "Arbitration Tribunals",
                    "Consumer Commissions",
                    "RERA Authorities",
                    "NCLT",
                    "NCLAT",
                    "Debt Recovery Tribunals",
                    "Various Regulatory Authorities",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "#0f172a",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#1d4ed8",
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>
                The philosophy of NB Associates has always been centered around understanding
                the unique legal requirements of every client and delivering customized legal
                strategies designed to achieve the best possible outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section (dark slate) ── */}
      <section className="bg-dark-gradient" style={{ background: "#0F172A" }}>
        <BackgroundPattern type="network-graph" variant="dark" />
        <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "3rem",
              textAlign: "center",
            }}
          >
            {[
              { value: "26+", label: "Years of Practice" },
              { value: "1000+", label: "Matters Handled" },
              { value: "11+", label: "Forums Appeared" },
            ].map((stat) => (
              <div key={stat.label} style={{ minWidth: 160 }}>
                <div
                  style={{
                    fontFamily: '"Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif',
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "#1d4ed8",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section (dark slate) ── */}
      <section className="bg-dark-gradient" style={{ background: "#0F172A" }}>
        <BackgroundPattern type="sound-wave" variant="dark" />
        <div
          className="mx-auto max-w-5xl px-6 pb-20 lg:pb-28"
          style={{ fontFamily: '"Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif' }}
        >
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "3rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: '"Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif',
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Need legal counsel?
              </h2>
              <p
                style={{
                  marginTop: "0.75rem",
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: "28rem",
                }}
              >
                Schedule a confidential consultation with our team. We'll assess your matter
                and guide you on the best course of action.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 48,
                  padding: "0 32px",
                  background: "#1d4ed8",
                  color: "#ffffff",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Request a Consultation
              </a>
              <a
                href="tel:+919811899279"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 48,
                  padding: "0 28px",
                  background: "transparent",
                  color: "#ffffff",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                }}
              >
                +91 98118 99279
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}