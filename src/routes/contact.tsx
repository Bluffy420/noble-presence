import { createFileRoute } from "@tanstack/react-router";
import { BackgroundPattern } from "@/components/BackgroundPattern";
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
      {/* ── Hero — clean white, dark slate headline ── */}
      <section
        className=""
        style={{
          background: "#ffffff",
          padding: "100px 24px 80px",
        }}
      >
        <BackgroundPattern type="floating-shapes" variant="light" />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#1d4ed8",
              margin: "0 0 24px 0",
            }}
          >
            Consult Us
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#0F172A",
              margin: "0 0 24px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Speak with{" "}
            <span style={{ color: "#1d4ed8" }}>NB Associates</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.6,
              color: "#64748b",
              margin: "0 0 28px 0",
            }}
          >
            Your legal matter deserves discrete, dedicated attention.
          </p>

          {/* Body copy */}
          <p
            style={{
              fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#64748b",
              margin: "0 0 48px 0",
              maxWidth: "600px",
            }}
          >
            Reach out for a confidential consultation. Our team will respond
            within one business day&mdash;
            <a
              href="mailto:mail@nbassociates.net"
              style={{
                color: "#1d4ed8",
                textDecoration: "none",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              email us directly
            </a>
            .
          </p>

          {/* Thin divider */}
          <div
            style={{
              height: "1px",
              background: "#e2e8f0",
              width: "100%",
              marginBottom: "20px",
            }}
          />

          {/* CTA row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#64748b",
              }}
            >
              Corporate &middot; Litigation &middot; Arbitration
            </span>
            <a
              href="mailto:mail@nbassociates.net"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "44px",
                padding: "0 32px",
                background: "#1d4ed8",
                color: "#ffffff",
                fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1e40af";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1d4ed8";
              }}
            >
              Speak to Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact details — light surface ── */}
      <section style={{ background: "#f8fafc", padding: "0 24px 80px" }}>
        <BackgroundPattern type="concentric-rings" variant="light" />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "48px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Phone */}
            <div>
              <p
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#1d4ed8",
                  margin: "0 0 8px 0",
                }}
              >
                Phone
              </p>
              <a
                href="tel:+919811899279"
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#0F172A",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "6px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#1d4ed8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#0F172A";
                }}
              >
                +91 98118 99279
              </a>
              <p
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: "#64748b",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Mon–Sat &middot; 10:00 to 19:00 IST
              </p>
            </div>

            {/* Email */}
            <div>
              <p
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#1d4ed8",
                  margin: "0 0 8px 0",
                }}
              >
                Email
              </p>
              <a
                href="mailto:mail@nbassociates.net"
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#0F172A",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "6px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#1d4ed8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#0F172A";
                }}
              >
                mail@nbassociates.net
              </a>
              <p
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: "#64748b",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Replies within one business day.
              </p>
            </div>

            {/* New Delhi */}
            <div>
              <p
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#1d4ed8",
                  margin: "0 0 8px 0",
                }}
              >
                New Delhi
              </p>
              <p
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#0F172A",
                  margin: "0 0 6px 0",
                }}
              >
                New Delhi Office
              </p>
              <p
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: "#64748b",
                  margin: 0,
                  lineHeight: 1.7,
                  fontStyle: "normal",
                }}
              >
                706, Prakashdeep Building<br />
                Tolstoy Marg<br />
                New Delhi – 110001
              </p>
            </div>

            {/* Corporate */}
            <div>
              <p
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#1d4ed8",
                  margin: "0 0 8px 0",
                }}
              >
                Corporate
              </p>
              <p
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#0F172A",
                  margin: "0 0 6px 0",
                }}
              >
                Corporate Office — Delhi NCR
              </p>
              <p
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: "#64748b",
                  margin: 0,
                  lineHeight: 1.7,
                  fontStyle: "normal",
                }}
              >
                Plot no. 12B, First Floor<br />
                Vaishali Sector 3A, Main Gautam Palvi Road<br />
                Ghaziabad, Uttar Pradesh – 201010
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Office Map — dark slate section ── */}
      <section className="bg-dark-gradient" style={{ background: "#0F172A" }}
      >
        <BackgroundPattern type="network-graph" variant="dark" />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "80px 24px",
          }}
        >
          {/* Form */}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
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
            <div>
              <span
                style={{
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#1d4ed8",
                }}
              >
                Get in Touch
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "#ffffff",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Schedule a Consultation
            </h2>
            <p
              style={{
                fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.6)",
                margin: "0 0 8px 0",
              }}
            >
              Tell us about your legal matter and we&rsquo;ll get back to you
              within one business day.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              <FieldDark name="name" label="Full Name" required />
              <FieldDark name="phone" label="Phone" type="tel" required />
            </div>
            <FieldDark name="email" label="Email" type="email" required />
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Brief description of your matter
              </label>
              <textarea
                name="message"
                required
                rows={6}
                style={{
                  width: "100%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "4px",
                  background: "rgba(255,255,255,0.05)",
                  padding: "12px 16px",
                  fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                  fontSize: "1rem",
                  color: "#ffffff",
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
                placeholder="Describe your legal matter briefly..."
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#1d4ed8";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "44px",
                padding: "0 28px",
                background: "#1d4ed8",
                color: "#ffffff",
                fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                borderRadius: "4px",
                alignSelf: "flex-start",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1e40af";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1d4ed8";
              }}
            >
              Send Request
            </button>
            <p
              style={{
                fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.4)",
                margin: 0,
              }}
            >
              Submitting this form opens your email client with the details pre-filled.
            </p>
          </form>

          {/* Map */}
          <div style={{ marginTop: "60px" }}>
            <p
              style={{
                fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 16px 0",
              }}
            >
              Our Offices
            </p>
            <OfficeMap variant="dark" mapHeight="h-[320px] lg:h-[380px]" />
          </div>
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
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#64748b",
        }}
      >
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        style={{
          width: "100%",
          border: "1px solid #e2e8f0",
          borderRadius: "4px",
          background: "#ffffff",
          padding: "12px 16px",
          fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
          fontSize: "1rem",
          color: "#0f172a",
          outline: "none",
          boxSizing: "border-box",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#1d4ed8";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#e2e8f0";
        }}
      />
    </div>
  );
}

function FieldDark({
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
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        style={{
          width: "100%",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "4px",
          background: "rgba(255,255,255,0.05)",
          padding: "12px 16px",
          fontFamily: "'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif",
          fontSize: "1rem",
          color: "#ffffff",
          outline: "none",
          boxSizing: "border-box",
        }}
        placeholder={`Your ${label.toLowerCase()}`}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#1d4ed8";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
        }}
      />
    </div>
  );
}