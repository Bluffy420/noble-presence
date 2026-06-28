import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer
      className="font-sans"
      style={{ borderTop: "1px solid var(--ivory-border)", background: "var(--ivory)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Brand — col-span-3 */}
          <div className="lg:col-span-3">
            <div className="text-lg font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              NB Associates
            </div>
            <div
              className="mt-1 text-[10px] uppercase tracking-[0.18em]"
              style={{ color: "var(--muted-foreground)" }}
            >
              Advocates &amp; Legal Consultants
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              A full-service law firm and legal consultancy serving businesses and individuals
              across India for over 26 years.
            </p>
          </div>

          {/* Quick Links — col-span-2 */}
          <div className="lg:col-span-2">
            <div
              className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em]"
              style={{ color: "var(--foreground)" }}
            >
              Quick Links
            </div>
            <ul className="space-y-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
              {[
                { to: "/",        label: "Home" },
                { to: "/services",label: "Services" },
                { to: "/about",   label: "About Us" },
                { to: "/blogs",   label: "Blogs" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="no-underline transition-colors"
                    style={{ color: "var(--muted-foreground)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas — col-span-5, two sub-columns */}
          <div className="lg:col-span-5">
            <div
              className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em]"
              style={{ color: "var(--foreground)" }}
            >
              Practice Areas
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {SERVICES.map((s) => (
                <a
                  key={s.slug}
                  href={s.wpUrl}
                  className="no-underline transition-colors"
                  style={{ color: "var(--muted-foreground)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact — col-span-2 */}
          <div className="lg:col-span-2">
            <div
              className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em]"
              style={{ color: "var(--foreground)" }}
            >
              Contact
            </div>
            <ul className="space-y-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
              <li>
                <a
                  href="tel:+919811899279"
                  className="no-underline transition-colors"
                  style={{ color: "var(--muted-foreground)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
                >
                  +91 98118 99279
                </a>
              </li>
              <li>
                <a
                  href="mailto:mail@nbassociates.net"
                  className="no-underline transition-colors"
                  style={{ color: "var(--muted-foreground)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
                >
                  mail@nbassociates.net
                </a>
              </li>
              <li style={{ color: "var(--muted-foreground)" }}>New Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col items-start justify-between gap-4 border-t pt-8 text-xs sm:flex-row sm:items-center"
          style={{ borderColor: "var(--ivory-border)", color: "var(--muted-foreground)" }}
        >
          <div>© {new Date().getFullYear()} NB Associates — Advocates &amp; Legal Consultants</div>
          <div>All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}
