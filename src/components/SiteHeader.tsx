import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/about",   label: "About Us" },
  { to: "/team",    label: "Team" },
  { to: "/services",label: "Services" },
  { to: "/blogs",   label: "Blogs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full font-sans transition-shadow`}
      style={{
        background: "var(--ivory)",
        borderBottom: `1px solid var(--ivory-border)`,
        boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
          onClick={() => setOpen(false)}
        >
          <img
            src="https://home.nbassociates.net/logo.png"
            alt="NB Associates"
            className="h-11 w-11 rounded-lg object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span
              className="text-base font-bold tracking-[0.08em] uppercase"
              style={{ color: "var(--navy)" }}
            >
              NB Associates
            </span>
            <span
              className="text-[9.5px] uppercase tracking-[0.16em]"
              style={{ color: "var(--gold)" }}
            >
              Advocates &amp; Legal Consultants
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative text-[13px] font-semibold uppercase tracking-[0.08em] no-underline transition-colors"
              style={{ color: "var(--navy)" }}
              activeProps={{ style: { color: "var(--gold)" } }}
              activeOptions={{ exact: false }}
            >
              {n.label}
              {/* underline highlight on hover */}
              <span
                className="absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-200 group-hover:w-full"
                style={{ background: "var(--gold)" }}
              />
            </Link>
          ))}

          <Link
            to="/contact"
            className="inline-flex h-10 items-center justify-center rounded px-5 text-[12px] font-bold uppercase tracking-[0.08em] no-underline transition-all duration-200"
            style={{ background: "var(--navy)", color: "var(--navy-foreground)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
              (e.currentTarget as HTMLElement).style.color = "var(--navy)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--navy)";
              (e.currentTarget as HTMLElement).style.color = "var(--navy-foreground)";
            }}
          >
            Consult Us
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block h-[1.5px] w-[22px] transition-transform`}
              style={{
                background: "var(--navy)",
                transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-[1.5px] w-[22px] transition-opacity"
              style={{ background: "var(--navy)", opacity: open ? 0 : 1 }}
            />
            <span
              className={`block h-[1.5px] w-[22px] transition-transform`}
              style={{
                background: "var(--navy)",
                transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div
          className="lg:hidden"
          style={{ borderTop: `1px solid var(--ivory-border)`, background: "var(--ivory)" }}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b py-4 text-[14px] font-semibold uppercase tracking-[0.06em] no-underline transition-colors"
                style={{ borderColor: "var(--ivory-border)", color: "var(--navy)" }}
                activeProps={{ style: { color: "var(--gold)" } }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex h-12 items-center justify-center rounded text-[13px] font-bold uppercase tracking-[0.08em] no-underline transition-all duration-200"
              style={{ background: "var(--navy)", color: "var(--navy-foreground)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--navy)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--navy)";
                (e.currentTarget as HTMLElement).style.color = "var(--navy-foreground)";
              }}
            >
              Consult Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
