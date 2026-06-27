import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SERVICES } from "@/lib/services";
import { getPosts } from "@/lib/wordpress.functions";

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
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-28 lg:px-10 lg:pt-32 lg:pb-36">
        <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Est. 1998 · New Delhi
        </div>
        <h1 className="mt-8 max-w-5xl text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-[3.5rem] lg:text-[4.5rem]">
          Trusted legal counsel for businesses and individuals across India.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          NB Associates is a full-service law firm and legal consultancy advising clients on
          commercial recovery, arbitration, and corporate matters with discretion, rigour, and
          26+ years of practice.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center bg-navy px-7 text-sm font-medium tracking-wide text-navy-foreground transition-colors hover:bg-navy-hover"
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
        <p className="mt-10 text-center text-sm uppercase tracking-[0.22em] text-muted-foreground">
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
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              02 — Practice
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Our Services
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground lg:col-span-5">
            Comprehensive legal solutions tailored to diverse legal and business needs — from
            pre-litigation strategy to recovery, arbitration, and complex corporate matters.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-surface lg:p-10"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const CLIENT_LOGOS = [
  "Allied Industries", "Northern Steel Pvt. Ltd.", "Capital Traders", "Meridian Exports",
  "Vista Manufacturing", "Indus Engineering", "Crescent Holdings", "Pioneer Polymers",
  "Sterling Logistics", "Apex Constructions",
];

function Clients() {
  const loop = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Our Clients</h2>
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
            03 — Engagements across sectors
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden border-y border-border bg-background py-10">
        <div className="marquee-track flex w-max items-center gap-16 px-6">
          {loop.map((name, i) => (
            <div
              key={i}
              className="flex h-14 min-w-[200px] items-center justify-center border-l border-border px-8 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground first:border-l-0"
            >
              {name}
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
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
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

function ConsultSection() {
  return (
    <section className="border-b border-border bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-28">
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
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Office</div>
              <div className="mt-1">New Delhi, India</div>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex h-12 items-center justify-center bg-white px-7 text-sm font-medium text-navy transition-colors hover:bg-white/90"
          >
            Schedule a Consultation
          </Link>
        </div>
        <div className="h-[420px] w-full overflow-hidden border border-white/10 lg:h-auto">
          <iframe
            title="NB Associates location"
            src="https://www.google.com/maps?q=Connaught+Place,+New+Delhi&output=embed"
            className="h-full w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              06 — Journal
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Legal Insights
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Explore our most-read legal articles and resources.
            </p>
          </div>
          <Link to="/blogs" className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy hover:underline">
            View all articles →
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link
              key={p.id}
              to="/blogs/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col bg-background"
            >
              {p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                <div className="aspect-[4/3] overflow-hidden bg-surface">
                  <img
                    src={p._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                    alt=""
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-surface" />
              )}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
