import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getPostBySlug } from "@/lib/wordpress.functions";

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
  <div className="mx-auto max-w-3xl px-6 py-32 text-center">
    <h1 className="text-3xl font-semibold tracking-tight">Article not found</h1>
    <Link to="/blogs" className="mt-6 inline-block text-navy underline">
      Back to all articles
    </Link>
  </div>
  ),
  errorComponent: ({ error }) => (
  <div className="mx-auto max-w-3xl px-6 py-32 text-center">
    <h1 className="text-2xl font-semibold tracking-tight">Couldn't load this article</h1>
    <p className="mt-3 text-muted-foreground">{error.message}</p>
  </div>
  ),
});

function PostPage() {
  const { slug } = Route.useParams();
  const { data: post } = useSuspenseQuery(postQuery(slug));

  return (
    <main>
      <article>
        <header className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
            <Link
              to="/blogs"
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground hover:text-navy"
            >
              ← Legal Insights
            </Link>
            <h1
              className="mt-8 text-[2rem] font-semibold leading-[1.15] tracking-tight sm:text-[2.75rem]"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div className="mt-6 text-sm uppercase tracking-[0.14em] text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </div>
          </div>
        </header>

        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
          <div className="mx-auto max-w-5xl px-6 pt-12 lg:px-10">
            <div className="aspect-[16/9] w-full overflow-hidden bg-surface">
              <img src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        )}

        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
          <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </article>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">Need legal counsel?</h2>
          <p className="mt-3 text-muted-foreground">
            Speak with our team for a confidential consultation.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center bg-navy px-7 text-sm font-medium text-navy-foreground hover:bg-navy-hover"
          >
            Consult Us
          </Link>
        </div>
      </section>
    </main>
  );
}
