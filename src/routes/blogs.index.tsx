import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getPostsPaginated } from "@/lib/wordpress.functions";
import { SocialShare } from "@/components/SocialShare";

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
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Couldn't load articles</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
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
      {/* ── Hero ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-10 lg:pt-32">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Journal
          </div>
          <h1 className="mt-8 text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-[3.5rem]">
            Legal Insights
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Articles, analysis, and commentary from the NB Associates team.
          </p>
        </div>
      </section>

      {/* ── Social Share ── */}
      <SocialShare />

      {/* ── Blog Grid ── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          {isError && (
            <p className="mb-8 text-muted-foreground">
              {(error as Error).message ?? "Could not load posts."}
            </p>
          )}

          {isLoading && posts.length === 0 ? (
            /* Skeleton */
            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: PER_PAGE }).map((_, i) => (
                <div key={i} className="flex flex-col bg-background p-7 animate-pulse">
                  <div className="h-3 w-24 rounded bg-muted" />
                  <div className="mt-4 h-5 w-3/4 rounded bg-muted" />
                  <div className="mt-3 h-3 w-full rounded bg-muted" />
                  <div className="mt-2 h-3 w-5/6 rounded bg-muted" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-muted-foreground">No articles yet. Check back soon.</p>
          ) : (
            <div
              className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3"
              style={{ opacity: isLoading ? 0.6 : 1, transition: "opacity 0.2s" }}
            >
              {posts.map((p) => (
                <a
                  key={p.id}
                  href={p.link}
                  className="group flex flex-col bg-background no-underline"
                >
                  <div className="flex flex-1 flex-col p-7">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {new Date(p.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <h2
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
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "0.02em",
    border: "1px solid var(--border)",
    borderRadius: "2px",
    background: "var(--background)",
    color: "var(--foreground)",
    cursor: "pointer",
    transition: "border-color 0.15s, color 0.15s, background 0.15s",
    textDecoration: "none",
    userSelect: "none" as const,
    flexShrink: 0,
  };

  const active: React.CSSProperties = { ...base, background: "var(--navy)", color: "#ffffff", borderColor: "var(--navy)", cursor: "default" };
  const disabled: React.CSSProperties = { ...base, color: "var(--muted-foreground)", cursor: "not-allowed", opacity: 0.45 };

  const hover = {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      el.style.borderColor = "var(--navy)";
      el.style.color = "var(--navy)";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      el.style.borderColor = "var(--border)";
      el.style.color = "var(--foreground)";
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
        marginTop: "3rem",
      }}
    >
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="Previous page"
        style={current === 1 ? disabled : base}
        {...(current !== 1 ? hover : {})}
      >
        ← Prev
      </button>

      {items.map((item, i) =>
        item === "…" ? (
          <span key={`ellipsis-${i}`} style={{ ...base, border: "none", cursor: "default", color: "var(--muted-foreground)" }}>
            …
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
        Next →
      </button>
    </nav>
  );
}
