import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-10 lg:pt-32">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            The Firm
          </div>
          <h1 className="mt-8 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-[4rem]">
            Our Team
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Meet the experienced legal professionals and management team behind NB Associates –
            Advocates &amp; Legal Consultants.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div
                className="text-[11px] font-medium uppercase tracking-[0.22em]"
                style={{ color: "var(--gold)" }}
              >
                01 — Our People
              </div>
              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Experienced across every practice area
              </h2>
            </div>
            <div className="flex items-center lg:col-span-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                NB Associates comprises experienced legal professionals possessing decades of
                expertise across litigation, arbitration, corporate advisory, regulatory matters,
                criminal law, real estate disputes, and management processes. The firm is committed
                to delivering practical legal solutions through a collaborative and client-focused
                approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners grid */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-14">
            <div
              className="text-[11px] font-medium uppercase tracking-[0.22em]"
              style={{ color: "var(--gold)" }}
            >
              02 — Partners
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Legal Partners
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((member) => (
              <MemberCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Management team */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-14">
            <div
              className="text-[11px] font-medium uppercase tracking-[0.22em]"
              style={{ color: "var(--gold)" }}
            >
              03 — Management
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Management Team
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MANAGEMENT.map((member) => (
              <MemberCard key={member.slug} member={member} />
            ))}
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
      className="group flex flex-col overflow-hidden bg-background transition-all duration-300"
      style={{
        border: "1px solid var(--border)",
        borderRadius: "2px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px rgba(11,29,58,0.10)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 4px rgba(0,0,0,0.04)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Photo */}
      <div
        className="relative w-full overflow-hidden bg-surface"
        style={{ aspectRatio: "4 / 5" }}
      >
        {/* Gold accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 z-10 h-[3px]"
          style={{ background: "var(--gold)" }}
        />

        {imgError ? (
          <ImageFallback name={member.name} />
        ) : (
          <img
            src={member.image}
            alt={`${member.name} — ${member.position}`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7">
        {/* Name + credential badge */}
        <div>
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
            {member.name}
          </h3>
          <div
            className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: "var(--gold)" }}
          >
            {member.position}
          </div>
          {member.credential && (
            <div
              className="mt-2 inline-block rounded-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]"
              style={{
                background: "var(--navy)",
                color: "var(--navy-foreground)",
                borderRadius: "2px",
              }}
            >
              {member.credential}
            </div>
          )}
        </div>

        {/* Experience pill */}
        <div className="mt-4 flex items-center gap-2">
          <span
            className="h-[1px] w-4 shrink-0"
            style={{ background: "var(--gold)" }}
          />
          <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {member.experience} of experience
          </span>
        </div>

        {/* Bio */}
        <div className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
          <p>{member.bio[0]}</p>

          {/* Expandable remaining bio */}
          {(member.bio.length > 1 || member.highlights) && (
            <>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: expanded ? "600px" : "0px", opacity: expanded ? 1 : 0 }}
              >
                {member.bio.slice(1).map((para, i) => (
                  <p key={i} className="mt-3">
                    {para}
                  </p>
                ))}
                {member.highlights && (
                  <ul className="mt-4 space-y-1">
                    {member.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span
                          className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full"
                          style={{ background: "var(--gold)" }}
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                onClick={() => setExpanded((v) => !v)}
                className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors"
                style={{ color: "var(--navy)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--navy)")
                }
              >
                {expanded ? "Show less" : "Read more"}
                <svg
                  className="h-3 w-3 transition-transform duration-200"
                  style={{ transform: expanded ? "rotate(180deg)" : "none" }}
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
      className="flex h-full w-full items-center justify-center"
      style={{ background: "var(--navy)" }}
    >
      <span
        className="text-5xl font-semibold tracking-tight"
        style={{ color: "var(--gold)" }}
      >
        {initials}
      </span>
    </div>
  );
}
