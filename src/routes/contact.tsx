import { createFileRoute } from "@tanstack/react-router";
import { OfficeMap } from "@/components/OfficeMap";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NB Associates" },
      { name: "description", content: "Speak with NB Associates. Phone: +91 98118 99279 · Email: mail@nbassociates.net" },
      { property: "og:title", content: "Contact — NB Associates" },
      { property: "og:description", content: "Speak with our team for a confidential consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-10 lg:pt-32">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Consult Us
          </div>
          <h1 className="mt-8 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-[4rem]">
            Speak with our counsel.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Reach out for a confidential consultation. Our team will respond within one
            business day.
          </p>
        </div>
      </section>

      {/* ── Contact strip: Phone / Email / Offices ─────────────── */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border-y border-border bg-border px-0 lg:grid-cols-4">
          {/* Phone */}
          <div className="bg-background p-10 lg:p-12">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Phone</div>
            <a
              href="tel:+919811899279"
              className="mt-3 block text-xl font-semibold text-foreground hover:text-navy"
            >
              +91 98118 99279
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Mon–Sat · 10:00 to 19:00 IST
            </p>
          </div>

          {/* Email */}
          <div className="bg-background p-10 lg:p-12">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Email</div>
            <a
              href="mailto:mail@nbassociates.net"
              className="mt-3 block text-xl font-semibold text-foreground hover:text-navy"
            >
              mail@nbassociates.net
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Replies within one business day.
            </p>
          </div>

          {/* New Delhi Office */}
          <div className="bg-background p-10 lg:p-12">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">New Delhi Office</div>
            <div className="mt-3 text-base font-semibold leading-snug text-foreground">
              New Delhi Office
            </div>
            <address className="mt-2 not-italic text-sm leading-relaxed text-muted-foreground">
              706, Prakashdeep Building<br />
              Tolstoy Marg<br />
              New Delhi – 110001
            </address>
          </div>

          {/* Corporate Office */}
          <div className="bg-background p-10 lg:p-12">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Corporate Office</div>
            <div className="mt-3 text-base font-semibold leading-snug text-foreground">
              Corporate Office — Delhi NCR
            </div>
            <address className="mt-2 not-italic text-sm leading-relaxed text-muted-foreground">
              Plot no. 12B, First Floor<br />
              Vaishali Sector 3A, Main Gautam Palvi Road<br />
              Ghaziabad, Uttar Pradesh – 201010
            </address>
          </div>
        </div>
      </section>

      {/* ── Form + Office Map ──────────────────────────────────── */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
          {/* Left: consultation form */}
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Consultation request — ${fd.get("name")}`);
              const body = encodeURIComponent(
                `Name: ${fd.get("name")}\nPhone: ${fd.get("phone")}\nEmail: ${fd.get("email")}\n\nMatter:\n${fd.get("message")}`,
              );
              window.location.href = `mailto:mail@nbassociates.net?subject=${subject}&body=${body}`;
            }}
          >
            <h2 className="text-2xl font-semibold tracking-tight">Schedule a Consultation</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name" label="Full Name" required />
              <Field name="phone" label="Phone" type="tel" required />
            </div>
            <Field name="email" label="Email" type="email" required />
            <div>
              <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Brief description of your matter
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-navy"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex h-12 items-center justify-center self-start bg-navy px-8 text-sm font-medium text-navy-foreground hover:bg-navy-hover"
            >
              Send Request
            </button>
            <p className="text-xs text-muted-foreground">
              Submitting this form opens your email client with the details pre-filled.
            </p>
          </form>

          {/* Right: office-switching map only */}
          <OfficeMap variant="light" mapHeight="h-[320px] lg:h-[380px]" />
        </div>
      </section>
    </main>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-navy"
      />
    </div>
  );
}
