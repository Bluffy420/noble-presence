import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/wordpress.functions";

const postsQuery = queryOptions({
  queryKey: ["posts", "all"],
  queryFn: () => getPosts({ perPage: 6 }),
});

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
  loader: ({ context }) => context.queryClient.prefetchQuery(postsQuery),
  component: BlogsPage,
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Couldn't load articles</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </div>
    </div>
  ),
});

function BlogsPage() {
  const { data: posts } = useSuspenseQuery(postsQuery);
  return (
    <main>
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

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No articles yet. Check back soon.</p>
          ) : (
            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <a
                  key={p.id}
                  href={p.link}
                  className="group flex flex-col bg-background no-underline"
                >
                  <div className="flex flex-1 flex-col p-7">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
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
        </div>
      </section>
    </main>
  );
}
