import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SERVICES } from "@/lib/services";
import { getPosts } from "@/lib/wordpress.functions";
import { GeometricBackground } from "@/components/GeometricBackground";

const postsQuery = queryOptions({
  queryKey: ["posts", "home"],
  queryFn: () => getPosts({ perPage: 3 }),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NB Associates — Advocates & Legal Consultants" },
      {
        name: "description",
        content:
          "Trusted legal counsel for businesses and individuals across India. 26+ years of experience across commercial litigation, debt recovery, arbitration, and corporate law.",
      },
      { property: "og:title", content: "NB Associates — Advocates & Legal Consultants" },
      { property: "og:description", content: "Trusted legal counsel for businesses and individuals across India." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(postsQuery);
  },
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
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

function Hero() {
  return (
    <section className="hero-section border-b border-border">
      <div className="hero-grid">

        {/* ── LEFT: text content ────────────────────────── */}
        <div className="hero-text-col">
          <div className="hero-text-inner">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>
              Est. 2001 · New Delhi
            </div>

            <h1 className="hero-heading mt-6 font-bold tracking-tight">
              Trusted legal counsel for businesses and individuals across India
              <span className="hero-gold-dot" aria-hidden="true">.</span>
            </h1>

            <p className="hero-body mt-6 leading-relaxed text-muted-foreground">
              NB Associates is a full-service law firm and legal consultancy advising clients in
              various legal fields with discretion, rigour, and 26+ years of practice.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center bg-navy px-7 text-sm font-semibold tracking-wide text-navy-foreground transition-colors hover:bg-navy-hover"
              >
                Consult Us
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 items-center justify-center border border-border bg-background px-7 text-sm font-medium text-foreground transition-colors hover:border-navy hover:text-navy"
              >
                Our Practice Areas
              </Link>
            </div>
          </div>
        </div>

        {/* ── RIGHT: navy panel with emblem ─────────────── */}
        <div className="hero-navy-col" aria-hidden="true">
          <GeometricBackground />
        </div>

      </div>
    </section>
  );
}

const STATS = [
  { value: "26+", label: "Years of Experience" },
  { value: "15+", label: "Legal Professionals" },
  { value: "2,500+", label: "Matters Handled" },
];

function TrustStats() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background p-10 lg:p-12">
              <div className="text-[3rem] font-semibold leading-none tracking-tight text-navy sm:text-[3.5rem]">
                {s.value}
              </div>
              <div className="mt-4 text-sm uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>
          Trusted by businesses &amp; individuals across India
        </p>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>
              02 — Practice
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Our Services
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground lg:col-span-5">
            Comprehensive legal solutions tailored to diverse legal and business needs — from
            pre-litigation strategy to the final execution.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <a
              key={s.slug}
              href={s.wpUrl}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-surface lg:p-10 no-underline"
            >
              <div className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight text-foreground group-hover:text-navy">
                {s.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.short}
              </p>
              <span className="mt-8 inline-flex items-center text-[12px] font-medium uppercase tracking-[0.18em] text-navy">
                Learn more
                <svg className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" viewBox="0 0 12 12" fill="none">
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

const CLIENT_LOGOS = [
  { name: "Kotak Mahindra Bank", file: "kotak-mahindra-bank.svg" },
  { name: "Yes Bank",            file: "yes-bank.svg"            },
  { name: "Thomson Digital",     file: "thomson-digital.svg"     },
  { name: "Metro Tires",         file: "metro-tires.svg"         },
  { name: "Metro Hotom",         file: "metro-hotom.svg"         },
  { name: "Janeth Leisure",      file: "janeth-leisure.svg"      },
  { name: "CH Component",        file: "ch-component.svg"        },
  { name: "La Prestine",         file: "la-prestine.svg"         },
  { name: "Micro Network",       file: "micro-network.svg"       },
  { name: "Star Express",        file: "star-express.svg"        },
];

function Clients() {
  // Duplicate for seamless infinite loop
  const loop = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="border-b border-border bg-surface">
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-6 py-16 pb-10 lg:px-10">
        <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Our Clients</h2>
          <p className="text-sm uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
            03 — Engagements across sectors
          </p>
        </div>
      </div>

      {/* Logo carousel strip */}
      <div className="relative overflow-hidden border-y border-border bg-background py-10">
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
        />

        <div className="marquee-track flex w-max items-center gap-20 px-10">
          {loop.map((client, i) => (
            <div
              key={i}
              className="client-logo-item flex shrink-0 items-center justify-center"
              style={{ height: 60, minWidth: 120 }}
            >
              <img
                src={`/logos/${client.file}`}
                alt={client.name}
                style={{
                  maxHeight: 60,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>
              04 — The Firm
            </div>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Why NB Associates
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Six commitments that shape how we represent our clients and conduct every matter.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:col-span-8">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.t} className="bg-background p-8">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{d.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const NEW_DELHI_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.2142873!3d28.6279027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3396400001%3A0x8bec8e0f5abf5d85!2sPRAKASH%20DEEP%2C%20607%2C%20Tolstoy%20Rd%2C%20Barakhamba%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000";

const CORPORATE_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!4v1782633064747!6m8!1m7!1sJnn7bG-2gNMwp5Oulq22Wg!2m2!1d28.64246607765575!2d77.33512435061388!3f43.35121248935134!4f11.833760599795141!5f0.7820865974627469";

function ConsultSection() {
  const [activeOffice, setActiveOffice] = React.useState<"newdelhi" | "corporate">("newdelhi");

  const mapSrc = activeOffice === "newdelhi" ? NEW_DELHI_MAP_URL : CORPORATE_MAP_EMBED;
  const mapTitle = activeOffice === "newdelhi" ? "New Delhi Office location" : "Corporate Office location";

  return (
    <section className="border-b border-border bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-28">
        {/* Left: contact info */}
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
            05 — Consult Us
          </div>
          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Speak with our counsel.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/75">
            Reach out for a confidential consultation. Our team will respond within one
            business day to discuss your matter and the next steps.
          </p>
          <div className="mt-10 space-y-5 text-[15px]">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Phone</div>
              <a href="tel:+919811899279" className="mt-1 block text-lg">+91 98118 99279</a>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Email</div>
              <a href="mailto:mail@nbassociates.net" className="mt-1 block text-lg">mail@nbassociates.net</a>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex h-12 items-center justify-center bg-white px-7 text-sm font-medium text-navy transition-colors hover:bg-white/90"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Right: toggle buttons + map */}
        <div className="flex flex-col gap-5">
          {/* Toggle buttons */}
          <div className="flex flex-wrap gap-3">
            {(
              [
                { id: "newdelhi", label: "New Delhi Office" },
                { id: "corporate", label: "Corporate Office" },
              ] as const
            ).map(({ id, label }) => {
              const isActive = activeOffice === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveOffice(id)}
                  className="inline-flex h-11 items-center justify-center px-6 text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  style={{
                    background: isActive ? "var(--gold)" : "transparent",
                    color: isActive ? "#0a1628" : "rgba(255,255,255,0.7)",
                    border: isActive
                      ? "1px solid var(--gold)"
                      : "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "2px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "var(--gold)";
                      e.currentTarget.style.color = "var(--gold)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    }
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Map */}
          <div className="h-[380px] w-full overflow-hidden border border-white/10 lg:h-[440px]">
            <iframe
              key={mapSrc}
              title={mapTitle}
              src={mapSrc}
              className="h-full w-full"
              style={{ filter: "grayscale(0.3) contrast(1.05)" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const { data: posts } = useSuspenseQuery(postsQuery);
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>
              06 — Journal
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Legal Insights
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Explore our most-read legal articles and resources.
            </p>
          </div>
          <a href="https://nbassociates.net/blog" className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy hover:underline no-underline">
            View all articles →
          </a>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <a
              key={p.id}
              href={p.link}
              className="group flex flex-col bg-background no-underline"
            >
              <div className="flex flex-1 flex-col p-7">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </div>
                <h3
                  className="mt-4 text-lg font-semibold leading-snug tracking-tight text-foreground group-hover:text-navy"
                  dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                />
                <div
                  className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }}
                />
                <span className="mt-6 text-[12px] font-medium uppercase tracking-[0.18em] text-navy">
                  Read more →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
