import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getPostBySlug } from "@/lib/wordpress.functions";
import { SocialShare } from "@/components/SocialShare";
import { BackgroundPattern } from "@/components/BackgroundPattern";

const postQuery = (slug: string) =>
  queryOptions({
    queryKey: ["wp-post", slug],
    queryFn: async () => {
      const r = await getPostBySlug(slug);
      if (!r) throw new Error("Not found");
      return r;
    },
  });

export const Route = createFileRoute("/blogs/$slug")({
  loader: async ({ params, context }) => {
    try {
      await context.queryClient.ensureQueryData(postQuery(params.slug));
    } catch {
      throw notFound();
    }
  },
  head: ({ params }) => ({
    meta: [
      { title: "Article — NB Associates" },
      { property: "og:url", content: `/blogs/${params.slug}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `/blogs/${params.slug}` }],
  }),
  component: PostPage,
  notFoundComponent: () => (
    <div
      style={{
        background: "#ffffff",
        padding: "128px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: '"Inter", "Inter Variable", ui-sans-serif, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            lineHeight: "1.1",
            color: "#0F172A",
            margin: "0 0 16px",
          }}
        >
          Article not found
        </h1>
        <p
          style={{
            fontFamily: '"Inter", "Inter Variable", ui-sans-serif, system-ui, sans-serif',
            fontSize: "0.875rem",
            lineHeight: "1.6",
            color: "#64748b",
            margin: "0 0 28px",
          }}
        >
          This article may have been removed or the link is no longer valid.
        </p>
        <Link
          to="/blogs"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "48px",
            padding: "0 32px",
            background: "#1d4ed8",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "0.875rem",
            textDecoration: "none",
            borderRadius: "8px",
            lineHeight: "1",
          }}
        >
          Back to Legal Insights
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div
      style={{
        background: "#ffffff",
        padding: "128px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: '"Inter", "Inter Variable", ui-sans-serif, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            lineHeight: "1.1",
            color: "#0F172A",
            margin: "0 0 16px",
          }}
        >
          Couldn't load this article
        </h1>
        <p
          style={{
            fontFamily: '"Inter", "Inter Variable", ui-sans-serif, system-ui, sans-serif',
            fontSize: "0.875rem",
            lineHeight: "1.6",
            color: "#64748b",
            margin: "0 0 28px",
          }}
        >
          {error.message}
        </p>
        <Link
          to="/blogs"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "48px",
            padding: "0 32px",
            background: "#1d4ed8",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "0.875rem",
            textDecoration: "none",
            borderRadius: "8px",
            lineHeight: "1",
          }}
        >
          Back to Legal Insights
        </Link>
      </div>
    </div>
  ),
});

function PostPage() {
  const { slug } = Route.useParams();
  const { data: post } = useSuspenseQuery(postQuery(slug));

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const excerptText =
    post.excerpt?.rendered
      ?.replace(/<[^>]+>/g, "")
      ?.trim() || "";

  return (
    <main style={{ background: "#ffffff", minHeight: "100vh" }}>
      <article>
        {/* ── Hero ── */}
        <header
          style={{
            background: "#ffffff",
            padding: "80px 24px 0",
          }}
        >
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            {/* Back link */}
            <Link
              to="/blogs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8125rem",
                fontWeight: 400,
                color: "#64748b",
                textDecoration: "none",
                lineHeight: "1",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{ transform: "translateY(0.5px)" }}
              >
                <path
                  d="M9 3L5 7l4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Legal Insights
            </Link>

            {/* Headline */}
            <h1
              style={{
                marginTop: "24px",
                fontFamily: '"Inter", "Inter Variable", ui-sans-serif, system-ui, sans-serif',
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                lineHeight: "1.08",
                color: "#0F172A",
                margin: "24px 0 0",
              }}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* Excerpt */}
            {excerptText && (
              <p
                style={{
                  marginTop: "16px",
                  fontFamily: '"Inter", "Inter Variable", ui-sans-serif, system-ui, sans-serif',
                  fontSize: "1rem",
                  lineHeight: "1.65",
                  color: "#64748b",
                  maxWidth: "600px",
                }}
              >
                {excerptText}
              </p>
            )}

            {/* Date */}
            <p
              style={{
                marginTop: "24px",
                fontFamily: '"Inter", "Inter Variable", ui-sans-serif, system-ui, sans-serif',
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "#64748b",
              }}
            >
              {formattedDate}
            </p>
          </div>
        </header>

        {/* ── Featured image ── */}
        {featuredImage && (
          <div
            style={{
              maxWidth: "960px",
              margin: "48px auto 0",
              padding: "0 24px",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                borderRadius: "12px",
                width: "100%",
                background: "#f8fafc",
              }}
            >
              <img
                src={featuredImage}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        )}

        {/* ── Article body ── */}
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: featuredImage ? "56px 24px 48px" : "64px 24px 48px",
          }}
        >
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            style={{
              fontFamily: '"Inter", "Inter Variable", ui-sans-serif, system-ui, sans-serif',
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#0f172a",
            }}
          />

          {/* Social share */}
          <div
            style={{
              marginTop: "48px",
              paddingTop: "24px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <SocialShare />
          </div>
        </div>

        {/* ── CTA ── */}
        <section
          style={{
            borderTop: "1px solid #e2e8f0",
            background: "#f8fafc",
            padding: "48px 24px",
            position: "relative",
          }}
        >
          <BackgroundPattern type="floating-shapes" variant="light" />
          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#0F172A",
              }}
            >
              Need legal counsel?
            </span>

            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "48px",
                padding: "0 32px",
                background: "#1d4ed8",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.875rem",
                textDecoration: "none",
                borderRadius: "8px",
                lineHeight: "1",
              }}
            >
              Request a Consultation
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}