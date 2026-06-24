import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getPageBySlug } from "@/lib/wordpress.functions";

const aboutQuery = queryOptions({
  queryKey: ["wp-page", "about-us"],
  queryFn: () => getPageBySlug({ data: { slug: "about-us" } }),
});

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — NB Associates" },
      { name: "description", content: "NB Associates is a full-service law firm and legal consultancy with over 26 years of practice across India." },
      { property: "og:title", content: "About Us — NB Associates" },
      { property: "og:description", content: "A full-service law firm and legal consultancy with 26+ years of practice." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  loader: ({ context }) => context.queryClient.prefetchQuery(aboutQuery),
  component: AboutPage,
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Couldn't load this page</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </div>
      <SiteFooter />
    </div>
  ),
});

function AboutPage() {
  const { data: page } = useSuspenseQuery(aboutQuery);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 pt-24 pb-20 lg:px-10 lg:pt-32">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              The Firm
            </div>
            <h1 className="mt-8 text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-[4rem]">
              About NB Associates
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A full-service law firm and legal consultancy advising businesses and individuals
              across India for over 26 years.
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
            {page?.content ? (
              <article className="wp-content" dangerouslySetInnerHTML={{ __html: page.content }} />
            ) : (
              <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  Established in 1998, NB Associates has grown into a trusted name in commercial
                  litigation, debt recovery, arbitration, and corporate advisory work. Our
                  practice combines courtroom experience with a commercial sensibility, and we
                  act for clients ranging from individual entrepreneurs to listed companies and
                  financial institutions.
                </p>
                <p>
                  We are based in New Delhi and represent clients across trial courts, High
                  Courts, the Supreme Court, and a wide range of tribunals.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
