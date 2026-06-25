import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-xl font-semibold tracking-tight">NB Associates</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Advocates &amp; Legal Consultants
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A full-service law firm and legal consultancy serving businesses and individuals
              across India for over 26 years.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
              Quick Links
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-navy">Home</Link></li>
              <li><Link to="/services" className="hover:text-navy">Services</Link></li>
              <li><Link to="/about" className="hover:text-navy">About Us</Link></li>
              <li><Link to="/blogs" className="hover:text-navy">Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-navy">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
              Practice Areas
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {SERVICES.slice(0, 6).map((s) =>
                s.externalUrl ? (
                  <li key={s.slug}>
                    <a href={s.externalUrl} className="hover:text-navy">
                      {s.title}
                    </a>
                  </li>
                ) : (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="hover:text-navy"
                    >
                      {s.title}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
              Contact
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+919811899279" className="hover:text-navy">+91 98118 99279</a>
              </li>
              <li>
                <a href="mailto:mail@nbassociates.net" className="hover:text-navy">
                  mail@nbassociates.net
                </a>
              </li>
              <li className="leading-relaxed">New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} NB Associates. All rights reserved.</div>
          <div>Advocates &amp; Legal Consultants</div>
        </div>
      </div>
    </footer>
  );
}
