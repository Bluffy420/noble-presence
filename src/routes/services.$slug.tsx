import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SERVICES } from "@/lib/services";
import { getPageBySlug } from "@/lib/wordpress.functions";

const serviceQuery = (slug: string) =>
  queryOptions({
    queryKey: ["wp-page", slug],
    queryFn: () => getPageBySlug({ data: { slug } }),
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
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Service not found</h1>
        <Link to="/services" className="mt-6 inline-block text-navy underline">
          View all services
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Couldn't load this page</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </div>
    </div>
  ),
});

function ServicePage() {
  const { svc } = Route.useLoaderData();
  const { data: page } = useSuspenseQuery(serviceQuery(svc.slug));
  const related = SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <Link to="/services" className="hover:text-navy">Services</Link>
            </div>
            <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.1] tracking-tight sm:text-[3rem]">
              {svc.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {svc.description}
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
            {page?.content ? (
              <article
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
            ) : (
              <p className="text-muted-foreground">
                Detailed information about this service will be published shortly.
                In the meantime, please{" "}
                <Link to="/contact" className="text-navy underline">contact us</Link>{" "}
                to discuss your matter.
              </p>
            )}
          </div>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">Other Practice Areas</h2>
              <Link to="/services" className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy">
                All services →
              </Link>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group bg-background p-8 transition-colors hover:bg-background/60"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
