import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — NB Associates" },
      { name: "description", content: "Comprehensive legal services: pre-litigation recovery, MSME proceedings, commercial debt recovery, arbitration, corporate recovery, and N.I. Act matters." },
      { property: "og:title", content: "Services — NB Associates" },
      { property: "og:description", content: "Comprehensive legal services across commercial recovery, arbitration, and corporate matters." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-10 lg:pt-32 lg:pb-24">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Practice
          </div>
          <h1 className="mt-8 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-[3.5rem]">
            Our Services
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Comprehensive legal solutions tailored to diverse legal and business needs.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {SERVICES.map((s, i) => {
              const inner = (
                <>
                  <div className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-foreground group-hover:text-navy">
                    {s.title}
                  </h2>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-8 inline-flex items-center text-[12px] font-medium uppercase tracking-[0.18em] text-navy">
                    Read more →
                  </span>
                </>
              );
              const cls = "group flex flex-col bg-background p-10 transition-colors hover:bg-surface";
              return s.externalUrl ? (
                <a key={s.slug} href={s.externalUrl} className={cls}>
                  {inner}
                </a>
              ) : (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className={cls}
                >
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
