import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SERVICES } from "@/lib/services";
import { getPageBySlug } from "@/lib/wordpress.functions";
import { BackgroundPattern } from "@/components/BackgroundPattern";

const serviceQuery = (slug: string) =>
  queryOptions({
    queryKey: ["wp-page", slug],
    queryFn: () => getPageBySlug(slug),
  });

export const Route = createFileRoute("/services/$slug")({
  loader: async ({ params, context }) => {
    const svc = SERVICES.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    await context.queryClient.prefetchQuery(serviceQuery(params.slug));
    return { svc };
  },
  head: ({ params, loaderData }) => {
    const t = loaderData?.svc.title ?? "Service";
    return {
      meta: [
        { title: `${t} — NB Associates` },
        { name: "description", content: loaderData?.svc.short ?? "" },
        { property: "og:title", content: `${t} — NB Associates` },
        { property: "og:description", content: loaderData?.svc.short ?? "" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div style={{ maxWidth: "768px", margin: "0 auto", padding: "128px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontWeight: 700, fontSize: "1.75rem", color: "#0F172A", margin: 0 }}>
        Service not found
      </h1>
      <Link to="/services" style={{ color: "#1d4ed8", marginTop: "24px", display: "inline-block", textDecoration: "underline", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontWeight: 400 }}>
        View all services
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div style={{ maxWidth: "768px", margin: "0 auto", padding: "128px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontWeight: 700, fontSize: "1.75rem", color: "#0F172A", margin: 0 }}>
        Couldn't load this page
      </h1>
      <p style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "1rem", color: "#64748b", marginTop: "12px" }}>
        {error.message}
      </p>
    </div>
  ),
});

function splitTitle(title: string): { before: string; accent: string | null } {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) return { before: title, accent: null };
  const last = words.pop()!;
  return { before: words.join(" ") + " ", accent: last };
}

function ServicePage() {
  const { svc } = Route.useLoaderData();
  const { data: page } = useSuspenseQuery(serviceQuery(svc.slug));
  const related = SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3);

  const titleParts = splitTitle(svc.title);

  return (
    <main>
      {/* ── Hero — white, clean, left-aligned ── */}
      <section style={{ background: "#ffffff", position: "relative" }}>
        <BackgroundPattern type="floating-shapes" variant="light" />
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "120px 32px 64px" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
            <Link
              to="/services"
              style={{
                color: "#1d4ed8",
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Services
            </Link>
            <span style={{ width: "28px", height: "1px", background: "#1d4ed8", display: "block" }} />
            <span
              style={{
                color: "#64748b",
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              {svc.title}
            </span>
          </div>

          {/* Headline — bold Inter with key phrase in accent blue */}
          <h1
            style={{
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              lineHeight: 1.08,
              color: "#0F172A",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            {titleParts.before}
            {titleParts.accent && (
              <span style={{ color: "#1d4ed8" }}>{titleParts.accent}</span>
            )}
          </h1>

          {/* Body copy — muted, with blue link */}
          <p
            style={{
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#64748b",
              maxWidth: "640px",
              marginTop: "24px",
              marginBottom: 0,
            }}
          >
            {svc.description}{" "}
            <Link to="/contact" style={{ color: "#1d4ed8", textDecoration: "underline" }}>
              Speak to our team
            </Link>
            .
          </p>

          {/* Divider + CTA row */}
          <div style={{ marginTop: "48px", borderTop: "1px solid #e2e8f0", paddingTop: "28px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              {/* Left — meta info */}
              <span
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#64748b",
                }}
              >
                Practice Area · {svc.title}
              </span>

              {/* Right — CTA button */}
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#1d4ed8",
                  color: "#ffffff",
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "14px 32px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content section — surface ── */}
      <section style={{ background: "#f8fafc", position: "relative" }}>
        <BackgroundPattern type="concentric-rings" variant="light" />
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 32px 96px" }}>
          {page?.content?.rendered ? (
            <article
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          ) : (
            <p
              style={{
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "#64748b",
                margin: 0,
              }}
            >
              Detailed information about this service will be published shortly.
              In the meantime, please{" "}
              <Link to="/contact" style={{ color: "#1d4ed8", textDecoration: "underline" }}>
                contact us
              </Link>{" "}
              to discuss your matter.
            </p>
          )}
        </div>
      </section>

      {/* ── Related services — dark slate ── */}
      <section className="bg-dark-gradient" style={{ background: "#0F172A", position: "relative" }}>
        <BackgroundPattern type="circuit-board" variant="dark" />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "1.75rem",
                color: "#ffffff",
                margin: 0,
              }}
            >
              Other Practice Areas
            </h2>
            <Link
              to="/services"
              style={{
                color: "#1d4ed8",
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                textDecoration: "none",
              }}
            >
              All services &rarr;
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                style={{
                  display: "block",
                  padding: "32px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "border-color 0.3s ease, background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#1d4ed8";
                  el.style.background = "rgba(29,78,216,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <h3
                  style={{
                    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "#ffffff",
                    margin: 0,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#1d4ed8";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    marginTop: "12px",
                    marginBottom: 0,
                  }}
                >
                  {s.short}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}