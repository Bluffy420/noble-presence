import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getPostsPaginated } from "@/lib/wordpress.functions";
import { SocialShare } from "@/components/SocialShare";
import { BackgroundPattern } from "@/components/BackgroundPattern";

const PER_PAGE = 9;

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Legal Insights — NB Associates" },
      { name: "description", content: "Articles, analysis, and commentary on commercial law, debt recovery, MSME, arbitration, and corporate matters." },
      { property: "og:title", content: "Legal Insights — NB Associates" },
      { property: "og:description", content: "Articles and analysis on commercial law and recovery practice." },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: BlogsPage,
  errorComponent: ({ error }: { error: Error }) => (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "768px", margin: "0 auto", padding: "8rem 1.5rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#0f172a" }}>Couldn't load articles</h1>
        <p style={{ marginTop: "0.75rem", color: "#64748b" }}>{error.message}</p>
      </div>
    </div>
  ),
});

function BlogsPage() {
  const [page, setPage] = React.useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", "paginated", page],
    queryFn: () => getPostsPaginated({ page, perPage: PER_PAGE }),
    placeholderData: (prev) => prev,
  });

  const posts = data?.posts ?? [];
  const totalPages = data?.totalPages ?? 1;

  return (
    <main>
      {/* ── Hero — Clean, white, left-aligned ── */}
      <section style={{ backgroundColor: "#ffffff" }}>
        <BackgroundPattern type="floating-shapes" variant="light" />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "7rem 1.5rem 5rem 1.5rem" }}>
          <div style={{ maxWidth: "720px" }}>
            <h1
              style={{
                fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#0f172a",
                margin: 0,
              }}
            >
              Legal <span style={{ color: "#1d4ed8" }}>Insights</span>
            </h1>
            <p
              style={{
                fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                fontSize: "1.125rem",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#64748b",
                marginTop: "1.5rem",
                maxWidth: "560px",
              }}
            >
              Articles, analysis, and commentary from the NB Associates team —{" "}
              <span style={{ color: "#1d4ed8", fontWeight: 600 }}>explore our library</span>.
            </p>
            {/* Thin divider */}
            <div style={{ height: "1px", backgroundColor: "#e2e8f0", marginTop: "2.5rem", width: "100%" }} />
            {/* CTA row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#64748b",
                }}
              >
                Journal &middot; NB Associates
              </span>
              <a
                href="#articles"
                style={{
                  display: "inline-block",
                  fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "#ffffff",
                  backgroundColor: "#1d4ed8",
                  padding: "0.875rem 2rem",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "6px",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1e40af"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1d4ed8"; }}
              >
                Browse Articles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Share ── */}
      <SocialShare />

      {/* ── Blog Grid — White background ── */}
      <section id="articles" style={{ backgroundColor: "#f8fafc" }}>
        <BackgroundPattern type="barcode" variant="light" />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem 6rem 1.5rem" }}>
          {isError && (
            <p style={{ color: "#64748b", marginBottom: "2rem" }}>
              {(error as Error).message ?? "Could not load posts."}
            </p>
          )}

          {isLoading && posts.length === 0 ? (
            /* Skeleton */
            <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
              {Array.from({ length: PER_PAGE }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    animation: "pulse 2s infinite",
                  }}
                >
                  <div style={{ height: "0.75rem", width: "6rem", backgroundColor: "#e2e8f0", borderRadius: "4px" }} />
                  <div style={{ height: "1.25rem", width: "75%", backgroundColor: "#e2e8f0", borderRadius: "4px", marginTop: "1rem" }} />
                  <div style={{ height: "0.75rem", width: "100%", backgroundColor: "#e2e8f0", borderRadius: "4px", marginTop: "0.75rem" }} />
                  <div style={{ height: "0.75rem", width: "83%", backgroundColor: "#e2e8f0", borderRadius: "4px", marginTop: "0.5rem" }} />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p style={{ color: "#64748b" }}>No articles yet. Check back soon.</p>
          ) : (
            <div
              style={{
                display: "grid",
                gap: "1.5rem",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                opacity: isLoading ? 0.6 : 1,
                transition: "opacity 0.2s",
              }}
            >
              {posts.map((p) => (
                <a
                  key={p.id}
                  href={p.link}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    transition: "box-shadow 0.25s, border-color 0.25s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#1d4ed8";
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(29,78,216,0.10)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "2rem" }}>
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#64748b",
                      }}
                    >
                      {new Date(p.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <h2
                      style={{
                        fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        lineHeight: 1.35,
                        letterSpacing: "-0.01em",
                        color: "#0f172a",
                        marginTop: "1.25rem",
                        marginBottom: 0,
                      }}
                      dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                    />
                    <div
                      style={{
                        fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        lineHeight: 1.7,
                        color: "#64748b",
                        marginTop: "0.75rem",
                        flex: 1,
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                      dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }}
                    />
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#1d4ed8",
                        marginTop: "1.5rem",
                        transition: "color 0.2s",
                      }}
                    >
                      Read more &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <Pagination current={page} total={totalPages} onChange={setPage} />
          )}
        </div>
      </section>
    </main>
  );
}

// ── Pagination ────────────────────────────────────────────────────────────────
function Pagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (page: number) => void;
}) {
  // Smart page list: always include 1, current-1, current, current+1, total
  // with ellipsis where there are gaps
  const pageSet = new Set<number>();
  [1, current - 1, current, current + 1, total].forEach((n) => {
    if (n >= 1 && n <= total) pageSet.add(n);
  });
  const sorted = Array.from(pageSet).sort((a, b) => a - b);

  const items: (number | "…")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) items.push("…");
    items.push(p);
  });

  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 40,
    height: 40,
    padding: "0 0.75rem",
    fontSize: "0.8125rem",
    fontWeight: 500,
    letterSpacing: "0.02em",
    border: "1px solid #e2e8f0",
    borderRadius: "6px",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    cursor: "pointer",
    transition: "border-color 0.15s, color 0.15s, background 0.15s",
    textDecoration: "none",
    userSelect: "none" as const,
    flexShrink: 0,
  };

  const active: React.CSSProperties = {
    ...base,
    backgroundColor: "#1d4ed8",
    color: "#ffffff",
    borderColor: "#1d4ed8",
    cursor: "default",
  };

  const disabled: React.CSSProperties = {
    ...base,
    color: "#64748b",
    cursor: "not-allowed",
    opacity: 0.45,
  };

  const hover = {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      el.style.borderColor = "#1d4ed8";
      el.style.color = "#1d4ed8";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      el.style.borderColor = "#e2e8f0";
      el.style.color = "#0f172a";
    },
  };

  return (
    <nav
      aria-label="Blog pagination"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.375rem",
        marginTop: "3.5rem",
      }}
    >
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="Previous page"
        style={current === 1 ? disabled : base}
        {...(current !== 1 ? hover : {})}
      >
        &larr; Prev
      </button>

      {items.map((item, i) =>
        item === "…" ? (
          <span key={`ellipsis-${i}`} style={{ ...base, border: "none", cursor: "default", color: "#64748b" }}>
            &hellip;
          </span>
        ) : (
          <button
            key={item}
            onClick={() => item !== current && onChange(item as number)}
            aria-label={`Page ${item}`}
            aria-current={item === current ? "page" : undefined}
            style={item === current ? active : base}
            {...(item !== current ? hover : {})}
          >
            {item}
          </button>
        ),
      )}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        aria-label="Next page"
        style={current === total ? disabled : base}
        {...(current !== total ? hover : {})}
      >
        Next &rarr;
      </button>
    </nav>
  );
}