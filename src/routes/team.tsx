import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BackgroundPattern } from "@/components/BackgroundPattern";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team | NB Associates – Advocates & Legal Consultants" },
      {
        name: "description",
        content:
          "Meet the experienced advocates, partners, and management professionals behind NB Associates, delivering legal solutions across litigation, arbitration, corporate advisory, criminal law, and regulatory matters.",
      },
      { property: "og:title", content: "Team | NB Associates – Advocates & Legal Consultants" },
      {
        property: "og:description",
        content:
          "Meet the experienced advocates, partners, and management professionals behind NB Associates.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

// ── Team data ──────────────────────────────────────────────────────────────────

interface TeamMember {
  slug: string;
  name: string;
  position: string;
  credential?: string;
  experience: string;
  bio: string[];
  highlights?: string[];
  image: string;
  category: "partner" | "management";
}

const TEAM: TeamMember[] = [
  {
    slug: "naveen-bhardwaj",
    name: "Naveen Bhardwaj",
    position: "Advocate / Managing Partner",
    experience: "26+ Years",
    image: "/team/naveen-bhardwaj.jpg",
    category: "partner",
    bio: [
      "Mr. Naveen Bhardwaj, the Managing Partner of NB Associates – Advocates & Legal Consultants, possesses more than 26 years of extensive legal experience in handling complex matters relating to Arbitration, MSME Disputes, Real Estate, and Infrastructure Laws.",
      "Under his leadership, the firm has developed significant expertise in commercial dispute resolution, contractual disputes, construction disputes, infrastructure claims, recovery matters, and MSME claims under the MSME Act.",
      "His extensive experience in arbitration proceedings, contract interpretation, claim management, and dispute resolution has enabled the firm to successfully represent clients in high-value commercial disputes. He has advised numerous companies, contractors, suppliers, and service providers in relation to contractual obligations, payment recovery, and legal risk management.",
    ],
  },
  {
    slug: "rajesh-ranjan",
    name: "Rajesh Ranjan",
    position: "Advocate / Partner",
    experience: "26+ Years",
    image: "/team/rajesh-ranjan.jpg",
    category: "partner",
    bio: [
      "Mr. Rajesh Ranjan has over 26 years of legal experience in General Litigation.",
      "His legal practice covers civil litigation, contractual disputes, recovery proceedings, injunction matters, property disputes, and various civil remedies.",
      "His comprehensive understanding of procedural and substantive laws has assisted the firm in providing effective representation before different judicial forums.",
    ],
  },
  {
    slug: "santosh-kumar-singh",
    name: "Santosh Kumar Singh",
    position: "Advocate / Partner",
    experience: "22+ Years",
    image: "/team/santosh-kumar-singh.jpg",
    category: "partner",
    bio: [
      "Mr. Santosh Kumar Singh brings more than 22 years of experience in Company Laws and FEMA (Foreign Exchange Management Act).",
      "He has advised Indian companies and foreign entities on complex corporate legal issues and regulatory requirements.",
    ],
    highlights: [
      "Corporate compliance",
      "Company advisory",
      "Regulatory matters",
      "Foreign investment regulations",
      "FEMA compliance",
      "Corporate restructuring",
      "Legal documentation",
    ],
  },
  {
    slug: "sarvesh-kumar-singh",
    name: "Sarvesh Kumar Singh",
    position: "Advocate / Partner",
    experience: "22+ Years",
    image: "/team/sarvesh-kumar-singh.jpg",
    category: "partner",
    bio: [
      "Mr. Sarvesh Kumar Singh has over 22 years of experience in Criminal Law, with a specialized practice covering Enforcement Directorate matters, CBI matters, NDPS cases, economic offences, property offences, and criminal litigation.",
      "He has represented clients in investigations, anticipatory bail matters, bail proceedings, trial proceedings, and appeals.",
    ],
    highlights: [
      "Enforcement Directorate matters",
      "CBI matters",
      "NDPS cases",
      "Economic offences",
      "Criminal litigation",
    ],
  },
  {
    slug: "rajesh-kumar-singh",
    name: "Rajesh Kumar Singh",
    position: "Advocate / Partner",
    experience: "20+ Years",
    image: "/team/rajesh-kumar-singh.jpg",
    category: "partner",
    bio: [
      "Mr. Rajesh Kumar Singh possesses more than 20 years of experience in General Litigation, Consumer Cases, and RERA Matters.",
      "His practice focuses on consumer disputes, real estate litigation, homebuyer disputes, builder disputes, compensation claims, proceedings before Consumer Commissions, and RERA Authorities.",
    ],
    highlights: [
      "Consumer disputes",
      "Real estate litigation",
      "Homebuyer disputes",
      "RERA Authorities",
      "Compensation claims",
    ],
  },
  {
    slug: "shantanu-kumar",
    name: "Shantanu Kumar",
    position: "Advocate / Partner",
    credential: "Advocate-on-Record, Supreme Court of India",
    experience: "24+ Years",
    image: "/team/shantanu-kumar.jpg",
    category: "partner",
    bio: [
      "Mr. Shantanu Kumar has more than 24 years of legal experience in General Litigation and is an Advocate-on-Record before the Supreme Court of India.",
      "His experience includes constitutional matters, civil disputes, criminal appeals, Special Leave Petitions, Writ Petitions, and Supreme Court proceedings.",
      "His association strengthens the firm's capability to represent clients before the highest court of the country.",
    ],
  },
  {
    slug: "aanchal-gautam",
    name: "Aanchal Gautam",
    position: "Partner – General Process & Management",
    experience: "5+ Years",
    image: "/team/aanchal-gautam.jpg",
    category: "management",
    bio: [
      "Ms. Aanchal Gautam possesses over 5 years of experience in managing legal processes, particularly related to MSME disputes.",
    ],
    highlights: [
      "Case coordination",
      "Documentation management",
      "Procedural compliance",
      "Internal process management",
      "Client communication",
    ],
  },
  {
    slug: "pooja-bisht",
    name: "Pooja Bisht",
    position: "Partner – Client Relations and General Management",
    experience: "5+ Years",
    image: "/team/pooja-bisht.jpg",
    category: "management",
    bio: [
      "Ms. Pooja Bisht has over 5 years of experience in client relations and legal administration.",
    ],
    highlights: [
      "Client communication",
      "Administrative management",
      "Understanding client requirements",
      "Service coordination",
      "Legal support operations",
    ],
  },
];

const PARTNERS = TEAM.filter((m) => m.category === "partner");
const MANAGEMENT = TEAM.filter((m) => m.category === "management");

// ── Page ───────────────────────────────────────────────────────────────────────

function TeamPage() {
  return (
    <main>
      {/* ── Hero — dark slate, single-column ── */}
      <section className="bg-dark-gradient" style={{ background: "#0F172A" }}>
        <BackgroundPattern type="network-graph" variant="dark" />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "120px 24px 64px",
          }}
        >
          <div style={{ maxWidth: "720px" }}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#1d4ed8",
                margin: 0,
              }}
            >
              Our Team
            </p>
            <h1
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                margin: "16px 0 0",
              }}
            >
              Experienced legal professionals
            </h1>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "#94a3b8",
                marginTop: "24px",
                maxWidth: "580px",
              }}
            >
              Meet the advocates, partners, and management team behind
              NB Associates — delivering solutions across litigation,
              arbitration, and corporate law.
            </p>
          </div>

          {/* CTA row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#64748b",
              }}
            >
              Partners &middot; Management &middot; Advocates
            </span>
            <a
              href="#partners"
              style={{
                fontFamily: '"Inter", sans-serif',
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                background: "#1d4ed8",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
                borderRadius: "4px",
                transition: "background 0.15s",
              }}
            >
              Meet the Team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M7 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Partners section — white background ── */}
      <section id="partners" style={{ background: "#ffffff" }}>
        <BackgroundPattern type="floating-shapes" variant="light" />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "100px 24px",
          }}
        >
          <div style={{ maxWidth: "640px", marginBottom: "64px" }}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#1d4ed8",
                margin: 0,
              }}
            >
              Partners
            </p>
            <h2
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#0F172A",
                margin: "12px 0 0",
              }}
            >
              Seasoned advocates with decades of experience
            </h2>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "#64748b",
                marginTop: "16px",
              }}
            >
              Our partners bring deep expertise across litigation, corporate
              law, arbitration, and dispute resolution.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "32px",
            }}
          >
            {PARTNERS.map((member) => (
              <MemberCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Management section — surface background ── */}
      <section id="management" style={{ background: "#f8fafc" }}>
        <BackgroundPattern type="concentric-rings" variant="light" />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "100px 24px",
          }}
        >
          <div style={{ maxWidth: "640px", marginBottom: "64px" }}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#1d4ed8",
                margin: 0,
              }}
            >
              Management
            </p>
            <h2
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#0F172A",
                margin: "12px 0 0",
              }}
            >
              Operations &amp; client relations
            </h2>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "#64748b",
                marginTop: "16px",
              }}
            >
              Dedicated professionals ensuring seamless case coordination,
              client relations, and operational excellence.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "32px",
            }}
          >
            {MANAGEMENT.map((member) => (
              <MemberCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA — dark slate ── */}
      <section className="bg-dark-gradient" style={{ background: "#0F172A" }}>
        <BackgroundPattern type="circuit-board" variant="dark" />
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            padding: "100px 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              margin: 0,
            }}
          >
            Let's discuss your legal needs
          </h2>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#94a3b8",
              marginTop: "20px",
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Schedule a consultation with our experienced team of advocates and
            legal professionals.
          </p>
          <div style={{ marginTop: "40px" }}>
            <a
              href="/contact"
              style={{
                fontFamily: '"Inter", sans-serif',
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 36px",
                background: "#1d4ed8",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                borderRadius: "4px",
                transition: "background 0.15s",
              }}
            >
              Schedule a Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 8h8M8 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// ── Member card ────────────────────────────────────────────────────────────────

function MemberCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "4px",
      }}
    >
      {/* Photo */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 5",
          overflow: "hidden",
          background: "#f8fafc",
        }}
      >
        {imgError ? (
          <ImageFallback name={member.name} />
        ) : (
          <img
            src={member.image}
            alt={`${member.name} — ${member.position}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "28px",
        }}
      >
        {/* Name + position */}
        <div>
          <h3
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "1.125rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#0F172A",
              margin: 0,
            }}
          >
            {member.name}
          </h3>
          <div
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#1d4ed8",
              marginTop: "6px",
            }}
          >
            {member.position}
          </div>
          {member.credential && (
            <div
              style={{
                fontFamily: '"Inter", sans-serif',
                display: "inline-block",
                padding: "4px 10px",
                marginTop: "10px",
                background: "#1d4ed8",
                color: "#ffffff",
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                borderRadius: "2px",
              }}
            >
              {member.credential}
            </div>
          )}
        </div>

        {/* Experience */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "16px",
          }}
        >
          <span
            style={{
              width: "20px",
              height: "2px",
              background: "#1d4ed8",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#64748b",
            }}
          >
            {member.experience} of experience
          </span>
        </div>

        {/* Bio */}
        <div
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.875rem",
            lineHeight: 1.7,
            color: "#64748b",
            marginTop: "20px",
            flex: 1,
          }}
        >
          <p style={{ margin: 0 }}>{member.bio[0]}</p>

          {(member.bio.length > 1 || member.highlights) && (
            <>
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: expanded ? "800px" : "0px",
                  opacity: expanded ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >
                {member.bio.slice(1).map((para, i) => (
                  <p key={i} style={{ marginTop: "12px" }}>
                    {para}
                  </p>
                ))}
                {member.highlights && (
                  <ul
                    style={{
                      marginTop: "16px",
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {member.highlights.map((h) => (
                      <li
                        key={h}
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: "#0F172A",
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                          borderRadius: "4px",
                          padding: "4px 10px",
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                onClick={() => setExpanded((v) => !v)}
                style={{
                  fontFamily: '"Inter", sans-serif',
                  background: "none",
                  border: "none",
                  padding: 0,
                  marginTop: "16px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#1d4ed8",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {expanded ? "Show less" : "Read more"}
                <svg
                  style={{
                    width: "12px",
                    height: "12px",
                    transition: "transform 0.2s",
                    transform: expanded ? "rotate(180deg)" : "none",
                  }}
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

// ── Image fallback ─────────────────────────────────────────────────────────────

function ImageFallback({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        background: "#0F172A",
      }}
    >
      <span
        style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: "3rem",
          fontWeight: 700,
          color: "#1d4ed8",
        }}
      >
        {initials}
      </span>
    </div>
  );
}