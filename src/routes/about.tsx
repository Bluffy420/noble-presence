import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getPageBySlug } from "@/lib/wordpress.functions";
import { SocialShare } from "@/components/SocialShare";

const aboutQuery = queryOptions({
  queryKey: ["wp-page", "about-us"],
  queryFn: () => getPageBySlug("about-us"),
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
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Couldn't load this page</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function AboutPage() {
  const { data: page } = useSuspenseQuery(aboutQuery);
  return (
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

        <SocialShare />

        <section>
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
            <div
              className="space-y-8 text-base leading-relaxed text-muted-foreground"
              style={{ lineHeight: 1.9, fontWeight: 500 }}
            >
              <style>{`
                @media (min-width: 1024px) { .about-prose { text-align: justify; } }
                @media (max-width: 1023px) { .about-prose { text-align: left; } }
              `}</style>
              <div className="about-prose space-y-8">

              <p>
                NB Associates – Advocates &amp; Legal Consultants is a distinguished full-service
                law firm in India, committed to delivering comprehensive, strategic, and
                result-oriented legal solutions to individuals, businesses, corporations,
                startups, MSMEs, financial institutions, and multinational entities.
              </p>

              <p>
                The firm has been established with the vision of providing exceptional legal
                representation, practical legal advice, and effective dispute resolution services
                across a broad spectrum of legal disciplines.
              </p>

              <p>
                The foundation of the firm has been built upon the principles of professional
                excellence, integrity, transparency, confidentiality, and client-centric legal
                services.
              </p>

              <p>
                Over the years, a strong reputation has been developed by NB Associates through
                consistent legal performance, extensive industry knowledge, and a deep
                understanding of the Indian legal system.
              </p>

              {/* Recognised for */}
              <div>
                <p className="mb-4">
                  The firm has been recognized for its ability to handle complex legal matters
                  involving:
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Arbitration",
                    "MSME Disputes",
                    "Commercial Litigation",
                    "Corporate Laws",
                    "Real Estate Disputes",
                    "Infrastructure Disputes",
                    "Criminal Litigation",
                    "Banking Disputes",
                    "Insolvency Matters",
                    "Consumer Disputes",
                    "RERA Matters",
                    "Foreign Exchange Laws",
                    "Constitutional Litigation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full"
                        style={{ background: "var(--gold)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                The legal services of the firm are provided throughout India, with a strong
                presence in Delhi, NCR, and various major cities.
              </p>

              {/* Courts & Tribunals */}
              <div>
                <p className="mb-4">The legal team regularly appears before:</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Supreme Court of India",
                    "High Courts",
                    "District Courts",
                    "Commercial Courts",
                    "Arbitration Tribunals",
                    "Consumer Commissions",
                    "RERA Authorities",
                    "NCLT",
                    "NCLAT",
                    "Debt Recovery Tribunals",
                    "Various Regulatory Authorities",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full"
                        style={{ background: "var(--gold)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                The philosophy of NB Associates has always been centered around understanding
                the unique legal requirements of every client and delivering customized legal
                strategies designed to achieve the best possible outcomes.
              </p>
            </div>
            </div>
          </div>
        </section>
      </main>
  );
}
